import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Button } from "react-native-elements";
import { View, Text, ActivityIndicator } from 'react-native';
import CardButtons from '../../components/CardButtons';
import style from './style';
import { Colors } from '../../theme';
import Header from '../../components/Header';
import { CARDS_NAME } from '../../constant';
import BackCard from '../../components/BackCard';
import { CARDS_INFO } from '../../constant/cards';

const flip = {
  0: {
    rotateY: '0deg'
  },
  1: {
    rotateY: '180deg'
  }
}

class Reward extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipping: false,
      isFront: true,
      points: 0,
      solve: 0,
      isLoading: false,
    }
  }

  componentDidMount() {
    let points = global.hayft_points
    if(points !== undefined || points !== null) {
      this.setState({
        points: global.hayft_points,
        solve: global.hayft_solve,
      });
    }
  }

  handleRotate = () => {
    this.setState({
      isFlipping: true,
      isFront: !this.state.isFront
    })
    setTimeout(() => {
      this.setState({isFlipping: false})
    }, 500)
  }

  handleExchange() {
    this.setState({
      isLoading: true,
    });
    if(Number.parseInt(this.state.points) >= 10) {
      setTimeout(() => {
        global.hayft_solve = global.hayft_solve + 10;
        global.hayft_points = global.hayft_points - 10;
        this.setState({
          points: global.hayft_points,
          solve: global.hayft_solve,
          isLoading: false
        });
        alert('Successfully Exchanged 10 points!');
      }, 1500);
    } else {
      this.setState({
        isLoading: false
      });
      alert('You dont have enough points!');
    }
  }

  render() {
    return (
      <View style={style.container}>
        <Animatable.View animation={this.state.isFlipping ? flip : ''} style={style.cardContainer} duration={1000}>
          {this.state.isFront && (
            <CardButtons
              isShowFAIcon
              icon={"exchange"}
              onPressTRC= {this.handleRotate} // info
              onPressBRC= {this.handleRotate} // flip
              onPressTLC= {() => this.handleExchange()}
              onPressBLC= {() =>
                this.props.navigation.state.params.from === CARDS_NAME.reward ?
                  this.props.navigation.pop(4) : this.props.navigation.goBack()
              }
            />
          )}
          {this.state.isFront ?
            <Header
              title={CARDS_INFO.my_balance.title}
              style={{
                marginTop: 40,
                height: 100,
                justifyContent: 'flex-start',
                paddingTop: 20,
              }}
            /> :
            <BackCard
              title={CARDS_INFO.my_balance.title}
              desc={CARDS_INFO.my_balance.desc}
              onClose={this.handleRotate}
            />
          }
          {this.state.isFront &&
          <View style={style.balanceContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={style.balanceTypeIcon}>{'★'}</Text>
              <Text style={[style.balanceTypeText, { padding: 5 }]}>{this.state.points}</Text>
              <Text style={style.balanceTypeText}>{'Points'}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={style.balanceTypeIcon}>{'S'}</Text>
              <Text style={[style.balanceTypeText, { padding: 5 }]}>{this.state.solve}</Text>
              <Text style={style.balanceTypeText}>{'Solve'}</Text>
            </View>
          </View>}
          {this.state.isFront &&
          <View style={style.messageContainer}>
            <Text style={style.message}>
            Congrats! you have {Math.floor(this.state.points / 100.0) * 100} or more points,
            which can exchange into solve. {'\n'}
            Try it now!</Text>
          </View>}
          {this.state.isFront &&
          <View style={style.buttonContainer}>
            <Text style={style.balanceTypeText}>10 Points</Text>
            {!this.state.isLoading ?
              <Button
                title="Exchange"
                textStyle={{ fontSize: 16 }}
                buttonStyle={{
                  height: 40,
                  backgroundColor: Colors.primaryColor,
                  width: 120,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}
                onPress={() => this.handleExchange()}
              /> :
              <ActivityIndicator
                animating={this.state.isLoading}
                size={"large"}
                color={Colors.primaryColor}
              />
            }
            <Text style={style.balanceTypeText}>10 Solve</Text>
          </View>}
        </Animatable.View>
      </View>
    )
  }
}

export default Reward;

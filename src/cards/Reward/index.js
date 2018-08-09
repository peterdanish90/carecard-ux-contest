import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Button } from "react-native-elements";
import { View, Text } from 'react-native';
import CardButtons from '../../components/CardButtons';
import style from './style';
import { CARDS_NAME } from '../../constant';
import { Colors } from '../../theme';
import Header from '../../components/Header';
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
      // myMood: props.navigation.state.params.activeMood,
      // animoji: props.navigation.state.params.animoji,
    }
  }

  componentDidMount() {
    global.hayft_solve = 10;
    global.hayft_points = 250;
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

  render() {
    return (
      <View style={style.container}>
        <Animatable.View animation={this.state.isFlipping ? flip : ''} style={style.cardContainer} duration={1000}>
          {this.state.isFront && (
            <CardButtons
              isShowTL
              icon={"wallet"}
              // flip={this.handleRotate}
              onPressTRC= {this.handleRotate}
              onPressBRC= {this.handleRotate}
              onPressTLC= {() => this.props.navigation.navigate(CARDS_NAME.my_balance, { from: CARDS_NAME.reward })}
              onPressBLC= {() => this.props.navigation.goBack()}
            />
          )}
          {this.state.isFront ?
            <Header
              title={CARDS_INFO.reward.title}
              style={{
                marginTop: 40,
                height: 100,
                justifyContent: 'flex-start',
                paddingTop: 20,
              }}
            /> :
            <BackCard
              title={CARDS_INFO.reward.title}
              desc={CARDS_INFO.reward.desc}
              onClose={this.handleRotate}
            />
          }
          {this.state.isFront &&
          <View style={style.earnPointContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={style.pointText}>{'1'}</Text>
              <Text style={style.maxPointText}>{' / 10'}</Text>
            </View>
            <Text style={style.message}>{'Points earned!'}</Text>
          </View>
          }
          {this.state.isFront &&
          <View style={style.messageContainer}>
            <Text style={style.message}> Keep on selecting your mood everyday to exchange each 10 points to 10 solve. </Text>
          </View>}
          {this.state.isFront &&
          <View style={style.buttonContainer}>
            <Button
              title="View Balance"
              textStyle={{ fontSize: 16 }}
              buttonStyle={{
                height: 40,
                backgroundColor: Colors.primaryColor,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}
              onPress={() => this.props.navigation.navigate(CARDS_NAME.my_balance, { from: CARDS_NAME.reward })}
            />
          </View>}
        </Animatable.View>
      </View>
    )
  }
}

export default Reward;

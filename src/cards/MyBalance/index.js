import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Button } from "react-native-elements";
import { View, Text } from 'react-native';
import CardButtons from '../../components/CardButtons';
import style from './style';
import { CARDS_NAME } from '../../constant';
import { Colors } from '../../theme';
import Header from '../../components/Header';

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
      points: 340,
      solve: 10,
    }
  }

  handleRotate = () => {
    this.setState({
      isFlipping: true,
      isFront: !this.state.isFront
    })
    setTimeout(() => {
      this.setState({isFlipping: false})
    }, 1000)
  }

  render() {
    return (
      <View style={style.container}>
        <Animatable.View animation={this.state.isFlipping ? flip : ''} style={style.cardContainer} duration={1000}>
          {!this.state.isFlipping && (
            <CardButtons flip={this.handleRotate}/>
          )}
          <Header title="MY BALANCE" />
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
          </View>
          <View style={style.messageContainer}>
            <Text style={style.message}>
            Congrats! you have {Math.floor(this.state.points / 100.0) * 100}+ points,
            which can exchange into solve. {'\n'}
            Try it now!</Text>
          </View>
          <View style={style.buttonContainer}>
            <Text style={style.balanceTypeText}>10 Points</Text>
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
              // onPress={() => null}
            />
            <Text style={style.balanceTypeText}>10 Solve</Text>
          </View>
        </Animatable.View>
      </View>
    )
  }
}

export default Reward;

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
    }, 1000)
  }

  render() {
    return (
      <View style={style.container}>
        <Animatable.View animation={this.state.isFlipping ? flip : ''} style={style.cardContainer} duration={1000}>
          {!this.state.isFlipping && (
            <CardButtons flip={this.handleRotate}/>
          )}
          <Header title="TODAY'S REWARD" />
          <View style={style.earnPointContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={style.pointText}>{'1'}</Text>
              <Text style={style.maxPointText}>{' / 10'}</Text>
            </View>
            <Text style={style.message}>{'Points earned!'}</Text>
          </View>
          <View style={style.messageContainer}>
            <Text style={style.message}> Keep on selecting your mood everyday to exchange each 10 points to 10 solve. </Text>
          </View>
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
              onPress={() => this.props.navigation.navigate(CARDS_NAME.my_balance)}
            />
          </View>
        </Animatable.View>
      </View>
    )
  }
}

export default Reward;

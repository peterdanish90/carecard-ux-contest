import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Button } from "react-native-elements";
import { View, Text } from 'react-native';
import CardButtons from '../../components/CardButtons';
import style from './style';
import { animojis } from '../../local';
import CaptionImage from '../../components/CaptionImage';
import { CARDS_NAME } from '../../constant';
import { Colors } from '../../theme';

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
      myMood: props.navigation.state.params.myMood,
      animoji: props.navigation.state.params.animoji,
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
          <CaptionImage
            animoji={{
              name: `${this.state.myMood.name.toUpperCase()} ${this.state.animoji.name.toUpperCase()}`,
              icon: this.state.myMood.icon,
            }}
            containerStyle={{ marginTop: 100 }}
            iconStyle={style.icon}
            textStyle={style.imageCaption}
          />
          <View style={style.messageContainer}>
            <Text style={style.message}>{this.state.myMood.message}</Text>
          </View>
          <View style={style.buttonContainer}>
            <Button
              title="View Reward"
              textStyle={{ fontSize: 16 }}
              buttonStyle={{
                height: 40,
                backgroundColor: Colors.primaryColor,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}
              onPress={() => this.props.navigation.navigate(CARDS_NAME.reward, {
                myMood: props.navigation.state.params.myMood,
                animoji: props.navigation.state.params.animoji,
              })}
            />
          </View>
        </Animatable.View>
      </View>
    )
  }
}

export default Reward;

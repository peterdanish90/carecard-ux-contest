import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Button } from "react-native-elements";
import { View, Text, Image } from 'react-native';
import CardButtons from '../../components/CardButtons';
import style from './style';
import { animojis } from '../../local';

const flip = {
  0: {
    rotateY: '0deg'
  },
  1: {
    rotateY: '180deg'
  }
}

class ChooseAvatar extends Component {
  constructor() {
    super()
    this.state = {
      isFlipping: false,
      isFront: true
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
          <Text>Choose Avatar</Text>
          <Button
            title="GOTO 2"
            onPress={() => this.props.navigation.navigate("MyMood")}
          />
        </Animatable.View>
      </View>
    )
  }
}

export default ChooseAvatar;
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
import { View } from 'react-native'
import CardButtons from '../../components/CardButtons';
import style from './style'

const flip = {
  0: {
    rotateY: '0deg'
  },
  1: {
    rotateY: '180deg'
  }
}

class Card extends Component {
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
        </Animatable.View>
      </View>
    )
  }
}

export default Card;

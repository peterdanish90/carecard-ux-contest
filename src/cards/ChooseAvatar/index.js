import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import Header from '../../components/Header';
import { View } from 'react-native';
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

class ChooseAvatar extends Component {
  constructor() {
    super()
    this.state = {
      isFlipping: false,
      isFront: true,
      animojis: Array.from(animojis),
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
            <CardButtons
              // flip={this.handleRotate}
              onPressTRC= {this.handleRotate} // info
              onPressBRC= {this.handleRotate} // flip
              onPressBLC= {() => this.props.navigation.navigate(CARDS_NAME.my_balance, { from: CARDS_NAME.choose_avatar })}
            />
          )}
          <Header
            title="CHOOSE YOUR AVATAR"
            style={{
              marginTop: 40,
              height: 100,
              justifyContent: 'flex-start',
              paddingTop: 20,
            }}
          />
          <View
            style={{
              height: 250,
              alignSelf: 'stretch',
              backgroundColor: 'transparent',
            }}
          >
            <Swiper
              showsButtons={false}
              loop
              activeDotStyle={{
                backgroundColor: Colors.primaryColor,
              }}
            >
              {
                this.state.animojis.map((animoji, index) => {
                  return (
                    <CaptionImage
                      key={animoji.face_acronym}
                      animoji={animoji}
                      onPress={animojiData => this.props.navigation.navigate(CARDS_NAME.my_mood, { animoji: animojiData })}
                    />
                  );
                })

              }
            </Swiper>
          </View>
        </Animatable.View>
      </View>
    )
  }
}

export default ChooseAvatar;
// https://exp.host/@vinaysinghsatna01/hayft
// https://expo.io/artifacts/645c0c52-5558-4393-8058-c0f9b2540dbf

import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Button } from "react-native-elements";
import { View, Text, Share } from 'react-native';
import CardButtons from '../../components/CardButtons';
import style from './style';
import CaptionImage from '../../components/CaptionImage';
import { CARDS_NAME } from '../../constant';
import { Colors } from '../../theme';
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
    }, 500)
  }

  handleShare = () => {
    const title = `Today I am ${this.state.myMood.name.toUpperCase()} ${this.state.animoji.name.toUpperCase()}`;
    Share.share({
      message: `${title}\n\n${this.state.myMood.message}`,
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <View style={style.container}>
        <Animatable.View animation={this.state.isFlipping ? flip : ''} style={style.cardContainer} duration={1000}>
          {this.state.isFront && (
            <CardButtons
              isShowTL
              icon={"share-variant"}
              // flip={this.handleRotate}
              onPressTRC= {this.handleRotate} // info
              onPressBRC= {this.handleRotate} // flip
              onPressTLC= {this.handleShare} // share
              onPressBLC= {() => this.props.navigation.goBack()}
            />
          )}
          {
            this.state.isFront ?
            <CaptionImage
              animoji={{
                name: `${this.state.myMood.name.toUpperCase()} ${this.state.animoji.name.toUpperCase()}`,
                icon: this.state.myMood.icon,
              }}
              containerStyle={{ marginTop: 100 }}
              iconStyle={style.icon}
              textStyle={style.imageCaption}
            /> :
            <BackCard
              title={CARDS_INFO.active_mood.title}
              desc={CARDS_INFO.active_mood.desc}
              onClose={this.handleRotate}
            />
          }
          {
            this.state.isFront &&
            <View style={style.messageContainer}>
              <Text style={style.message}>{this.state.myMood.message}</Text>
            </View>
          }
          {
            this.state.isFront &&
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
                  myMood: this.props.navigation.state.params.myMood,
                  animoji: this.props.navigation.state.params.animoji,
                })}
              />
            </View>
          }
        </Animatable.View>
      </View>
    )
  }
}

export default Reward;

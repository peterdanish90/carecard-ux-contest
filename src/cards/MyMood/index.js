import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
import { View, ScrollView } from 'react-native'
import CardButtons from '../../components/CardButtons';
import style from './style';
import { animojis } from '../../local';
import Header from '../../components/Header';
import CaptionImage from '../../components/CaptionImage';
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

class MyMood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipping: false,
      isFront: true,
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

  render() {
    return (
      <View style={style.container}>
        <Animatable.View animation={this.state.isFlipping ? flip : ''} style={style.cardContainer} duration={1000}>
          {this.state.isFront && (
            <CardButtons
              // flip={this.handleRotate}
              onPressTRC= {this.handleRotate} // info
              onPressBRC= {this.handleRotate} // flip
              onPressBLC= {() => this.props.navigation.goBack()}
            />
          )}
          {
            this.state.isFront ?
            <Header
              style={{ height: 60, marginTop: 40 }}
              title={CARDS_INFO.my_mood.title}
            /> :
            <BackCard
              title={CARDS_INFO.my_mood.title}
              desc={CARDS_INFO.my_mood.desc}
              onClose={this.handleRotate}
            />
          }
          {
            this.state.isFront &&
            <View style={style.body}>
              <ScrollView>
                <View style={style.innerBody}>
                  {
                    this.state.animoji.moods.map(mood => {
                      return(
                        <CaptionImage
                          key={mood.mood_acronym}
                          animoji={mood}
                          onPress={myMood => this.props.navigation.navigate(CARDS_NAME.active_mood, {
                            myMood,
                            animoji: this.state.animoji,
                          })}
                          containerStyle={style.iconContainer}
                          iconStyle={style.icon}
                          textStyle={style.iconCaption}
                        />
                      );
                    })
                  }
                </View>
              </ScrollView>
            </View>
          }
        </Animatable.View>
      </View>
    )
  }
}

export default MyMood;

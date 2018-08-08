import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  icon: {
    width: 149,
    height: 149,
    resizeMode: 'contain',
  },
  text: {
    color: Colors.blackColor,
    fontSize: 18,
    padding: 10,
  }
});

const CaptionImage = (props) => {
 return(
    <TouchableOpacity
      style={[styles.container, props.containerStyle]}
      activeOpacity={0.7}
      onPress={() => props.onPress(props.animoji)}
    >
    <Image
      style={[styles.icon, props.iconStyle]}
      source={props.animoji.icon}
    />
    <Text style={[styles.text, props.textStyle]}>{props.animoji.name}</Text>
  </TouchableOpacity>
 );
}

export default CaptionImage;
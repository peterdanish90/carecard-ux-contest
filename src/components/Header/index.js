import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 140,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
  }
});

const Header = (props) => {
 return(
  <View style={[styles.container, props.style]}>
    <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
  </View>
 );
}

export default Header;
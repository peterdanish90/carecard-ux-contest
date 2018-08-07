import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import RootNavigator from './src/navigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'Care.Card Renderer', style: styles.title }}
          statusBarProps={{hidden: true}}
          backgroundColor="transparent"
        />
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    color: '#383b42',
    fontWeight: 'bold',
    fontSize: 18
  }
});

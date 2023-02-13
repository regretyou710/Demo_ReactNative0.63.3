import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img1} source={require('./img/img1.png')} />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  img1: {
    width: Dimensions.get('window').width,
    height: 150,
    marginVertical: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginVertical: 20,
  },
  logo: {width: 50, height: 50},
});

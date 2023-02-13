import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.h3}>掃一掃</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.h3}>付款</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.h3}>錢包</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.h3}>旅遊</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b38a',
    borderWidth: 1,
    borderColor: 'yellow',
    width: Dimensions.get('window').width / 3,
    height: 90,
  },
  h3: {
    fontSize: 24,
  },
});

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class NoAuth extends Component {
  render() {
    return (
      <View>
        <Text> 尚未登入 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

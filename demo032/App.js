import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View>
          <Text> textInComponent </Text>
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

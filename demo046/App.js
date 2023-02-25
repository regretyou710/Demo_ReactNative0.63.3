import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './components/routes';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

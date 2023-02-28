import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as StoreProvide} from 'react-redux';
import MainTab from './routes';
import store from './redux/store';

export default class App extends Component {
  render() {
    return (
      <StoreProvide store={store}>
        <NavigationContainer>
          <MainTab />
        </NavigationContainer>
      </StoreProvide>
    );
  }
}

const styles = StyleSheet.create({});

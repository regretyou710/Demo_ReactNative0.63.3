import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsStackScreen from '../screens/News';

const Stack = createNativeStackNavigator();

export default class NewsStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="NewsStack"
          component={NewsStackScreen}
          options={{
            title: '新聞',
            headerTitleStyle: {color: '#bfa'},
            headerStyle: {backgroundColor: 'tomato'},
            headerTintColor: 'skyblue',
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

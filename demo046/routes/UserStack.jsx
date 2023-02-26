import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserStackScreen from '../screens/User';
//hint(多選修改):選中User單字後ctrl + shift + l
const Stack = createNativeStackNavigator();

export default class UserStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="UserStack"
          component={UserStackScreen}
          options={{
            title: '用戶',
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

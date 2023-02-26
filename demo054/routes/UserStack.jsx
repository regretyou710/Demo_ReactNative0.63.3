import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserStackScreen from '../screens/User';
import AboutStackScreen from '../screens/User/About';
import LoginStackScreen from '../screens/User/Login';

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
            title: '個人中心',
            headerStyle: {backgroundColor: '#804040'},
            headerTintColor: '#fff',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AboutStack"
          component={AboutStackScreen}
          options={{
            title: '關於',
            headerStyle: {backgroundColor: '#804040'},
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="LoginStack"
          component={LoginStackScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

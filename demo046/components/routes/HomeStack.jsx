import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

export default class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="HomeStack">
        <Stack.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{
            title: '首頁',
            headerTitleStyle: {color: '#bfa'},
            headerStyle: {backgroundColor: 'tomato'},
            headerTintColor: 'skyblue',
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    alert('share');
                  }}>
                  <Text>分享</Text>
                </TouchableOpacity>
              );
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

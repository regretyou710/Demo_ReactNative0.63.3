import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTabScreen from './HomeStack';
import NewsTabScreen from './NewsStack';
import UserTabScreen from './UserStack';

const Tab = createBottomTabNavigator();

export default class MainTab extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={({route}) => {
          // console.log(route);

          return {
            tabBarStyle: {height: 50},
            tabBarLabelStyle: {fontSize: 14},
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({focused, color, size}) => {
              // console.log(focused, color, size);
              let iconName;

              if (route.name === 'HomeTab') {
                iconName = 'home';
              } else if (route.name === 'NewsTab') {
                iconName = 'newspaper-variant';
              } else if (route.name === 'UserTab') {
                iconName = 'account';
              }

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  color={color}
                  size={24}
                />
              );
            },
          };
        }}>
        <Tab.Screen
          name="HomeTab"
          component={HomeTabScreen}
          options={{
            title: '首頁',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="NewsTab"
          component={NewsTabScreen}
          options={{
            title: '新聞',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="UserTab"
          component={UserTabScreen}
          options={{
            title: '個人中心',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

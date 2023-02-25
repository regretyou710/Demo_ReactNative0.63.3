import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function OrderUnpayScreen(prop) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>待付款</Text>
    </View>
  );
}

// 函式參數解構賦值
function OrderPaidScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>已付款</Text>
    </View>
  );
}

function OrderReceiveScreen(prop) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>待收貨</Text>
    </View>
  );
}

function OrderFinishScreen(prop) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>待評價</Text>
    </View>
  );
}

const MTab = createMaterialTopTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MTab.Navigator
          tabBarPosition="bottom"
          screenOptions={{
            tabBarItemStyle: {borderWidth: 1, borderColor: 'tomato'},
            tabBarStyle: {backgroundColor: 'powderblue'},
            tabBarLabelStyle: {fontSize: 14},
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: '#000',
            tabBarShowIcon: true,
            // tabBarScrollEnabled: true,
          }}>
          <MTab.Screen
            name="OrderUnpay"
            component={OrderUnpayScreen}
            options={{
              title: '待付款',
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <MaterialCommunityIcons
                    name="cash-multiple"
                    color={color}
                    size={24}
                  />
                );
              },
            }}
          />
          <MTab.Screen
            name="OrderPaid"
            component={OrderPaidScreen}
            options={{
              title: '已付款',
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <MaterialCommunityIcons
                    name="cash-check"
                    color={color}
                    size={24}
                  />
                );
              },
            }}
          />
          <MTab.Screen
            name="OrderReceive"
            component={OrderReceiveScreen}
            options={{
              title: '待收貨',
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <MaterialCommunityIcons
                    name="package-variant-closed"
                    color={color}
                    size={24}
                  />
                );
              },
            }}
          />
          <MTab.Screen
            name="OrderFinish"
            component={OrderFinishScreen}
            options={{
              title: '待評價',
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <MaterialCommunityIcons
                    name="note-text-outline"
                    color={color}
                    size={24}
                  />
                );
              },
            }}
          />
        </MTab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

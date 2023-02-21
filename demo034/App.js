import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen(prop) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>Home Screen</Text>
    </View>
  );
}

// 函式參數解構賦值
function NewsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>News Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => {
            console.log(route);

            return {
              tabBarIcon: ({focused, color, size}) => {
                console.log(focused, color, size);
                let iconName;

                if (route.name === 'Home') {
                  iconName = '首頁';
                } else if (route.name === 'News') {
                  iconName = '新聞頁';
                }
                return <Text style={{color, fontSize: size}}>{iconName}</Text>;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            };
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="News"
            component={NewsScreen}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

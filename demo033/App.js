import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen(prop) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>Home Screen</Text>
      <Button
        title="跳至新聞頁"
        onPress={() => {
          prop.navigation.navigate('News');
        }}></Button>
    </View>
  );
}

// 函式參數解構賦值
function NewsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>News Screen</Text>
      <Button
        title="跳至首頁"
        onPress={() => {
          navigation.navigate('Home');
        }}></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="News">
          <Stack.Screen
            name="Home"
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
          <Stack.Screen
            name="News"
            component={NewsScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';

function HomeScreen(prop) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>Home Screen</Text>
      <Button
        title="透過按鈕觸發Open Drawer"
        onPress={() => {
          prop.navigation.openDrawer();
        }}
      />
      <Button
        title="透過按鈕觸發Close Drawer"
        onPress={() => {
          prop.navigation.closeDrawer();
        }}
      />
      <Button
        title="透過按鈕觸發Toggle Drawer"
        onPress={() => {
          prop.navigation.toggleDrawer(); //openDrawer+closeDrawer
        }}
      />
    </View>
  );
}

// 函式參數解構賦值
function NewsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>News Screen</Text>
      <Button
        title="跳回首頁"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="透過按鈕觸發Open Drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {width: 200, backgroundColor: '#dbf'},
            drawerPosition: 'right',
            // drawerType: 'slide',
            drawerActiveTintColor: 'red',
            drawerItemStyle: {marginVertical: 50},
          }}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: '首頁',
              drawerIcon: ({focused, color, size}) => {
                let iconName = focused ? 'home' : 'home-outline';
                return <Ionicons name={iconName} color={color} size={size} />;
              },
            }}
          />
          <Drawer.Screen
            name="News"
            component={NewsScreen}
            options={{
              title: '新聞',
              drawerIcon: ({focused, color, size}) => {
                let iconName = focused ? 'newspaper' : 'newspaper-outline';
                return <Ionicons name={iconName} color={color} size={size} />;
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

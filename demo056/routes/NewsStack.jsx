import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
import NewsStackScreen from '../screens/News';
import NoAuthStackScreen from '../screens/NoAuth';

const Stack = createNativeStackNavigator();

class NewsStack extends Component {
  componentDidMount() {
    // this._navListener = this.props.navigation.addListener('focus', () => {
    //   //todo
    // });
  }

  componentWillUnmount() {
    // this._navListener.remove();
  }

  render() {
    return (
      <Stack.Navigator>
        {this.props.isLogin ? (
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
        ) : (
          <Stack.Screen
            name="NoAuthStack"
            component={NoAuthStackScreen}
            options={{
              title: '錯誤頁',
            }}
          />
        )}
      </Stack.Navigator>
    );
  }
}

export default connect((state) => {
  return {isLogin: state.User.isLogin};
})(NewsStack);

const styles = StyleSheet.create({});

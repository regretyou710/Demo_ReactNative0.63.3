import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    color: 'green',
  },
});

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}> textInComponent </Text>
        <Text style={[{fontSize: 20}, {color: 'red'}]}> textInComponent </Text>
        
        {/* 以陣列方式套用相同屬性的樣式，後面的優先級比較高 */}
        <Text style={[{color: 'green'}, {color: 'red'}]}>textInComponent</Text>
        
        <Text style={[style.h1, style.h2]}> textInComponent </Text>
      </View>
    );
  }
}

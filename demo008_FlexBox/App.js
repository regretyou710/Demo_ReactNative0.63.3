import React, {Component} from 'react';
import {Text, StyleSheet, View,ScrollView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.h3}>主軸方向</Text>
        <ScrollView>
          <Text style={styles.h3}>flexDirection:'column' (default)</Text>
          <View style={styles.list}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>
          <Text style={styles.h3}>flexDirection:'column-reverse'</Text>
          <View style={[styles.list, {flexDirection: 'column-reverse'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>
          <Text style={styles.h3}>flexDirection:'row'</Text>
          <View style={[styles.list, {flexDirection: 'row'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>
          <Text style={styles.h3}>flexDirection:'row-reverse'</Text>
          <View style={[styles.list, {flexDirection: 'row-reverse'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h3: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  list: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#dfb',
    padding: 4,
    textAlign: 'center',
  },
});

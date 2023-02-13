import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default class JustifyContent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.h3}>項目在主軸上的對齊方式</Text>
        <View>
          <Text style={styles.h3}>justifyContent:'flex-start' (default)</Text>
          <View style={[styles.list, {justifyContent: 'flex-start'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>

          <Text style={styles.h3}>justifyContent:'center'</Text>
          <View style={[styles.list, {justifyContent: 'center'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>

          <Text style={styles.h3}>justifyContent:'flex-end'</Text>
          <View style={[styles.list, {justifyContent: 'flex-end'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>

          <Text style={styles.h3}>justifyContent:'space-around'</Text>
          <View style={[styles.list, {justifyContent: 'space-around'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>

          <Text style={styles.h3}>justifyContent:'space-between'</Text>
          <View style={[styles.list, {justifyContent: 'space-between'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>
        </View>
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

import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default class AlignItems extends Component {
  render() {
    return (
      <View>
        <Text style={styles.h3}>項目在交叉軸上的對齊方式</Text>
        <View>
          <Text style={styles.h3}>alignItems:'flex-start' (default)</Text>
          <View style={[styles.list, {alignItems: 'flex-start'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>

          <Text style={styles.h3}>alignItems:'center'</Text>
          <View style={[styles.list, {alignItems: 'center'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>

          <Text style={styles.h3}>alignItems:'flex-end'</Text>
          <View style={[styles.list, {alignItems: 'flex-end'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>

          <Text style={styles.h3}>alignItems:'stretch'</Text>
          <View style={[styles.list, {alignItems: 'stretch'}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={styles.item}>item2</Text>
            <Text style={styles.item}>item3</Text>
          </View>

          <Text style={styles.h3}>alignItems:'baseline'</Text>
          <View style={[styles.list, {alignItems: 'baseline', height: 250}]}>
            <Text style={styles.item}>item1</Text>
            <Text style={[styles.item, {fontSize: 40, height: 80}]}>item2</Text>
            <Text style={[styles.item, {fontSize: 50, height: 100}]}>
              item3
            </Text>
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

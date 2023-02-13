import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default class Flex extends Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        <Text style={styles.h3}>項目在主軸的尺寸占比</Text>
        <View>
          <Text style={styles.h3}>flexRow 1:1:1</Text>
          <View style={[styles.list, {flexDirection: 'row'}]}>
            <Text style={[styles.item, {flex: 1}]}>item1(1)</Text>
            <Text style={[styles.item, {flex: 1}]}>item2(1)</Text>
            <Text style={[styles.item, {flex: 1}]}>item3(1)</Text>
          </View>

          <Text style={styles.h3}>flexRow 1:2:3</Text>
          <View style={[styles.list, {flexDirection: 'row'}]}>
            <Text style={[styles.item, {flex: 1}]}>item1(1)</Text>
            <Text style={[styles.item, {flex: 2}]}>item2(2)</Text>
            <Text style={[styles.item, {flex: 3}]}>item3(3)</Text>
          </View>

          <Text style={styles.h3}>flexColumn 1:1:1</Text>
          <View style={[styles.list, {flexDirection: 'column'}]}>
            <Text style={[styles.item, {flex: 1}]}>item1(1)</Text>
            <Text style={[styles.item, {flex: 1}]}>item2(1)</Text>
            <Text style={[styles.item, {flex: 1}]}>item3(1)</Text>
          </View>

          <Text style={styles.h3}>flexColumn 1:2:3</Text>
          <View style={[styles.list, {flexDirection: 'column'}]}>
            <Text style={[styles.item, {flex: 1}]}>item1(1)</Text>
            <Text style={[styles.item, {flex: 2}]}>item2(2)</Text>
            <Text style={[styles.item, {flex: 3}]}>item3(3)</Text>
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

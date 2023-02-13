import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            console.log('觸碰高亮');
          }}>
          <View style={styles.item}>
            <Text>觸碰高亮</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity
          onPress={() => {
            console.log('觸碰透明度變化');
          }}>
          <View style={styles.item}>
            <Text>觸碰透明度變化</Text>
          </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          onPress={() => {
            console.log('觸碰無反應');
          }}>
          <View style={styles.item}>
            <Text>觸碰無反應</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  item: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    marginBottom: 10,
  },
});

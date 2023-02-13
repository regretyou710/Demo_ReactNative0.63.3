import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Platform,
} from 'react-native';

export default class App extends Component {
  render() {
    if (Platform.OS === 'android') alert('安卓');
    else if (Platform.OS === 'ios') alert('IOS');

    return (
      <View style={styles.container}>
        {/* 數字指定大小，只在android應用下有效 */}
        <ActivityIndicator color="blue" size={'small'} />
        <ActivityIndicator color="green" size={'large'} />
        <ActivityIndicator color="#00d0ff" size={70} />
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
});

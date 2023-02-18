import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import Storage from './Util/Storage';

export default class App extends Component {
  storeData = async (key, value) => {
    try {
      await Storage.set(key, value);
    } catch (error) {
      alert(error);
    }
  };

  getData = async (key) => {
    try {
      const value = await Storage.get(key);
      if (value !== null) {
        // value previously stored
        alert(value);
      }
    } catch (error) {
      alert(error);
    }
  };

  updateData = (key, value) => {
    Storage.update(key, value).catch((error) => {
      alert(error);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="儲存"
          onPress={() => this.storeData('@storage_Key', 'Hi RN')}
        />
        <Button title="獲取" onPress={() => this.getData('@storage_Key')} />
        <Button
          title="更新"
          onPress={() => this.updateData('@storage_Key', 'Hello React-native')}
        />
        <Button title="刪除" onPress={() => Storage.delete('@storage_Key')} />
        <Button title="清除" onPress={() => Storage.clear()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

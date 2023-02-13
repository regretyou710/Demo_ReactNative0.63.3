import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert, Button} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="調用原生alert方法"
          onPress={() => {
            alert('我是一個按鈕');
          }}
        />

        <Button
          title="調用Alert核心組件"
          color="red"
          onPress={() => {
            Alert.alert('我是一個按鈕');
          }}
        />

        <Button
          title="操作Alert核心組件"
          color="green"
          onPress={() => {
            Alert.alert('提示標題', '提示內容', [
              {
                text: '確定',
                style: 'default',
                onPress: () => {
                  console.log('ok');
                },
              },
              {
                text: '取消',
                style: 'cancel',
                onPress: () => {
                  console.log('cancel');
                },
              },
            ]);
          }}
        />

        <Button
          title="操作Alert核心組件"
          color="tomato"
          onPress={() => {
            Alert.alert('更新提示', '發現新版本，是否現在更新?', [
              {
                text: '稍後再試',
                onPress: () => {
                  console.log('稍後再試');
                },
              },
              {
                text: '確定',
                style: 'default',
                onPress: () => {
                  console.log('ok');
                },
              },
              {
                text: '取消',
                style: 'cancel',
                onPress: () => {
                  console.log('cancel');
                },
              },
            ]);
          }}
        />
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

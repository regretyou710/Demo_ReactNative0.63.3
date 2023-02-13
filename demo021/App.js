import React, {Component} from 'react';
import {Animated, Text, View, StyleSheet, Button} from 'react-native';

class App extends Component {
  // fadeAnim:將透明度設置為0
  state = {
    fadeAnim: new Animated.Value(0),
  };

  // fadeIn = () => {
  //   // Will change fadeAnim value to 1 in 5 seconds
  //   Animated.timing(this.state.fadeAnim, {
  //     toValue: 1, // 目標值
  //     duration: 5000, // 動畫執行時間
  //     useNativeDriver: true, // 啟動原生方式渲染動畫，執行效率更高
  //   }).start();
  // };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1, // 目標值
      duration: 5000, // 動畫執行時間
      useNativeDriver: true, // 啟動原生方式渲染動畫，執行效率更高
    }).start(() => {
      alert('淡入'); // 動畫執行結束後的回調函數
    });
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => {
      alert('淡出'); // 動畫執行結束後的回調函數
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: this.state.fadeAnim, // Bind opacity to animated value
            },
          ]}>
          <Text style={styles.fadingText}>Fading View!</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="Fade In" onPress={this.fadeIn} />
          <Button title="Fade Out" onPress={this.fadeOut} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});

export default App;

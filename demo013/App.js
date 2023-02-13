import React, {Component} from 'react';
import {Text, StyleSheet, View, Switch, StatusBar} from 'react-native';

export default class App extends Component {
  state = {
    hideStatusBar: false,
  };

  toggleStatusBar = () => {
    this.setState({hideStatusBar: !this.state.hideStatusBar});
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={this.state.hideStatusBar}
          backgroundColor="red" //僅在android應用下有效
          barStyle="dark-content"
        />

        <Switch
          trackColor={{false: '#666', true: '#999'}}
          thumbColor={this.state.hideStatusBar ? 'red' : 'white'}
          value={this.state.hideStatusBar}
          onValueChange={this.toggleStatusBar}
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

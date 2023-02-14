import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class App extends Component {
  state = {color: 'white'};

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.color}]}>
        <Picker
          selectedValue={this.state.color}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({color: itemValue})
          }
          mode={'dropdown'} // 只在android有效
          style={{width: 120, height: 50}}>
          <Picker.Item label="白色" value="white" />
          <Picker.Item label="紅色" value="red" />
        </Picker>
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

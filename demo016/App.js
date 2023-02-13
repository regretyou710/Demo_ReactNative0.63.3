import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Dimensions,
} from 'react-native';

export default class App extends Component {
  state = {
    userName: '',
    password: '',
  };

  ttbUserName = (val) => {
    this.setState({userName: val});
  };

  doLogin = () => {
    alert(this.state.userName + '登入成功');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="請輸入帳號"
          value={this.state.userName}
          onChangeText={this.ttbUserName}
        />

        <TextInput
          style={styles.input}
          placeholder="請輸入密碼"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(val) => {
            this.setState({password: val});
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="請輸入手機號"
          keyboardType="number-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="文字區塊"
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
        />

        <View style={styles.btnLogin}>
          <Button title="登入" onPress={this.doLogin} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  input: {
    width: Dimensions.get('window').width - 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 5,
  },
  btnLogin: {margin: 10},
});

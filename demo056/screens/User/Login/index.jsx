import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {loginSuccess} from '../../../redux/actions/User';

// UI組件
class Login extends Component {
  state = {
    userName: '',
    password: '',
    validateUserName: false,
    isValidUserName: true,
    validatePassword: false,
    isValidPassword: true,
    secureTextEntry: true,
  };

  ttbUserName = (val) => {
    if (val.trim().length >= 2) {
      this.setState({
        userName: val,
        validateUserName: true,
        isValidUserName: true,
      });
    } else {
      this.setState({
        userName: val,
        validateUserName: false,
        isValidUserName: false,
      });
    }
  };

  handleValidUserName = (event) => {
    const {text: val} = event.nativeEvent;

    if (val.trim().length >= 2) {
      this.setState({
        isValidUserName: true,
      });
    } else {
      this.setState({
        isValidUserName: false,
      });
    }
  };

  ttbPassword = (val) => {
    if (val.trim().length >= 2) {
      this.setState({
        password: val,
        validatePassword: true,
        isValidPassword: true,
      });
    } else {
      this.setState({
        password: val,
        validatePassword: false,
        isValidPassword: false,
      });
    }
  };

  handleValidPassword = (event) => {
    const {text: val} = event.nativeEvent;

    if (val.trim().length >= 6) {
      this.setState({
        isValidPassword: true,
      });
    } else {
      this.setState({
        isValidPassword: false,
      });
    }
  };

  handleLogin = () => {
    const {userName, password, isValidUserName, isValidPassword} = this.state;

    if (userName.length === 0 || password.length === 0) {
      Alert.alert('提示', '登入失敗!用戶名或密碼不能為空');
      return;
    }

    if (!isValidUserName) {
      Alert.alert('提示', '登入失敗!用戶名長度最短是2位');
      return;
    }

    if (!isValidPassword) {
      Alert.alert('提示', '登入失敗!密碼長度最短是6位');
      return;
    }

    const loginInfo = {userName, password};
    Alert.alert('提示', '登入成功' + JSON.stringify(loginInfo));
    this.props.loginSuccess(loginInfo);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.ImageBackground}
          source={require('../../../images/background-login.jpg')}>
          <View style={styles.body}>
            <Text style={styles.bodyText}>歡迎使用</Text>
          </View>

          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            {/* 用戶名 */}
            <View style={styles.action}>
              <MaterialCommunityIcons
                name="account"
                size={18}
                color="#804040"
              />
              <TextInput
                style={styles.input}
                placeholder="用戶名"
                placeholderTextColor={'rgba(0,0,0,0.25)'}
                value={this.state.userName}
                onChangeText={this.ttbUserName}
                onEndEditing={(event) => {
                  this.handleValidUserName(event);
                }}
              />
              {this.state.validateUserName ? (
                <Animatable.View animation="bounceIn">
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={18}
                    color="#804040"
                  />
                </Animatable.View>
              ) : null}
            </View>
            {this.state.isValidUserName ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>用戶名長度最短是2位</Text>
              </Animatable.View>
            )}

            {/* 密碼 */}
            <View style={styles.action}>
              <MaterialCommunityIcons name="lock" size={18} color="#804040" />
              <TextInput
                style={styles.input}
                placeholder="密碼"
                placeholderTextColor={'rgba(0,0,0,0.25)'}
                value={this.state.password}
                secureTextEntry={this.state.secureTextEntry}
                onChangeText={this.ttbPassword}
                onEndEditing={(event) => {
                  this.handleValidPassword(event);
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  this.setState({secureTextEntry: !this.state.secureTextEntry});
                }}>
                {this.state.secureTextEntry ? (
                  <MaterialCommunityIcons
                    name="eye-off"
                    size={18}
                    color="#804040"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="eye"
                    size={18}
                    color="#804040"
                  />
                )}
              </TouchableOpacity>
            </View>
            {this.state.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>密碼長度最短是6位</Text>
              </Animatable.View>
            )}

            {/* 按鈕 */}
            <View style={styles.button}>
              {/* 登入 */}
              <TouchableOpacity
                style={[styles.signIn, {width: '25%'}]}
                onPress={this.handleLogin}>
                <LinearGradient
                  style={[styles.signIn, {width: '100%'}]}
                  colors={['#CF9E9E', '#804040']}>
                  <Text style={styles.signInText}>登入</Text>
                </LinearGradient>
              </TouchableOpacity>

              {/* 註冊 */}
              <TouchableOpacity style={[styles.signIn, {width: '25%'}]}>
                <LinearGradient
                  style={[styles.signIn, {width: '100%'}]}
                  colors={['#CF9E9E', '#804040']}>
                  <Text style={styles.signInText}>註冊</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

// 容器組件
export default connect(
  (state) => {
    return {isLogin: state.User.isLogin};
  },
  {loginSuccess},
)(Login);

const styles = StyleSheet.create({
  container: {flex: 1},
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS === 'ios' ? 150 : 100,
    paddingHorizontal: 20,
  },
  bodyText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  action: {
    flexDirection: 'row',
    backgroundColor: '#FAF5F5',
    marginTop: 10,
    // paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#000',
  },
  errorMsg: {
    color: 'red',
    fontSize: 14,
  },
  button: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-around',
  },
  signIn: {borderRadius: 10},
  signInText: {
    color: '#fff',
    fontSize: 20,
    paddingVertical: 10,
    textAlign: 'center',
  },
});

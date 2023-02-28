import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/User';

class User extends Component {
  doLogout = () => {
    Alert.alert('提示', '確定要登出?', [
      {
        text: '確定',
        style: 'default',
        onPress: () => {
          this.props.logout();
          Alert.alert('提示', '登出成功', [
            {
              text: '確定',
              style: 'default',
              onPress: () => {
                this.props.navigation.navigate('LoginStack');
              },
            },
          ]);
        },
      },
      {
        text: '取消',
        style: 'cancel',
      },
    ]);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require('../../images/avatar-default.jpg')}
          />
        </View>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AboutStack');
            }}>
            <View style={styles.listItem}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name="alert-circle-outline"
                  size={18}
                  color="#804040"
                />
                <Text style={[{marginLeft: 5}, styles.fontColor]}>關於</Text>
              </View>
              <MaterialCommunityIcons
                name="greater-than"
                size={18}
                color="#804040"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Alert.alert('提示', 'setting');
            }}>
            <View style={styles.listItem}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons name="cog" size={18} color="#804040" />
                <Text style={[{marginLeft: 5}, styles.fontColor]}>設置</Text>
              </View>
              <MaterialCommunityIcons
                name="greater-than"
                size={18}
                color="#804040"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.doLogout}>
            <View style={styles.listItem}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name="logout"
                  size={18}
                  color="#804040"
                />
                <Text style={[{marginLeft: 5}, styles.fontColor]}>登出</Text>
              </View>
              <MaterialCommunityIcons
                name="greater-than"
                size={18}
                color="#804040"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('LoginStack');
            }}>
            <View style={styles.listItem}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name="login"
                  size={18}
                  color="#804040"
                />
                <Text style={[{marginLeft: 5}, styles.fontColor]}>登入</Text>
              </View>
              <MaterialCommunityIcons
                name="greater-than"
                size={18}
                color="#804040"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('CounterStack');
            }}>
            <View style={styles.listItem}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name="counter"
                  size={18}
                  color="#804040"
                />
                <Text style={[{marginLeft: 5}, styles.fontColor]}>計數器</Text>
              </View>
              <MaterialCommunityIcons
                name="greater-than"
                size={18}
                color="#804040"
              />
            </View>
          </TouchableOpacity>

          <View
            style={[
              {height: Platform.OS === 'ios' ? 0 : 81},
              {backgroundColor: '#fff'},
            ]}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(null, {logout})(User);

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  fontColor: {
    color: '#804040',
    fontSize: 18,
  },
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 40,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 1,
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: '#FAF5F5',
  },
});

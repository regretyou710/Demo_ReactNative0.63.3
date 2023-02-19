import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert, Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import Storage from './Util/Storage';

export default class App extends Component {
  state = {
    position: null,
    currentTime: '',
    positionTime: '',
  };

  componentDidMount = async () => {
    try {
      // 如果本地存儲中沒有位置訊息，則獲取地理位置
      const location = await Storage.get('location');

      if (location === undefined || location === '') {
        // 組件加載完畢後獲取地理位置訊息
        Geolocation.getCurrentPosition(
          (info) => {
            console.log('緯度:', info.coords.latitude);
            console.log('經度:', info.coords.longitude);
            console.log('精確度:', info.coords.accuracy);
            console.log('速度:', info.coords.speed);

            const currentTime = moment().format('YYYY/MM/DD HH:mm:ss');
            const positionTime = moment(info.timestamp).format(
              'YYYY/MM/DD HH:mm:ss',
            );
            console.log('現在時間:', currentTime);
            console.log('定位時間:', positionTime);

            const locationData = {position: info, currentTime, positionTime};
            Storage.set('location', JSON.stringify(locationData)); // 獲取地理位置成功後，將其保存下來
            this.setState(locationData);
          },
          (error) => {
            Alert.alert('報錯:', JSON.stringify(error));
          },
          {
            timeout: 30000,
            enableHighAccuracy: true,
          },
        );
      } else {
        this.setState(JSON.parse(location));
      }
    } catch (error) {
      Alert.alert('報錯:', error);
    }
  };

  render() {
    const {position, currentTime, positionTime} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>緯度:{position ? position.coords.latitude : ''}</Text>
          <Text>經度:{position ? position.coords.longitude : ''}</Text>
          <Text>精確度:{position ? position.coords.accuracy : ''}</Text>
          <Text>速度:{position ? position.coords.speed : ''}</Text>
          <Text>現在時間:{position ? currentTime : ''}</Text>
          <Text>定位時間:{position ? positionTime : ''}</Text>
        </View>
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
  content: {
    width: 250,
    marginVertical: 20,
  },
});

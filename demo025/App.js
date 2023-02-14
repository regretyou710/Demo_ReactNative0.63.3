import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Swiper style={{height: 320}} showsButtons={true} autoplay={true}>
          <Image
            style={{width: Dimensions.get('window').width, height: 300}}
            source={require('./img/1.jpg')}
          />
          <Image
            style={{width: Dimensions.get('window').width, height: 300}}
            source={require('./img/2.jpg')}
          />
          <Image
            style={{width: Dimensions.get('window').width, height: 300}}
            source={require('./img/3.jpg')}
          />
        </Swiper>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import JustifyContent from './component/JustifyContent';
import AlignItems from './component/AlignItems';
import Flex from './component/Flex';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <JustifyContent />
        <AlignItems />
        <Flex />
      </ScrollView>
    );
  }
}

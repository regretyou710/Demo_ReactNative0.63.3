import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  render() {
    return (
      <WebView source={{uri: 'https://infinite.red'}} style={{marginTop: 20}} />

      //   <WebView
      //   originWhitelist={['*']}
      //   source={{ html: '<h1>Hello world</h1>' }}
      // />
    );
  }
}

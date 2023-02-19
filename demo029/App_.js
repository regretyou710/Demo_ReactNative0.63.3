import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import RNFS from 'react-native-fs';

export default class App extends Component {
  state = {
    imgs: {},
  };

  getStorageImgs = () => {
    //console.log(RNFS.DocumentDirectoryPath);

    RNFS.readDir('/data/user/0/com.demo029/cache/Camera/').then((result) => {
      const newImgs = result
        .map((file, index) => {
          //读取常用文件特性
          //console.log(file.size, file.path, file.isFile());
          //读取具体文件的内容
          // if (file.path.endsWith('.jpg')) {
          //   RNFS.readFile(file.path, 'utf8').then((content) =>
          //     console.log(content),
          //   );
          // }

          return {id: index.toString(), path: file.path};
        })
        .catch((error) => alert(JSON.stringify(error)));

      this.setState({imgs: newImgs});
    });
  };

  renderItem = ({index, item}) => {
    return (
      <View>
        <Image style={styles.img} source={{uri: 'file://' + item.path}} />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <Text onPress={this.getStorageImgs}>獲取圖片</Text>

        <FlatList
          data={this.state.imgs}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width,
    height: 650,
    marginVertical: 20,
  },
});

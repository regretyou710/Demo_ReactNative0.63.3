import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  state = {
    list: [
      {
        id: '1',
        title: '頭條',
      },
      {
        id: '2',
        title: '娛樂',
      },
      {
        id: '3',
        title: '體育',
      },
      {
        id: '4',
        title: '軍事',
      },
      {
        id: '5',
        title: '科技',
      },
      {
        id: '6',
        title: '財經',
      },
      {
        id: '7',
        title: '時尚',
      },
      {
        id: '8',
        title: '社會',
      },
    ],
    isFresh: false,
    selectedId: null,
  };

  renderItem = ({index, item}) => {
    console.log(item);

    const backgroundColor =
      this.state.selectedId === item.id ? '#dfb' : '#f9c2ff';

    return (
      <TouchableOpacity
        style={[styles.item, {backgroundColor}]}
        onPress={() => {
          this.setState({selectedId: item.id});
        }}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  loadData = () => {
    this.setState({isFresh: true});

    setTimeout(() => {
      this.setState({isFresh: false});

      alert('下載完成');
    }, 2000);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.list}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
          horizontal={false} // 水平佈局模式
          initialScrollIndex={0} // 初始滾動索引
          initialNumToRender={4} // 指定初始渲染數據的數量，一般數量要填滿一屏幕
          numColumns={1} // 指定直行數，數據項必須等高(無法支持瀑布流)
          inverted={false} // 列表反轉
          extraData={this.state.selectedId}
          // 聲明項目之間的分隔符
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderWidth: 1,
                borderColor: 'red',
              }}></View>
          )}
          // 列表數據為空時，展示的組件
          ListEmptyComponent={() => <Text>無資料可顯示!</Text>}
          // 下拉刷新
          refreshing={this.state.isFresh}
          onRefresh={this.loadData}
          // 上拉刷新
          onEndReachedThreshold={0.1} // 聲明觸底的比率，0.1表示距離底部還有10%
          onEndReached={() => {
            alert('到底了');
          }}
          // 聲明列表的頭部組件
          ListHeaderComponent={() => (
            <Text style={{fontSize: 40}}>頭部列表</Text>
          )}
          // 聲明列表的底部組件
          ListFooterComponent={() => (
            <Text style={{fontSize: 40}}>沒有更多資料</Text>
          )}
        />
        <Button title="clear" onPress={() => this.setState({list: []})} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    height: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginHorizontal: 15,
    marginVertical: 8,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;

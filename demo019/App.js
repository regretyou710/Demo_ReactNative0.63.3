import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
} from 'react-native';

Item = (props) => {
  console.log(props);
  const {title} = props;

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

class App extends Component {
  state = {
    data: [
      {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
      },
      {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      },
      {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
      },
      {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
      },
    ],
    isFresh: false,
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
        {/* 
        sections:資料格式為[{title:,data:[]}]
        title:表示分組名稱
        data:表示分組數據
        */}
        <SectionList
          sections={this.state.data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
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
            <Text style={{fontSize: 40}}>菜單列表</Text>
          )}
          // 聲明列表的底部組件
          ListFooterComponent={() => (
            <Text style={{fontSize: 40}}>沒有更多資料</Text>
          )}
        />

        <Button title="clear" onPress={() => this.setState({data: []})} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
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

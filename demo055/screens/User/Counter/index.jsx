import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from '../../../redux/actions/Counter';

// UI組件
class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="-"
          onPress={() => {
            this.props.decrement(1);
          }}
        />

        <Text>{this.props.num}</Text>

        <Button
          title="+"
          onPress={() => {
            this.props.increment(1);
          }}
        />
      </View>
    );
  }
}

// 容器組件
export default connect(
  (state) => {
    // console.log('容器組件mapStateToProps', state); //容器組件mapStateToProps {"Counter": {"num": 1}}
    // state對象存放的key是reducers/index.js中reducer的名稱，value是在reducers/Counter.js中的initState
    return {
      num: state.Counter.num,
    };
  },
  {increment, decrement},
)(Counter);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

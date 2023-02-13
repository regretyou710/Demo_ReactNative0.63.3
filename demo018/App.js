import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView horizontal={true} style={{backgroundColor: '#dfb'}}>
          <Text style={styles.nav}>新聞</Text>
          <Text style={styles.nav}>娛樂</Text>
          <Text style={styles.nav}>國內</Text>
          <Text style={styles.nav}>國外</Text>
          <Text style={styles.nav}>財經</Text>
          <Text style={styles.nav}>時尚</Text>
          <Text style={styles.nav}>科技</Text>
        </ScrollView>

        <ScrollView
          style={styles.container}
          contentContainerStyle={{margin: 30}}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, neque
            eveniet. Officiis, dolorem quisquam. At eum nobis architecto non!
            Labore hic itaque optio? Quis, excepturi totam! Dicta porro
            voluptatibus quae cum veritatis quas? Voluptate eligendi cumque ea,
            explicabo minima repudiandae fugiat exercitationem, placeat veniam
            alias harum quod nobis enim dolorum repellendus nostrum assumenda
            ipsum rerum laudantium facere reiciendis repellat. Id at, adipisci
            vel magnam tempore pariatur nesciunt? Quos consequuntur id
            voluptatem voluptatum quibusdam suscipit illo modi libero, deleniti
            omnis! Aperiam nam rerum voluptas ullam earum enim, a provident
            similique vitae? Accusantium vero molestias nesciunt consequuntur
            alias. Dignissimos libero quaerat sequi!
          </Text>
          {/* 解決ScrollView在android下滾動不到底的問題 */}
          <View style={{height: Platform.OS === 'ios' ? 0 : 100}}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
  },
  nav: {fontSize: 30, height: 50, margin: 10},
});

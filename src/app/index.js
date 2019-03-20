import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import Book from './components/Book';

import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Book name={'Test'} author={'TestAuthor'} imageSource={null}></Book>
        <Book name={'Test'} author={'TestAuthor'} imageSource={{uri: 'https://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'}} ></Book>

      </View>
    );
  }
}

export default App;
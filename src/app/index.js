import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';

import BookList from './components/BookList';
import styles from './styles';
import { books } from './books';

class App extends Component {
  render() {
    return (
      <View style={styles.container}> 
          <BookList books={books}/>
      </View>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import BookDetailComponent from './components/BookDetail';

//TODO: remove test
class BookDetail extends Component {
    render() {
      return (
        <View style={styles.container}>
          <BookDetailComponent title= {'TitleTest'} author={'AuthorTest'} year={'2009'} type={'Novela'}/>
        </View>
      );
    }
}

export default BookDetail;


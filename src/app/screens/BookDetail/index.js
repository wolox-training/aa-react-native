import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import BookDetailComponent from './components/BookDetail';

//TODO: remove test
class BookDetail extends Component {
    render() {
      const book = this.props.navigation.getParam('book');
      return (
        <View style={styles.container}>
          <BookDetailComponent title= {book.title} author={book.author} year={book.year} type={book.type} imageSource={book.imageSource}/>
        </View>
      );
    }
}

export default BookDetail;


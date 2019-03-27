import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import BookDetailComponent from './components/BookDetail';
import Comment from './components/CommentList/components/Comment';

import imageUser from '../../assets/img_user1.png';

class BookDetail extends Component {
    render() {
      const book = this.props.navigation.getParam('book');
      // TODO: remove test
      return (
        <View style={styles.container}>
          <BookDetailComponent title= {book.title} author={book.author} year={book.year} type={book.type} imageSource={book.imageSource}/>
          <Comment user={{name: 'Test', imageSource: imageUser}} comment={'A Test Comment'}></Comment>
        </View>
      );
    }
}

export default BookDetail;


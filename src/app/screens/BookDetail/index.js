import React, { PureComponent } from 'react';
import { View } from 'react-native';

import styles from './styles';
import BackButton from '../../components/BackButton';
import BookDetailComponent from './components/BookDetail';
import CommentList from './components/CommentList';

import { BOOK_DETAIL } from '../../../constants/titles';

class BookDetail extends PureComponent {
    static navigationOptions = {
      title: BOOK_DETAIL,
      headerLeft: <BackButton/>
    };

    render() {
      const book = this.props.navigation.getParam('book');
      return (
        <View style={styles.container}>
          <BookDetailComponent title= {book.title} author={book.author} year={book.year} type={book.type} imageSource={book.imageSource}/>
          <CommentList comments={book.comments}></CommentList>
        </View>
      );
    }
}

export default BookDetail;


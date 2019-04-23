import React, { PureComponent } from 'react';
import { View } from 'react-native';

import styles from './styles';
import BookDetailComponent from './components/BookDetail';
import CommentList from './components/CommentList';
import { defaultComments } from './comments';

class BookDetail extends PureComponent {
    render() {
      const book = this.props.navigation.getParam('book');
      return (
        <View style={styles.container}>
          <BookDetailComponent title= {book.title} author={book.author} year={book.year} type={book.genre} imageSource={{uri: `https${book.image.url.substring(4)}?id=${book.id}`}}/>
          <CommentList comments={book.comments || defaultComments}/>
        </View>
      );
    }
}

export default BookDetail;


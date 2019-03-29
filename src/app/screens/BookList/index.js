import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Book from './components/Book';
import { defaultBooks } from './books';
import styles from './styles';

import { BookDetail } from '../../../constants/routes';
class BookList extends Component {

  renderItem = ({item}) =>  <Book name={item.title} author={item.author} imageSource={item.imageSource} onPress={() => this.handlePressBook(item)}/>;

  keyExtractor = (item) => `${item.id}`;
  
  handlePressBook = (item) => {
    const {navigation} = this.props;
    navigation.navigate(BookDetail, {book: item});
  }

  render() {
    const {books} = this.props;
    return (
        <FlatList
          data={books || defaultBooks}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          contentContainerStyle={styles.container}
        />
      );
  }
}

export default BookList;


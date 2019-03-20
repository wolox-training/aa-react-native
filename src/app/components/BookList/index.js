import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Book from './components/Book';

class BookList extends Component {

  renderItem = ({item}) =>  <Book name={item.title} author={item.author} imageSource={item.imageSource}/>;

  keyExtractor = (item) => `${item.id}`;
    
  render() {
    const {books} = this.props;
    return (
        <FlatList
          data={books}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      );
  }
}

export default BookList;


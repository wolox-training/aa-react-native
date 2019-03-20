import React, { Component } from 'react';
import { View } from 'react-native';
import Book from './components/Book';

class ListBooksScreen extends Component {

    renderItem = ({item}) => {
        return (
          <Book name={item.name} author={item.author} imageSource={item.imageSource}/>
        )
      }
    render() {
        return (
            <FlatList
              data={rows}
              renderItem={this.renderItem}
              keyExtractor={extractKey}
            />
          );
    }
}

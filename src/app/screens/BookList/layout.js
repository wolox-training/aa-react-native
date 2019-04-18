import React, { PureComponent } from 'react';
import { FlatList, Text, View } from 'react-native';

import Book from './components/Book';
import styles from './styles';

class BookList extends PureComponent {

  renderItem = ({item}) =>  <Book name={item.title} author={item.author} imageSource={item.image} onPress={() => this.props.handlePressBook(item)}/>;

  keyExtractor = (item) => `${item.id}`;

  render() {
    const { books, getBooksErrorMessage } = this.props;

    const errorMessage = !getBooksErrorMessage ?  'No books available at library.' : getBooksErrorMessage;
    const render = () => (!books || books.length <= 0) ? <Text style={styles.errorMessage}>{errorMessage}</Text> : list;
    
    return (
      <View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>

      </View>

      );
  }
}

export default BookList;


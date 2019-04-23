import React, { PureComponent } from 'react';
import { FlatList, Text } from 'react-native';

import Book from './components/Book';
import styles from './styles';

import WithLoading from '../../components/WithLoading';

class BookList extends PureComponent {

  renderItem = ({item}) =>  <Book name={item.title} author={item.author} imageSource={{uri: `https${item.image.url.substring(4)}`}} onPress={() => this.props.handlePressBook(item)}/>;

  keyExtractor = (item) => `${item.id}`;

  render() {
    const { books, getBooksErrorMessage } = this.props;

    const errorMessage = !getBooksErrorMessage ?  'No books available at library.' : getBooksErrorMessage;
    const error = <Text style={styles.errorMessage}>{errorMessage}</Text>;
    
    return (
      <FlatList 
        data={books} 
        renderItem={this.renderItem} 
        keyExtractor={this.keyExtractor} 
        contentContainerStyle={styles.container}
        ListEmptyComponent={error}
      />
    );
  }
}

export default WithLoading(props => props.isLoading)(BookList);


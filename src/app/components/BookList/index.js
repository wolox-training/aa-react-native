import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';

import Book from './components/Book';
import styles from './styles';

import WithLoading from '../../components/WithLoading';
import { generateBookUri } from '../../../utils/bookUtil';
class BookList extends PureComponent {

renderItem = ({item}) => { 
  const { onPressBook } = this.props;
  return (
    <Book name={item.title} author={item.author} imageSource={generateBookUri(item)} onPress={() => onPressBook(item)}/>
  ); 
};

  keyExtractor = (item) => `${item.id}`;

  render() {
    const { books, listEmptyComponent } = this.props;    
    return (
      <FlatList 
        data={books} 
        renderItem={this.renderItem} 
        keyExtractor={this.keyExtractor} 
        contentContainerStyle={[styles.container, (!books || !books.length) && styles.noList]}
        ListEmptyComponent={listEmptyComponent}
      />
    );
  }
}

export default WithLoading(props => props.isLoading)(BookList);


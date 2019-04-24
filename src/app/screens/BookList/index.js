import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';

import BookList from './layout';
import styles from './styles';

import BooksActions from '../../../redux/books/actions';
import { BookDetail } from '../../../constants/routes';
import { NO_BOOKS } from '../../../constants/errors';

class BookListContainer extends Component {

    handlePressBook = (item) => {
        const {navigation} = this.props;
        navigation.navigate(BookDetail, {book: item});
    }

    componentDidMount() {
        const { getBooks } = this.props;
        getBooks();
    }


    render() {
        const { getBooksErrorMessage } = this.props;
        const errorMessage = !getBooksErrorMessage ?  NO_BOOKS : getBooksErrorMessage;
        const emptyLibrary = <Text style={styles.errorMessage}>{errorMessage}</Text>;
        return (
            <BookList onPressBook={this.handlePressBook} listEmptyComponent={emptyLibrary} {...this.props}/>
        );
    }

}

const mapStateToProps = state => ({
    getBooksErrorMessage: state.books.getBooksErrorMessage,
    books: state.books.books,
    isLoading: state.books.isLoading
});

const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(BooksActions.getBooks()),
});


export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);


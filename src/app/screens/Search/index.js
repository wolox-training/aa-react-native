import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Immutable from 'seamless-immutable';

import BookList from './../../components/BookList';

import { BookDetail } from '../../../constants/routes';
import SearchBarPlaceHolder from '../../components/SearchPlaceHolder';
import styles from './styles';

class Search extends Component {

    handlePressBook = item => {
        const {navigation} = this.props;
        navigation.navigate(BookDetail, {book: item});
    }

    bookCompare = (a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1

    bookFilter = (book, search) => book.title.toLowerCase().includes(search.toLowerCase())

    searchFilter = (books, search) => !search.length ? [] : Immutable.asMutable(books.filter(b => this.bookFilter(b, search))).sort(this.bookCompare)

    render() {
        const { isLoading, books, search } = this.props;
        const listEmptyComponent = <SearchBarPlaceHolder/>;
        return (
            <View style={styles.container}>
                <BookList onPressBook={this.handlePressBook} listEmptyComponent={listEmptyComponent} isLoading={isLoading} books={this.searchFilter(books, search)}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books.books,
    search: state.books.search,
    isLoading: state.books.booksLoading
});


export default connect(mapStateToProps)(Search);

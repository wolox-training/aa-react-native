import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Immutable from 'seamless-immutable';
import { createSelector } from 'reselect';

import styles from './styles';
import BookList from './../../components/BookList';

import { BookDetail } from '../../../constants/routes';
import SearchBarPlaceHolder from '../../components/SearchPlaceHolder';
import { bookCompare, bookFilter } from '../../../utils/bookUtil';


class Search extends Component {

    handlePressBook = item => {
        const {navigation} = this.props;
        navigation.navigate(BookDetail, {book: item});
    }

    render() {
        const { isLoading, books, search } = this.props;
        const listEmptyComponent = <SearchBarPlaceHolder/>;
        return (
            <View style={styles.container}>
                <BookList onPressBook={this.handlePressBook} listEmptyComponent={listEmptyComponent} isLoading={isLoading} books={books}/>
            </View>
        );
    }
}

const booksSelector = createSelector(
    state => state.books.books,
    state => state.books.search,
    (books, search) => !search.length ? [] : Immutable.asMutable(books.filter(b => bookFilter(b, search))).sort(bookCompare)

);

const mapStateToProps = state => ({
    books: booksSelector(state),
    isLoading: state.books.booksLoading
});


export default connect(mapStateToProps)(Search);

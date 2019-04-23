import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookList from './layout';

import BooksActions from '../../../redux/books/actions';
import { BookDetail } from '../../../constants/routes';

class BookListContainer extends Component {

    handlePressBook = (item) => {
        const {navigation} = this.props;
        navigation.navigate(BookDetail, {book: item});
    }

    async componentDidMount() {
        const { getBooks } = this.props;
        await getBooks();
    }

    render() {
        return (
            <BookList handlePressBook={this.handlePressBook} {...this.props}/>
        );
    }

}

const mapStateToProps = state => ({
    getBooksErrorMessage: state.books.booksError,
    books: state.books.books,
    isLoading: state.books.booksLoading
});

const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(BooksActions.getBooks()),
});


export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);


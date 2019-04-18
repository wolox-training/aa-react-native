import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookList from './layout';

import BooksActions from '../../../redux/books/actions';
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
        console.warn(this.props.books);
        return (
            <BookList handlePressBook={this.handlePressBook} {...this.props}/>
        );
    }

}

const mapStateToProps = state => ({
    getBooksErrorMessage: state.books.getBooksErrorMessage,
    books: state.books.books,
    isLoading: state.books.isLoading
});

const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(BooksActions.GET_BOOKS),
});


export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';

import BookList from './../../components/BookList';

import { BookDetail } from '../../../constants/routes';


class Search extends Component {

    static navigationOptions = () => {
        const { search } = this.state;
        return ({
        headerTitle:  <SearchBar
                    round
                    lightTheme
                    cancelButtonTitle="Cancel"
                    value={search}
                    onChangeText={this.updateSearch}
                    containerStyle={{backgroundColor: "transparent", flex: 1, marginHorizontal: 10,  borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
                    inputContainerStyle={{backgroundColor: "white", height: 30, borderColor: "transparent", borderWidth: 0}}
                 />        
    });}

    state = {search: ''};

    updateSearch = search => this.setState(search);

    handlePressBook = (item) => {
        const {navigation} = this.props;
        navigation.navigate(BookDetail, {book: item});
    }

    render() {

        return (
            <BookList onPressBook={this.handlePressBook} listEmptyComponent={null} {...this.props}/>
        );
    }

}

const mapStateToProps = state => ({
    getBooksErrorMessage: state.books.booksError,
    books: state.books.books,
    isLoading: state.books.booksLoading
});


export default connect(mapStateToProps)(Search);

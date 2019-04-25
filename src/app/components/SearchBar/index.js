import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SearchBar from './layout';

import BooksActions from '../../../redux/books/actions';

class SearchBarContainer extends PureComponent {

    render() {
        const { search, updateSearch } = this.props;
        return (
            <SearchBar searchValue={search} onChangeText={updateSearch}/>
        );
  }
}  

const mapStateToProps = state => ({
    search: state.books.search,
});

const mapDispatchToProps = dispatch => ({
    updateSearch: (search) => dispatch(BooksActions.updateSearch(search))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
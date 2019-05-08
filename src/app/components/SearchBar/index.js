import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { compose } from 'recompose';


import SearchBar from './layout';

import BooksActions from '../../../redux/books/actions';
import { Home } from '../../../constants/routes';
class SearchBarContainer extends PureComponent {

    handleOnCancel = () => {
        const { updateSearch, navigation } = this.props;
        updateSearch('');
        navigation.navigate(Home);
    };

    render() {
        const { search, updateSearch } = this.props;
        return (
            <SearchBar searchValue={search} onChangeText={updateSearch} onCancel={this.handleOnCancel}/>
        );
  }
}  

const mapStateToProps = state => ({
    search: state.books.search,
});

const mapDispatchToProps = dispatch => ({
    updateSearch: (search) => dispatch(BooksActions.updateSearch(search))
});


const enhance = compose(withNavigation, connect(mapStateToProps, mapDispatchToProps));

export default enhance(SearchBarContainer);

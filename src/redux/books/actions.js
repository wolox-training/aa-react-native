import BookService from '../../services/BookService';
import { createTypes, completeTypes } from 'redux-recompose';

const getBooksTarget = 'books';
const updateSearchTarget = 'search';

export const actions = createTypes(completeTypes(['GET_BOOKS'], ['UPDATE_SEARCH']), '@@BOOKS');
  
  const actionsCreators = {
    getBooks: () => ({
        type: actions.GET_BOOKS,
        target: getBooksTarget,
        service: BookService.getBooks,
        failureSelector: response => response.data.errors[0]
    }),
    updateSearch: search => ({ type: actions.UPDATE_SEARCH, target: updateSearchTarget, payload: search })
  };
  
  export default actionsCreators;


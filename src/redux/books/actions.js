import BookService from '../../services/BookService';
import { createTypes, completeTypes } from 'redux-recompose';

const getBooksTarget = 'books';
export const actions = createTypes(completeTypes(['GET_BOOKS']), '@@BOOKS');
  
  const actionsCreators = {
    getBooks: () => ({
        type: actions.GET_BOOKS,
        target: getBooksTarget,
        service: BookService.getBooks,
        failureSelector: response => response.data.errors[0]
    })
  };
  
  export default actionsCreators;


import BookService from '../../services/BookService';
import { createTypes, completeTypes } from 'redux-recompose';

const getBooksTarget = 'books';
export const actions = createTypes(completeTypes(['GET_BOOKS']), '@@BOOKS');

/*
export const actions = {
    GET_BOOKS: '@@BOOKS/GET_BOOKS',
    GET_BOOKS_SUCCESS: '@@BOOKS/GET_BOOKS_SUCCESS',
    GET_BOOKS_FAILURE: '@@BOOKS/GET_BOOKS_FAILURE',
  };

  const actionsCreators = {
    getBooks: () => async dispatch => {
        dispatch({type: actions.GET_BOOKS});
        const response = await BookService.getBooks();
        if(response.ok) {
            dispatch({
                type: actions.GET_BOOKS_SUCCESS,
                payload: response.data
            });
        } else {
            dispatch({
                type: actions.GET_BOOKS_FAILURE,
                payload: response.data.errors[0]
            });
        }
    }
  };*/
  
  const actionsCreators = {
    getBooks: () => ({
        type: actions.GET_BOOKS,
        target: getBooksTarget,
        service: BookService.getBooks,
    })
  };
  
  export default actionsCreators;


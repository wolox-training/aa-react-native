import { actions } from './actions';

const initialState = {
    books: null,
    getBooksErrorMessage: null,
    isLoading: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_BOOKS: 
        return {...state, isLoading: true};
      case actions.GET_BOOKS_SUCCESS: 
        return {...state, books: action.payload, getBooksErrorMessage: null, isLoading: false};
      case actions.GET_BOOKS_FAILURE: 
        return {...state, getBooksErrorMessage: action.payload, isLoading: false};
      default:
        return state;
    }
  }
  
  export default reducer;


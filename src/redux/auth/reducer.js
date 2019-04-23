import { createReducer, completeReducer, completeState } from 'redux-recompose';
import { actions } from './actions';

const stateDescription = {
  currentUser: null,
  initialLoading: true
};

/*
const initialState = {
  currentUser: null,
  signInErrorMessage: null,
  isLoading: false,
  initialLoading: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGN_IN: 
      return {...state, isLoading: true};
    case actions.SIGN_IN_SUCCESS: 
      return {...state, currentUser: action.payload, signInErrorMessage: null, isLoading: false};
    case actions.SIGN_IN_FAILURE: 
      return {...state, signInErrorMessage: action.payload, isLoading: false};
    case actions.AUTH_INIT:
      return {...state, currentUser: action.payload, initialLoading: false};
    default:
      return state;
  }
}
*/

const initialState = completeState(stateDescription, ['initialLoading']);

const reducerDescription = {
  primaryActions: [actions.SIGN_IN],
  override: {
    [actions.AUTH_INIT]: (state, action) =>
      state.merge({ initialLoading: false, [action.target]: action.payload })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));

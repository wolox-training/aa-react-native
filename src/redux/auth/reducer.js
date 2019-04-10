import { actions } from './actions';

const initialState = {
  currentUser: null,
  signInErrorMessage: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGN_IN: 
      return {...state};
    case actions.SIGN_IN_SUCCESS: 
      return {...state, currentUser: action.payload, signInErrorMessage: null};
    case actions.SIGN_IN_FAILURE: 
      return {...state, signInErrorMessage: action.payload};
    default:
      return state;
  }
}

export default reducer;

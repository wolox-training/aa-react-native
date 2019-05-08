import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { actions } from './actions';

const stateDescription = {
  books: null,
  search: ''
};  
  const initialState = completeState(stateDescription);

  const reducerDescription = {
    primaryActions: [actions.GET_BOOKS],
    override: {
      [actions.UPDATE_SEARCH]: (state, action) =>
        state.merge({ [action.target]: action.payload })
    }
  };
  
  export default createReducer(Immutable(initialState), completeReducer(reducerDescription));


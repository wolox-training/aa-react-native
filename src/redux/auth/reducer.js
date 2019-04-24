import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { actions } from './actions';

const stateDescription = {
  currentUser: null,
  initialLoading: true
};

const initialState = completeState(stateDescription, ['initialLoading']);

const reducerDescription = {
  primaryActions: [actions.SIGN_IN],
  override: {
    [actions.AUTH_INIT]: (state, action) =>
      state.merge({ initialLoading: false, [action.target]: action.payload })
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));

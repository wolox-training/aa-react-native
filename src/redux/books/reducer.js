import { actions } from './actions';

const stateDescription = {
  books: null
};  
  const initialState = completeState(stateDescription);

  const reducerDescription = {
    primaryActions: [actions.GET_BOOKS],
  };
  
  export default createReducer(initialState, completeReducer(reducerDescription));


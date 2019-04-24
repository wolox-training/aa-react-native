import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware, configureMergeState } from 'redux-recompose';

import auth from './auth/reducer';
import books from './books/reducer';

const middlewares = [];
const enhancers = [];

middlewares.push(thunk);
middlewares.push(fetchMiddleware);

configureMergeState((state, diff) => state.merge(diff));

enhancers.push(applyMiddleware(...middlewares));

const rootReducer = combineReducers({auth, books})

export default createStore(rootReducer, compose(...enhancers));



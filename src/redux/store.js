import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import auth from './auth/reducer';
import books from './books/reducer';

const middlewares = [];
const enhancers = [];

middlewares.push(thunk);
middlewares.push(fetchMiddleware);

enhancers.push(applyMiddleware(...middlewares));

const rootReducer = combineReducers({auth, books})

export default createStore(rootReducer, compose(...enhancers));



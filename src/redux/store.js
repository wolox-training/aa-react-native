import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';
import books from './books/reducer';

const rootReducer = combineReducers({auth, books})

export default createStore(rootReducer, applyMiddleware(thunk));



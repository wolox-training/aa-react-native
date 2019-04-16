import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';

export default createStore(auth, applyMiddleware(thunk));



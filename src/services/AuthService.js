import AsyncStorage from '@react-native-community/async-storage';

import api from '../config/api';
import AuthActions from '../redux/auth/actions';

const ENDPOINT = '/auth';

const authStorageKeys = {
  currentUser: '@Auth:currentUser2',
  currentUserHeaders: '@Auth:currentUserHeaders'
};

const authHeaders = {
  accessToken: 'Access-Token',
  client: 'Client',
  uid: 'Uid'
};

const setCurrentUser = async (user, headers) => {
  const newHeaders = {
    [authHeaders.accessToken]: headers["access-token"],
    [authHeaders.client]: headers.client,
    [authHeaders.uid]: headers.uid
  };
  api.setHeaders(newHeaders);
  await AsyncStorage.setItem(authStorageKeys.currentUserHeaders, JSON.stringify(newHeaders));
  return AsyncStorage.setItem(authStorageKeys.currentUser, JSON.stringify(user));
};

const getCurrentUser = async () => AsyncStorage.getItem(authStorageKeys.currentUser).then(JSON.parse);

const getCurrentUserHeaders = async () => AsyncStorage.getItem(authStorageKeys.currentUserHeaders).then(JSON.parse);

const authSetup = async dispatch => {
  const currentUser = await getCurrentUser();
  const currentUserHeaders = await getCurrentUserHeaders();
  if(currentUser && currentUserHeaders) {
    api.setHeaders(currentUserHeaders);
    return dispatch(AuthActions.authInit(currentUser));
  }
  return dispatch(AuthActions.authInit(null));
};

export default {
  signIn: authData => api.post(`${ENDPOINT}/sign_in`, authData),
  setCurrentUser,
  authSetup
};


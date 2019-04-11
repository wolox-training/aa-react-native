import AsyncStorage from '@react-native-community/async-storage';
import api from '../config/api';

const ENDPOINT = '/auth';


const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}


const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key)

  } catch(e) {
    // error reading value
  }
}

export default {
  signIn: (email, password) => {
    const response = api.post(`${ENDPOINT}/sign_in`, { email, password });
    if (response.ok) {
      storeData('@Auth:currentUser', response.data);
      storeData('@Auth:accessToken', response.headers.AccessToken);
      storeData('@Auth:client', response.headers.client);

      api.setHeaders({
        'Acces-Token': response.headers.AccessToken,
        Client: response.headers.Client,
        Uid: response.headers.Uid
      });
    }
    return response;
  },
  isSignIn: async () => await getData('@Auth:currentUser')
};
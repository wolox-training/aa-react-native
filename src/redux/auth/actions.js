import AsyncStorage from '@react-native-community/async-storage';
import AuthService from '../../services/AuthService';
export const actions = {
    SIGN_IN: '@@AUTH/SIGN_IN',
    SIGN_IN_SUCCESS: '@@AUTH/SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE: '@@AUTH/SIGN_IN_FAILURE'
  };
  

const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
}


const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
}

const actionsCreators = {
    signIn: (email, password) => async dispatch => {
        dispatch({type: actions.SIGN_IN});
        const response = await AuthService.signIn(email, password);
        if(response.ok) {
            dispatch({
                type: actions.SIGN_IN_SUCCESS,
                payload: response.data
            });
            storeData('@AccessToken', response.headers.Access-Token);
        } else {
            dispatch({
                type: actions.SIGN_IN_FAILURE,
                payload: response.data.errors[0]
            });
        }
    }
  };
  
  export default actionsCreators;
  
import AuthService from '../../services/AuthService';

export const actions = {
    SIGN_IN: '@@AUTH/SIGN_IN',
    SIGN_IN_SUCCESS: '@@AUTH/SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE: '@@AUTH/SIGN_IN_FAILURE',
    AUTH_INIT: '@@AUTH/AUTH_INIT'
  };
  

const actionsCreators = {
    signIn: (email, password) => async dispatch => {
        dispatch({type: actions.SIGN_IN});
        const response = await AuthService.signIn(email, password);
        if(response.ok) {
            await AuthService.setCurrentUser(response.data, response.headers);
            dispatch({
                type: actions.SIGN_IN_SUCCESS,
                payload: response.data
            });
        } else {
            dispatch({
                type: actions.SIGN_IN_FAILURE,
                payload: response.data.errors[0]
            });
        }
    },
    authInit: (user) => ({ type: actions.AUTH_INIT, payload: user })
  };
  
  export default actionsCreators;
  
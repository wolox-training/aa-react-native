import AuthService from '../../services/AuthService';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';

const signInTarget = 'currentUser';

export const actions = createTypes(completeTypes(['SIGN_IN'], ['AUTH_INIT']), '@@AUTH');

const actionsCreators = {
    authInit: user => ({ type: actions.AUTH_INIT, target: signInTarget, payload: user }),
    signIn: (email, password) => ({
      type: actions.SIGN_IN,
      target: signInTarget,
      service: AuthService.signIn,
      failureSelector: response => response.data.errors[0],
      payload: { email, password },
      injections: [
        withPostSuccess(async (_, response) => AuthService.setCurrentUser(response.data, response.headers))
      ]
    })
  };
  
export default actionsCreators;
  
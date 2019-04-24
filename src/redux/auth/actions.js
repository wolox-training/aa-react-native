import AuthService from '../../services/AuthService';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';

const signInTarget = 'currentUser';

export const actions = createTypes(completeTypes(['SIGN_IN'], ['AUTH_INIT']), '@@AUTH');

const actionsCreators = {
    init: user => ({ type: actions.AUTH_INIT, target: signInTarget, payload: user }),
    signIn: (email, password) => ({
      type: actions.SIGN_IN,
      target: signInTarget,
      service: AuthService.signIn,
      payload: { email, password },
      injections: [
        withPostSuccess(async (response) => AuthService.setCurrentUser(response.data, response.headers))
      ]
    })
  };
  
export default actionsCreators;
  
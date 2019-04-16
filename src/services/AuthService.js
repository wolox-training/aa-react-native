import api from '../config/api';

const ENDPOINT = '/auth';

export default {
  signIn: (email, password) => api.post(`${ENDPOINT}/sign_in`, { email, password })
};
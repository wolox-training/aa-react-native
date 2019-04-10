import Config from 'react-native-config';
import { create } from 'apisauce';

const api = create({
  baseURL: Config.API_BASE_URL,
  timeout: 10000
});

export default api;


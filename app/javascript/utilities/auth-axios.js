import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create();
instance.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: 'application/json',
      Authorization: Cookies.get('authorization'),
      ...config.headers,
    };

    config.baseURL = '/v1';
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default instance;
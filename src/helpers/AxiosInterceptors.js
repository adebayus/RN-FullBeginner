import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import envs from '../config/env';
import {LOGOUT} from '../constants/routesName';
import {CREATE_CONTACT} from '../constants/routesName';
import {navigate} from '../navigations/SideMenu/RootNavigation';

let headers = {};

const AxiosInstance = axios.create({
  baseURL: 'https://truly-contacts.herokuapp.com/api',
  //   baseURL: 'truly-contacts.herokuapp.com/api',
  headers,
});

AxiosInstance.interceptors.request.use(
  async config => {
    // navigate(CREATE_CONTACT);
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.log('ini error', error);
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      console.log(response, 'axios response');
      resolve(response);
    }),
  error => {
    if (!error.response) {
      return new Promise(reject => {
        reject(error);
      });
    }
    if (error.response.status === 403) {
      navigate(LOGOUT, {token_expired: true});
    } else {
      return new Promise(reject => {
        reject(error);
      });
    }
  }
);

export default AxiosInstance;

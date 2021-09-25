import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import envs from '../config/env';

let headers = {};

const AxiosInstance = axios.create({
  baseURL: 'https://truly-contacts.herokuapp.com/api',
  //   baseURL: 'truly-contacts.herokuapp.com/api',
  headers,
});

AxiosInstance.interceptors.request.use(
  async config => {
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

export default AxiosInstance;

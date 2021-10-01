import AsyncStorage from '@react-native-community/async-storage';
import {
  CLEAR_AUTH,
  LOGIN_FAIL,
  LOGIN_LOADING,
  lOGIN_SUCCESS,
  RELOG,
} from '../../../constants/actionTypes';
import AxiosInstance from '../../../helpers/AxiosInterceptors';

export const clearAuth = () => dispatch => {
  dispatch({type: CLEAR_AUTH});
};

export const reLogin = loginData => dispatch => {
  //   console.log(user, token, 'token');

  dispatch({
    type: RELOG,
    payload: loginData,
  });
};

export default ({password, userName: username}) =>
  dispatch => {
    dispatch({type: LOGIN_LOADING});
    AxiosInstance.post('/auth/login', {
      password,
      username,
    })
      .then(res => {
        console.log('dispatch succes');
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({
          type: lOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log('dispatch error');
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something Error'},
        });
      });
  };

import {
  CLEAR_AUTH,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes';
import AxiosInstance from '../../../helpers/AxiosInterceptors';

export const clearAuth = () => dispatch => {
  dispatch({type: CLEAR_AUTH});
};

export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch => {
    dispatch({type: REGISTER_LOADING});
    AxiosInstance.post('/auth/register', {
      email,
      password,
      username,
      first_name,
      last_name,
    })
      .then(res => {
        console.log('dispatch succes');
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log('dispatch error');
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something Error'},
        });
      });
  };

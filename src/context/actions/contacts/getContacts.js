import {
  GET_CONTACTS_LOADING,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';

import AxiosInstance from '../../../helpers/AxiosInterceptors';

export default () => dispatch => {
  dispatch({type: GET_CONTACTS_LOADING});
  AxiosInstance.get('/contacts')
    .then(res => {
      console.log('then');
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log('catch');
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: err.response ? err.response.data : {error: 'Something Error'},
      });
    });
};

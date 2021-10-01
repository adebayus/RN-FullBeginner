import {
  DELETE_CONTACTS_LOADING,
  DELETE_CONTACTS_FAIL,
  DELETE_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';

import AxiosInstance from '../../../helpers/AxiosInterceptors';

export default id => dispatch => onSuccess => {
  dispatch({type: DELETE_CONTACTS_LOADING});
  AxiosInstance.delete(`/contacts/${id}`)
    .then(() => {
      console.log('then');
      dispatch({
        type: DELETE_CONTACTS_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch(err => {
      console.log('catch');
      dispatch({
        type: DELETE_CONTACTS_FAIL,
        payload: err.response ? err.response.data : {error: 'Something Error'},
      });
    });
};

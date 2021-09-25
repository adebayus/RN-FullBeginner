import {
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';

import AxiosInstance from '../../../helpers/AxiosInterceptors';

export default form => dispatch => onSucces => {
  const requestPayload = {
    country_code: form.country_code || '',
    first_name: form.first_name || '',
    last_name: form.last_name || '',
    phone_number: form.calling_code + form.phone_number || '',
    contact_picture: form.contact_picture || null,
    is_favorite: form.is_favorite || false,
  };
  console.log(requestPayload, '=> request Payload');
  dispatch({type: CREATE_CONTACTS_LOADING});
  AxiosInstance.post('/contacts/', requestPayload)
    .then(res => {
      console.log('then');
      dispatch({
        type: CREATE_CONTACTS_SUCCESS,
        payload: res.data,
      });
      console.log(res, '=> ini res');
      onSucces();
    })
    .catch(err => {
      console.log('catch');
      dispatch({
        type: CREATE_CONTACTS_FAIL,
        payload: err.response ? err.response.data : {error: 'Something Error'},
      });
    });
};

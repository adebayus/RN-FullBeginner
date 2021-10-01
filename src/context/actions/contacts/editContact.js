import {
  EDIT_CONTACTS_LOADING,
  EDIT_CONTACTS_FAIL,
  EDIT_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';

import AxiosInstance from '../../../helpers/AxiosInterceptors';

export default (form, id) => dispatch => onSucces => {
  const requestPayload = {
    country_code: form.country_code || '',
    first_name: form.first_name || '',
    last_name: form.last_name || '',
    phone_number: form.calling_code + form.phone_number || '',
    contact_picture: form.contact_picture || null,
    is_favorite: form.is_favorite || false,
  };
  console.log('isi form', form);
  console.log(requestPayload, '=> request Payload');
  dispatch({type: EDIT_CONTACTS_LOADING});
  AxiosInstance.put(`/contacts/${id}`, requestPayload)
    .then(res => {
      console.log('then');
      dispatch({
        type: EDIT_CONTACTS_SUCCESS,
        payload: res.data,
      });
      console.log(res.data, '=> ini res');
      onSucces(res.data);
    })
    .catch(err => {
      console.log('catch');
      dispatch({
        type: EDIT_CONTACTS_FAIL,
        payload: err.response ? err.response.data : {error: 'Something Error'},
      });
    });
};

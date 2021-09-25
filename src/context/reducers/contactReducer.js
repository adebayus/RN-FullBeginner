import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../constants/actionTypes';

export default function contactReducer(state, {type, payload}) {
  switch (type) {
    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true,
        },
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: payload,
        },
      };
    case GET_CONTACTS_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: payload,
        },
      };

    case CREATE_CONTACTS_LOADING:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
        },
      };
    case CREATE_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          data: [payload, ...state.getContacts.data],
        },
        createContact: {
          ...state.createContact,
          loading: false,
          data: payload,
        },
      };
    case CREATE_CONTACTS_FAIL:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
}

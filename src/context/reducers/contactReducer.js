import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  DELETE_CONTACTS_FAIL,
  DELETE_CONTACTS_LOADING,
  DELETE_CONTACTS_SUCCESS,
  EDIT_CONTACTS_FAIL,
  EDIT_CONTACTS_LOADING,
  EDIT_CONTACTS_SUCCESS,
} from '../../constants/actionTypes';
import createContacts from '../actions/contacts/createContacts';

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
    case DELETE_CONTACTS_LOADING:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: true,
        },
      };
    case DELETE_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: state.getContacts.data.filter(item => item.id !== payload),
        },
        deleteContact: {
          ...state.deleteContact,
          loading: true,
        },
      };
    case DELETE_CONTACTS_FAIL:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
        },
      };
    case EDIT_CONTACTS_LOADING:
      return {
        ...state,
        createContacts: {...state.createContact, loading: true},
      };
    case EDIT_CONTACTS_SUCCESS:
      return {
        ...state,
        createContacts: {...state.createContact, loading: false},
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: state.getContacts.data.map(item => {
            if (item.id === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
        },
      };
    case EDIT_CONTACTS_FAIL:
      return {
        ...state,
        createContacts: {...state.createContact, loading: false},
      };
    default:
      return state;
  }
}

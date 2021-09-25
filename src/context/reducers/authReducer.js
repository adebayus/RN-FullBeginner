import {
  CLEAR_AUTH,
  LOGIN_FAIL,
  LOGIN_LOADING,
  lOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes';

export default function authReducer(state, {type, payload}) {
  switch (type) {
    case REGISTER_LOADING:
      return {...state, loading: true};
    case LOGIN_LOADING:
      return {...state, loading: true};
    case REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};
    case lOGIN_SUCCESS:
      return {...state, loading: false, data: payload, isLogin: true};
    case REGISTER_FAIL:
      return {...state, loading: false, error: payload};
    case LOGIN_FAIL:
      return {...state, loading: false, error: payload};
    case CLEAR_AUTH:
      console.log('clear auth');
      return {...state, error: null, data: {}};
    case LOGOUT_USER:
      return {isLogin: false, data: {}, error: null, loading: false};
    default:
      return state;
  }
}

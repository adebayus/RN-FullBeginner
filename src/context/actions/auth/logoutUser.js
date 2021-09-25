import AsyncStorage from '@react-native-community/async-storage';
import {LOGOUT_USER} from '../../../constants/actionTypes';
import AxiosInstance from '../../../helpers/AxiosInterceptors';

// export const clearAuth = () => dispatch => {
//   dispatch({type: CLEAR_AUTH});
// };

export default () => async dispatch => {
  console.log('dispatch succes');
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    dispatch({type: LOGOUT_USER});
  } catch (e) {
    console.log('remove error');
  }
};

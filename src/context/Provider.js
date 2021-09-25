// export default () => null;

import React, {createContext, useReducer} from 'react';
import authState from './initialState/authState';
import contactState from './initialState/contactState';
import authReducer from './reducers/authReducer';
import contactReducer from './reducers/contactReducer';

export const GlobalContext = createContext({});
export const GlobalProvider = ({children}) => {
  const [stateAuth, dispatchAuth] = useReducer(authReducer, authState);
  const [stateContact, dispatchContact] = useReducer(
    contactReducer,
    contactState
  );

  let value = {
    stateAuth,
    dispatchAuth,
    stateContact,
    dispatchContact,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {reLogin} from '../context/actions/auth/loginUser';
import {GlobalContext} from '../context/Provider';
import {customConsole} from '../utils/console';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {navigationRef} from './SideMenu/RootNavigation';

const AppNavContainer = props => {
  //   const isLogin = true;
  const {stateAuth, dispatchAuth} = useContext(GlobalContext);
  const {isLogin} = stateAuth;
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  //   const [localStorage, setLocalStorage] = useState(null);
  console.log('ini stateAuth', stateAuth);
  //   console.log(isLogin, 'islogin', isLogged, 'outsite islogged');
  const loginHandler = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      console.log('loginHandler and isi user => ', user, user ? true : false);

      //   const keys = await AsyncStorage.getAllKeys();
      //   const result = await AsyncStorage.multiGet(keys);

      //   console.log(result, 'result -> ');
      //   console.log(user, 'ini user');
      if (user) {
        console.log('Login Handler if');
        const token = await AsyncStorage.getItem('token');
        const userValue = JSON.parse(user);
        const loginData = {
          data: {token: token, ...userValue},
        };
        console.log(loginData, 'Login Data');
        // const tokenValue =
        setLoading(false);
        setIsLogged(true);

        // console.log(userValue, tokenValue, '=> ini Value Login Handler if');
        reLogin(loginData)(dispatchAuth);
      } else {
        console.log('Login Handler else');
        setLoading(false);
        setIsLogged(false);
      }
    } catch (e) {
      console.log('catch');
      setLoading(false);
    }
  };

  useEffect(() => {
    loginHandler();
  }, [isLogin]);
  //   console.table(useContext(GlobalContext));
  return (
    <>
      {console.log(loading, 'loading')}
      {!loading ? (
        <>
          {console.log(loading, 'loading inside', isLogged, 'isLogged')}
          <NavigationContainer ref={navigationRef}>
            {isLogged ? <DrawerNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 50, color: 'black'}}> Loading sir </Text>
        </View>
      )}
    </>
  );
};

export default AppNavContainer;

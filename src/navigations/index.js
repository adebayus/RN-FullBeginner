import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {GlobalContext} from '../context/Provider';
import {customConsole} from '../utils/console';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = props => {
  //   const isLogin = true;
  const {stateAuth} = useContext(GlobalContext);
  const {isLogin} = stateAuth;
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log('ini stateAuth', stateAuth);
  //   console.log(isLogin, 'islogin', isLogged, 'outsite islogged');
  const loginHandler = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      console.log('loginHandler and isi user => ', user);
      //   console.log(user, 'ini user');
      if (user) {
        setLoading(false);
        setIsLogged(true);
        console.log('Login Handler if');
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
          <NavigationContainer>
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

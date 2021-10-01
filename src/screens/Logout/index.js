/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import logoutUser from '../../context/actions/auth/logoutUser';
import {GlobalContext} from '../../context/Provider';

const Logout = () => {
  const {dispatchAuth} = useContext(GlobalContext);
  useEffect(() => {
    setTimeout(() => logoutUser()(dispatchAuth), 5000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 100, color: 'black'}}> Loading Logout User</Text>
    </View>
  );
};

export default Logout;

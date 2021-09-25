import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as RoutesName from '../constants/routesName';
import Register from '../screens/Register';
import Login from '../screens/Login';

const authStack = createNativeStackNavigator();

export default function AuthNavigator() {
  const {Navigator, Screen} = authStack;
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Screen name={RoutesName.LOGIN} component={Login} />
      <Screen name={RoutesName.REGISTER} component={Register} />
    </Navigator>
  );
}

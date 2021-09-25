import React, {useContext} from 'react';
// import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import * as RoutesName from '../constants/routesName';
import {Image, View} from 'react-native';
import Container from '../components/commons/Container';
import SideMenu from '../navigations/SideMenu';
import {GlobalContext} from '../context/Provider';

const getDrawerContent = (navigation, dispatchAuth) => (
  <SideMenu {...navigation} dispatchAuth={dispatchAuth} />
);

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  const {Navigator, Screen} = Drawer;
  const {dispatchAuth, stateAuth} = useContext(GlobalContext);
  //   console.log(stateAuth);

  return (
    <Navigator
      screenOptions={{headerShown: false, drawerType: 'slide'}}
      drawerContent={navigation => getDrawerContent(navigation, dispatchAuth)}>
      <Screen name={RoutesName.HOME_STACK} component={HomeNavigator} />
    </Navigator>
  );
}

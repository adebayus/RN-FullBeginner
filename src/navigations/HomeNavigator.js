import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import * as RoutesName from '../constants/routesName';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';
import Logout from '../screens/Logout';
import {useNavigation} from '@react-navigation/native';

const homeStack = createNativeStackNavigator();

export default function HomeNavigator() {
  const {Navigator, Screen} = homeStack;
  const {} = useNavigation();
  console.log('Home Navigator');
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
      }}>
      <Screen
        name={RoutesName.CONTACT_LIST}
        component={Contacts}
        // options={{headerLeft: () => <Text>Shit here We Go Again</Text>}}
      />
      <Screen name={RoutesName.CONTACT_DETAIL} component={ContactDetail} />
      <Screen name={RoutesName.CREATE_CONTACT} component={CreateContact} />
      <Screen name={RoutesName.SETTINGS} component={Settings} />
      <Screen
        options={{headerShown: false}}
        name={RoutesName.LOGOUT}
        component={Logout}
      />
    </Navigator>
  );
}

/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Container from '../../components/commons/Container';
import Icon from '../../components/commons/Icon';
import {SETTINGS} from '../../constants/routesName';
import logoutUser from '../../context/actions/auth/logoutUser';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Icon from '../../components/commons/Icon';

export default function index({
  navigation: {navigate, closeDrawer},
  dispatchAuth,
}) {
  //   console.log(dispatchAuth);
  const handleLogOut = () => {
    console.log('asdasd');
    closeDrawer();
    Alert.alert('Logout', 'Are you sure you want Log Out', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'Oke',
        onPress: () => {
          logoutUser()(dispatchAuth);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="MaterialIcons" name="settings" size={20} />,
      name: 'Settings',
      onPressHandler: () => {
        navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="MaterialIcons" name="logout" size={20} />,
      name: 'Logout',
      onPressHandler: handleLogOut,
    },
  ];

  return (
    <View>
      <Container>
        <Image
          source={require('../../assets/images/Logo-company.png')}
          style={{
            alignSelf: 'center',
            width: 140,
            height: 140,
            resizeMode: 'contain',
            marginBottom: 20,
          }}
        />
        <View style={{paddingLeft: 45}}>
          {menuItems.map(({name, icon, onPressHandler}) => (
            <TouchableOpacity
              onPress={onPressHandler}
              style={{
                // backgroundColor: 'yellow',
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
              }}
              key={name}>
              {icon}
              <Text style={{fontSize: 17, paddingVertical: 7, paddingLeft: 20}}>
                {name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </View>
  );
}

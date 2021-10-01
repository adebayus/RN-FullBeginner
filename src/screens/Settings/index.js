/* eslint-disable react-hooks/exhaustive-deps */
import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SettingsComponent from '../../components/SettingsComponent';
import AsyncStorage from '@react-native-community/async-storage';

export default function Settings() {
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const saveSettings = (key, value) => {
    AsyncStorage.setItem(key, value);
  };
  const settingOptions = [
    {
      title: 'My Info',
      subTitle: 'setup your mobile',
      onPress: () => {},
    },
    {
      title: 'Accounts',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Default Account For New Contact',
      subTitle: email,
      onPress: () => {},
    },
    {
      title: 'Contact To Display',
      subTitle: 'All Contacts',
      onPress: () => {},
    },
    {
      title: 'Sort By',
      subTitle: sortBy,
      onPress: () => {
        setModalVisible(prev => !prev);
      },
    },
    {
      title: 'Import',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Export',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Blocked Number',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'About Contact',
      subTitle: null,
      onPress: () => {},
    },
  ];

  const prefArr = [
    {
      name: 'First Name',
      selected: sortBy === 'First Name' ? true : false,
      onPress: () => {
        saveSettings('sortBy', 'First Name');
        setSortBy('First Name');
        setModalVisible(false);
      },
    },
    {
      name: 'Last Name',
      selected: sortBy === 'Last Name' ? true : false,
      onPress: () => {
        saveSettings('sortBy', 'Last Name');
        setSortBy('Last Name');
        setModalVisible(false);
      },
    },
  ];

  const getSettings = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const userValue = JSON.parse(user);
      //   console.log(userValue.email);
      setEmail(userValue.email);
      const sortPref = await AsyncStorage.getItem('sortBy');
      if (sortPref) {
        setSortBy(sortPref);
      }
    } catch (e) {
      console.log(e, 'error getSettings');
    }
  };

  useEffect(() => {
    getSettings();
  }, []);
  return (
    <SettingsComponent
      settingOptions={settingOptions}
      email={email}
      prefArr={prefArr}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      sortBy={sortBy}
    />
  );
}

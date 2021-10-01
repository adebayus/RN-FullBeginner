/* eslint-disable react-hooks/exhaustive-deps */
import {Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Container from '../../components/commons/Container';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalComponent from '../../components/commons/ModalComponent';
import ContactComponent from '../../components/ContactComponent';
import {GlobalContext} from '../../context/Provider';
import {useContext} from 'react';
import getContacts from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-community/async-storage';
import {CONTACT_DETAIL} from '../../constants/routesName';

export default function Contacts() {
  const {setOptions, openDrawer, navigate} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const contactsRef = useRef([]);

  const {
    stateContact: {
      getContacts: {data, loading},
    },
    dispatchContact,
  } = useContext(GlobalContext);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => openDrawer()}>
          <MaterialIcons style={{paddingLeft: 5}} size={29} name="menu" />
        </TouchableOpacity>
      ),
    });
  }, []);
  //   console.log(data, loading, '=> contact');
  useFocusEffect(
    useCallback(() => {
      getContacts()(dispatchContact);
    }, [])
  );

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSettings();
    }, [])
  );

  useEffect(() => {
    const prevRef = contactsRef.current;
    contactsRef.current = data;
    const newList = contactsRef.current;

    if (newList.length - prevRef.length === 1) {
      const newContacts = newList.find(
        item => !prevRef.map(i => i.id).includes(item.id)
      );
      navigate(CONTACT_DETAIL, {item: newContacts});
      console.log('newContacs', newContacts);
    }
  }, [data.length]);

  return (
    <ContactComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      navigate={navigate}
      sortBy={sortBy}
    />
    // <Container>
    //   <Text> Contact </Text>
    // </Container>
  );
}

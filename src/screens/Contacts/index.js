/* eslint-disable react-hooks/exhaustive-deps */
import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Container from '../../components/commons/Container';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalComponent from '../../components/commons/ModalComponent';
import ContactComponent from '../../components/ContactComponent';
import {GlobalContext} from '../../context/Provider';
import {useContext} from 'react';
import getContacts from '../../context/actions/contacts/getContacts';

export default function Contacts() {
  const {setOptions, openDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const {
    stateContact: {
      getContacts: {data, loading},
    },
    dispatchContact,
  } = useContext(GlobalContext);
  const {navigate} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => openDrawer()}>
          <MaterialIcons style={{paddingLeft: 5}} size={29} name="menu" />
        </TouchableOpacity>
      ),
    });
  }, []);
  console.log(data, loading, '=> contact');
  useEffect(() => {
    getContacts()(dispatchContact);
  }, []);

  return (
    <ContactComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      navigate={navigate}
    />
    // <Container>
    //   <Text> Contact </Text>
    // </Container>
  );
}

import {Text, View} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContacts from '../../context/actions/contacts/createContacts';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_LIST} from '../../constants/routesName';
import {useNavigation} from '@react-navigation/native';
export default function CreateContact() {
  const [form, setForm] = useState({});
  const [isError, setIsError] = useState({});
  const {navigate} = useNavigation();
  const [localImage, setLocalImage] = useState(null);

  const onChangeText = ({name, text}) => {
    setForm(prev => ({...prev, [name]: text}));
    console.log(form);
  };
  const {
    dispatchContact,
    stateContact: {
      createContact: {data, loading, error},
    },
  } = useContext(GlobalContext);

  const countrySelectHandler = ({calling_code, country_code}) => {
    setForm(prev => ({
      ...prev,
      calling_code,
      country_code,
    }));
    console.log(form, 'iniForm');
  };

  const onSubmit = () => {
    createContacts(form)(dispatchContact)(() => {
      navigate(CONTACT_LIST);
    });
    console.log('onSubmit', form);
  };

  const toggleSwitch = () => {
    console.log('toogle');
    setForm(prev => ({...prev, is_favorite: !prev.is_favorite}));
  };

  const sheetRef = useRef(null);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    console.log(sheetRef);
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onFileSelected = images => {
    // setForm();
    closeSheet();
    // setForm(prev => ({...prev}));
    setLocalImage(images);
    console.log(images, 'images!!!!!!!!!');
  };

  return (
    <CreateContactComponent
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      form={form}
      countrySelectHandler={countrySelectHandler}
      loading={loading}
      data={data}
      error={error}
      toggleSwitch={toggleSwitch}
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localImage={localImage}
      //   onFileSelected={onFileSelected}
    />
  );
}

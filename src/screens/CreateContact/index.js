import {Text, View} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContacts from '../../context/actions/contacts/createContacts';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_DETAIL, CONTACT_LIST} from '../../constants/routesName';
import {useNavigation, useRoute} from '@react-navigation/native';
import uploadImage from '../../helpers/uploadImage';
import editContact from '../../context/actions/contacts/editContact';
import countryCodes from '../../utils/countryCode';

export default function CreateContact() {
  const [form, setForm] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [isError, setIsError] = useState(false);
  const {navigate} = useNavigation();
  const [localImage, setLocalImage] = useState(null);
  const sheetRef = useRef(null);
  const {params} = useRoute();

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
    if (params?.contact) {
      if (localImage?.size) {
        setIsUploading(true);
        console.log(localImage, ' ini local image');
        uploadImage(localImage)(url => {
          setTimeout(() => {
            setIsUploading(false);
          }, 200);
          editContact(
            {...form, contact_picture: url},
            params?.contact?.id
          )(dispatchContact)(item => {
            navigate(CONTACT_DETAIL, {item});
          });
        })(errors => {
          setIsUploading(false);
          console.log(errors);
        });
      } else {
        editContact(form, params?.contact?.id)(dispatchContact)(item => {
          navigate(CONTACT_DETAIL, {item});
        });
      }
    } else {
      if (localImage?.size) {
        setIsUploading(true);
        console.log(localImage, ' ini local image');
        uploadImage(localImage)(url => {
          setTimeout(() => {
            setIsUploading(false);
          }, 200);
          createContacts({...form, contact_picture: url})(dispatchContact)(
            () => {
              navigate(CONTACT_LIST);
            }
          );
        })(errors => {
          setIsUploading(false);
          console.log(errors);
        });
      } else {
        createContacts(form)(dispatchContact)(() => {
          navigate(CONTACT_LIST);
        });
      }
    }
    console.log('onSubmit', form);
  };

  const toggleSwitch = () => {
    console.log('toogle');
    setForm(prev => ({...prev, is_favorite: !prev.is_favorite}));
  };

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

  useEffect(() => {
    console.log(params, 'ini params createcontact');
    if (params?.contact) {
      const {
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        is_favorite: is_favorite,
        country_code: country_code,
      } = params?.contact;

      setForm({
        ...form,
        first_name,
        last_name,
        phone_number,
        is_favorite,
        country_code,
      });
      const country = countryCodes.find(item => {
        return item.key === country_code;
      });

      if (country) {
        setForm(prev => {
          return {
            ...prev,
            country_code: country.key,
            calling_code: country.value,
          };
        });
      }

      if (params?.contact?.contact_picture) {
        setLocalImage(params?.contact?.contact_picture);
        console.log(params.contact);
      }
    }
  }, []);

  return (
    <CreateContactComponent
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      form={form}
      countrySelectHandler={countrySelectHandler}
      loading={loading || isUploading}
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

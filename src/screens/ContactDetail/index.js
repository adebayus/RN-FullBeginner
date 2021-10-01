/* eslint-disable react-hooks/exhaustive-deps */
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import ContactDetailComponent from '../../components/ContactDetailComponent';
import Icon from '../../components/commons/Icon';
import colors from '../../assets/themes/colors';
import {GlobalContext} from '../../context/Provider';
import deleteContacts from '../../context/actions/contacts/deleteContacts';
import {CONTACT_LIST} from '../../constants/routesName';

export default function ContactDetail() {
  const {
    params: {item},
  } = useRoute();
  const {setOptions, navigate} = useNavigation();
  const {
    dispatchContact,
    stateContact: {data, loading, error},
  } = useContext(GlobalContext);
  useEffect(() => {
    setOptions({
      title: item.first_name + ' ' + item.last_name,
      headerRight: () => {
        return (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Icon
                size={22}
                color={colors.gery}
                name={item.is_favorite ? 'star' : 'star-border'}
                type="MaterialIcons"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Delete Contact',
                  'Are you sure you want Delete Contact',
                  [
                    {text: 'Cancel', onPress: () => {}},
                    {
                      text: 'Oke',
                      onPress: () => {
                        deleteContacts(item.id)(dispatchContact)(() => {
                          navigate(CONTACT_LIST);
                        });
                        //   logoutUser()(dispatchAuth);
                      },
                    },
                  ]
                );
              }}>
              <Icon
                color={colors.gery}
                size={22}
                name="delete"
                type="MaterialIcons"
              />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, []);
  return <ContactDetailComponent contact={item} />;
}

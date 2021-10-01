/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import colors from '../../assets/themes/colors';
import Icon from '../commons/Icon/index';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import Container from '../commons/Container';
import ImageComponent from './ImageComponent';
import CustomButton from '../commons/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {CREATE_CONTACT} from '../../constants/routesName';
const ContactDetailComponent = ({contact}) => {
  const {
    id,
    country_code,
    first_name,
    last_name,
    phone_number,
    is_favorite,
    contact_picture,
  } = contact;

  const {navigate} = useNavigation();
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        {contact_picture && <ImageComponent src={contact_picture} />}
        <View style={{padding: 20}}>
          <Text style={{fontSize: 23}}> {`${first_name} ${last_name}`} </Text>
        </View>
        <View
          style={{height: 10, borderColor: colors.gery, borderBottomWidth: 0.4}}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingVertical: 20,
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
            }}>
            <Icon
              type="Ionicons"
              name="call-outline"
              color={colors.primary}
              size={27}
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.primary,
                paddingVertical: 5,
              }}>
              Call
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
            }}>
            <Icon
              type="MaterialCommunityIcons"
              name="message-text"
              color={colors.primary}
              size={27}
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.primary,
                paddingVertical: 5,
              }}>
              Text
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
            }}>
            <Icon
              type="MaterialCommunityIcons"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.primary,
                paddingVertical: 5,
              }}>
              Video
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}>
          <Icon
            type="Ionicons"
            name="call-outline"
            color={colors.grey}
            size={27}
          />
          <View
            style={{
              flexGrow: 1,
              paddingHorizontal: 20,
            }}>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="MaterialCommunityIcons"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Icon
              type="MaterialCommunityIcons"
              name="message-text"
              color={colors.primary}
              size={27}
              // style={[styles.msgIcon]}
            />
          </View>
        </View>
        <View style={{alignSelf: 'flex-end', marginRight: 20, width: 200}}>
          <CustomButton
            primary
            title="Edit Contact"
            onPress={() => {
              navigate(CREATE_CONTACT, {contact, editing: true});
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactDetailComponent;

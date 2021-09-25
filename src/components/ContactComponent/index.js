/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import AppModal from '../commons/AppModal';
// import CustomButton from '../commons/CustomButton';
// import ModalComponent from '../commons/ModalComponent';
import Message from '../commons/Message';
import colors from '../../assets/themes/colors';
import Icon from '../commons/Icon';
// import {useNavigation} from '@react-navigation/native';
import {CREATE_CONTACT} from '../../constants/routesName';

export default function index({
  navigate,
  data,
  loading,
  modalVisible,
  setModalVisible,
}) {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="Contact is Empty" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log('item', item);

    const {contact_picture, first_name, last_name, phone_number, country_code} =
      item;

    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 30,
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.gery,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text style={{color: colors.white, fontSize: 23}}>
                {first_name[0].toUpperCase()}
              </Text>
              <Text style={{color: colors.white, fontSize: 23}}>
                {last_name[0].toUpperCase()}
              </Text>
            </View>
          )}
          <View style={{flex: 1, paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${country_code} ${phone_number}`}</Text>
          </View>
        </View>
        <Icon type="AntDesign" name="right" size={18} color={colors.gery} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{backgroundColor: colors.white, flex: 1}}>
        <AppModal
          modalBody={
            <View>
              <Text> somText</Text>
            </View>
          }
          // modalFooter={}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        {loading && (
          <ActivityIndicator
            style={{paddingHorizontal: 100, paddingVertical: 100}}
            color="red"
            size="large"
          />
        )}
        {!loading && (
          <View style={{paddingVertical: 20}}>
            <FlatList
              renderItem={renderItem}
              data={data}
              keyExtractor={item => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 100}} />}
              ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: 'black'}} />
              )}
            />
          </View>
        )}

        {/* <CustomButton
        title="Open Modal "
        secondary
        onPress={() => setModalVisible(prev => !prev)}
      /> */}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 45,
          right: 20,
          width: 55,
          height: 55,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon name="plus" type="AntDesign" size={30} color={colors.white} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  name: {fontSize: 17},
  phoneNumber: {opacity: 0.6, fontSize: 14, paddingVertical: 3},
});

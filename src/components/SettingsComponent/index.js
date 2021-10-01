/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Container from '../commons/Container';
import colors from '../../assets/themes/colors';
import AppModal from '../commons/AppModal/index';
import Icon from '../commons/Icon';
const SettingsComponent = ({
  settingOptions,
  modalVisible,
  setModalVisible,
  title,
  prefArr,
}) => {
  return (
    <>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={title}
        closeOnTouchOutside={false}
        modalBody={
          <View>
            {prefArr.map(({name, selected, onPress}) => (
              <TouchableOpacity
                key={name}
                onPress={onPress}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                {selected && (
                  <Icon size={17} type="MaterialIcons" name="check" />
                )}
                <Text style={{fontSize: 17, paddingLeft: 15}}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        }
        modalFooter={<></>}
      />
      <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
        {settingOptions.map(({subTitle, title, onPress}) => (
          <TouchableOpacity onPress={onPress} key={title}>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 17}}>{title}</Text>
              {subTitle && (
                <Text
                  style={{
                    fontSize: 14,
                    color: 'rgba(0,0,0,0.6)',
                    paddingTop: 4,
                  }}>
                  {subTitle}
                </Text>
              )}
            </View>
            <View style={{height: 0.5, backgroundColor: colors.gery}} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;

import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import CustomButton from '../CustomButton';

export default function index({modalVisible, setModalVisible}) {
  return (
    <Modal visible={modalVisible} transparent>
      <Text>Ini component</Text>
      <TouchableOpacity
        style={{backgroundColor: 'red', height: 100}}></TouchableOpacity>
    </Modal>
  );
}

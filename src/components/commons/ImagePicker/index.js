import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '../Icon';
import ImagePickerCropper from 'react-native-image-crop-picker';
const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take From Camera',
      icon: <Icon name="camera" type="AntDesign" size={21} />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 400,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            onFileSelected(image);
          })
          .catch(e => console.log(e));
      },
    },
    {
      name: 'Chose From Galeri',
      icon: <Icon name="images" type="Entypo" size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            onFileSelected(image);
          })
          .catch(e => 'consoel.log(e)');
      },
    },
  ];

  return (
    <RBSheet
      ref={ref}
      height={150}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}>
      <View style={{paddingHorizontal: 20}}>
        {options.map(({name, icon, onPress}) => (
          <TouchableOpacity
            style={{flexDirection: 'row', paddingTop: 10, alignItems: 'center'}}
            onPress={onPress}
            key={name}>
            {icon}
            <Text style={{fontSize: 20, paddingLeft: 17}}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;

const styles = StyleSheet.create({});

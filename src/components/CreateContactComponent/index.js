/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Container from '../commons/Container';
import CustomButton from '../commons/CustomButton';
import TextInput from '../commons/TextInput';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import colors from '../../assets/themes/colors';
import ImagePicker from '../commons/ImagePicker';

const index = ({
  data,
  loading,
  error,
  onChangeText,
  form,
  onSubmit,
  countrySelectHandler,
  toggleSwitch,
  openSheet,
  closeSheet,
  sheetRef,
  onFileSelected,
  localImage,
}) => {
  console.log(sheetRef, '=> inirefcreateContact');

  console.log(error, 'post conttact error');
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localImage?.path || DEFAULT_IMAGE_URI}}
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
            borderRadius: 100,
          }}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text
            style={{
              alignSelf: 'center',
              color: colors.primary,
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Choose Image
          </Text>
        </TouchableOpacity>

        <TextInput
          label="First Name"
          placeholder="Enter First Name..."
          onChangeText={text => onChangeText({name: 'first_name', text: text})}
          error={error?.first_name?.[0] || null}
        />
        <TextInput
          label="Last Name"
          placeholder="Enter Last Name..."
          onChangeText={text => onChangeText({name: 'last_name', text: text})}
          error={error?.last_name?.[0] || null}
        />
        <TextInput
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode={false}
              withCallingCodeButton
              withEmoji
              countryCode={form.country_code || undefined}
              onSelect={country => {
                const CallingCode = country.callingCode[0];
                const Cca2 = country.cca2;
                countrySelectHandler({
                  calling_code: CallingCode,
                  country_code: Cca2,
                });
              }}
              //   visible
            />
          }
          iconPosition="left"
          label="Phone Number"
          placeholder="Enter Phone Number..."
          style={{paddingLeft: 10}}
          onChangeText={text =>
            onChangeText({name: 'phone_number', text: text})
          }
          error={error?.phone_number?.[0] || null}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 17}}> Add To Favorite</Text>
          <Switch
            // style={{width: }}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={form.is_favorite ? '#f5dd4b' : '#f4f3f4'}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={form.is_favorite}
          />
        </View>
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({container: {}});

export default index;

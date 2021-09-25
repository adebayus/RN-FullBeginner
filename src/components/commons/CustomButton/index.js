/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';

export default function CustomButton({
  title,
  primary,
  secondary,
  danger,
  loading,
  disabled,
  onPress,
  ...props
}) {
  //   const [state, setstate] = useState(null);

  const getBgColor = () => {
    return disabled
      ? colors.gery
      : secondary
      ? colors.secondary
      : danger
      ? colors.danger
      : primary
      ? colors.primary
      : null;
  };
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      disabled={disabled}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={colors.white} />}
        {title && (
          <Text
            style={[
              styles.textLabel,
              {
                color: disabled ? 'black' : colors.white,
                paddingLeft: loading ? 10 : 0,
              },
            ]}>
            {loading ? 'Please Wait....' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

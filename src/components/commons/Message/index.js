/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../../assets/themes/colors';
import {clearAuth} from '../../../context/actions/auth/loginUser';
import {GlobalContext} from '../../../context/Provider';
import styles from './styles';

export default function Message({
  message,
  primary,
  danger,
  success,
  info,
  retry,
  retryFn,
  onDismiss,
  ...props
}) {
  //   const [state, setstate] = useState(null);
  const [isDismiss, setIsDismiss] = useState(true);
  const getBgColor = () => {
    return danger
      ? colors.danger
      : success
      ? colors.succces
      : info
      ? colors.secondary
      : primary
      ? colors.primary
      : null;
  };

  return (
    <>
      {isDismiss && (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View
            style={[
              {
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <Text
              style={[
                styles.textLabel,
                {
                  color: colors.white,
                },
              ]}>
              {message}
            </Text>
            {retry && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={[{fontSize: 18, color: colors.white}]}>Retry</Text>
              </TouchableOpacity>
            )}
            {onDismiss && (
              <TouchableOpacity
                onPress={() => {
                  setIsDismiss(prev => !prev);
                  onDismiss();
                }}>
                <Text style={[{fontSize: 18, color: colors.white}]}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

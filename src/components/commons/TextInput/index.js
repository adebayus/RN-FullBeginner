import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';

export default function index({
  onChangeText,
  style,
  value,
  label,
  icon,
  iconPosition,
  error,
  showIconFn,
  ...props
}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isFocused, setIsFocused] = useState(false);
  const getIconPosition = () => {
    if (icon && iconPosition) {
      return iconPosition === 'right'
        ? 'row-reverse'
        : iconPosition === 'left' && 'row';
    }
  };

  const getBorderColor = () => {
    if (isFocused) {
      return colors.primary;
    }
    if (error) {
      return colors.danger;
    }
  };
  //   console.log(getIconPosition());
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            // alignItems: icon ? 'center' : 'baseline',
            flexDirection: getIconPosition(),
            borderColor: getBorderColor(),
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            showIconFn();
          }}>
          <View>{icon && icon}</View>
        </TouchableOpacity>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setIsFocused(true)}
          {...props}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

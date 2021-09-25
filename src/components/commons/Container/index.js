import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';

export default function Container({children}) {
  return (
    <ScrollView>
      <View style={styles.wrapper}>{children}</View>
    </ScrollView>
  );
}

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from '../../commons/Icon';
import colors from '../../../assets/themes/colors';
import PropTypes from 'prop-types';

const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  modalBody,
  modalFooter,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          flex: 1,
          justifyContent: 'center',
        }}
        activeOpacity={1}
        onPress={() => {
          if (closeOnTouchOutside) {
            setModalVisible(prev => !prev);
          }
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            minHeight: 300,
            marginHorizontal: 20,
            borderRadius: 4,
          }}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                padding: 15,
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => setModalVisible(prev => !prev)}>
                <Icon type="EvilIcons" name="close" size={29} />
              </TouchableOpacity>

              <Text style={{fontSize: 21}}>{title || 'RnContact'}</Text>

              <View />
              <View />
              <View />
              <View />
              <View />
            </View>
            <View style={styles.body}>{modalBody}</View>
            {/* {modalFooter} */}
            {!modalFooter && (
              <View>
                <>
                  <View style={styles.footerSeprator}></View>
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}> Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>

      {/* <Text>Ini Modal </Text> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  footerSeprator: {height: 0.5, backgroundColor: colors.gery},
  footerItems: {width: '100%', padding: 10},
  footer: {
    justifyContent: 'space-evenly',
    paddingVertical: 7,
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerText: {fontSize: 12},
  termsView: {width: 5, height: 5, borderRadius: 100, color: colors.gery},
  body: {
    minHeight: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutside: true,
};

export default AppModal;

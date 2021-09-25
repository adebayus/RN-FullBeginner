import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    // textAlign: 'center',
  },
  textLabel: {
    fontSize: 18,
  },
  loaderSection: {
    flexDirection: 'row',
  },
});

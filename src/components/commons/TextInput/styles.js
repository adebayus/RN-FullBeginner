import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';

export default StyleSheet.create({
  inputContainer: {paddingVertical: 10},
  wrapper: {
    height: 42,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  textInput: {flex: 1, width: '100%'},
  error: {
    color: colors.danger,
    fontSize: 12,
    paddingTop: 4,
  },
});

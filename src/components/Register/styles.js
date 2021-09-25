import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    alignSelf: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: 18,
    alignSelf: 'center',
  },
  createSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  infoText: {fontSize: 17},
  linkButton: {
    paddingLeft: 5,
    color: colors.primary,
    fontSize: 17,
    fontWeight: 'bold',
  },
});

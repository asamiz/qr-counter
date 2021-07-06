import {StyleSheet} from 'react-native';
import {COLORS} from '../../common';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  counterText: {
    fontSize: 64,
    color: COLORS.button,
  },
});

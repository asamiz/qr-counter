import {StyleSheet} from 'react-native';
import {COLORS} from '../../common';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.button,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  text: {
    color: COLORS.text,
    textAlign: 'center',
  },
});

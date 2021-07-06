import {StackNavigationOptions} from '@react-navigation/stack';
import {COLORS} from '../common';

const STACK_OPTIONS: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: COLORS.main,
  },
  header: () => null,
};

export {STACK_OPTIONS};

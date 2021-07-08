import {LinkingOptions} from '@react-navigation/native';

const linkingConfig: LinkingOptions = {
  prefixes: ['demo://app'],
  config: {
    screens: {
      CounterScreen: {
        path: 'counter/:counterValue',
        parse: {
          counterValue: counterValue => counterValue,
        },
      },
    },
  },
};

export {linkingConfig};

/* eslint-disable no-undef */
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

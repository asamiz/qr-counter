module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    './jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-splash-screen|react-native-iphone-x-helper|@react-navigation|react-native-qrcode-scanner|react-native-permissions|react-native-camera)/)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};

import React from 'react';
import 'react-native';
import {Provider} from 'react-redux';
import TestRenderer from 'react-test-renderer';
import {PersistGate} from 'redux-persist/integration/react';
import App from '../src';
import {store, persistor} from '../src/redux';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

it('renders correctly', async () => {
  const instance = TestRenderer.create(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  );
  instance.unmount(); // As we are using async function to hide the splash screen
});

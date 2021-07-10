import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import '@testing-library/jest-native/extend-expect';
import {fireEvent, render} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import MainStack from '../../src/navigation/MainStack';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureMockStore();

beforeAll(() => {
  jest.useFakeTimers();
});

describe('Test HomeScreen functionalities', () => {
  test('HomeScreen renders successfully', async () => {
    const component = (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
    const result = render(component);
    await act(async () =>
      expect(result.getByTestId('home-container')).toBeTruthy(),
    );
  });

  test('App navigates successfully to counter screen', async () => {
    const store = mockStore({counterValue: 0});
    const component = (
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    );
    const {getByTestId} = render(component);
    const button = getByTestId('home-btn');
    fireEvent(button, 'press');
    const counterContainer = getByTestId('counter-container');
    expect(counterContainer).toBeTruthy();
  });
});

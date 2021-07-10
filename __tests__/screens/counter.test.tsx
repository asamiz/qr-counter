import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, cleanup} from '@testing-library/react-native';
import MainStack from '../../src/navigation/MainStack';
import {Provider} from 'react-redux';
import {CounterScreen} from '../../src/screens';
import {store} from '../../src/redux';
import {ADD_COUNTER_VALUE} from '../../src/redux/counter/actionTypes';

beforeAll(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  cleanup();
});

describe('Test CounterScreen functionalities', () => {
  test('App navigates successfully back to home screen', async () => {
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
    const homeButton = getByTestId('back-home-btn');
    fireEvent(homeButton, 'press');
    const buttonAfter = getByTestId('home-btn');
    expect(buttonAfter).toBeTruthy();
  });

  test('Counter initial value to be 0', async () => {
    const props: any = {
      route: {},
      navigation: {},
    };

    const component = (
      <Provider store={store}>
        <NavigationContainer>
          <CounterScreen {...props} />
        </NavigationContainer>
      </Provider>
    );

    const {getByTestId} = render(component);
    const counter = getByTestId('app-counter');
    const numericValueOfCounterText = +counter.children[0];
    expect(numericValueOfCounterText).toEqual(0);
  });

  test('Counter value incremented with the passed value', async () => {
    const props: any = {
      route: {
        params: {
          counterValue: 9, // sent value through props
        },
      },
      navigation: {},
    };

    // Adding an initial value instead of 0 to make sure that the value is added not replaced successfully.
    store.dispatch({type: ADD_COUNTER_VALUE, payload: 7});

    const component = (
      <Provider store={store}>
        <NavigationContainer>
          <CounterScreen {...props} />
        </NavigationContainer>
      </Provider>
    );
    const {getByTestId} = render(component);
    const counter = getByTestId('app-counter');
    const numericValueOfCounterText = +counter.children[0];

    // the result should be 7(our new initial value) + 9(the passed value through params) = 16
    expect(numericValueOfCounterText).toEqual(16);
  });
});

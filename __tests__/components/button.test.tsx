import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from '../../src/components';

describe('Test button functionality', () => {
  test('Component should show the correct passed text', () => {
    const {getByTestId} = render(
      <Button onPress={() => {}} title={'Click me!'} />,
    );
    const text = getByTestId('app-btn-text');
    expect(text.children[0]).toBe('Click me!');
  });

  test('Component should execute the onClick handler successfully', () => {
    const onClick = jest.fn();
    const {getByTestId} = render(
      <Button onPress={onClick} title={'Click me!'} />,
    );
    const button = getByTestId('app-btn');
    fireEvent(button, 'press');
    expect(onClick).toBeCalled();
  });

  test('Component should change the style when containerStyle is passed', () => {
    const {getByTestId} = render(
      <Button
        onPress={() => {}}
        title={'Click me!'}
        containerStyle={{backgroundColor: 'red'}}
      />,
    );
    const button = getByTestId('app-btn');
    expect(button).toHaveStyle({backgroundColor: 'red'});
  });

  test('Component should change the style of the text when textStyle is passed', () => {
    const {getByTestId} = render(
      <Button
        onPress={() => {}}
        title={'Click me!'}
        textStyle={{color: 'red'}}
      />,
    );
    const text = getByTestId('app-btn-text');
    expect(text).toHaveStyle({color: 'red'});
  });
});

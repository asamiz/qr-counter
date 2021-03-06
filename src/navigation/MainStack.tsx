import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamsList} from '../types';
import {STACK_OPTIONS} from './options';
import {CounterScreen, HomeScreen, QRCodeScreen} from '../screens';

const {Navigator, Screen} = createStackNavigator<RootStackParamsList>();

function MainStack() {
  return (
    <Navigator screenOptions={STACK_OPTIONS} initialRouteName={'HomeScreen'}>
      <Screen
        component={HomeScreen}
        name={'HomeScreen'}
        options={{animationTypeForReplace: 'pop'}} // To get the back animation while navigation
      />
      <Screen component={CounterScreen} name={'CounterScreen'} />
      <Screen component={QRCodeScreen} name={'QRCodeScreen'} />
    </Navigator>
  );
}

export default MainStack;

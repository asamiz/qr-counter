import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import {linkingConfig} from '../config';

function AppContainer() {
  return (
    <NavigationContainer linking={linkingConfig}>
      <MainStack />
    </NavigationContainer>
  );
}

export default AppContainer;

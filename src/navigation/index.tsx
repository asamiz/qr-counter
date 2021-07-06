import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

function AppContainer() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default AppContainer;

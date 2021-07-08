import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from './common';
import AppContainer from './navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux';
import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <AppContainer />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
});

export default App;

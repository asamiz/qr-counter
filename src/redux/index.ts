import AsyncStorage from '@react-native-community/async-storage';
import Logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {counterReducer} from './counter.reducer';

/* MiddleWare for redux */
const middleware = applyMiddleware(Logger);

/* Config for Redux Persist */
const config = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(config, counterReducer);
const store: any = createStore(persistedReducer, {} as any, middleware);
const persistor = persistStore(store);

export {store, persistor};

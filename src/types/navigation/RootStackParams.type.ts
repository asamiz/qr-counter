import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamsList = {
  HomeScreen: undefined;
  CounterScreen: undefined;
  QRCodeScreen: undefined;
};

export type HomeProps = {
  navigation: StackNavigationProp<RootStackParamsList, 'HomeScreen'>;
};

export type CounterProps = {
  navigation: StackNavigationProp<RootStackParamsList, 'CounterScreen'>;
  route: RouteProp<RootStackParamsList, 'QRCodeScreen'>;
};

export type QRCodeProps = {
  navigation: StackNavigationProp<RootStackParamsList, 'QRCodeScreen'>;
};

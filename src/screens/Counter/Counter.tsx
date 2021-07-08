import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components';
import {CounterProps} from '../../types';
import styles from './styles';

function Counter({navigation, route}: CounterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{0}</Text>
      <View style={styles.btnContainer}>
        <Button
          title={'QR Code'}
          onPress={() => navigation.navigate('QRCodeScreen')}
        />
        <Button
          title={'Go Home'}
          onPress={() => navigation.replace('HomeScreen')}
        />
      </View>
    </View>
  );
}

export default Counter;

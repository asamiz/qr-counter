import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components';
import styles from './styles';

function Counter() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{'0'}</Text>
      <View style={styles.btnContainer}>
        <Button
          title={'QR Code'}
          onPress={() => navigation.navigate('QRCodeScreen')}
        />
        <Button title={'Go Home'} onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

export default Counter;

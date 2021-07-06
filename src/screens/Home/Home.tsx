import React from 'react';
import {View} from 'react-native';
import {Button} from '../../components';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('CounterScreen')}
        title={'Counter Screen'}
      />
    </View>
  );
}

export default Home;

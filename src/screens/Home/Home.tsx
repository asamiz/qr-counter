import React from 'react';
import {View} from 'react-native';
import {Button} from '../../components';
import styles from './styles';
import {HomeProps} from '../../types';

function Home({navigation}: HomeProps) {
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

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../../components';
import {ADD_COUNTER_VALUE} from '../../redux/counter/actionTypes';
import {CounterProps, IAddCounterValue} from '../../types';
import styles from './styles';

function Counter({navigation, route}: CounterProps) {
  const dispatch = useDispatch();
  const state = useSelector((_state: any) => _state);
  const params: any = (route.params && route.params) || {};

  useEffect(() => {
    if (params.counterValue) {
      const action: IAddCounterValue = {
        payload: Number(params.counterValue),
        type: ADD_COUNTER_VALUE,
      };
      dispatch(action);
    }
  }, [dispatch, params.counterValue, route]);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{state.counterValue || 0}</Text>
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

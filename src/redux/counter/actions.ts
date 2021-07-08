import {Dispatch} from 'redux';
import {IAddCounterValue} from '../../types';
import {ADD_COUNTER_VALUE} from './actionTypes';

function addCounterValue(value: number) {
  return (dispatch: Dispatch<IAddCounterValue>) => {
    dispatch({type: ADD_COUNTER_VALUE, payload: value});
  };
}

export {addCounterValue};

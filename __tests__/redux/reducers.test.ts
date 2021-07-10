import {counterReducer} from '../../src/redux/counter';
import {ADD_COUNTER_VALUE} from '../../src/redux/counter/actionTypes';
import {IAddCounterValue, ICounterState} from '../../src/types';

describe('Testing redux reducers', () => {
  test('Reducer returns the initial state when passed wrong action', () => {
    const initialState: ICounterState = {counterValue: 0};
    const mockedAction: IAddCounterValue = {type: '', payload: undefined};
    expect(counterReducer(initialState, mockedAction)).toEqual(initialState);
  });

  test('Reducer returns the new state with an updated value of the previous state and the passed payload', () => {
    const initialState: ICounterState = {counterValue: 0};
    const mockedAction: IAddCounterValue = {
      type: ADD_COUNTER_VALUE,
      payload: 5,
    };
    expect(counterReducer(initialState, mockedAction)).toEqual({
      counterValue: 5,
    });
  });
});

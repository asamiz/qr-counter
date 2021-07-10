import {addCounterValue} from '../../src/redux/counter/actions';
import {ADD_COUNTER_VALUE} from '../../src/redux/counter/actionTypes';
import {IAddCounterValue} from '../../src/types';

describe('Testing redux actions', () => {
  test('Action should add value to counter value in the global state', () => {
    const mockedAction: IAddCounterValue = {
      type: ADD_COUNTER_VALUE,
      payload: 5,
    };
    const fun: any = addCounterValue(5);
    fun((rec: IAddCounterValue) => expect(rec).toEqual(mockedAction));
  });
});

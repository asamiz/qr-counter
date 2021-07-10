import {ICounterState, IAddCounterValue} from '../../types';
import {ADD_COUNTER_VALUE} from './actionTypes';

const initialState: ICounterState = {
  counterValue: 0,
};

function counterReducer(
  state: ICounterState = initialState,
  action: IAddCounterValue,
) {
  const prevStateCounter: number = state.counterValue || 0;
  switch (action.type) {
    case ADD_COUNTER_VALUE:
      return {...state, counterValue: prevStateCounter + action.payload};
    default:
      return state;
  }
}

export {counterReducer};

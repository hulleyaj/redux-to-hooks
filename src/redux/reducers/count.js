/* eslint-disable no-console */
import { DECREASE_COUNT, INCREASE_COUNT } from '../constants/actionTypes';

export const countSelector = (state) => state.count;

const initialState = {
  count: 0,
};

const count = (state = initialState, action) => {
  console.log('Hit the count reducer');

  switch (action.type) {
    case DECREASE_COUNT:
      return { count: state.count - 1 };
    case INCREASE_COUNT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default count;

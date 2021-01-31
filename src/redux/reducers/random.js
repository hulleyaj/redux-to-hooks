/* eslint-disable no-console */
import { RANDOM_ONE, RANDOM_TWO, RANDOM_THREE } from '../constants/actionTypes';

export const randomSelector = (state) => state.random;

const initialState = {};

const random = (state = initialState, action) => {
  console.log('Hit the random reducer');

  switch (action.type) {
    case RANDOM_ONE:
      return {};
    case RANDOM_TWO:
      return {};
    case RANDOM_THREE:
      return {};
    default:
      return state;
  }
};

export default random;

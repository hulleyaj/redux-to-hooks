import { DECREASE_COUNT, INCREASE_COUNT } from '../constants/actionTypes';

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

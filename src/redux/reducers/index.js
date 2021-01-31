import { combineReducers } from 'redux';
import count from './count';
import posts from './posts';
import random from './random';

export default combineReducers({
  count,
  posts,
  random,
});

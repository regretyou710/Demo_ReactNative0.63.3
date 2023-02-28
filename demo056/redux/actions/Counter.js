import actionTypes from './actionTypes';

// 遞增
export const increment = (value) => ({
  type: actionTypes.COUNTER_INCREMENT,
  payload: value,
});

// 遞減
export const decrement = (value) => ({
  type: actionTypes.COUNTER_DECREMENT,
  payload: value,
});

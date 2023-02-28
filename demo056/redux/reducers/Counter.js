import actionTypes from '../actions/actionTypes';

const initState = {num: 1};

export default (preState = initState, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_INCREMENT:     
      return {...preState, num: preState.num + action.payload};
    case actionTypes.COUNTER_DECREMENT:
      return {...preState, num: preState.num - action.payload};
    default:
      return preState;
  }
};

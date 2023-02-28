import actionTypes from '../actions/actionTypes';

const initState = {
  isLogin: false,
};

export default (preState = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {...preState, ...action, isLogin: true};
    case actionTypes.LOGIN_FAILED:
      return {isLogin: false};
    default:
      return preState;
  }
};

import actionTypes from './actionTypes';

/**
 * 登入成功
 * @param {object} userInfo
 */
export const loginSuccess = (userInfo) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: userInfo,
});

/**
 * 登入失敗
 */
export const loginFailed = () => ({
  type: actionTypes.LOGIN_FAILED,
});

/**
 * 登出
 */
// 異步action，就是指action的值為函數,異步action中一般都會調用同步action，異步action不是必須要用的。
export const logout = () => {
  return (dispatch) => {
    // 調用同步的action而使用異步action
    dispatch(loginFailed());
  };
};

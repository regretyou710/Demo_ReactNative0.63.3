import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  /**
   * 添加數據
   *
   * @param {string} key
   * @param {mixed} value
   * @returns {Promise}
   */
  static set = (key, value) => {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  };

  /**
   * 獲取數據
   *
   * @param {string} key
   * @returns {Promise}
   */
  static get = (key) => {
    return AsyncStorage.getItem(key).then((result) => {     
      if (result && result !== '') {
        return JSON.parse(result);
      } else {
        // throw new Error('獲取數據失敗');
        return '';
      }
    });
  };

  /**
   * 更新數據
   *
   * @param {string} key
   * @param {mixed} newValue
   * @returns {Promise}
   */
  static update = (key, newValue) => {
    return AsyncStorage.getItem(key).then((result) => {
      const finalResult =
        typeof result === 'string'
          ? newValue
          : Object.assign({}, result, newValue);

      AsyncStorage.setItem(key, JSON.stringify(finalResult));
    });
  };

  /**
   * 刪除指定的key
   *
   * @param {string} key
   */
  static delete = async (key) => {
    AsyncStorage.removeItem(key);
  };

  /**
   * 清空所有數據
   */
  static clear = () => {
    AsyncStorage.clear();
  };
}

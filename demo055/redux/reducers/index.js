import {combineReducers} from 'redux';
import Counter from './Counter';

// combineReducers會將每個reducer組合成一個rootReducer
// combineReducers({reducer1 , reducer2 , ....reducers});
export default combineReducers({Counter});

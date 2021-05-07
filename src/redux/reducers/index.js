import { combineReducers } from 'redux';
import loading from './loading';
import alert from './alert'
const rootReducers = combineReducers({
  loading,
  alert,
});

export default rootReducers;

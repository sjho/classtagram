import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import main from './mainInfoReducer';

const rootReducer = combineReducers({
  register, login, main
});

export default rootReducer;
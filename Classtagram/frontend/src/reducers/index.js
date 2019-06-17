import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import main from './mainInfoReducer';
import course from './courseInfoReducer';
import photopost from './photoPostReducer';
import photocourse from './photoCourseReducer';
import photo from './photoInfoReducer';

const rootReducer = combineReducers({
  register, login, main, course, photocourse, photopost, photo
});

export default rootReducer;
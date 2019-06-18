import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import main from './mainInfoReducer';
import course from './courseInfoReducer';
import photopost from './photoPostReducer';
import photocourse from './photoCourseReducer';
import photo from './photoInfoReducer';
import tagpost from './tagPostReducer';
import tagphoto from './tagPhotoReducer';
import tagput from './tagPutReducer';

const rootReducer = combineReducers({
  register, login, main, course, photocourse, photopost, photo, tagpost, tagphoto, tagput
});

export default rootReducer;
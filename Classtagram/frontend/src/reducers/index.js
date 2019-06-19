import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import main from './mainInfoReducer';
import usercourse from './userCourseReducer';
import course from './courseInfoReducer';
import courseput from './coursePutReducer';
import photopost from './photoPostReducer';
import photocourse from './photoCourseReducer';
import photouser from './photoUserReducer';
import photo from './photoInfoReducer';
import tagpost from './tagPostReducer';
import tagphoto from './tagPhotoReducer';
import tagput from './tagPutReducer';
import requestpost from './requestPostReducer';
import requestdelete from './requestDeleteReducer';
import requestcourse from './requestCourseReducer'

const rootReducer = combineReducers({
  register, login, main, usercourse, course, courseput, photocourse, photopost, photouser, photo, tagpost, tagphoto, tagput, requestpost, requestdelete, requestcourse
});

export default rootReducer;
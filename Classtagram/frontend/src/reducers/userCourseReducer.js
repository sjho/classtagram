import * as types from '../actions';
import { initialState } from '../components/registerPage'
import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'

export default function(state = initialState, action) {
  const response = action.response;

  switch(action.type) {
    case types.USER_COURSE_INFO_SUCCESS:
      return {response};

    //	return Object.assign({}, state, response.info, {
    //  		response: response
    //	});
    	// response.info = {
     //    username: ...
     //    password: ...
     //    major: ...
     //    ...
     //  }
     //  response.meta = {
     //    success: ...
     //    message: ...
     //  }
    case types.USER_COURSE_INFO_ERROR:
      return {response};

    default:
      return state;
  }
};
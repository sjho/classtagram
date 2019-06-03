import * as types from '../actions';
import { initialState } from '../components/mainPage'
import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'

export default function(state = initialState, action) {
  const response = action.response;

  switch(action.type) {
    case types.MAININFO_USER_SUCCESS:
    	return Object.assign({}, state, response.info {
      		response: response.meta
    	})
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
    case types.MAININFO_USER_ERROR:
    	return Object.assign({}, state, {
    		  response: response.meta
    	});

    default:
      return state;
  }
};
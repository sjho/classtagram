import * as types from '../actions';
import { initialState } from '../components/registerPage'
import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'

export default function(state = initialState, action) {
  const response = action.response;

  switch(action.type) {
    case types.REGISTER_USER_SUCCESS:
    	return Object.assign({}, state, {
      		response: response
    	})
    	// user(loginpage's stage 에 isLoggedIn과 response라는 key를 추가하고, 각각 true와 response(backend에서 온 Json)를 value)
    	// return { ...state, response };
    	// return {...state, response};
    case types.REGISTER_USER_ERROR:
    	return Object.assign({}, state, {
    		response:response
    	});

    // case types.LOGOUT_USER_SUCCESS:
    // localStorage.removeItem('user')
    // return Object.assign({}, state, {
    //   isLoggedIn: false
    // });
    default:
      return state;
  }
};
import * as types from '../actions';
import { initialState } from '../components/loginPage'
import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'

export default function(state = initialState, action) {
  const response = action.response;
  const user = action.user;
  
  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
    	localStorage.setItem('user', JSON.stringify(action.user));
    	return Object.assign({}, user, {
      		isLoggedIn: true,
      		response: response
    	})
    	// user(loginpage's stage 에 isLoggedIn과 response라는 key를 추가하고, 각각 true와 response(backend에서 온 Json)를 value)
    	// return { ...state, response };
    	// return {...state, response};
    case types.LOGIN_USER_ERROR:
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
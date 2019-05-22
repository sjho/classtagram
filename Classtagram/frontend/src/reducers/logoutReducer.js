import * as types from '../actions';
import { initialState } from '../components/mainPage'
import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'

export default function(state = initialState, action) {
  const response = action.response;
  const user = action.user;

  switch(action.type) {
    case types.LOGOUT_USER_SUCCESS:
      localStorage.removeItem('user')
      return Object.assign({}, state, {
        isLoggedIn: false,
        response: response
      });
    case types.LOGOUT_USER_ERROR:
      return Object.assign({}, user, {
        response:response
      });
    default:
      return user;
  }
};
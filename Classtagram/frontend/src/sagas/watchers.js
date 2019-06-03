import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'
import { registerSaga, loginSaga, logoutSaga, mainInfoSaga } from './authenticationSaga';

import * as types from '../actions';


export function* watchRegisterAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { user } = yield take(types.REGISTER_USER);
    // registerSaga를 call하고 user정보를 보냅니다.
    yield call(registerSaga, user);
  }
}

export function* watchLoginAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { user } = yield take(types.LOGIN_USER);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(loginSaga, user);
  }
}

export function* watchMainInfoAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { user } = yield take(types.MAIN_INFO);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(mainInfoSaga, user);
  }
}

export function* watchLogoutAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { user } = yield take(types.LOGOUT_USER);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(logoutSaga, user);
  }
}


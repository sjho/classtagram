import { take, takeLatest, call } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';

import * as types from '../actions';


export function* watchRegisterAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { user } = yield take(types.REGISTER_USER);
    console.log(user.username);
    // registerSaga를 call하고 user정보를 보냅니다.
    yield call(registerSaga, user);
  }
}

export function* watchLoginAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}

import { put, call } from 'redux-saga/effects';
import { registerUserService, loginUserService } from '../services/authenticationService';

import * as types from '../actions'

export function* registerSaga(payload) {
  try {
    // registerUserService를 call하고 payload정보(= watchRegisterAuthentication()에서의 user정보)를 보냅니다.
    const response = yield call(registerUserService, payload);
    // 회원가입이 성공했으면 그 다음 Action을 실행합니다.
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } catch(error) {
    // 회원가입이 실패했으면 다른 Action을 실행합니다.
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}

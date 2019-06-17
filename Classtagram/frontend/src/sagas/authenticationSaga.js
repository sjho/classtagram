import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'
import * as services from '../services/authenticationService';

import * as types from '../actions'

export function* registerSaga(payload) {
  try {
    // registerUserService를 call하고 payload정보(= watchRegisterAuthentication()에서의 user정보)를 보냅니다.
    const response = yield call(services.registerUserService, payload);
    // 회원가입이 성공했으면 그 다음 Action을 실행합니다.
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } catch(error) {
    // 회원가입이 실패했으면 다른 Action을 실행합니다.
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(services.loginUserService, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}

export function* mainInfoSaga(payload) {
  try {
    const response = yield call(services.mainInfoService, payload);
    yield put({ type: types.MAIN_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.MAIN_INFO_ERROR, error })
  }
}

export function* logoutSaga(payload) {
  try {
    const response = yield call(services.logoutUserService, payload);
    yield put({ type: types.LOGOUT_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.LOGOUT_USER_ERROR, error })
  }
}

export function* courseInfoSaga(payload) {
  try {
    const response = yield call(services.courseInfoService, payload);
    console.log(response)
    yield put({ type: types.COURSE_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.COURSE_INFO_ERROR, error })
  }
}

export function* photoPostSaga(payload) {
  try {
    const response = yield call(services.photoPostService, payload);
    console.log(response)
    yield put({ type: types.PHOTO_POST_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.PHOTO_POST_ERROR, error })
  }
}

export function* photoInfoSaga(payload) {
  try {
    const response = yield call(services.photoInfoService, payload);
    console.log(response)
    yield put({ type: types.PHOTO_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.PHOTO_INFO_ERROR, error })
  }
}

export function* photoCourseInfoSaga(payload) {
  try {
    const response = yield call(services.photoCourseInfoService, payload);
    console.log(response)
    yield put({ type: types.PHOTO_COURSE_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.PHOTO_COURSE_INFO_ERROR, error })
  }
}
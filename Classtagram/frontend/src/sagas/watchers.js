import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'
import * as saga from './authenticationSaga';

import * as types from '../actions';


export function* watchRegisterAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { user } = yield take(types.REGISTER_USER);
    // registerSaga를 call하고 user정보를 보냅니다.
    yield call(saga.registerSaga, user);
  }
}

export function* watchLoginAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { user } = yield take(types.LOGIN_USER);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.loginSaga, user);
  }
}

export function* watchMainInfoAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    yield take(types.MAIN_INFO);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.mainInfoSaga);
  }
}

export function* watchLogoutAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { user } = yield take(types.LOGOUT_USER);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.logoutSaga, user);
  }
}

export function* watchCourseInfoAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { course } = yield take(types.COURSE_INFO);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.courseInfoSaga, course);
  }
}

export function* watchPhotoPostAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { photo } = yield take(types.PHOTO_POST);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.photoPostSaga, photo);
  }
}

export function* watchPhotoInfoAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { photo } = yield take(types.PHOTO_INFO);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.photoInfoSaga, photo);
  }
}

export function* watchPhotoCourseInfoAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { course } = yield take(types.PHOTO_COURSE_INFO);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.photoCourseInfoSaga, course);
  }
}

export function* watchPhotoUserInfoAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { user } = yield take(types.PHOTO_USER_INFO);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.photoUserInfoSaga, user);
  }
}

export function* watchTagPhotoInfoAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { photo } = yield take(types.TAG_PHOTO_INFO);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.tagPhotoInfoSaga, photo);
  }
}

export function* watchTagPostAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { tag } = yield take(types.TAG_POST);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.tagPostSaga, tag);
  }
}

export function* watchTagPutAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { tag, info } = yield take(types.TAG_PUT);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(saga.tagPutSaga, {tag, info});
  }
}
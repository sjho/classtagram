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

export function* mainInfoSaga() {
  try {
    const response = yield call(services.mainInfoService);
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

export function* userCourseInfoSaga(payload) {
  try {
    const response = yield call(services.userCourseInfoService, payload);
    yield put({ type: types.USER_COURSE_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.USER_COURSE_INFO_ERROR, error })
  }
}

export function* courseInfoSaga(payload) {
  try {
    const response = yield call(services.courseInfoService, payload);
    yield put({ type: types.COURSE_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.COURSE_INFO_ERROR, error })
  }
}

export function* coursePutSaga(payload) {
  try {
    const response = yield call(services.coursePutService, payload);
    yield put({ type: types.COURSE_PUT_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.COURSE_PUT_ERROR, error })
  }
}

export function* coursePostSaga(payload) {
  try {
    const response = yield call(services.coursePostService, payload);
    yield put({ type: types.COURSE_POST_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.COURSE_POST_ERROR, error })
  }
}

export function* courseDeleteSaga(payload) {
  try {
    const response = yield call(services.courseDeleteService, payload);
    yield put({ type: types.COURSE_DELETE_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.COURSE_DELETE_ERROR, error })
  }
}

export function* photoPostSaga(payload) {
  try {
    const response = yield call(services.photoPostService, payload);
    yield put({ type: types.PHOTO_POST_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.PHOTO_POST_ERROR, error })
  }
}

export function* photoInfoSaga(payload) {
  try {
    const response = yield call(services.photoInfoService, payload);
    yield put({ type: types.PHOTO_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.PHOTO_INFO_ERROR, error })
  }
}

export function* photoDeleteSaga(payload) {
  try {
    const response = yield call(services.photoDeleteService, payload);
    yield put({ type: types.PHOTO_DELETE_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.PHOTO_DELETE_ERROR, error })
  }
}

export function* photoCourseInfoSaga(payload) {
  try {
    const response = yield call(services.photoCourseInfoService, payload);
    yield put({ type: types.PHOTO_COURSE_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.PHOTO_COURSE_INFO_ERROR, error })
  }
}

export function* photoUserInfoSaga(payload) {
  try {
    const response = yield call(services.photoUserInfoService, payload);
    yield put({ type: types.PHOTO_USER_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.PHOTO_USER_INFO_ERROR, error })
  }
}


export function* tagPhotoInfoSaga(payload) {
  try {
    const response = yield call(services.tagPhotoInfoService, payload);
    yield put({ type: types.TAG_PHOTO_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.TAG_PHOTO_INFO_ERROR, error })
  }
}

export function* tagPostSaga(payload) {
  try {
    const response = yield call(services.tagPostService, payload);
    yield put({ type: types.TAG_POST_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.TAG_POST_ERROR, error })
  }
}

export function* tagPutSaga(payload) {
  try {
    const response = yield call(services.tagPutService, payload);
    yield put({ type: types.TAG_PUT_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.TAG_PUT_ERROR, error })
  }
}

export function* requestPostSaga(payload) {
  try {
    const response = yield call(services.requestPostService, payload);
    yield put({ type: types.REQUEST_POST_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.REQUEST_POST_ERROR, error })
  }
}

export function* requestDeleteSaga(payload) {
  try {
    const response = yield call(services.requestDeleteService, payload);
    yield put({ type: types.REQUEST_DELETE_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.REQUEST_DELETE_ERROR, error })
  }
}


export function* requestCourseInfoSaga(payload) {
  try {
    const response = yield call(services.requestCourseInfoService, payload);
    yield put({ type: types.REQUEST_COURSE_INFO_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.REQUEST_COURSE_INFO_ERROR, error })
  }
}
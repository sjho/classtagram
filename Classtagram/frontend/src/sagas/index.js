import { fork } from 'redux-saga/effects';
import * as watch from './watchers';

export default function* startForman() {
  yield fork(watch.watchRegisterAuthentication);
  yield fork(watch.watchLoginAuthentication);
  yield fork(watch.watchMainInfoAuthentication);
  yield fork(watch.watchUserCourseInfoAuthentication);
  yield fork(watch.watchCourseInfoAuthentication);
  yield fork(watch.watchCoursePutAuthentication);
  yield fork(watch.watchCoursePostAuthentication);
  yield fork(watch.watchCourseDeleteAuthentication);
  yield fork(watch.watchPhotoPostAuthentication);
  yield fork(watch.watchPhotoInfoAuthentication);
  yield fork(watch.watchPhotoDeleteAuthentication);
  yield fork(watch.watchPhotoCourseInfoAuthentication);
  yield fork(watch.watchPhotoUserInfoAuthentication);
  yield fork(watch.watchTagPostAuthentication);
  yield fork(watch.watchTagPutAuthentication);
  yield fork(watch.watchTagPhotoInfoAuthentication);
  yield fork(watch.watchRequestPostAuthentication);
  yield fork(watch.watchRequestDeleteAuthentication);
  yield fork(watch.watchRequestCourseInfoAuthentication);
}

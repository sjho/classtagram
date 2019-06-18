import { fork } from 'redux-saga/effects';
import * as watch from './watchers';

export default function* startForman() {
  yield fork(watch.watchRegisterAuthentication);
  yield fork(watch.watchLoginAuthentication);
  yield fork(watch.watchMainInfoAuthentication);
  yield fork(watch.watchCourseInfoAuthentication);
  yield fork(watch.watchPhotoPostAuthentication);
  yield fork(watch.watchTagPostAuthentication);
  yield fork(watch.watchTagPutAuthentication);
  yield fork(watch.watchPhotoInfoAuthentication);
  yield fork(watch.watchPhotoCourseInfoAuthentication);
  yield fork(watch.watchTagPhotoInfoAuthentication);
}

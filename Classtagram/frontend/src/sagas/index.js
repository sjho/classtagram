import { fork } from 'redux-saga/effects';
import { watchRegisterAuthentication, watchLoginAuthentication, watchMainInfoAuthentication} from './watchers';

export default function* startForman() {
  yield fork(watchRegisterAuthentication);
  yield fork(watchLoginAuthentication);
  yield fork(watchMainInfoAuthentication);
}

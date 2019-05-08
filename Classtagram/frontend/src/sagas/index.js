import { fork } from 'redux-saga/effects';
import { watchRegisterAuthentication, watchLoginAuthentication} from './watchers';

export default function* startForman() {
  yield fork(watchRegisterAuthentication);
  yield fork(watchLoginAuthentication);
}

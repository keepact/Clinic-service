import { all } from 'redux-saga/effects';

import clinic from './clinic';

export default function* rootSaga() {
  return yield all([clinic]);
}

import { all } from 'redux-saga/effects';

import products from './products';
import basket from './basket';

export function* combinedSaga() {
  yield all([products(), basket()]);
}

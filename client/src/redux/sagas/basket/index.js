import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as b from '../../actions/basket';

import getBasketCount from './workers/getBasketCount';
import getBasketProducts from './workers/getBasketProducts';
import removeProduct from './workers/removeProduct';

export default function* basketSaga() {
  try {
    yield takeEvery(b.getBasketCountRequest, getBasketCount);
    yield takeLatest(b.getBasketProductsRequest, getBasketProducts);
    yield takeEvery(b.removeProduct, removeProduct);
  } catch (error) {}
}

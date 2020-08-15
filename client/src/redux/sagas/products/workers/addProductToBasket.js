import axios from 'axios';
import { call, put, select } from 'redux-saga/effects';
import {
  getBasketCountRequest,
  getBasketProductsRequest,
} from '../../../actions/basket';

export default function* ({ payload: id }) {
  try {
    const isVisibleBasket = yield select((store) => store.basket.isVisible);

    yield call(axios, {
      method: 'post',
      url: '/api/products/add',
      data: {
        id,
      },
    });

    yield put(getBasketCountRequest());
    if (isVisibleBasket) {
      yield put(getBasketProductsRequest());
    }
  } catch (error) {
    console.warn('Add product:', error);
  }
}

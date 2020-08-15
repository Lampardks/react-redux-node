import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  getBasketProductSucceed,
  getBasketProductFailed,
} from '../../../actions/basket';

export default function* () {
  try {
    const result = yield call(axios, {
      method: 'get',
      url: '/api/basket',
    });

    yield put(getBasketProductSucceed(result.data));
  } catch (error) {
    console.warn('Basket:', error);
    yield put(getBasketProductFailed(error));
  }
}

import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  getBasketCountSucceed,
  getBasketCountFailed,
} from '../../../actions/basket';

export default function* () {
  try {
    const result = yield call(axios, {
      method: 'get',
      url: '/api/basket/get-count',
    });

    yield put(getBasketCountSucceed(result.data));
  } catch (error) {
    console.warn('Basket count:', error);
    yield put(getBasketCountFailed(error));
  }
}

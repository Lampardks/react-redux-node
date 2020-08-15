import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  getProductsListSucceed,
  getProductsListFailed,
} from '../../../actions/products';

export default function* () {
  try {
    const result = yield call(axios, {
      method: 'get',
      url: '/api/products',
    });

    yield put(getProductsListSucceed(result.data));
  } catch (error) {
    console.warn('Products list:', error);
    yield put(getProductsListFailed());
  }
}

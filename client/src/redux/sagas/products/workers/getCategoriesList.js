import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  getCategoriesListSucceed,
  getCategoriesListFailed,
} from '../../../actions/products';

export default function* () {
  try {
    const result = yield call(axios, {
      method: 'get',
      url: '/api/products/categories',
    });

    yield put(getCategoriesListSucceed(result.data));
  } catch (error) {
    console.warn('Categories list:', error);
    yield put(getCategoriesListFailed());
  }
}

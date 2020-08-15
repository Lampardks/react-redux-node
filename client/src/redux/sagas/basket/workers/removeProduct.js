import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  getBasketCountRequest,
  getBasketProductsRequest,
} from '../../../actions/basket';

export default function* ({ payload: id }) {
  try {
    yield call(axios, {
      method: 'post',
      url: '/api/basket/remove',
      data: {
        id,
      },
    });

    yield put(getBasketCountRequest());
    yield put(getBasketProductsRequest());
  } catch (error) {
    console.warn('Remove product:', error);
  }
}

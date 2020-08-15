import { takeLatest, takeEvery } from 'redux-saga/effects';
import * as p from '../../actions/products';

import getProductsList from './workers/getProductsList';
import getCategoriesList from './workers/getCategoriesList';
import addProductToBasket from './workers/addProductToBasket';

export default function* getProductsSaga() {
  try {
    yield takeLatest(p.getProductsListRequest, getProductsList);
    yield takeLatest(p.getCategoriesListRequest, getCategoriesList);
    yield takeEvery(p.addProductToBasketRequest, addProductToBasket);
  } catch (error) {}
}

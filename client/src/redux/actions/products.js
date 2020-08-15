import { createAction } from 'redux-actions';

const MODULE = 'products';

export const getProductsListRequest = createAction(
  `${MODULE}/GET_PRODUCTS_LIST_REQUEST`,
);
export const getProductsListSucceed = createAction(
  `${MODULE}/GET_PRODUCTS_LIST_SUCCEED`,
);
export const getProductsListFailed = createAction(
  `${MODULE}/GET_PRODUCTS_LIST_FAILED`,
);

export const getCategoriesListRequest = createAction(
  `${MODULE}/GET_CATEGORIES_LIST_REQUEST`,
);
export const getCategoriesListSucceed = createAction(
  `${MODULE}/GET_CATEGORIES_LIST_SUCCEED`,
);
export const getCategoriesListFailed = createAction(
  `${MODULE}/GET_CATEGORIES_LIST_FAILED`,
);

export const addProductToBasketRequest = createAction(
  `${MODULE}/ADD_PRODUCT_TO_BASKET_REQUEST`,
);

export const resetProductsPage = createAction(`${MODULE}/RESET_PRODUCTS_PAGE`);

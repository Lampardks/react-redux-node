import { createAction } from 'redux-actions';

const MODULE = 'basket';

export const getBasketCountRequest = createAction(
  `${MODULE}/GET_BASKET_COUNT_REQUEST`,
);
export const getBasketCountSucceed = createAction(
  `${MODULE}/GET_BASKET_COUNT_SUCCEED`,
);
export const getBasketCountFailed = createAction(
  `${MODULE}/GET_BASKET_COUNT_FAILED`,
);

export const getBasketProductsRequest = createAction(
  `${MODULE}/GET_BASKET_PRODUCTS_REQUEST`,
);
export const getBasketProductSucceed = createAction(
  `${MODULE}/GET_BASKET_PRODUCTS_SUCCEED`,
);
export const getBasketProductFailed = createAction(
  `${MODULE}/GET_BASKET_PRODUCTS_FAILED`,
);

export const handleVisibleBasket = createAction(
  `${MODULE}/HANDLE_VISIBLE_BASKET`,
);

export const removeProduct = createAction(`${MODULE}/REMOVE_PRODUCT`);

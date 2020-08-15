import { createSelector } from 'reselect';

const getProductsBasket = (store) => store.basket.products;
const getProductsBasketSelector = createSelector(
  getProductsBasket,
  (data) => data,
);

export { getProductsBasketSelector };

import { handleActions } from 'redux-actions';
import * as b from '../actions/basket';

const initialState = {
  count: 0,
  products: [],
  totalPrice: 0,
  isVisible: false,
  isLoading: false,
  errorData: null,
  error: false,
};

const basket = handleActions(
  new Map([
    [
      b.getBasketCountRequest,
      (state) => ({
        ...state,
        ...{
          error: false,
        },
      }),
    ],
    [
      b.getBasketCountSucceed,
      (state, { payload }) => ({
        ...state,
        ...{
          count: payload,
        },
      }),
    ],
    [
      b.getBasketCountFailed,
      (state, { payload, error }) => ({
        ...state,
        ...{
          error,
          errorData: payload,
        },
      }),
    ],

    [
      b.getBasketProductsRequest,
      (state) => ({
        ...state,
        ...{
          isLoading: true,
          error: false,
        },
      }),
    ],
    [
      b.getBasketProductSucceed,
      (state, { payload }) => ({
        ...state,
        ...{
          isLoading: false,
          products: payload.products,
          totalPrice: payload.price,
        },
      }),
    ],
    [
      b.getBasketProductFailed,
      (state, { payload, error }) => ({
        ...state,
        ...{
          isLoading: false,
          error,
          errorData: payload,
        },
      }),
    ],

    [
      b.handleVisibleBasket,
      (state) => ({
        ...state,
        ...{
          isVisible: !state.isVisible,
        },
      }),
    ],
  ]),
  initialState,
);

export default basket;

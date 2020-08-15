import { handleActions } from 'redux-actions';
import * as p from '../actions/products';

const initialState = {
  products: [],
  isLoading: false,
  errorData: null,
  error: false,
};

const products = handleActions(
  new Map([
    [
      p.getProductsListRequest,
      (state) => ({
        ...state,
        ...{
          isLoading: true,
          error: false,
        },
      }),
    ],
    [
      p.getProductsListSucceed,
      (state, { payload }) => ({
        ...state,
        ...{
          isLoading: false,
          products: payload,
        },
      }),
    ],
    [
      p.getProductsListFailed,
      (state, { payload, error }) => ({
        ...state,
        ...{
          isLoading: false,
          error,
          errorData: payload,
        },
      }),
    ],

    [p.resetProductsPage, () => ({ ...initialState })],
  ]),
  initialState,
);

export default products;

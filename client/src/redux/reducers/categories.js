import { handleActions } from 'redux-actions';
import * as p from '../actions/products';

const initialState = {
  items: [],
  isLoading: false,
  errorData: null,
  error: false,
};

const categories = handleActions(
  new Map([
    [
      p.getCategoriesListRequest,
      (state) => ({
        ...state,
        ...{
          isLoading: true,
          error: false,
        },
      }),
    ],
    [
      p.getCategoriesListSucceed,
      (state, { payload }) => ({
        ...state,
        ...{
          isLoading: false,
          items: payload,
        },
      }),
    ],
    [
      p.getCategoriesListFailed,
      (state, { payload, error }) => ({
        ...state,
        ...{
          isLoading: false,
          error,
          errorData: payload,
        },
      }),
    ],
  ]),
  initialState,
);

export default categories;

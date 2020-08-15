import { combineReducers } from 'redux';

import categories from './categories';
import products from './products';
import basket from './basket';

const combinedReducer = combineReducers({ categories, products, basket });

export default combinedReducer;

import { Products } from '../pages/Products';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ProductPage from '../hoc/ProductPage';
import {
  getProductsListRequest,
  resetProductsPage,
  addProductToBasketRequest,
} from '../redux/actions/products';

const mapStateToProps = (store) => {
  const isLoading =
    store.products.isLoading || store.categories.items.length === 0;

  return {
    products: store.products.products,
    isLoading,
    categories: store.categories.items,
  };
};

const mapDispatchToProps = {
  getProductsList: getProductsListRequest,
  resetProductsPage,
  addProductToBasketRequest,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  ProductPage,
);

export default enhance(Products);

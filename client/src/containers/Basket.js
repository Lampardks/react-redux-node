import { Basket } from '../components/Basket';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  getBasketProductsRequest,
  handleVisibleBasket,
  removeProduct,
} from '../redux/actions/basket';
import { addProductToBasketRequest } from '../redux/actions/products';

const mapStateToProps = (store) => ({
  products: store.basket.products,
  totalPrice: store.basket.totalPrice,
  isLoading: store.basket.isLoading,
  isVisible: store.basket.isVisible,
});

const mapDispatchToProps = {
  getBasketProducts: getBasketProductsRequest,
  handleVisibleBasket,
  addProductToBasket: addProductToBasketRequest,
  removeProduct,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(Basket);

import { Header } from '../components/Header';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  getBasketCountRequest,
  handleVisibleBasket,
} from '../redux/actions/basket';

const mapStateToProps = (store) => ({
  countProducts: store.basket.count,
});

const mapDispatchToProps = {
  getBasketCount: getBasketCountRequest,
  handleVisibleBasket,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(Header);

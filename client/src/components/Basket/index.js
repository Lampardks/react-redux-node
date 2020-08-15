import React, { useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from '../../hooks/useOutsideClick ';
import { SvgClose } from '../SvgBasket';
import { BasketRow } from './BasketRow';

export const Basket = ({
  getBasketProducts,
  handleVisibleBasket,
  addProductToBasket,
  removeProduct,
  products,
  totalPrice,
  isVisible,
}) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isVisible) {
      handleVisibleBasket();
    }
  });

  useEffect(() => {
    if (isVisible) {
      getBasketProducts();
    }
  }, [isVisible]);

  const onClickCloseBasket = useCallback(() => {
    handleVisibleBasket();
  }, [handleVisibleBasket]);

  const onClickAddProduct = (id) => () => {
    addProductToBasket(id);
  };

  const onClickRemoveProduct = (id) => () => {
    removeProduct(id);
  };

  return isVisible ? (
    <aside className="e-commerce-shop-basket" ref={ref}>
      <SvgClose onClick={onClickCloseBasket} />
      {products.length > 0 ? (
        <>
          <div>
            <div className="e-commerce-shop-basket__list-products">
              {products.map((item) => (
                <BasketRow
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  count={item.count}
                  onClickAddProduct={onClickAddProduct}
                  onClickRemoveProduct={onClickRemoveProduct}
                />
              ))}
            </div>
            <div className="e-commerce-shop-basket__total-price">
              <div>Итого</div>
              <div>${totalPrice}</div>
            </div>
          </div>
        </>
      ) : (
        <p className="e-commerce-shop-basket__empty">Корзина пуста.</p>
      )}
      {products.length > 0 && (
        <div className="e-commerce-shop-basket__buy-container">
          <button className="e-commerce-shop-basket__buy-button">Купить</button>
        </div>
      )}
    </aside>
  ) : null;
};

Basket.propTypes = {
  getBasketProducts: PropTypes.func.isRequired,
  handleVisibleBasket: PropTypes.func.isRequired,
  addProductToBasket: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

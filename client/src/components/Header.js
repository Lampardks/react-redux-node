import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { SvgBasket } from './SvgBasket';

export const Header = ({
  getBasketCount,
  handleVisibleBasket,
  countProducts,
}) => {
  useEffect(() => {
    getBasketCount();
  }, []);

  const onClickOpenBasket = useCallback(() => {
    handleVisibleBasket();
  }, [handleVisibleBasket]);

  return (
    <header className="e-commerce-shop-header wrapper">
      <div className="e-commerce-shop-header__first-column" />
      <div className="e-commerce-shop-header__second-column">
        <Link to="/">
          <img src="uploads/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="e-commerce-shop-header__third-column">
        <button
          className="e-commerce-shop-header__basket-button"
          onClick={onClickOpenBasket}
        >
          <SvgBasket />
          <div
            className={cn('e-commerce-shop-header__basket-count', {
              'e-commerce-shop-header__basket-count--disable': !countProducts,
            })}
          >
            {countProducts}
          </div>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  getBasketCount: PropTypes.func.isRequired,
  handleVisibleBasket: PropTypes.func.isRequired,
  countProducts: PropTypes.number.isRequired,
};

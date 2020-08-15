import React from 'react';
import PropTypes from 'prop-types';

export const BasketRow = ({
  onClickAddProduct,
  onClickRemoveProduct,
  id,
  image,
  name,
  price,
  count,
}) => (
  <div className="e-commerce-shop-basket__product-row">
    <div className="e-commerce-shop-basket__product-image-container">
      <img
        className="e-commerce-shop-basket__product-image"
        src={image}
        alt={name}
        loading="lazy"
      />
    </div>
    <div className="e-commerce-shop-basket__product-info">
      <div className="e-commerce-shop-basket__product-name" title={name}>
        {name}
      </div>
      <div className="e-commerce-shop-basket__product-desc">
        <div className="e-commerce-shop-basket__product-count">
          <button
            className="e-commerce-shop-basket__product-button"
            onClick={onClickRemoveProduct(id)}
          >
            -
          </button>
          <span className="e-commerce-shop-basket__product-count-text">
            {count}
          </span>
          <button
            className="e-commerce-shop-basket__product-button"
            onClick={onClickAddProduct(id)}
          >
            +
          </button>
        </div>
        <div className="e-commerce-shop-basket__product-price">${price}</div>
      </div>
    </div>
  </div>
);

BasketRow.propTypes = {
  onClickAddProduct: PropTypes.func.isRequired,
  onClickRemoveProduct: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

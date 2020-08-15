import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ProductItem = ({
  id,
  image,
  name,
  category,
  price,
  count,
  addProductToBasket,
}) => (
  <Link className="products-list__product" to={`/product/${id}`}>
    <div className="products-list__product-image-container">
      <img
        src={image}
        alt={name}
        className="products-list__product-image"
        loading="lazy"
      />
    </div>
    <div className="products-list__product-category">{category}</div>
    <div className="products-list__product-title">{name}</div>
    <div className="products-list__product-price">${price}</div>
    <div className="products-list__product-count">на складе: {count}</div>
    <button
      onClick={addProductToBasket(id)}
      className="products-list__product-add"
    >
      В корзину
    </button>
  </Link>
);

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  addProductToBasket: PropTypes.func.isRequired,
};

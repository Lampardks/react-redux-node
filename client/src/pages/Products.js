import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../components/Loader';
import { ProductItem } from '../components/ProductItem';

export const Products = ({
  getProductsList,
  resetProductsPage,
  addProductToBasketRequest,
  products,
  isLoading,
  categories,
}) => {
  useEffect(() => {
    getProductsList();

    return () => {
      resetProductsPage();
    };
  }, []);

  const getCategory = useCallback(
    (id) => {
      const category = categories.find((item) => item.id === id);
      return category.categoryName;
    },
    [categories],
  );

  const addProductToBasket = (id) => (event) => {
    event.preventDefault();
    addProductToBasketRequest(id);
  };

  return (
    <main className="e-commerce-shop">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="products-list">
          {products.map((item) => (
            <ProductItem
              key={item.id}
              image={item.image}
              name={item.name}
              category={getCategory(item.categoryId)}
              price={item.price}
              count={item.count}
              id={item.id}
              addProductToBasket={addProductToBasket}
            />
          ))}
        </div>
      )}
    </main>
  );
};

Products.propTypes = {
  getProductsList: PropTypes.func.isRequired,
  resetProductsPage: PropTypes.func.isRequired,
  addProductToBasketRequest: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
};

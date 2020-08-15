import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './containers/Products';
import { DetailProduct } from './pages/DetailProduct';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Products />
      </Route>
      <Route path="/product/:id">
        <DetailProduct />
      </Route>
    </Switch>
  );
};

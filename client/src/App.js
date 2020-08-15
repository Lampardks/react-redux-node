import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import Header from './containers/Header';
import Basket from './containers/Basket';

function App({ store }) {
  const routes = useRoutes();

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <div className="wrapper">{routes}</div>
          <Basket />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

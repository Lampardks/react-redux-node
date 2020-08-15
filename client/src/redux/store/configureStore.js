import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducer from '../reducers/combinedReducer';
import { combinedSaga } from '../sagas/combinedSaga';
import { createSagaManager, createReducerManager } from '../utils';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default function configureStore(initialState = {}) {
  const store = createStore(
    combinedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  store.reducerManager = createReducerManager(combinedSaga, store);
  store.sagaManager = createSagaManager(sagaMiddleware.run);

  store.sagaManager.add('root', combinedSaga);

  if (module.hot) {
    module.hot.accept('../reducers/combinedReducer', () => {
      store.reducerManager.updateReducers();
    });

    module.hot.accept('../sagas/combinedSaga', () => {
      const { combinedSaga } = require('../sagas/combinedSaga');
      store.sagaManager.remove('root');
      store.sagaManager.add('root', combinedSaga);
    });
  }

  return store;
}

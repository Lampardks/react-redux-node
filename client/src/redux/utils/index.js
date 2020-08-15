import { combineReducers } from 'redux';
import { cancel } from 'redux-saga/effects';

export function createSagaManager(runSaga) {
  const injectedSagas = new Map();
  const isInjected = (key) => injectedSagas.has(key);

  return {
    add: (key, saga) => {
      if (isInjected(key)) return;

      const task = runSaga(saga);
      injectedSagas.set(key, task);

      return task;
    },
    remove: (key) => {
      if (isInjected(key)) {
        const task = injectedSagas.get(key);

        cancel(task);
        injectedSagas.delete(key);
      }
    },
  };
}

export function createReducerManager(initialReducers, store) {
  const reducers = { ...initialReducers };
  const asyncReducers = {};

  function updateReducers() {
    store.replaceReducer(
      combineReducers({
        ...reducers,
        ...asyncReducers,
      }),
    );
  }

  return {
    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return null;
      }

      asyncReducers[key] = reducer;
      updateReducers();
    },
    remove: (key) => {
      if (!key || !reducers[key]) {
        return null;
      }

      delete asyncReducers[key];
      updateReducers();
    },
    updateReducers,
  };
}

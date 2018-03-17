import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant()),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

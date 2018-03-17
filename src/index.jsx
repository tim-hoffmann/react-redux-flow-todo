// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from './store/configure-store';

const store = configureStore();

const app = document.getElementById('app');

if (app === null) {
  throw new Error('App Element not found');
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  app,
);

module.hot.accept('./components/app', () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    app,
  );
});

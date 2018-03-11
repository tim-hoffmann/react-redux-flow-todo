// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const app = document.getElementById('app');

if (app === null) {
  throw new Error('App Element not found');
}

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  app,
);

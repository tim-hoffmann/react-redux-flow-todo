// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router';
import TodoPage from './components/todo/todo-page';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TodoPage} />
  </Switch>
);

export default Routes;

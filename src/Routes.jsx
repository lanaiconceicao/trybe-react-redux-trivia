import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Game,
  Login,
  Settings,
} from './pages';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={ Login }
    />
    <Route
      exact
      path="/settings"
      component={ Settings }
    />
    <Route
      exact
      path="/game"
      component={ Game }
    />
  </Switch>
);

export default Routes;

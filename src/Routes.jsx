import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Game,
  Login,
  Settings,
} from './pages';

const Routes = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default Routes;

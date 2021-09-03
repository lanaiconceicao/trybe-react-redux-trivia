import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Game } from './pages';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/game" component={ Game } />
    </Switch>
  );
}

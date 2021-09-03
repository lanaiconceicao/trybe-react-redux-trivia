import React from 'react';
import './App.css';
import { Switch } from 'react-router';
import Routes from './Routes';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Routes />
      </Switch>
    </div>
  );
}

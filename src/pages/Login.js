import React, { Component } from 'react';
import logo from '../trivia.png';
import { LoginForm } from '../components';
// import PropTypes from 'prop-types';

export class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <div>
            <LoginForm />
          </div>
        </header>
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import { Header, Questions } from '../components';
// import PropTypes from 'prop-types';

class Game extends Component {
  render() {
    return (
      <div>
        <Header />
        <Questions />
      </div>
    );
  }
}

export default Game;

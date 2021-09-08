import React, { Component } from 'react';
import { Header } from '../components';
import Answers from '../components/Answers';
// import PropTypes from 'prop-types';

class Game extends Component {
  render() {
    return (
      <div>
        <Header />
        <Answers />
      </div>
    );
  }
}

export default Game;

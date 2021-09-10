import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export class Ranking extends Component {
  render() {
    return (
      <div>
        <p data-testid="ranking-title">Ranking</p>
        <Link to="/">
          <button
            type="button"
            data-testid="btn-go-home"
          >
            Voltar pro inicio
          </button>
        </Link>
      </div>
    );
  }
}

export default Ranking;

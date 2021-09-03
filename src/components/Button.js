import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Button extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { onClick, disabled, dataTestid } = this.props;
    const { text } = this.props;
    return (
      <Link to="/game">
        <button
          type="button"
          onClick={ onClick }
          disabled={ disabled }
          data-testid={ dataTestid }
        >
          {text}
        </button>
      </Link>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.func,
}.isRequired;

export default Button;

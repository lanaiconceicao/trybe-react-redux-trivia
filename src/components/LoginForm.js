import React, { Component } from 'react';
import { Button } from './Button';
// import PropTypes from 'prop-types';

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      gravatarEmail: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }))
  }

  render() {
    const { name, gravatarEmail } = this.state;
    const { handleChange, handleClick } = this;

    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    // Nesse link acima o regex significa anystring@anystring.anystring código do stackoverflow
    const validEmail = () => {
      const regex = /\S+@\S+.\S+/;
      return regex.test(gravatarEmail);
    };

    const validName = () => name && true;

    return (
      <form className="login-form">
        <label htmlFor="gravatarEmail">
          Gravatar E-mail
          <input
            type="text"
            data-testid="input-gravatar-email"
            name="gravatarEmail"
            onChange={handleChange}
            value={gravatarEmail}
          />
        </label>
        <label htmlFor="name">
          Player Name
          <input
            type="text"
            data-testid="input-player-name"
            name="name"
            onChange={handleChange}
            value={name}
          />
        </label>
        <Button
          text="Start!"
          dataTestid="btn-play"
          onClick={handleClick}
          disabled={!(validEmail() && validName())}
        />
      </form>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchToken, sendData } from '../redux/actions';
import { Button } from './Button';
import { SettingsButton } from './SettingsButton';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gravatarEmail: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleClick() {
    const { getToken, storeData } = this.props;
    getToken();
    storeData(this.state);
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

    const validName = () => !!name;

    return (
      <>
        <SettingsButton />
        <form className="login-form">
          <label htmlFor="gravatarEmail">
            Gravatar E-mail
            <input
              type="text"
              data-testid="input-gravatar-email"
              name="gravatarEmail"
              onChange={ handleChange }
              value={ gravatarEmail }
            />
          </label>
          <label htmlFor="name">
            Player Name
            <input
              type="text"
              data-testid="input-player-name"
              name="name"
              onChange={ handleChange }
              value={ name }
            />
          </label>
          <Button
            text="Start!"
            dataTestid="btn-play"
            onClick={ handleClick }
            disabled={ !(validEmail() && validName()) }
          />
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken()),
  storeData: (state) => dispatch(sendData(state)),
});

LoginForm.propTypes = {
  getToken: PropTypes.func.isRequired,
  storeData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);

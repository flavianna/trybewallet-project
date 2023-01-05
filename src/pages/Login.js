import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  validateEmailAddress = () => {
    const passwordMinLength = 6;
    const { email, password } = this.state;
    const passwordLength = password.length >= passwordMinLength;
    const emailAddress = email.includes('@') && email.includes('.com');
    return passwordLength && emailAddress;
  };

  clickOnButton = (event) => {
    event.preventDefault();
    const { history, dispatch } = this.props;
    const { email } = this.state;
    if (this.validateEmailAddress()) {
      dispatch(userLogin(email));
      history.push('/carteira');
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            placeholder="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleInputChange }
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={ this.handleInputChange }
            data-testid="password-input"
            required
          />
          <button
            type="submit"
            onClick={ this.clickOnButton }
            disabled={ !this.validateEmailAddress() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);

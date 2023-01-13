import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expensesTotal, convertedAmount } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ convertedAmount.toFixed(2) }</p>
        <p data-testid="converted-total-field">{expensesTotal}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { expenses } = state.wallet;
  let expensesTotal = 0;
  expenses.forEach((expense) => {
    expensesTotal += parseFloat(expense.value);
  });
  return {
    email: state.user.email,
    expensesTotal,
    convertedAmount: state.wallet.convertedAmount,
  };
};
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expensesTotal: PropTypes.number.isRequired,
  convertedAmount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../index.css';

class Table extends Component {
  deleteButton = (id) => {
    const { dispatch, wallet } = this.props;
    const expenses = wallet.expenses.filter((expense) => expense.id !== id);
    let expensesTotal = 0;
    let convertedAmount = 0;
    expenses.forEach((expense) => {
      expensesTotal += parseFloat(expense.value);
      convertedAmount += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    dispatch({
      type: 'DELETE_EXPENSES',
      expenses,
      expensesTotal,
      convertedAmount,
    });
  };

  render() {
    const { wallet: { expenses } } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((element, index) => (
              <tr
                key={ `${index} = ${element.id}` }
              >
                <td>{ element.description }</td>
                <td>{ element.tag }</td>
                <td>{ element.method }</td>
                <td>{ (+element.value).toFixed(2) }</td>
                <td>{ element.exchangeRates[element.currency].name }</td>
                <td>{ (+element.exchangeRates[element.currency].ask).toFixed(2) }</td>
                <td>
                  { (
                    +element.exchangeRates[element.currency].ask
              * +element.value)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => this.deleteButton(element.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Trybe</p>
      </div>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Table);

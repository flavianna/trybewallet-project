import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
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
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag}</td>
                <td>{ expense.method}</td>
                <td>{ (+expense.value).toFixed(2)}</td>
                <td>{ expense.exchangeRates[expense.currency].name}</td>
                <td>{ (+expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>
                  {(+expense.value * expense
                    .exchangeRates[expense.currency].ask).toFixed(2) }
                </td>
                <td> Real </td>
                <td> Edita/Excluir </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (globalState) => ({
  expenses: globalState.wallet.expenses,
});

Table.propTypes = {
  expense: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Table);

let convertedValue;

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  convertedAmount: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_SUCCESS':
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case 'NEW_EXPENSES':
    convertedValue = action.payload.value
    * action.payload.exchangeRates[action.payload.currency].ask;
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      convertedAmount: state.convertedAmount + convertedValue,
    };
  case 'DELETE_EXPENSES': {
    return {
      ...state,
      expenses: action.expenses,
      expensesTotal: action.expensesTotal,
      convertedAmount: action.convertedAmount,
    };
  }
  default:
    return state;
  }
};
export default wallet;

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  convertValue: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_SUCCESS':
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case 'NEW_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      convertValue: state.convertValue
        + (action.payload.value
          * action.payload.exchangeRates[action.payload.currency].ask),
    };
  default: return state;
  }
};

export default wallet;

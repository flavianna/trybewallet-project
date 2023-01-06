// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'REQUEST_SUCCESS':
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  default: return state;
  }
};

export default wallet;

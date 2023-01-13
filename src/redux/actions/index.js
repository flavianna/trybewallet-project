export const userLogin = (email) => ({
  type: 'USER_LOGIN',
  payload: email,
});

export const expensesInformation = (expensesInf) => ({
  type: 'NEW_EXPENSES',
  payload: expensesInf,
});

export const requesteApi = () => ({
  type: 'REQUEST_DATA',
});

export const deleteExpenses = () => ({
  type: 'DELETE_EXPENSES',
});

export const requestSuccess = (request) => ({
  type: 'REQUEST_SUCCESS',
  payload: {
    currencies: Object.keys(request),
  },
});

export function asyncCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    delete json.USDT;
    dispatch(requestSuccess(json));
  };
}

export function asyncExpenses() {
  return async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    delete json.USDT;
    return json;
  };
}

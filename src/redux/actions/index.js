// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const REQUEST_WALLET_DATA = 'REQUEST_WALLET';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const WALLET_API = 'https://economia.awesomeapi.com.br/json/all';

const requestWalletData = () => ({
  type: 'REQUEST_WALLET_DATA',
});

const responseSuccess = (requestApi) => ({
  type: 'REQUEST_SUCCESS',
  payload: {
    currencies: Object.keys(requestApi),
  },
});

export function fetchWalletApi() {
  return async (dispatch) => {
    dispatch(requestWalletData());
    const response = await fetch(WALLET_API);
    const json = await response.json();
    delete json.USDT;
    dispatch(responseSuccess(json));
  };
}

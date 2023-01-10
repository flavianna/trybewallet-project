// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;

import { USERLOGIN } from "./type";

const initialState = {
  userData: {},
  isLogedIn: false,
}

const userLogin = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERLOGIN:
      return {
        ...state,
        userData: payload,
        isLogedIn: true
      }
    case 'DEFAULT':
      return {
        userData: {},
        isLogedIn: false
      }
    default:
      return { ...state }
  }
}

export default userLogin;
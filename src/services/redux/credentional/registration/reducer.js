import { REGISTRATION } from "./type";

const initialState = {
  userdata: {},
  isRegistered: false
}

const registration = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTRATION:
      return {
        ...state,
        userdata: payload,
        isRegistered: true
      }
    case 'DEFAULT':
      return {
        isRegistered: false
      }
    default:
      return { ...state }
  }
}

export default registration;
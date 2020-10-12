import { CHOOSE_COURSE } from "./type";

const inisitalState = {
  courses: []
}

const coursesReducer = (state = inisitalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHOOSE_COURSE:
      return {
        ...state,
        courses: payload
      }
    default:
      return { ...state }
  }
}

export default coursesReducer;
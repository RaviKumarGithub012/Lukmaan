import { MY_COURSES } from "./type";

const initialState = {
  myCourses: null,
};

const coursesListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MY_COURSES:
      return {
        ...state,
        myCourses: payload,
      };
    default:
      return state;
  }
};

export default coursesListReducer;

import { combineReducers } from "redux";
import registration from "./credentional/registration/reducer";
import coursesReducer from "./choose-course/reducer";
import userLogin from "./credentional/login/reducer";
import dashboardReducer from "./dashboard/reducer";
import coursesListReducer from "./myCourses/reducer";

const rootReducer = combineReducers({
  registration,
  coursesReducer,
  userLogin,
  dashboardReducer,
  coursesListReducer,
});

export default rootReducer;

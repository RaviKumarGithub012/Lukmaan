import { combineReducers } from 'redux';
import registration from './credentional/registration/reducer';
import coursesReducer from './choose-course/reducer';
import userLogin from './credentional/login/reducer';
import dashboardReducer from './dashboard/reducer';

const rootReducer = combineReducers({
  registration,
  coursesReducer,
  userLogin,
  dashboardReducer
});

export default rootReducer;
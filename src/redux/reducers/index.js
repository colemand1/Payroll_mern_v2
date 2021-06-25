import employeeReducer from "./employee";
import addressReducer from './address';
import { combineReducers } from "redux";

const allReducers = combineReducers({
  employee: employeeReducer,
  address: addressReducer
});

export default allReducers;

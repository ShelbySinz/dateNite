//user combinedReducers from redux to combine our authReducer and errorReducer
//one single rootReducer

import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
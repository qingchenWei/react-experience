//合并各个模块的reducer
import { combineReducers } from "redux";
import loginReducer from "./login";
export default combineReducers({
  loginReducer,
});

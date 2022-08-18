//合并各个模块的reducer
import { combineReducers } from "redux";
import loginReducer from "./login";
import breadcrumbReducer from "./breadcrumb";
export default combineReducers({
  loginReducer,
  breadcrumbReducer,
});

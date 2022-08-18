const loginUser = (data) => ({ type: "LOGIN_USER", data });
const logoutUser = (data) => ({ type: "LOGOUT_USER", data });
const setBreadcrumbData = (data) => ({ type: "SET_BREADCRUMBDATA", data });
export { loginUser, logoutUser, setBreadcrumbData };

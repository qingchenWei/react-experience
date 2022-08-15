const loginUser = (data) => ({ type: "LOGIN_USER", data });
const logoutUser = (data) => ({ type: "LOGOUT_USER", data });

export { loginUser, logoutUser };

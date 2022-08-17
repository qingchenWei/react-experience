const userInfo = {
  userName: "",
  isLogin: false,
};
export default function userqReducer(preState = userInfo, action) {
  const { type, data } = action;
  switch (type) {
    case "LOGIN_USER":
      return { ...preState, ...data };
    case "LOGOUT_USER":
      return { ...preState, ...data };
    default:
      return userInfo;
  }
}

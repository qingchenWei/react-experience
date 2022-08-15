const userInfo = {
  userName: "",
  isLogin: false,
};
export default function userqReducer(preState = userInfo, action) {
  const { type, data } = action;
  switch (type) {
    case "LOGIN_USER":
      sessionStorage.setItem("isLogin", data.isLogin);
      return { ...preState, ...data };
    case "LOGOUT_USER":
      sessionStorage.removeItem("isLogin");
      return { ...preState, ...data };
    default:
      return userInfo;
  }
}

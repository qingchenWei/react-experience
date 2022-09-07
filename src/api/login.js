import request from "../utils/request";

const login = (data) => {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
};
const logout = (data) => {
  return request({
    url: "/user/logout",
    method: "post",
    data,
  });
};
export { login, logout };

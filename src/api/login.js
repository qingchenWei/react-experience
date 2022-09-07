import request from "../utils/request";

const getUserInfo = (data) => {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
};
export default getUserInfo;

import request from "../utils/request";

const getUserInfo = (data) => {
  return request({
    url: "/api/login",
    method: "post",
    data,
  });
};
export default getUserInfo;

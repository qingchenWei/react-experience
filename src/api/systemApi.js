import request from "@/utils/request";
//获取用户列表
const getUserList = (data) => {
  return request({
    url: "/user/getUserList",
    method: "post",
    data,
  });
};
// 删除用户
const deleteUser = (data) => {
  return request({
    url: "/user/deleteUser",
    method: "post",
    data,
  });
};
// 更新用户信息
const updateUser = (data) => {
  return request({
    url: "/user/updateUser",
    method: "post",
    data,
  });
};
export { getUserList, deleteUser, updateUser };

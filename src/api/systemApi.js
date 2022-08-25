import request from "@/utils/request";

const getUserList = (data) => {
  return request({
    url: "/api/getUserList",
    method: "post",
    data,
  });
};
export { getUserList };

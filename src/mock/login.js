import Mock from "mockjs";
let data_success = {
  status: "200", //表示账号密码正确，登录成功
  messsage: "登陆成功!",
  name: "超级管理员",
};

let data_error = {
  status: "-1", //表示账号密码错误，登录失败
  messsage: "用户名和密码不匹配!",
};
export default Mock.mock("/api/login", "post", (req) => {
  let req_data = JSON.parse(req.body);
  if (req_data.username == "admin" && req_data.password == "admin") {
    return data_success;
  }
  return data_error;
});

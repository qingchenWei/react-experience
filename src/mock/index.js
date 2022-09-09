var express = require("express");
var Mock = require("mockjs");
var router = express.Router();
let { v4 } = require("uuid");
let uuid = v4;

router.use("/login", function (req, res) {
  console.log(req.body);
  var data_success = Mock.mock({
    status: "200", //表示账号密码正确，登录成功
    roleName: "超级管理员",
    message: "登陆成功!",
  });
  var data_fail = Mock.mock({
    status: "-1", //用户名或密码错误,登陆失败
    data: [],
    message: "用户名或密码错误!",
  });
  if (req.body.username == "admin" && req.body.password == "admin") {
    return res.json(data_success);
  } else {
    return res.json(data_fail);
  }
});
router.use("/logout", function (req, res) {
  console.log(req.body);
  var data = Mock.mock({
    status: "200", //退出成功
    data: [],
    message: "退出成功!",
  });
  return res.json(data);
});
//用户管理页面api
let userList = Mock.mock([
  {
    id: 1,
    index: "1",
    account: "admin",
    name: "超级管理员",
    tel: "15729770978",
    status: true,
    loginTime: "2022-09-08 00:00:00",
    creatTime: "2022-09-07 00:00:00",
  },
  {
    id: 2,
    index: "2",
    account: "xiaowang",
    name: "小王",
    tel: "15729770927",
    status: false,
    loginTime: "2022-09-07 00:00:00",
    creatTime: "2022-09-05 00:00:00",
  },
  {
    id: 3,
    index: "3",
    account: "xiaoli",
    name: "小李",
    tel: "1578909878",
    status: false,
    loginTime: "2022-09-07 00:00:00",
    creatTime: "2022-09-04 00:00:00",
  },
]);
router.use("/getUserList", function (req, res) {
  let user = userList;
  if (req.body.account) {
    user = user.filter((item) => item.account == req.body.account);
  }
  if (req.body.name) {
    user = user.filter((item) => item.name == req.body.name);
  }
  if (req.body.status || req.body.status === false) {
    console.log(req.body.status, "status");
    user = user.filter((item) => item.status == req.body.status);
    console.log(user);
  }
  if (req.body.loginTime?.length > 0) {
    console.log(new Date(req.body.loginTime[0]).getTime());
    user = user.filter(
      (item) =>
        new Date(item.loginTime).getTime() >=
          new Date(req.body.loginTime[0]).getTime() &&
        new Date(item.loginTime).getTime() <=
          new Date(req.body.loginTime[1]).getTime()
    );
  }
  if (req.body.creatTime?.length > 0) {
    user = user.filter(
      (item) =>
        new Date(item.creatTime).getTime() >=
          new Date(req.body.creatTime[0]).getTime() &&
        new Date(item.creatTime).getTime() <=
          new Date(req.body.creatTime[1]).getTime()
    );
  }
  if (req.body.tel) {
    user = user.filter((item) => item.tel == req.body.tel);
  }

  var data = {
    status: "200",
    data: user,
    message: "查询成功",
  };
  return res.json(data);
});
router.use("/deleteUser", function (req, res) {
  console.log(req.body);
  userList = userList.filter((item) => item.id != req.body.id);
  var data = {
    status: "200",
    data: userList,
    message: "删除成功",
  };
  return res.json(data);
});
router.use("/updateUser", function (req, res) {
  console.log(req.body);
  userList.map((item) => {
    if (item.id == req.body.id) {
      item.status = req.body.user.status;
      item.name = req.body.user.name;
      item.tel = req.body.user.tel;
      item.account = req.body.user.account;
    }
  });
  var data = {
    status: "200",
    data: userList,
    message: "操作成功!",
  };
  return res.json(data);
});

module.exports = router;

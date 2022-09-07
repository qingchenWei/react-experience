var express = require("express");
var Mock = require("mockjs");
var router = express.Router();

router.use("/login", function (req, res) {
  console.log(req.body);
  var data_success = Mock.mock({
    status: "200", //表示账号密码正确，登录成功
    data: [],
    messsage: "登陆成功!",
  });
  var data_fail = Mock.mock({
    status: "-1", //用户名或密码错误,登陆失败
    data: [],
    messsage: "用户名或密码错误!",
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
    messsage: "退出成功!",
  });
  return res.json(data);
});

module.exports = router;

// const getUserList = Mock.mock("/api/getUserList", "post", (req) => {
//   let req_data = JSON.parse(req.body);
//   const tabeldata = [
//     {
//       key: "1",
//       name: "小王",
//       age: 32,
//       address: "上海",
//       tags: ["nice", "good"],
//     },
//     {
//       key: "2",
//       name: "老王",
//       age: 42,
//       address: "西安",
//       tags: ["loser"],
//     },
//     {
//       key: "21",
//       name: "老王",
//       age: 42,
//       address: "西安",
//       tags: ["loser"],
//     },
//     {
//       key: "22",
//       name: "老王",
//       age: 42,
//       address: "西安",
//       tags: ["loser"],
//     },
//     {
//       key: "23",
//       name: "老王",
//       age: 42,
//       address: "西安",
//       tags: ["loser"],
//     },
//     {
//       key: "24",
//       name: "老王",
//       age: 42,
//       address: "西安",
//       tags: ["loser"],
//     },
//     {
//       key: "25",
//       name: "老王",
//       age: 42,
//       address: "西安",
//       tags: ["loser"],
//     },
//     {
//       key: "26",
//       name: "老王",
//       age: 42,
//       address: "西安",
//       tags: ["loser"],
//     },
//     {
//       key: "37",
//       name: "章三",
//       age: 22,
//       address: "北京",
//       tags: ["cool", "teacher"],
//     },
//     {
//       key: "4",
//       name: "小李",
//       age: 11,
//       address: "天津",
//       tags: ["cool", "teacher"],
//     },
//     {
//       key: "47",
//       name: "小李",
//       age: 11,
//       address: "天津",
//       tags: ["cool", "teacher"],
//     },
//     {
//       key: "48",
//       name: "小李",
//       age: 11,
//       address: "天津",
//       tags: ["cool", "teacher"],
//     },
//   ];
//   let response = [];
//   if (req_data.name || req_data.age) {
//     tabeldata.forEach((item) => {
//       if (item.name == req_data.name || item.age == req_data.age) {
//         response.push(item);
//       }
//     });
//   } else {
//     response = tabeldata;
//   }
//   let data_success = {
//     status: "200", //表示账号密码正确，登录成功
//     data: response,
//     messsage: "查询成功!",
//   };
//   return data_success;
// });

// export { login, getUserList };

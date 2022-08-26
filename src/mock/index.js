import Mock from "mockjs";
Mock.setup({
  timeout: 100,
});

const login = Mock.mock("/api/login", "post", (req) => {
  let data_success = {
    status: "200", //表示账号密码正确，登录成功
    messsage: "登陆成功!",
    name: "超级管理员",
  };

  let data_error = {
    status: "-1", //表示账号密码错误，登录失败
    messsage: "用户名和密码不匹配!",
  };
  let req_data = JSON.parse(req.body);
  if (req_data.username == "admin" && req_data.password == "admin") {
    return data_success;
  }
  return data_error;
});
let data_error = {
  status: "200", //表示账号密码正确，登录成功
  data: [],
  messsage: "暂无数据!",
};
const getUserList = Mock.mock("/api/getUserList", "post", (req) => {
  let req_data = JSON.parse(req.body);
  const tabeldata = [
    {
      key: "1",
      name: "小王",
      age: 32,
      address: "上海",
      tags: ["nice", "good"],
    },
    {
      key: "2",
      name: "老王",
      age: 42,
      address: "西安",
      tags: ["loser"],
    },
    {
      key: "21",
      name: "老王",
      age: 42,
      address: "西安",
      tags: ["loser"],
    },
    {
      key: "22",
      name: "老王",
      age: 42,
      address: "西安",
      tags: ["loser"],
    },
    {
      key: "23",
      name: "老王",
      age: 42,
      address: "西安",
      tags: ["loser"],
    },
    {
      key: "24",
      name: "老王",
      age: 42,
      address: "西安",
      tags: ["loser"],
    },
    {
      key: "25",
      name: "老王",
      age: 42,
      address: "西安",
      tags: ["loser"],
    },
    {
      key: "26",
      name: "老王",
      age: 42,
      address: "西安",
      tags: ["loser"],
    },
    {
      key: "37",
      name: "章三",
      age: 22,
      address: "北京",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      name: "小李",
      age: 11,
      address: "天津",
      tags: ["cool", "teacher"],
    },
    {
      key: "47",
      name: "小李",
      age: 11,
      address: "天津",
      tags: ["cool", "teacher"],
    },
    {
      key: "48",
      name: "小李",
      age: 11,
      address: "天津",
      tags: ["cool", "teacher"],
    },
  ];
  let response = [];
  if (req_data.name || req_data.age) {
    tabeldata.forEach((item) => {
      if (item.name == req_data.name || item.age == req_data.age) {
        response.push(item);
      }
    });
  } else {
    response = tabeldata;
  }
  let data_success = {
    status: "200", //表示账号密码正确，登录成功
    data: response,
    messsage: "查询成功!",
  };
  return data_success;
});

export { login, getUserList };

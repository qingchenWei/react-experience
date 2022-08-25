import axios from "axios";
import { message } from "antd";
// 这里取决于登录的时候将 token 存储在哪里
const token = localStorage.getItem("token");

const request = axios.create({
  timeout: 5000,
});

// 设置post请求头
request.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 将 token 添加到请求头
    token && (config.headers.Authorization = token);
    config.headers["PartnerCode"] = "p_bcmotor";
    config.headers["sysProductVersion"] = "V020";
    config.headers["sysVersion"] = "V2";
    config.headers["RequestNo"] = "110";
    config.headers["accountid"] = null;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.status == 200) {
      return res.status == -1
        ? Promise.reject(message.error(res.messsage))
        : Promise.resolve(res);
    } else {
      return Promise.reject(message.error(res.messsage));
    }
  },
  (error) => {
    // 相应错误处理
    // 比如： token 过期， 无权限访问， 路径不存在， 服务器问题等
    switch (error.response.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        break;
      case 500:
        break;
      default:
        console.log("其他错误信息");
    }
    return Promise.reject(error);
  }
);

export default request;

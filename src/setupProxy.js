const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/user", {
      //遇见/api1前缀的请求，就会触发该代理配置
      target: "http://localhost:8888", //请求转发给谁
      changeOrigin: true, //控制服务器收到的请求头中Host的值
      logLevel: "debug",
      secure: false, //配置关闭证书签名验证
      pathRewrite: { "^/user": "/user" }, //重写请求路径(必须)
    })
  );
};

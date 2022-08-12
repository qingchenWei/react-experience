//antd自定义配置,样式自定义引入
const CracoLessPlugin = require("craco-less");
const path = require("path");
//npm i @craco/craco自定义配置   npm i craco-less加载less样式
module.exports = {
  plugins: [
    //主题配置
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  /*babel 样式按需引入  npm i babel-plugin-import*/
  babel: {
    plugins: [
      ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
    ],
  },
  /*新增结束*/
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
  },
};

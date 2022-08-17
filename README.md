## 项目技术栈

node@16.15.1 + react@18.2.0 + redux@4.2.0 + react-router@6.3.0  + axios@0.27.2  + antd@4.22.3 + mockjs@1.1.0

## 项目运行

```js
git clone https://github.com/qingchenWei/react-experience.git  

cd react-experience (进入项目)

npm install (安装依赖包)

npm run start (启动服务)
```

## 项目目录

```
|-- react

​    |-- craco.config.js    ---项目基础配置;别名配置、antd按需引入、配置代理等

​    |-- package-lock.json

​    |-- package.json

​    |-- config  				---npm run eject 后的配置文件目录

​    |-- public

​    |   |-- favicon.ico			---网站icon

​    |   |-- index.html  		---首页入口html文件

​    |-- src						---核心代码目录

​        |-- App.jsx			---组件入口文件

​        |-- index.js			---项目的整体js入口文件，包括路由配置等

​        |-- index.less

​        |-- setupProxy.js		---proxy代理配置文件

​        |-- api					---接口请求存放目录

​        |-- assets				----静态资源存放目录

​        |-- components		---公共组件存放目录

​        |-- layout				 ---项目布局存放目录

​        |-- mock				---mockjs模拟后端接口存放目录

​        |-- pages				---项目页面存放目录

​        |-- routers				---路由文件存放目录

​        |-- store					----redux存放目录

​        |-- styles					---样式存放目录

​        |-- utils						----工具类存放目录
```



## 功能一览

- [√] 登录、退出,mockjs模拟登陆接口

- [√] antd按需引入配置

- [√] redux和react-redux用法案例

- [√] mockjs模拟后端返回接口

- [√] axios封装,请求拦截、响应拦截使用

- [√] 常用hooks使用案例

  **本项目旨在学习react,react全家桶初体验**
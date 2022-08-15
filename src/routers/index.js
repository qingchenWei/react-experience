import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "../pages/Home"));
const Hooks = lazy(() =>
  import(/* webpackChunkName: "Hooks" */ "../pages/Hooks")
);
const Others = lazy(() =>
  import(/* webpackChunkName: "Others" */ "../pages/Others")
);
const routes = [
  {
    key: "/home",
    path: "/home",
    label: "首页",
    element: <Home />,
    auth: 1,
    icon: <PieChartOutlined />,
  },
  {
    key: "/react",
    path: "/react",
    label: "react",
    auth: 1,
    icon: <TeamOutlined />,
    children: [
      {
        key: "/react/react-hooks",
        path: "/react/react-hooks",
        label: "hooks",
        auth: 1,
        element: <Hooks />,
      },
    ],
  },
  {
    key: "/system",
    label: "系统管理",
    auth: 1,
    icon: <FileOutlined />,
    children: [
      {
        key: "/system/menu",
        path: "/system/menu",
        label: "菜单管理",
        auth: 1,
        element: <Others></Others>,
      },
      {
        key: "/system/user",
        path: "/system/user",
        label: "用户管理",
        element: <div>用户管理</div>,
        auth: 1,
      },
    ],
  },
];

//根据路径获取路由
const checkAuth = (routers, path) => {
  for (const data of routers) {
    if (data.path == path) return data;
    if (data.children) {
      const res = checkAuth(data.children, path);
      if (res) return res;
    }
  }
  return null;
};
const checkRouterAuth = (path) => {
  let auth = null;
  auth = checkAuth(routes, path);
  return auth;
};
export { routes, checkRouterAuth };

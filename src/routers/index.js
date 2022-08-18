import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { lazy } from "react";
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "../pages/Home"));
const Hooks = lazy(() =>
  import(/* webpackChunkName: "Hooks" */ "../pages/Hooks")
);
const Others = lazy(() =>
  import(/* webpackChunkName: "Others" */ "../pages/Others")
);
const Rudex = lazy(() =>
  import(/* webpackChunkName: "Rudex" */ "../pages/Redux")
);
const routes = [
  {
    key: "/home", //menu渲染菜单使用
    path: "/home", //useRouters渲染路由使用
    label: "首页", //menu渲染菜单使用(菜单名)
    element: <Home />, //useRouters渲染路由使用
    hidden: 0, ////menu渲染菜单使用,是否需要隐藏该项菜单
    icon: <PieChartOutlined />, //menu渲染菜单使用(icon图标)
    children: null,
  },
  {
    key: "/react",
    path: "/react",
    label: "react",
    hidden: 0,
    icon: <TeamOutlined />,
    children: [
      {
        key: "/react/react-hooks",
        path: "/react/react-hooks",
        label: "hooks",
        hidden: 0,
        element: <Hooks />,
        children: null,
      },
      {
        key: "/react/redux",
        path: "/react/redux",
        label: "redux",
        hidden: 0,
        element: <Rudex />,
        children: null,
      },
    ],
  },
  {
    key: "/system",
    label: "系统管理",
    hidden: 0,
    icon: <FileOutlined />,
    children: [
      {
        key: "/system/menu",
        path: "/system/menu",
        label: "菜单管理",
        hidden: 0,
        element: <Others></Others>,
        children: null,
      },
      {
        key: "/system/user",
        path: "/system/user",
        label: "用户管理",
        element: <Others></Others>,
        hidden: 0,
        children: null,
      },
    ],
  },
];

//判断加载路由是否在路由表里面,路由权限控制
const checkRouterPermission = (routers, path) => {
  for (const data of routers) {
    if (data.path == path) return true;
    if (data.children) {
      const res = checkRouterPermission(data.children, path);
      if (res) return true;
    }
  }
  return false;
};

export { routes, checkRouterPermission };

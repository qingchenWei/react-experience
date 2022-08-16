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
const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ "../pages/404")
);
const routes = [
  {
    key: "/home", //menu渲染菜单使用
    path: "/home", //useRouters渲染路由使用
    label: "首页", //menu渲染菜单使用(菜单名)
    element: <Home />, //useRouters渲染路由使用
    hidden: 0, ////menu渲染菜单使用,是否需要隐藏该项菜单
    icon: <PieChartOutlined />, //menu渲染菜单使用(icon图标)
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
      },
      {
        key: "/system/user",
        path: "/system/user",
        label: "用户管理",
        element: <div>用户管理</div>,
        hidden: 0,
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
//获取可展示的菜单
// const checkShowMenu = (routes) => {
//   return routes.filter((item) => {
//     if (item.hidden) {
//       return false;
//     }
//     if (item?.children?.length > 0) {
//       item.children = checkShowMenu(item.children);
//     }
//     return true;
//   });
// };

export { routes, checkRouterPermission };

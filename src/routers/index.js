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
//路由本项目采取全局一级路由
const routes = [
  {
    key: "/home",
    exact: "true",
    label: "首页",
    component: <Home />,
    auth: [1],
    icon: <PieChartOutlined />,
  },
  {
    key: "/react",
    exact: "true",
    label: "react",
    auth: [1],
    icon: <TeamOutlined />,
    children: [
      {
        key: "/react-hooks",
        exact: "true",
        label: "hooks",
        auth: [1],
        component: <Hooks />,
      },
    ],
  },
  {
    key: "/caidan",
    exact: "true",
    label: "菜单",
    component: <div>菜单</div>,
    auth: [1],
    icon: <FileOutlined />,
    children: [
      {
        key: "/caidanone",
        exact: "true",
        label: "菜单",
        auth: [1],
        component: <Others></Others>,
      },
      {
        key: "/caidantwo",
        exact: "true",
        label: "菜单",
        component: <div>菜单</div>,
        auth: [1],
      },
    ],
  },
];

export default routes;

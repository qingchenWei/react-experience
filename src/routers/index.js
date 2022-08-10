import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { lazy } from "react";
const Home = lazy(() =>
  import(/* webpackChunkName: "LoadingDetail" */ "../pages/Home")
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
    key: "/one",
    exact: "true",
    label: "菜单",
    auth: [1],
    icon: <TeamOutlined />,
    children: [
      {
        key: "/onetwo",
        exact: "true",
        label: "菜单",
        auth: [1],
        component: <div>二级菜单</div>,
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
        component: <div>菜单</div>,
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

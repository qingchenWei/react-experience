import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { lazy } from "react";
const Home = lazy(() =>
  import(/* webpackChunkName: "LoadingDetail" */ "../pages/Home")
);
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
    label: "一级菜单",
    auth: [1],
    icon: <TeamOutlined />,
    children: [
      {
        key: "/one/two",
        exact: "true",
        label: "二极菜单",
        auth: [1],
        children: [
          {
            key: "/one/two/three",
            exact: "true",
            label: "三级菜单",
            component: <div>三级菜单</div>,
            auth: [1],
          },
        ],
      },
    ],
  },
  {
    key: "/caidan",
    exact: "true",
    label: "二级菜单",
    component: <div>二级菜单</div>,
    auth: [1],
    icon: <FileOutlined />,
    children: [
      {
        key: "/caidan/one",
        exact: "true",
        label: "二级菜单",
        auth: [1],
        component: <div>二级菜单</div>,
      },
      {
        key: "/caidan/two",
        exact: "true",
        label: "二级菜单",
        component: <div>二级菜单</div>,
        auth: [1],
      },
    ],
  },
];

export default routes;

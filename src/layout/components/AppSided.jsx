import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { routes } from "../../routers";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBreadcrumbData } from "../../store/actions";
const { Sider } = Layout;

export default function AppSided() {
  const rootSubmenuKeys = [];
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const routesArr = JSON.parse(JSON.stringify(routes));
  routes.forEach((item) => {
    rootSubmenuKeys.push(item.key);
  });
  //侧边栏添加默认打开项,初次进入侧边栏选中项为路由第一位
  const [openKeys, setOpenKeys] = useState([
    sessionStorage.getItem("keyPath") || rootSubmenuKeys[0],
  ]);
  const menuClick = ({ keyPath }) => {
    navigate(keyPath[0]);
    const iconRouter = findRoute(routesArr, keyPath[0]);
    // dispath
    dispatch(setBreadcrumbData(iconRouter));
    //sessionStorage存keyPath,防止页面刷新侧边栏选中项不展开
    sessionStorage.setItem("keyPath", keyPath[keyPath.length - 1]);
  };
  const findRoute = (route, keyPath) => {
    return route.find((item) => {
      if (item.path == keyPath) {
        return item;
      }
      if (item?.children?.length > 0) {
        return (item.children = findRoute(item.children, keyPath));
      }
    });
  };
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo"></div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
        selectedKeys={[location.pathname]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={menuClick}
        items={routes}
      ></Menu>
    </Sider>
  );
}

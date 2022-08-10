import React, { useState } from "react";
import { Layout, Menu } from "antd";
import routers from "../../routers";
import { useNavigate, useLocation } from "react-router-dom";
const { Sider } = Layout;

export default function AppSided() {
  const rootSubmenuKeys = [];
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  routers.forEach((item) => {
    rootSubmenuKeys.push(item.key);
  });
  //侧边栏添加默认打开项,初次进入侧边栏选中项为路由第一位
  const [openKeys, setOpenKeys] = useState([
    sessionStorage.getItem("keyPath") || rootSubmenuKeys[0],
  ]);

  const menuClick = ({ keyPath }) => {
    console.log(keyPath, "keyPath");
    navigate(keyPath[0]);
    //sessionStorage存keyPath,防止页面刷新侧边栏选中项不展开
    sessionStorage.setItem("keyPath", keyPath[keyPath.length - 1]);
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
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={menuClick}
        items={routers}
      ></Menu>
    </Sider>
  );
}

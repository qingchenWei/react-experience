import React, { useState } from "react";
import { Layout, Menu } from "antd";
import routers from "../../routers";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

export default function AppSided() {
  const [collapsed, setCollapsed] = useState(false);
  const usenavigate = useNavigate();
  const menuClick = ({ keyPath }) => {
    console.log(keyPath);
    usenavigate(keyPath[0]);
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
        defaultSelectedKeys={["1"]}
        mode="inline"
        onClick={menuClick}
        items={routers}
      ></Menu>
    </Sider>
  );
}

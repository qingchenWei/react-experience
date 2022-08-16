import React, { Component } from "react";
import { Layout, Avatar, Dropdown, Menu } from "antd";
import store from "../../store/store";
import { logoutUser } from "../../store/actions";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

export default function AppHeader() {
  const { userName } = store.getState();
  const navigate = useNavigate();
  const onClick = () => {
    store.dispatch(
      logoutUser({
        userName: "",
        isLogin: false,
      })
    );
    navigate("/");
  };

  const menu = (
    <Menu
      onClick={onClick}
      className="my-menu"
      items={[
        {
          label: "退出登录",
          key: "1",
        },
      ]}
    />
  );
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        background: "#fff",
        boxShadow: "0 0 10px 0 #000",
      }}
    >
      <Avatar
        size={44}
        style={{
          color: "#f56a00",
          backgroundColor: "#fff",
          border: "1px solid #333",
        }}
        src="https://joeschmoe.io/api/v1/random"
      >
        W
      </Avatar>
      <Dropdown overlay={menu}>
        <div className="user-name">
          {userName || sessionStorage.getItem("userName")}
        </div>
      </Dropdown>
    </Header>
  );
}

import React from "react";
import { Layout, Avatar, Dropdown, Menu } from "antd";
import { logoutUser } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

export default function AppHeader() {
  const { userName } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //退出登录
  const onClick = () => {
    dispatch(
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
        <div className="user-name">{userName}</div>
      </Dropdown>
    </Header>
  );
}

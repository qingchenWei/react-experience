import React, { Component } from "react";
import { Layout, Avatar } from "antd";
import store from "../../store/store";
const { Header } = Layout;

export default class AppHeader extends Component {
  render() {
    const { userName } = store.getState();
    return (
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          background: "#001529",
        }}
      >
        <Avatar
          size={44}
          style={{
            color: "#f56a00",
            backgroundColor: "#fff",
          }}
          src="https://joeschmoe.io/api/v1/random"
        >
          W
        </Avatar>
        <div className="user-name">{userName}</div>
      </Header>
    );
  }
}

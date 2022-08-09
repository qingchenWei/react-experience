import React, { Component } from "react";
import { Layout } from "antd";
import AppHeader from "./components/AppHeader";
import AppSided from "./components/AppSided";
import AppMain from "./components//AppMain";
import "./index.less";
const { Footer } = Layout;

export default class index extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AppSided></AppSided>
        <Layout className="site-layout">
          <AppHeader></AppHeader>
          <AppMain></AppMain>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

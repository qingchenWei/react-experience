import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import { Routes, Route } from "react-router-dom";
import routers from "../../routers";
const { Content } = Layout;
export default class AppMain extends Component {
  state = {
    routeArr: [],
  };
  arr = [];
  getRouters = (routers) => {
    routers.map((item) => {
      if (item.children?.length) {
        this.getRouters(item.children);
      } else {
        this.arr.push(item);
      }
    });
  };
  componentDidMount() {
    this.getRouters(routers);
    this.setState({
      routeArr: this.arr,
    });
  }
  render() {
    return (
      <Content
        style={{
          margin: "0 16px",
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            height: "100%",
          }}
        >
          <Routes>
            {this.state.routeArr.map((item) => {
              return (
                <Route
                  key={item.key}
                  exact={item.exact}
                  path={item.key}
                  element={item.component}
                ></Route>
              );
            })}
          </Routes>
        </div>
      </Content>
    );
  }
}

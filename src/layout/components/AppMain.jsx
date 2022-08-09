import React, { Component } from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import routers from "../../routers";
import { Suspense } from "react";
import Nprogress from "../../components/Nprogress";
const { Content } = Layout;
export default class AppMain extends Component {
  state = {
    routeArr: [],
  };
  arr = [];
  getRouters = (routers) => {
    routers.forEach((item) => {
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
          <Suspense fallback={<Nprogress />}>
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
          </Suspense>
        </div>
      </Content>
    );
  }
}

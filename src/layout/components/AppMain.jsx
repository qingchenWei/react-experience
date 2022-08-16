import React, { useEffect } from "react";
import { Layout } from "antd";
import { useNavigate, useRoutes } from "react-router-dom";
import { routes, checkRouterPermission } from "../../routers";
import { Suspense } from "react";
import Nprogress from "../../components/Nprogress";
const { Content } = Layout;
export default function AppMain() {
  const muRoutes = useRoutes(routes);
  const navigate = useNavigate();
  useEffect(() => {
    //路由鉴权  不符合跳转404
    let isPermission = checkRouterPermission(routes, location.pathname);
    //是否登陆
    const isLogin = sessionStorage.getItem("isLogin") || "";
    if (isPermission && isLogin) {
      //鉴权通过
      console.log(333);
    } else {
      //鉴权失败
      navigate("/404", { replace: true });
    }
  }, []);
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
        <Suspense fallback={<Nprogress />}>{muRoutes}</Suspense>
      </div>
    </Content>
  );
}

import React, { useEffect } from "react";
import { Layout } from "antd";
import { useNavigate, useRoutes, useLocation } from "react-router-dom";
import { routes, checkRouterPermission } from "../../routers";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import Nprogress from "../../components/Nprogress";
const { Content } = Layout;
export default function AppMain() {
  const myRoutes = useRoutes(routes);
  const navigate = useNavigate();
  const location = useLocation();
  const { isLogin } = useSelector((state) => state.loginReducer);

  useEffect(() => {
    const isPermission = checkRouterPermission(routes, location.pathname);
    //路由鉴权并判断用户是否登陆   不符合跳转404
    const loginPermission = isLogin && isPermission;
    loginPermission ? "" : navigate("/404", { replace: true });
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
        <Suspense fallback={<Nprogress />}>{myRoutes}</Suspense>
      </div>
    </Content>
  );
}

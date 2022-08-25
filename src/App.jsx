import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import { Suspense } from "react";
// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale
import "moment/locale/zh-cn";
import { ConfigProvider } from "antd";
import locale from "antd/es/locale/zh_CN";
import Layout from "./layout";
import "./styles/base.less";
function App() {
  return (
    <Suspense fallback="loading...">
      <ConfigProvider locale={locale}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" replace={true} />}
          ></Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<Layout />}></Route>
        </Routes>
      </ConfigProvider>
    </Suspense>
  );
}

export default App;

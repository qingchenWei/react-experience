import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import { Suspense } from "react";
import Nprogress from "./components/Nprogress";
import Layout from "./layout";
import "./styles/base.less";
function App() {
  return (
    <Suspense fallback={<Nprogress />}>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" replace={true} />}
        ></Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<Layout />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;

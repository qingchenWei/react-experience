import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { Suspense } from "react";
import Nprogress from "./components/Nprogress";
import Layout from "./layout";
import "./styles/base.less";
function App() {
  return (
    <Suspense fallback={<Nprogress />}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<Layout />}></Route>
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </Suspense>
  );
}

export default App;

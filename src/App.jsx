import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./layout";
import "./styles/base.less";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/*" element={<Layout />}></Route>
      <Route path="*" element={<Navigate to="/login" replace={true} />} />
    </Routes>
  );
}

export default App;

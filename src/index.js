import React from "react";
import { createRoot } from "react-dom/client";
import "./index.less";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./mock/login";
const react = createRoot(document.getElementById("root"));

react.render(
  /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={<div>加载中~~~~~</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

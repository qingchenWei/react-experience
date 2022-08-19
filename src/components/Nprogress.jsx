import React, { useEffect } from "react";
import { Spin } from "antd";
import "nprogress/nprogress.css";
import nprogress from "nprogress";

export default function Nprogress() {
  useEffect(() => {
    nprogress.start();
    return () => {
      nprogress.done();
    };
  });

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Spin size="large" tip="拼命加载中......"></Spin>
      </div>
    </React.Fragment>
  );
}

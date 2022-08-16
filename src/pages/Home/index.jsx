import { Button } from "antd";
import React from "react";
import store from "../../store/store";

export default function Index() {
  const { userName, tel } = store.getState();
  return (
    <div>
      <Button type="primary">asd</Button>
      {userName}---{tel}
    </div>
  );
}

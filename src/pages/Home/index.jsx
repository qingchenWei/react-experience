import React from "react";
import store from "../../store/store";

export default function Index() {
  const { userName, tel } = store.getState();
  return (
    <div>
      {userName}---{tel}
    </div>
  );
}

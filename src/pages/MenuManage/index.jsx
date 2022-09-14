import React, { useState, useContext, useReducer } from "react";
import Context from "./context";
import { Button } from "antd";
import Son from "./any";
export default function Index() {
  const [data, setData] = useState({
    msg: "我是父组件的数据",
  });
  return (
    <div>
      <Context.Provider value={data}>
        <Any></Any>
      </Context.Provider>
      <Son></Son>
    </div>
  );
}
function Any() {
  const { msg } = useContext(Context);
  // const [state, dispath] = useReducer(reducer, initialArg, init);
  //指定初始state
  //1、将初始state作为第二个参数传入
  function init(initialCount) {
    console.log("initialCount===", initialCount);
    return initialCount;
  }
  function reducer(state, action) {
    console.log("action", action);
    switch (action.type) {
      case "increment":
        return { count: state.count - 1 };
      case "add":
        return { count: state.count + 1 };
      case "reset":
        return { count: init(action.payload) };
      default:
        throw new Error("Must not be negative, and also an integer.");
    }
  }
  const [state, dispath] = useReducer(reducer, { count: 1 }, init);
  //2、惰性初始化.将第二个参数作为第三个函数入参传入
  return (
    <div>
      {msg}
      <Button type="primary" onClick={() => dispath({ type: "increment" })}>
        减
      </Button>
      <Button type="primary" onClick={() => dispath({ type: "add" })}>
        加
      </Button>
      <Button
        type="primary"
        onClick={() => dispath({ type: "reset", payload: 1 })}
      >
        重置
      </Button>
      <Button
        type="primary"
        onClick={() => dispath({ type: "2222", payload: 1 })}
      >
        抛错
      </Button>
      <div>{state.count}</div>
    </div>
  );
}

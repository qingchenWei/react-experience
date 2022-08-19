import React, { useState, useEffect } from "react";
// 自定义一个简易的 获取“数据”的钩子
function useCustomFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // 处理数据
    setTimeout(() => {
      setData({ msg: "异步请求来的数据" });
      setLoading(false);
    }, 2000);
  }, []);
  // 这里会在获取到数据之后才会置为 false，也就是才会返回数据
  if (loading) {
    throw Promise.resolve(null); // 这里抛出一个 Promise
  } else {
    return data;
  }
}
function App() {
  const [data, setData] = useState(null);
  const res = useCustomFetch(); // 这里使用了自定义钩子
  useEffect(() => {
    // 避免无意义的重复渲染
    if (res !== null) {
      setData(res);
    }
  }, [res]);
  return (
    <div>
      <h3>{data?.msg}</h3>
    </div>
  );
}

export default App;

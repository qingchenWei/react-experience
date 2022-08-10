import React, { useState, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import "./index.less";
import { useNavigate } from "react-router-dom";
// import { Navigate } from 'react-router-dom'
import store from "../../store/store";
import { creatSetUserInfo } from "../../store/actions";
import { withRouter } from "../../utils/withRouter";
// import { getUserInfo } from "../../api/login";
/*
使用 hook 技术可以让你在不使用 class 的情况下使用 state, 
及处理生命周期的回调, React 16.8.0 版本开始支持 hook 技术
hook 在 class 内部是不起作用的
Hook 使用规则:
1、只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
2、只能在 React 的函数组件中调用 Hook,不要在其他 JavaScript 函数中调用。自定义hook 除外
*/
function Index() {
  //useNavigate函数式组件编程式导航
  // Navigate 类组件路由跳转方式
  const navigate = useNavigate();

  /********************* State Hook **************************/
  /*
    通过在函数组件里调用 useState 来给组件添加一些内部 state
    React 会在重复渲染时保留这个 state
    useState 会返回一对值：当前状态和一个让你更新状态的函数
    调用更新状态的函数时,不会把新的状态和旧的状态进行合并, 调用更新状态函数后,React 会重新渲染组件
    */

  //这里 useState() 返回了两个值,第一个值赋值给了 person,第二个值赋值给了setPerson, 这种语法称为数组解构
  // 上面 setPerson 有两种写法:
  // 1. setPerson(newValue) 这种是直接设置一个新值
  // 2. setPerson((value)=>{return newValue}) // 这种是传入一个函数,这个函数会把原来的值传过来, 然后需要你返回一个新的值
  // 如果我们用过多个状态是,可以声明多个状态变量,
  // 下面我们声明一个 age 的状态, 一个 dataList 的状态
  // const [age, setAge] = useState(20);
  // const [dataList, setDataList] = useState(Array);
  // 在初始化的时候我们可以设置状态的具体值,也可以指定状态的类型
  const [person, setPerson] = useState({
    username: "",
    password: "",
    isLogin: false,
  });
  /********************* Effact Hook **************************/
  // useEffact 可以在函数式组件中执行副作用操作,用于模拟类组件中的生命周期钩子
  // useEffact 接收两个参数
  // 第一个参数是函数: 这个函数会在第一次渲染的时候调用一次(类似类组件中的 componentDidMount()),
  //      另外还会根据传入的第二个参数触发该函数的调用,
  //      这个函数还可以返回一个函数,这个函数会在组件将要卸载的时候调用,类似类组件中的 componentWillUnmount()
  // 第二个参数是一个数组, 当这个参数不传时,默认监听所有状态的改变,只要有状态的改变,就会触发第一个函数调用,
  //      当这个参数传入的是一个空数组时,意味着所有状态的改变都不触发第一个函数的调用,
  //      当这个参数传入的数组不为空时,会监听数组中的每个状态的改变,任一个状态的改变都会触发第一个函数的调用,
  // 第一个参数和第二个参数合起来用就相当于类组件中的 componentDidUpdate()
  // useEffact 可以写多份,用来处理不同状态改变时要做的事情

  useEffect(() => {
    console.log(person.isLogin, "isLogin");
  }, [person.isLogin]);

  const onFinish = (values) => {
    const { username, password } = values;
    if (username === "admin" && password === "admin") {
      message.success("登陆成功");
      setPerson({
        username,
        password,
        isLogin: true,
      });
      store.dispatch(
        creatSetUserInfo({
          userName: values.username,
          tel: "23234234",
        })
      );

      navigate("/home");
      console.log(store.getState());
    } else if (username === "" || password === "") {
      message.warning("请完善用户名和密码信息!");
    } else {
      message.warning("请检查用户名和密码是否正确!");
    }
  };

  return (
    <div className="login-container">
      {/* {person.isLogin && (
        <Navigate to='/home'/>
      )} */}
      <div className="login-box">
        <Form
          style={{ width: "300px" }}
          labelCol={{
            span: 4,
          }}
          onFinish={onFinish}
          initialValues={{ ...person }}
        >
          <Form.Item label="用户名" name="username">
            <Input placeholder="默认用户名:admin" />
          </Form.Item>

          <Form.Item label="密码" name="password">
            <Input.Password placeholder="默认密码:admin" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
            }}
          >
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default withRouter(Index);

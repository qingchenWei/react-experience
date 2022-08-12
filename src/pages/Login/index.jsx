import React, { useState, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import "./index.less";
import { useNavigate } from "react-router-dom";
// import { Navigate } from 'react-router-dom'
import store from "../../store/store";
import { creatSetUserInfo } from "../../store/actions";
import { withRouter } from "../../utils/withRouter";
import getUserInfo from "@/api/login";

function Index() {
  //useNavigate函数式组件编程式导航
  // Navigate 类组件路由跳转方式
  const navigate = useNavigate();

  const [person, setPerson] = useState({
    username: "admin",
    password: "admin",
    isLogin: false,
  });
  useEffect(() => {
    console.log(person.isLogin, "isLogin");
  }, [person.isLogin]);

  const onFinish = async (values) => {
    try {
      const data = await getUserInfo(values);
      message.success(data.messsage);
      //无实际意义
      setPerson({
        username: values.username,
        password: values.password,
        isLogin: true,
      });
      //无实际意义
      store.dispatch(
        creatSetUserInfo({
          userName: data.name,
        })
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      {/* {person.isLogin && (
        <Navigate to='/home'/>
      )} */}
      <div className="login-box">
        <Form
          // style={{ width: "340px" }}
          labelCol={{
            span: 7,
          }}
          onFinish={onFinish}
          initialValues={{ ...person }}
        >
          <Form.Item
            label="用户名:"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入你的用户名!",
              },
            ]}
          >
            <Input placeholder="默认用户名:admin" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入你的密码!",
              },
            ]}
          >
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

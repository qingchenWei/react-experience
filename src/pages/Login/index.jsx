import React, { useState, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import "./index.less";
import { useNavigate } from "react-router-dom";
// import { Navigate } from 'react-router-dom'
import { store } from "../../store/store";
import { loginUser } from "../../store/actions";
import { withRouter } from "../../utils/withRouter";
import { login } from "@/api/login";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
//引入
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Index() {
  //useNavigate函数式组件编程式导航
  // Navigate 类组件路由跳转方式
  const navigate = useNavigate();

  const [person, setPerson] = useState({
    username: "admin",
    password: "admin",
    isLogin: false,
  });
  //粒子参数
  const options = {
    background: {
      color: {
        value: "#232741",
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    // 帧数，越低越卡,默认60
    fpsLimit: 120,
    fullScreen: {
      zIndex: 1,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "slow",
        },
      },
      modes: {
        push: {
          //点击是添加1个粒子
          quantity: 3,
        },
        bubble: {
          distance: 200,
          duration: 2,
          opacity: 0.8,
          size: 20,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: [],
          },
        },
        grab: {
          distance: 400,
        },
        //击退
        repulse: {
          divs: {
            //鼠标移动时排斥粒子的距离
            distance: 200,
            //翻译是持续时间
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
        //缓慢移动
        slow: {
          //移动速度
          factor: 2,
          //影响范围
          radius: 200,
        },
        //吸引
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 3,
          maxSpeed: 50,
          speed: 1,
        },
      },
    },
    //  粒子的参数
    particles: {
      //粒子的颜色
      color: {
        value: "#ffffff",
      },
      //是否启动粒子碰撞
      collisions: {
        enable: true,
      },
      //粒子之间的线的参数
      links: {
        color: {
          value: "#ffffff",
        },
        distance: 150,
        enable: true,
        warp: true,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        speed: 6,
        warp: true,
      },
      number: {
        density: {
          enable: true,
        },
        //初始粒子数
        value: 40,
      },
      //透明度
      opacity: {
        value: 0.5,
        animation: {
          speed: 3,
          minimumValue: 0.1,
        },
      },
      //大小
      size: {
        random: {
          enable: true,
        },
        value: {
          min: 1,
          max: 3,
        },
        animation: {
          speed: 20,
          minimumValue: 0.1,
        },
      },
    },
  };
  //组件的最外层
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    console.log(person.isLogin, "isLogin");
  }, [person.isLogin]);

  const onFinish = async (values) => {
    try {
      const data = await login(values);
      message.success(data.message);
      //无实际意义
      setPerson({
        username: values.username,
        password: values.password,
        isLogin: true,
      });
      //无实际意义
      store.dispatch(
        loginUser({
          userName: data.roleName,
          isLogin: true,
        })
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const checkName = (_, value, type) => {
    if (value && (value.length < 4 || value.length > 10)) {
      return Promise.reject(
        `${type == "username" ? "用户名" : "密码"}必须是4~10位`
      );
    } else {
      return Promise.resolve();
    }
  };
  return (
    <div className="login-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={options}
      />

      <div className="login-box">
        <h3 className="title-box">登陆</h3>
        <Form onFinish={onFinish} initialValues={{ ...person }}>
          <Form.Item
            label={<UserOutlined />}
            name="username"
            validateTrigger="onBlur" //检验触发时机
            rules={[
              {
                required: false,
                message: "请输入你的用户名!",
              },
              {
                validator: (_, value) => checkName(_, value, "username"),
              },
            ]}
          >
            <Input placeholder="默认用户名:admin" />
          </Form.Item>

          <Form.Item
            label={<LockOutlined />}
            name="password"
            rules={[
              {
                required: false,
                message: "请输入你的密码!",
              },
              {
                validator: (_, value) => checkName(_, value, "password"),
              },
            ]}
          >
            <Input.Password placeholder="默认密码:admin" />
          </Form.Item>
          <Form.Item className="btn-row">
            <Button type="primary" className="my-btn" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default withRouter(Index);

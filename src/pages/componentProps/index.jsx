import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; //1、导入类型检测;
import PubSub from "pubsub-js";
import { Button } from "antd";
import Son from "./Son.jsx";
import Context from "./context";
const styles = {
  container: { width: "400px", height: "400px", border: "1px solid black" },
  children: {
    width: "300px",
    height: "300px",
    border: "1px solid black",
  },
  son: {
    width: "200px",
    height: "200px",
    border: "1px solid black",
  },
};
// 组件传值
// 一、父子组件传值prpos

// 二、上下文context传参;(16.0之前)
// 1、导入类型检测;
// 2、定义导出的数据类型;
// 3、获取需要传参的内容;
// 4、在子组件中定义上下文数据并使用数据和方法;

// 五.上下文provider方式(react团队在16.0之后
// 更新了context的定义方式，用createContext)

// 三.pubsub 发布订阅
// 1、npm i pubsub-js
// 2、PubSub.publish("name", this.state.name);
// 3、PubSub.subscribe("name", (_, index) => {
// 第一个参数:发布订阅名(‘name‘) 第二个参数: 值
//       this.setState({ name: index });
//     });

// 四.通过redux或者react-redux

export default class index extends Component {
  // 2、定义导出的数据类型;
  static childContextTypes = {
    age: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "weiwei",
      age: 100,
      address: "beijing",
    };
  }
  // 3、获取需要传参的内容;
  getChildContext() {
    return { age: this.state.age };
  }
  changeName() {
    this.setState({ name: "改哦了;饿" }, () => {
      PubSub.publish("name", this.state.name);
    });
  }
  render() {
    const { name, address } = this.state;

    return (
      <Context.Provider value={{ address }}>
        <div style={styles.container}>
          <Link to={{ pathname: "/home", state: { index: "123" } }}>
            跳转首页
          </Link>
          <Button type="primary" onClick={() => this.changeName()}>
            改更name
          </Button>
          父组件 --- {name}
          {/* 父传子 props形式传值 */}
          <Children name={name}></Children>
        </div>
      </Context.Provider>
    );
  }
}

class Children extends Component {
  // 4、在子组件中定义上下文数据并使用数据和方法;
  static contextTypes = {
    age: PropTypes.number,
  };
  getSonData(msg) {
    console.log(msg, "msg");
  }
  render() {
    const { name, children } = this.props;
    return (
      <Context.Consumer>
        {(value) => (
          <div style={styles.children}>
            children组件
            <br />
            来自 --上下文context传参 age---{this.context.age}
            <br />
            来自--父组件prpos传惨的name----{name}
            <br />
            来自--上下文provider方式传值的address----{value.address}
            <div>{children}</div>
            <Son
              Context={Context}
              address={value.address}
              getSonData={this.getSonData}
            />
          </div>
        )}
      </Context.Consumer>
    );
  }
}

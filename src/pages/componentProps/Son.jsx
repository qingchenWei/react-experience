import React, { Component } from "react";
import PropTypes from "prop-types";
import SonChildren from "./sonChildren.jsx";
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
export default class Son extends Component {
  static contextTypes = {
    age: PropTypes.number,
  };
  state = {
    name: "我是son",
  };
  pubsub = null;
  sendChildren() {
    //子传父 回调函数传值
    this.props.getSonData(this.state.name);
  }
  componentDidMount() {
    this.pubsub = PubSub.subscribe("name", (_, index) => {
      this.setState({ name: index });
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.pubsub);
  }
  render() {
    const { address } = this.props;

    return (
      <div onClick={() => this.sendChildren()} style={styles.son}>
        son组件
        <br />
        来自--PubSub传值--name:{this.state.name}
        <br />
        来自 --上下文context传参 age---{this.context.age}
        <br />
        来自-上下文provider方式传值的address {address}
        <SonChildren />
      </div>
    );
  }
}

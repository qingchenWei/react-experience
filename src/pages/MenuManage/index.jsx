import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Link to={{ pathname: "/home", state: { index: "123" } }}>
          跳转首页
        </Link>
      </div>
    );
  }
}

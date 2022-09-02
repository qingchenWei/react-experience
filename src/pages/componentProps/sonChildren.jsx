import PubSub from "pubsub-js";
import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import Context from "./context";
class SonChildren extends Component {
  static contextTypes = {
    age: PropTypes.number,
  };
  state = {
    msg: "SonChildren",
  };
  componentDidMount() {
    PubSub.subscribe("name", (_, index) => {
      this.setState({ msg: index });
      console.log("index===", index);
    });
  }
  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <div>
            <h1>Son Children</h1>
            <h1>{this.state.msg}</h1>
            <h1>{this.context.age}</h1>
            <h1>{context.address}</h1>
            <ContextCom />
          </div>
        )}
      </Context.Consumer>
    );
  }
}
//  react16.8版本之后增加了hooks，可以使用hooks中的useContext来获取消费者
const ContextCom = () => {
  const { address } = useContext(Context);
  return <div>{address}</div>;
};
export default SonChildren;

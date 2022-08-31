import React, { PureComponent } from "react";
import qs from "qs";
import { useLocation, useParams } from "react-router-dom";
import { Tag } from "antd";
class UserDetail extends PureComponent {
  constructor(props) {
    super(props);
    //解析url search参数
    console.log(qs.parse(this.props.location.search.substr(1)));
    console.log(this.props.location.state);
  }

  render() {
    const {
      state: { age, address, tags },
      search,
    } = this.props.location;
    const { name } = qs.parse(search.substr(1));
    return (
      <div>
        <h3>用户详情</h3>
        <br />
        <h5>
          我叫{name},{age}岁,家住{address},属性
          {tags.map((tag) => (
            <Tag color="volcano" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </h5>
      </div>
    );
  }
}

export function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const params = useParams();

    return <Child {...props} params={params} location={location} />;
  };
}
export default withRouter(UserDetail);

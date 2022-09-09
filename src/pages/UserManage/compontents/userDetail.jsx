import React, { PureComponent } from "react";
import qs from "qs";
import { useLocation, useParams } from "react-router-dom";
class UserDetail extends PureComponent {
  constructor(props) {
    super(props);
    //解析url search参数
    console.log(qs.parse(this.props.location.search.substr(1)));
    console.log(this.props.location.state);
  }

  render() {
    const {
      state: {
        user: { name, account, tel, creatTime, loginTime },
      },
      search,
    } = this.props.location;
    const { id } = qs.parse(search.substr(1));
    return (
      <div>
        <h3>用户详情</h3> <br />
        <h5>序号:{id}</h5> <br />
        <h5>账号:{name}</h5> <br />
        <h5>account: {account}</h5> <br />
        <h5>手机号码: {tel}</h5> <br />
        <h5>账号创建时间: {creatTime}</h5> <br />
        <h5>最后一次登录时间: {loginTime}</h5>
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

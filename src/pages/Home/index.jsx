import { Button } from "antd";
import React from "react";
// import { useSelector, useDispatch, useStore } from "react-redux";
import { connect } from "react-redux";
import { loginUser } from "@/store/actions";
import { store } from "@/store/store";
const Reduct = () => {
  const {
    loginReducer: { userName },
  } = store.getState();

  return (
    <div>
      <h3>redux实现</h3>
      <h4>{userName}</h4>
      <Button
        type="primary"
        style={{ margin: "40px 20px" }}
        onClick={() => {
          store.dispatch(
            loginUser({
              userName: "redux",
              isLogin: true,
            })
          );
        }}
      >
        更改用户名
      </Button>
    </div>
  );
};
const Index = (props) => {
  //直接使用useSelector,可以不用去手动更新 react-redux帮你完成了
  // const { userName } = useSelector((state) => state.loginReducer);
  // redux中，当store数据更新后，界面数据并不会直接更新，需要手动更新
  // // const store = useStore();
  // const dispatch = useDispatch();

  // 初始化一个update数据使用useState()，主要是为了通过setUpdate()来更新组件
  // 模拟render()生命周期，实现组件重新加载，以更新界面的store数据
  const { user, dispathloginUser } = props;
  return (
    <div>
      <Reduct />
      <h3>react-redux实现</h3>
      <h4>
        用户名:{user.userName}--状态: {user.isLogin ? "登陆" : "未登陆"}
      </h4>
      <Button
        type="primary"
        style={{ margin: "40px 20px" }}
        onClick={() => {
          dispathloginUser({
            userName: "react-redux",
            isLogin: true,
          });
        }}
      >
        更改用户名
      </Button>
    </div>
  );
};
//mapStateToProps基础写法
// const mapStateToProps = (state) => {
//   const { userName, isLogin } = state.loginReducer;
//   return {
//     userName,
//     isLogin,
//   };
// };
//mapStateToProps简写
// const mapStateToProps = (state) => ({
//   user: state.loginReducer,
// });
//mapDispatchToProps基础写法
// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispathloginUser: (data) => dispatch(loginUser(data)),
//   };
// };
// mapDispatchToProps 简写;
// const mapDispatchToProps = {
//   dispathloginUser: loginUser,
// };
// 基础写法;
// const IndexCom = connect(mapStateToProps, mapDispatchToProps)(Index);
// 简化
const IndexCom = connect(
  (state) => ({
    user: state.loginReducer,
  }),
  {
    dispathloginUser: loginUser,
  }
)(Index);
export default IndexCom;

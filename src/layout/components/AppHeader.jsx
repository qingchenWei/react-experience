import React from "react";
import { Layout, Avatar, Dropdown, Menu, Breadcrumb, message } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { logoutUser } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/api/login";
const { Header } = Layout;

const HeaderBreadcrumb = () => {
  const breadcrumbAppDate = [];
  const setBreadcrumbData = useSelector((state) => state.breadcrumbReducer);
  const getBreadcrumbData = (data) => {
    breadcrumbAppDate.push(data);
    if (data?.children) {
      getBreadcrumbData(data.children);
    }
  };
  getBreadcrumbData(setBreadcrumbData);
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <HomeOutlined />
      </Breadcrumb.Item>
      {breadcrumbAppDate
        ? breadcrumbAppDate.map((item) => (
            <Breadcrumb.Item key={item.key}>
              <span>{item.label}</span>
            </Breadcrumb.Item>
          ))
        : ""}
    </Breadcrumb>
  );
};

function AppHeader() {
  const { userName } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //退出登录
  const onClick = async () => {
    const data = await logout();
    message.success(data.message);
    dispatch(
      logoutUser({
        userName: "",
        isLogin: false,
      })
    );
    navigate("/");
  };
  const menu = (
    <Menu
      onClick={onClick}
      className="my-menu"
      items={[
        {
          label: "退出登录",
          key: "1",
        },
      ]}
    />
  );
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        background: "#fff",
        boxShadow: "0 0 10px 0 #000",
      }}
    >
      <HeaderBreadcrumb />
      <div className="heard-user">
        <Avatar
          size={44}
          style={{
            color: "#f56a00",
            backgroundColor: "#fff",
            border: "1px solid #333",
          }}
          src="https://joeschmoe.io/api/v1/random"
        >
          W
        </Avatar>
        <Dropdown overlay={menu}>
          <div className="user-name">{userName}</div>
        </Dropdown>
      </div>
    </Header>
  );
}
export default AppHeader;

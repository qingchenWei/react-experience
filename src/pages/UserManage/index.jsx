import React, { useState, useEffect } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Col,
  Row,
  Table,
  Space,
  Switch,
  Modal,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";
import UpdateModal from "./compontents/updateModal";
import { getUserList, deleteUser, updateUser } from "@/api/systemApi";
import moment from "moment";
const { RangePicker } = DatePicker;
const { confirm } = Modal;
const FormDisabledDemo = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [tabelData, setTabelData] = useState(null);
  const [visible, setVisible] = useState(false);
  const [updataRow, setupdataRow] = useState(null);
  async function fetchData(params) {
    const { data } = await getUserList(params);
    setTabelData(data);
  }
  useEffect(() => {
    form.setFieldsValue({
      account: "",
      name: "",
      tel: "",
      status: "",
      loginTime: null,
      creatTime: null,
    });
    const fromData = form.getFieldsValue(); // {name: 'dee', age: 18} 获取整个表单的值
    fetchData(fromData);
  }, []);
  // useEffect(() => {
  //   console.log("updataRow===", updataRow);
  //   setVisible(true);
  // }, [updataRow]);
  //删除用户信息
  const onDetel = (id) => {
    confirm({
      title: "你确定要删除该用户信息吗?",
      icon: <ExclamationCircleOutlined />,
      okText: "是",
      okType: "danger",
      cancelText: "否",

      async onOk() {
        const data = await deleteUser({ id });
        message.success(data.message);
        setTabelData(data.data);
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };
  //查看详情
  const toDetail = (user) => {
    //拼接方式用useLocation的search接收,state用state接收
    navigate(`/system/userDetail?id=${user.id}`, {
      state: { user },
    });
    // param传递用useParams接受
    // navigate(`/home/message/detail/${id}/${title}`, { replace: true });
  };
  //更改用户状态
  const onChangeStauts = async (checked, item) => {
    console.log("@222");
    const { message: msg, data } = await updateUser({
      id: item.id,
      user: { ...item, status: checked },
    });
    setTabelData(data);
    message.success(msg);
  };
  //查询用户列表
  const onFinish = (values) => {
    const time = ["loginTime", "creatTime"];
    time.forEach((item) => {
      if (values[item]?.length >= 1) {
        values = {
          ...values,
          [item]: [
            moment(values[item][0]).format("YYYY-MM-DD"),
            moment(values[item][1]).format("YYYY-MM-DD"),
          ],
        };
      }
    });
    console.log("values===", values);

    fetchData(values);
    //表单校验
    // form
    //   .validateFields()
    //   .then((value) => {
    //     // 验证通过后进入
    //     const { name, age } = value;
    //     console.log(name, age); // dee 18
    //   })
    //   .catch((err) => {
    //     // 验证不通过时进入
    //     console.log(err);
    //   });
  };
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      width: "70px",
      render: (text, Item) => (
        <a key={Item.id} onClick={() => toDetail(Item)}>
          {text}
        </a>
      ),
      fixed: "left",
    },

    {
      width: "100px",
      title: "账号",
      dataIndex: "account",
    },
    {
      width: "130px",
      title: "姓名",
      dataIndex: "name",
    },
    {
      width: "100px",
      title: "状态",
      dataIndex: "stauts",
      render: (_, record) => (
        <Switch
          key={record.id}
          onChange={(checked) => onChangeStauts(checked, record)}
          checked={record.status}
        />
      ),
    },
    {
      width: "210px",
      title: "登陆时间",
      dataIndex: "loginTime",
    },
    {
      width: "210px",
      title: "创建时间",
      dataIndex: "creatTime",
    },
    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: "170px",
      render: (_, record) => (
        <Space size="middle" key={record.id}>
          <Button
            type="primary"
            onClick={() => {
              setupdataRow(record);
              setVisible(true);
            }}
          >
            修改
          </Button>
          <Button
            type="primary"
            danger
            ghost
            onClick={() => onDetel(record.id)}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <h4>搜索条件</h4>
      <Form
        layout="horizontal"
        labelCol={{ span: 6 }}
        form={form}
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col lg={{ span: 12 }} xl={{ span: 8 }} span={12}>
            <Form.Item label="账号" name="account">
              <Input />
            </Form.Item>
          </Col>

          <Col lg={{ span: 12 }} xl={{ span: 8 }} span={12}>
            <Form.Item label="姓名" name="name">
              <Input />
            </Form.Item>
          </Col>
          <Col lg={{ span: 12 }} xl={{ span: 8 }} span={12}>
            <Form.Item label="手机号码" name="tel">
              <Input />
            </Form.Item>
          </Col>

          <Col lg={{ span: 12 }} xl={{ span: 8 }} span={12}>
            <Form.Item label="登录时间" name="loginTime">
              <RangePicker
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col lg={{ span: 12 }} xl={{ span: 8 }} span={12}>
            <Form.Item label="创建时间" name="creatTime">
              <RangePicker
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col lg={{ span: 12 }} xl={{ span: 8 }} span={12}>
            <Form.Item label="账号状态" name="status">
              <Radio.Group name="status">
                <Radio value={""}>全部</Radio>
                <Radio value={true}>开启</Radio>
                <Radio value={false}>停用</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col
            span={5}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Button type="primary" onClick={() => form.submit()}>
              提交
            </Button>
            <Button
              type="ghost"
              onClick={() => {
                form.resetFields();
                form.setFieldsValue({
                  account: "",
                  name: "",
                  tel: "",
                  status: "",
                  loginTime: null,
                  creatTime: null,
                });
              }}
            >
              重置
            </Button>
          </Col>
        </Row>
      </Form>
      <h4>数据列表</h4>
      <Table
        columns={columns}
        dataSource={tabelData ? tabelData : []}
        scroll={{
          x: 900,
          y: 300,
        }}
        rowKey={(rowKey) => rowKey.id}
      />
      {updataRow ? (
        <UpdateModal
          updataRow={updataRow}
          visible={visible}
          setVisible={setVisible}
          setTabelData={setTabelData}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default FormDisabledDemo;

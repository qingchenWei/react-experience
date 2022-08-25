import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Col,
  Row,
  Table,
  Space,
  Tag,
} from "antd";
import "./index.less";
import { getUserList } from "@/api/systemApi";
import moment from "moment";
const { RangePicker } = DatePicker;
const FormDisabledDemo = () => {
  const [form] = Form.useForm();
  const [tabelData, setTabelData] = useState(null);
  async function fetchData(params) {
    const { data } = await getUserList(params);
    setTabelData(data);
  }
  useEffect(() => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      sex: "",
      time: [],
    });
    console.log(2222);
    const fromData = form.getFieldsValue(); // {name: 'dee', age: 18} 获取整个表单的值
    fetchData(fromData);
  }, []);
  useEffect(() => {
    console.log(1111);
  }, [form]);
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      width: "100px",
      key: "name",
      render: (text) => <a>{text}</a>,
      fixed: "left",
    },

    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "标签",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";

            if (tag === "loser") {
              color = "volcano";
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">修改</Button>
          <Button type="primary" danger ghost>
            删除
          </Button>
        </Space>
      ),
    },
  ];
  const onFinish = (values) => {
    if (values.time) {
      values = {
        ...values,
        time: [
          moment(values.time[0]).format("YYYY-MM-DD"),
          moment(values.time[1]).format("YYYY-MM-DD"),
        ],
      };
    }
    console.log(values);
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
            <Form.Item label="姓名" name="name">
              <Input />
            </Form.Item>
          </Col>

          <Col lg={{ span: 12 }} xl={{ span: 8 }} span={12}>
            <Form.Item label="年龄" name="age">
              <Input />
            </Form.Item>
          </Col>

          <Col lg={{ span: 12 }} xl={{ span: 8 }} span={12}>
            <Form.Item label="地址" name="address">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={{ span: 12 }} xl={{ span: 8 }} span={12}>
            <Form.Item label="登录时间" name="time">
              <RangePicker
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col lg={{ span: 12 }} xl={{ span: 8 }} span={12}>
            <Form.Item label="性别" name="sex">
              <Radio.Group>
                <Radio value="man"> 男 </Radio>
                <Radio value="woman"> 女 </Radio>
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
      />
    </>
  );
};
function App() {
  return (
    <div>
      <FormDisabledDemo></FormDisabledDemo>
    </div>
  );
}

export default App;

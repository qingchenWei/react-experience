import React, { PureComponent } from "react";
import { Modal, Button, message, Col, Row, Form, Input, Select } from "antd";
const { Option } = Select;
class UpdateModal extends PureComponent {
  constructor(props) {
    super(props);
  }
  refForm = React.createRef(null);
  hideModal = () => {
    this.props.setVisible(false);
  };
  buttonClick() {
    this.refForm.current
      .validateFields()
      .then((value) => {
        // 验证通过后进入
        const { name, age } = value;
        console.log(name, age); // dee 18
        message.success("检验通过");
      })
      .catch((err) => {
        // 验证不通过时进入
        console.log(err);
        message.error("检验失败");
      });
  }
  render() {
    return (
      <Modal
        title="修改用户信息"
        visible={this.props.visible}
        onCancel={this.hideModal}
        cancelText="取消"
        footer={[
          <Button onClick={() => this.buttonClick()} key="1">
            确认
          </Button>,
        ]}
      >
        <Form
          ref={this.refForm}
          name="basic"
          initialValues={this.props.updataRow}
          autoComplete="off"
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="姓名"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "请输入你的名称!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="年龄"
                name="age"
                rules={[
                  {
                    required: true,
                    message: "请输入你的年龄!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="地址"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "请输入你的年龄!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="标签"
                name="tags"
                rules={[
                  {
                    required: true,
                    message: "请选择你的标签!",
                  },
                ]}
              >
                <Select
                  mode="tags"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                >
                  {["nice", "good"].map((item) => {
                    return <Option key={item} value={item}></Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default UpdateModal;

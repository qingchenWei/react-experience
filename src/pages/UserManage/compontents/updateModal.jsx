import React, { PureComponent } from "react";
import { Modal, Button, message, Col, Row, Form, Input, Select } from "antd";
import { updateUser } from "@/api/systemApi";
const { Option } = Select;
class UpdateModal extends PureComponent {
  constructor(props) {
    super(props);
    console.log("====================================");
    console.log(props);
    console.log("====================================");
  }
  refForm = React.createRef(null);
  hideModal = () => {
    this.props.setVisible(false);
    this.refForm.current.resetFields();
  };
  updateClick() {
    this.refForm.current
      .validateFields()
      .then(async (values) => {
        // 验证通过后进入
        const { message: msg, data } = await updateUser({
          id: this.props.updataRow.id,
          user: values,
        });
        message.success(msg);
        this.props.setTabelData(data);
        this.hideModal();
      })
      .catch((err) => {
        // 验证不通过时进入
        console.log(err);
        message.error("请检查信息是否完整!");
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
          <Button onClick={() => this.updateClick()} key="1">
            确认
          </Button>,
        ]}
        width={600}
        destroyOnClose={true}
      >
        <Form
          ref={this.refForm}
          name="basic"
          initialValues={this.props.updataRow}
          autoComplete="off"
          labelCol={{ span: 7 }}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="账号"
                name="account"
                rules={[
                  {
                    required: true,
                    message: "请输入你的账号!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="姓名"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "请输入你的姓名!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="手机号码"
                name="tel"
                rules={[
                  {
                    required: true,
                    message: "请输入你的手机号码!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="状态" name="status">
                <Select
                  mode="status"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                >
                  <Option value={true}>开启</Option>
                  <Option value={false}>停用</Option>
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

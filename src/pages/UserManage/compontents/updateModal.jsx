import React, { PureComponent } from "react";
import { Modal } from "antd";
class UpdateModal extends PureComponent {
  constructor(props) {
    super(props);
    console.log("====================================");
    console.log(props);
    console.log("====================================");
  }
  hideModal = () => {
    this.props.setVisible(false);
    console.log("====================================");
    console.log(this.props);
    console.log("====================================");
  };
  render() {
    // const { name } = this.props.updateRow;
    return (
      <div>
        <Modal
          title="修改用户信息"
          visible={this.props.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>{this.props?.updataRow?.name}</p>
          <p>{this.props?.updataRow?.age}</p>
          <p>{this.props?.updataRow?.address}</p>
        </Modal>
      </div>
    );
  }
}

export default UpdateModal;

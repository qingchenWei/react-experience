import React, { Component } from "react";
import {
  ScrollBoard,
  ActiveRingChart,
  CapsuleChart,
} from "@jiaminghi/data-view-react";
import "./index.less";
class Index extends Component {
  config = {
    header: ["姓名", "年龄", "性别"],
    data: [
      ["张三", "12", "男"],
      ["里斯", "12", "女"],
      ["王武", "34", "男"],
      ["小李", "21", "女"],
      ["张三", "12", "男"],
      ["里斯", "12", "女"],
      ["王武", "34", "男"],
      ["小李", "21", "女"],
    ],
    index: true,
    columnWidth: [50],
    align: ["center"],
  };
  ActiveRingChartConfig = {
    data: [
      {
        name: "章三",
        value: 55,
      },
      {
        name: "里斯",
        value: 120,
      },
      {
        name: "西峡",
        value: 78,
      },
      {
        name: "王武",
        value: 66,
      },
      {
        name: "效力",
        value: 80,
      },
    ],
  };
  CapsuleChartconfig = {
    data: [
      {
        name: "章三",
        value: 167,
      },
      {
        name: "里斯",
        value: 123,
      },
      {
        name: "王武",
        value: 98,
      },
      {
        name: "小刘",
        value: 75,
      },
      {
        name: "小2",
        value: 66,
      },
    ],
    colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
    unit: "单位",
    showValue: true,
  };
  render() {
    return (
      <div className="content">
        <ScrollBoard
          config={this.config}
          style={{ width: "80%", height: "220px" }}
        />
        <ActiveRingChart
          config={this.ActiveRingChartConfig}
          style={{ width: "300px", height: "300px" }}
        />
        <CapsuleChart
          config={this.CapsuleChartconfig}
          style={{ width: "300px", height: "200px" }}
        />
      </div>
    );
  }
}

export default Index;

import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Spinner() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: `#eee`,
      }}
      spin
    />
  );
  return <Spin indicator={antIcon} />;
}
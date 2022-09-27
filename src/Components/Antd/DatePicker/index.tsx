import React from "react";
import Picker1 from "./Picker1";
import Picker2 from "./Picker2";
import { Card } from "antd";
export default function IndexPage() {
  return (
    <>
      <Card style={{ margin: 24 }}>
        <Picker1 />
        <Picker2 />
      </Card>
    </>
  );
}

import type { FC } from "react";
import { Card } from "antd";
import { Filter } from "./components";
import searchList from "./constant";
import React from "react";

const Queryform: FC<any> = () => {
  const onSearch = (values: any) => {
    console.log(values);
  };

  return (
    <Card title="我的" style={{ margin: 24 }}>
      <Filter
        filterList={searchList}
        onSearch={(values: any) => onSearch(values)}
      />
    </Card>
  );
};

export default Queryform;

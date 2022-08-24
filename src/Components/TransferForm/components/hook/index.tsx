/* eslint-disable react/jsx-key */
import { Transfer, Checkbox, Modal } from "antd";
import React, {
  useState,
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
} from "react";
import styles from "../index.less";
import { Form, Select } from "antd";
import type { FormInstance } from "antd/es/form";
import type { ModalProps } from "antd/es/modal";
import type { TransferProps } from "antd/es/transfer";

interface Iprops {
  /**确定按钮的回调函数 */
  transferOkCallBack: () => void;
  /**初始化所有的数据源 */
  originData: any[];
  /**外界传入的Antd-form-ref */
  formRef: FormInstance;
  /**同步变动的select formItem name */
  falseSelectItmeName?: string;
  /**模态框的其他props */
  modalProps?: ModalProps;
  /**穿梭框的其他props */
  transferProps?: TransferProps<any>;
  [props: string]: any;
}

// 打平数组
const flattenDeep: any = (arr: any) =>
  Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr];
const filterRepeatList = (arr: any) => [...new Set([...arr])];
// 找到改变项的全部信息
const findAllMessage = (originArr: any, keyArr: any) => {
  const arr: any[] = [];
  keyArr.forEach((item: any) => {
    arr.push(originArr.filter((ele: any) => ele.key == item));
  });
  return flattenDeep(arr);
};


const TransferForm = (props: Iprops, TransferRef: any) => {
  const [targetKeys, setTargetKeys] = useState<any>([]);
  const [selectedKeys, setSelectedKeys] = useState<any>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const transferBox = useRef<any>(null!);

  const {
    transferOkCallBack,
    originData = [],
    formRef,
    modalProps,
    transferProps,
    falseSelectItmeName = "test",
  } = props;

  useEffect(() => {
    (document.getElementsByClassName("ant-input")[0] as any).placeholder =
      "请输入自定义内容";
  }, []);

  // 当重新设置数据源 情况所有数据
  useEffect(() => {
    setTargetKeys([]);
    setSelectedKeys([]);
    formRef.setFieldsValue({
      [falseSelectItmeName]: [],
    });
  }, [falseSelectItmeName, formRef, originData.length]);

  // 暴露给ref的接口
  useImperativeHandle(TransferRef, () => ({
    getData: () => {
      return [targetKeys, originData];
    },
    setData: (arr: any) => {
      setTargetKeys(arr);
    },
    useVisible: (bool: boolean) => {
      setVisible(bool);
    },
  }));

  const handleChange = (
    newTargetKeys: any[],
    direction: string,
    moveKeys: any,
  ) => {
    // 删除数据
    const newKeys =
      direction === "right"
        ? [...targetKeys, moveKeys]
        : targetKeys.filter((key: any) => !moveKeys.includes(key));
    setTargetKeys([...newKeys]);
    setSelectedKeys([]);
  };

  const handleSelectChange = (
    sourceSelectedKeys: any[],
    targetSelectedKeys: any[],
  ) => {
    // 设置新的数据
    const selectedKeysArr = filterRepeatList([
      ...sourceSelectedKeys,
      ...targetSelectedKeys,
    ]);
    const targetKeysArr = filterRepeatList([
      ...targetKeys,
      ...sourceSelectedKeys,
      ...selectedKeys,
    ]);
    const formItemArr = filterRepeatList([
      ...targetKeys,
      ...sourceSelectedKeys,
      ...selectedKeys,
    ]);
    setSelectedKeys([...selectedKeysArr]);
    setTargetKeys([...targetKeysArr]);
    // 同步为一个select设置相同的状态 select选中
    formRef.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, formItemArr),
    });
  };

  const handleModalOk = () => {
    formRef.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, targetKeys),
    });
    setVisible(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    transferOkCallBack && transferOkCallBack();
  };

  return (
    <>
      <Form.Item>
        <div className={styles.transferBox} ref={transferBox}>
          <Modal
            width={1000}
            title="穿梭框"
            getContainer={transferBox?.current}
            visible={visible}
            okText="确定"
            cancelText="取消"
            onCancel={() => setVisible(false)}
            onOk={() => handleModalOk()}
            forceRender={true}
            centered={true}
            maskClosable={false}
            bodyStyle={{ paddingBottom: 0 }}
            {...modalProps}
          >
            <Transfer
              listStyle={{ height: 500 }}
              style={{ position: "relative" }}
              operationStyle={{
                position: "absolute",
                top: 200,
                visibility: "hidden",
              }}
              showSearch
              titles={[
                <Checkbox
                  checked={false}
                  onClick={() =>
                    setTargetKeys(originData.map((item: any) => item.key))
                  }
                />,
                <a
                  href="#"
                  onClick={() => {
                    setTargetKeys([]);
                    setSelectedKeys([]);
                  }}
                >
                  清空
                </a>,
              ]}
              selectAllLabels={[
                "全部",
                <span>
                  {" "}
                  已选{targetKeys.length ?? "--"}/{originData.length ?? "--"}
                </span>,
              ]}
              showSelectAll={false}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={(a, b, c) => handleChange(a, b, c)}
              onSelectChange={(a, b) => handleSelectChange(a, b)}
              render={(item) => item.title as string}
              oneWay
              {...transferProps}
              dataSource={originData}
            />
          </Modal>
        </div>
      </Form.Item>
      <Form.Item
        name={falseSelectItmeName}
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 0 }}
      >
        <Select
          mode="multiple"
          style={{ width: "0%", display: "none" }}
          labelInValue
          options={[
            { label: "t", value: 1 },
            { label: "a", value: 2 },
          ]}
        />
      </Form.Item>
    </>
  );
};

export default forwardRef(TransferForm);

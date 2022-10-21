import { Button, Col, Form, Row, Select } from 'antd';
import { ElementRef, FC, useEffect, useRef } from 'react';
import ChooseTree from './ChooseTree';
import { dataSource as DATASOURCE } from './components/constant';

const EDIT_DATA = [
  { label: '张振宇', value: 121 },
  { label: '李峰', value: 122 },
];

const App: FC<any> = () => {
  const [form] = Form.useForm();
  const ModalRef = useRef<ElementRef<typeof ChooseTree>>(null!);
  const selectvalue = Form.useWatch('selectForm', form);

  useEffect(() => {
    handlePageInit();
  }, []);

  // 处理异步问题
  useEffect(() => {
    const { useSelectData, useDataSource } = ModalRef.current;
    const [selectList, setSelectList] = useSelectData();
    if (!selectvalue) return setSelectList([]);
    if (selectvalue.length == 0) return setSelectList([]);
    setSelectList(selectvalue.map((item: any) => item.value));
  }, [selectvalue]);

  const handlePageInit = async () => {
    const { useSelectData, useDataSource } = ModalRef.current;
    const [dataSource, setDataSource] = useDataSource();
    const [selectList, setSelectList] = useSelectData();
    form.setFieldsValue({
      selectForm: EDIT_DATA,
    });
    // todo 换成网络请求
    setDataSource(DATASOURCE);
    setSelectList(EDIT_DATA.map(item => item.value));
  };

  const handleClearSelectForm = () => {
    const { handleClearAll } = ModalRef.current;
    handleClearAll();
    form.setFieldsValue({ selectForm: [] });
  };

  const handleClearSingleSelectedForm = ({ value }: any) => {
    const { useSelectData } = ModalRef.current;
    const [selectList, setSelectList] = useSelectData();
    setSelectList(selectList.filter((item: any) => item !== value));
  };

  const handleOpenChoosePersonModal = () => {
    const { useVisible, useSelectData, useDataSource } = ModalRef.current;
    const [visible, setVisible] = useVisible();
    setVisible(true);
  };

  const handleModalComfirm = (arr: any[]) => {
    const { useVisible } = ModalRef.current;
    const [visible, setVisible] = useVisible();
    const newArr = arr.map(item => ({ label: item.name, value: item.id }));
    form.setFieldsValue({
      selectForm: newArr,
    });
    console.log(newArr);
    setVisible(false);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Row>
        <Col span={10}>
          <Form.Item name="selectForm" label="选择人员">
            <Select
              mode="multiple"
              placeholder="请选择人员"
              labelInValue={true}
              maxTagCount={'responsive'}
              options={[]}
              open={false}
              showSearch={false}
              allowClear
              onClick={() => handleOpenChoosePersonModal()}
              onClear={() => handleClearSelectForm()}
              onDeselect={(val: any) => handleClearSingleSelectedForm(val)}
            />
          </Form.Item>
        </Col>
        <Col span={21}></Col>
      </Row>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      <ChooseTree ModalRef={ModalRef} handleModalOk={handleModalComfirm} />
    </Form>
  );
};

export default App;

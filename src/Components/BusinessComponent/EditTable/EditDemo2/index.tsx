import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Row,
  Table,
} from 'antd';
import moment from 'moment';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { getColumns } from './columns';
import {
  IDataType,
  IEditableCellProps,
  IFormValuesType,
  MomentType,
  originData,
} from './constant';
import {
  _checkIsBetweenSection,
  _disabledDateHasListScope,
  _handleGetFormItemType,
  _removeEmptyObject,
} from './utils';
const { RangePicker } = DatePicker;

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<IDataType[]>([]);
  const [key, setKey] = useState(-10000);
  const [editingKey, setEditingKey] = useState('');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setData(originData);
    setKey(-10000 + 1);
  }, []);

  const getSelectDates = useCallback(() => {
    if (data.length == 0) return [];
    const timeArr = data.map((item: IDataType) => {
      if (!item?.section) return {};
      const startTime = moment(item.section.startTime)
        .subtract(1, 'days')
        .endOf('day');
      const endTime = moment(item.section.endTime)
        .add(1, 'days')
        .startOf('day');
      return { startTime, endTime };
    });
    return _removeEmptyObject(timeArr);
  }, [data]);

  const isEditing = (record: IDataType) => record.key === editingKey;

  const handleCancel = async (key: IDataType['key']) => {
    const item = data.find((item: IDataType) => item.key == key);
    if (item?.section == null) {
      const newData = [...data];
      setData([...newData.filter((item: IDataType) => item.key !== key)]);
    }
    setEditingKey('');
  };

  const handleDelete = (key: React.Key) => {
    const newData = data.filter((item: IDataType) => item.key !== key);
    setData(newData);
  };

  const handleAdd = () => {
    if (editingKey) return message.error('必须先保存当前编辑项');
    const newData: IDataType = {
      key: ~~key + 1 + '',
      section: null,
    };
    form.resetFields();
    setData([newData, ...data]);
    setKey(key + 1);
    setEditingKey(newData.key);
  };

  const handleEdit = (record: any & { key: React.Key }) => {
    const startTime = record.section?.startTime
      ? moment(record.section.startTime)
      : null;
    const endTime = record.section?.endTime
      ? moment(record.section.endTime)
      : null;
    let section;
    if (startTime == null && endTime == null) {
      section = null;
    } else {
      section = [startTime, endTime];
    }
    form.setFieldsValue({
      ...record,
      section,
    });
    setEditingKey(record.key);
  };

  const handleSave = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as IFormValuesType;
      const startTime = row.section[0]
        ? moment(row.section[0]).format('YYYY-MM-DD')
        : null;
      const endTime = row.section[1]
        ? moment(row.section[1]).format('YYYY-MM-DD')
        : null;
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          key: item.key,
          section: {
            startTime,
            endTime,
          },
        });
        setData([...newData]);
        setEditingKey('');
      } else {
        newData.unshift({
          ...row,
          section: {
            startTime,
            endTime,
          },
        });
        setData([...newData]);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const handleGetColumns = () => {
    return getColumns({
      data,
      isEditing,
      editingKey,
      handleSave,
      handleEdit,
      handleCancel,
      handleDelete,
    }).map(col => {
      if (!col.editable) return col;
      return {
        ...col,
        onCell: (record: IDataType) => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
          formItemType: _handleGetFormItemType(col.dataIndex),
        }),
      };
    });
  };

  const _getInputNode = (
    formItemType: IEditableCellProps['formItemType'],
    index: number,
  ) => {
    let node = null;
    switch (formItemType) {
      case 'rangePicker':
        node = (
          <RangePicker
            separator="至"
            picker="date"
            format="YYYY-MM-DD"
            placeholder={['开始日期', '结束日期']}
            disabledDate={(currentDate: MomentType) => {
              if (index == 10000) {
                return handleDisabledDate(getSelectDates(), currentDate);
              }
              // 如果是新增
              if (data.length !== getSelectDates().length) {
                return handleDisabledDate(getSelectDates(), currentDate);
              }
              const list = getSelectDates().filter(
                (_: any, i: number) => i != index,
              );
              return handleDisabledDate(list, currentDate);
            }}
            onChange={(date: any) =>
              handleClearBeforeDateAndCheckIsBetween(date, index)
            }
          />
        );
        break;
      default:
        node = <Input />;
        break;
    }
    return node;
  };

  const EditableCell: React.FC<IEditableCellProps> = ({
    editing,
    dataIndex,
    title,
    record,
    children,
    formItemType,
    ...restProps
  }) => {
    let index = 10000;
    if (data.length > 0 && record.key) {
      index = data.findIndex((item: IDataType) => item.key == record.key);
    }
    const node = _getInputNode(formItemType, index);
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[{ required: true, message: '必填项' }]}
          >
            {node}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  // 1.如果横跨了禁用的区间 清除并提示 2.如果修改了 将之后的所有表单的时间清空
  const handleClearBeforeDateAndCheckIsBetween = (
    section: [MomentType, MomentType],
    index: number,
  ) => {
    if (!section) return false;
    let newData: IDataType[] = [...data];
    const isBetween = _checkIsBetweenSection(
      getSelectDates(),
      section[0],
      section[1],
    );

    if (isBetween) {
      newData[index] = {
        ...newData[index],
        section: null,
      };
      setData([...newData]);
      form.setFieldsValue({ section: null });
      return message.error('不能横跨已经禁用的时间段');
    }
  };

  const handleDisabledDate = (list: any[], currentDate: MomentType) => {
    return !!_disabledDateHasListScope(list, currentDate);
  };

  const handleModalOk = async () => {
    if (editingKey) return message.error('请先保存当前编辑项');
    await form.validateFields();
    console.log(data);
  };

  return (
    <Fragment>
      <Button onClick={() => setVisible(true)}>打开</Button>
      <Modal
        title="提成设置历史"
        okText="确定"
        cancelText="取消"
        getContainer={false}
        forceRender={true}
        centered={true}
        maskClosable={false}
        bodyStyle={{ paddingBottom: 0, paddingTop: 10 }}
        visible={visible}
        onCancel={() => {
          setVisible(false);
          setTimeout(() => {
            setEditingKey('');
            setData([]);
          }, 1000);
        }}
        onOk={() => handleModalOk()}
      >
        <Form form={form} component={false}>
          <Row>
            <Col span={12}>
              <Form.Item label="专岗人员" style={{ marginBottom: 10 }}>
                马继祖
              </Form.Item>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button type="primary" onClick={handleAdd}>
                新增
              </Button>
            </Col>
          </Row>
          <Table
            components={{ body: { cell: EditableCell } }}
            bordered
            dataSource={data}
            columns={handleGetColumns() as any}
            rowClassName="editable-row"
            pagination={{ defaultPageSize: 5 }}
            // pagination={{ onChange: handleCancel }}
          />
        </Form>
      </Modal>
    </Fragment>
  );
};

export default App;

import { Button, DatePicker, Form, Input, InputNumber, Popconfirm, Select } from 'antd';
import type { FormListFieldData } from 'antd/es/form/FormList';
import type { ColumnsType } from 'antd/es/table';
import { CODE_OPTIONS_DICT, FORMITEMPROPS_ONREAD, IAddFn, IGetFormItemColumnsConfigProps, IRemoveFn, MomentType } from "./constant";
const { RangePicker } = DatePicker;

export const historyColumns: ColumnsType<FormListFieldData> = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 80,
    render: (_text, _field, index) => index + 1,
  },
  {
    title: '代码',
    dataIndex: 'label',
    width: 180,
  },
  {
    title: '代码名称',
    dataIndex: 'codeName',
    width: 150,
  },
  {
    title: '公司',
    dataIndex: 'company',
    width: 150,
  },
  {
    title: '当前值',
    dataIndex: 'currentProfit',
    width: 150,
  },
  {
    title: '收益率',
    dataIndex: 'yield',
    width: 150,
  },
  {
    title: '权重',
    dataIndex: 'weight',
    width: 150,
  },
]

export const getFormItemColumns = (
  _add: IAddFn,
  remove: IRemoveFn,
  {
    status,
    FormItemEditProps,
    handleChangeCode,
    handleCheckIsWeightExceedExcessive,
    currentWeight,
    handleGetCurrentWeight,
    handleDisabledDate,
    handleClearBeforeDateAndCheckIsBetween,
    getSelectDates
  }: IGetFormItemColumnsConfigProps
): ColumnsType<FormListFieldData> => {

  const isEdit = status == 'edit';

  return [
    {
      title: '序号',
      dataIndex: 'index',
      render: (_text, _field, index) => index + 1,
      width: 80
    },
    {
      title: '规则生效区间',
      dataIndex: 'date',
      width: 300,
      render(_text, field, index) {
        const isOpen = isEdit ? {} : { open: false };
        const isShowSuffixIcon = isEdit ? {} : { suffixIcon: null };
        const itemProps = {
          allowClear: isEdit ? true : false,
          ...FormItemEditProps,
          ...isOpen,
          ...isShowSuffixIcon
        }
        return (
          <Form.Item
            rules={[{ required: true, message: '请选择规则生效区间' }]}
            name={[field.name, 'date']}
            fieldKey={[field.key, 'date']}
          >
            <RangePicker
              picker="date"
              disabledDate={(currentDate: MomentType) => {
                const list = getSelectDates().filter((_, i) => i != index);
                return handleDisabledDate(list, currentDate);
              }}
              onChange={(date: any) =>
                handleClearBeforeDateAndCheckIsBetween(date, index)
              }
              {...itemProps}
            />
          </Form.Item>
        );
      },
    },
    {
      title: '代码',
      dataIndex: 'code',
      width: 180,
      render(_text, field, index) {
        const isOpen = isEdit ? {} : { open: false }
        const isPlaceholder = isEdit ? { placeholder: '请选择代码' } : {}
        const itemProps = {
          ...FormItemEditProps,
          ...isOpen,
          ...isPlaceholder,
          showArrow: isEdit ? true : false,
          style: isEdit ? { cursor: 'pointer' } : { cursor: 'text' }
        }
        return <Form.Item
          rules={isEdit ? [{ required: true, message: '请选择代码' }] : []}
          name={[field.name, 'code']}
          fieldKey={[field.key, 'code']}
        >
          <Select
            labelInValue
            options={CODE_OPTIONS_DICT}
            onChange={(value) => { handleChangeCode(value, index); handleGetCurrentWeight(); }}
            {...itemProps}
          />
        </Form.Item >
      }
    },
    {
      title: '代码名称',
      dataIndex: 'codeName',
      width: 150,
      render: (_text, field, _index) => (
        <Form.Item name={[field.name, 'codeName']} fieldKey={[field.key, 'codeName']} >
          <Input {...FORMITEMPROPS_ONREAD} />
        </Form.Item>
      )
    },
    {
      title: '公司',
      dataIndex: 'company',
      width: 150,
      render: (_text, field) => (
        <Form.Item name={[field.name, 'company']} fieldKey={[field.key, 'company']} >
          <Input {...FORMITEMPROPS_ONREAD} />
        </Form.Item>
      )
    },
    {
      title: '当前值',
      dataIndex: 'currentProfit',
      width: 150,
      render: (_text, field) => (
        <Form.Item name={[field.name, 'currentProfit']} fieldKey={[field.key, 'currentProfit']} >
          <Input {...FORMITEMPROPS_ONREAD} />
        </Form.Item>
      )
    },
    {
      title: '收益率',
      dataIndex: 'yield',
      width: 150,
      render: (_text, field) => (
        <Form.Item name={[field.name, 'yield']} fieldKey={[field.key, 'yield']} >
          <Input {...FORMITEMPROPS_ONREAD} />
        </Form.Item>
      )
    },
    {
      title: (status == 'edit'
        ? (<div>权重{currentWeight}%<span style={{ color: '#B3B8C2' }}>/100%</span></div>)
        : '权重'),
      dataIndex: 'weight',
      width: 150,
      render(_text, field) {
        const isAddonAfter = isEdit ? { addonAfter: '%' } : {}
        const itemProps = {
          min: 0,
          max: 100,
          step: 1,
          precision: 2,
          onChange: handleGetCurrentWeight,
          ...FormItemEditProps,
          ...isAddonAfter
        }
        return <Form.Item
          rules={isEdit ? [{ required: true, validator: handleCheckIsWeightExceedExcessive }] : []}
          name={[field.name, 'weight']}
          fieldKey={[field.key, 'weight']}
        >
          <InputNumber {...itemProps} />
        </Form.Item>
      }
    },
    isEdit ?
      {
        title: '操作',
        dataIndex: 'operation',
        width: 150,
        render: (_text, field) => (
          <Popconfirm title="确认是否删除" onConfirm={() => remove(field.name)} okText="确认" cancelText="取消" >
            <Button type='link' danger>删除</Button>
          </Popconfirm>
        )
      } : {}
  ]
}
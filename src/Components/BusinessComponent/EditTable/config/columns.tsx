import { DeleteFilled } from '@ant-design/icons';
import { Form, Input, InputNumber, Popconfirm, Select } from 'antd';
import type { FormListFieldData } from 'antd/es/form/FormList';
import type { ColumnsType } from 'antd/es/table';
import { CODE_OPTIONS_DICT, FORMITEMPROPS_ONLYREAD, IAddFn, IRemoveFn } from "./constant";

export const getColumns = (
  add: IAddFn,
  remove: IRemoveFn,
  {
    isEdit,
    FormItemEditProps,
    handleChangeCode,
    handleCheckIsWeightExceedCeile,
    currentWeight
  }: any): ColumnsType<FormListFieldData> => {

  return [
    {
      title: '序号',
      dataIndex: 'index',
      render: (_text, _field, index) => index + 1,
      width: 80
    },
    {
      title: '代码',
      dataIndex: 'code',
      width: 180,
      render(text, field, index) {
        const isOpen = isEdit ? {} : { open: false }
        const isPlaceholder = isEdit ? { placeholder: '请选择代码' } : {}
        const itemProps = {
          ...FormItemEditProps,
          ...isOpen,
          ...isPlaceholder,
          showArrow: isEdit ? true : false,
        }
        return <Form.Item
          rules={isEdit ? [{ required: true, message: '请选择代码' }] : []}
          name={[field.name, 'code']}
          fieldKey={[field.key, 'code']}
        >
          <Select
            labelInValue
            options={CODE_OPTIONS_DICT}
            onChange={(value) => handleChangeCode(value, index)}
            {...itemProps}
          />
        </Form.Item >
      }
    },
    {
      title: '代码名称',
      dataIndex: 'codeName',
      width: 150,
      render(text, field, index) {
        return <Form.Item
          name={[field.name, 'codeName']}
          fieldKey={[field.key, 'codeName']}
        >
          <Input {...FORMITEMPROPS_ONLYREAD} />
        </Form.Item>
      }
    },
    {
      title: '公司',
      dataIndex: 'company',
      width: 150,
      render(text, field) {
        return <Form.Item
          name={[field.name, 'company']}
          fieldKey={[field.key, 'company']}
        >
          <Input {...FORMITEMPROPS_ONLYREAD} />
        </Form.Item>
      }
    },
    {
      title: '当前值',
      dataIndex: 'currentProfit',
      width: 150,
      render(text, field) {
        return <Form.Item
          name={[field.name, 'currentProfit']}
          fieldKey={[field.key, 'currentProfit']}
        >
          <Input {...FORMITEMPROPS_ONLYREAD} />
        </Form.Item>
      }
    },
    {
      title: '收益率',
      dataIndex: 'yield',
      width: 150,
      render(text, field) {
        return <Form.Item
          name={[field.name, 'yield']}
          fieldKey={[field.key, 'yield']}
        >
          <Input {...FORMITEMPROPS_ONLYREAD} />
        </Form.Item>
      }
    },
    {
      title: <div>权重{currentWeight}%/100%</div>,
      dataIndex: 'weight',
      width: 150,
      render(text, field) {
        const isAddonAfter = isEdit ? { addonAfter: '%' } : {}
        const itemProps = {
          ...FormItemEditProps,
          ...isAddonAfter
        }
        return <Form.Item
          rules={isEdit ? [{ required: true, validator: handleCheckIsWeightExceedCeile }] : []}
          name={[field.name, 'weight']}
          fieldKey={[field.key, 'weight']}
        >
          <InputNumber
            min={0}
            max={100}
            step={1}
            precision={2}
            {...itemProps}
          />
        </Form.Item>
      }
    },
    {
      title: '操作',
      dataIndex: 'operate',
      className: 'operate',
      width: 150,
      render(text, field) {
        return (
          <>
            <Popconfirm
              title="确认是否删除"
              onConfirm={() => remove(field.name)}
              okText="确认"
              cancelText="取消"
            >
              <DeleteFilled style={{ marginLeft: 10 }} />
            </Popconfirm>
          </>
        )
      }
    }
  ]
}
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Row, Table } from 'antd';
import type { LabeledValue } from 'antd/es/select';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { getColumns } from "./config/columns";
import { CODE_OPTIONS_DICT, FORMITEMPROPS_ONLYREAD, IFormValues, INIT_FORM_VALUES } from "./config/constant";
import styles from './index.less';

const TableEditForm = () => {
  const [form] = Form.useForm()
  const [isEdit, setIsEdit] = useState<boolean>(true)
  const [currentWeight, setCurrentWeight] = useState<number>(0)

  useEffect(() => {
    form.setFieldsValue(INIT_FORM_VALUES)
    handleGetCurrentWeight()
  }, [])

  // 编辑时的 formItemProps
  const FormItemEditProps = useMemo(() => {
    if (isEdit) return {
      allowclear: "true",
      readOnly: false,
      bordered: true,
    }
    return { ...FORMITEMPROPS_ONLYREAD }
  }, [isEdit])

  const handleChangeCode = (value: LabeledValue, index: number) => {
    const item = CODE_OPTIONS_DICT.find(item => item.value == value.value) || {}
    const tableFormValue = form.getFieldValue('tableForm') || []
    tableFormValue[index] = { ...tableFormValue[index], ...item }
    form.setFieldsValue({
      tableForm: tableFormValue
    })
  }

  const handleCheckIsWeightExceedCeile = (_: any, val: string) => {
    if (val == null) return Promise.reject(new Error('必填项'))
    const tableFormValue = form.getFieldValue('tableForm') || []
    if (!tableFormValue) return Promise.resolve("")
    const weightSum = tableFormValue.reduce((acc: [], cur: any) => acc + (cur?.weight || 0), 0)
    if (weightSum > 100) {
      return Promise.reject(new Error('权重总和不能超出100%'))
    }
    return Promise.resolve("")
  }

  const handleGetCurrentWeight = () => {
    const tableFormValue = form.getFieldsValue()?.tableForm || []
    if (tableFormValue.length === 0) setCurrentWeight(0)
    const weightSum = tableFormValue.reduce((acc: [], cur: any) => acc + (cur?.weight || 0), 0) || 0
    setCurrentWeight(weightSum)
  }

  const onFinish = (values: IFormValues) => {
    console.log(values)
    console.log(form.getFieldsValue())
    setIsEdit(false)
  }

  return (
    <Row gutter={[24, 12]} align='middle' justify='center' className={styles.page}>
      <Col span={24}>
        <Form form={form} onFinish={onFinish} layout='horizontal' onValuesChange={() => handleGetCurrentWeight()}>
          <Form.Item>
            {isEdit && <Button htmlType='submit' type='primary'>点击保存进入查看模式</Button>}
            {!isEdit && <Button onClick={() => setIsEdit(true)}>返回编辑</Button>}
          </Form.Item>
          <Form.List name='tableForm'>
            {(fields, { add, remove }) => {
              return (
                <Fragment>
                  <Table
                    rowKey='key'
                    pagination={false}
                    dataSource={fields}
                    columns={getColumns(add, remove, { isEdit, FormItemEditProps, handleChangeCode, handleCheckIsWeightExceedCeile, currentWeight })}
                  />
                  {isEdit && <Form.Item wrapperCol={{ offset: 6, span: 5 }}>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      添加产品
                    </Button>
                  </Form.Item>}
                </Fragment>
              )
            }}
          </Form.List>
        </Form>
      </Col>
    </Row>
  )
}

export default TableEditForm
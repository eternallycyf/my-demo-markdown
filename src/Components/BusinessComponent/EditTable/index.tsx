import { PlusCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Table } from 'antd';
import type { LabeledValue } from 'antd/es/select';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { getFormItemColumns, historyColumns } from "./config/columns";
import { CODE_OPTIONS_DICT, DATE_OPTIONS, FORMITEMPROPS_ONREAD, HISTORY_DATA_SOURCE, IFormValues, INIT_FORM_VALUES, IStatusState } from "./config/constant";
import styles from './index.less';

// 当前产品组合的数据
const handleFetchCurrentData = async (): Promise<any | IFormValues> => {
  // return await INIT_FORM_VALUES 
  return await []
}

// 历史数据的dataSource
const handleFetchHistoryData = async (date: any = ''): Promise<any[]> => {
  return await HISTORY_DATA_SOURCE
}

// 历史数据日期select的options
const handleFetchDateOptions = async (): Promise<any[]> => {
  return await DATE_OPTIONS
}

const TableEditForm = () => {
  const [form] = Form.useForm()
  const [isEmpty, setIsEmpty] = useState<boolean>(true)
  const [status, setStatus] = useState<IStatusState>('edit')
  // 历史产品组合-历史设置日期-select-option
  const [dateOptions, setDateOptions] = useState<any[]>([])
  // 当前已经选择的权重之和
  const [currentWeight, setCurrentWeight] = useState<number>(0)
  // 缓存的数据 用于保存的取消操作
  const [cacheFormValues, setCacheFormValues] = useState<IFormValues['tableForm']>([])
  // 历史产品组合的 dataSource
  const [historyDataSource, setHistoryDataSource] = useState<any[]>([])

  useEffect(() => {
    handleInitPage()
  }, [])

  // 编辑时的 formItemProps
  const FormItemEditProps = useMemo(() => {
    if (status == 'edit') return {
      allowclear: "true",
      readOnly: false,
      bordered: true,
    }
    return { ...FORMITEMPROPS_ONREAD }
  }, [status])

  const handleInitPage = async () => {
    const initFormValues = await handleFetchCurrentData()
    form.setFieldsValue(initFormValues)
    initFormValues.tableForm && setIsEmpty(false)
    setCacheFormValues(initFormValues.tableForm)

    const dataOptions = await handleFetchDateOptions()
    setDateOptions(dataOptions)

    const historyData = await handleFetchHistoryData("")
    setHistoryDataSource(historyData)

    handleGetCurrentWeight()
  }

  const handleChangeCode = (value: LabeledValue, index: number) => {
    const item = CODE_OPTIONS_DICT.find(item => item.value == value.value) || {}
    const tableFormValue = form.getFieldValue('tableForm') || []
    tableFormValue[index] = { ...tableFormValue[index], ...item }
    form.setFieldsValue({
      tableForm: tableFormValue
    })
  }

  const handleChangeSelectDate = async (obj: LabeledValue) => {
    const historyDataSource = await handleFetchHistoryData(obj.value)
    setHistoryDataSource(historyDataSource)
  }

  const handleGetCurrentWeight = () => {
    const tableFormValue = form.getFieldsValue()?.tableForm || []
    if (tableFormValue.length === 0) setCurrentWeight(0)
    const weightSum = tableFormValue.reduce((acc: [], cur: any) => acc + (cur?.weight || 0), 0) || 0
    setCurrentWeight(weightSum)
  }

  const handleCheckIsWeightExceedExcessive = (_: any, val: string) => {
    if (val == null) return Promise.reject(new Error('必填项'))
    const tableFormValue = form.getFieldValue('tableForm') || []
    if (!tableFormValue) return Promise.resolve("")
    if (currentWeight > 100) {
      return Promise.reject(new Error('权重总和必须小于等于100%'))
    }
    return Promise.resolve("")
  }

  const handleExport = () => {
  }

  const handleOnCancel = () => {
    form.setFieldsValue({ tableForm: cacheFormValues })
    handleGetCurrentWeight()
    setStatus('view')
  }

  const onFinish = (values: IFormValues) => {
    setStatus('view')
    setCacheFormValues(values.tableForm)
  }

  const renderButton = () => {
    const isHistory = status == 'history';

    const EditButton = (
      <Col span={12} style={{ textAlign: 'right' }}>
        {(form.getFieldValue('tableForm') && form.getFieldValue('tableForm')?.length != 0) && <Button onClick={() => handleOnCancel()} style={{ marginRight: 12 }}>取消</Button>}
        <Button htmlType='submit' type='primary'>保存</Button>
      </Col>
    )

    const ViewButton = (
      <Col span={12} style={{ textAlign: 'right' }}>
        <Button onClick={() => setStatus('history')} style={{ marginRight: 12 }}>历史产品组合</Button>
        <Button onClick={() => setStatus('edit')} type='primary'>编辑产品组合</Button>
      </Col>
    )

    const HistoryButton = (
      <Col span={12} style={{ textAlign: 'right' }}>
        <Button onClick={() => setStatus('view')} style={{ marginRight: 12 }} >返回</Button>
        <Button onClick={() => handleExport()} type='primary' icon={<UploadOutlined />}>导出</Button>
      </Col>
    )

    return (
      <Row style={{ marginBottom: 24 }}>
        <Col span={12}>
          <Row align='middle' gutter={[0, 20]}>
            <Col>
              {isHistory ? (
                <Form.Item name='historyDate' label='历史设置日期' initialValue={dateOptions[0]}>
                  <Select onChange={(obj: LabeledValue) => handleChangeSelectDate(obj)} options={dateOptions} labelInValue allowClear style={{ width: 160 }} />
                </Form.Item>
              ) : (
                <Form.Item name='currentDate' label='组合设置日期'>
                  <Input allowClear={false} readOnly={true} bordered={false} />
                </Form.Item>
              )}
            </Col>
          </Row>
        </Col>
        {status == 'edit' && EditButton}
        {status == 'view' && ViewButton}
        {status == 'history' && HistoryButton}
      </Row>
    )
  }

  return (
    <Row gutter={[24, 12]} align='middle' justify='center' className={styles.page}>
      {
        isEmpty ? (
          <Col span={24} style={{ height: 400, textAlign: 'center', lineHeight: '400px' }}>
            <div>
              <div style={{ height: 40, color: '#5B6371' }}>您还未设置产品组合</div>
              <Button onClick={() => setIsEmpty(false)}>设置产品组合</Button>
            </div>
          </Col>
        ) : (
          <Col span={24}>
            <Form form={form} onFinish={onFinish} layout='horizontal' onValuesChange={() => handleGetCurrentWeight()}>
              {renderButton()}
              {status !== 'history' ? (
                <Form.List name='tableForm'>
                  {(fields, { add, remove }) => {
                    return (<Fragment>
                      <Table
                        rowKey='key'
                        pagination={false}
                        dataSource={fields}
                        columns={getFormItemColumns(add, remove, { status, FormItemEditProps, handleChangeCode, handleCheckIsWeightExceedExcessive, currentWeight, handleGetCurrentWeight })}
                      />
                      {status == 'edit' && (
                        <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 0 }} style={{ marginTop: 10 }}>
                          <Button type='link' onClick={() => add()} block >
                            <div style={{ color: '#3363D7' }}><PlusCircleOutlined /> &nbsp;添加产品</div>
                          </Button>
                        </Form.Item>
                      )}
                    </Fragment>)
                  }}
                </Form.List>
              ) : (
                <Table rowKey='key' pagination={false} dataSource={historyDataSource} columns={historyColumns} />
              )}
            </Form>
          </Col>)}
    </Row>
  )
}

export default TableEditForm
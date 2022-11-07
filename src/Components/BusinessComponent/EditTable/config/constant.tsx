import type { FormListOperation } from 'antd/es/form/FormList';
import type { LabeledValue } from 'antd/es/select';

// 编辑状态 | 展示状态 | 历史组合状态
export type IStatusState = 'edit' | 'view' | 'history'

export interface IFormItemType {
  code: { label: string, value: number }
  codeName: string;
  company: string;
  currentProfit: number;
  yield: number;
  weight: number;
}
export interface DataType extends IFormItemType { }
export interface IFormValues {
  currentDate: string;
  tableForm: DataType[]
}
export type IAddFn = FormListOperation['add'];
export type IRemoveFn = FormListOperation['remove'];

export interface IGetFormItemColumnsConfigProps {
  status: IStatusState;
  FormItemEditProps: { allowclear: boolean; readOnly: boolean; bordered: boolean; } | typeof FORMITEMPROPS_ONREAD;
  handleChangeCode: (value: LabeledValue, index: number) => void;
  handleCheckIsWeightExceedExcessive: (_: any, val: string) => Promise<string>;
  currentWeight: number;
}

// 只展示的 formItemProps
export const FORMITEMPROPS_ONREAD = {
  allowclear: "false",
  readOnly: true,
  bordered: false,
}

// mock的数据  1.联动的code数据 2.回显的表单数据 3.历史组合选择日期的数据 5.历史组合的dataSource
export const CODE_OPTIONS_DICT = [
  { label: 'product1-00001', value: 100001, codeName: "product1", company: 'xxx1', currentProfit: 100, profit: 100, yield: 100, weight: 10 },
  { label: 'product2-00002', value: 100002, codeName: "product2", company: 'xxx2', currentProfit: 200, profit: 200, yield: 200, weight: 20 },
]

export const INIT_FORM_VALUES: IFormValues = {
  currentDate: '2022-01-01',
  tableForm: [
    {
      code: { label: 'product1-00001', value: 100001 },
      codeName: "00001",
      company: 'company1',
      currentProfit: 100,
      yield: 100,
      weight: 10
    },
  ]
}

export const DATE_OPTIONS = [
  { label: '2021年01月1日', value: '2021-01-01' },
  { label: '2021年01月2日', value: '2021-01-02' },
  { label: '2021年01月3日', value: '2021-01-03' },
  { label: '2021年01月4日', value: '2021-01-04' },
]

export const HISTORY_DATA_SOURCE = [
  { key: 1, name: '1', label: 'product1-00001', value: 100001, codeName: "product1", company: 'xxx1', currentProfit: 100, profit: 100, yield: 100, weight: 10 },
  { key: 2, name: '2', label: 'product2-00002', value: 100002, codeName: "product2", company: 'xxx2', currentProfit: 200, profit: 200, yield: 200, weight: 20 },
]
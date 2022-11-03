import type { FormListOperation } from 'antd/es/form/FormList';

export interface IformItemType {
  code: { label: string, value: number }
  codeName: string;
  company: string;
  currentProfit: number;
  yield: number;
  weight: number;
}
export interface DataType extends IformItemType { }
export interface IFormValues {
  tableForm: DataType[]
}
export type IAddFn = FormListOperation['add'];
export type IRemoveFn = FormListOperation['remove'];

// 只展示的 formItemProps
export const FORMITEMPROPS_ONLYREAD = {
  allowclear: "false",
  readOnly: true,
  bordered: false,
}

export const CODE_OPTIONS_DICT = [
  { label: 'product1-00001', value: 100001, codeName: "product1", company: 'xxx1', currentProfit: 100, profit: 100, yield: 100, weight: 10 },
  { label: 'product2-00002', value: 100002, codeName: "product2", company: 'xxx2', currentProfit: 200, profit: 200, yield: 200, weight: 20 },
]

export const INIT_FORM_VALUES: IFormValues = {
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
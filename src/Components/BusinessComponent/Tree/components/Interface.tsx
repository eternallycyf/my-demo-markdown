type setData = (arr: any[]) => void;

export interface IBaseTabProps {
  useDataSource: [any[], setData];
  useSelectList: [any[], setData];
  dataSourceAllLeaf: any[];
  handleCheckboxOnchange: (key: string | number) => void;
  handleGetAllPathNode: (arr: any[]) => any[];
  [props: number]: any;
}

export interface ICurrentListProps {
  useDataSource: [any[], setData];
  useSelectList: [any[], setData];
  handleDeleteSelectList: (key: string | number) => void;
  handleClearAll: () => void;
  handleGetAllPathNode: (arr: any[]) => any[];
  [props: number]: any;
}

export interface ICheckboxProps {
  data: any[];
  rows: number;
  selectList: any[];
  handleCheckboxOnchange: (key: string | number) => void;
  handleGetAllPathNode: (arr: any[]) => any[];
  [props: number]: any;
}

export interface IDepartmentTabsProps extends IBaseTabProps {}

export interface IPersonnelTabsProps extends IBaseTabProps {}

export interface IVirtualListProps {
  key: number | string;
  rows: number;
  children: React.ReactNode;
  [props: number]: any;
}

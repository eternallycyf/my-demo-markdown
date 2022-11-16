import moment from 'moment';

export type MomentType = moment.MomentInput;
export interface ITimesArr {
  startTime: moment.MomentInput;
  endTime: moment.MomentInput;
}

export interface IDataType {
  key: string;
  section: {
    startTime: string | null;
    endTime: string | null;
  } | null;
}

export interface IFormValuesType {
  key: string;
  section: [moment.MomentInput, moment.MomentInput];
}

export interface IEditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  record: IDataType;
  formItemType: 'input' | 'rangePicker';
  index: number;
  children: React.ReactNode;
}

export interface IGetColumnsHandle {
  data: IDataType[];
  isEditing: (record: IDataType) => boolean;
  editingKey: string;
  handleSave: (key: React.Key) => void;
  handleEdit: (record: IFormValuesType & { key: React.Key }) => void;
  handleCancel: (key: IDataType['key']) => void;
  handleDelete: (key: React.Key) => void;
}

export const originData: IDataType[] = [
  {
    key: '0',
    section: {
      startTime: '2022-11-01',
      endTime: '2022-11-01',
    },
  },
  {
    key: '1',
    section: {
      startTime: '2022-11-02',
      endTime: '2022-11-04',
    },
  },
];

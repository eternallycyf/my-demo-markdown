import { Button, Popconfirm } from 'antd';
import moment from 'moment';
import { Fragment } from 'react';
import { IDataType, IFormValuesType, IGetColumnsHandle } from './constant';

export const getColumns = ({
  data,
  isEditing,
  editingKey,
  handleSave,
  handleEdit,
  handleCancel,
  handleDelete,
}: IGetColumnsHandle) => {
  return [
    {
      title: '不计提成区间',
      dataIndex: 'section',
      editable: true,
      align: 'center',
      render: (text: IDataType['section']) => {
        if (text == null) return '--';
        const startTime = text?.startTime
          ? moment(text.startTime).format('YYYY-MM-DD')
          : '--';
        const endTime = text?.endTime
          ? moment(text.endTime).format('YYYY-MM-DD')
          : '--';
        return `${startTime} ~ ${endTime}`;
      },
      shouldCellUpdate: () => true,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center',
      render: (_: any, record: IDataType) => {
        const editable = isEditing(record);

        const editButton = (
          <Fragment>
            <Button type="link" onClick={() => handleCancel(record.key)}>
              {' '}
              取消
            </Button>
            <Button
              type="link"
              onClick={() => handleSave(record.key)}
              style={{ marginRight: 8 }}
            >
              保存
            </Button>
          </Fragment>
        );

        const ViewButton = (
          <Fragment>
            <Button
              disabled={editingKey !== ''}
              onClick={() => handleEdit((record as any) as IFormValuesType)}
              type="link"
            >
              编辑
            </Button>
            {data.length >= 1 ? (
              <Popconfirm
                okText="确认"
                cancelText="取消"
                title="确认删除该区间?"
                onConfirm={() => handleDelete(record.key)}
              >
                <Button type="link" danger>
                  删除
                </Button>
              </Popconfirm>
            ) : null}
          </Fragment>
        );

        const OperationButton = editable ? editButton : ViewButton;

        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {OperationButton}
          </div>
        );
      },
    },
  ];
};

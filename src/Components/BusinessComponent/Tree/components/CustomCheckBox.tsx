import { Checkbox, Row } from 'antd';
import { FC } from 'react';
import { BREADCRUMB_MAX_LENGTH, ID } from './constant';
import { ICheckboxProps } from './interface';
import { handleRenderPath } from './utils';
import VirtualList from './VirtualList';

const CustomCheckBox: FC<ICheckboxProps> = props => {
  const {
    data,
    rows,
    selectList,
    handleCheckboxOnchange,
    handleGetAllPathNode,
  } = props;

  const pathList = handleGetAllPathNode(data);
  const newData = data?.map((item, index) => ({
    ...item,
    path: pathList[index],
  }));

  return (
    <>
      <Checkbox.Group style={{ width: '100%' }} value={selectList}>
        <Row justify="space-between" style={{ width: '100%' }}>
          {newData?.map((item: any) => {
            return (
              <VirtualList key={item?.[ID]} rows={rows}>
                <Checkbox
                  value={item?.[ID]}
                  onChange={() => handleCheckboxOnchange(item?.[ID])}
                >
                  {handleRenderPath(item.path, '|', BREADCRUMB_MAX_LENGTH)}
                </Checkbox>
              </VirtualList>
            );
          })}
        </Row>
      </Checkbox.Group>
    </>
  );
};
export default CustomCheckBox;

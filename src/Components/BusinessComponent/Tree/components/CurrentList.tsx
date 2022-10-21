import { MinusCircleTwoTone } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import { FC, Fragment, useMemo } from 'react';
import { BREADCRUMB_MAX_LENGTH, ID } from './constant';
import { ICurrentListProps } from './interface';
import {
  getDataSourceAllLeaf,
  handleRenderPath,
  removeDuplicate,
} from './utils';
import VirtualList from './VirtualList';
const { Link, Text } = Typography;

const CurrentList: FC<ICurrentListProps> = props => {
  const {
    useDataSource,
    useSelectList,
    handleDeleteSelectList,
    handleClearAll,
    handleGetAllPathNode,
  } = props;
  const [dataSource, setDataSource] = useDataSource;
  const [selectList, setSelectList] = useSelectList;

  const data = useMemo(() => {
    const leafData = getDataSourceAllLeaf(dataSource);
    return removeDuplicate(
      selectList.map((item: any) => leafData.find(ele => ele[ID] === item)),
    );
  }, [dataSource, selectList]);

  const pathList = handleGetAllPathNode(data);
  const newData = data?.map((item, index) => ({
    ...item,
    path: pathList[index],
  }));

  return (
    <Fragment>
      <Row style={{ margin: '10px 0' }}>
        <Col span={2}>
          <Text>已选中{data?.length ?? 0}条</Text>
        </Col>
        <Col span={22} style={{ textAlign: 'right' }}>
          {' '}
          <Link onClick={() => handleClearAll()}>清空</Link>
        </Col>
      </Row>
      <Row>
        {newData?.map((item: any) => {
          return (
            <VirtualList key={item?.[ID]} rows={3}>
              <Row gutter={[12, 24]}>
                <Col span={1}>
                  <MinusCircleTwoTone
                    onClick={() => handleDeleteSelectList(item?.[ID])}
                  />
                </Col>
                <Col span={23}>
                  {handleRenderPath(item.path, '|', BREADCRUMB_MAX_LENGTH)}
                </Col>
              </Row>
            </VirtualList>
          );
        })}
      </Row>
    </Fragment>
  );
};

export default CurrentList;

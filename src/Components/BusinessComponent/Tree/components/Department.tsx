import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Breadcrumb, Col, Input, Row, Table } from 'antd';
import { FC, useMemo, useState } from 'react';
import { transformFn } from '../ChooseTree';
import {
  BREADCRUMB_MAX_LENGTH,
  CHILDREN,
  columns,
  ID,
  NAME,
  PID,
} from './constant';
import CustomCheckBox from './CustomCheckBox';
import { IDepartmentTabsProps } from './interface';
import { getDataSourceAllLeaf, handleRenderPath } from './utils';
const { Search } = Input;

const Department: FC<IDepartmentTabsProps> = props => {
  const {
    useDataSource,
    useSelectList,
    dataSourceAllLeaf,
    handleCheckboxOnchange,
    handleGetAllPathNode,
  } = props;

  const [searchDepartmentValue, setDepartmentSearchValue] = useState('');
  const [searchPersonnelValue, setSearchPersonnelValue] = useState('');
  const [searchAllLeafData, setSearchAllLeafData] = useState<any[]>([]);
  const [dataSource, setDataSource] = useDataSource;
  const [selectList, setSelectList] = useSelectList;
  const [pathList, setPathList] = useState([]);

  // 搜索部门后筛选的叶子节点的数据
  const searchTreeData = useMemo(() => {
    if (!searchDepartmentValue.trim()) {
      setSearchAllLeafData([]);
      return dataSource;
    }
    const searchData = transformFn.removeEmptyChildren(
      transformFn.fuzzyQueryTree(
        dataSource,
        searchDepartmentValue,
        'department',
      ),
    );
    return searchData;
  }, [searchDepartmentValue]);

  // 根据搜索条件生成的最终显示的树形数据
  const searchCurrentLeafData = useMemo(() => {
    if (searchAllLeafData.length == 0) return [];
    if (!searchPersonnelValue.trim()) return searchAllLeafData;
    const searchData = searchAllLeafData.filter(item =>
      item[NAME].includes(searchPersonnelValue),
    );
    return searchData;
  }, [searchPersonnelValue, searchAllLeafData]);

  // 点击部门后设置筛选的叶子节点的数据
  const handleClickDepartment = (record: any) => {
    setSearchPersonnelValue('');
    if (record[PID] == 0) return setSearchAllLeafData(dataSourceAllLeaf);
    const searchData = transformFn.removeEmptyChildren(
      transformFn.fuzzyQueryTree(dataSource, record[NAME]),
    );
    setSearchAllLeafData(getDataSourceAllLeaf(searchData));
    setPathList(transformFn.getNodePath(dataSource, record[ID]));
  };

  return (
    <Row>
      <Col span={8} style={{ height: '50vh', overflow: 'scroll' }}>
        <Search
          placeholder="搜索部门"
          value={searchDepartmentValue}
          onChange={e => setDepartmentSearchValue(e.target.value)}
          onSearch={value => setDepartmentSearchValue(value)}
          allowClear
        />
        <Table
          columns={columns}
          dataSource={[...searchTreeData]}
          showHeader={false}
          pagination={false}
          rowKey={ID}
          expandable={{
            rowExpandable: record => (record[CHILDREN] ? true : false),
            expandIcon: ({ expanded, onExpand, record }) => {
              if (!record[CHILDREN] || record[CHILDREN].length === 0)
                return null;
              return expanded ? (
                <CaretDownOutlined
                  style={{ marginRight: 10 }}
                  onClick={e => {
                    onExpand(record, e), e.stopPropagation();
                  }}
                />
              ) : (
                <CaretUpOutlined
                  style={{ marginRight: 10 }}
                  onClick={e => {
                    onExpand(record, e), e.stopPropagation();
                  }}
                />
              );
            },
          }}
          onRow={record => {
            return { onClick: () => handleClickDepartment(record) };
          }}
        />
      </Col>
      <Col span={15} offset={1}>
        <Row style={{ margin: '10px 10px' }}>
          <Col span={12}>
            <Breadcrumb separator={'>'}>
              {pathList.length == 0 && (
                <Breadcrumb.Item>
                  {' '}
                  {dataSource?.[0]?.[NAME] ?? '--'}
                </Breadcrumb.Item>
              )}
            </Breadcrumb>
            {handleRenderPath(pathList, '>', BREADCRUMB_MAX_LENGTH, false)}
          </Col>
          <Col span={12}>
            <Search
              placeholder="搜索人员"
              value={searchPersonnelValue}
              onChange={e => setSearchPersonnelValue(e.target.value)}
              allowClear
            />
          </Col>
        </Row>
        <CustomCheckBox
          rows={2}
          data={searchCurrentLeafData}
          selectList={selectList}
          handleCheckboxOnchange={handleCheckboxOnchange}
          handleGetAllPathNode={handleGetAllPathNode}
        />
      </Col>
    </Row>
  );
};

export default Department;

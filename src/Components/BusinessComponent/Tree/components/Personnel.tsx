import { Input, Row } from 'antd';
import { FC, useMemo, useState } from 'react';
import { transformFn } from '../ChooseTree';
import CustomCheckBox from './CustomCheckBox';
import { IPersonnelTabsProps } from './Interface';
import { getDataSourceAllLeaf } from './utils';
const { Search } = Input;

const Personnel: FC<IPersonnelTabsProps> = props => {
  const {
    useDataSource,
    useSelectList,
    dataSourceAllLeaf,
    handleCheckboxOnchange,
    handleGetAllPathNode,
  } = props;

  const [searchValue, setSearchValue] = useState('');
  const [dataSource, setDataSource] = useDataSource;
  const [selectList, setSelectList] = useSelectList;

  // 搜索后筛选的数据
  const searchAllLeafData = useMemo(() => {
    const searchData = transformFn.removeEmptyChildren(
      transformFn.fuzzyQueryTree(dataSource, searchValue),
    );
    return getDataSourceAllLeaf(searchData);
  }, [dataSourceAllLeaf, searchValue]);

  return (
    <Row gutter={12} style={{ margin: '5px 10px' }}>
      <Search
        placeholder="搜索人员、部门"
        onSearch={searchValue => setSearchValue(searchValue)}
        allowClear
        style={{ margin: '10px 0' }}
      />
      <CustomCheckBox
        rows={3}
        data={searchAllLeafData}
        handleCheckboxOnchange={handleCheckboxOnchange}
        selectList={selectList}
        handleGetAllPathNode={handleGetAllPathNode}
      />
    </Row>
  );
};

export default Personnel;

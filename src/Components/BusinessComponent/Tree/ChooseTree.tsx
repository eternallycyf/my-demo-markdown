import { Modal, Tabs } from 'antd';
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
import { ID } from './components/constant';
import CurrentList from './components/CurrentList';
import Department from './components/Department';
import Personnel from './components/Personnel';
import {
  getDataSourceAllLeaf,
  removeDuplicate,
  TreeHelpUtils,
} from './components/utils';
import styles from './index.less';
export const transformFn = new TreeHelpUtils({});

interface IChooseTreeHandle {
  useVisible: () => [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  useDataSource: () => [any[], React.Dispatch<React.SetStateAction<any[]>>];
  useSelectData: () => [any[], React.Dispatch<React.SetStateAction<any[]>>];
  handleClearAll: () => void;
  handleGetAllPathNode: (arr: any[], data: any[]) => any[];
}

type IChooseTreeProps = {
  ModalRef: any;
  handleModalOk: (arr: any[]) => void;
};

const ChooseTree: ForwardRefRenderFunction<
  IChooseTreeHandle,
  IChooseTreeProps
> = (props, ref) => {
  const { ModalRef, handleModalOk } = props;

  const container = useRef<HTMLDivElement>(null!);
  const [visible, setVisible] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [selectList, setSelectList] = useState<any[]>([]);

  // 获取所有叶子节点
  const dataSourceAllLeaf = useMemo(() => {
    return getDataSourceAllLeaf(dataSource);
  }, [dataSource]);

  useImperativeHandle(ModalRef, () => ({
    useVisible: () => [visible, setVisible],
    useDataSource: () => [dataSource, setDataSource],
    useSelectData: () => [selectList, setSelectList],
    handleClearAll: () => handleClearAll(),
    handleGetAllPathNode: (arr: any, data: any[]) =>
      arr.map((item: any) => transformFn.getNodePath(data, item[ID])),
  }));

  // 获取所有叶子节点的路径相关属性
  const handleGetAllPathNode = (arr: any[]) => {
    return arr.map(item => transformFn.getNodePath(dataSource, item[ID]));
  };

  // 设置选中的数据
  const handleCheckboxOnchange = (seleteKey: string | number) => {
    if (selectList.find((item: any) => item === seleteKey)) {
      return setSelectList(
        selectList.filter((item: any) => item !== seleteKey),
      );
    }
    const newArr = removeDuplicate([...selectList, seleteKey]);
    setSelectList([...newArr]);
  };

  // 删除选中的数据
  const handleDeleteSelectList = (deleteKey: string | number) => {
    const arr = selectList.filter((item: any) => item != deleteKey);
    setSelectList(arr);
  };

  const handleClearAll = () => setSelectList([]);

  const handleOk = () => {
    const data = handleGetAllPathNode(selectList.map(item => ({ [ID]: item })));
    const selectFormLabelInValueList = selectList.map((item, index) =>
      data[index].pop(),
    );
    handleModalOk && handleModalOk(selectFormLabelInValueList);
  };

  const items = [
    {
      label: '人员',
      key: 'item-1',
      children: (
        <Personnel
          useDataSource={[dataSource, setDataSource]}
          useSelectList={[selectList, setSelectList]}
          dataSourceAllLeaf={dataSourceAllLeaf}
          handleCheckboxOnchange={handleCheckboxOnchange}
          handleGetAllPathNode={handleGetAllPathNode}
        />
      ),
    },
    {
      label: '部门',
      key: 'item-2',
      children: (
        <Department
          useDataSource={[dataSource, setDataSource]}
          useSelectList={[selectList, setSelectList]}
          dataSourceAllLeaf={dataSourceAllLeaf}
          handleCheckboxOnchange={handleCheckboxOnchange}
          handleGetAllPathNode={handleGetAllPathNode}
        />
      ),
    },
  ];

  return (
    <div ref={ModalRef}>
      <div className={styles.page} ref={container}>
        <Modal
          title={<Tabs items={items} destroyInactiveTabPane />}
          open={visible}
          onOk={handleOk}
          onCancel={() => setVisible(false)}
          maskClosable={false}
          width={1100}
          getContainer={() => container.current}
          destroyOnClose
          forceRender
        >
          <CurrentList
            useDataSource={[dataSource, setDataSource]}
            useSelectList={[selectList, setSelectList]}
            handleDeleteSelectList={handleDeleteSelectList}
            handleClearAll={handleClearAll}
            handleGetAllPathNode={handleGetAllPathNode}
          />
        </Modal>
      </div>
    </div>
  );
};

export default forwardRef(ChooseTree);

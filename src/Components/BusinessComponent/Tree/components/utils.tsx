import { Breadcrumb, Tooltip } from 'antd';
import {
  BREADCRUMB_MAX_LENGTH,
  CHILDREN,
  ID,
  LIST,
  NAME,
  PID,
} from './constant';
import CustTooltipCom from './CustTooltip';
import useVirtualListHook from './useVirtualList';

export const useVirtualList = useVirtualListHook;
export const CustTooltip = CustTooltipCom;

/**
 *
 * @param arr 去重并且过滤 undefined | null
 * @returns
 */
export const removeDuplicate = (arr: any[]) => {
  let newArr = [...new Set([...arr])];
  return newArr.filter(item => item != undefined);
};

/**
 * 获取树形结构的所有叶子节点
 * @param dataSource
 * @returns
 */
export const getDataSourceAllLeaf = (dataSource: any[]) => {
  const transformFn = new TreeHelpUtils({});
  let newDataSource = [];
  newDataSource = transformFn.removeEmptyChildren(dataSource);
  newDataSource = transformFn.filterTreeByFunc(dataSource, item => item[LIST]);
  newDataSource = transformFn.getAllLeaf(newDataSource);
  return newDataSource;
};

/**
 * 生成面包屑导航 移除隐藏
 * @param arr
 * @param separator
 * @param maxLength
 * @param isReverse
 * @returns
 */
export const handleRenderPath = (
  arr: any[],
  separator: string = '|',
  maxLength: number = BREADCRUMB_MAX_LENGTH,
  isReverse = true,
) => {
  const INLINE_BLOCK = { display: 'inline' };
  let list = [];
  if (isReverse) {
    arr.reverse().pop();
  }
  list = arr;

  const getBreadcrumb = (arr: any[]) => {
    return arr.map((item: { name: string; id: number }) => {
      return (
        <Breadcrumb.Item key={item[ID]}>{item[NAME] ?? '--'}</Breadcrumb.Item>
      );
    });
  };
  if (list.length < maxLength) {
    return (
      <Breadcrumb separator={separator} style={INLINE_BLOCK}>
        {getBreadcrumb(list)}
      </Breadcrumb>
    );
  }
  const newPathList = list.slice(0, maxLength - 1);
  return (
    <Tooltip
      color="#fff"
      title={
        <Breadcrumb style={INLINE_BLOCK} separator={separator}>
          {getBreadcrumb(list)}{' '}
        </Breadcrumb>
      }
    >
      <Breadcrumb separator={separator} style={INLINE_BLOCK}>
        {getBreadcrumb(newPathList)}&nbsp;{separator}&nbsp;...
      </Breadcrumb>
    </Tooltip>
  );
};

interface ITreeHelpKeys {
  id?: string;
  pid?: string;
  children?: string;
  name?: string;
  list?: string;
}

export class TreeHelpUtils {
  id?: string;
  pid?: string;
  children?: string;
  name?: string;
  list?: string;
  constructor({ id, pid, children, name, list }: ITreeHelpKeys) {
    this.id = id || ID;
    this.pid = pid || PID;
    this.children = children || CHILDREN;
    this.name = name || NAME;
    this.list = list || LIST;
  }

  /**
   * 打平
   * @param arr
   * @returns
   */
  flatten = (arr: any[]): any[] => {
    return arr.reduce((result, item) => {
      return result.concat(Array.isArray(item) ? this.flatten(item) : item);
    }, []);
  };

  /**
   * 转换树形结构
   * @param arr
   * @param pid
   * @returns
   */
  arrayToTree = (arr: any[], pid: string | number): any[] => {
    let res: any[] = [];
    arr.forEach((item: any) => {
      if (item[this.pid as string] === pid) {
        let itemChildren = this.arrayToTree(arr, item[this.id as string]);
        if (itemChildren.length) {
          item[this.children as string] = itemChildren;
        }
        res.push(item);
      }
    });
    return res;
  };

  /**
   * 转换树形-深度优先
   * @param tree
   * @returns
   */
  treeToDeepArray = (tree: any[]) => {
    let stack = tree,
      result = [];
    while (stack.length !== 0) {
      let pop = stack.pop();
      result.push({
        [this.id as string]: pop[this.id as string],
        [this.name as string]: pop[this.name as string],
        [this.pid as string]: pop[this.pid as string],
      });
      let children = pop[this.children as string];
      if (children) {
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
    }
    return result;
  };

  /**
   * 转换树形-广度优先
   * @param tree
   * @returns
   */
  treeToWideArray = (tree: any[]) => {
    let queue = tree,
      result = [];
    while (queue.length !== 0) {
      let shift = queue.shift();
      result.push({
        [this.id as string]: shift[this.id as string],
        [this.name as string]: shift[this.name as string],
        [this.pid as string]: shift[this.pid as string],
      });
      let children = shift[this.children as string];
      if (children) {
        for (let i = 0; i < children.length; i++) {
          queue.push(children[i]);
        }
      }
    }
    return result;
  };

  /**
   * 不用考虑除children外的其他属性
   * @param source
   * @returns
   */
  treeToExcludeChildrenArray = (source: any[]) => {
    let res: any[] = [];
    source.forEach((item: any) => {
      res.push(item);
      item[this.children as string] &&
        res.push(
          ...this.treeToExcludeChildrenArray(item[this.children as string]),
        );
    });
    return res.map((item: any) => {
      if (item[this.children as string]) {
        delete item[this.children as string];
      }
      return item;
    });
  };

  /**
   * 树筛选，保留符合条件的数据并返回树结构
   * 筛选出show为true数据
   * const func = (item) => item.show === true
   * const result = filterTreeByFunc(tree, func);
   * @param tree
   * @param func
   * @returns
   */
  filterTreeByFunc = (tree: any[], func: (props: any) => any) => {
    if (!Array.isArray(tree) || tree.length === 0) {
      return [];
    }
    return tree.filter(item => {
      item[this.children as string] =
        item[this.children as string] &&
        this.filterTreeByFunc(item[this.children as string], func);
      return (
        func(item) ||
        (item[this.children as string] && item[this.children as string].length)
      );
    });
  };

  /**
   * 查找某一节点在树中路径
   * const result = getNodePath(tree, 112);
   * @param tree
   * @param id
   * @returns
   */
  getNodePath = (
    tree: any[],
    id: string | number,
    nameKey = this.name,
    idKey = this.id,
  ) => {
    if (!Array.isArray(tree) || tree.length === 0) {
      return [];
    }
    const path: any[] = [];
    const treeFindPath = (
      tree: any[],
      id: string | number,
      path: any[],
    ): any => {
      for (const item of tree) {
        path.push({
          [this.name as string]: item[nameKey as string],
          [this.id as string]: item[idKey as string],
        });
        if (item[this.id as string] === id) {
          return path;
        }
        if (item[this.children as string]) {
          const findChildren = treeFindPath(
            item[this.children as string],
            id,
            path,
          );
          if (findChildren.length) {
            return findChildren;
          }
        }
        if (item[this.list as string]) {
          const findChildren = treeFindPath(
            item[this.list as string],
            id,
            path,
          );
          if (findChildren.length) {
            return findChildren;
          }
        }
        path.pop();
      }
      return [];
    };
    return treeFindPath(tree, id, path);
  };

  /**
   * 模糊查询树
   * @param arr
   * @param value
   * @param {'department'|'personal'|'all'}
   * @returns
   */
  fuzzyQueryTree = (
    arr: any[],
    value: string | number,
    type: 'department' | 'personal' | 'all' = 'all',
  ) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return [];
    }
    let result: any[] = [];
    arr.forEach(item => {
      if (item[this.name as string].indexOf(value) > -1) {
        // const children = this.fuzzyQueryTree(item[this.children as string], value);
        // const obj = { ...item, [this.children as string]: children }
        // result.push(obj);
        result.push(item);
      } else {
        if (
          item[this.children as string] &&
          item[this.children as string].length > 0
        ) {
          const children = this.fuzzyQueryTree(
            item[this.children as string],
            value,
            type,
          );
          const obj = { ...item, [this.children as string]: children };
          if (children && children.length > 0) {
            result.push(obj);
          }
        }
        if (type === 'all') {
          if (
            item[this.list as string] &&
            item[this.list as string].length > 0
          ) {
            const list = this.fuzzyQueryTree(
              item[this.list as string],
              value,
              type,
            );
            const obj = { ...item, [this.list as string]: list };
            if (list && list.length > 0) {
              result.push(obj);
            }
          }
        }
      }
    });
    return result;
  };

  /**
   * 树节点添加属性
   * @param tree
   * @returns
   */
  addAttrToNodes = (tree: any[], key?: string, value?: any) => {
    tree.forEach(item => {
      item.key = value;
      if (
        item[this.children as string] &&
        item[this.children as string].length > 0
      ) {
        this.addAttrToNodes(item[this.children as string]);
      }
    });
    return tree;
  };

  /**
   * 树节点删除属性
   * @param tree
   * @returns
   */
  removeAttrFromNode = (tree: any[], deleteKey: string) => {
    tree.forEach(item => {
      delete item[deleteKey];
      if (
        item[this.children as string] &&
        item[this.children as string].length > 0
      ) {
        this.removeAttrFromNode(item[this.children as string], deleteKey);
      }
    });
    return tree;
  };

  /**
   * 删除树中的空children
   * @param tree
   * @returns
   */
  removeEmptyChildren = (tree: any[]) => {
    tree.forEach(item => {
      if (item?.[this.list as string]) {
        if (
          (item[this.list as string][this.children as string] &&
            item[this.list as string][this.children as string].length === 0) ||
          item[this.list as string][this.children as string] == undefined
        ) {
          item[this.list as string].forEach(
            (item: any) => delete item[this.children as string],
          );
        } else if (
          item[this.list as string][this.children as string] &&
          item[this.list as string][this.children as string].length > 0
        ) {
          this.removeEmptyChildren(
            item[this.list as string][this.children as string],
          );
        }
      }
      if (
        (item[this.children as string] &&
          item[this.children as string].length === 0) ||
        item[this.children as string] == undefined
      ) {
        delete item[this.children as string];
      } else if (
        item[this.children as string] &&
        item[this.children as string].length > 0
      ) {
        this.removeEmptyChildren(item[this.children as string]);
      }
    });
    return tree;
  };

  /**
   * 获取树中所有的叶子节点
   * @param tree
   * @returns
   */
  getAllLeaf = (tree: any[]) => {
    const that = this;
    const result: any[] = [];
    const getLeaf = (tree: any[]) => {
      tree.forEach(item => {
        if (!item[that.children as string]) {
          result.push(...item[that.list as string]);
        } else {
          getLeaf(item[that.children as string]);
        }
      });
    };
    getLeaf(tree);
    return result;
  };
}

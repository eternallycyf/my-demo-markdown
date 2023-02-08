---
order: 1
group:
  path: /npm
  title: npm package
  order: 1
---

## TableHover

- index.less

```less
@import './var.less';

/* th单元格 */
.slashWrap {
  position: relative;
  box-sizing: border-box;
  width: 150px;
  height: 80px;
}

/* 斜线 */
.slash {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  /* 斜边边长 */
  /* Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) */
  /* Math.sqrt(Math.pow(150, 2) + Math.pow(80, 2)) = 170 */
  width: 170px;
  height: 1px;
  background-color: #ccc;
  /* 旋转角度计算公式 */
  /*  Math.atan(height / width) * 180 / Math.PI  */
  /*  Math.atan(80 / 150) * 180 / Math.PI  = 28.072486935852954 */
  transform: rotate(28.072486935852954deg);
  transform-origin: top left;
}

/* 左下角文字 */
.left {
  position: absolute;
  bottom: 15px;
  /* 左下角 left:0; bottom: 0; */
  left: 15px;
}

/* 右上角文字 */
.right {
  position: absolute;
  top: 15px;
  /* 右上角 right:0; top: 0; */
  right: 15px;
}

// .row {
//   &:hover>td {
//     background-color: @hoverColor !important;
//   }
// }

:global {
  .ant-table-thead {
    tr:nth-child(1) {
      th:nth-child(1) {
        padding: 0 !important;
      }
    }
  }
}
```

## index.tsx

```tsx | pure
import { CommonSearch, CommonTable, CustomForm, Page } from '@/components';
import BaseComponent from '@/components/BaseComponent';
import { formatValuesType } from '@/components/CustomForm';
import projectConfig from '@/config/projectConfig';
import { ICommonTable, ModalType } from '@/typings';
import { formatParams } from '@/utils/util';
import { Form, Input, Segmented, Tooltip } from 'antd';
import { FormInstance } from 'antd/lib/form/Form';
import React, { Component } from 'react';
import styles from './index.less';
import valClassNames from './var.less';
import { history } from '@umijs/max';
import { History } from 'history';
import { onExportMultiHeaderExcel } from '@/components/FileExportExcel/multiHeader';
const { apiPrefixMock } = projectConfig;

const city_dict = {
  北京: 'bg',
  上海: 'sh',
  深圳: 'sz',
  整体: 'zt',
};

const level_dict = {
  q1: 'q1',
  q2: 'q2',
  q3: 'q3',
  q4: 'q4',
  year: 'year',
};

const baseColumns = [
  {
    title: (
      <div className={styles.slashWrap}>
        <span className={styles.left}>客户分级</span>
        <span className={styles.slash}></span>
        <span className={styles.right}>区域</span>
      </div>
    ),
    dataIndex: 'name',
    key: 'name',
    width: 150,
    fixed: 'left',
    align: 'center',
    elipsis: true,
    onCell: (record: any, rowIndex: number) => {
      return {
        ['data-row']: rowIndex,
        ['data-col']: 0,
        ['data-val']: record.name,
      };
    },
  },
];

const otherColumns = Object.entries(city_dict).map(
  ([dataIndex, prefix], index) => {
    return {
      title: dataIndex,
      width: 300,
      children: Object.entries(level_dict).map(([key, value], ind) => {
        return {
          title: key,
          dataIndex: prefix + value,
          key: value,
          width: 60,
          align: 'center',
          onCell: (record: any, rowIndex: number) => {
            const isShow = Math.random() * 5 > 2.5;
            return {
              ['data-row']: rowIndex,
              ['data-col']: index * 5 + ind + 1,
              ['data-val']: record[prefix + value],
              style: isShow ? { background: '#FFEFDB', color: '#FA6A0A' } : {},
            };
          },
          render: (text: any, record: any, index: number) => {
            return (
              <Tooltip
                overlayStyle={{
                  maxWidth: '500px',
                }}
                title={
                  <div style={{ display: 'grid', placeItems: 'center' }}>
                    <div>统计的战略客户</div>
                    <div>民生加银基金管理有限公司（1月-4、2月-3、3月-17）</div>
                    <div>民生加银基金管理有限公司（1月-4、2月-3、3月-17）</div>
                    <div>民生加银基金管理有限公司（1月-4、2月-3、3月-17）</div>
                    <div>民生加银基金管理有限公司（1月-4、2月-3、3月-17）</div>
                    <div>民生加银基金管理有限公司（1月-4、2月-3、3月-17）</div>
                    <div>民生加银基金管理有限公司（1月-4、2月-3、3月-17）</div>
                  </div>
                }
              >
                <span>2</span>
              </Tooltip>
            );
          },
        };
      }),
    };
  },
);

const columns = [...baseColumns, ...otherColumns];

interface IProps {}

interface IState {
  searchParams: {
    aaaaaa: number;
    [props: string]: any;
  };
  selectedRows: any[];
  selectedRowKeys: React.Key[];
  expandedKey: string;
  expandedRowKeys: React.Key[];
  hoverObj: any;
}

class Activity extends BaseComponent<IProps, IState> {
  private readonly OtherFormRef = React.createRef<FormInstance>();
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchParams: {
        aaaaaa: 1,
      },
      selectedRows: [],
      selectedRowKeys: [],
      expandedKey: 'activityCode',
      expandedRowKeys: [],
      hoverObj: {},
    };
  }

  componentDidMount() {
    history.listen(({ location }) => {
      console.log(location);
    });
  }

  // 打开活动报名列表页面
  handleOpenRegList = (record: any) => {};

  handleFormatValues: formatValuesType = (values, record, type) => {
    console.log(values, record, type);
    if (type === 'edit_echo') {
      return record;
    }
    return { values };
  };

  render() {
    const {
      searchParams,
      selectedRowKeys,
      selectedRows,
      expandedRowKeys,
      hoverObj,
    } = this.state;
    const tableParams: ICommonTable<any> = {
      columns: columns,
      searchParams: formatParams(searchParams),
      rowKey: 'activityCode',
      fetchMethod: 'get',
      showIndex: false,
      urls: {
        listUrl: `/getActivityList`,
      },
      button: [
        {
          text: '导出',
          onClick: () => {
            onExportMultiHeaderExcel(
              columns,
              this.getDataSource(),
              { left: '客户分级', right: '区域' },
              '客户分级',
            );
          },
        },
      ],
      dataHandler: (data: any) => {
        return data.slice(0, 7);
      },
      dataPath: 'data.list',
      totalPath: 'data.total',
      pagination: false,
      onRow: () => {
        return {
          onClick: (e: any) => {
            this.setState({
              hoverObj: e.target.dataset,
            });
          },
        };
      },
    };

    return (
      <div
        className={`
        ${styles.page}
        ${valClassNames[`hover${Number(hoverObj?.col) + 1}`]}
        ${valClassNames[`rowHover${Number(hoverObj?.row) + 2}`]}
        `}
        onMouseLeave={() => this.setState({ hoverObj: {} })}
      >
        <CommonTable {...tableParams} ref={this.tableRef} />
      </div>
    );
  }
}

export default Activity;
```

### var.less

```tsx | pure
 // 由于 nth-child(var(--xxx)) 不能这样写 只能通过js的形式操作dom 添加style
 // 所以在这里枚举
 @hoverColor: #f5f9ff;
 //  #f5f9ff;
 @rowLength: 20;

 .tdHover1(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(1) {
     background-color: @hoverColor !important;
   }

   .ant-table-thead {
     tr:nth-child(1) {
       th:nth-child(1) {
         background-color: @hoverColor !important;
       }
     }
   }

   .tdHover1(@n, (@i + 1));
 }

 .tdHover2(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(2) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(1) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover2(@n, (@i + 1));
 }

 .tdHover3(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(3) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(2) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover3(@n, (@i + 1));
 }

 .tdHover4(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(4) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(3) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover4(@n, (@i + 1));
 }

 .tdHover5(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(5) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(4) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover5(@n, (@i + 1));
 }

 .tdHover6(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(6) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(5) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover6(@n, (@i + 1));
 }

 .tdHover7(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(7) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(6) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover7(@n, (@i + 1));
 }

 .tdHover8(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(8) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(7) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover8(@n, (@i + 1));
 }

 .tdHover9(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(9) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(8) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover9(@n, (@i + 1));
 }

 .tdHover10(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(10) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(9) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover10(@n, (@i + 1));
 }

 .tdHover11(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(11) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(10) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover11(@n, (@i + 1));
 }

 .tdHover12(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(12) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(11) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover12(@n, (@i + 1));
 }

 .tdHover13(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(13) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(12) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover13(@n, (@i + 1));
 }

 .tdHover14(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(14) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(13) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover14(@n, (@i + 1));
 }

 .tdHover15(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(15) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(14) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover15(@n, (@i + 1));
 }

 .tdHover16(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(16) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(15) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover16(@n, (@i + 1));
 }


 .tdHover17(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(17) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(16) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover17(@n, (@i + 1));
 }

 .tdHover18(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(18) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(17) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover18(@n, (@i + 1));
 }

 .tdHover19(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(19) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(18) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover19(@n, (@i + 1));
 }

 .tdHover20(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(20) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(19) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover20(@n, (@i + 1));
 }

 .tdHover21(@n, @i: 1) when (@i =< @n) {
   .ant-table-tbody tr:nth-child(@{i})>td:nth-child(21) {
     background-color: @hoverColor !important;
   }

   tr:nth-child(2) {
     th:nth-child(20) {
       background-color: @hoverColor !important;
     }
   }

   .tdHover21(@n, (@i + 1));
 }

 .rowHover1 {
   :global {
     .ant-table-tbody tr:nth-child(1)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover2 {
   :global {
     .ant-table-tbody tr:nth-child(2)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover3 {
   :global {
     .ant-table-tbody tr:nth-child(3)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover4 {
   :global {
     .ant-table-tbody tr:nth-child(4)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover5 {
   :global {
     .ant-table-tbody tr:nth-child(5)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover6 {
   :global {
     .ant-table-tbody tr:nth-child(6)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover7 {
   :global {
     .ant-table-tbody tr:nth-child(7)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover8 {
   :global {
     .ant-table-tbody tr:nth-child(8)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover9 {
   :global {
     .ant-table-tbody tr:nth-child(9)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover10 {
   :global {
     .ant-table-tbody tr:nth-child(10)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover11 {
   :global {
     .ant-table-tbody tr:nth-child(11)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover12 {
   :global {
     .ant-table-tbody tr:nth-child(12)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover13 {
   :global {
     .ant-table-tbody tr:nth-child(13)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover14 {
   :global {
     .ant-table-tbody tr:nth-child(14)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover15 {
   :global {
     .ant-table-tbody tr:nth-child(15)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover16 {
   :global {
     .ant-table-tbody tr:nth-child(15)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover17 {
   :global {
     .ant-table-tbody tr:nth-child(15)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover18 {
   :global {
     .ant-table-tbody tr:nth-child(15)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover19 {
   :global {
     .ant-table-tbody tr:nth-child(15)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover20 {
   :global {
     .ant-table-tbody tr:nth-child(15)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .rowHover21 {
   :global {
     .ant-table-tbody tr:nth-child(15)>td {
       background-color: @hoverColor !important;
     }
   }
 }

 .hover1 {
   :global {
     .tdHover1(@rowLength);
   }
 }

 .hover2 {
   :global {
     .tdHover2(@rowLength);
   }
 }

 .hover3 {
   :global {
     .tdHover3(@rowLength)
   }
 }

 .hover4 {
   :global {
     .tdHover4(@rowLength)
   }
 }

 .hover5 {
   :global {
     .tdHover5(@rowLength)
   }
 }

 .hover6 {
   :global {
     .tdHover6(@rowLength)
   }
 }

 .hover7 {
   :global {
     .tdHover7(@rowLength)
   }
 }

 .hover8 {
   :global {
     .tdHover8(@rowLength)
   }
 }

 .hover9 {
   :global {
     .tdHover9(@rowLength)
   }
 }

 .hover10 {
   :global {
     .tdHover10(@rowLength)
   }
 }

 .hover11 {
   :global {
     .tdHover11(@rowLength)
   }
 }

 .hover12 {
   :global {
     .tdHover12(@rowLength)
   }
 }

 .hover13 {
   :global {
     .tdHover13(@rowLength)
   }
 }

 .hover14 {
   :global {
     .tdHover14(@rowLength)
   }
 }

 .hover15 {
   :global {
     .tdHover15(@rowLength)
   }
 }

 .hover16 {
   :global {
     .tdHover16(@rowLength)
   }
 }

 .hover17 {
   :global {
     .tdHover17(@rowLength)
   }
 }

 .hover18 {
   :global {
     .tdHover18(@rowLength)
   }
 }

 .hover19 {
   :global {
     .tdHover19(@rowLength)
   }
 }

 .hover20 {
   :global {
     .tdHover20(@rowLength)
   }
 }

 .hover21 {
   :global {
     .tdHover21(@rowLength)
   }
 }
```

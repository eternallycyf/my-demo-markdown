export const columns = [
  {
    title: 'name',
    dataIndex: 'name',
  },
];

export const LIST = 'list';
export const PID = 'pid';
export const ID = 'id';
export const NAME = 'name';
export const CHILDREN = 'children';

export const TITLE_MAX_LENGTH = 10;
export const BREADCRUMB_MAX_LENGTH = 4;

export const dataSource = [
  {
    id: -1,
    pid: 0,
    name: '深圳总部',
    children: [
      {
        id: 1,
        pid: -1,
        name: '科技部',
        children: [
          {
            id: 11,
            pid: 1,
            name: '科技A部',
            children: [],
          },
          {
            id: 12,
            pid: 1,
            name: '科技B部',
            children: [],
            list: [
              {
                id: 121,
                pid: 12,
                name: '张振宇',
                children: [],
              },
              {
                id: 122,
                pid: 12,
                name: '李峰',
              },
            ],
          },
          {
            id: 13,
            pid: 1,
            name: '人事部',
            children: [],
            list: [
              {
                id: 131,
                pid: 13,
                name: '张',
              },
              {
                id: 132,
                pid: 13,
                name: '李',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        pid: -1,
        name: '开发部',
        children: [
          {
            id: 21,
            pid: 2,
            name: '开发A部',
            children: [],
          },
          {
            id: 22,
            pid: 2,
            name: '开发B部',
            children: [],
            list: [
              {
                id: 221,
                pid: 22,
                name: '黄璀璨',
                children: [],
              },
              {
                id: 222,
                pid: 22,
                name: '吴佩孚',
              },
            ],
          },
        ],
      },
    ],
  },
];

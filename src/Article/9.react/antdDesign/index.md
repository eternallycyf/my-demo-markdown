---
order: 9
nav:
  title: Article
  path: /article
---

# Ant Design

## 准备阶段

## bug

```js
# form
当与modal结合的时候 initValus数据会异步
需要使用form.setValues 设置数据

```

## 组件

### 通用

#### button

```  js
 <Button
    # 基础属性
    // 样式
    type={'default |primary | dashed | text | link'}
    // 形状
    shape={'default|circle|round'}
    // 大小
    size={'large|middle|small'}
    // 特殊样式
    ghost    按钮背景透明
    danger   红色外观
    disabled 禁用效果
    block    宽度为父宽度
    // 设置图标
    icon={<xxx/>}

    # 其他属性
    // loading 效果控制
    loading={boolean}
  />

 # 组合按钮
// 点击就弹出一个组件
<Dropdown.Button overlay={组件名} />
 # bug  移除按钮文件之间的空格
import { Button, ConfigProvider } from 'antd';
 <ConfigProvider autoInsertSpaceInButton = { false }>
       <Button type="primary">
              空格
      </Button>
</ConfigProvider>
```

#### icon

```js
# 默认图标
import { xxx } from '@ant-design/icons';
# 自定义图标
import Icon from '@ant-design/icons';
<Icon component={xxx} />
# 使用 iconfont
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
<IconFont type="icon-tuichu" />
# 三类图标名字区别
xxxOutlined
Fuiled
TwoTone

# spin                    旋转动画
# rotate={180}            旋转角度
# twoToneColor="#eb2f96"  双色图标设置颜色
```

#### 排版

```js
```

### 布局

#### 分割线

```js
<Divider >
   // 是否虚线
   dashed
   // 文字是否为普通正文样式
   plain
   // 分割线位置
   orientation={'left|right'}
   type={'horizontal|vertical'}
/>
```

#### Grid

```js
# row
<Row
  // 间隔
  gutter={16}
  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
  gutter={[16, 24]}   水平间距 垂直间距
  // flex布局
  justify='start|center|spacce-between....'
  // 子元素对齐方式
  align='top|middle|bottom'
  // 换行
  wrap={false}

/>
# col
<Col
  // 划分块数 共24份
  span={6}
  // 左右偏移 向右偏移6
  offset={6}
  // 向左
  pull={18}
  // 向右
  push={2}
/>
<Row>

# 手动指定栅格宽度
默认一格为 8.33333%

style="width: 12.499999995%;
    flex: 0 0 12.499%;max-width: 12.499%;">
```

#### Layout

```js
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

<Layout>
  <Header>Header</Header>
  <Content>Content</Content>
  <Footer>Footer</Footer>
  <Layout>
    <Sider>Sider</Sider>
    <Content>Content</Content>
  </Layout>
</Layout>;
```

#### Space

```js
// 设置组件之间的间距
<Space
  size="small|middle|large|number"
  // 自定义间距大小
  size={[8, 16]}
  align="start|end|center|baseline"
  direction="vertical|horizontal"
  wrap
  // 相邻组件分隔符
  split={<Divider type="vertical" />}
/>
```

### 导航

#### Affix 固钉

```js
<Affix
  // 粘性定位
  offsetTop={10}
  offsetBottom={10}
  // 滚动元素对象
  target={() => dom}
  onChange
/>
```

#### Breadcrumb

```js
<Breadcrumb
  // 总体自定义分隔符
  separator=">"
>
  <Breadcrumb.Item>
    <a href="">Application Center</a>
  </Breadcrumb.Item>
  // 子项 自定义分隔符
  <Breadcrumb.Separator>:</Breadcrumb.Separator>
</Breadcrumb>
```

#### Dropdown

```js
<Dropdown
  overlay={封装的Menu组件}
  // 弹框显示一个箭头
  arrow
  // 菜单弹出位置
  placement="bottomLeft"
  // 触发方式 contextMenu 鼠标右键触发
  trigger={['click' | 'hover|contextMenu']}
>
  <Button>这是按钮</Button>
</Dropdown>
```

#### Menu

```js
// SubMenu 对 menuitem 进行分组
<Menu
   mode='horizontal|vertical|inline'
   theme="dark|light"
   // 控制整体展开 还是 只显示一个图标
   inlineCollapsed={true | false}
   inlineIndent={number} 缩进的宽度
   // 默认展开项 选中项
   defaultSelectedKeys={['MenuItemKeys']}
   defaultOpenKeys={['SubMenuKeys']}
   // 当前展开的 SubMenu 菜单 keys 数组
   openKeys={['SubMenuKeys']}
   // 展开事件 可以通过这个控制 同时只显示一个子菜单
   onOpenChange={(openKeys)=>string[]}
>
  <SubMenu
    key='SubMenu'
    icon
    title
  >
    // ItemGroup 会在侧边栏上显示一个标题 没有其他效果
    <ItemGroup
      key=''
      title=''
    >
       <MenuItem
          key=''
          icon
       >
          这是子菜单
       </MenuItem>
    </ItemGroup>
  </SubMenu>
</Menu>
```

#### PageHeader

```

```

#### Pagination

```js
# 逻辑
当前页面 一页放几条数据 总共多少数据  当前页码
 pageSize total current
当点击的时候 将点击的页码切换
通过当前页面 发起网络请求 覆盖数据
#
<Pagination
  pageSize={每页条数}
  total={数据总数}
  current={当前页数}
  // 按钮控制 一页显示多少条、
  pageSizeOptions=[]
  onChange={(page,pageSize)=> }
  showTotal: (total) => `共 ${total} 条数据`,
  defaultPageSize
  defaultCurrent
/>

# 页码重置问题
    https://stackoverflow.com/questions/69638994/how-to-reset-the-paginations-current-page-when-pagesize-changes-in-ant-design
```

#### Steps

```js
<Steps
  // 控制高亮位置
  current={1}
  size="small"
>
  <Step title subTitle description status="finish|process|wait" icon></Step>
</Steps>
```

### 数据录入

#### AutoComplete

```js
#
 <AutoComplete
   placeholder
   style

   // 数据源
   options
   //  当前选择条目
   value

   onSelect
   onSearch
   onChange
   showSearch={{ filter }}
 />
	filter(inputValue, path) {
			return path.some(option => option.name.indexOf(inputValue) > -1);
		},

```

#### DatePicker

```js
import moment from 'moment'
// 时间选择器
import { DatePicker } from 'antd';
// 时间范围选择器
const { RangePicker } = DatePicker;
// 中文需要的包
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

<RangePicker
## 基础配置
  // 禁用组件
  disabled={[false,true]}
  // 页脚内容
  renderExtraFooter={() => 'extra footer'}
  // 无边框
  bordered={false}
  size={'large|miaddle|small'}
  // 中文 需要引入 moment中文 和 时间选择器中文 的包
  locale={locale}

## 具体时间配置
  // 当是范围选择器的时候 必须开启这个 配合 Onchange
  value={""}
  // 点击后 限制时间类型
  picker="year|quarter|month|week|date|time"
  // 点击后开启具体 时分秒选择器
  showTime={{
      format: "hh[时]mm[分]ss[秒]",
      defaultValue:[
            // 设置时分秒默认值 不选择时分秒就是默认的
            moment('01:00:00', 'HH:mm:ss'),
            moment('11:59:59', 'HH:mm:ss')
          ]
     }}
  // 默认一点击就显示的时间范围 不写就从最新时间开始
  搭配 showTime 使用
  defaultPickerValue={moment("2021-05-01")}
  // 不点击时显示的时间格式过滤
  format="YYYY/MM/DD HH:mm:ss"
  // 自定义快捷时间按钮设置 showToday={false}
  ranges={{
     Today: [moment(), moment()],
     '当月':[
         moment().startOf('month'),
         moment().endOf('month')
        ]
     }}
  // 自定义每个日期的外观
  dateRender={current => {
      const style = {};
      if (current.date() === 1) {
            style.border = '1px solid #1890ff';
            style.borderRadius = '50%';
      }
      return (
         <div className="ant-picker-cell-inner" style={style}>
              {current.date()}
         </div>
          )
   }}
  // 禁用限制 时间   具体见下面的 demo
  disabledDate={disabledDate}

## 事件
/* 时间改变的事件 参数是改变的时间
  当为 datepicker 时候 不能取消同一时间 需要设置 value={''}才行
*/
  onChange={(date:moment,dateString:string)=>}
  // 待选日期变化回调 用于时间范围限制7天时间
  onCalendarChange={val => setDates((val))}
/>
```

##### 禁用年月日时分秒

```js
## 禁用 年月日 时分秒 => 限制时间选择范围、
// 需要开启 showTime 来限制时分秒
<RangePicker
    defaultPickerValue={moment("2021-05-01")}
    showTime={{format: "hh时mm分ss秒"}}
    // 限制年月日
    disabledDate={disabledDate}
    // 限制时分秒
    disabledTime={disabledTime}
/>

 const disabledDate = (currentDate) => {
    const start = moment("2021-05-01")
    const end = moment("2021-06-01")
// 将时间限制在 只能选择2021年 5到6月 的时间
    return currentDate && currentDate < start
           || currentDate > end
// 将时间限制在 只能选择 除了 202105-202106 之外任意时间
    return currentDate && !(currentDate < start
           || currentDate > end)
 // 时间最早是8天前
   return current && current < moment().subtract(8, 'day');
  }

 // 工具函数 拿到范围内的数组
 function range(start, end) {const result = [];
 for (let i = start; i < end; i++) { result.push(i);
 }return result;}
const disabledTime = () => {
  return {
    // 只能选择 4-24  小时
    disabledHours: () => range(0, 24).splice(4, 20),
    // 只能选择 00-29 分钟
    disabledMinutes: () => range(30, 60),
    // 只能选择 除了55 56 秒的 秒数
    disabledSeconds: () => [55, 56],
    }
  }
```

##### 禁用 7 天范围

```js
# 禁用7天范围
<RangePicker
    defaultPickerValue={moment("2021-05-01")}
    showTime={{format: "hh时mm分ss秒"}}
    disabledDate={disabledDate}
    onCalendarChange={val => setDates((val))}
/>
   const [dates, setDates] = useState([]);

   const disabledDate = (current) => {
// 限制 7天以内
    if (!dates || dates.length === 0) {return false;}
const tooLate = dates[0] && current.diff(dates[0],'days') > 7;
const tooEarly=dates[1] && dates[1].diff(current, 'days') > 7;
 return tooEarly || tooLate;
// 2021-05-01至2021-06-01 && 7天以内
     if (!dates || dates.length === 0) {return false;}
     const start = moment("2021-05-01")
     const end = moment("2021-06-01")
const tooLate=dates[0] && current.diff(dates[0], 'days') > 7;
const tooEarly=dates[1]&&(dates[1]).diff(current, 'days') > 7;
     return  current && (tooEarly || tooLate)
             || current < start || current > end
  };
```

##### 禁用年份

- 需要升级最新版
- "ant-design-vue": "^1.7.8",

```js
<DatePicker format="YYYY" disabledDate={disabledYear} />;

function disabledYear(current) {
  return current.year() === 2021; // disabling 2021
  // return current.year() !== 2021; // disabling everything besides 2021
  // return current.year() !== (new Date).getFullYear(); // disabling everything besides current year
  // return current.year() > 2021; // disabling everything further than 2021
  // return current.year() < 2021; // disabling everything in the past before 2021
  // return [2018, 2019].includes(current.year()); // disabling 2018 and 2019
}
```

##### demo

```js
import { useState } from 'react';
import { DatePicker } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment';

const { RangePicker } = DatePicker;

const Test = () => {
  const [dates, setDates] = useState([]);

  // 1.1 将时间限制在 只能选择2021年 5到6月 的时间
  // const disabledDate = (currentDate) => {
  //   const start = moment("2021-05-01")
  //   const end = moment("2021-06-01")
  //   return currentDate && currentDate < start
  //     || currentDate > end
  // }

  // 1.2 将时间限制在 只能选择 除了 202105-202106 之外任意时间
  // const disabledDate = (currentDate) => {
  //   const start = moment("2021-05-01")
  //   const end = moment("2021-06-01")
  //   return currentDate && !(currentDate < start
  //     || currentDate > end)
  // }

  // 1.3 限制7天之内
  // const disabledDate = (current) => {
  //   if (!dates || dates.length === 0) { return false; }
  //   const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
  //   const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
  //   return tooEarly || tooLate;
  // };

  // 1.4 限制 2021-05-01至2021-06-01 && 7天以内
  const disabledDate = current => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const start = moment('2021-05-01');
    const end = moment('2021-06-01');
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
    return (
      (current && (tooEarly || tooLate)) || current < start || current > end
    );
  };

  // 工具函数 拿到范围内的数组
  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  // 2.1 限制时分秒
  const disabledTime = () => {
    return {
      // 只能选择 4-24  小时
      disabledHours: () => range(0, 24).splice(4, 20),
      // 只能选择 00-29 分钟
      disabledMinutes: () => range(30, 60),
      // 只能选择 除了55 56 秒的 秒数
      disabledSeconds: () => [55, 56],
    };
  };
  return (
    <>
      <RangePicker
        // disabled={[false, true]}
        renderExtraFooter={() => '这是页脚'}
        bordered={false}
        size={'large'}
        locale={locale}
        // picker="year|quarter|month|week|date|time"
        showTime={{
          format: 'hh时mm分ss秒',
          defaultValue: [
            moment('01:00:00', 'HH:mm:ss'),
            moment('11:59:59', 'HH:mm:ss'),
          ],
        }}
        defaultPickerValue={moment('2021-05-01')}
        format="YYYY/MM/DD HH:mm:ss"
        ranges={{
          Today: [moment(), moment()],
          当月: [moment().startOf('month'), moment().endOf('month')],
        }}
        dateRender={current => {
          const style = {};
          if (current.date() === 1) {
            style.border = '1px solid #1890ff';
            style.borderRadius = '50%';
          }
          return (
            <div className="ant-picker-cell-inner" style={style}>
              {current.date()}
            </div>
          );
        }}
        disabledDate={disabledDate}
        // disabledTime={disabledTime}
        onCalendarChange={val => setDates(val)}
        onChange={(date, dateString) => console.log(date, dateString)}
      />
    </>
  );
};
export default Test;
```

##### 选中多个日期

```js
#
import React, { useState } from "react";
import { DatePicker, Button } from "antd";
import moment from "moment";
import styles from './index.less';

const MultipleDatePicker = () => {
  // 选中的日期 timestamp[]
  const [selectedDate, setSelectedDate] = useState([])

  // 日期发生变化时 重复去重 没有则添加
  const onValueChange = (date) => {
    const newDate = moment(date).startOf("day").valueOf()
    if (selectedDate.includes(newDate)) {
      setSelectedDate([...selectedDate.filter(item => item !== newDate)])
    } else {
      setSelectedDate([...selectedDate, newDate])
    }
  };

  // 渲染选中日期外观
  const dateRender = (currentDate) => {
    const isSelected = selectedDate.includes(moment(currentDate).startOf("day").valueOf())
    let selectStyle = isSelected ?
      {
        position: 'relative',
        zIndex: 2,
        display: 'inlineBlock',
        width: "24px",
        height: "22px",
        lineHeight: "22px",
        backgroundColor: "#1890ff",
        color: "#fff",
        margin: "auto",
        borderRadius: "2px",
        transition: "background 0.3s, border 0.3s"
      }
      : {}
    return (<div style={selectStyle} > {currentDate.date()}  </div >)
  }

  return (
    <>
      <div className={styles.multipleDatePicker}>
        <DatePicker
          open
          dateRender={dateRender}
          onChange={onValueChange}
          showToday={false}
          value={""}
        />
        <Button type='primary' onClick={() => console.log(selectedDate)}>确定</Button>
      </div>
    </>
  )
}
export default MultipleDatePicker
#
.multipleDatePicker {
  :global {
    .ant-picker-input {
      display: none !important;
    }
    .ant-picker {
      border: none;
      padding: 0;
    }
  }
}
# 配合 select
https://codesandbox.io/s/antd-reproduction-template-forked-1mos9?file=/index.js
```

##### 禁用到某个确切时间

###### class

```js
import moment from 'moment';
export default class ToolClass {
  protected _range = (start: number, end: number) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  disabledDate = (startTime: moment.MomentInput, current: moment.MomentInput) => {
    if (startTime == undefined) {
      return false;
    }
    if (current) {
      return current < moment(startTime).startOf('days')
    }
    return false
  };
  disabledTime = (StartFormMoment: moment.MomentInput, CurrentFormMoment: moment.MomentInput) => {
    let startHours = moment(StartFormMoment).hour()
    let startMinutes = moment(StartFormMoment).minute()
    let startSeconds = moment(StartFormMoment).second()
    let startDate = moment(StartFormMoment).date()

    let currentHours = moment(CurrentFormMoment).hour()
    let currentMinutes = moment(CurrentFormMoment).minute()
    let currentDate = moment(CurrentFormMoment).date()
    if (CurrentFormMoment == undefined) {
      return {};
    }
    if (CurrentFormMoment && currentDate === startDate) {
      if (currentHours === startHours) {
        if (currentMinutes === startMinutes) {
          return {
            disabledHours: () => this._range(0, startHours),
            disabledMinutes: (selectedHour: number) => selectedHour >= startHours ? this._range(0, startMinutes) : [],
            disabledSeconds: (selectedHour: number, selectedMinute: number) =>
              selectedHour >= startHours && selectedMinute >= startMinutes
                ? this._range(0, startSeconds)
                : []
          };
        }
        return {
          disabledHours: () => this._range(0, startHours),
          disabledMinutes: (selectedHour: any) => selectedHour >= startHours ? this._range(0, startMinutes) : [],
          disabledSeconds: () => []
        }
      } else {
        return {
          disabledHours: () => this._range(0, startHours),
          disabledMinutes: () => [],
          disabledSeconds: () => []
        };
      }
    }
    return {}
  }
}
```

###### demo1

```js
import moment from 'moment';
import { Form, DatePicker } from 'antd';
import ToolClass from '../toolClass';
const Picker1 = () => {
  const [form] = Form.useForm();
  const transformFn = new ToolClass();
  const disabledTime = (CurrentFormMoment: moment.MomentInput) => {
    const StartTime = form.getFieldValue('startTime');
    return transformFn.disabledTime(StartTime, CurrentFormMoment);
  };
  const disabledDate = (CurrentFormMoment: moment.MomentInput) => {
    const StartTime = form.getFieldValue('startTime');
    return transformFn.disabledDate(StartTime, CurrentFormMoment);
  };
  return (
    <>
      <h2>Picker1</h2>
      <Form form={form}>
        <Form.Item name="startTime">
          <DatePicker
            style={{ minWidth: '100%' }}
            showToday={false}
            showTime
            showNow={false}
            onChange={() => form.setFieldsValue({ endTime: null })}
          />
        </Form.Item>
        <Form.Item name="endTime">
          <DatePicker
            style={{ minWidth: '100%' }}
            showToday={false}
            showTime={{
              hideDisabledOptions: true,
            }}
            showNow={false}
            disabledDate={disabledDate}
            disabledTime={disabledTime}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default Picker1;
```

###### demo2

```js
import { useState } from 'react';
import moment from 'moment';
import { Form, DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import ToolClass from '../toolClass';
const Picker2 = () => {
  const [form] = Form.useForm();
  const transformFn = new ToolClass();
  const [disabledTimeDates1, setDisabledTimeDates1] = useState([]);
  const [disabledTimeDates2, setDisabledTimeDates2] = useState([]);
  // 将表单分为 startTime1 startTime2  endTime1 endTime2
  const disabledRangeTime1 = (
    CurrentFormMoment: moment.MomentInput,
    type: string,
  ) => {
    let StartTime1 = disabledTimeDates1?.[0];
    if (type === 'end') {
      return transformFn.disabledTime(StartTime1, CurrentFormMoment);
    }
    return {};
  };
  const disabledRangeTime2 = (
    CurrentFormMoment: moment.MomentInput,
    type: string,
  ) => {
    // startTime1
    let StartTime1 = form.getFieldValue('startTime')?.[0];
    // endTime1
    let endTime1 = disabledTimeDates2?.[0];
    if (type === 'start') {
      return transformFn.disabledTime(StartTime1, CurrentFormMoment);
    }
    if (type === 'end') {
      return transformFn.disabledTime(endTime1, CurrentFormMoment);
    }
    return {};
  };
  const disabledRangeDate = (CurrentFormMoment: moment.MomentInput) => {
    let StartTime = form.getFieldValue('startTime')?.[0];
    return transformFn.disabledDate(StartTime, CurrentFormMoment);
  };
  return (
    <>
      <h2>Picker2</h2>
      <Form form={form}>
        <Form.Item name="startTime">
          <RangePicker
            onChange={() => form.setFieldsValue({ endTime: null })}
            onCalendarChange={(val: any) => setDisabledTimeDates1(val)}
            disabledTime={disabledRangeTime1}
            showTime={{
              hideDisabledOptions: true,
            }}
          />
        </Form.Item>
        <Form.Item name="endTime">
          <RangePicker
            onCalendarChange={(val: any) => setDisabledTimeDates2(val)}
            disabledDate={disabledRangeDate}
            disabledTime={disabledRangeTime2}
            showTime={{
              hideDisabledOptions: true,
            }}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default Picker2;
```

##### 动态点击时候的默认时间

```js
当点击时间选择框会默认 选择当前的时间。但是禁用关系和它冲突的时候就需要定义defaultValue
defaultValue 只会渲染一次 因此只能写一个固定值值
如果想传入变量 需要对该组件进行重新渲染
解决方法: 直接利用 Form.Item shouldUpdate 方法进行 动态条件渲染
在Form.Item内部通过注入的 getFieldValue 方法来拿到最新的值
<Form.Item shouldUpdate={(pre, cru) => cru.xxx != pre.xxx }>
{({ getFieldValue }) => {
  return (
    <Form.Item name='xxx'>
      <DatePicker
        showTime={{
          defaultValue: moment(
            getFieldValue('xxx') == null
              ? moment().add(2, 'hours').format('HH:00:00')
              : moment(getFieldValue('xxx')).add(1, 'hours').format('HH:00:00'),
            'HH:mm:ss')
        }}
      />
    </Form.Item>
  )
}
</Form.Item>
```

#### Form

##### 组件结构

```js
<Form>
  <Form.Item name=''>
    <Input/>
  </Form.Item>
  <span>辅助信息<span/>

  <Form.Item>
    <Form.Item name=''>
      <InputNumber/>
    </Form.Item>
  </Form.Item>

  <Form.Item
    name=''
    valuePropName="fileList"
    getValueFromEvent={(e)=>{
      if(Array.isArray(e))  return e
      return e && e.filelist
    }}
  >
      <Upload/>
  </Form.Item>

</Form>
```

###### 不显示 label

```js
label=" " colon={false}
```

##### Form

###### props

```js
const [form] = Form.useForm();
<Form
# 常用配置
  // form 的对象 拥有很多方法
  form={form}
  // 左侧表单文字的 栅格布局
  labelCol={{ span:8,offset: 4 }}
  // 右侧表单的 栅格布局
  wrapperCol={{ span:8 }}
  // 统一设置内部所有表单的 size
  size={"large"|"default"|"large"}
  /* 表单默认值 注意如果有异步重新渲染的情况
    请使用 form.setFieldsValue({Form.item.name: xxx})
  */
  initialValues={{ Form.item.name: xxx }}

# 可能用到的配置
  // 校验失败自动滚动到第一个错误字段
  scrollToFirstError
  // 当字段值被删除时  保留字段
  preserve={false}


# 使用很少的配置
  name='xxx'
  layout={"horizontal"|"vertical"|"inline"}
  // 手动控制可选和必选样式的切换
  requiredMark='optional|true|false'
  /* 自定义校验模板
  const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
  };*/
  validateMessages={validateMessages}

# 事件
  onFinish={value=> {} }
  onFinishFailed={errorValue=> {} }
  // 某个表单更新就触发
  onValuesChange={(changeValue,allValues)=> {} }
>
<Form>

# 其他 label右对齐
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 },
  },
};
{...formItemLayout}
#
 labelCol: {
    flex: "0 0 100px"
  },
```

###### API

```js
// 手动设置表单的值
 form.setFieldsValue({
      form.item.name : 'xxx',
 })
// 重置表单
 form.resetFields();
// 获取表单的值 不写参数就是 获取所有的表单
 form.getFieldValue()
 form.getFieldValue(form.item.name)
// 获取实例
 form.getFieldInstance('formItemName')
// 自定义校验
 form.validateFields()
   .then(values=>{
     success
   })
   .catch(err=>console.log(err))

```

##### Form.Item

###### 静态表单

```js
<Form.Item
# 常用配置
// 隐藏冒号
  colon={false}
// 表单左边的文字 例如: username
  label={'username'}
// 用于双向绑定数据 必须
  name={'username'}
// 添加一个 * 符号的必选图标
  required
/* 特殊表单需要设置这个属性以及 getValueFromEvent 例如:
   如果是 upload valuePropName="filelist"
   如果是 switch valuePropName="checked"
*/
  valuePropName="fileList"
// upload 表单需要这个属性 否则无法上传
  getValueFromEvent={(e)=>{
     if(Array.isArray(e))  return e
     return e && e.filelist
  }}
// 校验规则
  rules={[
    {
      required: true,
      message: '',
      pattern: /^[3]{1}/,
      max: 5,
      min: 3,
      validateTrigger: "onChange",
      // 校验不再阻塞表单提交
      warningOnly: true,
      // 自定义校验 需要以 promise 形式返回
      validator: (usernameFormRules,value)=>{
        if (value.length > 5) {
        return Promise.reject(new Error('不能大于5个字符'))
        }
        return Promise.resolve("格式正确")
      }
    }
  ]}
# 可能用到的配置
  // 关闭表单栅格 自定义布局
  noStyle
  // 错误提示信息 不写会自动生成
  help={ReactNode}
  // 添加反馈图标 根据 validateStatus 生成
  hasFeedback
  // 校验状态
  validateStatus={'success'|'warning'|'eror'|'validating'}
  // 指定的表单值变化了 他就更新
  dependencies={['Form.Item.name']}

# 使用很少的配置
  // 可选提示信息
  tooltip={{title:'xxx',icon:</> }}
>

<Form.Item>
```

###### 动态表单

```js
<Form.Item
   shouldUpdate={ (prevValues,curValues)=>
   prevValues.表单name !== curValues.表单name }
>
  { ({getFieldValue}) =>
    // 如果某个表单值为张三 就动态渲染这个新的表单
      getFieldValue('Form.Item.name') === 'zhangsan' ? (
          <Form.Item .../>
        ) : null
  }
</Form.Item>
```

##### Form.List

```js
/*
自定义动态表单name属性
当定义了  name={[field.name,'名字后缀']}
        fieldKey={[field.fieldKey,'名字后缀']}
动态表单的name就变成了
        name={[field.name,'名字后缀']}
        id: zs_数字_名字后缀   
*/
<Form form={form}>
  <Form.List name="zs" initialValue={[1, 2, 3]}>
    {(fields, { remove, add, move }) => (
      <>
        {fields.map((field, index) => (
          <Form.Item key={field.key} noStyle>
            <Form.Item
              {...field}
              name={[field.name, '名字后缀']}
              fieldKey={[field.fieldKey, '名字后缀']}
            >
              <Input />
            </Form.Item>
            {fields.length > 1 ? (
              <Button onClick={() => remove(field.name)}> 删除 </Button>
            ) : null}
            <Button onClick={() => move(index, index - 1)}>上移</Button>
          </Form.Item>
        ))}
        <Form.Item>
          <Button onClick={() => add(表单的值, 位置)}>添加</Button>
        </Form.Item>
      </>
    )}
  </Form.List>
</Form>
```

##### Form.Provider

```js
<Form.Provider
  // 子表单字段更新时触发
  onFormChange
  // 子表单提交时触发
  onFormFinish={(name, { values, forms }) => {
    if (name === 'form1') {
      const { baseForm } = forms;
      const 变量 = baseForm.getFieldValue('变量') || [];
      baseForm.setFieldsValue({ 变量: [...变量, values] });
    }
  }}
>
  <Form name="baseForm">
    <Form name="form1">...</Form>
    <Form name="form2">...</Form>
  </Form>
</Form.Provider>
```

##### 基本校验 demo

```js
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const Test = () => {
  const [form] = Form.useForm();
  const myValidator = (usernameFormRules, value) => {
    if (value.length > 5) {
      return Promise.reject(new Error('不能大于5个字符'));
    }
    return Promise.resolve('格式正确');
  };
  const formRules = {
    username: [
      {
        required: true,
        message: '用户名是必填项',
        pattern: /^[3]{1}/,
        // max: 5,
        // min: 3,
        // validator: myValidator,
        // validateTrigger: "onChange"
      },
    ],
    password: [
      {
        required: true,
        message: '密码',
      },
    ],
  };

  function successFormSubmit(value) {
    console.log(value);
  }

  function errorFormSubmit(errorValue) {
    console.log(errorValue);
  }

  const ResetForm = () => {
    console.log(form.getFieldsValue());
    form.setFieldsValue({ username: '' });
    form.resetFields();
  };

  return (
    <Form
      form={form}
      wrapperCol={{ span: 5 }}
      onFinish={successFormSubmit}
      onFinishFailed={errorFormSubmit}
    >
      <Form.Item label="username" name="username" rules={formRules.username}>
        <Input />
      </Form.Item>
      <Form.Item label="password" name="password" rules={formRules.password}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">提交</Button>
        <Button htmlType="button" onClick={ResetForm}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Test;
```

##### 动态添加 demo

```js
import React from 'react';
import { Form, Button, Select } from 'antd';
const { Option } = Select;

const Test = () => {
  const [form] = Form.useForm();
  let sights = {
    beijing: ['长城', '故宫'],
    hangzhou: ['西湖', '雷峰塔'],
  };
  return (
    <Form form={form}>
      <Form.Item label="地点" name="place">
        <Select onChange={() => form.setFieldsValue({ att: [] })}>
          <Option value="beijing">北京</Option>
          <Option value="hangzhou">杭州</Option>
        </Select>
      </Form.Item>

      <Form.List name="att">
        {(fields, { remove, add, move }) => (
          <>
            {fields.map(field => (
              <Form.Item key={field.key}>
                <Form.Item
                  noStyle
                  shouldUpdate={(pre, cur) =>
                    pre.place !== cur.place || pre.sights !== cur.place
                  }
                >
                  <Form.Item
                    {...field}
                    label="风景"
                    // 动态增减字段需要这样
                    name={[field.name, 'sights']}
                    fieldKey={[field.fieldKey, 'sights']}
                  >
                    <Select
                      disabled={!form.getFieldValue('place')}
                      style={{ width: 130 }}
                    >
                      {(sights[form.getFieldValue('place')] || []).map(item => (
                        <Option key={item} value={item}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Button onClick={() => remove(field.name)}>删除</Button>
                </Form.Item>
              </Form.Item>
            ))}
            <Button type="dashed" onClick={() => add()} block>
              {' '}
              添加
            </Button>
          </>
        )}
      </Form.List>
      <Button
        type="primary"
        htmlType="submit"
        onClick={() => console.log(form.getFieldValue())}
      >
        Submit
      </Button>
    </Form>
  );
};
export default Test;
```

##### 一行多个表单

```js
/* 注意
1.Form.Item 内只能放置一个表单 不要放置其他内容
  如果要添加文字等 放在 Form.Item组件 的前面或者后面
2.InputNumber 不能直接触发数字自动双向绑定
  需要这样
    <Form.Item>
        <Space align="baseline" size="large">
           <Space align="baseline">
                <Form.Item name="1">
                  <InputNumber min={0}  max={100} />
                </Form.Item>
                <span>%</span>
            </Space>
         </Space>
    </Form.Item>
  或者
  <Form.Item>
    <Form.Item name='xxx'>
      <InputNumber/>
    </Form.Item>
  </Form.Item>
3.主要外层先用 一个Form.Item包裹 这个Form.Item 不绑定name
  只绑定 lable 和 style 等
*/
<Form.Item label="名称一" style={{ marginBottom: 0 }}>

    <Form.Item
        style={{ display: 'inline-flex',
                 width: 'calc(45% - 4px)' }}
    >
        <Input  />
    </Form.Item>

    <Form.Item
        style={{ display: 'inline-flex',
                width: 'calc(55% - 4px)', marginLeft: '8px' }}
        name="name2"
    >
       <Input  />
    </Form.Item>

    <Form.Item label="InputNumber表单" style={{ height: 32 }}>
        <Space align="baseline" size="large">
           <Space align="baseline">
                <Form.Item name='inputNumber1' >
                  <InputNumber
                    className={styles.modalInputNumber}
                    min={0}
                    max={100}
                  />
                </Form.Item>
                <span>%</span>
            </Space>
         </Space>
    </Form.Item>

</Form.Item>
#
4. 直接通过 Row Col 控制布局
<Row>
  <Col span={12}>
    <Form.Item />
  </Col>
    <Col span={12}>
      <Form.Item />
  </Col>
</Row>
5. labelCol wrapperCol 可以指定px宽度
labelCol={{flex:'0 0 100px'}}
wrapperCol={{flex:'0 0 100px'}}
style={{ display: 'inline-flex',  width: 'calc(45% - 4px)' }}
# 使用栅格的
offset push pull
```

##### 拖动排序

```js
npm install react-sortable-hoc --save
npm i array-move
# SortableTable.jsx
import { Table } from 'antd';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import React, { useState, useEffect } from 'react';

const SortableTable = (props) => {
  const { columns = [], data = [], DragHandle, ...restProps } = props;
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    props.getNewDataSource(dataSource);
  }, [dataSource]);

  useEffect(() => {
    setDataSource(data);
  }, []);

  const SortableItem = sortableElement((props) => <tr {...props} />);
  const SortableContainer = sortableContainer((props) => <tbody {...props} />);

  const DraggableContainer = (props) => {
    const onSortEnd = ({ oldIndex, newIndex }) => {
      if (oldIndex !== newIndex) {
        const newData = arrayMoveImmutable(
          [].concat(dataSource),
          oldIndex,
          newIndex,
        ).filter((el) => !!el);
        setDataSource(newData);
      }
    };
    return (
      <SortableContainer
        useDragHandle
        disableAutoscroll
        helperClass="row-dragging"
        onSortEnd={onSortEnd}
        {...props}
      />
    );
  };

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = dataSource.findIndex(
      (x) => x.index === restProps['data-row-key'],
    );
    return <SortableItem index={index} {...restProps} />;
  };

  return (
    <>
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        rowKey="index"
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow,
          },
        }}
        {...restProps}
      />
    </>
  );
};
export default SortableTable;
#
import SortableTable from './SortableTable'
import { sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import React from 'react'

const Demo = () => {
const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const [reduceList, setReduceList] = React.useState([]);

  let columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Sort',
      dataIndex: 'sort',
      width: 30,
      className: 'drag-visible',
      render: () => <DragHandle />,
    },
  ];
  const data = [
    {
      key: '1',
      name: "全站-新用户满减活动",
      code: 1,
      index: 0
    },
    {
      key: '2',
      name: "全站-所有用户满折活动",
      code: 2,
      index: 1
    },
    {
      key: '3',
      name: "G站上新-站点订单立减活动",
      code: 3,
      index: 2
    },
    {
      key: '4',
      name: "G站上新-站点订单立减活动",
      code: 4,
      index: 3
    },
  ];
  return (
    <>
       <SortableTable
         data={data}
         columns={columns}
         DragHandle={DragHandle}
         getNewDataSource={(list) => setReduceList(list)}
         showHeader={false}
       />
    </>
  )
}
export default Demo

```

##### upload

```js
#
initialValue
#
const fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://download.ococmall.com/cheshi-test/site-photo/2A970169120E486A9AD60735B5F9ACD6.jpeg',
    },
  ]
<Form.Item
            ...
            valuePropName="fileList"
            getValueFromEvent={normFile}
            initialValue={fileList}
          >
            <Upload
              onPreview={onPreview}
              beforeUpload={(file) => {
                return false;
              }}
              name="avatar"
              listType="picture-card"
              maxCount={1}
              accept='image/*'
            >
              上传图片
      </Upload>
</Form.Item>
#
                  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
```

##### 只获取变化的表单

```js
<Form onFieldsChange={passChangeFormItems} />;
const [changeFormItems, setChangeFormItems] = useState({});

const passChangeFormItems = (changedFields, allFields) => {
  // 找到更改项 过滤重复项 添加最新的value
  let newChangeFieldsName = changedFields?.[0]?.name?.[0];
  let newChangeValue = changedFields?.[0]?.value;
  setChangeFormItems(preval => {
    let obj = { ...preval, [newChangeFieldsName]: newChangeValue };
    return obj;
  });
};
```

#### 表单组件

##### Input

```js
# Input
readOnly
  <input
     // 出现删除快捷图标
     allowClear
     // 前缀图标
     prefix
     // 后置图标
     suffix
     // 是否有边框
     bordered
     // 前置标签 addonAfter
     addonBefore={ReactNode}
     addonAfter={ReactNode}
     // 控制
     value={inputValue}


     type="text"
     placeholder
     defaultValue=''
     maxLength={20}
     disabled
     style
     size

     onChange
     // 按下回车键后
     onPressEnter
/>

# Input.Password
<Input.Password
  // 自定义隐藏图标
  iconRender={(visible)=> visible?隐藏图标:显示图标 }
  // 是否开启切换图标
  visibilityToggle={false}
/>

# Input.TextArea
<Input.TextArea
  // 自适应高度
  autoSize={boolean | {minRows:2,maxRows:6}}
  // 是否显示字数
  showCount
  value
  onPressEnter
  onResize

  allowClear
  bordered
  defaultValue
  maxLength
/>
# Input.Search
<Input.Search
  // 是否有确认图标 可以自定义图标
  enterButton={boolean|ReactNode}
  loading
  // 点击搜索 清除 按下回车键时的回调
  onSearch
/>
# Input.Group
<Input.Group
  // 是否采用紧凑模式
  compact={boolean}
  size="large|default|small"
/>


    readOnly 属性回来回显


```

##### Inputnumber

```js
# InputNumber
<InputNumber
  defaultValue
  min
  // 最大位数
  max
  size
  disabled
  addonBefore
  addonAfter
  bordered
  // 是否采用键盘快捷键
  keyboard={boolean}
  // 最右边操作按钮每次添加的数值
  step="0.00000000000001"
  // 支持高精度小数 onChange会返回string
  stringMode
  // 小数点位数
  precision={1}
  // 格式化
  formatter={(value)=>}
  // 格式化的格式
  parser={(value)=>}

  onChange
/>
```

##### Checkbox

```js
const CheckboxGroup = Checkbox.Group;

<Checkbox
  disabled
  // 全选状态
  indeterminate
  // 默认选中
  defaultChecked
  onChange
>
   全选
</Checkbox>

<CheckboxGroup
  option={['a','b','c']}
  // 是否选中
  value={['a', 'b', 'c']}
  onChange={(checkArr)=>}
  diabled
/>
# 全选demo
import { useState } from 'react'
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
const Test = () => {
  const option = ['Apple', 'Pear', 'Orange']
  // 全选按钮的 状态
  const [state, setState] = useState(false)
  // checkbox 的选中项 数组数据
  const [data, setData] = useState([])
  const checkAll = () => {
    setState(!state)
    state ? setData([]) : setData(option)
  }
  return (
    <>
      <Checkbox
        indeterminate={state}
        onChange={checkAll}
      >
        全选
      </Checkbox>
      <CheckboxGroup
           onChange={(e) => setData(e)}
           options={option}
           value={data}
      />
    </>
  )
}
```

##### Select

```js
#
<Select
  defaultValue='string|['a','b']'
  style
  disabled
  loading
  allowClear
  // 可以搜索
  showSearch
  // 定制过滤字段
  optionFilterProp={children|label}
  // 过滤功能
  filterOption={(input,option)=>option.children}
  // 多选
  mode="multiple"
  // 定制点击后的value  根据option的属性
  optionLabelProp={Option.name | lable ...}
  // 可以自定义输入
   mode="tags"
  // 开启后 onChange可以拿到 节点的 label属性 参数会变成一个对象 并且可以对象式setFieldsValue
  labelInValue
  // 自定义标签样式
  tagRender={(props)=>}
  // 当没数据的时候显示的内容
  notFoundContent={ReactNode}
  // 是否默认高亮第一个选项
  defaultActiveFirstOption={boolean}
  // 是否把 label 属性也放在数据中
  labelInValue

  // 当点击下拉时触发 在这里发起请求
  onDropdownVisibleChange={(open)=>open&&Ajax}

  onChange
  onSearch
>
  <Option value='' />
</Select>
# 分组
<Select
>
  <OptGroup label='xxx'>
    <Option/>
  </OptGroup>
</Select>


# 点击禁用的按钮
getPopupContainer dom渲染到当前页面
 const handlebindDisabledElementsClick = () => {
console.Log(!form.getFieldValue('custName' ) ? .1abel)
if(!form.getFieldValue('custName')?.value) return false
const container = document.getElementById('salesMgrName_Container')
const disabledElements = [...container.getElementsByClassName('ant-select-item-option-disabled')] if(disabledElements.length != 0 && disabledElements[0] != undefined) {
disabledElements.forEach（item ＝＞ item.onclick ＝ function () ｛ message.error（＇未完成经办人审批＇）｝） }
 }
```

##### Radio

```js
# Radio.Button
<Radio.Group
  options=[
    {label:"",value:"",disabled:true}
  ]
  optionType="button"
  buttonStyle="solid"
  name
  onChange
>
   <Radio.Button
     value=''
     defaultChecked={boolean}
     disabled
     checked
   />
</Radio.Group>

# 垂直的单选按钮
<Radio.Group>
 <Space direction="vertical" />
   <Radio/>
</Radio.Group>
 包裹每一个子项就行
```

##### Cascader

```js
<Cascader
  option={数据}
  // 自定义数据源 字段 默认是 children value label
  fieldNames={{
     label: 'name', value: 'code', children: 'items'
  }}
  onChange={onChange}
  placeholder
  size="large|small"
  // 禁用效果
  在数据里加入 diabled:true
  defaultValue={['一级','二级','三级']}
  // 触发方式
  expandTrigger="hover"
/>

#加载省市区
	:fieldNames="item.fieldNames"
 fieldNames: {
      label: 'name', value: 'code', children: 'cascadeDataVoList'
    },
    :showSearch='{ filter }'
	filter: (inputValue, path) => {
			return path.some(option => option.name.indexOf(inputValue) > -1);
		},
# 异步


# 回显
form.setFieldsValue([1,2,3])
通过displayRender自定义显示
表单确认的时候 typeof判断类型 取值
```

##### Upload

- 如果使用它的上传 必须受控
- https://github.com/ant-design/ant-design/issues/2423#issuecomment-233523579
- 组件设置唯一的 key

###### 逻辑

```js
# 逻辑
// 上传逻辑
1. 模拟点击事件
2. change 事件 input type=file 元素的 files[0] 属性
3. 生成内存地址 URL.creareObjectURL(files[0])  让img.src = xxx
4. 上传图片
   A => 二进制形式 以multpart/form-data
   B => 转换成 Base64位字符串 传给服务器
5. 图片裁切
   前端裁切 => 将裁切区域生成单独的图片 获取图片的临时路径
   后端裁切 => 获取裁切框相对于原图的坐标 将裁切区域坐标以及原图临时文件传给后端进行图片裁切
```

###### props

```js
# upload
import { Upload } from 'antd';
<Upload
 ## 基础属性
  // 上传的地址
  // 如果不写的话 线上环境会默认请求这个地址 需要后端对一个指定的 接口 返回一个空字符串
  action = "htttp://xxx"
  // 设置请求头
  headers={{ authorization: 'xxx' }}
  // 限制上传数量
  maxCount={1}
  // 支持多选
  multiple
  // 限制文件类型
  accept='.xls, .xlsx'
  // 关闭文件信息显示
  showUploadList= { false }
  // 上传一个文件内所有文件
  directory
  // 进度条 和 显示风格
  listType='text | picture | picture-card'
  // 自定义 最右侧交互图标
  showUploadList = {
    showDownloadIcon: true,
    downloadIcon: 'download ',
    showRemoveIcon: true,
    removeIcon: <自定义Icon onClick={e =>  />
  }
  // 自定义进度条样式
  progress:{
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: percent =>
       `${parseFloat(percent.toFixed(2))}%`,
  }
  // 默认已经上传的文件列表
  defaultFileList:[
    {
      uid:"1",
      name:"",
      status:"done",
      response:"Server Error 500",
      url:"xxx"
    }
  ]

 ## 事件
  // 改变事件
- onChange={(info)=>
       info.file.status == 'uploading |done|error'}
  // beforeUpload 限制图片大小和格式 或者 加水印
    // 这里 return false 就不显示进度条
    // 需要在这里 return false 不然会报405
- beforeUpload(file){
     file.type == "images/jpeg"
     file.size / 1024 / 1024 < 2
     return file.type === 'image/png' ? true
         : Upload.LIST_IGNORE; }
  //  预览事件
  onPreview={(file)=>{}}
  //  移除文件的回调
  onRemove(file)
  // 文件拖拽进上传区域的回调
  onDrop
  // 下载文件的回调
  onDownload
/>
```

###### 拖拽 上传与排序

```js
# 拖拽上传
const { Dragger } = Upload;
<Dragger
  onDrop(e)=>{}
/>
# 上传列表拖拽排序
  react-dnd
```

###### 上传前裁切图片

```js
# 上传前裁切图片
 yarn add antd-img-crop
 import 'antd/es/modal/style';
 import 'antd/es/slider/style';
 import ImgCrop from 'antd-img-crop';
  <ImgCrop
    // 添加 旋转 网格 功能
    rotate
    grid
    // 裁切形状 图片质量
    shape='rect | round'
    quality={0-1}
    // 弹窗标题 弹窗宽度 弹窗确定文字 弹窗取消文字
    modalTitle='编辑图片'
    modalWidth={520}
    modalOk='确定'
    modalCancel='取消'
    // 点击确定 取消的 事件
    onModalOK
    onModalCancel
  >
    <Upload>+ Add image</Upload>
  </ImgCrop>

 const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () =>
             resolve(reader.result);
        });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

# 点击模态框依然能点击及其他区域
point-events: none;
getContainer 挂载到当前页面
```

###### 图片加水印

```js
# 图片加水印
beforupload(file)=>{
 return new Promise(resolve)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload=()=>{
        const img = document.createElement('img');
        img.src = reader.result;
        img.onload=()=>{
          const canvas =
              document.createElement('canvas');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.font = '33px Arial';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob(resolve);
        }
    }
  }
}
```

###### 转换 bas64

```js
# 转换 base 64
const getBase64 = (img, cb) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => cb(reader.result));
  reader.readAsDataURL(img);
};
getBase64(info.file.originFileObj,(imgUrl)=>{
  // 将转后后的 图片地址保存
})
```

###### excel demo

```js
 const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

<Form.Item
           valuePropName="fileList"
           label="选择文件"
           name="uploadFile"
           required
           getValueFromEvent={normFile}
 >
       <Upload
           // name={'file'}
           listType='text'
           action="/dpm/customerProblemImport/importExcel"
           accept=".xls, .xlsx"
           maxCount={1}
           beforeUpload={(file) => {
                  return true;
           }}
           showUploadList={{
                 showRemoveIcon: true,
                 removeIcon: (
               <CloseOutlined
    onClick={(e) => console.log(e, 'custom removeIcon event')}
               />
              ),
           }}
           progress={{
                  strokeColor: {
                    '0%': '#229DED',
                    '100%': '#229DED',
                  },
                  strokeWidth: 2,
                  format: (percent) =>
                      `${parseFloat(percent.toFixed(0))}%`,
                  }}
                  onChange={(info) => {
     if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                  }
                  if (info.file.status === 'done') {
                    message.success(
                      `${info.file.name} file uploaded successfully`,
                    );
                  } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                  }
                }}
              />
 </Form.Item>
#
 form.validateFields().then(()=>{
    const formData = new FormData()

    formData.append('file', file[0].originFileObj);

  dispatch({
          type: 'total/multiSheetUpload',
          payload: formData,
        });
```

###### progress 样式

```js
 .ant-progress-inner {
      margin-top: 20px;
      width: 235px;
    }

    .ant-progress-text {
      display: none !important;
    }

    .ant-upload-list-item-info {
      width: 270px;

      .ant-upload-list-item-card-actions-btn.ant-btn-sm {
        height: 28px !important;
        line-height: 28px !important;
      }
    }

    .ant-popover-inner {
      width: 200px;
    }

    .ant-upload-list-item .anticon-close:hover {
      color: rgba(0, 0, 0, 0.45);
    }

    .ant-upload-list-item-info::before {
      background-color: #fff;
    }

    .ant-upload-list-item:hover .ant-upload-list-item-info {
      background: #fff;
    }

    .ant-btn-text:hover,
    .ant-btn-text:focus {
      background-color: #fff;
    }
```

#### Mentions

#### Rate

#### Slider

#### Switch

#### TimePicker

#### Transfer

#### TreeSelect

### 数据展示

#### Avatar

```js
#
<Avatar
  size="large|small"
  shape="circle|square"
  // 文字头像
  gap=''
  src='string|ReactNode'
  icon='ReactNode'
/>
```

#### Badge

```js
#
<Badge
  color=""
  count={5}
  // 最大数字
  overflowCount={10}
  // 只显示一个小红点
  dot
  //小圆点状态
  status="success|error| default| processing| warning"
  //状态文本
  text=''
/>
# 绸带


 <Badge.Ribbon text="" color='' placement="start |end ">
      <Card title="Pushes open the window" size="small" />
  </Badge.Ribbon>
```

#### Calendar

#### Card

```js
<Card
  bordered={false}
  // 右上角渲染一个元素
  extra={<a />}
  title
  style={{}}
  bodyStyle={{}}
  headStyle={{}}
/>
```

#### Carousel

#### Collapse

#### Comment

#### Descriptions

```js
#
<Descriptions
  bordered
  column={2}
  style
>
  <Descriptions.Item
    label
    span
    contentStyle
  />
<Descriptions/>
```

#### Empty

```js
<Empty
  // 内置图片
  image={Empty.PRESENTED_IMAGE_DEFAULT}
/>
```

#### Image

```js
<Image
  width
  src
  placeholder
  preview
  src='error'
  // 加错错误图片
  fallback=''
>
</Image>
#
  <Image.PreviewGroup preview>
    <Image/>
  </>
```

#### List

#### Popover

#### Statistic

```js
<Statistic
  title=""
  value={112893}
  // 数值的样式
  valueStyle={{}}
  // 小数点位数
  precision={2}
  prefix={<Icon />}
  suffix={元素节点}
/>
 # 倒计时组件
 const { Countdown } = Statistic;
let deadline=Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
 <Countdown title="Countdown" value={deadline} onFinish={onFinish} format="D 天 HH:mm:ss:SSS"/>
```

#### Table

##### Table

```js
<Table
# 样式配置
  bordered={true}
  size={'default'|'middle'|'small'}
// fixed 不会影响响应式布局
  tableLayout={'auto'|'fixed'}
/*
  斑马条纹
  .light {background-color: #ffffff; }
  .dark {background-color: #fbfbfb;}
*/
  rowClassName={(record,index)=>index%2===0?'light':'dark'}
// 不显示表头
  showHeader={boolean}
  title={(当页数据)=>'title'}
  footer={(当页数据)=>'title'}
/*  colSpan 合并单元格  index={0} 指定是第几个
 <Table.Summary fixed>
         <Table.Summary.Row>
            <Table.Summary.Cell colSpan={2} index={0}>
               Summary
            </Table.Summary.Cell>
         </Table.Summary.Row>
 </Table.Summary>
*/
  summary={(当页数据)=>ReactNode}

# 基本配置
  dataSource={dataSource}
  columns={columns}
  loading
  // 分页组件, false 不显示
  pagination:{{
    total,
    current,
    pageSize,
    pageSizeOptions:[10, 20, 50, 100]
    showTotal: (total) => `共 ${total} 条数据`,
    onChange=((currentPage)=>fetch)
  }}
  onChange={(pagination,filters,sorter,extra)}

# 可能会用到的配置
// 如果dataSource没有key 指定了rowKey 就会自动加
  rowKey={record => record.uid}
// 默认文案设置
  locale={}
// 禁用排序恢复到默认状态
  sortDirections=['ascend', 'descend', 'ascend']
// 用于可编辑菜单
  components={{
    body:{ cell:ReactNode,row:ReactNode }
  }}
/* 手风琴效果 展开多余信息
   expandedRowRender 控制显示内容
   rowExpandable 控制展开项
*/
  expandable={{
    expandedRowRender:(record)=> ReactNode,
    rowExpandable:(record)=> record.name !== 'xxx'
  }}
// 每一行的触发事件 例如 click,hover 某一行
  onRow={record => {
    return {
      onClick: event => {},
      onDoubleClick: event => {},
      onContextMenu: event => {},
      onMouseEnter: event => {},
      onMouseLeave: event => {},
    };
  }}
// 点击表头行
  onHeaderRow={(columns, index) => {
    return {
      onClick: (e) => {},
    };
  }}
/* 开启表格行左边功能项
   type             左边多一个单选或者多选框
   selections       开启 全选 反选 清空 自定义功能
   fixed:true       是否固定
   columnWidth      每一项的宽度
   hideSelectAll    隐藏全选菜单
   defaultSelectedRowKeys 默认选中项
   getCheckboxProps 每一项的默认Props
   renderCell       自定义渲染功能框
   selectedRowKeys  手动控制选中项 配合onChange
   onChange         发生改变的回调
*/
  rowSelection={{
    type: 'radio'| 'checkbox' ,
    selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {key:'',text:"",onSelect:(changeRowKeys)=>xxx}
    ]
    fixed: true,
    columnWidth:string | number,
    hideSelectAll:true,
    defaultSelectedRowKeys: string[] | number[],
    getCheckboxProps:(record)=>{
       disabled: record.name === 'Disabled User',
       name: record.name,
    }
    renderCell:(checked,record,index,originNode),
    selectedRowKeys:[],
    onChange:(selectedRowKeys,selectedRows)=>{
      setData(selectedRowKeys)
    },
  }}
# scroll
/* 固定单元格
   横向需配合 columns 的 fixed: 'left|right',
   垂直需配合 columns 的 width:100 指定宽度
   x:{ 'max-centent' } 解决对不齐的问题
*/
  scroll={{ x: 1800，y:240 }}
/>
```

##### columns

- 纵向单元格 https://segmentfault.com/a/1190000021124610

```js
const columns = [
  {
# 样式配置
    align:'left center right',
// 这行左边的部分都会固定 经过的每个都需要加
    fixed:'left'|'right'|true,
    width:100,
    className:"",
// 单元格合并
    colSpan:number,
// 是否可编辑 配合 tabel component重构
    editable: true,
    ellipsis: boolean | {showTitle:false}
# 基本配置
    title:"",
    dataIndex:"",
    key:"",
/* 斑马条纹
  let rowColorOdd = { style: { backgroundColor: '#fff' } }
  let rowColorEven = { style: { backgroundColor: 'red' } }
*/
    onCell: (record, rowIndex)
       => rowIndex % 2 === 0 ? rowColorOdd : rowColorEven
    render:(text,record,index)=>{
      return {
        children: ReactNode,
        props:{
          colSpan:3
        }
      }
    },


# filter
// 自定义删选菜单
    filters:[
      {text:"",value:"",children:[{...}]}
    ]
/* 受控模式 在table 的onChange回调函数 更新受控数据
   值为已筛选的 value 数组 (filters.value)
*/
    filteredValue: string[],
// 筛选规则 value是filters.value
    onFilter:(value,record)=>{record.name.includes(value)}

    defaultFilteredValue: string[]
// 筛选菜单模式
    filterMode: 'tree' | 'menu',
    filterSearch: true
    filterIcon:(filtered)=> <Icon />
// 多个列的筛选 合并生效 是否只影响本列
    filterMultiple: true

/* 自定义筛选菜单
({setSelectedKeys, selectedKeys, confirm, clearFilters})=>{}
*/
    filterDropdown:()=>ReactNode
// 自定义筛选菜单 显示与隐藏
    filterDropdownVisible={boolean}
// 自定义筛选菜单 关闭和显示时候的回调
    onFilterDropdownVisibleChange=(visible)=>{}
// 筛选通过字段着色
    filtered={true}


# sort
   defaultSortOrder: 'descend' | 'ascend',
// 开启排序方式 降序 升序
   sortDirections:['descend','ascend'],
// 受控模式 在table 的onChange回调函数 更新受控数据
   sortOrder: boolean | 'descend' | 'ascend',
/* 排序规则
   compare 排序规则
   multiple 多列排序优先级 谁最大那一列规则优先
   sorter: {
      compare: (a, b) =>a.key - b.key,
      multiple: 1,
    },
*/
   sorter:(a, b) => a.key - b.key
  }
# 表头分组
  children:[
    ...
  ]
]
# 筛选时间
sorter: (a,b) => {
const time1 = moment(a.changeTime, 'YYYY.MM.dd HH:mm:ss')
const time2 = moment(a.changeTime, 'YYYY.MM.dd HH:mm:ss')
}
return moment(time2).isAfter(moment(time1)) ? -1 : 1
},
sortDirections: ['descend', 'ascend']
```

##### modal

```js
*fetch({payload:{page=1,pageSize=10}},{call,put}){
  const{data:{records=[],total}}=
     yield call(service.getPage,{pageNumber:page,pageSize })
  yield put({
        type: 'save',
        payload: {
          tabelList: records,
          page,
          pageSize,
          total,
        },
      });
    },
*upload({ payload: excelData }, { call, put }) {
      yield call(service.importExcel, excelData);
      message.success('上传成功!');
      yield put({
        type: 'fetch',
        payload: {},
      });
    },
subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/backStageMaintain/feedback') {
          dispatch({
            type: 'fetch',
            payload: {}
          });
        }
      });
    },
  },
    <Table
            columns={columns}
            dataSource={tabelList}
            rowKey="id"
            pagination={{
              total,
              current: page,
              pageSize,
              onChange: (page, pageSize) => {
                dispatch({
                  type: 'feedback/fetch',
                  payload: { page, pageSize },
                });
              },
              showTotal: (total) => `总共${total}条数据`,
            }}
  />
```

##### 受控的 sort

```js
#
<div
  className={styles['dropDown_container_zzz']}
  ref={refContainer}
/>
<Table
  getPopupContainer={() => refContainer?.current}
  onChange={handleTableChange}
/>
#
{
      key: 'availableOrderRange',
      filters: [
        { text: '全部站点', value: 0 },
        { text: '指定站点', value: 1 },
      ],
      filteredValue: filterValueKey?.availableOrderRange,
      filterMultiple: false,
},
 const [filterValueKey, setFilterValueKey] = useState(null);
const refContainer = useRef(null);
const handleTableChange = (pagination, sortFields) => {
   setFilterValueKey(sortFields);
}
#
.dropDown_container_zzz {
  :global {
    .ant-table-filter-dropdown-btns {
      display: none;
    }
  }
}
// 重置的时候 指定每个对象属性为null
 setFilterValueKey({
      activeStatus: null,
      ...
    });
#
function transformObj_ArrayToValue(obj) {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== null) {
      newObj[key] = obj[key].length > 0 ? obj[key][0] : null;
    }
  });
  return newObj;
}
```

##### checkbox

```js
// 当点击受控的sort按钮的时候 在table onChange事件需要
// 重置选中的checkbox
<Table
   rowKey={(record) => record.id}
   rowSelection={{
      type: 'checkbox',
      preserveSelectedRowKeys: true,
      selectedRowKeys: tableSelectKey,
      onChange: (selectedRowKeys, selectedRows) => {
        setTableSelectKey(selectedRowKeys);
      },
   }}
   pagination={{
            total,
            current: page,
            pageSize,
            showTotal: (total) => `总共${total}条数据`,
   }}
   onChange={handleTableChange}
/>
#
const [tableSelectKey, setTableSelectKey] = useState([]);

此时 tableSelectKey 中存储的就是 rowKey 指定的字段
```

#### 合并单元格

```js
const sharedOnCell = (_, index) => {
  if (index === 4) {
    return { colSpan: 0 };
  }
};
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, row, index) => <a>{text}</a>,
    onCell: (_, index) => ({
      colSpan: index < 4 ? 1 : 3,
    }),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    onCell: sharedOnCell,
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    onCell: sharedOnCell,
  },
];
```

#### Tabs

```js
#
<Tabs
  activeKey
  defaultActiveKey
  // 居中显示
  centered
  size
  tabPosition
  type="line|card|editable-card"

  onChange
>
  <TabPane
   tab={ReactNode}
   key
   disabled
  >
  </TabPane>
</Tabs>
```

#### Tag

```js
<Tag
  closable
  color="success|processing|error|warning|default"
  visible
  icon={ReactNode}
  onClose
/>
```

#### Timeline

```js
#
 <Timeline>
   <Timeline.Item
     color=''
   />
 </Tooltip>
```

#### Tooltip

```js
<Tooltip
   title="提示文字"
   placement="topLeft"
   // 箭头指向中心
   arrowPointAtCenter
   color
>
    ...
</Tooltip>


<span className={styles.left} style={remark && remark.length > 13 ? {} : remark.length == 13 ? { marginRight: 10 } : { marginRight: (13 - remark.length) * 25 }}>
            {remark && remark.length > 13 ?
              (< Tooltip title={remark}>
                <span>{remark.slice(0, 13) + '...' ?? '--'}</span>
              </Tooltip>
              ) : remark ?? '--'}
          </span>
```

#### Tree

```js
<Tree
   treeData={}
   // 禁用整行
   在数据里面加入 disabled:true
   // 禁用 checkbox
   在数据里面加入 disableCheckbox:true
   // 自定义图标
   在数据里面加入 icon

   // 显示复选框
   checkable
   // 默认展开所有节点
   defaultExpandAll

   // 点击复选框 触发
   onCheck={(keys,e)=>}
   // 当前选中复选框的节点
   checkedKeys
/>
```

### 反馈

#### Alert

```js
import { Alert } from 'antd';
<Alert
   message=""
   type="success info warning error"
   description

   showIcon
   closable
   onClose={()=>}
/>
```

#### Drawer

```js
#
import { Drawer } from 'antd';
<Drawer
   title="Basic Drawer"
   placement="right top bottom left"
   width={300}
   height
   mask={boolean}
   closable={boolean}
   visible={boolean}

   footer

   onClose={()=>}
>
```

#### Message

```js
message.info("内容",time);
      .success({content:"文本内容",className:"",style:{}},time)
      .error
      .warning
      .loading()
```

#### Modal

```js
<Modal
   title=''
   // 控制位置
   centered
   style:{{top:0}}

   maskClosable
   visible={boolean}
   width={1000}

   okText="确认"
   cancelText="取消"
   // 是否禁用按钮
   okButtonProps={{ disabled: true }}
   cancelButtonProps={{ disabled: true }}
   onOk
   onCancel
   footer={null}
/>


#
Modal.success({
    title:"",
    content: '可以放元素标签 或string',
  });
// 手动关闭
modal.destroy();

# modal 确定按钮变成表单的确定
form.validateFields()
  .then((values)=>{})
  .catch((err)=>)
```

#### Notification

```js
# 外观样式
notification["success info warning error"]({
      message: "",
      description:""
      onClick:()=>{
      },
      icon:ReactNode,
      className:"",
      stule:{},
      // 关闭的时间
      duration: 0,
      placement:'bottomRight bottomLeft topRight topLeft',
      // 增加 dom
      btn:ReactNode(notification.close(key))
      key:`open${Date.now()}`
})




# 位置
placement:"bottomRight"
bottomLeft
topRight
topLeft
# 增加 dom
btn
key
```

#### Popconfirm

```js
<Popconfirm
   title:"",
   onText='Yes'
   cancelText="No"

   onConfirm
   onCancel
/>
```

#### Progress

```js
<Progress
  size
  // 悬浮提示内容
  title
  percent={}
  status="active exception"
  // 提示图标或者 百分比
  showInfo={false}
  format={percent => 自定义提示文本}
  strokeColor={{ form: '颜色', to: '颜色' }}
  success={{ percent: 30 }}
  type="circle dashboard" // dashboard 是有缺口的
  gapDegree={30} // 修改 dashboard 缺口角度
  strokeLinecap="square" // dashboard 边缘的棱角
  steps={3} // 带步骤的进度条
/>
```

#### Result

```js
<Result
   status="success",
   title:"",
   subTitle:"",
   extra={[ DOM元素  ]}
 />
```

#### Skeleton

```js
<Skeleton avatar paragraph={{ rows: 4 }} active />
```

#### Spin

```js
<Spin
   tip="Loading..."
   indicator={ <icon/> } />
   size
   // 将内部元素也变成加载中 镶嵌
   spinning={true}
/>
```

### 其他

#### Anchor

```typescript
import { Anchor } from 'antd';
const { Link } = Anchor;
<Link href="#">
```

#### BackTop

```js
import { BackTop } from 'antd';
<BackTop />
# 自定义样式 最大40px*40px
<BackTop >
    <div style={xxx} />
</BackTop>
```

#### ConfigProvider

```js
# 全局配置
import { ConfigProvider } from 'antd';
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>
```

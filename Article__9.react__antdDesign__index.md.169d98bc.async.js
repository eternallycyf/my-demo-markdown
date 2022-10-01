(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{VxgI:function(d,l,t){"use strict";t.r(l);var i=t("cDcd"),e=t.n(i),n=t("dEAq"),u=t.n(n),a=t("6T1g");const s=e.a.memo(({demos:r})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"ant-design"},e.a.createElement(n.AnchorLink,{to:"#ant-design","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Ant Design"),e.a.createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e.a.createElement("h2",{id:"bug"},e.a.createElement(n.AnchorLink,{to:"#bug","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"bug"),e.a.createElement(a.a,{code:`# form
\u5F53\u4E0Emodal\u7ED3\u5408\u7684\u65F6\u5019 initValus\u6570\u636E\u4F1A\u5F02\u6B65
\u9700\u8981\u4F7F\u7528form.setValues \u8BBE\u7F6E\u6570\u636E`,lang:"js"}),e.a.createElement("h2",{id:"\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7EC4\u4EF6"),e.a.createElement("h3",{id:"\u901A\u7528"},e.a.createElement(n.AnchorLink,{to:"#\u901A\u7528","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u901A\u7528"),e.a.createElement("h4",{id:"button"},e.a.createElement(n.AnchorLink,{to:"#button","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"button"),e.a.createElement(a.a,{code:`<Button
    # \u57FA\u7840\u5C5E\u6027
    // \u6837\u5F0F
    type={'default |primary | dashed | text | link'}
    // \u5F62\u72B6
    shape={'default|circle|round'}
    // \u5927\u5C0F
    size={'large|middle|small'}
    // \u7279\u6B8A\u6837\u5F0F
    ghost    \u6309\u94AE\u80CC\u666F\u900F\u660E
    danger   \u7EA2\u8272\u5916\u89C2
    disabled \u7981\u7528\u6548\u679C
    block    \u5BBD\u5EA6\u4E3A\u7236\u5BBD\u5EA6
    // \u8BBE\u7F6E\u56FE\u6807
    icon={<xxx/>}

    # \u5176\u4ED6\u5C5E\u6027
    // loading \u6548\u679C\u63A7\u5236
    loading={boolean}
  />

 # \u7EC4\u5408\u6309\u94AE
// \u70B9\u51FB\u5C31\u5F39\u51FA\u4E00\u4E2A\u7EC4\u4EF6
<Dropdown.Button overlay={\u7EC4\u4EF6\u540D} />
 # bug  \u79FB\u9664\u6309\u94AE\u6587\u4EF6\u4E4B\u95F4\u7684\u7A7A\u683C
import { Button, ConfigProvider } from 'antd';
 <ConfigProvider autoInsertSpaceInButton = { false }>
       <Button type="primary">
              \u7A7A\u683C
      </Button>
</ConfigProvider>`,lang:"unknown"}),e.a.createElement("h4",{id:"icon"},e.a.createElement(n.AnchorLink,{to:"#icon","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"icon"),e.a.createElement(a.a,{code:`# \u9ED8\u8BA4\u56FE\u6807
import { xxx } from '@ant-design/icons';
# \u81EA\u5B9A\u4E49\u56FE\u6807
import Icon from '@ant-design/icons';
<Icon component={xxx} />
# \u4F7F\u7528 iconfont
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
<IconFont type="icon-tuichu" />
# \u4E09\u7C7B\u56FE\u6807\u540D\u5B57\u533A\u522B
xxxOutlined
Fuiled
TwoTone

# spin                    \u65CB\u8F6C\u52A8\u753B
# rotate={180}            \u65CB\u8F6C\u89D2\u5EA6
# twoToneColor="#eb2f96"  \u53CC\u8272\u56FE\u6807\u8BBE\u7F6E\u989C\u8272`,lang:"js"}),e.a.createElement("h4",{id:"\u6392\u7248"},e.a.createElement(n.AnchorLink,{to:"#\u6392\u7248","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6392\u7248"),e.a.createElement(a.a,{code:"",lang:"js"}),e.a.createElement("h3",{id:"\u5E03\u5C40"},e.a.createElement(n.AnchorLink,{to:"#\u5E03\u5C40","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5E03\u5C40"),e.a.createElement("h4",{id:"\u5206\u5272\u7EBF"},e.a.createElement(n.AnchorLink,{to:"#\u5206\u5272\u7EBF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5206\u5272\u7EBF"),e.a.createElement(a.a,{code:`<Divider >
   // \u662F\u5426\u865A\u7EBF
   dashed
   // \u6587\u5B57\u662F\u5426\u4E3A\u666E\u901A\u6B63\u6587\u6837\u5F0F
   plain
   // \u5206\u5272\u7EBF\u4F4D\u7F6E
   orientation={'left|right'}
   type={'horizontal|vertical'}
/>`,lang:"js"}),e.a.createElement("h4",{id:"grid"},e.a.createElement(n.AnchorLink,{to:"#grid","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Grid"),e.a.createElement(a.a,{code:`# row
<Row
  // \u95F4\u9694
  gutter={16}
  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
  gutter={[16, 24]}   \u6C34\u5E73\u95F4\u8DDD \u5782\u76F4\u95F4\u8DDD
  // flex\u5E03\u5C40
  justify='start|center|spacce-between....'
  // \u5B50\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F
  align='top|middle|bottom'
  // \u6362\u884C
  wrap={false}

/>
# col
<Col
  // \u5212\u5206\u5757\u6570 \u517124\u4EFD
  span={6}
  // \u5DE6\u53F3\u504F\u79FB \u5411\u53F3\u504F\u79FB6
  offset={6}
  // \u5411\u5DE6
  pull={18}
  // \u5411\u53F3
  push={2}
/>
<Row>

# \u624B\u52A8\u6307\u5B9A\u6805\u683C\u5BBD\u5EA6
\u9ED8\u8BA4\u4E00\u683C\u4E3A 8.33333%

style="width: 12.499999995%;
    flex: 0 0 12.499%;max-width: 12.499%;">`,lang:"js"}),e.a.createElement("h4",{id:"layout"},e.a.createElement(n.AnchorLink,{to:"#layout","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Layout"),e.a.createElement(a.a,{code:`import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

<Layout>
  <Header>Header</Header>
  <Content>Content</Content>
  <Footer>Footer</Footer>
  <Layout>
    <Sider>Sider</Sider>
    <Content>Content</Content>
  </Layout>
</Layout>;`,lang:"js"}),e.a.createElement("h4",{id:"space"},e.a.createElement(n.AnchorLink,{to:"#space","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Space"),e.a.createElement(a.a,{code:`// \u8BBE\u7F6E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD
<Space
  size="small|middle|large|number"
  // \u81EA\u5B9A\u4E49\u95F4\u8DDD\u5927\u5C0F
  size={[8, 16]}
  align="start|end|center|baseline"
  direction="vertical|horizontal"
  wrap
  // \u76F8\u90BB\u7EC4\u4EF6\u5206\u9694\u7B26
  split={<Divider type="vertical" />}
/>`,lang:"js"}),e.a.createElement("h3",{id:"\u5BFC\u822A"},e.a.createElement(n.AnchorLink,{to:"#\u5BFC\u822A","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5BFC\u822A"),e.a.createElement("h4",{id:"affix-\u56FA\u9489"},e.a.createElement(n.AnchorLink,{to:"#affix-\u56FA\u9489","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Affix \u56FA\u9489"),e.a.createElement(a.a,{code:`<Affix
  // \u7C98\u6027\u5B9A\u4F4D
  offsetTop={10}
  offsetBottom={10}
  // \u6EDA\u52A8\u5143\u7D20\u5BF9\u8C61
  target={() => dom}
  onChange
/>`,lang:"js"}),e.a.createElement("h4",{id:"breadcrumb"},e.a.createElement(n.AnchorLink,{to:"#breadcrumb","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Breadcrumb"),e.a.createElement(a.a,{code:`<Breadcrumb
  // \u603B\u4F53\u81EA\u5B9A\u4E49\u5206\u9694\u7B26
  separator=">"
>
  <Breadcrumb.Item>
    <a href="">Application Center</a>
  </Breadcrumb.Item>
  // \u5B50\u9879 \u81EA\u5B9A\u4E49\u5206\u9694\u7B26
  <Breadcrumb.Separator>:</Breadcrumb.Separator>
</Breadcrumb>`,lang:"js"}),e.a.createElement("h4",{id:"dropdown"},e.a.createElement(n.AnchorLink,{to:"#dropdown","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Dropdown"),e.a.createElement(a.a,{code:`<Dropdown
  overlay={\u5C01\u88C5\u7684Menu\u7EC4\u4EF6}
  // \u5F39\u6846\u663E\u793A\u4E00\u4E2A\u7BAD\u5934
  arrow
  // \u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E
  placement="bottomLeft"
  // \u89E6\u53D1\u65B9\u5F0F contextMenu \u9F20\u6807\u53F3\u952E\u89E6\u53D1
  trigger={['click' | 'hover|contextMenu']}
>
  <Button>\u8FD9\u662F\u6309\u94AE</Button>
</Dropdown>`,lang:"js"}),e.a.createElement("h4",{id:"menu"},e.a.createElement(n.AnchorLink,{to:"#menu","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Menu"),e.a.createElement(a.a,{code:`// SubMenu \u5BF9 menuitem \u8FDB\u884C\u5206\u7EC4
<Menu
   mode='horizontal|vertical|inline'
   theme="dark|light"
   // \u63A7\u5236\u6574\u4F53\u5C55\u5F00 \u8FD8\u662F \u53EA\u663E\u793A\u4E00\u4E2A\u56FE\u6807
   inlineCollapsed={true | false}
   inlineIndent={number} \u7F29\u8FDB\u7684\u5BBD\u5EA6
   // \u9ED8\u8BA4\u5C55\u5F00\u9879 \u9009\u4E2D\u9879
   defaultSelectedKeys={['MenuItemKeys']}
   defaultOpenKeys={['SubMenuKeys']}
   // \u5F53\u524D\u5C55\u5F00\u7684 SubMenu \u83DC\u5355 keys \u6570\u7EC4
   openKeys={['SubMenuKeys']}
   // \u5C55\u5F00\u4E8B\u4EF6 \u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u63A7\u5236 \u540C\u65F6\u53EA\u663E\u793A\u4E00\u4E2A\u5B50\u83DC\u5355
   onOpenChange={(openKeys)=>string[]}
>
  <SubMenu
    key='SubMenu'
    icon
    title
  >
    // ItemGroup \u4F1A\u5728\u4FA7\u8FB9\u680F\u4E0A\u663E\u793A\u4E00\u4E2A\u6807\u9898 \u6CA1\u6709\u5176\u4ED6\u6548\u679C
    <ItemGroup
      key=''
      title=''
    >
       <MenuItem
          key=''
          icon
       >
          \u8FD9\u662F\u5B50\u83DC\u5355
       </MenuItem>
    </ItemGroup>
  </SubMenu>
</Menu>`,lang:"js"}),e.a.createElement("h4",{id:"pageheader"},e.a.createElement(n.AnchorLink,{to:"#pageheader","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"PageHeader"),e.a.createElement(a.a,{code:"",lang:"unknown"}),e.a.createElement("h4",{id:"pagination"},e.a.createElement(n.AnchorLink,{to:"#pagination","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Pagination"),e.a.createElement(a.a,{code:`# \u903B\u8F91
\u5F53\u524D\u9875\u9762 \u4E00\u9875\u653E\u51E0\u6761\u6570\u636E \u603B\u5171\u591A\u5C11\u6570\u636E  \u5F53\u524D\u9875\u7801
 pageSize total current
\u5F53\u70B9\u51FB\u7684\u65F6\u5019 \u5C06\u70B9\u51FB\u7684\u9875\u7801\u5207\u6362
\u901A\u8FC7\u5F53\u524D\u9875\u9762 \u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42 \u8986\u76D6\u6570\u636E
#
<Pagination
  pageSize={\u6BCF\u9875\u6761\u6570}
  total={\u6570\u636E\u603B\u6570}
  current={\u5F53\u524D\u9875\u6570}
  // \u6309\u94AE\u63A7\u5236 \u4E00\u9875\u663E\u793A\u591A\u5C11\u6761\u3001
  pageSizeOptions=[]
  onChange={(page,pageSize)=> }
  showTotal: (total) => \`\u5171 \${total} \u6761\u6570\u636E\`,
  defaultPageSize
  defaultCurrent
/>

# \u9875\u7801\u91CD\u7F6E\u95EE\u9898
    https://stackoverflow.com/questions/69638994/how-to-reset-the-paginations-current-page-when-pagesize-changes-in-ant-design`,lang:"js"}),e.a.createElement("h4",{id:"steps"},e.a.createElement(n.AnchorLink,{to:"#steps","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Steps"),e.a.createElement(a.a,{code:`<Steps
  // \u63A7\u5236\u9AD8\u4EAE\u4F4D\u7F6E
  current={1}
  size="small"
>
  <Step title subTitle description status="finish|process|wait" icon></Step>
</Steps>`,lang:"js"}),e.a.createElement("h3",{id:"\u6570\u636E\u5F55\u5165"},e.a.createElement(n.AnchorLink,{to:"#\u6570\u636E\u5F55\u5165","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6570\u636E\u5F55\u5165"),e.a.createElement("h4",{id:"autocomplete"},e.a.createElement(n.AnchorLink,{to:"#autocomplete","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"AutoComplete"),e.a.createElement(a.a,{code:`#
 <AutoComplete
   placeholder
   style

   // \u6570\u636E\u6E90
   options
   //  \u5F53\u524D\u9009\u62E9\u6761\u76EE
   value

   onSelect
   onSearch
   onChange
   showSearch={{ filter }}
 />
	filter(inputValue, path) {
			return path.some(option => option.name.indexOf(inputValue) > -1);
		},`,lang:"js"}),e.a.createElement("h4",{id:"datepicker"},e.a.createElement(n.AnchorLink,{to:"#datepicker","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"DatePicker"),e.a.createElement(a.a,{code:`import moment from 'moment'
// \u65F6\u95F4\u9009\u62E9\u5668
import { DatePicker } from 'antd';
// \u65F6\u95F4\u8303\u56F4\u9009\u62E9\u5668
const { RangePicker } = DatePicker;
// \u4E2D\u6587\u9700\u8981\u7684\u5305
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

<RangePicker
## \u57FA\u7840\u914D\u7F6E
  // \u7981\u7528\u7EC4\u4EF6
  disabled={[false,true]}
  // \u9875\u811A\u5185\u5BB9
  renderExtraFooter={() => 'extra footer'}
  // \u65E0\u8FB9\u6846
  bordered={false}
  size={'large|miaddle|small'}
  // \u4E2D\u6587 \u9700\u8981\u5F15\u5165 moment\u4E2D\u6587 \u548C \u65F6\u95F4\u9009\u62E9\u5668\u4E2D\u6587 \u7684\u5305
  locale={locale}

## \u5177\u4F53\u65F6\u95F4\u914D\u7F6E
  // \u5F53\u662F\u8303\u56F4\u9009\u62E9\u5668\u7684\u65F6\u5019 \u5FC5\u987B\u5F00\u542F\u8FD9\u4E2A \u914D\u5408 Onchange
  value={""}
  // \u70B9\u51FB\u540E \u9650\u5236\u65F6\u95F4\u7C7B\u578B
  picker="year|quarter|month|week|date|time"
  // \u70B9\u51FB\u540E\u5F00\u542F\u5177\u4F53 \u65F6\u5206\u79D2\u9009\u62E9\u5668
  showTime={{
      format: "hh[\u65F6]mm[\u5206]ss[\u79D2]",
      defaultValue:[
            // \u8BBE\u7F6E\u65F6\u5206\u79D2\u9ED8\u8BA4\u503C \u4E0D\u9009\u62E9\u65F6\u5206\u79D2\u5C31\u662F\u9ED8\u8BA4\u7684
            moment('01:00:00', 'HH:mm:ss'),
            moment('11:59:59', 'HH:mm:ss')
          ]
     }}
  // \u9ED8\u8BA4\u4E00\u70B9\u51FB\u5C31\u663E\u793A\u7684\u65F6\u95F4\u8303\u56F4 \u4E0D\u5199\u5C31\u4ECE\u6700\u65B0\u65F6\u95F4\u5F00\u59CB
  \u642D\u914D showTime \u4F7F\u7528
  defaultPickerValue={moment("2021-05-01")}
  // \u4E0D\u70B9\u51FB\u65F6\u663E\u793A\u7684\u65F6\u95F4\u683C\u5F0F\u8FC7\u6EE4
  format="YYYY/MM/DD HH:mm:ss"
  // \u81EA\u5B9A\u4E49\u5FEB\u6377\u65F6\u95F4\u6309\u94AE\u8BBE\u7F6E showToday={false}
  ranges={{
     Today: [moment(), moment()],
     '\u5F53\u6708':[
         moment().startOf('month'),
         moment().endOf('month')
        ]
     }}
  // \u81EA\u5B9A\u4E49\u6BCF\u4E2A\u65E5\u671F\u7684\u5916\u89C2
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
  // \u7981\u7528\u9650\u5236 \u65F6\u95F4   \u5177\u4F53\u89C1\u4E0B\u9762\u7684 demo
  disabledDate={disabledDate}

## \u4E8B\u4EF6
/* \u65F6\u95F4\u6539\u53D8\u7684\u4E8B\u4EF6 \u53C2\u6570\u662F\u6539\u53D8\u7684\u65F6\u95F4
  \u5F53\u4E3A datepicker \u65F6\u5019 \u4E0D\u80FD\u53D6\u6D88\u540C\u4E00\u65F6\u95F4 \u9700\u8981\u8BBE\u7F6E value={''}\u624D\u884C
*/
  onChange={(date:moment,dateString:string)=>}
  // \u5F85\u9009\u65E5\u671F\u53D8\u5316\u56DE\u8C03 \u7528\u4E8E\u65F6\u95F4\u8303\u56F4\u9650\u52367\u5929\u65F6\u95F4
  onCalendarChange={val => setDates((val))}
/>`,lang:"js"}),e.a.createElement("h5",{id:"\u7981\u7528\u5E74\u6708\u65E5\u65F6\u5206\u79D2"},e.a.createElement(n.AnchorLink,{to:"#\u7981\u7528\u5E74\u6708\u65E5\u65F6\u5206\u79D2","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7981\u7528\u5E74\u6708\u65E5\u65F6\u5206\u79D2"),e.a.createElement(a.a,{code:`## \u7981\u7528 \u5E74\u6708\u65E5 \u65F6\u5206\u79D2 => \u9650\u5236\u65F6\u95F4\u9009\u62E9\u8303\u56F4\u3001
// \u9700\u8981\u5F00\u542F showTime \u6765\u9650\u5236\u65F6\u5206\u79D2
<RangePicker
    defaultPickerValue={moment("2021-05-01")}
    showTime={{format: "hh\u65F6mm\u5206ss\u79D2"}}
    // \u9650\u5236\u5E74\u6708\u65E5
    disabledDate={disabledDate}
    // \u9650\u5236\u65F6\u5206\u79D2
    disabledTime={disabledTime}
/>

 const disabledDate = (currentDate) => {
    const start = moment("2021-05-01")
    const end = moment("2021-06-01")
// \u5C06\u65F6\u95F4\u9650\u5236\u5728 \u53EA\u80FD\u9009\u62E92021\u5E74 5\u52306\u6708 \u7684\u65F6\u95F4
    return currentDate && currentDate < start
           || currentDate > end
// \u5C06\u65F6\u95F4\u9650\u5236\u5728 \u53EA\u80FD\u9009\u62E9 \u9664\u4E86 202105-202106 \u4E4B\u5916\u4EFB\u610F\u65F6\u95F4
    return currentDate && !(currentDate < start
           || currentDate > end)
 // \u65F6\u95F4\u6700\u65E9\u662F8\u5929\u524D
   return current && current < moment().subtract(8, 'day');
  }

 // \u5DE5\u5177\u51FD\u6570 \u62FF\u5230\u8303\u56F4\u5185\u7684\u6570\u7EC4
 function range(start, end) {const result = [];
 for (let i = start; i < end; i++) { result.push(i);
 }return result;}
const disabledTime = () => {
  return {
    // \u53EA\u80FD\u9009\u62E9 4-24  \u5C0F\u65F6
    disabledHours: () => range(0, 24).splice(4, 20),
    // \u53EA\u80FD\u9009\u62E9 00-29 \u5206\u949F
    disabledMinutes: () => range(30, 60),
    // \u53EA\u80FD\u9009\u62E9 \u9664\u4E8655 56 \u79D2\u7684 \u79D2\u6570
    disabledSeconds: () => [55, 56],
    }
  }`,lang:"js"}),e.a.createElement("h5",{id:"\u7981\u7528-7-\u5929\u8303\u56F4"},e.a.createElement(n.AnchorLink,{to:"#\u7981\u7528-7-\u5929\u8303\u56F4","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7981\u7528 7 \u5929\u8303\u56F4"),e.a.createElement(a.a,{code:`# \u7981\u75287\u5929\u8303\u56F4
<RangePicker
    defaultPickerValue={moment("2021-05-01")}
    showTime={{format: "hh\u65F6mm\u5206ss\u79D2"}}
    disabledDate={disabledDate}
    onCalendarChange={val => setDates((val))}
/>
   const [dates, setDates] = useState([]);

   const disabledDate = (current) => {
// \u9650\u5236 7\u5929\u4EE5\u5185
    if (!dates || dates.length === 0) {return false;}
const tooLate = dates[0] && current.diff(dates[0],'days') > 7;
const tooEarly=dates[1] && dates[1].diff(current, 'days') > 7;
 return tooEarly || tooLate;
// 2021-05-01\u81F32021-06-01 && 7\u5929\u4EE5\u5185
     if (!dates || dates.length === 0) {return false;}
     const start = moment("2021-05-01")
     const end = moment("2021-06-01")
const tooLate=dates[0] && current.diff(dates[0], 'days') > 7;
const tooEarly=dates[1]&&(dates[1]).diff(current, 'days') > 7;
     return  current && (tooEarly || tooLate)
             || current < start || current > end
  };`,lang:"js"}),e.a.createElement("h5",{id:"\u7981\u7528\u5E74\u4EFD"},e.a.createElement(n.AnchorLink,{to:"#\u7981\u7528\u5E74\u4EFD","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7981\u7528\u5E74\u4EFD"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u9700\u8981\u5347\u7EA7\u6700\u65B0\u7248"),e.a.createElement("li",null,'"ant-design-vue": "^1.7.8",')),e.a.createElement(a.a,{code:`<DatePicker format="YYYY" disabledDate={disabledYear} />;

function disabledYear(current) {
  return current.year() === 2021; // disabling 2021
  // return current.year() !== 2021; // disabling everything besides 2021
  // return current.year() !== (new Date).getFullYear(); // disabling everything besides current year
  // return current.year() > 2021; // disabling everything further than 2021
  // return current.year() < 2021; // disabling everything in the past before 2021
  // return [2018, 2019].includes(current.year()); // disabling 2018 and 2019
}`,lang:"js"}),e.a.createElement("h5",{id:"demo"},e.a.createElement(n.AnchorLink,{to:"#demo","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"demo"),e.a.createElement(a.a,{code:`import { useState } from 'react';
import { DatePicker } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment';

const { RangePicker } = DatePicker;

const Test = () => {
  const [dates, setDates] = useState([]);

  // 1.1 \u5C06\u65F6\u95F4\u9650\u5236\u5728 \u53EA\u80FD\u9009\u62E92021\u5E74 5\u52306\u6708 \u7684\u65F6\u95F4
  // const disabledDate = (currentDate) => {
  //   const start = moment("2021-05-01")
  //   const end = moment("2021-06-01")
  //   return currentDate && currentDate < start
  //     || currentDate > end
  // }

  // 1.2 \u5C06\u65F6\u95F4\u9650\u5236\u5728 \u53EA\u80FD\u9009\u62E9 \u9664\u4E86 202105-202106 \u4E4B\u5916\u4EFB\u610F\u65F6\u95F4
  // const disabledDate = (currentDate) => {
  //   const start = moment("2021-05-01")
  //   const end = moment("2021-06-01")
  //   return currentDate && !(currentDate < start
  //     || currentDate > end)
  // }

  // 1.3 \u9650\u52367\u5929\u4E4B\u5185
  // const disabledDate = (current) => {
  //   if (!dates || dates.length === 0) { return false; }
  //   const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
  //   const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
  //   return tooEarly || tooLate;
  // };

  // 1.4 \u9650\u5236 2021-05-01\u81F32021-06-01 && 7\u5929\u4EE5\u5185
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

  // \u5DE5\u5177\u51FD\u6570 \u62FF\u5230\u8303\u56F4\u5185\u7684\u6570\u7EC4
  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  // 2.1 \u9650\u5236\u65F6\u5206\u79D2
  const disabledTime = () => {
    return {
      // \u53EA\u80FD\u9009\u62E9 4-24  \u5C0F\u65F6
      disabledHours: () => range(0, 24).splice(4, 20),
      // \u53EA\u80FD\u9009\u62E9 00-29 \u5206\u949F
      disabledMinutes: () => range(30, 60),
      // \u53EA\u80FD\u9009\u62E9 \u9664\u4E8655 56 \u79D2\u7684 \u79D2\u6570
      disabledSeconds: () => [55, 56],
    };
  };
  return (
    <>
      <RangePicker
        // disabled={[false, true]}
        renderExtraFooter={() => '\u8FD9\u662F\u9875\u811A'}
        bordered={false}
        size={'large'}
        locale={locale}
        // picker="year|quarter|month|week|date|time"
        showTime={{
          format: 'hh\u65F6mm\u5206ss\u79D2',
          defaultValue: [
            moment('01:00:00', 'HH:mm:ss'),
            moment('11:59:59', 'HH:mm:ss'),
          ],
        }}
        defaultPickerValue={moment('2021-05-01')}
        format="YYYY/MM/DD HH:mm:ss"
        ranges={{
          Today: [moment(), moment()],
          \u5F53\u6708: [moment().startOf('month'), moment().endOf('month')],
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
export default Test;`,lang:"js"}),e.a.createElement("h5",{id:"\u9009\u4E2D\u591A\u4E2A\u65E5\u671F"},e.a.createElement(n.AnchorLink,{to:"#\u9009\u4E2D\u591A\u4E2A\u65E5\u671F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9009\u4E2D\u591A\u4E2A\u65E5\u671F"),e.a.createElement(a.a,{code:`#
import React, { useState } from "react";
import { DatePicker, Button } from "antd";
import moment from "moment";
import styles from './index.less';

const MultipleDatePicker = () => {
  // \u9009\u4E2D\u7684\u65E5\u671F timestamp[]
  const [selectedDate, setSelectedDate] = useState([])

  // \u65E5\u671F\u53D1\u751F\u53D8\u5316\u65F6 \u91CD\u590D\u53BB\u91CD \u6CA1\u6709\u5219\u6DFB\u52A0
  const onValueChange = (date) => {
    const newDate = moment(date).startOf("day").valueOf()
    if (selectedDate.includes(newDate)) {
      setSelectedDate([...selectedDate.filter(item => item !== newDate)])
    } else {
      setSelectedDate([...selectedDate, newDate])
    }
  };

  // \u6E32\u67D3\u9009\u4E2D\u65E5\u671F\u5916\u89C2
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
        <Button type='primary' onClick={() => console.log(selectedDate)}>\u786E\u5B9A</Button>
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
# \u914D\u5408 select
https://codesandbox.io/s/antd-reproduction-template-forked-1mos9?file=/index.js`,lang:"js"}),e.a.createElement("h5",{id:"\u7981\u7528\u5230\u67D0\u4E2A\u786E\u5207\u65F6\u95F4"},e.a.createElement(n.AnchorLink,{to:"#\u7981\u7528\u5230\u67D0\u4E2A\u786E\u5207\u65F6\u95F4","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7981\u7528\u5230\u67D0\u4E2A\u786E\u5207\u65F6\u95F4"),e.a.createElement("h6",{id:"class"},e.a.createElement(n.AnchorLink,{to:"#class","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"class"),e.a.createElement(a.a,{code:`import moment from 'moment';
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
}`,lang:"js"}),e.a.createElement("h6",{id:"demo1"},e.a.createElement(n.AnchorLink,{to:"#demo1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"demo1"),e.a.createElement(a.a,{code:`import moment from 'moment';
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
export default Picker1;`,lang:"js"}),e.a.createElement("h6",{id:"demo2"},e.a.createElement(n.AnchorLink,{to:"#demo2","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"demo2"),e.a.createElement(a.a,{code:`import { useState } from 'react';
import moment from 'moment';
import { Form, DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import ToolClass from '../toolClass';
const Picker2 = () => {
  const [form] = Form.useForm();
  const transformFn = new ToolClass();
  const [disabledTimeDates1, setDisabledTimeDates1] = useState([]);
  const [disabledTimeDates2, setDisabledTimeDates2] = useState([]);
  // \u5C06\u8868\u5355\u5206\u4E3A startTime1 startTime2  endTime1 endTime2
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
export default Picker2;`,lang:"js"}),e.a.createElement("h5",{id:"\u52A8\u6001\u70B9\u51FB\u65F6\u5019\u7684\u9ED8\u8BA4\u65F6\u95F4"},e.a.createElement(n.AnchorLink,{to:"#\u52A8\u6001\u70B9\u51FB\u65F6\u5019\u7684\u9ED8\u8BA4\u65F6\u95F4","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u52A8\u6001\u70B9\u51FB\u65F6\u5019\u7684\u9ED8\u8BA4\u65F6\u95F4"),e.a.createElement(a.a,{code:`\u5F53\u70B9\u51FB\u65F6\u95F4\u9009\u62E9\u6846\u4F1A\u9ED8\u8BA4 \u9009\u62E9\u5F53\u524D\u7684\u65F6\u95F4\u3002\u4F46\u662F\u7981\u7528\u5173\u7CFB\u548C\u5B83\u51B2\u7A81\u7684\u65F6\u5019\u5C31\u9700\u8981\u5B9A\u4E49defaultValue
defaultValue \u53EA\u4F1A\u6E32\u67D3\u4E00\u6B21 \u56E0\u6B64\u53EA\u80FD\u5199\u4E00\u4E2A\u56FA\u5B9A\u503C\u503C
\u5982\u679C\u60F3\u4F20\u5165\u53D8\u91CF \u9700\u8981\u5BF9\u8BE5\u7EC4\u4EF6\u8FDB\u884C\u91CD\u65B0\u6E32\u67D3
\u89E3\u51B3\u65B9\u6CD5: \u76F4\u63A5\u5229\u7528 Form.Item shouldUpdate \u65B9\u6CD5\u8FDB\u884C \u52A8\u6001\u6761\u4EF6\u6E32\u67D3
\u5728Form.Item\u5185\u90E8\u901A\u8FC7\u6CE8\u5165\u7684 getFieldValue \u65B9\u6CD5\u6765\u62FF\u5230\u6700\u65B0\u7684\u503C
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
</Form.Item>`,lang:"js"}),e.a.createElement("h4",{id:"form"},e.a.createElement(n.AnchorLink,{to:"#form","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Form"),e.a.createElement("h5",{id:"\u7EC4\u4EF6\u7ED3\u6784"},e.a.createElement(n.AnchorLink,{to:"#\u7EC4\u4EF6\u7ED3\u6784","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7EC4\u4EF6\u7ED3\u6784"),e.a.createElement(a.a,{code:`<Form>
  <Form.Item name=''>
    <Input/>
  </Form.Item>
  <span>\u8F85\u52A9\u4FE1\u606F<span/>

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

</Form>`,lang:"js"}),e.a.createElement("h6",{id:"\u4E0D\u663E\u793A-label"},e.a.createElement(n.AnchorLink,{to:"#\u4E0D\u663E\u793A-label","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E0D\u663E\u793A label"),e.a.createElement(a.a,{code:'label=" " colon={false}',lang:"js"}),e.a.createElement("h5",{id:"form-1"},e.a.createElement(n.AnchorLink,{to:"#form-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Form"),e.a.createElement("h6",{id:"props"},e.a.createElement(n.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"props"),e.a.createElement(a.a,{code:`const [form] = Form.useForm();
<Form
# \u5E38\u7528\u914D\u7F6E
  // form \u7684\u5BF9\u8C61 \u62E5\u6709\u5F88\u591A\u65B9\u6CD5
  form={form}
  // \u5DE6\u4FA7\u8868\u5355\u6587\u5B57\u7684 \u6805\u683C\u5E03\u5C40
  labelCol={{ span:8,offset: 4 }}
  // \u53F3\u4FA7\u8868\u5355\u7684 \u6805\u683C\u5E03\u5C40
  wrapperCol={{ span:8 }}
  // \u7EDF\u4E00\u8BBE\u7F6E\u5185\u90E8\u6240\u6709\u8868\u5355\u7684 size
  size={"large"|"default"|"large"}
  /* \u8868\u5355\u9ED8\u8BA4\u503C \u6CE8\u610F\u5982\u679C\u6709\u5F02\u6B65\u91CD\u65B0\u6E32\u67D3\u7684\u60C5\u51B5
    \u8BF7\u4F7F\u7528 form.setFieldsValue({Form.item.name: xxx})
  */
  initialValues={{ Form.item.name: xxx }}

# \u53EF\u80FD\u7528\u5230\u7684\u914D\u7F6E
  // \u6821\u9A8C\u5931\u8D25\u81EA\u52A8\u6EDA\u52A8\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u5B57\u6BB5
  scrollToFirstError
  // \u5F53\u5B57\u6BB5\u503C\u88AB\u5220\u9664\u65F6  \u4FDD\u7559\u5B57\u6BB5
  preserve={false}


# \u4F7F\u7528\u5F88\u5C11\u7684\u914D\u7F6E
  name='xxx'
  layout={"horizontal"|"vertical"|"inline"}
  // \u624B\u52A8\u63A7\u5236\u53EF\u9009\u548C\u5FC5\u9009\u6837\u5F0F\u7684\u5207\u6362
  requiredMark='optional|true|false'
  /* \u81EA\u5B9A\u4E49\u6821\u9A8C\u6A21\u677F
  const validateMessages = {
  required: '\${label} is required!',
  types: {
    email: '\${label} is not a valid email!',
    number: '\${label} is not a valid number!',
  },
  number: {
    range: '\${label} must be between \${min} and \${max}',
  },
  };*/
  validateMessages={validateMessages}

# \u4E8B\u4EF6
  onFinish={value=> {} }
  onFinishFailed={errorValue=> {} }
  // \u67D0\u4E2A\u8868\u5355\u66F4\u65B0\u5C31\u89E6\u53D1
  onValuesChange={(changeValue,allValues)=> {} }
>
<Form>

# \u5176\u4ED6 label\u53F3\u5BF9\u9F50
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
  },`,lang:"js"}),e.a.createElement("h6",{id:"api"},e.a.createElement(n.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"API"),e.a.createElement(a.a,{code:`// \u624B\u52A8\u8BBE\u7F6E\u8868\u5355\u7684\u503C
 form.setFieldsValue({
      form.item.name : 'xxx',
 })
// \u91CD\u7F6E\u8868\u5355
 form.resetFields();
// \u83B7\u53D6\u8868\u5355\u7684\u503C \u4E0D\u5199\u53C2\u6570\u5C31\u662F \u83B7\u53D6\u6240\u6709\u7684\u8868\u5355
 form.getFieldValue()
 form.getFieldValue(form.item.name)
// \u83B7\u53D6\u5B9E\u4F8B
 form.getFieldInstance('formItemName')
// \u81EA\u5B9A\u4E49\u6821\u9A8C
 form.validateFields()
   .then(values=>{
     success
   })
   .catch(err=>console.log(err))`,lang:"js"}),e.a.createElement("h5",{id:"formitem"},e.a.createElement(n.AnchorLink,{to:"#formitem","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Form.Item"),e.a.createElement("h6",{id:"\u9759\u6001\u8868\u5355"},e.a.createElement(n.AnchorLink,{to:"#\u9759\u6001\u8868\u5355","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u8868\u5355"),e.a.createElement(a.a,{code:`<Form.Item
# \u5E38\u7528\u914D\u7F6E
// \u9690\u85CF\u5192\u53F7
  colon={false}
// \u8868\u5355\u5DE6\u8FB9\u7684\u6587\u5B57 \u4F8B\u5982: username
  label={'username'}
// \u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A\u6570\u636E \u5FC5\u987B
  name={'username'}
// \u6DFB\u52A0\u4E00\u4E2A * \u7B26\u53F7\u7684\u5FC5\u9009\u56FE\u6807
  required
/* \u7279\u6B8A\u8868\u5355\u9700\u8981\u8BBE\u7F6E\u8FD9\u4E2A\u5C5E\u6027\u4EE5\u53CA getValueFromEvent \u4F8B\u5982:
   \u5982\u679C\u662F upload valuePropName="filelist"
   \u5982\u679C\u662F switch valuePropName="checked"
*/
  valuePropName="fileList"
// upload \u8868\u5355\u9700\u8981\u8FD9\u4E2A\u5C5E\u6027 \u5426\u5219\u65E0\u6CD5\u4E0A\u4F20
  getValueFromEvent={(e)=>{
     if(Array.isArray(e))  return e
     return e && e.filelist
  }}
// \u6821\u9A8C\u89C4\u5219
  rules={[
    {
      required: true,
      message: '',
      pattern: /^[3]{1}/,
      max: 5,
      min: 3,
      validateTrigger: "onChange",
      // \u6821\u9A8C\u4E0D\u518D\u963B\u585E\u8868\u5355\u63D0\u4EA4
      warningOnly: true,
      // \u81EA\u5B9A\u4E49\u6821\u9A8C \u9700\u8981\u4EE5 promise \u5F62\u5F0F\u8FD4\u56DE
      validator: (usernameFormRules,value)=>{
        if (value.length > 5) {
        return Promise.reject(new Error('\u4E0D\u80FD\u5927\u4E8E5\u4E2A\u5B57\u7B26'))
        }
        return Promise.resolve("\u683C\u5F0F\u6B63\u786E")
      }
    }
  ]}
# \u53EF\u80FD\u7528\u5230\u7684\u914D\u7F6E
  // \u5173\u95ED\u8868\u5355\u6805\u683C \u81EA\u5B9A\u4E49\u5E03\u5C40
  noStyle
  // \u9519\u8BEF\u63D0\u793A\u4FE1\u606F \u4E0D\u5199\u4F1A\u81EA\u52A8\u751F\u6210
  help={ReactNode}
  // \u6DFB\u52A0\u53CD\u9988\u56FE\u6807 \u6839\u636E validateStatus \u751F\u6210
  hasFeedback
  // \u6821\u9A8C\u72B6\u6001
  validateStatus={'success'|'warning'|'eror'|'validating'}
  // \u6307\u5B9A\u7684\u8868\u5355\u503C\u53D8\u5316\u4E86 \u4ED6\u5C31\u66F4\u65B0
  dependencies={['Form.Item.name']}

# \u4F7F\u7528\u5F88\u5C11\u7684\u914D\u7F6E
  // \u53EF\u9009\u63D0\u793A\u4FE1\u606F
  tooltip={{title:'xxx',icon:</> }}
>

<Form.Item>`,lang:"js"}),e.a.createElement("h6",{id:"\u52A8\u6001\u8868\u5355"},e.a.createElement(n.AnchorLink,{to:"#\u52A8\u6001\u8868\u5355","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u52A8\u6001\u8868\u5355"),e.a.createElement(a.a,{code:`<Form.Item
   shouldUpdate={ (prevValues,curValues)=>
   prevValues.\u8868\u5355name !== curValues.\u8868\u5355name }
>
  { ({getFieldValue}) =>
    // \u5982\u679C\u67D0\u4E2A\u8868\u5355\u503C\u4E3A\u5F20\u4E09 \u5C31\u52A8\u6001\u6E32\u67D3\u8FD9\u4E2A\u65B0\u7684\u8868\u5355
      getFieldValue('Form.Item.name') === 'zhangsan' ? (
          <Form.Item .../>
        ) : null
  }
</Form.Item>`,lang:"js"}),e.a.createElement("h5",{id:"formlist"},e.a.createElement(n.AnchorLink,{to:"#formlist","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Form.List"),e.a.createElement(a.a,{code:`/*
\u81EA\u5B9A\u4E49\u52A8\u6001\u8868\u5355name\u5C5E\u6027
\u5F53\u5B9A\u4E49\u4E86  name={[field.name,'\u540D\u5B57\u540E\u7F00']}
        fieldKey={[field.fieldKey,'\u540D\u5B57\u540E\u7F00']}
\u52A8\u6001\u8868\u5355\u7684name\u5C31\u53D8\u6210\u4E86
        name={[field.name,'\u540D\u5B57\u540E\u7F00']}
        id: zs_\u6570\u5B57_\u540D\u5B57\u540E\u7F00   
*/
<Form form={form}>
  <Form.List name="zs" initialValue={[1, 2, 3]}>
    {(fields, { remove, add, move }) => (
      <>
        {fields.map((field, index) => (
          <Form.Item key={field.key} noStyle>
            <Form.Item
              {...field}
              name={[field.name, '\u540D\u5B57\u540E\u7F00']}
              fieldKey={[field.fieldKey, '\u540D\u5B57\u540E\u7F00']}
            >
              <Input />
            </Form.Item>
            {fields.length > 1 ? (
              <Button onClick={() => remove(field.name)}> \u5220\u9664 </Button>
            ) : null}
            <Button onClick={() => move(index, index - 1)}>\u4E0A\u79FB</Button>
          </Form.Item>
        ))}
        <Form.Item>
          <Button onClick={() => add(\u8868\u5355\u7684\u503C, \u4F4D\u7F6E)}>\u6DFB\u52A0</Button>
        </Form.Item>
      </>
    )}
  </Form.List>
</Form>`,lang:"js"}),e.a.createElement("h5",{id:"formprovider"},e.a.createElement(n.AnchorLink,{to:"#formprovider","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Form.Provider"),e.a.createElement(a.a,{code:`<Form.Provider
  // \u5B50\u8868\u5355\u5B57\u6BB5\u66F4\u65B0\u65F6\u89E6\u53D1
  onFormChange
  // \u5B50\u8868\u5355\u63D0\u4EA4\u65F6\u89E6\u53D1
  onFormFinish={(name, { values, forms }) => {
    if (name === 'form1') {
      const { baseForm } = forms;
      const \u53D8\u91CF = baseForm.getFieldValue('\u53D8\u91CF') || [];
      baseForm.setFieldsValue({ \u53D8\u91CF: [...\u53D8\u91CF, values] });
    }
  }}
>
  <Form name="baseForm">
    <Form name="form1">...</Form>
    <Form name="form2">...</Form>
  </Form>
</Form.Provider>`,lang:"js"}),e.a.createElement("h5",{id:"\u57FA\u672C\u6821\u9A8C-demo"},e.a.createElement(n.AnchorLink,{to:"#\u57FA\u672C\u6821\u9A8C-demo","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u6821\u9A8C demo"),e.a.createElement(a.a,{code:`import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const Test = () => {
  const [form] = Form.useForm();
  const myValidator = (usernameFormRules, value) => {
    if (value.length > 5) {
      return Promise.reject(new Error('\u4E0D\u80FD\u5927\u4E8E5\u4E2A\u5B57\u7B26'));
    }
    return Promise.resolve('\u683C\u5F0F\u6B63\u786E');
  };
  const formRules = {
    username: [
      {
        required: true,
        message: '\u7528\u6237\u540D\u662F\u5FC5\u586B\u9879',
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
        message: '\u5BC6\u7801',
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
        <Button htmlType="submit">\u63D0\u4EA4</Button>
        <Button htmlType="button" onClick={ResetForm}>
          \u91CD\u7F6E
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Test;`,lang:"js"}),e.a.createElement("h5",{id:"\u52A8\u6001\u6DFB\u52A0-demo"},e.a.createElement(n.AnchorLink,{to:"#\u52A8\u6001\u6DFB\u52A0-demo","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u52A8\u6001\u6DFB\u52A0 demo"),e.a.createElement(a.a,{code:`import React from 'react';
import { Form, Button, Select } from 'antd';
const { Option } = Select;

const Test = () => {
  const [form] = Form.useForm();
  let sights = {
    beijing: ['\u957F\u57CE', '\u6545\u5BAB'],
    hangzhou: ['\u897F\u6E56', '\u96F7\u5CF0\u5854'],
  };
  return (
    <Form form={form}>
      <Form.Item label="\u5730\u70B9" name="place">
        <Select onChange={() => form.setFieldsValue({ att: [] })}>
          <Option value="beijing">\u5317\u4EAC</Option>
          <Option value="hangzhou">\u676D\u5DDE</Option>
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
                    label="\u98CE\u666F"
                    // \u52A8\u6001\u589E\u51CF\u5B57\u6BB5\u9700\u8981\u8FD9\u6837
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
                  <Button onClick={() => remove(field.name)}>\u5220\u9664</Button>
                </Form.Item>
              </Form.Item>
            ))}
            <Button type="dashed" onClick={() => add()} block>
              {' '}
              \u6DFB\u52A0
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
export default Test;`,lang:"js"}),e.a.createElement("h5",{id:"\u4E00\u884C\u591A\u4E2A\u8868\u5355"},e.a.createElement(n.AnchorLink,{to:"#\u4E00\u884C\u591A\u4E2A\u8868\u5355","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E00\u884C\u591A\u4E2A\u8868\u5355"),e.a.createElement(a.a,{code:`/* \u6CE8\u610F
1.Form.Item \u5185\u53EA\u80FD\u653E\u7F6E\u4E00\u4E2A\u8868\u5355 \u4E0D\u8981\u653E\u7F6E\u5176\u4ED6\u5185\u5BB9
  \u5982\u679C\u8981\u6DFB\u52A0\u6587\u5B57\u7B49 \u653E\u5728 Form.Item\u7EC4\u4EF6 \u7684\u524D\u9762\u6216\u8005\u540E\u9762
2.InputNumber \u4E0D\u80FD\u76F4\u63A5\u89E6\u53D1\u6570\u5B57\u81EA\u52A8\u53CC\u5411\u7ED1\u5B9A
  \u9700\u8981\u8FD9\u6837
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
  \u6216\u8005
  <Form.Item>
    <Form.Item name='xxx'>
      <InputNumber/>
    </Form.Item>
  </Form.Item>
3.\u4E3B\u8981\u5916\u5C42\u5148\u7528 \u4E00\u4E2AForm.Item\u5305\u88F9 \u8FD9\u4E2AForm.Item \u4E0D\u7ED1\u5B9Aname
  \u53EA\u7ED1\u5B9A lable \u548C style \u7B49
*/
<Form.Item label="\u540D\u79F0\u4E00" style={{ marginBottom: 0 }}>

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

    <Form.Item label="InputNumber\u8868\u5355" style={{ height: 32 }}>
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
4. \u76F4\u63A5\u901A\u8FC7 Row Col \u63A7\u5236\u5E03\u5C40
<Row>
  <Col span={12}>
    <Form.Item />
  </Col>
    <Col span={12}>
      <Form.Item />
  </Col>
</Row>
5. labelCol wrapperCol \u53EF\u4EE5\u6307\u5B9Apx\u5BBD\u5EA6
labelCol={{flex:'0 0 100px'}}
wrapperCol={{flex:'0 0 100px'}}
style={{ display: 'inline-flex',  width: 'calc(45% - 4px)' }}
# \u4F7F\u7528\u6805\u683C\u7684
offset push pull`,lang:"js"}),e.a.createElement("h5",{id:"\u62D6\u52A8\u6392\u5E8F"},e.a.createElement(n.AnchorLink,{to:"#\u62D6\u52A8\u6392\u5E8F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u62D6\u52A8\u6392\u5E8F"),e.a.createElement(a.a,{code:`npm install react-sortable-hoc --save
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
      name: "\u5168\u7AD9-\u65B0\u7528\u6237\u6EE1\u51CF\u6D3B\u52A8",
      code: 1,
      index: 0
    },
    {
      key: '2',
      name: "\u5168\u7AD9-\u6240\u6709\u7528\u6237\u6EE1\u6298\u6D3B\u52A8",
      code: 2,
      index: 1
    },
    {
      key: '3',
      name: "G\u7AD9\u4E0A\u65B0-\u7AD9\u70B9\u8BA2\u5355\u7ACB\u51CF\u6D3B\u52A8",
      code: 3,
      index: 2
    },
    {
      key: '4',
      name: "G\u7AD9\u4E0A\u65B0-\u7AD9\u70B9\u8BA2\u5355\u7ACB\u51CF\u6D3B\u52A8",
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
export default Demo`,lang:"js"}),e.a.createElement("h5",{id:"upload"},e.a.createElement(n.AnchorLink,{to:"#upload","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"upload"),e.a.createElement(a.a,{code:`#
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
              \u4E0A\u4F20\u56FE\u7247
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
  };`,lang:"js"}),e.a.createElement("h5",{id:"\u53EA\u83B7\u53D6\u53D8\u5316\u7684\u8868\u5355"},e.a.createElement(n.AnchorLink,{to:"#\u53EA\u83B7\u53D6\u53D8\u5316\u7684\u8868\u5355","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53EA\u83B7\u53D6\u53D8\u5316\u7684\u8868\u5355"),e.a.createElement(a.a,{code:`<Form onFieldsChange={passChangeFormItems} />;
const [changeFormItems, setChangeFormItems] = useState({});

const passChangeFormItems = (changedFields, allFields) => {
  // \u627E\u5230\u66F4\u6539\u9879 \u8FC7\u6EE4\u91CD\u590D\u9879 \u6DFB\u52A0\u6700\u65B0\u7684value
  let newChangeFieldsName = changedFields?.[0]?.name?.[0];
  let newChangeValue = changedFields?.[0]?.value;
  setChangeFormItems(preval => {
    let obj = { ...preval, [newChangeFieldsName]: newChangeValue };
    return obj;
  });
};`,lang:"js"}),e.a.createElement("h4",{id:"\u8868\u5355\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u8868\u5355\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u7EC4\u4EF6"),e.a.createElement("h5",{id:"input"},e.a.createElement(n.AnchorLink,{to:"#input","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Input"),e.a.createElement(a.a,{code:`# Input
  <input
     // \u51FA\u73B0\u5220\u9664\u5FEB\u6377\u56FE\u6807
     allowClear
     // \u524D\u7F00\u56FE\u6807
     prefix
     // \u540E\u7F6E\u56FE\u6807
     suffix
     // \u662F\u5426\u6709\u8FB9\u6846
     bordered
     // \u524D\u7F6E\u6807\u7B7E addonAfter
     addonBefore={ReactNode}
     addonAfter={ReactNode}
     // \u63A7\u5236
     value={inputValue}


     type="text"
     placeholder
     defaultValue=''
     maxLength={20}
     disabled
     style
     size

     onChange
     // \u6309\u4E0B\u56DE\u8F66\u952E\u540E
     onPressEnter
/>

# Input.Password
<Input.Password
  // \u81EA\u5B9A\u4E49\u9690\u85CF\u56FE\u6807
  iconRender={(visible)=> visible?\u9690\u85CF\u56FE\u6807:\u663E\u793A\u56FE\u6807 }
  // \u662F\u5426\u5F00\u542F\u5207\u6362\u56FE\u6807
  visibilityToggle={false}
/>

# Input.TextArea
<Input.TextArea
  // \u81EA\u9002\u5E94\u9AD8\u5EA6
  autoSize={boolean | {minRows:2,maxRows:6}}
  // \u662F\u5426\u663E\u793A\u5B57\u6570
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
  // \u662F\u5426\u6709\u786E\u8BA4\u56FE\u6807 \u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807
  enterButton={boolean|ReactNode}
  loading
  // \u70B9\u51FB\u641C\u7D22 \u6E05\u9664 \u6309\u4E0B\u56DE\u8F66\u952E\u65F6\u7684\u56DE\u8C03
  onSearch
/>
# Input.Group
<Input.Group
  // \u662F\u5426\u91C7\u7528\u7D27\u51D1\u6A21\u5F0F
  compact={boolean}
  size="large|default|small"
/>`,lang:"js"}),e.a.createElement("h5",{id:"inputnumber"},e.a.createElement(n.AnchorLink,{to:"#inputnumber","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Inputnumber"),e.a.createElement(a.a,{code:`# InputNumber
<InputNumber
  defaultValue
  min
  // \u6700\u5927\u4F4D\u6570
  max
  size
  disabled
  addonBefore
  addonAfter
  bordered
  // \u662F\u5426\u91C7\u7528\u952E\u76D8\u5FEB\u6377\u952E
  keyboard={boolean}
  // \u6700\u53F3\u8FB9\u64CD\u4F5C\u6309\u94AE\u6BCF\u6B21\u6DFB\u52A0\u7684\u6570\u503C
  step="0.00000000000001"
  // \u652F\u6301\u9AD8\u7CBE\u5EA6\u5C0F\u6570 onChange\u4F1A\u8FD4\u56DEstring
  stringMode
  // \u5C0F\u6570\u70B9\u4F4D\u6570
  precision={1}
  // \u683C\u5F0F\u5316
  formatter={(value)=>}
  // \u683C\u5F0F\u5316\u7684\u683C\u5F0F
  parser={(value)=>}

  onChange
/>`,lang:"js"}),e.a.createElement("h5",{id:"checkbox"},e.a.createElement(n.AnchorLink,{to:"#checkbox","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Checkbox"),e.a.createElement(a.a,{code:`const CheckboxGroup = Checkbox.Group;

<Checkbox
  disabled
  // \u5168\u9009\u72B6\u6001
  indeterminate
  // \u9ED8\u8BA4\u9009\u4E2D
  defaultChecked
  onChange
>
   \u5168\u9009
</Checkbox>

<CheckboxGroup
  option={['a','b','c']}
  // \u662F\u5426\u9009\u4E2D
  value={['a', 'b', 'c']}
  onChange={(checkArr)=>}
  diabled
/>
# \u5168\u9009demo
import { useState } from 'react'
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
const Test = () => {
  const option = ['Apple', 'Pear', 'Orange']
  // \u5168\u9009\u6309\u94AE\u7684 \u72B6\u6001
  const [state, setState] = useState(false)
  // checkbox \u7684\u9009\u4E2D\u9879 \u6570\u7EC4\u6570\u636E
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
        \u5168\u9009
      </Checkbox>
      <CheckboxGroup
           onChange={(e) => setData(e)}
           options={option}
           value={data}
      />
    </>
  )
}`,lang:"js"}),e.a.createElement("h5",{id:"select"},e.a.createElement(n.AnchorLink,{to:"#select","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Select"),e.a.createElement(a.a,{code:`#
<Select
  defaultValue='string|['a','b']'
  style
  disabled
  loading
  allowClear
  // \u53EF\u4EE5\u641C\u7D22
  showSearch
  // \u5B9A\u5236\u8FC7\u6EE4\u5B57\u6BB5
  optionFilterProp={children|label}
  // \u8FC7\u6EE4\u529F\u80FD
  filterOption={(input,option)=>option.children}
  // \u591A\u9009
  mode="multiple"
  // \u5B9A\u5236\u70B9\u51FB\u540E\u7684value  \u6839\u636Eoption\u7684\u5C5E\u6027
  optionLabelProp={Option.name | lable ...}
  // \u53EF\u4EE5\u81EA\u5B9A\u4E49\u8F93\u5165
   mode="tags"
  // \u5F00\u542F\u540E onChange\u53EF\u4EE5\u62FF\u5230 \u8282\u70B9\u7684 label\u5C5E\u6027 \u53C2\u6570\u4F1A\u53D8\u6210\u4E00\u4E2A\u5BF9\u8C61 \u5E76\u4E14\u53EF\u4EE5\u5BF9\u8C61\u5F0FsetFieldsValue
  labelInValue
  // \u81EA\u5B9A\u4E49\u6807\u7B7E\u6837\u5F0F
  tagRender={(props)=>}
  // \u5F53\u6CA1\u6570\u636E\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9
  notFoundContent={ReactNode}
  // \u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879
  defaultActiveFirstOption={boolean}
  // \u662F\u5426\u628A label \u5C5E\u6027\u4E5F\u653E\u5728\u6570\u636E\u4E2D
  labelInValue

  // \u5F53\u70B9\u51FB\u4E0B\u62C9\u65F6\u89E6\u53D1 \u5728\u8FD9\u91CC\u53D1\u8D77\u8BF7\u6C42
  onDropdownVisibleChange={(open)=>open&&Ajax}

  onChange
  onSearch
>
  <Option value='' />
</Select>
# \u5206\u7EC4
<Select
>
  <OptGroup label='xxx'>
    <Option/>
  </OptGroup>
</Select>


# \u70B9\u51FB\u7981\u7528\u7684\u6309\u94AE
getPopupContainer dom\u6E32\u67D3\u5230\u5F53\u524D\u9875\u9762
 const handlebindDisabledElementsClick = () => {
console.Log(!form.getFieldValue('custName' ) ? .1abel)
if(!form.getFieldValue('custName')?.value) return false
const container = document.getElementById('salesMgrName_Container')
const disabledElements = [...container.getElementsByClassName('ant-select-item-option-disabled')] if(disabledElements.length != 0 && disabledElements[0] != undefined) {
disabledElements.forEach\uFF08item \uFF1D\uFF1E item.onclick \uFF1D function () \uFF5B message.error\uFF08\uFF07\u672A\u5B8C\u6210\u7ECF\u529E\u4EBA\u5BA1\u6279\uFF07\uFF09\uFF5D\uFF09 }
 }`,lang:"js"}),e.a.createElement("h5",{id:"radio"},e.a.createElement(n.AnchorLink,{to:"#radio","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Radio"),e.a.createElement(a.a,{code:`# Radio.Button
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

# \u5782\u76F4\u7684\u5355\u9009\u6309\u94AE
<Radio.Group>
 <Space direction="vertical" />
   <Radio/>
</Radio.Group>
 \u5305\u88F9\u6BCF\u4E00\u4E2A\u5B50\u9879\u5C31\u884C`,lang:"js"}),e.a.createElement("h5",{id:"cascader"},e.a.createElement(n.AnchorLink,{to:"#cascader","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Cascader"),e.a.createElement(a.a,{code:`<Cascader
  option={\u6570\u636E}
  // \u81EA\u5B9A\u4E49\u6570\u636E\u6E90 \u5B57\u6BB5 \u9ED8\u8BA4\u662F children value label
  fieldNames={{
     label: 'name', value: 'code', children: 'items'
  }}
  onChange={onChange}
  placeholder
  size="large|small"
  // \u7981\u7528\u6548\u679C
  \u5728\u6570\u636E\u91CC\u52A0\u5165 diabled:true
  defaultValue={['\u4E00\u7EA7','\u4E8C\u7EA7','\u4E09\u7EA7']}
  // \u89E6\u53D1\u65B9\u5F0F
  expandTrigger="hover"
/>

#\u52A0\u8F7D\u7701\u5E02\u533A
	:fieldNames="item.fieldNames"
 fieldNames: {
      label: 'name', value: 'code', children: 'cascadeDataVoList'
    },
    :showSearch='{ filter }'
	filter: (inputValue, path) => {
			return path.some(option => option.name.indexOf(inputValue) > -1);
		},
# \u5F02\u6B65


# \u56DE\u663E
form.setFieldsValue([1,2,3])
\u901A\u8FC7displayRender\u81EA\u5B9A\u4E49\u663E\u793A
\u8868\u5355\u786E\u8BA4\u7684\u65F6\u5019 typeof\u5224\u65AD\u7C7B\u578B \u53D6\u503C`,lang:"js"}),e.a.createElement("h5",{id:"upload-1"},e.a.createElement(n.AnchorLink,{to:"#upload-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Upload"),e.a.createElement("h6",{id:"\u903B\u8F91"},e.a.createElement(n.AnchorLink,{to:"#\u903B\u8F91","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u903B\u8F91"),e.a.createElement(a.a,{code:`# \u903B\u8F91
// \u4E0A\u4F20\u903B\u8F91
1. \u6A21\u62DF\u70B9\u51FB\u4E8B\u4EF6
2. change \u4E8B\u4EF6 input type=file \u5143\u7D20\u7684 files[0] \u5C5E\u6027
3. \u751F\u6210\u5185\u5B58\u5730\u5740 URL.creareObjectURL(files[0])  \u8BA9img.src = xxx
4. \u4E0A\u4F20\u56FE\u7247
   A => \u4E8C\u8FDB\u5236\u5F62\u5F0F \u4EE5multpart/form-data
   B => \u8F6C\u6362\u6210 Base64\u4F4D\u5B57\u7B26\u4E32 \u4F20\u7ED9\u670D\u52A1\u5668
5. \u56FE\u7247\u88C1\u5207
   \u524D\u7AEF\u88C1\u5207 => \u5C06\u88C1\u5207\u533A\u57DF\u751F\u6210\u5355\u72EC\u7684\u56FE\u7247 \u83B7\u53D6\u56FE\u7247\u7684\u4E34\u65F6\u8DEF\u5F84
   \u540E\u7AEF\u88C1\u5207 => \u83B7\u53D6\u88C1\u5207\u6846\u76F8\u5BF9\u4E8E\u539F\u56FE\u7684\u5750\u6807 \u5C06\u88C1\u5207\u533A\u57DF\u5750\u6807\u4EE5\u53CA\u539F\u56FE\u4E34\u65F6\u6587\u4EF6\u4F20\u7ED9\u540E\u7AEF\u8FDB\u884C\u56FE\u7247\u88C1\u5207`,lang:"js"}),e.a.createElement("h6",{id:"props-1"},e.a.createElement(n.AnchorLink,{to:"#props-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"props"),e.a.createElement(a.a,{code:`# upload
import { Upload } from 'antd';
<Upload
 ## \u57FA\u7840\u5C5E\u6027
  // \u4E0A\u4F20\u7684\u5730\u5740
  // \u5982\u679C\u4E0D\u5199\u7684\u8BDD \u7EBF\u4E0A\u73AF\u5883\u4F1A\u9ED8\u8BA4\u8BF7\u6C42\u8FD9\u4E2A\u5730\u5740 \u9700\u8981\u540E\u7AEF\u5BF9\u4E00\u4E2A\u6307\u5B9A\u7684 \u63A5\u53E3 \u8FD4\u56DE\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32
  action = "htttp://xxx"
  // \u8BBE\u7F6E\u8BF7\u6C42\u5934
  headers={{ authorization: 'xxx' }}
  // \u9650\u5236\u4E0A\u4F20\u6570\u91CF
  maxCount={1}
  // \u652F\u6301\u591A\u9009
  multiple
  // \u9650\u5236\u6587\u4EF6\u7C7B\u578B
  accept='.xls, .xlsx'
  // \u5173\u95ED\u6587\u4EF6\u4FE1\u606F\u663E\u793A
  showUploadList= { false }
  // \u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5185\u6240\u6709\u6587\u4EF6
  directory
  // \u8FDB\u5EA6\u6761 \u548C \u663E\u793A\u98CE\u683C
  listType='text | picture | picture-card'
  // \u81EA\u5B9A\u4E49 \u6700\u53F3\u4FA7\u4EA4\u4E92\u56FE\u6807
  showUploadList = {
    showDownloadIcon: true,
    downloadIcon: 'download ',
    showRemoveIcon: true,
    removeIcon: <\u81EA\u5B9A\u4E49Icon onClick={e =>  />
  }
  // \u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F
  progress:{
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: percent =>
       \`\${parseFloat(percent.toFixed(2))}%\`,
  }
  // \u9ED8\u8BA4\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868
  defaultFileList:[
    {
      uid:"1",
      name:"",
      status:"done",
      response:"Server Error 500",
      url:"xxx"
    }
  ]

 ## \u4E8B\u4EF6
  // \u6539\u53D8\u4E8B\u4EF6
- onChange={(info)=>
       info.file.status == 'uploading |done|error'}
  // beforeUpload \u9650\u5236\u56FE\u7247\u5927\u5C0F\u548C\u683C\u5F0F \u6216\u8005 \u52A0\u6C34\u5370
    // \u8FD9\u91CC return false \u5C31\u4E0D\u663E\u793A\u8FDB\u5EA6\u6761
    // \u9700\u8981\u5728\u8FD9\u91CC return false \u4E0D\u7136\u4F1A\u62A5405
- beforeUpload(file){
     file.type == "images/jpeg"
     file.size / 1024 / 1024 < 2
     return file.type === 'image/png' ? true
         : Upload.LIST_IGNORE; }
  //  \u9884\u89C8\u4E8B\u4EF6
  onPreview={(file)=>{}}
  //  \u79FB\u9664\u6587\u4EF6\u7684\u56DE\u8C03
  onRemove(file)
  // \u6587\u4EF6\u62D6\u62FD\u8FDB\u4E0A\u4F20\u533A\u57DF\u7684\u56DE\u8C03
  onDrop
  // \u4E0B\u8F7D\u6587\u4EF6\u7684\u56DE\u8C03
  onDownload
/>`,lang:"js"}),e.a.createElement("h6",{id:"\u62D6\u62FD-\u4E0A\u4F20\u4E0E\u6392\u5E8F"},e.a.createElement(n.AnchorLink,{to:"#\u62D6\u62FD-\u4E0A\u4F20\u4E0E\u6392\u5E8F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u62D6\u62FD \u4E0A\u4F20\u4E0E\u6392\u5E8F"),e.a.createElement(a.a,{code:`# \u62D6\u62FD\u4E0A\u4F20
const { Dragger } = Upload;
<Dragger
  onDrop(e)=>{}
/>
# \u4E0A\u4F20\u5217\u8868\u62D6\u62FD\u6392\u5E8F
  react-dnd`,lang:"js"}),e.a.createElement("h6",{id:"\u4E0A\u4F20\u524D\u88C1\u5207\u56FE\u7247"},e.a.createElement(n.AnchorLink,{to:"#\u4E0A\u4F20\u524D\u88C1\u5207\u56FE\u7247","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E0A\u4F20\u524D\u88C1\u5207\u56FE\u7247"),e.a.createElement(a.a,{code:`# \u4E0A\u4F20\u524D\u88C1\u5207\u56FE\u7247
 yarn add antd-img-crop
 import 'antd/es/modal/style';
 import 'antd/es/slider/style';
 import ImgCrop from 'antd-img-crop';
  <ImgCrop
    // \u6DFB\u52A0 \u65CB\u8F6C \u7F51\u683C \u529F\u80FD
    rotate
    grid
    // \u88C1\u5207\u5F62\u72B6 \u56FE\u7247\u8D28\u91CF
    shape='rect | round'
    quality={0-1}
    // \u5F39\u7A97\u6807\u9898 \u5F39\u7A97\u5BBD\u5EA6 \u5F39\u7A97\u786E\u5B9A\u6587\u5B57 \u5F39\u7A97\u53D6\u6D88\u6587\u5B57
    modalTitle='\u7F16\u8F91\u56FE\u7247'
    modalWidth={520}
    modalOk='\u786E\u5B9A'
    modalCancel='\u53D6\u6D88'
    // \u70B9\u51FB\u786E\u5B9A \u53D6\u6D88\u7684 \u4E8B\u4EF6
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

# \u70B9\u51FB\u6A21\u6001\u6846\u4F9D\u7136\u80FD\u70B9\u51FB\u53CA\u5176\u4ED6\u533A\u57DF
point-events: none;
getContainer \u6302\u8F7D\u5230\u5F53\u524D\u9875\u9762`,lang:"js"}),e.a.createElement("h6",{id:"\u56FE\u7247\u52A0\u6C34\u5370"},e.a.createElement(n.AnchorLink,{to:"#\u56FE\u7247\u52A0\u6C34\u5370","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u56FE\u7247\u52A0\u6C34\u5370"),e.a.createElement(a.a,{code:`# \u56FE\u7247\u52A0\u6C34\u5370
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
}`,lang:"js"}),e.a.createElement("h6",{id:"\u8F6C\u6362-bas64"},e.a.createElement(n.AnchorLink,{to:"#\u8F6C\u6362-bas64","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8F6C\u6362 bas64"),e.a.createElement(a.a,{code:`# \u8F6C\u6362 base 64
const getBase64 = (img, cb) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => cb(reader.result));
  reader.readAsDataURL(img);
};
getBase64(info.file.originFileObj,(imgUrl)=>{
  // \u5C06\u8F6C\u540E\u540E\u7684 \u56FE\u7247\u5730\u5740\u4FDD\u5B58
})`,lang:"js"}),e.a.createElement("h6",{id:"excel-demo"},e.a.createElement(n.AnchorLink,{to:"#excel-demo","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"excel demo"),e.a.createElement(a.a,{code:`const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

<Form.Item
           valuePropName="fileList"
           label="\u9009\u62E9\u6587\u4EF6"
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
                      \`\${parseFloat(percent.toFixed(0))}%\`,
                  }}
                  onChange={(info) => {
     if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                  }
                  if (info.file.status === 'done') {
                    message.success(
                      \`\${info.file.name} file uploaded successfully\`,
                    );
                  } else if (info.file.status === 'error') {
                    message.error(\`\${info.file.name} file upload failed.\`);
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
        });`,lang:"js"}),e.a.createElement("h6",{id:"progress-\u6837\u5F0F"},e.a.createElement(n.AnchorLink,{to:"#progress-\u6837\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"progress \u6837\u5F0F"),e.a.createElement(a.a,{code:`.ant-progress-inner {
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
    }`,lang:"js"}),e.a.createElement("h4",{id:"mentions"},e.a.createElement(n.AnchorLink,{to:"#mentions","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Mentions"),e.a.createElement("h4",{id:"rate"},e.a.createElement(n.AnchorLink,{to:"#rate","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Rate"),e.a.createElement("h4",{id:"slider"},e.a.createElement(n.AnchorLink,{to:"#slider","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Slider"),e.a.createElement("h4",{id:"switch"},e.a.createElement(n.AnchorLink,{to:"#switch","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Switch"),e.a.createElement("h4",{id:"timepicker"},e.a.createElement(n.AnchorLink,{to:"#timepicker","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"TimePicker"),e.a.createElement("h4",{id:"transfer"},e.a.createElement(n.AnchorLink,{to:"#transfer","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Transfer"),e.a.createElement("h4",{id:"treeselect"},e.a.createElement(n.AnchorLink,{to:"#treeselect","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"TreeSelect"),e.a.createElement("h3",{id:"\u6570\u636E\u5C55\u793A"},e.a.createElement(n.AnchorLink,{to:"#\u6570\u636E\u5C55\u793A","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6570\u636E\u5C55\u793A"),e.a.createElement("h4",{id:"avatar"},e.a.createElement(n.AnchorLink,{to:"#avatar","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Avatar"),e.a.createElement(a.a,{code:`#
<Avatar
  size="large|small"
  shape="circle|square"
  // \u6587\u5B57\u5934\u50CF
  gap=''
  src='string|ReactNode'
  icon='ReactNode'
/>`,lang:"js"}),e.a.createElement("h4",{id:"badge"},e.a.createElement(n.AnchorLink,{to:"#badge","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Badge"),e.a.createElement(a.a,{code:`#
<Badge
  color=""
  count={5}
  // \u6700\u5927\u6570\u5B57
  overflowCount={10}
  // \u53EA\u663E\u793A\u4E00\u4E2A\u5C0F\u7EA2\u70B9
  dot
  //\u5C0F\u5706\u70B9\u72B6\u6001
  status="success|error| default| processing| warning"
  //\u72B6\u6001\u6587\u672C
  text=''
/>
# \u7EF8\u5E26


 <Badge.Ribbon text="" color='' placement="start |end ">
      <Card title="Pushes open the window" size="small" />
  </Badge.Ribbon>`,lang:"js"}),e.a.createElement("h4",{id:"calendar"},e.a.createElement(n.AnchorLink,{to:"#calendar","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Calendar"),e.a.createElement("h4",{id:"card"},e.a.createElement(n.AnchorLink,{to:"#card","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Card"),e.a.createElement(a.a,{code:`<Card
  bordered={false}
  // \u53F3\u4E0A\u89D2\u6E32\u67D3\u4E00\u4E2A\u5143\u7D20
  extra={<a />}
  title
  style={{}}
  bodyStyle={{}}
  headStyle={{}}
/>`,lang:"js"}),e.a.createElement("h4",{id:"carousel"},e.a.createElement(n.AnchorLink,{to:"#carousel","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Carousel"),e.a.createElement("h4",{id:"collapse"},e.a.createElement(n.AnchorLink,{to:"#collapse","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Collapse"),e.a.createElement("h4",{id:"comment"},e.a.createElement(n.AnchorLink,{to:"#comment","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Comment"),e.a.createElement("h4",{id:"descriptions"},e.a.createElement(n.AnchorLink,{to:"#descriptions","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Descriptions"),e.a.createElement(a.a,{code:`#
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
<Descriptions/>`,lang:"js"}),e.a.createElement("h4",{id:"empty"},e.a.createElement(n.AnchorLink,{to:"#empty","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Empty"),e.a.createElement(a.a,{code:`<Empty
  // \u5185\u7F6E\u56FE\u7247
  image={Empty.PRESENTED_IMAGE_DEFAULT}
/>`,lang:"js"}),e.a.createElement("h4",{id:"image"},e.a.createElement(n.AnchorLink,{to:"#image","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Image"),e.a.createElement(a.a,{code:`<Image
  width
  src
  placeholder
  preview
  src='error'
  // \u52A0\u9519\u9519\u8BEF\u56FE\u7247
  fallback=''
>
</Image>
#
  <Image.PreviewGroup preview>
    <Image/>
  </>`,lang:"js"}),e.a.createElement("h4",{id:"list"},e.a.createElement(n.AnchorLink,{to:"#list","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"List"),e.a.createElement("h4",{id:"popover"},e.a.createElement(n.AnchorLink,{to:"#popover","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Popover"),e.a.createElement("h4",{id:"statistic"},e.a.createElement(n.AnchorLink,{to:"#statistic","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Statistic"),e.a.createElement(a.a,{code:`<Statistic
  title=""
  value={112893}
  // \u6570\u503C\u7684\u6837\u5F0F
  valueStyle={{}}
  // \u5C0F\u6570\u70B9\u4F4D\u6570
  precision={2}
  prefix={<Icon />}
  suffix={\u5143\u7D20\u8282\u70B9}
/>
 # \u5012\u8BA1\u65F6\u7EC4\u4EF6
 const { Countdown } = Statistic;
let deadline=Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
 <Countdown title="Countdown" value={deadline} onFinish={onFinish} format="D \u5929 HH:mm:ss:SSS"/>`,lang:"js"}),e.a.createElement("h4",{id:"table"},e.a.createElement(n.AnchorLink,{to:"#table","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Table"),e.a.createElement("h5",{id:"table-1"},e.a.createElement(n.AnchorLink,{to:"#table-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Table"),e.a.createElement(a.a,{code:`<Table
# \u6837\u5F0F\u914D\u7F6E
  bordered={true}
  size={'default'|'middle'|'small'}
// fixed \u4E0D\u4F1A\u5F71\u54CD\u54CD\u5E94\u5F0F\u5E03\u5C40
  tableLayout={'auto'|'fixed'}
/*
  \u6591\u9A6C\u6761\u7EB9
  .light {background-color: #ffffff; }
  .dark {background-color: #fbfbfb;}
*/
  rowClassName={(record,index)=>index%2===0?'light':'dark'}
// \u4E0D\u663E\u793A\u8868\u5934
  showHeader={boolean}
  title={(\u5F53\u9875\u6570\u636E)=>'title'}
  footer={(\u5F53\u9875\u6570\u636E)=>'title'}
/*  colSpan \u5408\u5E76\u5355\u5143\u683C  index={0} \u6307\u5B9A\u662F\u7B2C\u51E0\u4E2A
 <Table.Summary fixed>
         <Table.Summary.Row>
            <Table.Summary.Cell colSpan={2} index={0}>
               Summary
            </Table.Summary.Cell>
         </Table.Summary.Row>
 </Table.Summary>
*/
  summary={(\u5F53\u9875\u6570\u636E)=>ReactNode}

# \u57FA\u672C\u914D\u7F6E
  dataSource={dataSource}
  columns={columns}
  loading
  // \u5206\u9875\u7EC4\u4EF6, false \u4E0D\u663E\u793A
  pagination:{{
    total,
    current,
    pageSize,
    pageSizeOptions:[10, 20, 50, 100]
    showTotal: (total) => \`\u5171 \${total} \u6761\u6570\u636E\`,
    onChange=((currentPage)=>fetch)
  }}
  onChange={(pagination,filters,sorter,extra)}

# \u53EF\u80FD\u4F1A\u7528\u5230\u7684\u914D\u7F6E
// \u5982\u679CdataSource\u6CA1\u6709key \u6307\u5B9A\u4E86rowKey \u5C31\u4F1A\u81EA\u52A8\u52A0
  rowKey={record => record.uid}
// \u9ED8\u8BA4\u6587\u6848\u8BBE\u7F6E
  locale={}
// \u7981\u7528\u6392\u5E8F\u6062\u590D\u5230\u9ED8\u8BA4\u72B6\u6001
  sortDirections=['ascend', 'descend', 'ascend']
// \u7528\u4E8E\u53EF\u7F16\u8F91\u83DC\u5355
  components={{
    body:{ cell:ReactNode,row:ReactNode }
  }}
/* \u624B\u98CE\u7434\u6548\u679C \u5C55\u5F00\u591A\u4F59\u4FE1\u606F
   expandedRowRender \u63A7\u5236\u663E\u793A\u5185\u5BB9
   rowExpandable \u63A7\u5236\u5C55\u5F00\u9879
*/
  expandable={{
    expandedRowRender:(record)=> ReactNode,
    rowExpandable:(record)=> record.name !== 'xxx'
  }}
// \u6BCF\u4E00\u884C\u7684\u89E6\u53D1\u4E8B\u4EF6 \u4F8B\u5982 click,hover \u67D0\u4E00\u884C
  onRow={record => {
    return {
      onClick: event => {},
      onDoubleClick: event => {},
      onContextMenu: event => {},
      onMouseEnter: event => {},
      onMouseLeave: event => {},
    };
  }}
// \u70B9\u51FB\u8868\u5934\u884C
  onHeaderRow={(columns, index) => {
    return {
      onClick: (e) => {},
    };
  }}
/* \u5F00\u542F\u8868\u683C\u884C\u5DE6\u8FB9\u529F\u80FD\u9879
   type             \u5DE6\u8FB9\u591A\u4E00\u4E2A\u5355\u9009\u6216\u8005\u591A\u9009\u6846
   selections       \u5F00\u542F \u5168\u9009 \u53CD\u9009 \u6E05\u7A7A \u81EA\u5B9A\u4E49\u529F\u80FD
   fixed:true       \u662F\u5426\u56FA\u5B9A
   columnWidth      \u6BCF\u4E00\u9879\u7684\u5BBD\u5EA6
   hideSelectAll    \u9690\u85CF\u5168\u9009\u83DC\u5355
   defaultSelectedRowKeys \u9ED8\u8BA4\u9009\u4E2D\u9879
   getCheckboxProps \u6BCF\u4E00\u9879\u7684\u9ED8\u8BA4Props
   renderCell       \u81EA\u5B9A\u4E49\u6E32\u67D3\u529F\u80FD\u6846
   selectedRowKeys  \u624B\u52A8\u63A7\u5236\u9009\u4E2D\u9879 \u914D\u5408onChange
   onChange         \u53D1\u751F\u6539\u53D8\u7684\u56DE\u8C03
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
/* \u56FA\u5B9A\u5355\u5143\u683C
   \u6A2A\u5411\u9700\u914D\u5408 columns \u7684 fixed: 'left|right',
   \u5782\u76F4\u9700\u914D\u5408 columns \u7684 width:100 \u6307\u5B9A\u5BBD\u5EA6
   x:{ 'max-centent' } \u89E3\u51B3\u5BF9\u4E0D\u9F50\u7684\u95EE\u9898
*/
  scroll={{ x: 1800\uFF0Cy:240 }}
/>`,lang:"js"}),e.a.createElement("h5",{id:"columns"},e.a.createElement(n.AnchorLink,{to:"#columns","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"columns"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7EB5\u5411\u5355\u5143\u683C ",e.a.createElement(n.Link,{to:"https://segmentfault.com/a/1190000021124610"},"https://segmentfault.com/a/1190000021124610"))),e.a.createElement(a.a,{code:`const columns = [
  {
# \u6837\u5F0F\u914D\u7F6E
    align:'left center right',
// \u8FD9\u884C\u5DE6\u8FB9\u7684\u90E8\u5206\u90FD\u4F1A\u56FA\u5B9A \u7ECF\u8FC7\u7684\u6BCF\u4E2A\u90FD\u9700\u8981\u52A0
    fixed:'left'|'right'|true,
    width:100,
    className:"",
// \u5355\u5143\u683C\u5408\u5E76
    colSpan:number,
// \u662F\u5426\u53EF\u7F16\u8F91 \u914D\u5408 tabel component\u91CD\u6784
    editable: true,
    ellipsis: boolean | {showTitle:false}
# \u57FA\u672C\u914D\u7F6E
    title:"",
    dataIndex:"",
    key:"",
/* \u6591\u9A6C\u6761\u7EB9
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
// \u81EA\u5B9A\u4E49\u5220\u9009\u83DC\u5355
    filters:[
      {text:"",value:"",children:[{...}]}
    ]
/* \u53D7\u63A7\u6A21\u5F0F \u5728table \u7684onChange\u56DE\u8C03\u51FD\u6570 \u66F4\u65B0\u53D7\u63A7\u6570\u636E
   \u503C\u4E3A\u5DF2\u7B5B\u9009\u7684 value \u6570\u7EC4 (filters.value)
*/
    filteredValue: string[],
// \u7B5B\u9009\u89C4\u5219 value\u662Ffilters.value
    onFilter:(value,record)=>{record.name.includes(value)}

    defaultFilteredValue: string[]
// \u7B5B\u9009\u83DC\u5355\u6A21\u5F0F
    filterMode: 'tree' | 'menu',
    filterSearch: true
    filterIcon:(filtered)=> <Icon />
// \u591A\u4E2A\u5217\u7684\u7B5B\u9009 \u5408\u5E76\u751F\u6548 \u662F\u5426\u53EA\u5F71\u54CD\u672C\u5217
    filterMultiple: true

/* \u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355
({setSelectedKeys, selectedKeys, confirm, clearFilters})=>{}
*/
    filterDropdown:()=>ReactNode
// \u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355 \u663E\u793A\u4E0E\u9690\u85CF
    filterDropdownVisible={boolean}
// \u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355 \u5173\u95ED\u548C\u663E\u793A\u65F6\u5019\u7684\u56DE\u8C03
    onFilterDropdownVisibleChange=(visible)=>{}
// \u7B5B\u9009\u901A\u8FC7\u5B57\u6BB5\u7740\u8272
    filtered={true}


# sort
   defaultSortOrder: 'descend' | 'ascend',
// \u5F00\u542F\u6392\u5E8F\u65B9\u5F0F \u964D\u5E8F \u5347\u5E8F
   sortDirections:['descend','ascend'],
// \u53D7\u63A7\u6A21\u5F0F \u5728table \u7684onChange\u56DE\u8C03\u51FD\u6570 \u66F4\u65B0\u53D7\u63A7\u6570\u636E
   sortOrder: boolean | 'descend' | 'ascend',
/* \u6392\u5E8F\u89C4\u5219
   compare \u6392\u5E8F\u89C4\u5219
   multiple \u591A\u5217\u6392\u5E8F\u4F18\u5148\u7EA7 \u8C01\u6700\u5927\u90A3\u4E00\u5217\u89C4\u5219\u4F18\u5148
   sorter: {
      compare: (a, b) =>a.key - b.key,
      multiple: 1,
    },
*/
   sorter:(a, b) => a.key - b.key
  }
# \u8868\u5934\u5206\u7EC4
  children:[
    ...
  ]
]
# \u7B5B\u9009\u65F6\u95F4
sorter: (a,b) => {
const time1 = moment(a.changeTime, 'YYYY.MM.dd HH:mm:ss')
const time2 = moment(a.changeTime, 'YYYY.MM.dd HH:mm:ss')
}
return moment(time2).isAfter(moment(time1)) ? -1 : 1
},
sortDirections: ['descend', 'ascend']`,lang:"js"}),e.a.createElement("h5",{id:"modal"},e.a.createElement(n.AnchorLink,{to:"#modal","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"modal"),e.a.createElement(a.a,{code:`*fetch({payload:{page=1,pageSize=10}},{call,put}){
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
      message.success('\u4E0A\u4F20\u6210\u529F!');
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
              showTotal: (total) => \`\u603B\u5171\${total}\u6761\u6570\u636E\`,
            }}
  />`,lang:"js"}),e.a.createElement("h5",{id:"\u53D7\u63A7\u7684-sort"},e.a.createElement(n.AnchorLink,{to:"#\u53D7\u63A7\u7684-sort","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53D7\u63A7\u7684 sort"),e.a.createElement(a.a,{code:`#
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
        { text: '\u5168\u90E8\u7AD9\u70B9', value: 0 },
        { text: '\u6307\u5B9A\u7AD9\u70B9', value: 1 },
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
// \u91CD\u7F6E\u7684\u65F6\u5019 \u6307\u5B9A\u6BCF\u4E2A\u5BF9\u8C61\u5C5E\u6027\u4E3Anull
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
}`,lang:"js"}),e.a.createElement("h5",{id:"checkbox-1"},e.a.createElement(n.AnchorLink,{to:"#checkbox-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"checkbox"),e.a.createElement(a.a,{code:`// \u5F53\u70B9\u51FB\u53D7\u63A7\u7684sort\u6309\u94AE\u7684\u65F6\u5019 \u5728table onChange\u4E8B\u4EF6\u9700\u8981
// \u91CD\u7F6E\u9009\u4E2D\u7684checkbox
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
            showTotal: (total) => \`\u603B\u5171\${total}\u6761\u6570\u636E\`,
   }}
   onChange={handleTableChange}
/>
#
const [tableSelectKey, setTableSelectKey] = useState([]);

\u6B64\u65F6 tableSelectKey \u4E2D\u5B58\u50A8\u7684\u5C31\u662F rowKey \u6307\u5B9A\u7684\u5B57\u6BB5`,lang:"js"}),e.a.createElement("h4",{id:"\u5408\u5E76\u5355\u5143\u683C"},e.a.createElement(n.AnchorLink,{to:"#\u5408\u5E76\u5355\u5143\u683C","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5408\u5E76\u5355\u5143\u683C"),e.a.createElement(a.a,{code:`const sharedOnCell = (_, index) => {
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
];`,lang:"js"}),e.a.createElement("h4",{id:"tabs"},e.a.createElement(n.AnchorLink,{to:"#tabs","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Tabs"),e.a.createElement(a.a,{code:`#
<Tabs
  activeKey
  defaultActiveKey
  // \u5C45\u4E2D\u663E\u793A
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
</Tabs>`,lang:"js"}),e.a.createElement("h4",{id:"tag"},e.a.createElement(n.AnchorLink,{to:"#tag","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Tag"),e.a.createElement(a.a,{code:`<Tag
  closable
  color="success|processing|error|warning|default"
  visible
  icon={ReactNode}
  onClose
/>`,lang:"js"}),e.a.createElement("h4",{id:"timeline"},e.a.createElement(n.AnchorLink,{to:"#timeline","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Timeline"),e.a.createElement(a.a,{code:`#
 <Timeline>
   <Timeline.Item
     color=''
   />
 </Tooltip>`,lang:"js"}),e.a.createElement("h4",{id:"tooltip"},e.a.createElement(n.AnchorLink,{to:"#tooltip","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Tooltip"),e.a.createElement(a.a,{code:`<Tooltip
   title="\u63D0\u793A\u6587\u5B57"
   placement="topLeft"
   // \u7BAD\u5934\u6307\u5411\u4E2D\u5FC3
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
          </span>`,lang:"js"}),e.a.createElement("h4",{id:"tree"},e.a.createElement(n.AnchorLink,{to:"#tree","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Tree"),e.a.createElement(a.a,{code:`<Tree
   treeData={}
   // \u7981\u7528\u6574\u884C
   \u5728\u6570\u636E\u91CC\u9762\u52A0\u5165 disabled:true
   // \u7981\u7528 checkbox
   \u5728\u6570\u636E\u91CC\u9762\u52A0\u5165 disableCheckbox:true
   // \u81EA\u5B9A\u4E49\u56FE\u6807
   \u5728\u6570\u636E\u91CC\u9762\u52A0\u5165 icon

   // \u663E\u793A\u590D\u9009\u6846
   checkable
   // \u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9
   defaultExpandAll

   // \u70B9\u51FB\u590D\u9009\u6846 \u89E6\u53D1
   onCheck={(keys,e)=>}
   // \u5F53\u524D\u9009\u4E2D\u590D\u9009\u6846\u7684\u8282\u70B9
   checkedKeys
/>`,lang:"js"}),e.a.createElement("h3",{id:"\u53CD\u9988"},e.a.createElement(n.AnchorLink,{to:"#\u53CD\u9988","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53CD\u9988"),e.a.createElement("h4",{id:"alert"},e.a.createElement(n.AnchorLink,{to:"#alert","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Alert"),e.a.createElement(a.a,{code:`import { Alert } from 'antd';
<Alert
   message=""
   type="success info warning error"
   description

   showIcon
   closable
   onClose={()=>}
/>`,lang:"js"}),e.a.createElement("h4",{id:"drawer"},e.a.createElement(n.AnchorLink,{to:"#drawer","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Drawer"),e.a.createElement(a.a,{code:`#
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
>`,lang:"js"}),e.a.createElement("h4",{id:"message"},e.a.createElement(n.AnchorLink,{to:"#message","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Message"),e.a.createElement(a.a,{code:`message.info("\u5185\u5BB9",time);
      .success({content:"\u6587\u672C\u5185\u5BB9",className:"",style:{}},time)
      .error
      .warning
      .loading()`,lang:"js"}),e.a.createElement("h4",{id:"modal-1"},e.a.createElement(n.AnchorLink,{to:"#modal-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Modal"),e.a.createElement(a.a,{code:`<Modal
   title=''
   // \u63A7\u5236\u4F4D\u7F6E
   centered
   style:{{top:0}}

   maskClosable
   visible={boolean}
   width={1000}

   okText="\u786E\u8BA4"
   cancelText="\u53D6\u6D88"
   // \u662F\u5426\u7981\u7528\u6309\u94AE
   okButtonProps={{ disabled: true }}
   cancelButtonProps={{ disabled: true }}
   onOk
   onCancel
   footer={null}
/>


#
Modal.success({
    title:"",
    content: '\u53EF\u4EE5\u653E\u5143\u7D20\u6807\u7B7E \u6216string',
  });
// \u624B\u52A8\u5173\u95ED
modal.destroy();

# modal \u786E\u5B9A\u6309\u94AE\u53D8\u6210\u8868\u5355\u7684\u786E\u5B9A
form.validateFields()
  .then((values)=>{})
  .catch((err)=>)`,lang:"js"}),e.a.createElement("h4",{id:"notification"},e.a.createElement(n.AnchorLink,{to:"#notification","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Notification"),e.a.createElement(a.a,{code:`# \u5916\u89C2\u6837\u5F0F
notification["success info warning error"]({
      message: "",
      description:""
      onClick:()=>{
      },
      icon:ReactNode,
      className:"",
      stule:{},
      // \u5173\u95ED\u7684\u65F6\u95F4
      duration: 0,
      placement:'bottomRight bottomLeft topRight topLeft',
      // \u589E\u52A0 dom
      btn:ReactNode(notification.close(key))
      key:\`open\${Date.now()}\`
})




# \u4F4D\u7F6E
placement:"bottomRight"
bottomLeft
topRight
topLeft
# \u589E\u52A0 dom
btn
key`,lang:"js"}),e.a.createElement("h4",{id:"popconfirm"},e.a.createElement(n.AnchorLink,{to:"#popconfirm","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Popconfirm"),e.a.createElement(a.a,{code:`<Popconfirm
   title:"",
   onText='Yes'
   cancelText="No"

   onConfirm
   onCancel
/>`,lang:"js"}),e.a.createElement("h4",{id:"progress"},e.a.createElement(n.AnchorLink,{to:"#progress","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Progress"),e.a.createElement(a.a,{code:`<Progress
  size
  // \u60AC\u6D6E\u63D0\u793A\u5185\u5BB9
  title
  percent={}
  status="active exception"
  // \u63D0\u793A\u56FE\u6807\u6216\u8005 \u767E\u5206\u6BD4
  showInfo={false}
  format={percent => \u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u672C}
  strokeColor={{ form: '\u989C\u8272', to: '\u989C\u8272' }}
  success={{ percent: 30 }}
  type="circle dashboard" // dashboard \u662F\u6709\u7F3A\u53E3\u7684
  gapDegree={30} // \u4FEE\u6539 dashboard \u7F3A\u53E3\u89D2\u5EA6
  strokeLinecap="square" // dashboard \u8FB9\u7F18\u7684\u68F1\u89D2
  steps={3} // \u5E26\u6B65\u9AA4\u7684\u8FDB\u5EA6\u6761
/>`,lang:"js"}),e.a.createElement("h4",{id:"result"},e.a.createElement(n.AnchorLink,{to:"#result","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Result"),e.a.createElement(a.a,{code:`<Result
   status="success",
   title:"",
   subTitle:"",
   extra={[ DOM\u5143\u7D20  ]}
 />`,lang:"js"}),e.a.createElement("h4",{id:"skeleton"},e.a.createElement(n.AnchorLink,{to:"#skeleton","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Skeleton"),e.a.createElement(a.a,{code:"<Skeleton avatar paragraph={{ rows: 4 }} active />",lang:"js"}),e.a.createElement("h4",{id:"spin"},e.a.createElement(n.AnchorLink,{to:"#spin","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Spin"),e.a.createElement(a.a,{code:`<Spin
   tip="Loading..."
   indicator={ <icon/> } />
   size
   // \u5C06\u5185\u90E8\u5143\u7D20\u4E5F\u53D8\u6210\u52A0\u8F7D\u4E2D \u9576\u5D4C
   spinning={true}
/>`,lang:"js"}),e.a.createElement("h3",{id:"\u5176\u4ED6"},e.a.createElement(n.AnchorLink,{to:"#\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6"),e.a.createElement("h4",{id:"anchor"},e.a.createElement(n.AnchorLink,{to:"#anchor","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Anchor"),e.a.createElement(a.a,{code:`import { Anchor } from 'antd';
const { Link } = Anchor;
<Link href="#">`,lang:"typescript"}),e.a.createElement("h4",{id:"backtop"},e.a.createElement(n.AnchorLink,{to:"#backtop","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"BackTop"),e.a.createElement(a.a,{code:`import { BackTop } from 'antd';
<BackTop />
# \u81EA\u5B9A\u4E49\u6837\u5F0F \u6700\u592740px*40px
<BackTop >
    <div style={xxx} />
</BackTop>`,lang:"js"}),e.a.createElement("h4",{id:"configprovider"},e.a.createElement(n.AnchorLink,{to:"#configprovider","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"ConfigProvider"),e.a.createElement(a.a,{code:`# \u5168\u5C40\u914D\u7F6E
import { ConfigProvider } from 'antd';
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>`,lang:"js"}))));l.default=r=>{const c=e.a.useContext(n.context),m=c.demos;return e.a.useEffect(()=>{var o;r!=null&&(o=r.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e.a.createElement(s,{demos:m})}}}]);

---
order: 1
group:
  path: /MultipleTag
  title: MultipleTag
  order: 1
---

## MultipleTag

- https://github.com/fangzhengjin/umi-plugin-panel-tabs
- https://github.com/MudOnTire/antd-pro-page-tabs
- npm i umi-plugin-panel-tabs

```markdown
panelTab: {
use404: true,
useAuth: true,
autoI18n: true,
// 打开多少页签时弹出提示
tabsLimit: 10,
// 防抖时间
tabsLimitWait: 500,
tabsLimitWarnTitle: '提示',
tabsLimitWarnContent: '您当前打开页面过多, 请关闭不使用的页面以减少卡顿!',
tabsBarBackgroundColor: '#FFFFFF',
tabsTagColor: '#1890ff',
},
当 route 具有 name 就会显示页签
添加 hideInPanelTab:true 就隐藏页签
```

---
order: 5
nav:
  title: 前端之路
  path: /guide
---

## browserslistrc

### 配置浏览器兼容性

```js
# 注释是这样写的，以#号开头
last 1 version #最后的一个版本
> 1%  #代表全球超过1%使用的浏览器
maintained node versions #所有还被 node 基金会维护的 node 版本
not dead
```

### 配置

```bash
> 5%: 基于全球使用率统计而选择的浏览器版本范围。>=,<,<=同样适用。
> 5% in US : 同上，只是使用地区变为美国。支持两个字母的国家码来指定地区。
> 5% in alt-AS : 同上，只是使用地区变为亚洲所有国家。这里列举了所有的地区码。
> 5% in my stats : 使用定制的浏览器统计数据。
cover 99.5% : 使用率总和为99.5%的浏览器版本，前提是浏览器提供了使用覆盖率。
cover 99.5% in US : 同上，只是限制了地域，支持两个字母的国家码。
cover 99.5% in my stats :使用定制的浏览器统计数据。
maintained node versions :所有还被 node 基金会维护的 node 版本。
node 10 and node 10.4 : 最新的 node 10.x.x 或者10.4.x 版本。
current node :当前被 browserslist 使用的 node 版本。
extends browserslist-config-mycompany :来自browserslist-config-mycompany包的查询设置
ie 6-8 : 选择一个浏览器的版本范围。
Firefox > 20 : 版本高于20的所有火狐浏览器版本。>=,<,<=同样适用。
ios 7 :ios 7自带的浏览器。
Firefox ESR :最新的火狐 ESR（长期支持版） 版本的浏览器。
unreleased versions or unreleased Chrome versions : alpha 和 beta 版本。
last 2 major versions or last 2 ios major versions :最近的两个发行版，包括所有的次版本号和补丁版本号变更的浏览器版本。
since 2015 or last 2 years :自某个时间以来更新的版本（也可以写的更具体since 2015-03或者since 2015-03-10）
dead :通过last 2 versions筛选的浏览器版本中，全球使用率低于0.5%并且官方声明不在维护或者事实上已经两年没有再更新的版本。目前符合条件的有 IE10,IE_Mob 10,BlackBerry 10,BlackBerry 7,OperaMobile 12.1。
last 2 versions :每个浏览器最近的两个版本。
last 2 Chrome versions :chrome 浏览器最近的两个版本。
defaults :默认配置> 0.5%, last 2 versions, Firefox ESR, not dead。
not ie <= 8 : 浏览器范围的取反。
可以添加not在任和查询条件前面，表示取反
```

### demo

- .browserslistrc

```bash
[production staging]
> 1%
ie 10

[development]
last 1 chrome version
last 1 firefox version

```

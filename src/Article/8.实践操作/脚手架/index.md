---
order: 8
nav:
  title: Article
  path: /article
---

# 自己搭建一个脚手架

## 为什么需要一个脚手架

```js
呃。。。为了方便copy
哈哈。为了方便自己克隆自己的仓库。顺便了解下脚手架是如何制作的
在这里做一个克隆自己仓库的脚手架
还是非常简单的。只需要克隆我的脚手架文件。换成自己定义的名字
npm发布下就可以用了
废话不多说,开始正题了。
```

## 1.克隆基本代码

```
git clone https://github.com/eternallycyf/lrxc-cli.git
```

## 2.更改`api`查询名称

```js
// 这里是调用的github的api 查询自己的仓库信息
# ./src/create.js
  const { data } = await axios.get('https://api.github.com/users/eternallycyf/repos')
  const { data } = await axios.get(`https://api.github.com/repos/eternallycyf/${repo}/tags`);
  let api = `eternallycyf/${repo}`
  将这三行的eternallycyf换成自己github的名字
```

## 3.更换提示信息

```js
# ./src/main.js
将 lrxc-cli 换成自己脚手架的名字
```

## 4.设置 `package.json`

```js
# 将这些JSON展示字段的value换成自己的 这些字段主要用于npm包页面的展示
// 我的脚手架叫做 lrxc-cli
name
version
description
author
keywords
homepage
repository
bin
```

## 5.发布

```js
# 1.在npm官网注册自己的账号
# 2.注意
注意第一次发布需要邮箱验证
并且发布时候npm必须是npm源 不能是淘宝的 否则会一直失败
可以使用 nrm 来切换
yarn global add nrm
nrm ls
nrm use npm
# 3.npm login
输入自己账号密码
# 4.npm publish
当没有报错的时候就发布成功了
可以在npm官网搜索到自己的包
# 5.npm install xxx -g
xxx create 项目名
这时候你就可以看到自己github的所有仓库啦
# 6.这个脚手架是根据 git tag来下载的
所以要对想要clone的 仓库打tag
git tag -a v1.0 -m "my version 1.0"
此时终端运行 xxx create 项目名
就会跳出一个 1.0 的下一步
按住回车就开始克隆啦
```

## 6.使用到的包

```js
axios:发送ajax请求的
commander:提供终端命令行支持的包
consolidate:用于从npm上下载东西统一模板引擎
download-git-repo:下载仓库的
inquirer:命令行交互工具
metalsmith:遍历下载文件 是否需要模板渲染
ncp: 社区
ora: 命令行loading效果
```

<blockquote>
具体代码就不说了,从使用的包就可以看出来
就是使用nodejs通过github提供的api获取仓库信息
通过一些包完成命令行交互
然后又通过fs模块读取渲染下载文件
完成的简单实用的脚手架
如果需要定制需求的话
具体的API可以直接看npm包的页面
</blockquote>

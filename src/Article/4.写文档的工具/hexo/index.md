---
order: 4
nav:
  title: Article
  path: /article
---

# Hexo

## 准备阶段

```js
hexo s
npm run publish
```

## Hexo

### markdown

```js
---
title: Hello World
tags:
  - 总结
  - blog
categories:
  - blog
keywords: "hello，总结"
cover: 图片
toc: True
abbrlink: aaa
// github的后缀链接
// 如 https://github.com/eternallycyf/aaa

toc:
  post: true       // 文章页是否显示 TOC
  page: false      // 普通页面是否显示 TOC
  number: true     // 是否显示章节数
  expand: false    // 是否展开 TOC
  style_simple: false # for post
   // 简洁模式（侧边栏只显示 TOC, 只对文章页有效 ）
```

## front-matter

| 用法             | 是否必须 | 解释               | 默认 |
| ---------------- | -------- | ------------------ | ---- |
| title            | 必须     | 标题               |      |
| date             | 必须     | 创建日期           |      |
| type             | 必须     | 标签 分类 友情链接 |      |
| updated          |          | 页面更新时间       |      |
| description      |          | 页面描述           |      |
| keywords         |          | 页面关键字         |      |
| comments         |          | 页面评论模板       | true |
| top_img          |          | 页面顶部图片       |      |
| mathjax          |          |                    |      |
| katex            |          |                    |      |
| aside            |          | 显示侧边栏         | true |
| aplayer          |          | 加载动画           |      |
| highlight_shrink |          | 代码是否默认展开   |      |
| sticky: 1        |          | 文章置顶 越大优先  |      |

```js
---
title:
date:
updated:
tags:
categories:
keywords:
description:
top_img:
cover:
toc:
toc_number:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---
```

```js
# 雪花
https://img-blog.csdnimg.cn/c9d545db7a874eff8a5a446ed6bf1640.png

# 未来世界
https://img-blog.csdnimg.cn/422c302c033a415386e0dee5ec477ba7.png

# 冰天雪地女人
https://img-blog.csdnimg.cn/51a74482cc6b4283a8bb86de7073ea3b.png

# 红色房子
https://img-blog.csdnimg.cn/853387f130bc4d579db0cd2ee231a5da.png

# 头像
https://img-blog.csdnimg.cn/b6c0fab9816d4561b5f2b8508d781144.png

# 404
https://img-blog.csdnimg.cn/b4c205efe7b24110a8262fb6b3d60fad.png
```

## github pages

```js
 deploy:
  type: git
  repo: git@github.com:eternallycyf/eternallycyf.github.io.git
  branch: master
#
仓库名字: eternallycyf.github.io
pages/master/root
https://eternallycyf.github.io/
#
pages/Custom domain
wangxince.site

source/CNAME
wangxince.site
hexo clean
hexo g -d
# 腾讯云 域名解析
https://console.cloud.tencent.com/cns
1. 记录类型 CNAME
   主机记录 www 记录值 eternallycyf.github.io
   解析路线 default
2. 记录类型 A
   @    185.199.108.153
   default

dig wangxince.site +noall +answer
```

### post

- https://butterfly.js.org/posts/dc584b87/#Post-Front-matter

```js
title:
date: 2020-05-15
updated: 2020-05-15
tags:
  - JavaScript
categories:
  - JavaScript
cover: https://img-blog.csdnimg.cn/954fc67bd96042c28eb565b12611f718.png
abbrlink: 和title一样
sticky: 1
// 显示版权模块
copyright: true
copyright_author: eternallycyf
copyright_author_href: https://github.com/eternallycyf
copyright_url: https://github.com/eternallycyf
copyright_info: 本博客所有文章除特别声明外，均采用 CC BY-NC-SA 4.0 许可协议。转载请注明来自 Eternallycyf！
```

### img

```js
# js
https://img-blog.csdnimg.cn/954fc67bd96042c28eb565b12611f718.png
# ts
https://img-blog.csdnimg.cn/461818db76bc40e4816eb1b8cf0246c2.png
```

### 组件

#### tip

```js
#
文本内容 按钮文字 按钮背景色 按钮文字颜色
{% hideInline content,display,bg,color %}
```

#### tab

```js
{% tabs 列表1 %}
<!-- tab 列表1-->
**这是列表1**
<!-- endtab -->
{% endtabs %}
 # 图标
 <!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
```

#### button

```js
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

[url]         : 链接
[text]        : 按钮文字
[icon]        : [可选] 图标
[color]       : [可选] 按钮背景顔色(默认style时）
                      按钮字体和边框顔色(outline时)
                      default/blue/pink/red/purple/orange/green
[style]       : [可选] 按钮样式 默认实心
                      outline/留空
[layout]      : [可选] 按钮佈局 默认为line
                      block/留空
[position]    : [可选] 按钮位置 前提是设置了layout为block 默认为左边
                      center/right/留空
[size]        : [可选] 按钮大小
                      larger/留空
 #
 https://butterfly.js.org/posts/4aa8abbe/#Button

```

#### inlineImg

```js
{% inlineImg [src] [height] %}
[src]      :    图片链接
[height]   :   图片高度限制【可选】  150px
```

#### label

```js
{% label text color %}
```

#### blockquote

```js
blockquote;
```

#### timeline

```js
{% timeline 2022,purple %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}
```

#### flink

```js
{% flink %}
和友情链接页面语法一样
{% endflink %}
```

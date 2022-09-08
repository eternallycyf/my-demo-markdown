---
order: 1
group:
  path: /github
  title: Github提交卡顿原因
---

- github 卡顿原因

```js
github没有被墙 但是亚洲cdn被墙了 所以git push git clone 会卡
解决方法
  1.在host文件写入最新的动态ip
  2.ssr小飞机开代理
  3.油猴插件 Github 增强 - 高速下载
    https://greasyfork.org/zh-CN/scripts
    安装后在github ssh http zip下载都会多出几个下载方式
```

- 1.在 host 文件写入最新的动态 ip

```js
# https://www.ipaddress.com/
# /etc/hosts
查询两个地址的动态IP并在host文件写入
140.82.113.3 github.com
199.232.69.194 github.global.ssl.fastly.net
# 刷新DNS
sudo killall -HUP mDNSResponder
```

- 2.ssr 小飞机代理

```js
# 下载 ShadowsocksX-NG (github上也有)
# 免费的ssr节点 点击二维码就自动导入了
https://free-ss.site/
# 开启全局模式
# 开放代理端口
export http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;
# git设置代理
git config --global http.https://github.com.proxy socks5://127.0.0.1:1087
git config --global --unset http.https://github.com.proxy
```

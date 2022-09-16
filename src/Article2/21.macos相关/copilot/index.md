---
order: 3
nav:
  title: Article2
  path: /article2
---

# copilot

## github 如果绑定了学校邮箱 申请免费资格

- https://link.zhihu.com/?target=https%3A//github.com/features/copilot/signup

## vscode 更新到最新版

- 因为拓展程序默认下载的是最新的 会不匹配 提示报错你 更新最新版的拓展
- 或者手动下载别的版本拓展

## api 调用失败

- 具体原因是因为 github 没有被墙 但是亚洲区域 cdn 被墙了 需要自己手动指定最新的 host ip 地址
- 查询动态 IP 地址
  - https://www.ipaddress.com/

```js
# macos host文件路径
/etc/hosts

# 在这个文件写入最新的ip地址 在https://www.ipaddress.com/查询
140.82.113.3 github.com
199.232.69.194 github.global.ssl.fastly.net

# 刷新dns缓存
sudo killall -HUP mDNSResponder

```

## 使用

- 只需要在 vscode 登录自己的 github 账号
- 然后下载最新的 github copilot 拓展
- 安装完成后会自动提示你登录并授权

- 然后在右下角有个图标可以看报错信息 和 是否启用

- 使用方式很简单 写注释
- 使用 tab 键自动输入提示内容

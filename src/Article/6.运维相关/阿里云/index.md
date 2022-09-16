---
order: 6
nav:
  title: Article
  path: /article
---

# 阿里云

## 准备阶段

### 登录账号

```js
云服务器ECS
香港不要挂 vpn

https://ecs.console.aliyun.com/#/home
ssh -v -p 3306 aliyunzixun@118.31.34.158.com
ssh root@118.31.34.158
```

### 配置

```js
1. 网络与安全
安全组 一键创建新的安装组
2. 实例与镜像
实例 最上边选择杭州地区
更多 密码密匙 重置实例密码
公网ip 118.31.34.158
3. xshell 连接
```

### 本地生成公匙

```js
ssh后续不用输入密码
# ssh-keygen -t rsa
# ssh-copy-id root@118.31.34.158
```

## 宝塔面板

### 宝塔账号密码

- https://www.bt.cn/bbs/thread-19376-1-1.html
- https://www.bt.cn/bbs/thread-2897-1-1.html

```js
# 注意开启端口 端口上方ip
外网面板地址: http://118.31.34.158:8888/18c540df
内网面板地址: http://172.25.162.222:8888/18c540df
```

### 软件商店

```js
安装 apache mysql nginx php tomcat
```

### 安全

```js
安全 启用禁ping
防火墙 3306 MySQL
```

### 文件

```js
上传文件;
xftp;
```

### mysql

```js
阿里云118.31.34.158
118.31.34.158
3306
test
666222
不能直接用root用户名 需要进入系统更改mysql数据库 user表
host为 % 并重启

telnet 118.31.34.158 3306
```

### tomcat

```js
# 静态资源路径
/www/server/tomcat/webapps/ROOT
# 修改端口文件路径
/www/server/tomcat/conf
URIEncoding="utf-8"
// 在修改端口的位置加这个 解析中文路径
```

### apache

```js
/www/server/apache/htdocs
软件商店 apache哪一行 选择文件夹
新建文件夹 更改内容
访问
http://118.31.34.158:8080/test/
```

### nginx

```js
/www/server/nginx/html

如果是单页面应用程序
需要更改下 base 路径
改成空
```

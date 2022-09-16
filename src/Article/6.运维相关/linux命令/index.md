---
order: 6
nav:
  title: Article
  path: /article
---

# Linux

## 准备阶段

```js
安装
make
make install
```

### 开机关机

```js
// 同步数据到硬盘
sync
// 关机
shutdown
// 重启
reboot  | shutdown -r now
// 10分钟后 重启
shutdown -r +10
// 关闭系统
halt

ifconfig en0  // ipconfig/all     ip addr
curl localhost:3344
```

### 目录

```js
/
bin  存放使用的命令
boot linux核心文件
dev  存放外部设备
mnt  临时挂载文件系统 光驱
media  u盘 光驱
lib  动态链接共享库
lost+fount 系统非法关机前没保存的文件
proc 系统内存映射 系统信息
sbin 系统管理员的系统管理程序
srv  服务启动后需要提取的数据
sys  存放文件系统
run  临时文件系统


etc  系统管理配置文件
home 用户文件夹
root 管理员文件夹
opt  放数据库等守护进程
user 用户的程序放在这里 qq 微信
     user/bin  系统用户
     user/sbin 超级用户
     user/src  内核源代码
var  日志
tmp  临时文件
www  存放网站
```

### 文件名字含义

```js
drwx-wx-wx-x@ root root
# 第一个字符
d 表示目录
r 便是可以打开的文件
- 文件
l 链接文档
# 三组
r可读 w可写 x可执行 -没权限
主权限 组权限 其他用户权限
# 属组 属主
# 文件大小 时间
```

### 账号管理

```js
# 添加用户
useradd - 选项 用户名
        -m 用户名 自动创建这个用户的主目录
  /etc/passwd
# 删除用户
userdel -r 用户名
# 切换用户
su 用户名
sudo su
# hostname 主机名
hostname 修改主机名
# 设置密码
passwd 用户名

```

## 基本命令

```js
ls -
a - // 所有的文件
l - // 包含文件的属性和权限 没有隐藏文件
  al;

pwd; // 显示当前目录
```

### 文件操作

```js
mkdir -p 路径     // 递归创建 不加就只能在文件存在的基础上创建

rm 文件名             // 删除文件
rmdir 文件夹名字       // 删除文件夹
rm -rf 文件或文件夹名字 // 删除所有  /*

cp 原路径 新路径      // 复制文件
cp -a 原路径 新路径   // 复制文件夹

mv 原路径 新路径     // 移动文件或文件夹 重命名文件
mv -f 原路径 新路径  // 强制
```

### 文件权限

```js
# 更改属组
chgrp [-R] 属性名 文件名  // -R 递归
# 更改属主
chown [-R] 属主名 文件名
           属主名: 属组名 文件名

# 更改文件9个属性
chmod [-R] 777 文件名/文件名
r:4 w:2 x:1
```

### 读文件

```js
cat  文件名   // 显示文件内容
nl   文件名   // 显示行号
less 文件名   // 和more一样 但可以翻页 空格下一页 b 上一页
:q 退出
/搜索文本    // 向下搜索
?搜索文本    // 向上搜索
n           // 自动跳转下一个
N           // 自动跳转上一个

more 文件名   // 一页一页的显示
head -n 20 文件名   // 只看头几行
tail 文件名   // 只看结尾几行
man ap 帮助命令
```

### 写文件

```js
touch
echo xxx >> 文件名
```

## 链接

```js
# 硬链接
允许一个文件有多个路径 防止误删
A--B 就算A删除了 B还能访问
ln A B
# 软连接
快捷方式
ln -s A B
```

## VIM

```js
esc :wq 退出
:i 输入
:p 复制
:d 删除
:u 撤销
```

## 其他

```js
  ## 压缩
  tar cvf 压缩后名字.tar 路径
  zip 压缩后名字.zip 原名
  ## 解压
  tar xvf 名字.tar
  unzip 名字.zip
```

### ssh

```js
#!/usr/bin/env sh

# 先在本地生成公匙存储密码: 直接使用ssh 不用再次输入密码
# ssh-keygen -t rsa
# ssh-copy-id root@118.31.34.158

```

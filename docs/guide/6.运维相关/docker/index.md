---
order: 6
nav:
  title: 前端之路
  path: /guide
---

# Docker

## 准备阶段

### 卸载

```shell
 sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

yum remove docker-ce docker-ce-cli containerd.io
rm -rf /var/lib/docker
rm -rf /var/lib/containerd
```

### 安装

```shell
yum install -y yum-utils
yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
yum makecache fast
yum install docker-ce docker-ce-cli containerd.io
```

### 启动和检查

```dockerfile
systemctl start docker
docker version
docker run hello-world
docker images
```

### 配置阿里云镜像加速

```shell
https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://qwm8wimf.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

### docker 配置 vim

```js
apt-get update
apt-get install vim

yum install unzip
```

## 使用

### 镜像命令

```dockerfile
#
docker search
            mysql --filter=STARS=3000 # 查找 3000 starts 以上的
docker pull 镜像名[:tag]               # 下载指定版本
#
docker images
              -a --all      # 列出所有的镜像
              -q --quiet    # 只显示镜像的 id
              -aq           # 常用
#
docker rmi
            -f imageId1 imageId2 ...   # 删除
            -f $(docker images -aq)    # 删除所有
```

### 容器命令

```dockerfile
#
docker ps                         # 查看正在运行的容器
          -a                      # 查看曾经运行的容器
          -a -n=?                 # 指定个数显示
          -q                      # 只显示 imagesId
# docker run -d --name nginx01 -p 3344:80 nginx
docker run []  image[:tag]
           -d                     # 以后台方式运行
              -p  8080:8080 镜像名:tag
           -it                    # 使用交互方式运行 前台运行
           -p                     # 指定容器端口 -p 8080:8080
                     # 第一个端口是本地(公网) 第二个是容器内的
               -p ip:主机端口:容器端口
               -p 主机端口:容器端口  ## 常用
               -p 容器端口
               容器端口
           --name xxx
           -v 主机目录:容器内目录
                 ## 匿名挂载 -v 容器内路径
                 docker ... -v 容器内路径 nginx
                 ## 具名挂载 映射 自定义名字前不带斜杠
                 docker ... -v 自定义名字:容器内路径 nginx
                 ### volume
                 docker volume ls
                              inspect 自定义名字
                              # /var/lib/docker/volumns/...
                              create
                              prune
                              rm
                 ### -v 自定义名字:容器路径[:ro|:rw]
                 指定容器内部 读写权限
           -e                     # 配置环境
           -P                     # 随机指定端口 大写的P
           --rm                   # 用完就删除掉
   ## 运行容器
   docker run -it centos /bin/bash
   ## 进入容器
   docker exec -it 容器名 /bin/bash # 开启一个新的终端
   docker attach 容器ID            # 进入正在运行的命令行 不是新窗口
   ## 退出容器
   exit
   按住 ctrl + p + q              # 退出 但不关闭容器
   ## 删除容器
   docker rm 容器ID
   docker rm -f $(docker ps -aq)
   docker ps -a -q|xargs docker rm
   ## 启动容器
   docker start 容器ID
   ## 重启容器
   docker restart 容器ID
   ## 停止容器
   docker stop 容器ID
   ## 强制停止容器
   docker kill 容器ID
```

### build

```dockerfile
# 打包 Dockerfile 文件
 docker build -f dockerfile1 -t mydocker .
              -f dockerfile文件名/文件路径
              -t . 生成文件路径 .代表当前路径
```

### 帮助命令

```dockerfile
docker version
docker info
docker --help
docker stats                    # 查看cpu
https://docs.docker.com/reference/
# 查看日志
docker logs
       docker logs -tf 容器ID
       docker logs -tf --tail [number] 容器ID
     # docker run -d centos /bin/sh -c "while true;do echo   '用户名';sleep 1;done"
# 查看 容器的进程信息 端口等等
docker top 容器ID
# 查看容器元信息
docker inspect 容器ID
# 将容器内的文件 复制出来
docker cp 容器ID:容器内路径 目的地主机路径
docker cp 容器ID:/home/eternall.md /home
#
docker history imageID --no-trunc
```

### repository

#### dockerhub

```dockerfile
docker login -u 用户名 -p 密码
docker logout
```

#### 阿里云

```dockerfile
# login
docker login --username=用户名 registry.cn-hangzhou.aliyuncs.com
密码
# pull
docker pull 镜像名:tag
# push
docker push 用户名/镜像名[:tag]
```

### 命令

```dockerfile
  docker tag centos 用户名/myCentos:1.0
#
  docker commit -m='' -a='作者' 容器ID 目标镜像名:[tag]
# push
  docker push 用户名/镜像名:tag
# pull
  docker pull 镜像名:tag

# 将docker镜像压缩
  docker save -o 压缩包名.zip 镜像名:tag
# 解压
docker load -i /usr/tmp/压缩包名.zip
# 上传到服务器
scp 压缩包名.zip root@118.31.34.158:/user/tmp
```

### 容器互联 evth-pair

#### 自定义网络

```dockerfile
# 桥接 container host none
ip addr
docker network ls
docker network rm xxx
# docker0 默认 域名不能访问 --link 可以打通连接
docker run -d -p --net bridge tomcat
# 自定义网络
# driver 默认 subnet 子网 geteway 网关
docker network create --driver bridge --subnet 192.168.0.0/16 - geteway 192.168.0.1 mynet
docker xxx --net mynet tomcat
```

#### link

```js
// 在hosts 配置里链接了
--link 容器名
```

## Dockerfile

- 命名为 Dockerfile 就会自动找他

### Dockerfile

### 基础命令

```dockerfile
# from 基础镜像
FROM centos:7
# maintainer 维护者信息 姓名+邮箱
MAINTAINER 用户名<xxx@qq.com>
# run 构建时候需要运行的命令
RUN yum -y install vim
# add 集成别的东西 会自动解压
ADD 文件名 解压后的镜像内地址
# workdir 设置当前工作目录 / /bin/bash
WORKDIR $MYPATH
# valume 设置容器卷
VALUME
# expose 暴露端口
EXPOSE 80
# 运行
RUN
```

### 其他命令

```dockerfile
# 脚本命令  只有最后一个会生效 可被替代 (覆盖) docker run xxx -l 就会替换掉 编写的 CMD ["ls","-a"]
CMD echo $MYPATH
CMD ["ls","-a"]
CMD echo '----end---'
CMD /bin/bash
# entrypoint 脚本命令  可以追加命令 不
ENTRYPOINT
# onbuild 当构建一个dockerfile 文件时 就触发这个指令
ONBUILD
# copy 文件拷贝到镜像中
COPY readme.txt /user/local/readme.txt
# env 环境变量 ENV
  # 例如 MYPATH user/local
  # 使用时候需要 $MYPATH
ENV MYPATH /user/local
```

### 数据卷共享

```js
docker run -t --name docker01 容器ID
docker run -it --name docker02 --volumes-from docker01 容器ID
这时这两个容器都是相互同步的 即使删除了 还在
```

### 项目打包

```dockerfile
# 根目录创建 Dockerfile
FROM node:12.16.1-alpine AS installer
COPY package.json ./
RUN npm i tyarn -g
RUN tyarn

FROM node:12.16.1-alpine AS builder
COPY --from=installer /node_modules ./node_modules
COPY . .
RUN npm run build

FROM  vixlet/nginx:alpine
COPY --from=builder /dist /app
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
# nginx.conf
server {
    listen       80;
    server_name  127.0.0.1;
    access_log off;
    add_header X-Frame-Options sameorigin always;
    location / {
        root /app;
        try_files $uri $uri/ /index.html;
        index index.html index.htm;
    }
}
```

## 工具

### mysql

```dockerfile
#
docker pull mysql:5.7
#
docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=666222 --name mysql01 mysql:5.7
# navicat 3310 端口
118.31.34.158
3310
root
666222
#
此时在 服务器的  /home/mysql/conf data 目录就映射成功了
```

### portainer

```js
docker volume create portainer_data

docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest

https://118.31.34.158:9443/
```

#### mysql 多个共享

```js
docker run -d -p 3310:3306 -v /etc/mysql/conf.d -v /var/lib/mysql -e MYSQL_ROOT_PASSWORD=666222 --name mysql01 mysql:5.7

docker run -d -p 3310:3306 -e MYSQL_ROOT_PASSWORD=666222 --name mysql02 --volumes-from mysql01 mysql:5.7
```

## docker compose

### 基础步骤

```dockerfile
dockerfile
docker-compose.yml
docker-compose up
docker-compose down
#
可以使用 Dockerfile 生成镜像
或者 docker-compose.yml image
#
docker-compose -f docker-compose.yml up -d
docker-compose -f docker-compose.yml stop
docker-compose -f docker-compose.yml stop
#
```

### 命令

```js
docker-compose up -d
# 重新构建
docker-compose up --build
```

### yml

```dockerfile
# 版本
version: "3.9"
# 服务
services:
  web:
    ## build 生成的 指定dockerfile
    build: .
    ports:
      - "5000:5000"
    ## 镜像
    image: "redis:alpine
    network:
    ## 部署
    deploy:
      ### 副本
      replicas: 6
# 其他配置
volumns:
network:
configs:
```

## doker swarm

#### service

```js
docker service ls
docker service update
```

```dockerfile
#
双主双从: 假设一个节点挂了 其他节点是否可用
Raft 协议: 保证大多数节点存活才可以用 只要>1 集群至少大于3台
#
docker swarm init --advertise-addr IP地址
#
docker node ls
docker swarm join-token manager
docker swarm join-token worker
#
docker swarm leave
update
```

## k8s

```js
kubectl;
```

## 其他

### docker stack

```js
# 单机
docker-compose up -d workpress.yaml
# 集群
docker stack deploy worldpress.yaml
```

### docker secret

```js
# 配置密码 证书
docker secrets
   create
   inspect
   ls
   rm
```

## bug

```js
#
如果没有前台进程
docker就会自动停止
例如 nginx 启动后如果没有被用 就会立即停止
# tomcat
阿里云下载的镜像 默认是阉割版的
cp webapps.dist/* webapps
# elasticsearch 太占内存
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS='-Xms64m -Xmx512m' elasticsearch:7.6.2

```

## 其他

### nginx

```js
docker pull nginx
docker run -p 81:80 --name nginx -d nginx
http://118.31.34.158:81/
#
将.next文件夹更换名字成 dist
sftp放到服务器 /home/blog
# 项目根目录 nginx.conf
server {
    listen       80;
    server_name  127.0.0.1;

    access_log off;

    add_header X-Frame-Options sameorigin always;

    location / {
        root /app;
        try_files $uri $uri/ /index.html;
        index index.html index.htm;
    }
}
# 项目根目录 Dockerfile
...
# 项目根目录进行打包
docker build -t blog:2022-04-01 -f Dockerfile .
docker save -o blog.tar blog:2022-04-01
scp blog.tar root@118.31.34.158:/home/blog/blog.tar
// 服务器
docker stop xxx
docker load -i /home/blog/blog.tar
docker run -p 80:80 --name blog -d blog:2022-04-01

```

## 1.服务器安装 docker

### 卸载 docker

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

```shell
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

```shell
apt-get update
apt-get install vim
yum install unzip
```

## 2.docker 命令

### 镜像命令

```shell
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

```shell
#
docker ps                         # 查看正在运行的容器
          -a                      # 查看曾经运行的容器
          -a -n=?                 # 指定个数显示
          -q                      # 只显示 imagesId
# docker run -d --name nginx01 -p 3344:80 nginx
docker run [] image[:tag]
            -d                        # 以后台方式运行
            -p  8080:8080 镜像名:tag   # 暴露的端口:内部的端口
            #-p ip:主机端口:容器端口
            # -p 主机端口:容器端口  ## 常用
            # -p 容器端口
            -it                       # 使用交互方式运行 前台运行
            --name xxx                # 指定容器名 如果不指定就需要用容器的id
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
            ### -v 自定义名字:容器路径[:ro|:rw]  指定容器内部 读写权限

            -e                     # 配置环境
            -P                     # 随机指定端口 大写的P
            --rm                   # 用完就删除掉

# 其他命令

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

```shell
# 打包 Dockerfile 文件
docker build -f dockerfile1 -t mydocker .
              -f dockerfile文件名/文件路径
              -t . 生成文件路径 .代表当前路径
```

### 帮助命令

```shell
docker version
docker info
docker --help
docker stats                    # 查看cpu
https://docs.docker.com/reference/
# 查看日志
docker logs
docker logs -tf 容器ID
docker logs -tf --tail [number] 容器ID
# docker run -d centos /bin/sh -c "while true;do echo   'eternallycyf';sleep 1;done"
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

## 3.docker 仓库

```shell
docker login -u 账号 -p 密码
docker logout
```

```shell
# 阿里云
# login
docker login --username=账号 registry.cn-hangzhou.aliyuncs.com 密码
# pull
docker pull 镜像名:tag
# push
docker push 账号/镜像名[:tag]
```

## 4.常用命令

```shell
  docker tag centos eternallycyf/myCentos:1.0
#
  docker commit -m='' -a='作者' 容器ID 目标镜像名:[tag]
# push
  docker push eternallycyf/镜像名:tag
# pull
  docker pull 镜像名:tag

# 将docker镜像压缩
  docker save -o 压缩包名.zip 镜像名:tag
# 解压
docker load -i /usr/tmp/压缩包名.zip
# 上传到服务器
scp 压缩包名.zip root@118.31.34.158:/user/tmp
```

## 5.Dockerfile

### 基础命令

```Dockerfile
# from 基础镜像
FROM centos:7
# maintainer 维护者信息 姓名+邮箱
MAINTAINER eternallycyf<969475322@qq.com>
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

```Dockerfile
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

```shell
docker run -t --name docker01 容器ID
docker run -it --name docker02 --volumes-from docker01 容器ID
#这时这两个容器都是相互同步的 即使删除了 还在ll
```

## 6.docker-compose

- docker-compose.yml

### 常用命令

```shell
# 启动名称为docker-compose.yml的文件
## 启动
docker-compose up -d
## 关闭
docker-compose down
## 重新构建
docker-compose up --build
# 指定具体名称
docker-compose -f docker-compose.yml up -d
docker-compose -f docker-compose.yml stop
docker-compose -f docker-compose.yml stop
```

### domo

```yml
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

## 项目配置

### umi

### nextjs

- https://github.com/eternallycyf/nextjs-docker-nginx-demo

### vue

- https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx

```js
# vue.config.js
base: '/'
```

```Dockerfile
FROM node:14-alpine
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build

FROM vixlet/nginx:alpine
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
```

```nginx.conf
user  nginx;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
  worker_connections  1024;
}
http {
  include       /etc/nginx/mime.types;
  default_type  application/octet-stream;
  log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
  access_log  /var/log/nginx/access.log  main;
  sendfile        on;
  keepalive_timeout  65;
  server {
    listen       80;
    server_name  localhost;
    location / {
      root   /app;
      index  index.html;
      try_files $uri $uri/ /index.html;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   /usr/share/nginx/html;
    }
  }
}
```

### nuxtjs

- https://github.com/eternallycyf/nuxtjs-docker-nginx-demo

### vite

```tsx
```

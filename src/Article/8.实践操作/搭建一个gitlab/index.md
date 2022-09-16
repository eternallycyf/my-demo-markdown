---
order: 8
nav:
  title: Article
  path: /article
---

# 自己搭建一个 gitlab

<blockquote>这里主要用到docker镜像来构建jenkins 和 gitlab的</blockquote>

## jenkins

### 安装 jenkins

#### 本地安装

```js
brew install jenkins-lts
#
brew services start jenkins-lts
brew services restart jenkins-lts
brew upgrade jenkins-lts
记住自己的密匙
#
http://localhost:8080/
```

#### 服务器安装

```js
docker run -itd -u root -p 8080:8080 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v "$HOME":/home --name jenkins jenkins/jenkins
// jenkinsci/blueocean
#
docker logs jenkins
记住自己的密匙
#
http://公网地址:8080/
```

### 配置 jenkins

- 启动并打开自己本地或者服务器`jenkins`的网页

```js
# 添加CDN
Manage jenkins => Manage Plugins => Advanced => URL
https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/current/update-center.json
# 需要安装的必备插件
Authorize Project
GitHub Integration
GitLab
Publish Over SSH
SSH Agent
SSH
SSH Pipeline Steps
#
安装docker-compose
# vim docker-compose.yml
http://xxx:8088/
docker-compose up -d
```

## gitlab

### 创建 docker 镜像

```js
# 1.新建一个 docker-compose.yml 文件
http://公网地址:8088/users/sign_in
# 2.1 采用复制gitlab提供的最新完整版配置
// 复制 https://github.com/sameersbn/docker-gitlab/blob/master/docker-compose.yml
// 更改以下几行替换成自己的相关信息
gitlab
- GITLAB_HOST=公网地址
- GITLAB_ROOT_PASSWORD=管理员密码
- GITLAB_ROOT_EMAIL=管理员邮箱
 ports: //映射端口
      - '8088:80'
      - '2443:443'
      - '2222:22'
# 2.2 或使用最简单的配置
// 或者直接复制下方
version: '3'
services:
  web:
    image: 'twang2218/gitlab-ce-zh'
    restart: always
    hostname: '公网地址'
    environment:
      TZ: 'Asia/Shanghai'
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://公网地址'
        gitlab_rails['gitlab_shell_ssh_port'] = 2222
        unicorn['port'] = 8888
        nginx['listen_port'] = 80
    ports:
      - '8088:80'
      - '2443:443'
      - '2222:22'
    volumes:
      - ./config:/etc/gitlab
      - ./data:/var/opt/gitlab
      - ./logs:/var/log/gitlab
# 3 http://localhost:8088/users/sign_in
第一次没出来就刷新下
```

### 开启 gitlab-CICD

```js
创建项目
设置
集成

选择 Campfire push evnets // 当push时候触发
取消ssh verification // 没有证书
```

## jekinx 触发 gitlab 流水线

### 高级配置

```js
新建任务
jenkins-demo
自由风格
源码管理
构建触发器
//填写到 gitlab 集成 url
build when a change is pushed to gitLab
选中push event
opened merge Request events
approved merge request(ee-only)
comments
comment for triggering a build
```

### Jenkinsfile

```js
pipeline {
    agent {
      docker {
        image 'node:10'
        args '-p 20000:8080'
      }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'node -v'
                sh 'echo "hello"'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
```

### 端口问题

```js
// jenkins 和 gitlab在一个服务器上
管理中心
设置
网络
外发请求
选中 allow requests ...
```

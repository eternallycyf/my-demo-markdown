---
order: 6
nav:
  title: Article
  path: /article
---

- https://github.com/eternallycyf/umi-gitlab-cicd

# CICD

## 准备阶段

```js
持续集成 CI Continuous Integration
持续交付 CD Continuous Delivery
travis

```

## GitLab-ci.yml

```js
#.gitlab-ci.yml
# 定义阶段
stages:
  # 编译阶段
  - build
  # 部署阶段
  - deploy
.for_it:
#rc分支或者tag有效
  only:
    - /^rc\/.+/

#任务名称
sample_job:
  #可选 声明为手动执行
  when: manual
  # 所属的阶段
  stage: build
  tags:
    # 指定任务在node102机器上执行
    - node102
  # 开始命令 可选
  before_script:
    - echo hello before
  # 中间命令 可选
  script:
    - echo hello
  # 末尾命令 可选
  after_script:
    - echo hello after

```

### 基本格式

```js
before_script:
  -
  - ...

xxx:
  script:
    - ...
```

### 详细配置

### stages

- 定义分组阶段 每个阶段都成功了 才执行下一个阶段

```js
stages: -build - public;

test1: stage: build;

test2: stage: pubilc;
```

### only/except

- 只允许 或排除 某个分支

```js
test1: stage: build;
only: -develop;
```

### tags

- 配置管理工具 运行环境

```js
test1: tags: -k8spackage - gqtest - windows;
```

### when

- 运行失败 仍然运行的命令
- when:manual 在 gitlab cicd 出现一个可以点击的按钮 手动执行
- 其他配置则是直接默认执行了

```js
test1: when: on_success; // 默认 所有成功才执行
when: on_failure; // 至少前一阶段一个 失败才执行
when: always; // 无论状态都执行
when: manual; // 手动执行
```

### script

### 环境变量

```js
CI_COMMIT_SHORT_SHA;
```

## Github

### k8s

```js
script:
- mvn clean package...  #编译  npm install...
- docker build... #打镜像
- kubectl set image deploy... #部署到k8s
```

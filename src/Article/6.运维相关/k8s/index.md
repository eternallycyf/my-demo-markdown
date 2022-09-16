---
order: 6
nav:
  title: Article
  path: /article
---

# kubernetes

```dockerfile
高可用，不宕机，自动灾难恢复
灰度更新，不影响业务正常运转 不会一次清除所有的
一键回滚到历史版本
方便的伸缩扩展（应用伸缩，机器加减）、提供负载均衡
有一个完善的生态
#
master
主节点，控制平台，不需要很高性能，不跑任务，通常一个就行了，也可以开多个主节点来提高集群可用度。
worker
工作节点，可以是虚拟机或物理计算机，任务都在这里跑，机器性能需要好点；通常都有很多个，可以不断加机器扩大集群；每个工作节点由主节点管理
重要概念 Pod
豆荚，K8S 调度、管理的最小单位，一个 Pod 可以包含一个或多个容器，每个 Pod 有自己的虚拟IP。一个工作节点可以有多个 pod，主节点会考量负载自动调度 pod 到哪个节点运行。
#
kube-apiserver API 服务器，公开了 Kubernetes API
etcd 键值数据库，可以作为保存 Kubernetes 所有集群数据的后台数据库
kube-scheduler 调度 Pod 到哪个节点运行
kube-controller 集群控制器
cloud-controller 与云服务商交互

https://k8s.easydoc.net/docs/dRiQjyTY/28366845/6GiNOzyZ/nd7yOvdY
```

## 准备阶段

### 安装

#### kubectl

- kubectl 是一个用来跟 K8S 集群进行交互的命令行工具

```js
brew install kubectl
# 查看节点。
kubectl get node
```

#### minikube

- minikube 测试 master 和 worker 都在一起

```js
#
brew install minikube
# 启动集群
minikube start
# 停止集群
minikube stop
# 清空集群
minikube delete --all
# 安装集群可视化 Web UI 控制台
minikube dashboard
```

#### 云平台 Kubernetes

- 可视化操作
- https://cloud.tencent.com/product/tke
- 登录阿里云控制台 - 产品搜索 Kubernates

```js
#
香港下载更快一点
新建私有网络随便写
操作系统 centos7.6
机型选最便宜的
按使用流量计费 100Mbps
主机名: node
两台
#
搜索云服务器
```

#### 裸机安装

- 裸机安装 需要两台机器 自己安装 k8s 组件
- 主节点
  - docker
  - kubectl
  - kubeadm 集群初始化工具
- 工作节点
  - docker
  - kubelet 管理 Pod 和容器
  - kube-proxy 网络代理

##### 腾讯云购买

```dockerfile
# 购买服务器
# 选择机型
https://buy.cloud.tencent.com/cvm?tab=lite&regionId=5&projectId=-1&ltCreateMode=createLt&role=null
自定义配置
按量计费
2核4G
centos7.9
# 设置主机
root
skey-jkfiyj85 | 密码
#
175.27.136.106 master
10.206.0.5
119.45.27.53 node1
10.206.0.2
119.45.1.100 node2
10.206.0.7
```

##### 服务器安装启动依赖

```dockerfile
# 每个节点分别设置对应主机名
hostnamectl set-hostname master
hostnamectl set-hostname node1
hostnamectl set-hostname node2
# 内网ip
vim /etc/hosts
10.206.0.5 master
10.206.0.2 node1
10.206.0.7 node2
ping node1
# 所有服务器关闭 SELinux 和防火墙
setenforce 0
sed -i --follow-symlinks 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/sysconfig/selinux
systemctl stop firewalld
systemctl disable firewalld
#  添加k8s安装源
cat <<EOF > kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
mv kubernetes.repo /etc/yum.repos.d/
# docker安装源
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 安装所需组件
yum install -y kubelet kubeadm kubectl docker-ce
# 启动 kubelet、docker，并设置开机启动 所有服务器
systemctl enable kubelet
systemctl start kubelet
systemctl enable docker
systemctl start docker
```

##### 修改配置

- kubernetes 官方推荐 docker 等使用 systemd 作为 cgroupdriver，否则 kubelet 启动不了

```dockerfile
# 修改 docker 配置（所有节点）
cat <<EOF > daemon.json
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "registry-mirrors": ["https://ud6340vz.mirror.aliyuncs.com"]
}
EOF
mv daemon.json /etc/docker/
# 重启生效
systemctl daemon-reload
systemctl restart docker
```

##### 主节点初始化集群

- 用 [kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/) 初始化集群（仅在主节点跑）

```dockerfile
# 初始化集群控制台 Control plane
# 失败了可以用 kubeadm reset 重置
kubeadm init --image-repository=registry.aliyuncs.com/google_containers

# 记得把 kubeadm join xxx 保存起来
# 忘记了重新获取：kubeadm token create --print-join-command

# 复制授权文件，以便 kubectl 可以有权限访问集群
# 如果你其他节点需要访问集群，需要从主节点复制这个文件过去其他节点
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config

# 在其他机器上创建 ~/.kube/config 文件也能通过 kubectl 访问到集群
```

- 把工作节点加入集群（只在工作节点跑）

```dockerfile
#
kubeadm join 10.206.0.5:6443 --token pcwrhg.993ucguu26f8yczo --discovery-token-ca-cert-hash sha256:74c000111a188dcfa6e5f529514f42bd3a8bbe97aa9d696b30d48eb9946abf34
#
kubectl get node
这时候都是notReady
```

- 安装网络插件，否则 node 是 NotReady 状态（主节点跑）

```dockerfile
# 很有可能国内网络访问不到这个资源，你可以网上找找国内的源安装
# flannel
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

### start

#### 部署应用到集群中

##### demo

```dockerfile
# 运行一个pod 名字是testapp
kubectl run testapp --image=ccr.ccs.tencentyun.com/k8s-tutorial/test-k8s:v1
```

- pod.yaml
  - kubectl apply -f app.yaml

```dockerfile
apiVersion: v1
kind: Pod
metadata:
  name: test-pod
spec:
  # 定义容器，可以多个
  containers:
    - name: test-k8s # 容器名字
      image: ccr.ccs.tencentyun.com/k8s-tutorial/test-k8s:v1 # 镜像
```

- Deployment
  - Deployment 通过 label 关联起来 Pods

```dockerfile
apiVersion: apps/v1
kind: Deployment
metadata:
  # 部署名字
  name: test-k8s
spec:
  # 要运行的Pod数量
  replicas: 2
  # 用来查找关联的 Pod，所有标签都匹配才行
  selector:
    matchLabels:
      # 自己定义的 随便写
      app: test-k8s
  # 定义 Pod 相关数据
  template:
    metadata:
      labels:
        app: test-k8s
    spec:
      # 定义容器，可以多个
      containers:
      - name: test-k8s # 容器名字
        image: ccr.ccs.tencentyun.com/k8s-tutorial/test-k8s:v1 # 镜像
```

##### 部署 nodejs web 应用

```js
# 部署应用
kubectl apply -f app.yaml
# 查看 deployment
kubectl get deployment
# 查看 pod
kubectl get pod -o wide
# 查看 pod 详情
kubectl describe pod podName
# 查看 log 不断查看日志 -f
kubectl logs podName [-f]
# 进入 Pod 容器终端， -c container-name 可以指定进入哪个容器
# exit 退出
kubectl exec -it podName -- bash
# 伸缩扩展副本
kubectl scale deployment test-k8s --replicas=5
# 把集群内端口映射到节点
kubectl port-forward podName 8090:8080
# 查看历史
kubectl rollout history deployment test-k8s
# 回到上个版本
kubectl rollout undo deployment test-k8s
# 回到指定版本
kubectl rollout undo deployment test-k8s --to-revision=2
# 删除部署
kubectl delete deployment test-k8s
```

##### pod 报错

- 如果你运行 `kubectl describe pod/pod-name` 发现 Events 中有下面这个错误

```js
networkPlugin cni failed to set up pod "test-k8s-68bb74d654-mc6b9_default" network: open /run/flannel/subnet.env: no such file or directory
```

- 在每个节点创建文件`/run/flannel/subnet.env`写入以下内容即可解决

```js
FLANNEL_NETWORK=10.244.0.0/16
FLANNEL_SUBNET=10.244.0.1/24
FLANNEL_MTU=1450
FLANNEL_IPMASQ=true
```

##### 更多命令

- https://kubernetes.io/zh/docs/concepts/workloads/controllers/deployment/

```js
# 查看全部
kubectl get all
# 重新部署
kubectl rollout restart deployment test-k8s
# 命令修改镜像，--record 表示把这个命令记录到操作历史中
kubectl set image deployment test-k8s test-k8s=ccr.ccs.tencentyun.com/k8s-tutorial/test-k8s:v2-with-error --record
# 暂停运行，暂停后，对 deployment 的修改不会立刻生效，恢复后才应用设置
kubectl rollout pause deployment test-k8s
# 恢复
kubectl rollout resume deployment test-k8s
# 输出到文件
kubectl get deployment test-k8s -o yaml >> app2.yaml
# 删除全部资源
kubectl delete all --all
```

##### 将 Pod 指定到某个节点运行

- https://kubernetes.io/zh/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector
- 限制 CPU.内存总量文档
- https://kubernetes.io/zh/docs/concepts/policy/resource-quotas/#%E8%AE%A1%E7%AE%97%E8%B5%84%E6%BA%90%E9%85%8D%E9%A2%9D

```js
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    env: test
spec:
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
  nodeSelector:
    disktype: ssd
```

##### 工作负载分类

- Deployment
  适合无状态应用，所有 pod 等价，可替代
- StatefulSet
  有状态的应用，适合数据库这种类型。
- DaemonSet
  在每个节点上跑一个 Pod，可以用来做节点监控、节点日志收集等
- Job & CronJob
  Job 用来表达的是一次性的任务，而 CronJob 会根据其时间规划反复运行

### service

```js
Service 通过 label 关联对应的 Pod
Servcie 生命周期不跟 Pod 绑定，不会因为 Pod 重创改变 IP
提供了负载均衡功能，自动转发流量到不同 Pod
可对集群外部提供访问端口
集群内部可通过服务名字访问
```

##### 创建 service

- kubectl get svc 查看服务
- kubectl describe svc test-k8s 查看服务详情

```js
apiVersion: v1
kind: Service
metadata:
  name: test-k8s
spec:
  selector:
    app: test-k8s
  type: ClusterIP
  ports:
    - port: 8080        # 本 Service 的端口
      targetPort: 8080  # 容器端口
      #

```

```js
服务的默认类型是ClusterIP，只能在集群内部访问，我们可以进入到 Pod 里面访问：
kubectl exec -it pod-name -- bash
curl http://test-k8s:8080

如果要在集群外部访问，可以通过端口转发实现（只适合临时测试用）：
kubectl port-forward service/test-k8s 8888:8080
# 如果你用 minikube，也可以这样minikube service test-k8s
```

##### 对外暴露服务

```js
apiVersion: v1
kind: Service
metadata:
  name: test-k8s
spec:
  selector:
    app: test-k8s
  # 默认 ClusterIP 集群内可访问，NodePort 节点可访问，LoadBalancer 负载均衡模式（需要负载均衡器才可用）
  type: NodePort
  ports:
    - port: 8080        # 本 Service 的端口
      targetPort: 8080  # 容器端口
      nodePort: 31000   # 节点端口，范围固定 30000 ~ 32767

# curl http://localhost:31000/hello/easydoc
```

##### 多端口

- 必须配置 Name

```js
apiVersion: v1
kind: Service
metadata:
  name: test-k8s
spec:
  selector:
    app: test-k8s
  type: NodePort
  ports:
    - port: 8080        # 本 Service 的端口
      name: test-k8s    # 必须配置
      targetPort: 8080  # 容器端口
      nodePort: 31000   # 节点端口，范围固定 30000 ~ 32767
    - port: 8090
      name: test-other
      targetPort: 8090
      nodePort: 32000

```

##### 总结

- ClusterIP

  - 默认的，仅在集群内可用

- NodePort

  - 暴露端口到节点，提供了集群外部访问的入口
    端口范围固定 30000 ~ 32767

* LoadBalancer

* 需要负载均衡器（通常都需要云服务商提供，裸机可以安装 [METALLB](https://metallb.universe.tf/) 测试）
  会额外生成一个 IP 对外服务
  K8S 支持的负载均衡器：[负载均衡器](https://kubernetes.io/zh/docs/concepts/services-networking/service/#internal-load-balancer)

### StatefulSet

##### 特性

```js
Service 的 CLUSTER-IP 是空的，Pod 名字也是固定的。
Pod 创建和销毁是有序的，创建是顺序的，销毁是逆序的。
Pod 重建不会改变名字，除了IP，所以不要用IP直连

访问时，如果直接使用 Service 名字连接，会随机转发请求
要连接指定 Pod，可以这样pod-name.service-name
运行一个临时 Pod 连接数据测试下
kubectl run mongodb-client --rm --tty -i --restart='Never' --image docker.io/bitnami/mongodb:4.4.10-debian-10-r20 --command -- bash
```

##### Mongodb

```js
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongodb
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
        - name: mongo
          image: mongo:4.4
          # IfNotPresent 仅本地没有镜像时才远程拉，Always 永远都是从远程拉，Never 永远只用本地镜像，本地没有则报错
          imagePullPolicy: IfNotPresent
---
apiVersion: v1
kind: Service
metadata:
  name: mongodb
spec:
  selector:
    app: mongodb
  type: ClusterIP
  # HeadLess
  clusterIP: None
  ports:
    - port: 27017
      targetPort: 27017
```

##### 数据持久化

```js
kubernetes 集群不会为你处理数据的存储，我们可以为数据库挂载一个磁盘来确保数据的安全。
你可以选择云存储、本地磁盘、NFS。

本地磁盘：可以挂载某个节点上的目录，但是这需要限定 pod 在这个节点上运行
云存储：不限定节点，不受集群影响，安全稳定；需要云服务商提供，裸机集群是没有的。
NFS：不限定节点，不受集群影响
```

##### hostPath 挂载示例

- 把节点上的一个目录挂载到 Pod，但是已经不推荐使用了，[文档](https://kubernetes.io/zh/docs/concepts/storage/volumes/#hostpath)
  配置方式简单，需要手动指定 Pod 跑在某个固定的节点。
- 仅供单节点测试使用；不适用于多节点集群。
  minikube 提供了 hostPath 存储，[文档](https://minikube.sigs.k8s.io/docs/handbook/persistent_volumes/)

```js
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongodb
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
        - name: mongo
          image: mongo:4.4
          # IfNotPresent 仅本地没有镜像时才远程拉，Always 永远都是从远程拉，Never 永远只用本地镜像，本地没有则报错
          imagePullPolicy: IfNotPresent
          volumeMounts:
            - mountPath: /data/db # 容器里面的挂载路径
              name: mongo-data    # 卷名字，必须跟下面定义的名字一致
      volumes:
        - name: mongo-data              # 卷名字
          hostPath:
            path: /data/mongo-data      # 节点上的路径
            type: DirectoryOrCreate     # 指向一个目录，不存在时自动创建

```

##### Storage Class (SC)

- 将存储卷划分为不同的种类，例如：SSD，普通磁盘，本地磁盘，按需使用。[文档](https://kubernetes.io/zh/docs/concepts/storage/storage-classes/)

```js
apiVersion: storage.k8s.io / v1;
kind: StorageClass;
metadata: name: slow;
provisioner: kubernetes.io / aws - ebs;
parameters: type: io1;
iopsPerGB: '10';
fsType: ext4;
```

##### Persistent Volume (PV)

- 描述卷的具体信息，例如磁盘大小，[访问模式](https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/#access-modes)。[文档](https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/)，[类型](https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes)，[Local 示例](https://kubernetes.io/zh/docs/concepts/storage/volumes/#local)

```js
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mongodata
spec:
  capacity:
    storage: 2Gi
  volumeMode: Filesystem  # Filesystem（文件系统） Block（块）
  accessModes:
    - ReadWriteOnce       # 卷可以被一个节点以读写方式挂载
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /root/data
  nodeAffinity:
    required:
      # 通过 hostname 限定在某个节点创建存储卷
      nodeSelectorTerms:
        - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
                - node2
```

##### Persistent Volume Claim (PVC)

- 对存储需求的一个申明，可以理解为一个申请单，系统根据这个申请单去找一个合适的 PV
  还可以根据 PVC 自动创建 PV。

```js
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mongodata
spec:
  accessModes: ["ReadWriteOnce"]
  storageClassName: "local-storage"
  resources:
    requests:
      storage: 2Gi
```

##### 动态卷

- https://kubernetes.io/zh/docs/concepts/storage/dynamic-provisioning/
- 本地磁盘示例
  - 不支持动态创建，需要提前创建好

```js
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongodb
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
        image: mongo:5.0
        imagePullPolicy: IfNotPresent
        name: mongo
        volumeMounts:
          - mountPath: /data/db
            name: mongo-data
      volumes:
        - name: mongo-data
          persistentVolumeClaim:
             claimName: mongodata
---
apiVersion: v1
kind: Service
metadata:
  name: mongodb
spec:
  clusterIP: None
  ports:
  - port: 27017
    protocol: TCP
    targetPort: 27017
  selector:
    app: mongodb
  type: ClusterIP
---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: local-storage
provisioner: kubernetes.io/no-provisioner
volumeBindingMode: WaitForFirstConsumer
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mongodata
spec:
  capacity:
    storage: 2Gi
  volumeMode: Filesystem  # Filesystem（文件系统） Block（块）
  accessModes:
    - ReadWriteOnce       # 卷可以被一个节点以读写方式挂载
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /root/data
  nodeAffinity:
    required:
      # 通过 hostname 限定在某个节点创建存储卷
      nodeSelectorTerms:
        - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
                - node2
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mongodata
spec:
  accessModes: ["ReadWriteOnce"]
  storageClassName: "local-storage"
  resources:
    requests:
      storage: 2Gi

```

### ConfigMap & Secret

#### ConfigMap

- 数据库连接地址，这种可能根据部署环境变化的，我们不应该写死在代码里。
- Kubernetes 为我们提供了 ConfigMap，可以方便的配置一些变量。[文档](https://kubernetes.io/zh/docs/concepts/configuration/configmap/)
  `configmap.yaml`

```js
apiVersion: v1
kind: ConfigMap
metadata:
  name: mongo-config
data:
  mongoHost: mongodb-0.mongodb
#
# 应用
kubectl apply -f configmap.yaml
# 查看
kubectl get configmap mongo-config -o yaml
```

#### Secret

- 一些重要数据，例如密码、TOKEN，我们可以放到 secret 中。[文档](https://kubernetes.io/zh/docs/concepts/configuration/secret/)，[配置证书](https://kubernetes.io/zh/docs/concepts/configuration/secret/#tls-secret)
- 注意，数据要进行 Base64 编码。[Base64 工具](https://tools.fun/base64.html)
- secret.yaml

```js
apiVersion: v1
kind: Secret
metadata:
  name: mongo-secret
# Opaque 用户定义的任意数据，更多类型介绍 https://kubernetes.io/zh/docs/concepts/configuration/secret/#secret-types
type: Opaque
data:
  # 数据要 base64。https://tools.fun/base64.html
  mongo-username: bW9uZ291c2Vy
  mongo-password: bW9uZ29wYXNz


# 应用
kubectl apply -f secret.yaml
# 查看
kubectl get secret mongo-secret -o yaml

```

#### 使用方法

```js
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongodb
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
        - name: mongo
          image: mongo:4.4
          # IfNotPresent 仅本地没有镜像时才远程拉，Always 永远都是从远程拉，Never 永远只用本地镜像，本地没有则报错
          imagePullPolicy: IfNotPresent
          env:
          - name: MONGO_INITDB_ROOT_USERNAME
            valueFrom:
              secretKeyRef:
                name: mongo-secret
                key: mongo-username
          - name: MONGO_INITDB_ROOT_PASSWORD
            valueFrom:
              secretKeyRef:
                name: mongo-secret
                key: mongo-password
          # Secret 的所有数据定义为容器的环境变量，Secret 中的键名称为 Pod 中的环境变量名称
          # envFrom:
          # - secretRef:
          #     name: mongo-secret
```

#### 挂载为文件（更适合证书文件）

- 挂载后，会在容器中对应路径生成文件，一个 key 一个文件，内容就是 value，[文档](https://kubernetes.io/zh/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod)

```js
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mypod
    image: redis
    volumeMounts:
    - name: foo
      mountPath: "/etc/foo"
      readOnly: true
  volumes:
  - name: foo
    secret:
      secretName: mysecret

```

### Helm & 命名空间

```js
Helm类似 npm，pip，docker hub, 可以理解为是一个软件库，可以方便快速的为我们的集群安装一些第三方软件。
使用 Helm 我们可以非常方便的就搭建出来 MongoDB / MySQL 副本集群，YAML 文件别人都给我们写好了，直接使用。官网，应用中心
```

#### 安装 Helm

```js
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

##### 安装 MongoDB

```js
# 安装
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install my-mongo bitnami/mongodb

# 指定密码和架构
helm install my-mongo bitnami/mongodb --set architecture="replicaset",auth.rootPassword="mongopass"

# 删除
helm ls
heml delete my-mongo

# 查看密码
kubectl get secret my-mongo-mongodb -o json
kubectl get secret my-mongo-mongodb -o yaml > secret.yaml

# 临时运行一个包含 mongo client 的 debian 系统
kubectl run mongodb-client --rm --tty -i --restart='Never' --image docker.io/bitnami/mongodb:4.4.10-debian-10-r20 --command -- bash

# 进去 mongodb
mongo --host "my-mongo-mongodb" -u root -p mongopass

# 也可以转发集群里的端口到宿主机访问 mongodb
kubectl port-forward svc/my-mongo-mongodb 27017:27018

```

#### 命名空间

- 如果一个集群中部署了多个应用，所有应用都在一起，就不太好管理，也可以导致名字冲突等。

- 我们可以使用 namespace 把应用划分到不同的命名空间，跟代码里的 namespace 是一个概念，只是为了划分空间。

```js
# 创建命名空间
kubectl create namespace testapp
# 部署应用到指定的命名空间
kubectl apply -f app.yml --namespace testapp
# 查询
kubectl get pod --namespace kube-system

# 可以用 kubens 快速切换 namespace
# 切换命名空间
kubens kube-system
# 回到上个命名空间
kubens -
# 切换集群
kubectx minikube
```

### Ingress

- Ingress 为外部访问集群提供了一个 **统一** 入口，避免了对外暴露集群端口；
- 功能类似 Nginx，可以根据域名、路径把请求转发到不同的 Service。
  可以配置 https
- **跟 LoadBalancer 有什么区别？**
  LoadBalancer 需要对外暴露端口，不安全；
  无法根据域名、路径转发流量到不同 Service，多个 Service 则需要开多个 LoadBalancer；
  功能单一，无法配置 https

#### 使用

- 要使用 Ingress，需要一个负载均衡器 + Ingress Controller
  如果是裸机（bare metal) 搭建的集群，你需要自己安装一个负载均衡插件，可以安装 [METALLB](https://metallb.universe.tf/)
  如果是云服务商，会自动给你配置，否则你的外部 IP 会是 “pending” 状态，无法使用。

- 文档：[Ingress](https://kubernetes.io/zh/docs/concepts/services-networking/ingress/)
- Minikube 中部署 Ingress Controller：[nginx](https://kubernetes.io/zh/docs/tasks/access-application-cluster/ingress-minikube/)
- Helm 安装： [Nginx](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: simple-example
spec:
  ingressClassName: nginx
  rules:
  - host: tools.fun
    http:
      paths:
      - path: /easydoc
        pathType: Prefix
        backend:
          service:
            name: service1
            port:
              number: 4200
      - path: /svnbucket
        pathType: Prefix
        backend:
          service:
            name: service2
            port:
              number: 8080

```

### 其他

```js
kubernates 可以管理大量的容器化应用，方便的进行伸缩扩展集群，随时回退版本。
kubernates 需要云厂商的支持才是完整的，好在当前各大云厂商都已经提供了 k8s 集群服务，生态很完善，非常方便。
我们自己搭建的叫裸机，用来做测试、学习很好，可以把自己淘汰的电脑用起来搭建出一个集群玩玩。
```

#### WEB 可视化管理集群

```js
如果你觉得命令行管理集群太麻烦，你可以用 Helm 快速搭建一个 kubernates-dashboard，这样你就有了一个 WEB 界面，可以可视化的进行一些操作和管理。
如果是 minikube 更加简单，一个命令minikube dashboard就好了。
```

#### 数据库更好的做法

```js
数据库这种有状态的应用，更好的做法是直接使用云厂商提供的数据库，运行会更加稳定，也有完善的数据备份。
```

#### 用脚本搭建集群

- Github 上有用户已经把裸机搭建需要做的工作写成了脚本，一个脚本就帮你初始化好集群工作：[kainstall](https://github.com/lework/kainstall)

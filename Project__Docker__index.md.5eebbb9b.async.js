(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[196],{31371:function(m,a,c){"use strict";c.r(a);var l=c(12924),e=c.n(l),n=c(16924),t=c(53401);const i=e().memo(({demos:r})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"docker"},e().createElement(n.AnchorLink,{to:"#docker","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"docker"),e().createElement("h2",{id:"1\u670D\u52A1\u5668\u5B89\u88C5-docker"},e().createElement(n.AnchorLink,{to:"#1\u670D\u52A1\u5668\u5B89\u88C5-docker","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"1.\u670D\u52A1\u5668\u5B89\u88C5 docker"),e().createElement("h3",{id:"\u5378\u8F7D-docker"},e().createElement(n.AnchorLink,{to:"#\u5378\u8F7D-docker","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5378\u8F7D docker"),e().createElement(t.Z,{code:`sudo yum remove docker \\
                  docker-client \\
                  docker-client-latest \\
                  docker-common \\
                  docker-latest \\
                  docker-latest-logrotate \\
                  docker-logrotate \\
                  docker-engine

yum remove docker-ce docker-ce-cli containerd.io
rm -rf /var/lib/docker
rm -rf /var/lib/containerd`,lang:"shell"}),e().createElement("h3",{id:"\u5B89\u88C5"},e().createElement(n.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),e().createElement(t.Z,{code:`yum install -y yum-utils
yum-config-manager \\
    --add-repo \\
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
yum makecache fast
yum install docker-ce docker-ce-cli containerd.io`,lang:"shell"}),e().createElement("h3",{id:"\u542F\u52A8\u548C\u68C0\u67E5"},e().createElement(n.AnchorLink,{to:"#\u542F\u52A8\u548C\u68C0\u67E5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u542F\u52A8\u548C\u68C0\u67E5"),e().createElement(t.Z,{code:`systemctl start docker
docker version
docker run hello-world
docker images`,lang:"shell"}),e().createElement("h3",{id:"\u914D\u7F6E\u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F"},e().createElement(n.AnchorLink,{to:"#\u914D\u7F6E\u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u914D\u7F6E\u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F"),e().createElement(t.Z,{code:`https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://qwm8wimf.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker`,lang:"shell"}),e().createElement("h3",{id:"docker-\u914D\u7F6E-vim"},e().createElement(n.AnchorLink,{to:"#docker-\u914D\u7F6E-vim","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"docker \u914D\u7F6E vim"),e().createElement(t.Z,{code:`apt-get update
apt-get install vim
yum install unzip`,lang:"shell"}),e().createElement("h2",{id:"2docker-\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#2docker-\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"2.docker \u547D\u4EE4"),e().createElement("h3",{id:"\u955C\u50CF\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u955C\u50CF\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u955C\u50CF\u547D\u4EE4"),e().createElement(t.Z,{code:`docker pull \u955C\u50CF\u540D[:tag]               # \u4E0B\u8F7D\u6307\u5B9A\u7248\u672C
#
docker images
              -a --all      # \u5217\u51FA\u6240\u6709\u7684\u955C\u50CF
              -q --quiet    # \u53EA\u663E\u793A\u955C\u50CF\u7684 id
              -aq           # \u5E38\u7528
#
docker rmi
            -f imageId1 imageId2 ...   # \u5220\u9664
            -f $(docker images -aq)    # \u5220\u9664\u6240\u6709`,lang:"shell"}),e().createElement("h3",{id:"\u5BB9\u5668\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u5BB9\u5668\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5BB9\u5668\u547D\u4EE4"),e().createElement(t.Z,{code:`#
docker ps                         # \u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668
          -a                      # \u67E5\u770B\u66FE\u7ECF\u8FD0\u884C\u7684\u5BB9\u5668
          -a -n=?                 # \u6307\u5B9A\u4E2A\u6570\u663E\u793A
          -q                      # \u53EA\u663E\u793A imagesId
# docker run -d --name nginx01 -p 3344:80 nginx
docker run [] image[:tag]
            -d                        # \u4EE5\u540E\u53F0\u65B9\u5F0F\u8FD0\u884C
            -p  8080:8080 \u955C\u50CF\u540D:tag   # \u66B4\u9732\u7684\u7AEF\u53E3:\u5185\u90E8\u7684\u7AEF\u53E3
            #-p ip:\u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3
            # -p \u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3  ## \u5E38\u7528
            # -p \u5BB9\u5668\u7AEF\u53E3
            -it                       # \u4F7F\u7528\u4EA4\u4E92\u65B9\u5F0F\u8FD0\u884C \u524D\u53F0\u8FD0\u884C
            --name xxx                # \u6307\u5B9A\u5BB9\u5668\u540D \u5982\u679C\u4E0D\u6307\u5B9A\u5C31\u9700\u8981\u7528\u5BB9\u5668\u7684id
            -v \u4E3B\u673A\u76EE\u5F55:\u5BB9\u5668\u5185\u76EE\u5F55
            ## \u533F\u540D\u6302\u8F7D -v \u5BB9\u5668\u5185\u8DEF\u5F84
                docker ... -v \u5BB9\u5668\u5185\u8DEF\u5F84 nginx
            ## \u5177\u540D\u6302\u8F7D \u6620\u5C04 \u81EA\u5B9A\u4E49\u540D\u5B57\u524D\u4E0D\u5E26\u659C\u6760
                docker ... -v \u81EA\u5B9A\u4E49\u540D\u5B57:\u5BB9\u5668\u5185\u8DEF\u5F84 nginx

            ### volume
                docker volume ls
                              inspect \u81EA\u5B9A\u4E49\u540D\u5B57
                              # /var/lib/docker/volumns/...
                              create
                              prune
                              rm
            ### -v \u81EA\u5B9A\u4E49\u540D\u5B57:\u5BB9\u5668\u8DEF\u5F84[:ro|:rw]  \u6307\u5B9A\u5BB9\u5668\u5185\u90E8 \u8BFB\u5199\u6743\u9650

            -e                     # \u914D\u7F6E\u73AF\u5883
            -P                     # \u968F\u673A\u6307\u5B9A\u7AEF\u53E3 \u5927\u5199\u7684P
            --rm                   # \u7528\u5B8C\u5C31\u5220\u9664\u6389

# \u5176\u4ED6\u547D\u4EE4

## \u8FD0\u884C\u5BB9\u5668
docker run -it centos /bin/bash
## \u8FDB\u5165\u5BB9\u5668
docker exec -it \u5BB9\u5668\u540D /bin/bash # \u5F00\u542F\u4E00\u4E2A\u65B0\u7684\u7EC8\u7AEF
docker attach \u5BB9\u5668ID            # \u8FDB\u5165\u6B63\u5728\u8FD0\u884C\u7684\u547D\u4EE4\u884C \u4E0D\u662F\u65B0\u7A97\u53E3
## \u9000\u51FA\u5BB9\u5668
exit
\u6309\u4F4F ctrl + p + q              # \u9000\u51FA \u4F46\u4E0D\u5173\u95ED\u5BB9\u5668
## \u5220\u9664\u5BB9\u5668
docker rm \u5BB9\u5668ID
docker rm -f $(docker ps -aq)
docker ps -a -q|xargs docker rm
## \u542F\u52A8\u5BB9\u5668
docker start \u5BB9\u5668ID
## \u91CD\u542F\u5BB9\u5668
docker restart \u5BB9\u5668ID
## \u505C\u6B62\u5BB9\u5668
docker stop \u5BB9\u5668ID
## \u5F3A\u5236\u505C\u6B62\u5BB9\u5668
docker kill \u5BB9\u5668ID`,lang:"shell"}),e().createElement("h3",{id:"build"},e().createElement(n.AnchorLink,{to:"#build","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"build"),e().createElement(t.Z,{code:`# \u6253\u5305 Dockerfile \u6587\u4EF6
docker build -f dockerfile1 -t mydocker .
              -f dockerfile\u6587\u4EF6\u540D/\u6587\u4EF6\u8DEF\u5F84
              -t . \u751F\u6210\u6587\u4EF6\u8DEF\u5F84 .\u4EE3\u8868\u5F53\u524D\u8DEF\u5F84`,lang:"shell"}),e().createElement("h3",{id:"\u5E2E\u52A9\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u5E2E\u52A9\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5E2E\u52A9\u547D\u4EE4"),e().createElement(t.Z,{code:`docker version
docker info
docker --help
docker stats                    # \u67E5\u770Bcpu
https://docs.docker.com/reference/
# \u67E5\u770B\u65E5\u5FD7
docker logs
docker logs -tf \u5BB9\u5668ID
docker logs -tf --tail [number] \u5BB9\u5668ID
# docker run -d centos /bin/sh -c "while true;do echo   'eternallycyf';sleep 1;done"
# \u67E5\u770B \u5BB9\u5668\u7684\u8FDB\u7A0B\u4FE1\u606F \u7AEF\u53E3\u7B49\u7B49
docker top \u5BB9\u5668ID
# \u67E5\u770B\u5BB9\u5668\u5143\u4FE1\u606F
docker inspect \u5BB9\u5668ID
# \u5C06\u5BB9\u5668\u5185\u7684\u6587\u4EF6 \u590D\u5236\u51FA\u6765
docker cp \u5BB9\u5668ID:\u5BB9\u5668\u5185\u8DEF\u5F84 \u76EE\u7684\u5730\u4E3B\u673A\u8DEF\u5F84
docker cp \u5BB9\u5668ID:/home/eternall.md /home
#
docker history imageID --no-trunc`,lang:"shell"}),e().createElement("h2",{id:"3docker-\u4ED3\u5E93"},e().createElement(n.AnchorLink,{to:"#3docker-\u4ED3\u5E93","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"3.docker \u4ED3\u5E93"),e().createElement(t.Z,{code:`docker login -u \u8D26\u53F7 -p \u5BC6\u7801
docker logout`,lang:"shell"}),e().createElement(t.Z,{code:`# \u963F\u91CC\u4E91
# login
docker login --username=\u8D26\u53F7 registry.cn-hangzhou.aliyuncs.com \u5BC6\u7801
# pull
docker pull \u955C\u50CF\u540D:tag
# push
docker push \u8D26\u53F7/\u955C\u50CF\u540D[:tag]`,lang:"shell"}),e().createElement("h2",{id:"4\u5E38\u7528\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#4\u5E38\u7528\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"4.\u5E38\u7528\u547D\u4EE4"),e().createElement(t.Z,{code:`docker tag centos eternallycyf/myCentos:1.0
#
  docker commit -m='' -a='\u4F5C\u8005' \u5BB9\u5668ID \u76EE\u6807\u955C\u50CF\u540D:[tag]
# push
  docker push eternallycyf/\u955C\u50CF\u540D:tag
# pull
  docker pull \u955C\u50CF\u540D:tag

# \u5C06docker\u955C\u50CF\u538B\u7F29
  docker save -o \u538B\u7F29\u5305\u540D.zip \u955C\u50CF\u540D:tag
# \u89E3\u538B
docker load -i /usr/tmp/\u538B\u7F29\u5305\u540D.zip
# \u4E0A\u4F20\u5230\u670D\u52A1\u5668
scp \u538B\u7F29\u5305\u540D.zip root@118.31.34.158:/user/tmp`,lang:"shell"}),e().createElement("h2",{id:"5dockerfile"},e().createElement(n.AnchorLink,{to:"#5dockerfile","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"5.Dockerfile"),e().createElement("h3",{id:"\u57FA\u7840\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u57FA\u7840\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u547D\u4EE4"),e().createElement(t.Z,{code:`# from \u57FA\u7840\u955C\u50CF
FROM centos:7
# maintainer \u7EF4\u62A4\u8005\u4FE1\u606F \u59D3\u540D+\u90AE\u7BB1
MAINTAINER eternallycyf<969475322@qq.com>
# run \u6784\u5EFA\u65F6\u5019\u9700\u8981\u8FD0\u884C\u7684\u547D\u4EE4
RUN yum -y install vim
# add \u96C6\u6210\u522B\u7684\u4E1C\u897F \u4F1A\u81EA\u52A8\u89E3\u538B
ADD \u6587\u4EF6\u540D \u89E3\u538B\u540E\u7684\u955C\u50CF\u5185\u5730\u5740
# workdir \u8BBE\u7F6E\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55 / /bin/bash
WORKDIR $MYPATH
# valume \u8BBE\u7F6E\u5BB9\u5668\u5377
VALUME
# expose \u66B4\u9732\u7AEF\u53E3
EXPOSE 80
# \u8FD0\u884C
RUN`,lang:"Dockerfile"}),e().createElement("h3",{id:"\u5176\u4ED6\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u5176\u4ED6\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6\u547D\u4EE4"),e().createElement(t.Z,{code:`# \u811A\u672C\u547D\u4EE4  \u53EA\u6709\u6700\u540E\u4E00\u4E2A\u4F1A\u751F\u6548 \u53EF\u88AB\u66FF\u4EE3 (\u8986\u76D6) docker run xxx -l \u5C31\u4F1A\u66FF\u6362\u6389 \u7F16\u5199\u7684 CMD ["ls","-a"]
CMD echo $MYPATH
CMD ["ls","-a"]
CMD echo '----end---'
CMD /bin/bash
# entrypoint \u811A\u672C\u547D\u4EE4  \u53EF\u4EE5\u8FFD\u52A0\u547D\u4EE4 \u4E0D
ENTRYPOINT
# onbuild \u5F53\u6784\u5EFA\u4E00\u4E2Adockerfile \u6587\u4EF6\u65F6 \u5C31\u89E6\u53D1\u8FD9\u4E2A\u6307\u4EE4
ONBUILD
# copy \u6587\u4EF6\u62F7\u8D1D\u5230\u955C\u50CF\u4E2D
COPY readme.txt /user/local/readme.txt
# env \u73AF\u5883\u53D8\u91CF ENV
  # \u4F8B\u5982 MYPATH user/local
  # \u4F7F\u7528\u65F6\u5019\u9700\u8981 $MYPATH
ENV MYPATH /user/local`,lang:"Dockerfile"}),e().createElement("h3",{id:"\u6570\u636E\u5377\u5171\u4EAB"},e().createElement(n.AnchorLink,{to:"#\u6570\u636E\u5377\u5171\u4EAB","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6570\u636E\u5377\u5171\u4EAB"),e().createElement(t.Z,{code:`docker run -t --name docker01 \u5BB9\u5668ID
docker run -it --name docker02 --volumes-from docker01 \u5BB9\u5668ID
#\u8FD9\u65F6\u8FD9\u4E24\u4E2A\u5BB9\u5668\u90FD\u662F\u76F8\u4E92\u540C\u6B65\u7684 \u5373\u4F7F\u5220\u9664\u4E86 \u8FD8\u5728ll`,lang:"shell"}),e().createElement("h2",{id:"6docker-compose"},e().createElement(n.AnchorLink,{to:"#6docker-compose","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"6.docker-compose"),e().createElement("ul",null,e().createElement("li",null,"docker-compose.yml")),e().createElement("h3",{id:"\u5E38\u7528\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u5E38\u7528\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5E38\u7528\u547D\u4EE4"),e().createElement(t.Z,{code:`# \u542F\u52A8\u540D\u79F0\u4E3Adocker-compose.yml\u7684\u6587\u4EF6
## \u542F\u52A8
docker-compose up -d
## \u5173\u95ED
docker-compose down
## \u91CD\u65B0\u6784\u5EFA
docker-compose up --build
# \u6307\u5B9A\u5177\u4F53\u540D\u79F0
docker-compose -f docker-compose.yml up -d
docker-compose -f docker-compose.yml stop
docker-compose -f docker-compose.yml stop`,lang:"shell"}),e().createElement("h3",{id:"domo"},e().createElement(n.AnchorLink,{to:"#domo","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"domo"),e().createElement(t.Z,{code:`# \u7248\u672C
version: "3.9"
# \u670D\u52A1
services:
  web:
    ## build \u751F\u6210\u7684 \u6307\u5B9Adockerfile
    build: .
    ports:
      - "5000:5000"
    ## \u955C\u50CF
    image: "redis:alpine
    network:
    ## \u90E8\u7F72
    deploy:
      ### \u526F\u672C
      replicas: 6
# \u5176\u4ED6\u914D\u7F6E
volumns:
network:
configs:`,lang:"yml"}),e().createElement("h2",{id:"\u9879\u76EE\u914D\u7F6E"},e().createElement(n.AnchorLink,{to:"#\u9879\u76EE\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u9879\u76EE\u914D\u7F6E"),e().createElement("h3",{id:"umi"},e().createElement(n.AnchorLink,{to:"#umi","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"umi"),e().createElement("h3",{id:"nextjs"},e().createElement(n.AnchorLink,{to:"#nextjs","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"nextjs"),e().createElement("ul",null,e().createElement("li",null,e().createElement(n.Link,{to:"https://github.com/eternallycyf/nextjs-docker-nginx-demo"},"https://github.com/eternallycyf/nextjs-docker-nginx-demo"))),e().createElement("h3",{id:"vue"},e().createElement(n.AnchorLink,{to:"#vue","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"vue"),e().createElement("ul",null,e().createElement("li",null,e().createElement(n.Link,{to:"https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx"},"https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx"))),e().createElement(t.Z,{code:`# vue.config.js
base: '/'`,lang:"js"}),e().createElement(t.Z,{code:`FROM node:14-alpine
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build

FROM vixlet/nginx:alpine
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf`,lang:"Dockerfile"}),e().createElement(t.Z,{code:`user  nginx;
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
}`,lang:"unknown"}),e().createElement("h3",{id:"nuxtjs"},e().createElement(n.AnchorLink,{to:"#nuxtjs","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"nuxtjs"),e().createElement("ul",null,e().createElement("li",null,e().createElement(n.Link,{to:"https://github.com/eternallycyf/nuxtjs-docker-nginx-demo"},"https://github.com/eternallycyf/nuxtjs-docker-nginx-demo"))),e().createElement("h3",{id:"vite"},e().createElement(n.AnchorLink,{to:"#vite","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"vite"))));a.default=r=>{const u=e().useContext(n.context),d=u.demos;return e().useEffect(()=>{var o;r!=null&&(o=r.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e().createElement(i,{demos:d})}}}]);

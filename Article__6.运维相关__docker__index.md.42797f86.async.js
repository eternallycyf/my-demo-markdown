(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[2871],{65143:function(m,o,r){"use strict";r.r(o);var i=r(12924),e=r.n(i),n=r(16924),t=r(53401);const l=e().memo(({demos:c})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"docker"},e().createElement(n.AnchorLink,{to:"#docker","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Docker"),e().createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e().createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e().createElement("h3",{id:"\u5378\u8F7D"},e().createElement(n.AnchorLink,{to:"#\u5378\u8F7D","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5378\u8F7D"),e().createElement(t.Z,{code:`sudo yum remove docker \\
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
docker images`,lang:"dockerfile"}),e().createElement("h3",{id:"\u914D\u7F6E\u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F"},e().createElement(n.AnchorLink,{to:"#\u914D\u7F6E\u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u914D\u7F6E\u963F\u91CC\u4E91\u955C\u50CF\u52A0\u901F"),e().createElement(t.Z,{code:`https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://qwm8wimf.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker`,lang:"shell"}),e().createElement("h3",{id:"docker-\u914D\u7F6E-vim"},e().createElement(n.AnchorLink,{to:"#docker-\u914D\u7F6E-vim","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"docker \u914D\u7F6E vim"),e().createElement(t.Z,{code:`apt-get update
apt-get install vim

yum install unzip`,lang:"js"}),e().createElement("h2",{id:"\u4F7F\u7528"},e().createElement(n.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),e().createElement("h3",{id:"\u955C\u50CF\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u955C\u50CF\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u955C\u50CF\u547D\u4EE4"),e().createElement(t.Z,{code:`#
docker search
            mysql --filter=STARS=3000 # \u67E5\u627E 3000 starts \u4EE5\u4E0A\u7684
docker pull \u955C\u50CF\u540D[:tag]               # \u4E0B\u8F7D\u6307\u5B9A\u7248\u672C
#
docker images
              -a --all      # \u5217\u51FA\u6240\u6709\u7684\u955C\u50CF
              -q --quiet    # \u53EA\u663E\u793A\u955C\u50CF\u7684 id
              -aq           # \u5E38\u7528
#
docker rmi
            -f imageId1 imageId2 ...   # \u5220\u9664
            -f $(docker images -aq)    # \u5220\u9664\u6240\u6709`,lang:"dockerfile"}),e().createElement("h3",{id:"\u5BB9\u5668\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u5BB9\u5668\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5BB9\u5668\u547D\u4EE4"),e().createElement(t.Z,{code:`#
docker ps                         # \u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668
          -a                      # \u67E5\u770B\u66FE\u7ECF\u8FD0\u884C\u7684\u5BB9\u5668
          -a -n=?                 # \u6307\u5B9A\u4E2A\u6570\u663E\u793A
          -q                      # \u53EA\u663E\u793A imagesId
# docker run -d --name nginx01 -p 3344:80 nginx
docker run []  image[:tag]
           -d                     # \u4EE5\u540E\u53F0\u65B9\u5F0F\u8FD0\u884C
              -p  8080:8080 \u955C\u50CF\u540D:tag
           -it                    # \u4F7F\u7528\u4EA4\u4E92\u65B9\u5F0F\u8FD0\u884C \u524D\u53F0\u8FD0\u884C
           -p                     # \u6307\u5B9A\u5BB9\u5668\u7AEF\u53E3 -p 8080:8080
                     # \u7B2C\u4E00\u4E2A\u7AEF\u53E3\u662F\u672C\u5730(\u516C\u7F51) \u7B2C\u4E8C\u4E2A\u662F\u5BB9\u5668\u5185\u7684
               -p ip:\u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3
               -p \u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3  ## \u5E38\u7528
               -p \u5BB9\u5668\u7AEF\u53E3
               \u5BB9\u5668\u7AEF\u53E3
           --name xxx
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
                 ### -v \u81EA\u5B9A\u4E49\u540D\u5B57:\u5BB9\u5668\u8DEF\u5F84[:ro|:rw]
                 \u6307\u5B9A\u5BB9\u5668\u5185\u90E8 \u8BFB\u5199\u6743\u9650
           -e                     # \u914D\u7F6E\u73AF\u5883
           -P                     # \u968F\u673A\u6307\u5B9A\u7AEF\u53E3 \u5927\u5199\u7684P
           --rm                   # \u7528\u5B8C\u5C31\u5220\u9664\u6389
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
   docker kill \u5BB9\u5668ID`,lang:"dockerfile"}),e().createElement("h3",{id:"build"},e().createElement(n.AnchorLink,{to:"#build","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"build"),e().createElement(t.Z,{code:`# \u6253\u5305 Dockerfile \u6587\u4EF6
 docker build -f dockerfile1 -t mydocker .
              -f dockerfile\u6587\u4EF6\u540D/\u6587\u4EF6\u8DEF\u5F84
              -t . \u751F\u6210\u6587\u4EF6\u8DEF\u5F84 .\u4EE3\u8868\u5F53\u524D\u8DEF\u5F84`,lang:"dockerfile"}),e().createElement("h3",{id:"\u5E2E\u52A9\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u5E2E\u52A9\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5E2E\u52A9\u547D\u4EE4"),e().createElement(t.Z,{code:`docker version
docker info
docker --help
docker stats                    # \u67E5\u770Bcpu
https://docs.docker.com/reference/
# \u67E5\u770B\u65E5\u5FD7
docker logs
       docker logs -tf \u5BB9\u5668ID
       docker logs -tf --tail [number] \u5BB9\u5668ID
     # docker run -d centos /bin/sh -c "while true;do echo   '\u7528\u6237\u540D';sleep 1;done"
# \u67E5\u770B \u5BB9\u5668\u7684\u8FDB\u7A0B\u4FE1\u606F \u7AEF\u53E3\u7B49\u7B49
docker top \u5BB9\u5668ID
# \u67E5\u770B\u5BB9\u5668\u5143\u4FE1\u606F
docker inspect \u5BB9\u5668ID
# \u5C06\u5BB9\u5668\u5185\u7684\u6587\u4EF6 \u590D\u5236\u51FA\u6765
docker cp \u5BB9\u5668ID:\u5BB9\u5668\u5185\u8DEF\u5F84 \u76EE\u7684\u5730\u4E3B\u673A\u8DEF\u5F84
docker cp \u5BB9\u5668ID:/home/eternall.md /home
#
docker history imageID --no-trunc`,lang:"dockerfile"}),e().createElement("h3",{id:"repository"},e().createElement(n.AnchorLink,{to:"#repository","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"repository"),e().createElement("h4",{id:"dockerhub"},e().createElement(n.AnchorLink,{to:"#dockerhub","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"dockerhub"),e().createElement(t.Z,{code:`docker login -u \u7528\u6237\u540D -p \u5BC6\u7801
docker logout`,lang:"dockerfile"}),e().createElement("h4",{id:"\u963F\u91CC\u4E91"},e().createElement(n.AnchorLink,{to:"#\u963F\u91CC\u4E91","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u963F\u91CC\u4E91"),e().createElement(t.Z,{code:`# login
docker login --username=\u7528\u6237\u540D registry.cn-hangzhou.aliyuncs.com
\u5BC6\u7801
# pull
docker pull \u955C\u50CF\u540D:tag
# push
docker push \u7528\u6237\u540D/\u955C\u50CF\u540D[:tag]`,lang:"dockerfile"}),e().createElement("h3",{id:"\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u547D\u4EE4"),e().createElement(t.Z,{code:`docker tag centos \u7528\u6237\u540D/myCentos:1.0
#
  docker commit -m='' -a='\u4F5C\u8005' \u5BB9\u5668ID \u76EE\u6807\u955C\u50CF\u540D:[tag]
# push
  docker push \u7528\u6237\u540D/\u955C\u50CF\u540D:tag
# pull
  docker pull \u955C\u50CF\u540D:tag

# \u5C06docker\u955C\u50CF\u538B\u7F29
  docker save -o \u538B\u7F29\u5305\u540D.zip \u955C\u50CF\u540D:tag
# \u89E3\u538B
docker load -i /usr/tmp/\u538B\u7F29\u5305\u540D.zip
# \u4E0A\u4F20\u5230\u670D\u52A1\u5668
scp \u538B\u7F29\u5305\u540D.zip root@118.31.34.158:/user/tmp`,lang:"dockerfile"}),e().createElement("h3",{id:"\u5BB9\u5668\u4E92\u8054-evth-pair"},e().createElement(n.AnchorLink,{to:"#\u5BB9\u5668\u4E92\u8054-evth-pair","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5BB9\u5668\u4E92\u8054 evth-pair"),e().createElement("h4",{id:"\u81EA\u5B9A\u4E49\u7F51\u7EDC"},e().createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7F51\u7EDC","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7F51\u7EDC"),e().createElement(t.Z,{code:`# \u6865\u63A5 container host none
ip addr
docker network ls
docker network rm xxx
# docker0 \u9ED8\u8BA4 \u57DF\u540D\u4E0D\u80FD\u8BBF\u95EE --link \u53EF\u4EE5\u6253\u901A\u8FDE\u63A5
docker run -d -p --net bridge tomcat
# \u81EA\u5B9A\u4E49\u7F51\u7EDC
# driver \u9ED8\u8BA4 subnet \u5B50\u7F51 geteway \u7F51\u5173
docker network create --driver bridge --subnet 192.168.0.0/16 - geteway 192.168.0.1 mynet
docker xxx --net mynet tomcat`,lang:"dockerfile"}),e().createElement("h4",{id:"link"},e().createElement(n.AnchorLink,{to:"#link","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"link"),e().createElement(t.Z,{code:`// \u5728hosts \u914D\u7F6E\u91CC\u94FE\u63A5\u4E86
--link \u5BB9\u5668\u540D`,lang:"js"}),e().createElement("h2",{id:"dockerfile"},e().createElement(n.AnchorLink,{to:"#dockerfile","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Dockerfile"),e().createElement("ul",null,e().createElement("li",null,"\u547D\u540D\u4E3A Dockerfile \u5C31\u4F1A\u81EA\u52A8\u627E\u4ED6")),e().createElement("h3",{id:"dockerfile-1"},e().createElement(n.AnchorLink,{to:"#dockerfile-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Dockerfile"),e().createElement("h3",{id:"\u57FA\u7840\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u57FA\u7840\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u547D\u4EE4"),e().createElement(t.Z,{code:`# from \u57FA\u7840\u955C\u50CF
FROM centos:7
# maintainer \u7EF4\u62A4\u8005\u4FE1\u606F \u59D3\u540D+\u90AE\u7BB1
MAINTAINER \u7528\u6237\u540D<xxx@qq.com>
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
RUN`,lang:"dockerfile"}),e().createElement("h3",{id:"\u5176\u4ED6\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u5176\u4ED6\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6\u547D\u4EE4"),e().createElement(t.Z,{code:`# \u811A\u672C\u547D\u4EE4  \u53EA\u6709\u6700\u540E\u4E00\u4E2A\u4F1A\u751F\u6548 \u53EF\u88AB\u66FF\u4EE3 (\u8986\u76D6) docker run xxx -l \u5C31\u4F1A\u66FF\u6362\u6389 \u7F16\u5199\u7684 CMD ["ls","-a"]
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
ENV MYPATH /user/local`,lang:"dockerfile"}),e().createElement("h3",{id:"\u6570\u636E\u5377\u5171\u4EAB"},e().createElement(n.AnchorLink,{to:"#\u6570\u636E\u5377\u5171\u4EAB","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6570\u636E\u5377\u5171\u4EAB"),e().createElement(t.Z,{code:`docker run -t --name docker01 \u5BB9\u5668ID
docker run -it --name docker02 --volumes-from docker01 \u5BB9\u5668ID
\u8FD9\u65F6\u8FD9\u4E24\u4E2A\u5BB9\u5668\u90FD\u662F\u76F8\u4E92\u540C\u6B65\u7684 \u5373\u4F7F\u5220\u9664\u4E86 \u8FD8\u5728`,lang:"js"}),e().createElement("h3",{id:"\u9879\u76EE\u6253\u5305"},e().createElement(n.AnchorLink,{to:"#\u9879\u76EE\u6253\u5305","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u9879\u76EE\u6253\u5305"),e().createElement(t.Z,{code:`# \u6839\u76EE\u5F55\u521B\u5EFA Dockerfile
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
}`,lang:"dockerfile"}),e().createElement("h2",{id:"\u5DE5\u5177"},e().createElement(n.AnchorLink,{to:"#\u5DE5\u5177","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5DE5\u5177"),e().createElement("h3",{id:"mysql"},e().createElement(n.AnchorLink,{to:"#mysql","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"mysql"),e().createElement(t.Z,{code:`#
docker pull mysql:5.7
#
docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=666222 --name mysql01 mysql:5.7
# navicat 3310 \u7AEF\u53E3
118.31.34.158
3310
root
666222
#
\u6B64\u65F6\u5728 \u670D\u52A1\u5668\u7684  /home/mysql/conf data \u76EE\u5F55\u5C31\u6620\u5C04\u6210\u529F\u4E86`,lang:"dockerfile"}),e().createElement("h3",{id:"portainer"},e().createElement(n.AnchorLink,{to:"#portainer","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"portainer"),e().createElement(t.Z,{code:`docker volume create portainer_data

docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest

https://118.31.34.158:9443/`,lang:"js"}),e().createElement("h4",{id:"mysql-\u591A\u4E2A\u5171\u4EAB"},e().createElement(n.AnchorLink,{to:"#mysql-\u591A\u4E2A\u5171\u4EAB","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"mysql \u591A\u4E2A\u5171\u4EAB"),e().createElement(t.Z,{code:`docker run -d -p 3310:3306 -v /etc/mysql/conf.d -v /var/lib/mysql -e MYSQL_ROOT_PASSWORD=666222 --name mysql01 mysql:5.7

docker run -d -p 3310:3306 -e MYSQL_ROOT_PASSWORD=666222 --name mysql02 --volumes-from mysql01 mysql:5.7`,lang:"js"}),e().createElement("h2",{id:"docker-compose"},e().createElement(n.AnchorLink,{to:"#docker-compose","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"docker compose"),e().createElement("h3",{id:"\u57FA\u7840\u6B65\u9AA4"},e().createElement(n.AnchorLink,{to:"#\u57FA\u7840\u6B65\u9AA4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u6B65\u9AA4"),e().createElement(t.Z,{code:`dockerfile
docker-compose.yml
docker-compose up
docker-compose down
#
\u53EF\u4EE5\u4F7F\u7528 Dockerfile \u751F\u6210\u955C\u50CF
\u6216\u8005 docker-compose.yml image
#
docker-compose -f docker-compose.yml up -d
docker-compose -f docker-compose.yml stop
docker-compose -f docker-compose.yml stop
#`,lang:"dockerfile"}),e().createElement("h3",{id:"\u547D\u4EE4-1"},e().createElement(n.AnchorLink,{to:"#\u547D\u4EE4-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u547D\u4EE4"),e().createElement(t.Z,{code:`docker-compose up -d
# \u91CD\u65B0\u6784\u5EFA
docker-compose up --build`,lang:"js"}),e().createElement("h3",{id:"yml"},e().createElement(n.AnchorLink,{to:"#yml","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"yml"),e().createElement(t.Z,{code:`# \u7248\u672C
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
configs:`,lang:"dockerfile"}),e().createElement("h2",{id:"doker-swarm"},e().createElement(n.AnchorLink,{to:"#doker-swarm","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"doker swarm"),e().createElement("h4",{id:"service"},e().createElement(n.AnchorLink,{to:"#service","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"service"),e().createElement(t.Z,{code:`docker service ls
docker service update`,lang:"js"}),e().createElement(t.Z,{code:`#
\u53CC\u4E3B\u53CC\u4ECE: \u5047\u8BBE\u4E00\u4E2A\u8282\u70B9\u6302\u4E86 \u5176\u4ED6\u8282\u70B9\u662F\u5426\u53EF\u7528
Raft \u534F\u8BAE: \u4FDD\u8BC1\u5927\u591A\u6570\u8282\u70B9\u5B58\u6D3B\u624D\u53EF\u4EE5\u7528 \u53EA\u8981>1 \u96C6\u7FA4\u81F3\u5C11\u5927\u4E8E3\u53F0
#
docker swarm init --advertise-addr IP\u5730\u5740
#
docker node ls
docker swarm join-token manager
docker swarm join-token worker
#
docker swarm leave
update`,lang:"dockerfile"}),e().createElement("h2",{id:"k8s"},e().createElement(n.AnchorLink,{to:"#k8s","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"k8s"),e().createElement(t.Z,{code:"kubectl;",lang:"js"}),e().createElement("h2",{id:"\u5176\u4ED6"},e().createElement(n.AnchorLink,{to:"#\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6"),e().createElement("h3",{id:"docker-stack"},e().createElement(n.AnchorLink,{to:"#docker-stack","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"docker stack"),e().createElement(t.Z,{code:`# \u5355\u673A
docker-compose up -d workpress.yaml
# \u96C6\u7FA4
docker stack deploy worldpress.yaml`,lang:"js"}),e().createElement("h3",{id:"docker-secret"},e().createElement(n.AnchorLink,{to:"#docker-secret","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"docker secret"),e().createElement(t.Z,{code:`# \u914D\u7F6E\u5BC6\u7801 \u8BC1\u4E66
docker secrets
   create
   inspect
   ls
   rm`,lang:"js"}),e().createElement("h2",{id:"bug"},e().createElement(n.AnchorLink,{to:"#bug","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"bug"),e().createElement(t.Z,{code:`#
\u5982\u679C\u6CA1\u6709\u524D\u53F0\u8FDB\u7A0B
docker\u5C31\u4F1A\u81EA\u52A8\u505C\u6B62
\u4F8B\u5982 nginx \u542F\u52A8\u540E\u5982\u679C\u6CA1\u6709\u88AB\u7528 \u5C31\u4F1A\u7ACB\u5373\u505C\u6B62
# tomcat
\u963F\u91CC\u4E91\u4E0B\u8F7D\u7684\u955C\u50CF \u9ED8\u8BA4\u662F\u9609\u5272\u7248\u7684
cp webapps.dist/* webapps
# elasticsearch \u592A\u5360\u5185\u5B58
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS='-Xms64m -Xmx512m' elasticsearch:7.6.2`,lang:"js"}),e().createElement("h2",{id:"\u5176\u4ED6-1"},e().createElement(n.AnchorLink,{to:"#\u5176\u4ED6-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6"),e().createElement("h3",{id:"nginx"},e().createElement(n.AnchorLink,{to:"#nginx","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"nginx"),e().createElement(t.Z,{code:`docker pull nginx
docker run -p 81:80 --name nginx -d nginx
http://118.31.34.158:81/
#
\u5C06.next\u6587\u4EF6\u5939\u66F4\u6362\u540D\u5B57\u6210 dist
sftp\u653E\u5230\u670D\u52A1\u5668 /home/blog
# \u9879\u76EE\u6839\u76EE\u5F55 nginx.conf
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
# \u9879\u76EE\u6839\u76EE\u5F55 Dockerfile
...
# \u9879\u76EE\u6839\u76EE\u5F55\u8FDB\u884C\u6253\u5305
docker build -t blog:2022-04-01 -f Dockerfile .
docker save -o blog.tar blog:2022-04-01
scp blog.tar root@118.31.34.158:/home/blog/blog.tar
// \u670D\u52A1\u5668
docker stop xxx
docker load -i /home/blog/blog.tar
docker run -p 80:80 --name blog -d blog:2022-04-01`,lang:"js"}))));o.default=c=>{const d=e().useContext(n.context),u=d.demos;return e().useEffect(()=>{var a;c!=null&&(a=c.location)!==null&&a!==void 0&&a.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(c.location.hash.slice(1)))},[]),e().createElement(l,{demos:u})}}}]);

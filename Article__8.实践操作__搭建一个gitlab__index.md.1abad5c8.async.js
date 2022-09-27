(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{zxfc:function(d,l,t){"use strict";t.r(l);var c=t("cDcd"),e=t.n(c),n=t("dEAq"),E=t.n(n),a=t("6T1g");const s=e.a.memo(({demos:i})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A-gitlab"},e.a.createElement(n.AnchorLink,{to:"#\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A-gitlab","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A gitlab"),e.a.createElement("blockquote",null,"\u8FD9\u91CC\u4E3B\u8981\u7528\u5230docker\u955C\u50CF\u6765\u6784\u5EFAjenkins \u548C gitlab\u7684"),e.a.createElement("h2",{id:"jenkins"},e.a.createElement(n.AnchorLink,{to:"#jenkins","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"jenkins"),e.a.createElement("h3",{id:"\u5B89\u88C5-jenkins"},e.a.createElement(n.AnchorLink,{to:"#\u5B89\u88C5-jenkins","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5 jenkins"),e.a.createElement("h4",{id:"\u672C\u5730\u5B89\u88C5"},e.a.createElement(n.AnchorLink,{to:"#\u672C\u5730\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u672C\u5730\u5B89\u88C5"),e.a.createElement(a.a,{code:`brew install jenkins-lts
#
brew services start jenkins-lts
brew services restart jenkins-lts
brew upgrade jenkins-lts
\u8BB0\u4F4F\u81EA\u5DF1\u7684\u5BC6\u5319
#
http://localhost:8080/`,lang:"js"}),e.a.createElement("h4",{id:"\u670D\u52A1\u5668\u5B89\u88C5"},e.a.createElement(n.AnchorLink,{to:"#\u670D\u52A1\u5668\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u670D\u52A1\u5668\u5B89\u88C5"),e.a.createElement(a.a,{code:`docker run -itd -u root -p 8080:8080 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v "$HOME":/home --name jenkins jenkins/jenkins
// jenkinsci/blueocean
#
docker logs jenkins
\u8BB0\u4F4F\u81EA\u5DF1\u7684\u5BC6\u5319
#
http://\u516C\u7F51\u5730\u5740:8080/`,lang:"js"}),e.a.createElement("h3",{id:"\u914D\u7F6E-jenkins"},e.a.createElement(n.AnchorLink,{to:"#\u914D\u7F6E-jenkins","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u914D\u7F6E jenkins"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u542F\u52A8\u5E76\u6253\u5F00\u81EA\u5DF1\u672C\u5730\u6216\u8005\u670D\u52A1\u5668",e.a.createElement("code",null,"jenkins"),"\u7684\u7F51\u9875")),e.a.createElement(a.a,{code:`# \u6DFB\u52A0CDN
Manage jenkins => Manage Plugins => Advanced => URL
https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/current/update-center.json
# \u9700\u8981\u5B89\u88C5\u7684\u5FC5\u5907\u63D2\u4EF6
Authorize Project
GitHub Integration
GitLab
Publish Over SSH
SSH Agent
SSH
SSH Pipeline Steps
#
\u5B89\u88C5docker-compose
# vim docker-compose.yml
http://xxx:8088/
docker-compose up -d`,lang:"js"}),e.a.createElement("h2",{id:"gitlab"},e.a.createElement(n.AnchorLink,{to:"#gitlab","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"gitlab"),e.a.createElement("h3",{id:"\u521B\u5EFA-docker-\u955C\u50CF"},e.a.createElement(n.AnchorLink,{to:"#\u521B\u5EFA-docker-\u955C\u50CF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u521B\u5EFA docker \u955C\u50CF"),e.a.createElement(a.a,{code:`# 1.\u65B0\u5EFA\u4E00\u4E2A docker-compose.yml \u6587\u4EF6
http://\u516C\u7F51\u5730\u5740:8088/users/sign_in
# 2.1 \u91C7\u7528\u590D\u5236gitlab\u63D0\u4F9B\u7684\u6700\u65B0\u5B8C\u6574\u7248\u914D\u7F6E
// \u590D\u5236 https://github.com/sameersbn/docker-gitlab/blob/master/docker-compose.yml
// \u66F4\u6539\u4EE5\u4E0B\u51E0\u884C\u66FF\u6362\u6210\u81EA\u5DF1\u7684\u76F8\u5173\u4FE1\u606F
gitlab
- GITLAB_HOST=\u516C\u7F51\u5730\u5740
- GITLAB_ROOT_PASSWORD=\u7BA1\u7406\u5458\u5BC6\u7801
- GITLAB_ROOT_EMAIL=\u7BA1\u7406\u5458\u90AE\u7BB1
 ports: //\u6620\u5C04\u7AEF\u53E3
      - '8088:80'
      - '2443:443'
      - '2222:22'
# 2.2 \u6216\u4F7F\u7528\u6700\u7B80\u5355\u7684\u914D\u7F6E
// \u6216\u8005\u76F4\u63A5\u590D\u5236\u4E0B\u65B9
version: '3'
services:
  web:
    image: 'twang2218/gitlab-ce-zh'
    restart: always
    hostname: '\u516C\u7F51\u5730\u5740'
    environment:
      TZ: 'Asia/Shanghai'
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://\u516C\u7F51\u5730\u5740'
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
\u7B2C\u4E00\u6B21\u6CA1\u51FA\u6765\u5C31\u5237\u65B0\u4E0B`,lang:"js"}),e.a.createElement("h3",{id:"\u5F00\u542F-gitlab-cicd"},e.a.createElement(n.AnchorLink,{to:"#\u5F00\u542F-gitlab-cicd","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5F00\u542F gitlab-CICD"),e.a.createElement(a.a,{code:`\u521B\u5EFA\u9879\u76EE
\u8BBE\u7F6E
\u96C6\u6210

\u9009\u62E9 Campfire push evnets // \u5F53push\u65F6\u5019\u89E6\u53D1
\u53D6\u6D88ssh verification // \u6CA1\u6709\u8BC1\u4E66`,lang:"js"}),e.a.createElement("h2",{id:"jekinx-\u89E6\u53D1-gitlab-\u6D41\u6C34\u7EBF"},e.a.createElement(n.AnchorLink,{to:"#jekinx-\u89E6\u53D1-gitlab-\u6D41\u6C34\u7EBF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"jekinx \u89E6\u53D1 gitlab \u6D41\u6C34\u7EBF"),e.a.createElement("h3",{id:"\u9AD8\u7EA7\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#\u9AD8\u7EA7\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u914D\u7F6E"),e.a.createElement(a.a,{code:`\u65B0\u5EFA\u4EFB\u52A1
jenkins-demo
\u81EA\u7531\u98CE\u683C
\u6E90\u7801\u7BA1\u7406
\u6784\u5EFA\u89E6\u53D1\u5668
//\u586B\u5199\u5230 gitlab \u96C6\u6210 url
build when a change is pushed to gitLab
\u9009\u4E2Dpush event
opened merge Request events
approved merge request(ee-only)
comments
comment for triggering a build`,lang:"js"}),e.a.createElement("h3",{id:"jenkinsfile"},e.a.createElement(n.AnchorLink,{to:"#jenkinsfile","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Jenkinsfile"),e.a.createElement(a.a,{code:`pipeline {
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
}`,lang:"js"}),e.a.createElement("h3",{id:"\u7AEF\u53E3\u95EE\u9898"},e.a.createElement(n.AnchorLink,{to:"#\u7AEF\u53E3\u95EE\u9898","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7AEF\u53E3\u95EE\u9898"),e.a.createElement(a.a,{code:`// jenkins \u548C gitlab\u5728\u4E00\u4E2A\u670D\u52A1\u5668\u4E0A
\u7BA1\u7406\u4E2D\u5FC3
\u8BBE\u7F6E
\u7F51\u7EDC
\u5916\u53D1\u8BF7\u6C42
\u9009\u4E2D allow requests ...`,lang:"js"}))));l.default=i=>{const r=e.a.useContext(n.context),o=r.demos;return e.a.useEffect(()=>{var u;i!=null&&(u=i.location)!==null&&u!==void 0&&u.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(i.location.hash.slice(1)))},[]),e.a.createElement(s,{demos:o})}}}]);

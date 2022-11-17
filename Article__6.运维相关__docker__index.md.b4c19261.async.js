(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{JJXu:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("H1Ra");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "docker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#docker",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Docker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5378\\u8F7D"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5378\\u8F7D",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5378\\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "sudo yum remove docker \\\\\\n                  docker-client \\\\\\n                  docker-client-latest \\\\\\n                  docker-common \\\\\\n                  docker-latest \\\\\\n                  docker-latest-logrotate \\\\\\n                  docker-logrotate \\\\\\n                  docker-engine\\n\\nyum remove docker-ce docker-ce-cli containerd.io\\nrm -rf /var/lib/docker\\nrm -rf /var/lib/containerd",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5B89\\u88C5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5B89\\u88C5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5B89\\u88C5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "yum install -y yum-utils\\nyum-config-manager \\\\\\n    --add-repo \\\\\\n    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\\nyum makecache fast\\nyum install docker-ce docker-ce-cli containerd.io",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u542F\\u52A8\\u548C\\u68C0\\u67E5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u542F\\u52A8\\u548C\\u68C0\\u67E5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u542F\\u52A8\\u548C\\u68C0\\u67E5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "systemctl start docker\\ndocker version\\ndocker run hello-world\\ndocker images",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u914D\\u7F6E\\u963F\\u91CC\\u4E91\\u955C\\u50CF\\u52A0\\u901F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u914D\\u7F6E\\u963F\\u91CC\\u4E91\\u955C\\u50CF\\u52A0\\u901F",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u914D\\u7F6E\\u963F\\u91CC\\u4E91\\u955C\\u50CF\\u52A0\\u901F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors\\nsudo mkdir -p /etc/docker\\nsudo tee /etc/docker/daemon.json <<-'EOF'\\n{\\n  \\"registry-mirrors\\": [\\"https://qwm8wimf.mirror.aliyuncs.com\\"]\\n}\\nEOF\\nsudo systemctl daemon-reload\\nsudo systemctl restart docker",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "docker-\\u914D\\u7F6E-vim"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#docker-\\u914D\\u7F6E-vim",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "docker \\u914D\\u7F6E vim"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "apt-get update\\napt-get install vim\\n\\nyum install unzip",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4F7F\\u7528"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4F7F\\u7528",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4F7F\\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u955C\\u50CF\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u955C\\u50CF\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u955C\\u50CF\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\ndocker search\\n            mysql --filter=STARS=3000 # \u67E5\u627E 3000 starts \u4EE5\u4E0A\u7684\\ndocker pull \u955C\u50CF\u540D[:tag]               # \u4E0B\u8F7D\u6307\u5B9A\u7248\u672C\\n#\\ndocker images\\n              -a --all      # \u5217\u51FA\u6240\u6709\u7684\u955C\u50CF\\n              -q --quiet    # \u53EA\u663E\u793A\u955C\u50CF\u7684 id\\n              -aq           # \u5E38\u7528\\n#\\ndocker rmi\\n            -f imageId1 imageId2 ...   # \u5220\u9664\\n            -f $(docker images -aq)    # \u5220\u9664\u6240\u6709",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5BB9\\u5668\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5BB9\\u5668\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5BB9\\u5668\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\ndocker ps                         # \u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\\n          -a                      # \u67E5\u770B\u66FE\u7ECF\u8FD0\u884C\u7684\u5BB9\u5668\\n          -a -n=?                 # \u6307\u5B9A\u4E2A\u6570\u663E\u793A\\n          -q                      # \u53EA\u663E\u793A imagesId\\n# docker run -d --name nginx01 -p 3344:80 nginx\\ndocker run []  image[:tag]\\n           -d                     # \u4EE5\u540E\u53F0\u65B9\u5F0F\u8FD0\u884C\\n              -p  8080:8080 \u955C\u50CF\u540D:tag\\n           -it                    # \u4F7F\u7528\u4EA4\u4E92\u65B9\u5F0F\u8FD0\u884C \u524D\u53F0\u8FD0\u884C\\n           -p                     # \u6307\u5B9A\u5BB9\u5668\u7AEF\u53E3 -p 8080:8080\\n                     # \u7B2C\u4E00\u4E2A\u7AEF\u53E3\u662F\u672C\u5730(\u516C\u7F51) \u7B2C\u4E8C\u4E2A\u662F\u5BB9\u5668\u5185\u7684\\n               -p ip:\u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3\\n               -p \u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3  ## \u5E38\u7528\\n               -p \u5BB9\u5668\u7AEF\u53E3\\n               \u5BB9\u5668\u7AEF\u53E3\\n           --name xxx\\n           -v \u4E3B\u673A\u76EE\u5F55:\u5BB9\u5668\u5185\u76EE\u5F55\\n                 ## \u533F\u540D\u6302\u8F7D -v \u5BB9\u5668\u5185\u8DEF\u5F84\\n                 docker ... -v \u5BB9\u5668\u5185\u8DEF\u5F84 nginx\\n                 ## \u5177\u540D\u6302\u8F7D \u6620\u5C04 \u81EA\u5B9A\u4E49\u540D\u5B57\u524D\u4E0D\u5E26\u659C\u6760\\n                 docker ... -v \u81EA\u5B9A\u4E49\u540D\u5B57:\u5BB9\u5668\u5185\u8DEF\u5F84 nginx\\n                 ### volume\\n                 docker volume ls\\n                              inspect \u81EA\u5B9A\u4E49\u540D\u5B57\\n                              # /var/lib/docker/volumns/...\\n                              create\\n                              prune\\n                              rm\\n                 ### -v \u81EA\u5B9A\u4E49\u540D\u5B57:\u5BB9\u5668\u8DEF\u5F84[:ro|:rw]\\n                 \u6307\u5B9A\u5BB9\u5668\u5185\u90E8 \u8BFB\u5199\u6743\u9650\\n           -e                     # \u914D\u7F6E\u73AF\u5883\\n           -P                     # \u968F\u673A\u6307\u5B9A\u7AEF\u53E3 \u5927\u5199\u7684P\\n           --rm                   # \u7528\u5B8C\u5C31\u5220\u9664\u6389\\n   ## \u8FD0\u884C\u5BB9\u5668\\n   docker run -it centos /bin/bash\\n   ## \u8FDB\u5165\u5BB9\u5668\\n   docker exec -it \u5BB9\u5668\u540D /bin/bash # \u5F00\u542F\u4E00\u4E2A\u65B0\u7684\u7EC8\u7AEF\\n   docker attach \u5BB9\u5668ID            # \u8FDB\u5165\u6B63\u5728\u8FD0\u884C\u7684\u547D\u4EE4\u884C \u4E0D\u662F\u65B0\u7A97\u53E3\\n   ## \u9000\u51FA\u5BB9\u5668\\n   exit\\n   \u6309\u4F4F ctrl + p + q              # \u9000\u51FA \u4F46\u4E0D\u5173\u95ED\u5BB9\u5668\\n   ## \u5220\u9664\u5BB9\u5668\\n   docker rm \u5BB9\u5668ID\\n   docker rm -f $(docker ps -aq)\\n   docker ps -a -q|xargs docker rm\\n   ## \u542F\u52A8\u5BB9\u5668\\n   docker start \u5BB9\u5668ID\\n   ## \u91CD\u542F\u5BB9\u5668\\n   docker restart \u5BB9\u5668ID\\n   ## \u505C\u6B62\u5BB9\u5668\\n   docker stop \u5BB9\u5668ID\\n   ## \u5F3A\u5236\u505C\u6B62\u5BB9\u5668\\n   docker kill \u5BB9\u5668ID",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "build"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#build",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "build"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6253\u5305 Dockerfile \u6587\u4EF6\\n docker build -f dockerfile1 -t mydocker .\\n              -f dockerfile\u6587\u4EF6\u540D/\u6587\u4EF6\u8DEF\u5F84\\n              -t . \u751F\u6210\u6587\u4EF6\u8DEF\u5F84 .\u4EE3\u8868\u5F53\u524D\u8DEF\u5F84",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5E2E\\u52A9\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5E2E\\u52A9\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5E2E\\u52A9\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker version\\ndocker info\\ndocker --help\\ndocker stats                    # \u67E5\u770Bcpu\\nhttps://docs.docker.com/reference/\\n# \u67E5\u770B\u65E5\u5FD7\\ndocker logs\\n       docker logs -tf \u5BB9\u5668ID\\n       docker logs -tf --tail [number] \u5BB9\u5668ID\\n     # docker run -d centos /bin/sh -c \\"while true;do echo   '\u7528\u6237\u540D';sleep 1;done\\"\\n# \u67E5\u770B \u5BB9\u5668\u7684\u8FDB\u7A0B\u4FE1\u606F \u7AEF\u53E3\u7B49\u7B49\\ndocker top \u5BB9\u5668ID\\n# \u67E5\u770B\u5BB9\u5668\u5143\u4FE1\u606F\\ndocker inspect \u5BB9\u5668ID\\n# \u5C06\u5BB9\u5668\u5185\u7684\u6587\u4EF6 \u590D\u5236\u51FA\u6765\\ndocker cp \u5BB9\u5668ID:\u5BB9\u5668\u5185\u8DEF\u5F84 \u76EE\u7684\u5730\u4E3B\u673A\u8DEF\u5F84\\ndocker cp \u5BB9\u5668ID:/home/eternall.md /home\\n#\\ndocker history imageID --no-trunc",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "repository"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#repository",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "repository"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "dockerhub"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#dockerhub",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "dockerhub"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker login -u \u7528\u6237\u540D -p \u5BC6\u7801\\ndocker logout",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u963F\\u91CC\\u4E91"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u963F\\u91CC\\u4E91",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u963F\\u91CC\\u4E91"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# login\\ndocker login --username=\u7528\u6237\u540D registry.cn-hangzhou.aliyuncs.com\\n\u5BC6\u7801\\n# pull\\ndocker pull \u955C\u50CF\u540D:tag\\n# push\\ndocker push \u7528\u6237\u540D/\u955C\u50CF\u540D[:tag]",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker tag centos \u7528\u6237\u540D/myCentos:1.0\\n#\\n  docker commit -m='' -a='\u4F5C\u8005' \u5BB9\u5668ID \u76EE\u6807\u955C\u50CF\u540D:[tag]\\n# push\\n  docker push \u7528\u6237\u540D/\u955C\u50CF\u540D:tag\\n# pull\\n  docker pull \u955C\u50CF\u540D:tag\\n\\n# \u5C06docker\u955C\u50CF\u538B\u7F29\\n  docker save -o \u538B\u7F29\u5305\u540D.zip \u955C\u50CF\u540D:tag\\n# \u89E3\u538B\\ndocker load -i /usr/tmp/\u538B\u7F29\u5305\u540D.zip\\n# \u4E0A\u4F20\u5230\u670D\u52A1\u5668\\nscp \u538B\u7F29\u5305\u540D.zip root@118.31.34.158:/user/tmp",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5BB9\\u5668\\u4E92\\u8054-evth-pair"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5BB9\\u5668\\u4E92\\u8054-evth-pair",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5BB9\\u5668\\u4E92\\u8054 evth-pair"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u81EA\\u5B9A\\u4E49\\u7F51\\u7EDC"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u81EA\\u5B9A\\u4E49\\u7F51\\u7EDC",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u81EA\\u5B9A\\u4E49\\u7F51\\u7EDC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6865\u63A5 container host none\\nip addr\\ndocker network ls\\ndocker network rm xxx\\n# docker0 \u9ED8\u8BA4 \u57DF\u540D\u4E0D\u80FD\u8BBF\u95EE --link \u53EF\u4EE5\u6253\u901A\u8FDE\u63A5\\ndocker run -d -p --net bridge tomcat\\n# \u81EA\u5B9A\u4E49\u7F51\u7EDC\\n# driver \u9ED8\u8BA4 subnet \u5B50\u7F51 geteway \u7F51\u5173\\ndocker network create --driver bridge --subnet 192.168.0.0/16 - geteway 192.168.0.1 mynet\\ndocker xxx --net mynet tomcat",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#link",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u5728hosts \u914D\u7F6E\u91CC\u94FE\u63A5\u4E86\\n--link \u5BB9\u5668\u540D",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "dockerfile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#dockerfile",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Dockerfile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u547D\\u540D\\u4E3A Dockerfile \\u5C31\\u4F1A\\u81EA\\u52A8\\u627E\\u4ED6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "dockerfile-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#dockerfile-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Dockerfile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u57FA\\u7840\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u7840\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u7840\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# from \u57FA\u7840\u955C\u50CF\\nFROM centos:7\\n# maintainer \u7EF4\u62A4\u8005\u4FE1\u606F \u59D3\u540D+\u90AE\u7BB1\\nMAINTAINER \u7528\u6237\u540D<xxx@qq.com>\\n# run \u6784\u5EFA\u65F6\u5019\u9700\u8981\u8FD0\u884C\u7684\u547D\u4EE4\\nRUN yum -y install vim\\n# add \u96C6\u6210\u522B\u7684\u4E1C\u897F \u4F1A\u81EA\u52A8\u89E3\u538B\\nADD \u6587\u4EF6\u540D \u89E3\u538B\u540E\u7684\u955C\u50CF\u5185\u5730\u5740\\n# workdir \u8BBE\u7F6E\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55 / /bin/bash\\nWORKDIR $MYPATH\\n# valume \u8BBE\u7F6E\u5BB9\u5668\u5377\\nVALUME\\n# expose \u66B4\u9732\u7AEF\u53E3\\nEXPOSE 80\\n# \u8FD0\u884C\\nRUN",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5176\\u4ED6\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5176\\u4ED6\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5176\\u4ED6\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u811A\u672C\u547D\u4EE4  \u53EA\u6709\u6700\u540E\u4E00\u4E2A\u4F1A\u751F\u6548 \u53EF\u88AB\u66FF\u4EE3 (\u8986\u76D6) docker run xxx -l \u5C31\u4F1A\u66FF\u6362\u6389 \u7F16\u5199\u7684 CMD [\\"ls\\",\\"-a\\"]\\nCMD echo $MYPATH\\nCMD [\\"ls\\",\\"-a\\"]\\nCMD echo '----end---'\\nCMD /bin/bash\\n# entrypoint \u811A\u672C\u547D\u4EE4  \u53EF\u4EE5\u8FFD\u52A0\u547D\u4EE4 \u4E0D\\nENTRYPOINT\\n# onbuild \u5F53\u6784\u5EFA\u4E00\u4E2Adockerfile \u6587\u4EF6\u65F6 \u5C31\u89E6\u53D1\u8FD9\u4E2A\u6307\u4EE4\\nONBUILD\\n# copy \u6587\u4EF6\u62F7\u8D1D\u5230\u955C\u50CF\u4E2D\\nCOPY readme.txt /user/local/readme.txt\\n# env \u73AF\u5883\u53D8\u91CF ENV\\n  # \u4F8B\u5982 MYPATH user/local\\n  # \u4F7F\u7528\u65F6\u5019\u9700\u8981 $MYPATH\\nENV MYPATH /user/local",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6570\\u636E\\u5377\\u5171\\u4EAB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6570\\u636E\\u5377\\u5171\\u4EAB",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6570\\u636E\\u5377\\u5171\\u4EAB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker run -t --name docker01 \u5BB9\u5668ID\\ndocker run -it --name docker02 --volumes-from docker01 \u5BB9\u5668ID\\n\u8FD9\u65F6\u8FD9\u4E24\u4E2A\u5BB9\u5668\u90FD\u662F\u76F8\u4E92\u540C\u6B65\u7684 \u5373\u4F7F\u5220\u9664\u4E86 \u8FD8\u5728",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u9879\\u76EE\\u6253\\u5305"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9879\\u76EE\\u6253\\u5305",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9879\\u76EE\\u6253\\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6839\u76EE\u5F55\u521B\u5EFA Dockerfile\\nFROM node:12.16.1-alpine AS installer\\nCOPY package.json ./\\nRUN npm i tyarn -g\\nRUN tyarn\\n\\nFROM node:12.16.1-alpine AS builder\\nCOPY --from=installer /node_modules ./node_modules\\nCOPY . .\\nRUN npm run build\\n\\nFROM  vixlet/nginx:alpine\\nCOPY --from=builder /dist /app\\nCOPY ./nginx.conf /etc/nginx/nginx.conf\\n\\nEXPOSE 80\\n# nginx.conf\\nserver {\\n    listen       80;\\n    server_name  127.0.0.1;\\n    access_log off;\\n    add_header X-Frame-Options sameorigin always;\\n    location / {\\n        root /app;\\n        try_files $uri $uri/ /index.html;\\n        index index.html index.htm;\\n    }\\n}",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u5DE5\\u5177"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5DE5\\u5177",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5DE5\\u5177"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "mysql"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#mysql",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "mysql"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\ndocker pull mysql:5.7\\n#\\ndocker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=666222 --name mysql01 mysql:5.7\\n# navicat 3310 \u7AEF\u53E3\\n118.31.34.158\\n3310\\nroot\\n666222\\n#\\n\u6B64\u65F6\u5728 \u670D\u52A1\u5668\u7684  /home/mysql/conf data \u76EE\u5F55\u5C31\u6620\u5C04\u6210\u529F\u4E86",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "portainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#portainer",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "portainer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker volume create portainer_data\\n\\ndocker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest\\n\\nhttps://118.31.34.158:9443/",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "mysql-\\u591A\\u4E2A\\u5171\\u4EAB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#mysql-\\u591A\\u4E2A\\u5171\\u4EAB",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "mysql \\u591A\\u4E2A\\u5171\\u4EAB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker run -d -p 3310:3306 -v /etc/mysql/conf.d -v /var/lib/mysql -e MYSQL_ROOT_PASSWORD=666222 --name mysql01 mysql:5.7\\n\\ndocker run -d -p 3310:3306 -e MYSQL_ROOT_PASSWORD=666222 --name mysql02 --volumes-from mysql01 mysql:5.7",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "docker-compose"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#docker-compose",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "docker compose"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u57FA\\u7840\\u6B65\\u9AA4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u7840\\u6B65\\u9AA4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u7840\\u6B65\\u9AA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "dockerfile\\ndocker-compose.yml\\ndocker-compose up\\ndocker-compose down\\n#\\n\u53EF\u4EE5\u4F7F\u7528 Dockerfile \u751F\u6210\u955C\u50CF\\n\u6216\u8005 docker-compose.yml image\\n#\\ndocker-compose -f docker-compose.yml up -d\\ndocker-compose -f docker-compose.yml stop\\ndocker-compose -f docker-compose.yml stop\\n#",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u547D\\u4EE4-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u547D\\u4EE4-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker-compose up -d\\n# \u91CD\u65B0\u6784\u5EFA\\ndocker-compose up --build",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "yml"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#yml",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "yml"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u7248\u672C\\nversion: \\"3.9\\"\\n# \u670D\u52A1\\nservices:\\n  web:\\n    ## build \u751F\u6210\u7684 \u6307\u5B9Adockerfile\\n    build: .\\n    ports:\\n      - \\"5000:5000\\"\\n    ## \u955C\u50CF\\n    image: \\"redis:alpine\\n    network:\\n    ## \u90E8\u7F72\\n    deploy:\\n      ### \u526F\u672C\\n      replicas: 6\\n# \u5176\u4ED6\u914D\u7F6E\\nvolumns:\\nnetwork:\\nconfigs:",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "doker-swarm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#doker-swarm",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "doker swarm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "service"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#service",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "service"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker service ls\\ndocker service update",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n\u53CC\u4E3B\u53CC\u4ECE: \u5047\u8BBE\u4E00\u4E2A\u8282\u70B9\u6302\u4E86 \u5176\u4ED6\u8282\u70B9\u662F\u5426\u53EF\u7528\\nRaft \u534F\u8BAE: \u4FDD\u8BC1\u5927\u591A\u6570\u8282\u70B9\u5B58\u6D3B\u624D\u53EF\u4EE5\u7528 \u53EA\u8981>1 \u96C6\u7FA4\u81F3\u5C11\u5927\u4E8E3\u53F0\\n#\\ndocker swarm init --advertise-addr IP\u5730\u5740\\n#\\ndocker node ls\\ndocker swarm join-token manager\\ndocker swarm join-token worker\\n#\\ndocker swarm leave\\nupdate",
    lang: "dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "k8s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#k8s",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "k8s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "kubectl;",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u5176\\u4ED6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5176\\u4ED6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5176\\u4ED6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "docker-stack"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#docker-stack",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "docker stack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u5355\u673A\\ndocker-compose up -d workpress.yaml\\n# \u96C6\u7FA4\\ndocker stack deploy worldpress.yaml",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "docker-secret"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#docker-secret",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "docker secret"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u914D\u7F6E\u5BC6\u7801 \u8BC1\u4E66\\ndocker secrets\\n   create\\n   inspect\\n   ls\\n   rm",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "bug"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#bug",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "bug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\n\u5982\u679C\u6CA1\u6709\u524D\u53F0\u8FDB\u7A0B\\ndocker\u5C31\u4F1A\u81EA\u52A8\u505C\u6B62\\n\u4F8B\u5982 nginx \u542F\u52A8\u540E\u5982\u679C\u6CA1\u6709\u88AB\u7528 \u5C31\u4F1A\u7ACB\u5373\u505C\u6B62\\n# tomcat\\n\u963F\u91CC\u4E91\u4E0B\u8F7D\u7684\u955C\u50CF \u9ED8\u8BA4\u662F\u9609\u5272\u7248\u7684\\ncp webapps.dist/* webapps\\n# elasticsearch \u592A\u5360\u5185\u5B58\\ndocker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e \\"discovery.type=single-node\\" -e ES_JAVA_OPTS='-Xms64m -Xmx512m' elasticsearch:7.6.2",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u5176\\u4ED6-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5176\\u4ED6-1",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5176\\u4ED6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "nginx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#nginx",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "nginx"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker pull nginx\\ndocker run -p 81:80 --name nginx -d nginx\\nhttp://118.31.34.158:81/\\n#\\n\u5C06.next\u6587\u4EF6\u5939\u66F4\u6362\u540D\u5B57\u6210 dist\\nsftp\u653E\u5230\u670D\u52A1\u5668 /home/blog\\n# \u9879\u76EE\u6839\u76EE\u5F55 nginx.conf\\nserver {\\n    listen       80;\\n    server_name  127.0.0.1;\\n\\n    access_log off;\\n\\n    add_header X-Frame-Options sameorigin always;\\n\\n    location / {\\n        root /app;\\n        try_files $uri $uri/ /index.html;\\n        index index.html index.htm;\\n    }\\n}\\n# \u9879\u76EE\u6839\u76EE\u5F55 Dockerfile\\n...\\n# \u9879\u76EE\u6839\u76EE\u5F55\u8FDB\u884C\u6253\u5305\\ndocker build -t blog:2022-04-01 -f Dockerfile .\\ndocker save -o blog.tar blog:2022-04-01\\nscp blog.tar root@118.31.34.158:/home/blog/blog.tar\\n// \u670D\u52A1\u5668\\ndocker stop xxx\\ndocker load -i /home/blog/blog.tar\\ndocker run -p 80:80 --name blog -d blog:2022-04-01",
    lang: "js"
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./src/Article/6.%E8%BF%90%E7%BB%B4%E7%9B%B8%E5%85%B3/docker/index.md?`)}}]);

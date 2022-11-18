(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{PSel:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "docker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#docker",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "docker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "1\\u670D\\u52A1\\u5668\\u5B89\\u88C5-docker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#1\\u670D\\u52A1\\u5668\\u5B89\\u88C5-docker",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "1.\\u670D\\u52A1\\u5668\\u5B89\\u88C5 docker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5378\\u8F7D-docker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5378\\u8F7D-docker",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5378\\u8F7D docker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
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
    lang: "shell"
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
    code: "apt-get update\\napt-get install vim\\nyum install unzip",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "2docker-\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#2docker-\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "2.docker \\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u955C\\u50CF\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u955C\\u50CF\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u955C\\u50CF\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker pull \u955C\u50CF\u540D[:tag]               # \u4E0B\u8F7D\u6307\u5B9A\u7248\u672C\\n#\\ndocker images\\n              -a --all      # \u5217\u51FA\u6240\u6709\u7684\u955C\u50CF\\n              -q --quiet    # \u53EA\u663E\u793A\u955C\u50CF\u7684 id\\n              -aq           # \u5E38\u7528\\n#\\ndocker rmi\\n            -f imageId1 imageId2 ...   # \u5220\u9664\\n            -f $(docker images -aq)    # \u5220\u9664\u6240\u6709",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5BB9\\u5668\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5BB9\\u5668\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5BB9\\u5668\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "#\\ndocker ps                         # \u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\\n          -a                      # \u67E5\u770B\u66FE\u7ECF\u8FD0\u884C\u7684\u5BB9\u5668\\n          -a -n=?                 # \u6307\u5B9A\u4E2A\u6570\u663E\u793A\\n          -q                      # \u53EA\u663E\u793A imagesId\\n# docker run -d --name nginx01 -p 3344:80 nginx\\ndocker run [] image[:tag]\\n            -d                        # \u4EE5\u540E\u53F0\u65B9\u5F0F\u8FD0\u884C\\n            -p  8080:8080 \u955C\u50CF\u540D:tag   # \u66B4\u9732\u7684\u7AEF\u53E3:\u5185\u90E8\u7684\u7AEF\u53E3\\n            #-p ip:\u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3\\n            # -p \u4E3B\u673A\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3  ## \u5E38\u7528\\n            # -p \u5BB9\u5668\u7AEF\u53E3\\n            -it                       # \u4F7F\u7528\u4EA4\u4E92\u65B9\u5F0F\u8FD0\u884C \u524D\u53F0\u8FD0\u884C\\n            --name xxx                # \u6307\u5B9A\u5BB9\u5668\u540D \u5982\u679C\u4E0D\u6307\u5B9A\u5C31\u9700\u8981\u7528\u5BB9\u5668\u7684id\\n            -v \u4E3B\u673A\u76EE\u5F55:\u5BB9\u5668\u5185\u76EE\u5F55\\n            ## \u533F\u540D\u6302\u8F7D -v \u5BB9\u5668\u5185\u8DEF\u5F84\\n                docker ... -v \u5BB9\u5668\u5185\u8DEF\u5F84 nginx\\n            ## \u5177\u540D\u6302\u8F7D \u6620\u5C04 \u81EA\u5B9A\u4E49\u540D\u5B57\u524D\u4E0D\u5E26\u659C\u6760\\n                docker ... -v \u81EA\u5B9A\u4E49\u540D\u5B57:\u5BB9\u5668\u5185\u8DEF\u5F84 nginx\\n\\n            ### volume\\n                docker volume ls\\n                              inspect \u81EA\u5B9A\u4E49\u540D\u5B57\\n                              # /var/lib/docker/volumns/...\\n                              create\\n                              prune\\n                              rm\\n            ### -v \u81EA\u5B9A\u4E49\u540D\u5B57:\u5BB9\u5668\u8DEF\u5F84[:ro|:rw]  \u6307\u5B9A\u5BB9\u5668\u5185\u90E8 \u8BFB\u5199\u6743\u9650\\n\\n            -e                     # \u914D\u7F6E\u73AF\u5883\\n            -P                     # \u968F\u673A\u6307\u5B9A\u7AEF\u53E3 \u5927\u5199\u7684P\\n            --rm                   # \u7528\u5B8C\u5C31\u5220\u9664\u6389\\n\\n# \u5176\u4ED6\u547D\u4EE4\\n\\n## \u8FD0\u884C\u5BB9\u5668\\ndocker run -it centos /bin/bash\\n## \u8FDB\u5165\u5BB9\u5668\\ndocker exec -it \u5BB9\u5668\u540D /bin/bash # \u5F00\u542F\u4E00\u4E2A\u65B0\u7684\u7EC8\u7AEF\\ndocker attach \u5BB9\u5668ID            # \u8FDB\u5165\u6B63\u5728\u8FD0\u884C\u7684\u547D\u4EE4\u884C \u4E0D\u662F\u65B0\u7A97\u53E3\\n## \u9000\u51FA\u5BB9\u5668\\nexit\\n\u6309\u4F4F ctrl + p + q              # \u9000\u51FA \u4F46\u4E0D\u5173\u95ED\u5BB9\u5668\\n## \u5220\u9664\u5BB9\u5668\\ndocker rm \u5BB9\u5668ID\\ndocker rm -f $(docker ps -aq)\\ndocker ps -a -q|xargs docker rm\\n## \u542F\u52A8\u5BB9\u5668\\ndocker start \u5BB9\u5668ID\\n## \u91CD\u542F\u5BB9\u5668\\ndocker restart \u5BB9\u5668ID\\n## \u505C\u6B62\u5BB9\u5668\\ndocker stop \u5BB9\u5668ID\\n## \u5F3A\u5236\u505C\u6B62\u5BB9\u5668\\ndocker kill \u5BB9\u5668ID",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "build"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#build",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "build"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6253\u5305 Dockerfile \u6587\u4EF6\\ndocker build -f dockerfile1 -t mydocker .\\n              -f dockerfile\u6587\u4EF6\u540D/\u6587\u4EF6\u8DEF\u5F84\\n              -t . \u751F\u6210\u6587\u4EF6\u8DEF\u5F84 .\u4EE3\u8868\u5F53\u524D\u8DEF\u5F84",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5E2E\\u52A9\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5E2E\\u52A9\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5E2E\\u52A9\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker version\\ndocker info\\ndocker --help\\ndocker stats                    # \u67E5\u770Bcpu\\nhttps://docs.docker.com/reference/\\n# \u67E5\u770B\u65E5\u5FD7\\ndocker logs\\ndocker logs -tf \u5BB9\u5668ID\\ndocker logs -tf --tail [number] \u5BB9\u5668ID\\n# docker run -d centos /bin/sh -c \\"while true;do echo   'eternallycyf';sleep 1;done\\"\\n# \u67E5\u770B \u5BB9\u5668\u7684\u8FDB\u7A0B\u4FE1\u606F \u7AEF\u53E3\u7B49\u7B49\\ndocker top \u5BB9\u5668ID\\n# \u67E5\u770B\u5BB9\u5668\u5143\u4FE1\u606F\\ndocker inspect \u5BB9\u5668ID\\n# \u5C06\u5BB9\u5668\u5185\u7684\u6587\u4EF6 \u590D\u5236\u51FA\u6765\\ndocker cp \u5BB9\u5668ID:\u5BB9\u5668\u5185\u8DEF\u5F84 \u76EE\u7684\u5730\u4E3B\u673A\u8DEF\u5F84\\ndocker cp \u5BB9\u5668ID:/home/eternall.md /home\\n#\\ndocker history imageID --no-trunc",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "3docker-\\u4ED3\\u5E93"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#3docker-\\u4ED3\\u5E93",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "3.docker \\u4ED3\\u5E93"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker login -u \u8D26\u53F7 -p \u5BC6\u7801\\ndocker logout",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u963F\u91CC\u4E91\\n# login\\ndocker login --username=\u8D26\u53F7 registry.cn-hangzhou.aliyuncs.com \u5BC6\u7801\\n# pull\\ndocker pull \u955C\u50CF\u540D:tag\\n# push\\ndocker push \u8D26\u53F7/\u955C\u50CF\u540D[:tag]",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "4\\u5E38\\u7528\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#4\\u5E38\\u7528\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "4.\\u5E38\\u7528\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker tag centos eternallycyf/myCentos:1.0\\n#\\n  docker commit -m='' -a='\u4F5C\u8005' \u5BB9\u5668ID \u76EE\u6807\u955C\u50CF\u540D:[tag]\\n# push\\n  docker push eternallycyf/\u955C\u50CF\u540D:tag\\n# pull\\n  docker pull \u955C\u50CF\u540D:tag\\n\\n# \u5C06docker\u955C\u50CF\u538B\u7F29\\n  docker save -o \u538B\u7F29\u5305\u540D.zip \u955C\u50CF\u540D:tag\\n# \u89E3\u538B\\ndocker load -i /usr/tmp/\u538B\u7F29\u5305\u540D.zip\\n# \u4E0A\u4F20\u5230\u670D\u52A1\u5668\\nscp \u538B\u7F29\u5305\u540D.zip root@118.31.34.158:/user/tmp",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "5dockerfile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#5dockerfile",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "5.Dockerfile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u57FA\\u7840\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u57FA\\u7840\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u57FA\\u7840\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# from \u57FA\u7840\u955C\u50CF\\nFROM centos:7\\n# maintainer \u7EF4\u62A4\u8005\u4FE1\u606F \u59D3\u540D+\u90AE\u7BB1\\nMAINTAINER eternallycyf<969475322@qq.com>\\n# run \u6784\u5EFA\u65F6\u5019\u9700\u8981\u8FD0\u884C\u7684\u547D\u4EE4\\nRUN yum -y install vim\\n# add \u96C6\u6210\u522B\u7684\u4E1C\u897F \u4F1A\u81EA\u52A8\u89E3\u538B\\nADD \u6587\u4EF6\u540D \u89E3\u538B\u540E\u7684\u955C\u50CF\u5185\u5730\u5740\\n# workdir \u8BBE\u7F6E\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55 / /bin/bash\\nWORKDIR $MYPATH\\n# valume \u8BBE\u7F6E\u5BB9\u5668\u5377\\nVALUME\\n# expose \u66B4\u9732\u7AEF\u53E3\\nEXPOSE 80\\n# \u8FD0\u884C\\nRUN",
    lang: "Dockerfile"
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
    lang: "Dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6570\\u636E\\u5377\\u5171\\u4EAB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6570\\u636E\\u5377\\u5171\\u4EAB",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6570\\u636E\\u5377\\u5171\\u4EAB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker run -t --name docker01 \u5BB9\u5668ID\\ndocker run -it --name docker02 --volumes-from docker01 \u5BB9\u5668ID\\n#\u8FD9\u65F6\u8FD9\u4E24\u4E2A\u5BB9\u5668\u90FD\u662F\u76F8\u4E92\u540C\u6B65\u7684 \u5373\u4F7F\u5220\u9664\u4E86 \u8FD8\u5728ll",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "6docker-compose"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#6docker-compose",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "6.docker-compose"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "docker-compose.yml")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5E38\\u7528\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5E38\\u7528\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5E38\\u7528\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u542F\u52A8\u540D\u79F0\u4E3Adocker-compose.yml\u7684\u6587\u4EF6\\n## \u542F\u52A8\\ndocker-compose up -d\\n## \u5173\u95ED\\ndocker-compose down\\n## \u91CD\u65B0\u6784\u5EFA\\ndocker-compose up --build\\n# \u6307\u5B9A\u5177\u4F53\u540D\u79F0\\ndocker-compose -f docker-compose.yml up -d\\ndocker-compose -f docker-compose.yml stop\\ndocker-compose -f docker-compose.yml stop",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "domo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#domo",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "domo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u7248\u672C\\nversion: \\"3.9\\"\\n# \u670D\u52A1\\nservices:\\n  web:\\n    ## build \u751F\u6210\u7684 \u6307\u5B9Adockerfile\\n    build: .\\n    ports:\\n      - \\"5000:5000\\"\\n    ## \u955C\u50CF\\n    image: \\"redis:alpine\\n    network:\\n    ## \u90E8\u7F72\\n    deploy:\\n      ### \u526F\u672C\\n      replicas: 6\\n# \u5176\u4ED6\u914D\u7F6E\\nvolumns:\\nnetwork:\\nconfigs:",
    lang: "yml"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u9879\\u76EE\\u914D\\u7F6E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9879\\u76EE\\u914D\\u7F6E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9879\\u76EE\\u914D\\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "umi"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#umi",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "umi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "nextjs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#nextjs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "nextjs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/eternallycyf/nextjs-docker-nginx-demo"
  }, "https://github.com/eternallycyf/nextjs-docker-nginx-demo"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "vue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vue",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx"
  }, "https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# vue.config.js\\nbase: '/'",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "FROM node:14-alpine\\nCOPY ./ /app\\nWORKDIR /app\\nRUN npm install && npm run build\\n\\nFROM vixlet/nginx:alpine\\nRUN mkdir /app\\nCOPY --from=0 /app/dist /app\\nCOPY nginx.conf /etc/nginx/nginx.conf",
    lang: "Dockerfile"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "user  nginx;\\nworker_processes  1;\\nerror_log  /var/log/nginx/error.log warn;\\npid        /var/run/nginx.pid;\\nevents {\\n  worker_connections  1024;\\n}\\nhttp {\\n  include       /etc/nginx/mime.types;\\n  default_type  application/octet-stream;\\n  log_format  main  '$remote_addr - $remote_user [$time_local] \\"$request\\" '\\n                    '$status $body_bytes_sent \\"$http_referer\\" '\\n                    '\\"$http_user_agent\\" \\"$http_x_forwarded_for\\"';\\n  access_log  /var/log/nginx/access.log  main;\\n  sendfile        on;\\n  keepalive_timeout  65;\\n  server {\\n    listen       80;\\n    server_name  localhost;\\n    location / {\\n      root   /app;\\n      index  index.html;\\n      try_files $uri $uri/ /index.html;\\n    }\\n    error_page   500 502 503 504  /50x.html;\\n    location = /50x.html {\\n      root   /usr/share/nginx/html;\\n    }\\n  }\\n}",
    lang: "unknown"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "nuxtjs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#nuxtjs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "nuxtjs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/eternallycyf/nuxtjs-docker-nginx-demo"
  }, "https://github.com/eternallycyf/nuxtjs-docker-nginx-demo"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "vite"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#vite",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "vite")));
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

//# sourceURL=webpack:///./src/Project/Docker/index.md?`)}}]);

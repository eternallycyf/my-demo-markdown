(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{zxfc:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6T1g");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "\\u81EA\\u5DF1\\u642D\\u5EFA\\u4E00\\u4E2A-gitlab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u81EA\\u5DF1\\u642D\\u5EFA\\u4E00\\u4E2A-gitlab",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u81EA\\u5DF1\\u642D\\u5EFA\\u4E00\\u4E2A gitlab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", null, "\\u8FD9\\u91CC\\u4E3B\\u8981\\u7528\\u5230docker\\u955C\\u50CF\\u6765\\u6784\\u5EFAjenkins \\u548C gitlab\\u7684"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "jenkins"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#jenkins",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "jenkins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5B89\\u88C5-jenkins"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5B89\\u88C5-jenkins",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5B89\\u88C5 jenkins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u672C\\u5730\\u5B89\\u88C5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u672C\\u5730\\u5B89\\u88C5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u672C\\u5730\\u5B89\\u88C5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "brew install jenkins-lts\\n#\\nbrew services start jenkins-lts\\nbrew services restart jenkins-lts\\nbrew upgrade jenkins-lts\\n\u8BB0\u4F4F\u81EA\u5DF1\u7684\u5BC6\u5319\\n#\\nhttp://localhost:8080/",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "\\u670D\\u52A1\\u5668\\u5B89\\u88C5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u670D\\u52A1\\u5668\\u5B89\\u88C5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u670D\\u52A1\\u5668\\u5B89\\u88C5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "docker run -itd -u root -p 8080:8080 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v \\"$HOME\\":/home --name jenkins jenkins/jenkins\\n// jenkinsci/blueocean\\n#\\ndocker logs jenkins\\n\u8BB0\u4F4F\u81EA\u5DF1\u7684\u5BC6\u5319\\n#\\nhttp://\u516C\u7F51\u5730\u5740:8080/",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u914D\\u7F6E-jenkins"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u914D\\u7F6E-jenkins",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u914D\\u7F6E jenkins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u542F\\u52A8\\u5E76\\u6253\\u5F00\\u81EA\\u5DF1\\u672C\\u5730\\u6216\\u8005\\u670D\\u52A1\\u5668", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "jenkins"), "\\u7684\\u7F51\\u9875")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u6DFB\u52A0CDN\\nManage jenkins => Manage Plugins => Advanced => URL\\nhttps://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/current/update-center.json\\n# \u9700\u8981\u5B89\u88C5\u7684\u5FC5\u5907\u63D2\u4EF6\\nAuthorize Project\\nGitHub Integration\\nGitLab\\nPublish Over SSH\\nSSH Agent\\nSSH\\nSSH Pipeline Steps\\n#\\n\u5B89\u88C5docker-compose\\n# vim docker-compose.yml\\nhttp://xxx:8088/\\ndocker-compose up -d",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "gitlab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#gitlab",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "gitlab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u521B\\u5EFA-docker-\\u955C\\u50CF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u521B\\u5EFA-docker-\\u955C\\u50CF",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u521B\\u5EFA docker \\u955C\\u50CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# 1.\u65B0\u5EFA\u4E00\u4E2A docker-compose.yml \u6587\u4EF6\\nhttp://\u516C\u7F51\u5730\u5740:8088/users/sign_in\\n# 2.1 \u91C7\u7528\u590D\u5236gitlab\u63D0\u4F9B\u7684\u6700\u65B0\u5B8C\u6574\u7248\u914D\u7F6E\\n// \u590D\u5236 https://github.com/sameersbn/docker-gitlab/blob/master/docker-compose.yml\\n// \u66F4\u6539\u4EE5\u4E0B\u51E0\u884C\u66FF\u6362\u6210\u81EA\u5DF1\u7684\u76F8\u5173\u4FE1\u606F\\ngitlab\\n- GITLAB_HOST=\u516C\u7F51\u5730\u5740\\n- GITLAB_ROOT_PASSWORD=\u7BA1\u7406\u5458\u5BC6\u7801\\n- GITLAB_ROOT_EMAIL=\u7BA1\u7406\u5458\u90AE\u7BB1\\n ports: //\u6620\u5C04\u7AEF\u53E3\\n      - '8088:80'\\n      - '2443:443'\\n      - '2222:22'\\n# 2.2 \u6216\u4F7F\u7528\u6700\u7B80\u5355\u7684\u914D\u7F6E\\n// \u6216\u8005\u76F4\u63A5\u590D\u5236\u4E0B\u65B9\\nversion: '3'\\nservices:\\n  web:\\n    image: 'twang2218/gitlab-ce-zh'\\n    restart: always\\n    hostname: '\u516C\u7F51\u5730\u5740'\\n    environment:\\n      TZ: 'Asia/Shanghai'\\n      GITLAB_OMNIBUS_CONFIG: |\\n        external_url 'http://\u516C\u7F51\u5730\u5740'\\n        gitlab_rails['gitlab_shell_ssh_port'] = 2222\\n        unicorn['port'] = 8888\\n        nginx['listen_port'] = 80\\n    ports:\\n      - '8088:80'\\n      - '2443:443'\\n      - '2222:22'\\n    volumes:\\n      - ./config:/etc/gitlab\\n      - ./data:/var/opt/gitlab\\n      - ./logs:/var/log/gitlab\\n# 3 http://localhost:8088/users/sign_in\\n\u7B2C\u4E00\u6B21\u6CA1\u51FA\u6765\u5C31\u5237\u65B0\u4E0B",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5F00\\u542F-gitlab-cicd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5F00\\u542F-gitlab-cicd",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5F00\\u542F gitlab-CICD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u521B\u5EFA\u9879\u76EE\\n\u8BBE\u7F6E\\n\u96C6\u6210\\n\\n\u9009\u62E9 Campfire push evnets // \u5F53push\u65F6\u5019\u89E6\u53D1\\n\u53D6\u6D88ssh verification // \u6CA1\u6709\u8BC1\u4E66",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "jekinx-\\u89E6\\u53D1-gitlab-\\u6D41\\u6C34\\u7EBF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#jekinx-\\u89E6\\u53D1-gitlab-\\u6D41\\u6C34\\u7EBF",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "jekinx \\u89E6\\u53D1 gitlab \\u6D41\\u6C34\\u7EBF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u9AD8\\u7EA7\\u914D\\u7F6E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u9AD8\\u7EA7\\u914D\\u7F6E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u9AD8\\u7EA7\\u914D\\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "\u65B0\u5EFA\u4EFB\u52A1\\njenkins-demo\\n\u81EA\u7531\u98CE\u683C\\n\u6E90\u7801\u7BA1\u7406\\n\u6784\u5EFA\u89E6\u53D1\u5668\\n//\u586B\u5199\u5230 gitlab \u96C6\u6210 url\\nbuild when a change is pushed to gitLab\\n\u9009\u4E2Dpush event\\nopened merge Request events\\napproved merge request(ee-only)\\ncomments\\ncomment for triggering a build",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "jenkinsfile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#jenkinsfile",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Jenkinsfile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "pipeline {\\n    agent {\\n      docker {\\n        image 'node:10'\\n        args '-p 20000:8080'\\n      }\\n    }\\n\\n    stages {\\n        stage('Build') {\\n            steps {\\n                echo 'Building..'\\n                sh 'node -v'\\n                sh 'echo \\"hello\\"'\\n            }\\n        }\\n        stage('Test') {\\n            steps {\\n                echo 'Testing..'\\n            }\\n        }\\n        stage('Deploy') {\\n            steps {\\n                echo 'Deploying....'\\n            }\\n        }\\n    }\\n}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u7AEF\\u53E3\\u95EE\\u9898"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7AEF\\u53E3\\u95EE\\u9898",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7AEF\\u53E3\\u95EE\\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// jenkins \u548C gitlab\u5728\u4E00\u4E2A\u670D\u52A1\u5668\u4E0A\\n\u7BA1\u7406\u4E2D\u5FC3\\n\u8BBE\u7F6E\\n\u7F51\u7EDC\\n\u5916\u53D1\u8BF7\u6C42\\n\u9009\u4E2D allow requests ...",
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

//# sourceURL=webpack:///./src/Article/8.%E5%AE%9E%E8%B7%B5%E6%93%8D%E4%BD%9C/%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AAgitlab/index.md?`)}}]);

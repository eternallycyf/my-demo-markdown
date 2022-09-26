(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[7201],{22827:function(E,c,a){"use strict";a.r(c);var i=a(12924),e=a.n(i),n=a(16924),t=a(53401);const r=e().memo(({demos:u})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"cicd"},e().createElement(n.AnchorLink,{to:"#cicd","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"CICD"),e().createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e().createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e().createElement(t.Z,{code:`\u6301\u7EED\u96C6\u6210 CI Continuous Integration
\u6301\u7EED\u4EA4\u4ED8 CD Continuous Delivery
travis`,lang:"js"}),e().createElement("h2",{id:"gitlab-ciyml"},e().createElement(n.AnchorLink,{to:"#gitlab-ciyml","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"GitLab-ci.yml"),e().createElement(t.Z,{code:`#.gitlab-ci.yml
# \u5B9A\u4E49\u9636\u6BB5
stages:
  # \u7F16\u8BD1\u9636\u6BB5
  - build
  # \u90E8\u7F72\u9636\u6BB5
  - deploy
.for_it:
#rc\u5206\u652F\u6216\u8005tag\u6709\u6548
  only:
    - /^rc\\/.+/

#\u4EFB\u52A1\u540D\u79F0
sample_job:
  #\u53EF\u9009 \u58F0\u660E\u4E3A\u624B\u52A8\u6267\u884C
  when: manual
  # \u6240\u5C5E\u7684\u9636\u6BB5
  stage: build
  tags:
    # \u6307\u5B9A\u4EFB\u52A1\u5728node102\u673A\u5668\u4E0A\u6267\u884C
    - node102
  # \u5F00\u59CB\u547D\u4EE4 \u53EF\u9009
  before_script:
    - echo hello before
  # \u4E2D\u95F4\u547D\u4EE4 \u53EF\u9009
  script:
    - echo hello
  # \u672B\u5C3E\u547D\u4EE4 \u53EF\u9009
  after_script:
    - echo hello after`,lang:"js"}),e().createElement("h3",{id:"\u57FA\u672C\u683C\u5F0F"},e().createElement(n.AnchorLink,{to:"#\u57FA\u672C\u683C\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u683C\u5F0F"),e().createElement(t.Z,{code:`before_script:
  -
  - ...

xxx:
  script:
    - ...`,lang:"js"}),e().createElement("h3",{id:"\u8BE6\u7EC6\u914D\u7F6E"},e().createElement(n.AnchorLink,{to:"#\u8BE6\u7EC6\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u8BE6\u7EC6\u914D\u7F6E"),e().createElement("h3",{id:"stages"},e().createElement(n.AnchorLink,{to:"#stages","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"stages"),e().createElement("ul",null,e().createElement("li",null,"\u5B9A\u4E49\u5206\u7EC4\u9636\u6BB5 \u6BCF\u4E2A\u9636\u6BB5\u90FD\u6210\u529F\u4E86 \u624D\u6267\u884C\u4E0B\u4E00\u4E2A\u9636\u6BB5")),e().createElement(t.Z,{code:`stages: -build - public;

test1: stage: build;

test2: stage: pubilc;`,lang:"js"}),e().createElement("h3",{id:"onlyexcept"},e().createElement(n.AnchorLink,{to:"#onlyexcept","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"only/except"),e().createElement("ul",null,e().createElement("li",null,"\u53EA\u5141\u8BB8 \u6216\u6392\u9664 \u67D0\u4E2A\u5206\u652F")),e().createElement(t.Z,{code:`test1: stage: build;
only: -develop;`,lang:"js"}),e().createElement("h3",{id:"tags"},e().createElement(n.AnchorLink,{to:"#tags","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"tags"),e().createElement("ul",null,e().createElement("li",null,"\u914D\u7F6E\u7BA1\u7406\u5DE5\u5177 \u8FD0\u884C\u73AF\u5883")),e().createElement(t.Z,{code:"test1: tags: -k8spackage - gqtest - windows;",lang:"js"}),e().createElement("h3",{id:"when"},e().createElement(n.AnchorLink,{to:"#when","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"when"),e().createElement("ul",null,e().createElement("li",null,"\u8FD0\u884C\u5931\u8D25 \u4ECD\u7136\u8FD0\u884C\u7684\u547D\u4EE4"),e().createElement("li",null,"when:manual \u5728 gitlab cicd \u51FA\u73B0\u4E00\u4E2A\u53EF\u4EE5\u70B9\u51FB\u7684\u6309\u94AE \u624B\u52A8\u6267\u884C"),e().createElement("li",null,"\u5176\u4ED6\u914D\u7F6E\u5219\u662F\u76F4\u63A5\u9ED8\u8BA4\u6267\u884C\u4E86")),e().createElement(t.Z,{code:`test1: when: on_success; // \u9ED8\u8BA4 \u6240\u6709\u6210\u529F\u624D\u6267\u884C
when: on_failure; // \u81F3\u5C11\u524D\u4E00\u9636\u6BB5\u4E00\u4E2A \u5931\u8D25\u624D\u6267\u884C
when: always; // \u65E0\u8BBA\u72B6\u6001\u90FD\u6267\u884C
when: manual; // \u624B\u52A8\u6267\u884C`,lang:"js"}),e().createElement("h3",{id:"script"},e().createElement(n.AnchorLink,{to:"#script","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"script"),e().createElement("h3",{id:"\u73AF\u5883\u53D8\u91CF"},e().createElement(n.AnchorLink,{to:"#\u73AF\u5883\u53D8\u91CF","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u73AF\u5883\u53D8\u91CF"),e().createElement(t.Z,{code:"CI_COMMIT_SHORT_SHA;",lang:"js"}),e().createElement("h2",{id:"github"},e().createElement(n.AnchorLink,{to:"#github","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Github"),e().createElement("h3",{id:"k8s"},e().createElement(n.AnchorLink,{to:"#k8s","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"k8s"),e().createElement(t.Z,{code:`script:
- mvn clean package...  #\u7F16\u8BD1  npm install...
- docker build... #\u6253\u955C\u50CF
- kubectl set image deploy... #\u90E8\u7F72\u5230k8s`,lang:"js"}))));c.default=u=>{const o=e().useContext(n.context),s=o.demos;return e().useEffect(()=>{var l;u!=null&&(l=u.location)!==null&&l!==void 0&&l.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e().createElement(r,{demos:s})}}}]);

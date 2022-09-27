(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{Majo:function(m,c,a){"use strict";a.r(c);var l=a("cDcd"),u=a.n(l),e=a("dEAq"),s=a.n(e),n=a("H1Ra");const o=u.a.memo(({demos:t})=>u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h1",{id:"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A\u811A\u624B\u67B6"},u.a.createElement(e.AnchorLink,{to:"#\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A\u811A\u624B\u67B6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A\u811A\u624B\u67B6"),u.a.createElement("h2",{id:"\u4E3A\u4EC0\u4E48\u9700\u8981\u4E00\u4E2A\u811A\u624B\u67B6"},u.a.createElement(e.AnchorLink,{to:"#\u4E3A\u4EC0\u4E48\u9700\u8981\u4E00\u4E2A\u811A\u624B\u67B6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u4E3A\u4EC0\u4E48\u9700\u8981\u4E00\u4E2A\u811A\u624B\u67B6"),u.a.createElement(n.a,{code:`\u5443\u3002\u3002\u3002\u4E3A\u4E86\u65B9\u4FBFcopy
\u54C8\u54C8\u3002\u4E3A\u4E86\u65B9\u4FBF\u81EA\u5DF1\u514B\u9686\u81EA\u5DF1\u7684\u4ED3\u5E93\u3002\u987A\u4FBF\u4E86\u89E3\u4E0B\u811A\u624B\u67B6\u662F\u5982\u4F55\u5236\u4F5C\u7684
\u5728\u8FD9\u91CC\u505A\u4E00\u4E2A\u514B\u9686\u81EA\u5DF1\u4ED3\u5E93\u7684\u811A\u624B\u67B6
\u8FD8\u662F\u975E\u5E38\u7B80\u5355\u7684\u3002\u53EA\u9700\u8981\u514B\u9686\u6211\u7684\u811A\u624B\u67B6\u6587\u4EF6\u3002\u6362\u6210\u81EA\u5DF1\u5B9A\u4E49\u7684\u540D\u5B57
npm\u53D1\u5E03\u4E0B\u5C31\u53EF\u4EE5\u7528\u4E86
\u5E9F\u8BDD\u4E0D\u591A\u8BF4,\u5F00\u59CB\u6B63\u9898\u4E86\u3002`,lang:"js"}),u.a.createElement("h2",{id:"1\u514B\u9686\u57FA\u672C\u4EE3\u7801"},u.a.createElement(e.AnchorLink,{to:"#1\u514B\u9686\u57FA\u672C\u4EE3\u7801","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"1.\u514B\u9686\u57FA\u672C\u4EE3\u7801"),u.a.createElement(n.a,{code:"git clone https://github.com/eternallycyf/lrxc-cli.git",lang:"unknown"}),u.a.createElement("h2",{id:"2\u66F4\u6539api\u67E5\u8BE2\u540D\u79F0"},u.a.createElement(e.AnchorLink,{to:"#2\u66F4\u6539api\u67E5\u8BE2\u540D\u79F0","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"2.\u66F4\u6539",u.a.createElement("code",null,"api"),"\u67E5\u8BE2\u540D\u79F0"),u.a.createElement(n.a,{code:"// \u8FD9\u91CC\u662F\u8C03\u7528\u7684github\u7684api \u67E5\u8BE2\u81EA\u5DF1\u7684\u4ED3\u5E93\u4FE1\u606F\n# ./src/create.js\n  const { data } = await axios.get('https://api.github.com/users/eternallycyf/repos')\n  const { data } = await axios.get(`https://api.github.com/repos/eternallycyf/${repo}/tags`);\n  let api = `eternallycyf/${repo}`\n  \u5C06\u8FD9\u4E09\u884C\u7684eternallycyf\u6362\u6210\u81EA\u5DF1github\u7684\u540D\u5B57",lang:"js"}),u.a.createElement("h2",{id:"3\u66F4\u6362\u63D0\u793A\u4FE1\u606F"},u.a.createElement(e.AnchorLink,{to:"#3\u66F4\u6362\u63D0\u793A\u4FE1\u606F","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"3.\u66F4\u6362\u63D0\u793A\u4FE1\u606F"),u.a.createElement(n.a,{code:`# ./src/main.js
\u5C06 lrxc-cli \u6362\u6210\u81EA\u5DF1\u811A\u624B\u67B6\u7684\u540D\u5B57`,lang:"js"}),u.a.createElement("h2",{id:"4\u8BBE\u7F6E-packagejson"},u.a.createElement(e.AnchorLink,{to:"#4\u8BBE\u7F6E-packagejson","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"4.\u8BBE\u7F6E ",u.a.createElement("code",null,"package.json")),u.a.createElement(n.a,{code:`# \u5C06\u8FD9\u4E9BJSON\u5C55\u793A\u5B57\u6BB5\u7684value\u6362\u6210\u81EA\u5DF1\u7684 \u8FD9\u4E9B\u5B57\u6BB5\u4E3B\u8981\u7528\u4E8Enpm\u5305\u9875\u9762\u7684\u5C55\u793A
// \u6211\u7684\u811A\u624B\u67B6\u53EB\u505A lrxc-cli
name
version
description
author
keywords
homepage
repository
bin`,lang:"js"}),u.a.createElement("h2",{id:"5\u53D1\u5E03"},u.a.createElement(e.AnchorLink,{to:"#5\u53D1\u5E03","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"5.\u53D1\u5E03"),u.a.createElement(n.a,{code:`# 1.\u5728npm\u5B98\u7F51\u6CE8\u518C\u81EA\u5DF1\u7684\u8D26\u53F7
# 2.\u6CE8\u610F
\u6CE8\u610F\u7B2C\u4E00\u6B21\u53D1\u5E03\u9700\u8981\u90AE\u7BB1\u9A8C\u8BC1
\u5E76\u4E14\u53D1\u5E03\u65F6\u5019npm\u5FC5\u987B\u662Fnpm\u6E90 \u4E0D\u80FD\u662F\u6DD8\u5B9D\u7684 \u5426\u5219\u4F1A\u4E00\u76F4\u5931\u8D25
\u53EF\u4EE5\u4F7F\u7528 nrm \u6765\u5207\u6362
yarn global add nrm
nrm ls
nrm use npm
# 3.npm login
\u8F93\u5165\u81EA\u5DF1\u8D26\u53F7\u5BC6\u7801
# 4.npm publish
\u5F53\u6CA1\u6709\u62A5\u9519\u7684\u65F6\u5019\u5C31\u53D1\u5E03\u6210\u529F\u4E86
\u53EF\u4EE5\u5728npm\u5B98\u7F51\u641C\u7D22\u5230\u81EA\u5DF1\u7684\u5305
# 5.npm install xxx -g
xxx create \u9879\u76EE\u540D
\u8FD9\u65F6\u5019\u4F60\u5C31\u53EF\u4EE5\u770B\u5230\u81EA\u5DF1github\u7684\u6240\u6709\u4ED3\u5E93\u5566
# 6.\u8FD9\u4E2A\u811A\u624B\u67B6\u662F\u6839\u636E git tag\u6765\u4E0B\u8F7D\u7684
\u6240\u4EE5\u8981\u5BF9\u60F3\u8981clone\u7684 \u4ED3\u5E93\u6253tag
git tag -a v1.0 -m "my version 1.0"
\u6B64\u65F6\u7EC8\u7AEF\u8FD0\u884C xxx create \u9879\u76EE\u540D
\u5C31\u4F1A\u8DF3\u51FA\u4E00\u4E2A 1.0 \u7684\u4E0B\u4E00\u6B65
\u6309\u4F4F\u56DE\u8F66\u5C31\u5F00\u59CB\u514B\u9686\u5566`,lang:"js"}),u.a.createElement("h2",{id:"6\u4F7F\u7528\u5230\u7684\u5305"},u.a.createElement(e.AnchorLink,{to:"#6\u4F7F\u7528\u5230\u7684\u5305","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"6.\u4F7F\u7528\u5230\u7684\u5305"),u.a.createElement(n.a,{code:`axios:\u53D1\u9001ajax\u8BF7\u6C42\u7684
commander:\u63D0\u4F9B\u7EC8\u7AEF\u547D\u4EE4\u884C\u652F\u6301\u7684\u5305
consolidate:\u7528\u4E8E\u4ECEnpm\u4E0A\u4E0B\u8F7D\u4E1C\u897F\u7EDF\u4E00\u6A21\u677F\u5F15\u64CE
download-git-repo:\u4E0B\u8F7D\u4ED3\u5E93\u7684
inquirer:\u547D\u4EE4\u884C\u4EA4\u4E92\u5DE5\u5177
metalsmith:\u904D\u5386\u4E0B\u8F7D\u6587\u4EF6 \u662F\u5426\u9700\u8981\u6A21\u677F\u6E32\u67D3
ncp: \u793E\u533A
ora: \u547D\u4EE4\u884Cloading\u6548\u679C`,lang:"js"}),u.a.createElement("blockquote",null,"\u5177\u4F53\u4EE3\u7801\u5C31\u4E0D\u8BF4\u4E86,\u4ECE\u4F7F\u7528\u7684\u5305\u5C31\u53EF\u4EE5\u770B\u51FA\u6765 \u5C31\u662F\u4F7F\u7528nodejs\u901A\u8FC7github\u63D0\u4F9B\u7684api\u83B7\u53D6\u4ED3\u5E93\u4FE1\u606F \u901A\u8FC7\u4E00\u4E9B\u5305\u5B8C\u6210\u547D\u4EE4\u884C\u4EA4\u4E92 \u7136\u540E\u53C8\u901A\u8FC7fs\u6A21\u5757\u8BFB\u53D6\u6E32\u67D3\u4E0B\u8F7D\u6587\u4EF6 \u5B8C\u6210\u7684\u7B80\u5355\u5B9E\u7528\u7684\u811A\u624B\u67B6 \u5982\u679C\u9700\u8981\u5B9A\u5236\u9700\u6C42\u7684\u8BDD \u5177\u4F53\u7684API\u53EF\u4EE5\u76F4\u63A5\u770Bnpm\u5305\u7684\u9875\u9762"))));c.default=t=>{const i=u.a.useContext(e.context),r=i.demos;return u.a.useEffect(()=>{var E;t!=null&&(E=t.location)!==null&&E!==void 0&&E.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),u.a.createElement(o,{demos:r})}}}]);

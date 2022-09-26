(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[4498],{12543:function(r,a,e){"use strict";e.r(a);var c=e(12924),t=e.n(c),n=e(16924),s=e(53401);const i=t().memo(({demos:u})=>t().createElement(t().Fragment,null,t().createElement("div",{className:"markdown"},t().createElement("h2",{id:"github-\u5361\u987F\u539F\u56E0"},t().createElement(n.AnchorLink,{to:"#github-\u5361\u987F\u539F\u56E0","aria-hidden":"true",tabIndex:-1},t().createElement("span",{className:"icon icon-link"})),"github \u5361\u987F\u539F\u56E0"),t().createElement(s.Z,{code:`github\u6CA1\u6709\u88AB\u5899 \u4F46\u662F\u4E9A\u6D32cdn\u88AB\u5899\u4E86 \u6240\u4EE5git push git clone \u4F1A\u5361
\u89E3\u51B3\u65B9\u6CD5
  1.\u5728host\u6587\u4EF6\u5199\u5165\u6700\u65B0\u7684\u52A8\u6001ip
  2.ssr\u5C0F\u98DE\u673A\u5F00\u4EE3\u7406
  3.\u6CB9\u7334\u63D2\u4EF6 Github \u589E\u5F3A - \u9AD8\u901F\u4E0B\u8F7D
    https://greasyfork.org/zh-CN/scripts
    \u5B89\u88C5\u540E\u5728github ssh http zip\u4E0B\u8F7D\u90FD\u4F1A\u591A\u51FA\u51E0\u4E2A\u4E0B\u8F7D\u65B9\u5F0F`,lang:"js"}),t().createElement("h3",{id:"1\u5728-host-\u6587\u4EF6\u5199\u5165\u6700\u65B0\u7684\u52A8\u6001-ip"},t().createElement(n.AnchorLink,{to:"#1\u5728-host-\u6587\u4EF6\u5199\u5165\u6700\u65B0\u7684\u52A8\u6001-ip","aria-hidden":"true",tabIndex:-1},t().createElement("span",{className:"icon icon-link"})),"1.\u5728 host \u6587\u4EF6\u5199\u5165\u6700\u65B0\u7684\u52A8\u6001 ip"),t().createElement(s.Z,{code:`# https://www.ipaddress.com/
# /etc/hosts
\u67E5\u8BE2\u4E24\u4E2A\u5730\u5740\u7684\u52A8\u6001IP\u5E76\u5728host\u6587\u4EF6\u5199\u5165
140.82.113.3 github.com
199.232.69.194 github.global.ssl.fastly.net
# \u5237\u65B0DNS
sudo killall -HUP mDNSResponder`,lang:"js"}),t().createElement("h3",{id:"2ssr-\u5C0F\u98DE\u673A\u4EE3\u7406"},t().createElement(n.AnchorLink,{to:"#2ssr-\u5C0F\u98DE\u673A\u4EE3\u7406","aria-hidden":"true",tabIndex:-1},t().createElement("span",{className:"icon icon-link"})),"2.ssr \u5C0F\u98DE\u673A\u4EE3\u7406"),t().createElement(s.Z,{code:`# \u4E0B\u8F7D ShadowsocksX-NG (github\u4E0A\u4E5F\u6709)
# \u514D\u8D39\u7684ssr\u8282\u70B9 \u70B9\u51FB\u4E8C\u7EF4\u7801\u5C31\u81EA\u52A8\u5BFC\u5165\u4E86
https://free-ss.site/
# \u5F00\u542F\u5168\u5C40\u6A21\u5F0F
# \u5F00\u653E\u4EE3\u7406\u7AEF\u53E3
export http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;
# git\u8BBE\u7F6E\u4EE3\u7406
git config --global http.https://github.com.proxy socks5://127.0.0.1:1087
git config --global --unset http.https://github.com.proxy`,lang:"js"}))));a.default=u=>{const l=t().useContext(n.context),h=l.demos;return t().useEffect(()=>{var o;u!=null&&(o=u.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),t().createElement(i,{demos:h})}}}]);

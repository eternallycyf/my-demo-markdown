(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[9757],{54777:function(m,r,a){"use strict";a.r(r);var l=a(12924),e=a.n(l),n=a(16924),t=a(53401);const i=e().memo(({demos:u})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"linux"},e().createElement(n.AnchorLink,{to:"#linux","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Linux"),e().createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e().createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e().createElement(t.Z,{code:`\u5B89\u88C5
make
make install`,lang:"js"}),e().createElement("h3",{id:"\u5F00\u673A\u5173\u673A"},e().createElement(n.AnchorLink,{to:"#\u5F00\u673A\u5173\u673A","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5F00\u673A\u5173\u673A"),e().createElement(t.Z,{code:`// \u540C\u6B65\u6570\u636E\u5230\u786C\u76D8
sync
// \u5173\u673A
shutdown
// \u91CD\u542F
reboot  | shutdown -r now
// 10\u5206\u949F\u540E \u91CD\u542F
shutdown -r +10
// \u5173\u95ED\u7CFB\u7EDF
halt

ifconfig en0  // ipconfig/all     ip addr
curl localhost:3344`,lang:"js"}),e().createElement("h3",{id:"\u76EE\u5F55"},e().createElement(n.AnchorLink,{to:"#\u76EE\u5F55","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u76EE\u5F55"),e().createElement(t.Z,{code:`/
bin  \u5B58\u653E\u4F7F\u7528\u7684\u547D\u4EE4
boot linux\u6838\u5FC3\u6587\u4EF6
dev  \u5B58\u653E\u5916\u90E8\u8BBE\u5907
mnt  \u4E34\u65F6\u6302\u8F7D\u6587\u4EF6\u7CFB\u7EDF \u5149\u9A71
media  u\u76D8 \u5149\u9A71
lib  \u52A8\u6001\u94FE\u63A5\u5171\u4EAB\u5E93
lost+fount \u7CFB\u7EDF\u975E\u6CD5\u5173\u673A\u524D\u6CA1\u4FDD\u5B58\u7684\u6587\u4EF6
proc \u7CFB\u7EDF\u5185\u5B58\u6620\u5C04 \u7CFB\u7EDF\u4FE1\u606F
sbin \u7CFB\u7EDF\u7BA1\u7406\u5458\u7684\u7CFB\u7EDF\u7BA1\u7406\u7A0B\u5E8F
srv  \u670D\u52A1\u542F\u52A8\u540E\u9700\u8981\u63D0\u53D6\u7684\u6570\u636E
sys  \u5B58\u653E\u6587\u4EF6\u7CFB\u7EDF
run  \u4E34\u65F6\u6587\u4EF6\u7CFB\u7EDF


etc  \u7CFB\u7EDF\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6
home \u7528\u6237\u6587\u4EF6\u5939
root \u7BA1\u7406\u5458\u6587\u4EF6\u5939
opt  \u653E\u6570\u636E\u5E93\u7B49\u5B88\u62A4\u8FDB\u7A0B
user \u7528\u6237\u7684\u7A0B\u5E8F\u653E\u5728\u8FD9\u91CC qq \u5FAE\u4FE1
     user/bin  \u7CFB\u7EDF\u7528\u6237
     user/sbin \u8D85\u7EA7\u7528\u6237
     user/src  \u5185\u6838\u6E90\u4EE3\u7801
var  \u65E5\u5FD7
tmp  \u4E34\u65F6\u6587\u4EF6
www  \u5B58\u653E\u7F51\u7AD9`,lang:"js"}),e().createElement("h3",{id:"\u6587\u4EF6\u540D\u5B57\u542B\u4E49"},e().createElement(n.AnchorLink,{to:"#\u6587\u4EF6\u540D\u5B57\u542B\u4E49","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6587\u4EF6\u540D\u5B57\u542B\u4E49"),e().createElement(t.Z,{code:`drwx-wx-wx-x@ root root
# \u7B2C\u4E00\u4E2A\u5B57\u7B26
d \u8868\u793A\u76EE\u5F55
r \u4FBF\u662F\u53EF\u4EE5\u6253\u5F00\u7684\u6587\u4EF6
- \u6587\u4EF6
l \u94FE\u63A5\u6587\u6863
# \u4E09\u7EC4
r\u53EF\u8BFB w\u53EF\u5199 x\u53EF\u6267\u884C -\u6CA1\u6743\u9650
\u4E3B\u6743\u9650 \u7EC4\u6743\u9650 \u5176\u4ED6\u7528\u6237\u6743\u9650
# \u5C5E\u7EC4 \u5C5E\u4E3B
# \u6587\u4EF6\u5927\u5C0F \u65F6\u95F4`,lang:"js"}),e().createElement("h3",{id:"\u8D26\u53F7\u7BA1\u7406"},e().createElement(n.AnchorLink,{to:"#\u8D26\u53F7\u7BA1\u7406","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u8D26\u53F7\u7BA1\u7406"),e().createElement(t.Z,{code:`# \u6DFB\u52A0\u7528\u6237
useradd - \u9009\u9879 \u7528\u6237\u540D
        -m \u7528\u6237\u540D \u81EA\u52A8\u521B\u5EFA\u8FD9\u4E2A\u7528\u6237\u7684\u4E3B\u76EE\u5F55
  /etc/passwd
# \u5220\u9664\u7528\u6237
userdel -r \u7528\u6237\u540D
# \u5207\u6362\u7528\u6237
su \u7528\u6237\u540D
sudo su
# hostname \u4E3B\u673A\u540D
hostname \u4FEE\u6539\u4E3B\u673A\u540D
# \u8BBE\u7F6E\u5BC6\u7801
passwd \u7528\u6237\u540D`,lang:"js"}),e().createElement("h2",{id:"\u57FA\u672C\u547D\u4EE4"},e().createElement(n.AnchorLink,{to:"#\u57FA\u672C\u547D\u4EE4","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u547D\u4EE4"),e().createElement(t.Z,{code:`ls -
a - // \u6240\u6709\u7684\u6587\u4EF6
l - // \u5305\u542B\u6587\u4EF6\u7684\u5C5E\u6027\u548C\u6743\u9650 \u6CA1\u6709\u9690\u85CF\u6587\u4EF6
  al;

pwd; // \u663E\u793A\u5F53\u524D\u76EE\u5F55`,lang:"js"}),e().createElement("h3",{id:"\u6587\u4EF6\u64CD\u4F5C"},e().createElement(n.AnchorLink,{to:"#\u6587\u4EF6\u64CD\u4F5C","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6587\u4EF6\u64CD\u4F5C"),e().createElement(t.Z,{code:`mkdir -p \u8DEF\u5F84     // \u9012\u5F52\u521B\u5EFA \u4E0D\u52A0\u5C31\u53EA\u80FD\u5728\u6587\u4EF6\u5B58\u5728\u7684\u57FA\u7840\u4E0A\u521B\u5EFA

rm \u6587\u4EF6\u540D             // \u5220\u9664\u6587\u4EF6
rmdir \u6587\u4EF6\u5939\u540D\u5B57       // \u5220\u9664\u6587\u4EF6\u5939
rm -rf \u6587\u4EF6\u6216\u6587\u4EF6\u5939\u540D\u5B57 // \u5220\u9664\u6240\u6709  /*

cp \u539F\u8DEF\u5F84 \u65B0\u8DEF\u5F84      // \u590D\u5236\u6587\u4EF6
cp -a \u539F\u8DEF\u5F84 \u65B0\u8DEF\u5F84   // \u590D\u5236\u6587\u4EF6\u5939

mv \u539F\u8DEF\u5F84 \u65B0\u8DEF\u5F84     // \u79FB\u52A8\u6587\u4EF6\u6216\u6587\u4EF6\u5939 \u91CD\u547D\u540D\u6587\u4EF6
mv -f \u539F\u8DEF\u5F84 \u65B0\u8DEF\u5F84  // \u5F3A\u5236`,lang:"js"}),e().createElement("h3",{id:"\u6587\u4EF6\u6743\u9650"},e().createElement(n.AnchorLink,{to:"#\u6587\u4EF6\u6743\u9650","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6587\u4EF6\u6743\u9650"),e().createElement(t.Z,{code:`# \u66F4\u6539\u5C5E\u7EC4
chgrp [-R] \u5C5E\u6027\u540D \u6587\u4EF6\u540D  // -R \u9012\u5F52
# \u66F4\u6539\u5C5E\u4E3B
chown [-R] \u5C5E\u4E3B\u540D \u6587\u4EF6\u540D
           \u5C5E\u4E3B\u540D: \u5C5E\u7EC4\u540D \u6587\u4EF6\u540D

# \u66F4\u6539\u6587\u4EF69\u4E2A\u5C5E\u6027
chmod [-R] 777 \u6587\u4EF6\u540D/\u6587\u4EF6\u540D
r:4 w:2 x:1`,lang:"js"}),e().createElement("h3",{id:"\u8BFB\u6587\u4EF6"},e().createElement(n.AnchorLink,{to:"#\u8BFB\u6587\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u8BFB\u6587\u4EF6"),e().createElement(t.Z,{code:`cat  \u6587\u4EF6\u540D   // \u663E\u793A\u6587\u4EF6\u5185\u5BB9
nl   \u6587\u4EF6\u540D   // \u663E\u793A\u884C\u53F7
less \u6587\u4EF6\u540D   // \u548Cmore\u4E00\u6837 \u4F46\u53EF\u4EE5\u7FFB\u9875 \u7A7A\u683C\u4E0B\u4E00\u9875 b \u4E0A\u4E00\u9875
:q \u9000\u51FA
/\u641C\u7D22\u6587\u672C    // \u5411\u4E0B\u641C\u7D22
?\u641C\u7D22\u6587\u672C    // \u5411\u4E0A\u641C\u7D22
n           // \u81EA\u52A8\u8DF3\u8F6C\u4E0B\u4E00\u4E2A
N           // \u81EA\u52A8\u8DF3\u8F6C\u4E0A\u4E00\u4E2A

more \u6587\u4EF6\u540D   // \u4E00\u9875\u4E00\u9875\u7684\u663E\u793A
head -n 20 \u6587\u4EF6\u540D   // \u53EA\u770B\u5934\u51E0\u884C
tail \u6587\u4EF6\u540D   // \u53EA\u770B\u7ED3\u5C3E\u51E0\u884C
man ap \u5E2E\u52A9\u547D\u4EE4`,lang:"js"}),e().createElement("h3",{id:"\u5199\u6587\u4EF6"},e().createElement(n.AnchorLink,{to:"#\u5199\u6587\u4EF6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5199\u6587\u4EF6"),e().createElement(t.Z,{code:`touch
echo xxx >> \u6587\u4EF6\u540D`,lang:"js"}),e().createElement("h2",{id:"\u94FE\u63A5"},e().createElement(n.AnchorLink,{to:"#\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u94FE\u63A5"),e().createElement(t.Z,{code:`# \u786C\u94FE\u63A5
\u5141\u8BB8\u4E00\u4E2A\u6587\u4EF6\u6709\u591A\u4E2A\u8DEF\u5F84 \u9632\u6B62\u8BEF\u5220
A--B \u5C31\u7B97A\u5220\u9664\u4E86 B\u8FD8\u80FD\u8BBF\u95EE
ln A B
# \u8F6F\u8FDE\u63A5
\u5FEB\u6377\u65B9\u5F0F
ln -s A B`,lang:"js"}),e().createElement("h2",{id:"vim"},e().createElement(n.AnchorLink,{to:"#vim","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"VIM"),e().createElement(t.Z,{code:`esc :wq \u9000\u51FA
:i \u8F93\u5165
:p \u590D\u5236
:d \u5220\u9664
:u \u64A4\u9500`,lang:"js"}),e().createElement("h2",{id:"\u5176\u4ED6"},e().createElement(n.AnchorLink,{to:"#\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6"),e().createElement(t.Z,{code:`## \u538B\u7F29
  tar cvf \u538B\u7F29\u540E\u540D\u5B57.tar \u8DEF\u5F84
  zip \u538B\u7F29\u540E\u540D\u5B57.zip \u539F\u540D
  ## \u89E3\u538B
  tar xvf \u540D\u5B57.tar
  unzip \u540D\u5B57.zip`,lang:"js"}),e().createElement("h3",{id:"ssh"},e().createElement(n.AnchorLink,{to:"#ssh","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"ssh"),e().createElement(t.Z,{code:`#!/usr/bin/env sh

# \u5148\u5728\u672C\u5730\u751F\u6210\u516C\u5319\u5B58\u50A8\u5BC6\u7801: \u76F4\u63A5\u4F7F\u7528ssh \u4E0D\u7528\u518D\u6B21\u8F93\u5165\u5BC6\u7801
# ssh-keygen -t rsa
# ssh-copy-id root@118.31.34.158`,lang:"js"}))));r.default=u=>{const o=e().useContext(n.context),s=o.demos;return e().useEffect(()=>{var c;u!=null&&(c=u.location)!==null&&c!==void 0&&c.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e().createElement(i,{demos:s})}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"1N1C":function(m,i,t){"use strict";t.r(i);var c=t("cDcd"),e=t.n(c),n=t("dEAq"),d=t.n(n),a=t("H1Ra");const s=e.a.memo(({demos:r})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"nginx"},e.a.createElement(n.AnchorLink,{to:"#nginx","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Nginx"),e.a.createElement("h2",{id:"1\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#1\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"1.\u51C6\u5907\u9636\u6BB5"),e.a.createElement(a.a,{code:`localhost:8080
/usr/local/etc/nginx/nginx.conf

 nginx  // \u542F\u52A8
 nginx -s stop // sudo nginx -s quit  \u505C\u6B62
 nginx -s quit // \u5B89\u5168\u9000\u51FA
 nginx -s reload // \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6
 ps aux|grep nginx // \u67E5\u770Bgninx\u8FDB\u7A0B

 nginx > conf > nginx.conf`,lang:"js"}),e.a.createElement(a.a,{code:`# \u5168\u5C40\u5757
\u4E3B\u8981\u8BBE\u7F6ENginx\u670D\u52A1\u5668\u6574\u4F53\u8FD0\u884C\u7684\u914D\u7F6E\u6307\u4EE4

# event
\u4E3B\u8981\u8BBE\u7F6E,Nginx\u670D\u52A1\u5668\u4E0E\u7528\u6237\u7684\u7F51\u7EDC\u8FDE\u63A5,\u8FD9\u4E00\u90E8\u5206\u5BF9Nginx\u670D\u52A1\u5668\u7684\u6027\u80FD\u5F71\u54CD\u8F83\u5927

# http
\u4EE3\u7406\u3001\u7F13\u5B58\u3001\u65E5\u5FD7\u8BB0\u5F55\u3001\u7B2C\u4E09\u65B9\u6A21\u5757\u914D\u7F6E...`,lang:"js"}),e.a.createElement("h3",{id:"\u5168\u5C40\u5757"},e.a.createElement(n.AnchorLink,{to:"#\u5168\u5C40\u5757","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5C40\u5757"),e.a.createElement(a.a,{code:`# \u6DFB\u52A0\u4E00\u4E2A\u7528\u6237\u548C\u7528\u6237\u7EC4
user www;
# \u521B\u5EFA\u4E00\u4E2A\u7528\u6237
useradd www
# \u4FEE\u6539user\u5C5E\u6027
user www

# work process
  ## master_process on; \u7528\u6765\u6307\u5B9A\u662F\u5426\u5F00\u542F\u5DE5\u4F5C\u8FDB\u7A0B\u3002
  master_process on|off;
  ## worker_processes: 1;
   \u7528\u4E8E\u914D\u7F6ENginx\u751F\u6210\u5DE5\u4F5C\u8FDB\u7A0B\u7684\u6570\u91CF \u5E76\u53D1\u6570\u91CF
   \u5EFA\u8BAE\u548C\u670D\u52A1\u5668cpu\u5185\u6838\u6570\u4FDD\u6301\u4E00\u81F4
   worker_processes num/auto;
  ## daemon on;
   \u8BBE\u7F6Enginx\u662F\u5426\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u7684\u65B9\u5F0F\u542F\u52A8 \u7EC8\u7AEF\u5173\u4E86\u540E\u53F0\u8FD8\u5F00\u7740
   daemon on|off;
  ## pid: /usr/local/nginx/logs/nginx.pid;
   \u7528\u6765\u914D\u7F6ENginx\u5F53\u524Dmaster\u8FDB\u7A0B\u7684\u8FDB\u7A0B\u53F7ID\u5B58\u50A8\u7684\u6587\u4EF6\u8DEF\u5F84
   pid file;
   \u53EF\u4EE5\u901A\u8FC7./configure --pid-path=PATH\u6765\u6307\u5B9A
  ## error_log logs/error.log error;
    \u914D\u7F6ENginx\u7684\u9519\u8BEF\u65E5\u5FD7\u5B58\u653E\u8DEF\u5F84
  ## include:
    \u7528\u6765\u5F15\u5165\u5176\u4ED6\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F7FNginx\u7684\u914D\u7F6E\u66F4\u52A0\u7075\u6D3B`,lang:"js"}),e.a.createElement("h3",{id:"event"},e.a.createElement(n.AnchorLink,{to:"#event","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"event"),e.a.createElement(a.a,{code:`# accept_mutex on;
  \u7528\u6765\u8BBE\u7F6ENginx\u7F51\u7EDC\u8FDE\u63A5\u5E8F\u5217\u5316
  \u89E3\u51B3\u60CA\u7FA4\u95EE\u9898 off:\u540C\u65F6\u5524\u9192\u591A\u4E2Aworker\u8FDB\u7A0B \u53EA\u6709\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u83B7\u53D6\u5230\u8FDE\u63A5
             on: \u8FDB\u884C\u6392\u5E8F \u4E00\u4E2A\u4E00\u4E2A\u5524\u9192
  accept_mutex on|off;
# multi_accept off;
  \u7528\u6765\u8BBE\u7F6E\u662F\u5426\u5141\u8BB8\u540C\u65F6\u63A5\u6536\u591A\u4E2A\u7F51\u7EDC\u8FDE\u63A5
  multi_accept on|off;
  \u9ED8\u8BA4\u4E00\u4E2A\u5DE5\u4F5C\u8FDB\u7A0B\u53EA\u80FD\u540C\u65F6\u63A5\u53D7\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5
# worker_commections 512;
  \u914D\u7F6E\u5355\u4E2Aworker\u8FDB\u7A0B\u6700\u5927\u7684\u8FDE\u63A5\u6570\u3002\u6240\u6709\u53EF\u80FD\u7684\u8FDE\u63A5\u6570
  worker_connections number;
# use: epoll;
  \u7528\u6765\u8BBE\u7F6ENginx\u670D\u52A1\u5668\u9009\u62E9\u54EA\u79CD\u4E8B\u4EF6\u9A71\u52A8\u6765\u5904\u7406\u7F51\u7EDC\u6D88\u606F
  use method;  (select/poll/epoll/kqueue)`,lang:"js"}),e.a.createElement("h3",{id:"http"},e.a.createElement(n.AnchorLink,{to:"#http","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"http"),e.a.createElement("h4",{id:"base"},e.a.createElement(n.AnchorLink,{to:"#base","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"base"),e.a.createElement(a.a,{code:`include mime.types;
# default_type text/plain\uFF1B
  \u5B9A\u4E49MIME-Type
  default_type mime-type;
  ## \u5B9A\u4E49\u4E00\u4E2A\u7B80\u5355\u7684\u63A5\u53E3
  location /get_json{
    default_type application/json;
    return 200 '{"name":"TOM","age":18}';
  }
# access_log logs/access.log combined;
\u7528\u6765\u8BB0\u5F55\u7528\u6237\u6240\u6709\u7684\u8BBF\u95EE\u8BF7\u6C42
access_log path[format[buffer=size]]
# log_format combined \u201C\u2026\u201D;
\u7528\u6765\u6307\u5B9A\u65E5\u5FD7\u7684\u8F93\u51FA\u683C\u5F0F
log_format name [escape=default|json|none] string\u2026.;
# sendfile off;
\u7528\u6765\u8BBE\u7F6ENginx\u670D\u52A1\u5668\u662F\u5426\u4F7F\u7528sendfile()\u4F20\u8F93\u6587\u4EF6\uFF0C\u8BE5\u5C5E\u6027\u53EF\u4EE5\u5927\u5927\u63D0\u9AD8Nginx\u5904\u7406\u9759\u6001\u8D44\u6E90\u7684\u6027\u80FD
sendfile on|off\uFF1B
# keepalive_timeout 75s;
\u7528\u6765\u8BBE\u7F6E\u957F\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4
keepalive_timeout time;
# keepalive_requests 100;
\u7528\u6765\u8BBE\u7F6E\u4E00\u4E2Akeep-alive\u8FDE\u63A5\u4F7F\u7528\u7684\u6B21\u6570
keepalive_requests number;`,lang:"js"}),e.a.createElement("h4",{id:"\u9759\u6001\u8D44\u6E90\u538B\u7F29"},e.a.createElement(n.AnchorLink,{to:"#\u9759\u6001\u8D44\u6E90\u538B\u7F29","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u8D44\u6E90\u538B\u7F29"),e.a.createElement("h5",{id:"base-1"},e.a.createElement(n.AnchorLink,{to:"#base-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"base"),e.a.createElement(a.a,{code:`http{
   gzip on;                #\u5F00\u542Fgzip\u529F\u80FD
  gzip_types *;          #\u538B\u7F29\u6E90\u6587\u4EF6\u7C7B\u578B,\u6839\u636E\u5177\u4F53\u7684\u8BBF\u95EE\u8D44\u6E90\u7C7B\u578B\u8BBE\u5B9A
  gzip_comp_level 6;      #gzip\u538B\u7F29\u7EA7\u522B
  gzip_min_length 1024; #\u8FDB\u884C\u538B\u7F29\u54CD\u5E94\u9875\u9762\u7684\u6700\u5C0F\u957F\u5EA6,content-length
  gzip_buffers 4 16K;      #\u7F13\u5B58\u7A7A\u95F4\u5927\u5C0F
  gzip_http_version 1.1; #\u6307\u5B9A\u538B\u7F29\u54CD\u5E94\u6240\u9700\u8981\u7684\u6700\u4F4EHTTP\u8BF7\u6C42\u7248\u672C
  gzip_vary  on;          #\u5F80\u5934\u4FE1\u606F\u4E2D\u6DFB\u52A0\u538B\u7F29\u6807\u8BC6
  gzip_disable "MSIE [1-6]\\."; #\u5BF9IE6\u4EE5\u4E0B\u7684\u7248\u672C\u90FD\u4E0D\u8FDB\u884C\u538B\u7F29
gzip_proxied  off\uFF1B #nginx\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u538B\u7F29\u670D\u52A1\u7AEF\u8FD4\u56DE\u6570\u636E\u7684\u6761\u4EF6
}`,lang:"js"}),e.a.createElement("h5",{id:"\u6307\u4EE4"},e.a.createElement(n.AnchorLink,{to:"#\u6307\u4EE4","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6307\u4EE4"),e.a.createElement(a.a,{code:`# gzip off;
\u6307\u4EE4\u7528\u4E8E\u5F00\u542F\u6216\u8005\u5173\u95EDgzip\u529F\u80FD

# gzip_types text/html;
\u6839\u636E\u54CD\u5E94\u9875\u7684MIME\u7C7B\u578B\u9009\u62E9\u6027\u5730\u5F00\u542FGzip\u538B\u7F29\u529F\u80FD *\u4EE3\u8868\u6240\u6709
gzip_types mime-type \u2026;
http{
    gzip_types application/javascript;
}

# gzip_comp_level 1;
\u8BBE\u7F6EGzip\u538B\u7F29\u7A0B\u5EA6 \u7EA7\u522B1-9 9\u662F\u538B\u7F29\u7A0B\u5EA6\u6700\u9AD8 \u6700\u8017\u65F6\u95F4
http{
    gzip_comp_level 6;
}

# gzip_vary off;
\u8BBE\u7F6E\u4F7F\u7528Gzip\u8FDB\u884C\u538B\u7F29\u53D1\u9001\u662F\u5426\u643A\u5E26\u201CVary:Accept-Encoding\u201D\u5934\u57DF\u7684\u54CD\u5E94\u5934\u90E8 \u544A\u8BC9\u63A5\u6536\u65B9\u4F7F\u7528\u4E86gzip\u538B\u7F29
gzip_vary on|off;

# gzip_buffers 32 4k|16 8k;
\u5904\u7406\u8BF7\u6C42\u538B\u7F29\u7684\u7F13\u51B2\u533A\u6570\u91CF\u548C\u5927\u5C0F
gzip_buffers number size;
number:\u6307\u5B9ANginx\u670D\u52A1\u5668\u5411\u7CFB\u7EDF\u7533\u8BF7\u7F13\u5B58\u7A7A\u95F4\u4E2A\u6570
size: \u6BCF\u4E2A\u7F13\u5B58\u7A7A\u95F4\u7684\u5927\u5C0F
\u7533\u8BF7number\u4E2A\u6BCF\u4E2A\u5927\u5C0F\u4E3Asize\u7684\u5185\u5B58\u7A7A\u95F4
gzip_buffers 4 16K;      #\u7F13\u5B58\u7A7A\u95F4\u5927\u5C0F

# gzip_disable
gzip_disable regex \u2026;
\u9488\u5BF9\u4E0D\u540C\u79CD\u7C7B\u5BA2\u6237\u7AEF\u53D1\u8D77\u7684\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u5F00\u542F\u548C\u5173\u95EDGzip\u529F\u80FD
\u6839\u636E user-agent \u8BBE\u7F6E \u53EF\u7528\u6B63\u5219 \u7528\u6765\u6392\u9664\u4E0D\u652F\u6301gzip\u7684\u6D4F\u89C8\u5668
gzip_disable "MSIE [1-6]\\.";

# gzip_http_version 1.1;
\u9488\u5BF9\u4E0D\u540C\u7684HTTP\u534F\u8BAE\u7248\u672C\uFF0C\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u5F00\u542F\u548C\u5173\u95EDGzip\u529F\u80FD
\u6307\u5B9A\u4F7F\u7528Gzip\u7684HTTP\u6700\u4F4E\u7248\u672C

# gzip_min_length 20;
\u6307\u4EE4\u9488\u5BF9\u4F20\u8F93\u6570\u636E\u7684\u5927\u5C0F\uFF0C\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u5F00\u542F\u548C\u5173\u95EDGzip\u529F\u80FD
nignx\u8BA1\u91CF\u5927\u5C0F\u7684\u5355\u4F4D\uFF1Abytes[\u5B57\u8282] / kb[\u5343\u5B57\u8282] / M[\u5146]
\u4F8B\u5982: 1024 / 10k|K / 10m|M

# gzip_proxied off;
\u662F\u5426\u5BF9\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u7ED3\u679C\u8FDB\u884CGzip\u538B\u7F29
gzip_proxied off|expired|no-cache|<br/>no-store|private|no_last_modified|no_etag|auth|any;
off - \u5173\u95EDNginx\u670D\u52A1\u5668\u5BF9\u540E\u53F0\u670D\u52A1\u5668\u8FD4\u56DE\u7ED3\u679C\u7684Gzip\u538B\u7F29
expired - \u542F\u7528\u538B\u7F29\uFF0C\u5982\u679Cheader\u5934\u4E2D\u5305\u542B \u201CExpires\u201D \u5934\u4FE1\u606F
no-cache - \u542F\u7528\u538B\u7F29\uFF0C\u5982\u679Cheader\u5934\u4E2D\u5305\u542B \u201CCache-Control:no-cache\u201D \u5934\u4FE1\u606F
no-store - \u542F\u7528\u538B\u7F29\uFF0C\u5982\u679Cheader\u5934\u4E2D\u5305\u542B \u201CCache-Control:no-store\u201D \u5934\u4FE1\u606F
private - \u542F\u7528\u538B\u7F29\uFF0C\u5982\u679Cheader\u5934\u4E2D\u5305\u542B \u201CCache-Control:private\u201D \u5934\u4FE1\u606F
no_last_modified - \u542F\u7528\u538B\u7F29,\u5982\u679Cheader\u5934\u4E2D\u4E0D\u5305\u542B \u201CLast-Modified\u201D \u5934\u4FE1\u606F
no_etag - \u542F\u7528\u538B\u7F29 ,\u5982\u679Cheader\u5934\u4E2D\u4E0D\u5305\u542B \u201CETag\u201D \u5934\u4FE1\u606F
auth - \u542F\u7528\u538B\u7F29 , \u5982\u679Cheader\u5934\u4E2D\u5305\u542B \u201CAuthorization\u201D \u5934\u4FE1\u606F
any - \u65E0\u6761\u4EF6\u542F\u7528\u538B\u7F29

# gzip_static off;
\u68C0\u67E5\u4E0E\u8BBF\u95EE\u8D44\u6E90\u540C\u540D\u7684.gz\u6587\u4EF6\u65F6\uFF0Cresponse\u4E2D\u4EE5gzip\u76F8\u5173\u7684header\u8FD4\u56DE.gz\u6587\u4EF6\u7684\u5185\u5BB9
gzip_static on | off | always;`,lang:"js"}),e.a.createElement("h5",{id:"\u8DE8\u57DF"},e.a.createElement(n.AnchorLink,{to:"#\u8DE8\u57DF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8DE8\u57DF"),e.a.createElement(a.a,{code:`location /getUser{
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE;
}`,lang:"js"}),e.a.createElement("h3",{id:"server"},e.a.createElement(n.AnchorLink,{to:"#server","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"server"),e.a.createElement("h4",{id:"base-2"},e.a.createElement(n.AnchorLink,{to:"#base-2","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"base"),e.a.createElement(a.a,{code:`server{
        #\u914D\u7F6E\u76D1\u542C\u7AEF\u53E3\u548C\u4E3B\u673A\u540D\u79F0
        listen 8081;
        server_name localhost;
        #\u914D\u7F6E\u8BF7\u6C42\u5904\u7406\u65E5\u5FD7\u5B58\u653E\u8DEF\u5F84
        access_log /home/www/myweb/server1/logs/access.log server1;
        #\u914D\u7F6E\u9519\u8BEF\u9875\u9762
        error_page 404 /404.html;
        #\u914D\u7F6E\u5904\u7406/server1/location1\u8BF7\u6C42\u7684location
        location /server1/location1{
            root /home/www/myweb;
            index index_sr1_location1.html;
        }
        #\u914D\u7F6E\u9519\u8BEF\u9875\u9762\u8F6C\u5411
        location = /404.html {
            root /home/www/myweb;
            index 404.html;
        }
}`,lang:"js"}),e.a.createElement("h4",{id:"\u9759\u6001\u8D44\u6E90\u90E8\u7F72"},e.a.createElement(n.AnchorLink,{to:"#\u9759\u6001\u8D44\u6E90\u90E8\u7F72","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u8D44\u6E90\u90E8\u7F72"),e.a.createElement(a.a,{code:`# listen *:80 | *:8000
listen address[:port] [default_server]\u2026;<br/>listen port [default_server]\u2026;

// listen localhost:8000 \u76D1\u542C\u6307\u5B9A\u7684IP\u548C\u7AEF\u53E3
listen 127.0.0.1:8000;
listen 127.0.0.1;    \u76D1\u542C\u6307\u5B9AIP\u7684\u6240\u6709\u7AEF\u53E3
listen 8000;    \u76D1\u542C\u6307\u5B9A\u7AEF\u53E3\u4E0A\u7684\u8FDE\u63A5
listen *:8000;    \u76D1\u542C\u6307\u5B9A\u7AEF\u53E3\u4E0A\u7684\u8FDE\u63A5
// default_server; \u6307\u5982\u679C\u4E0D\u6307\u5B9A\u9ED8\u8BA4\u7684\u5C31\u6307\u5411\u7B2C\u4E00\u4E2A\u5B9A\u4E49\u7684server\u7AEF\u53E3
listen 8080 default_server;

# server_name: '';
\u7528\u6765\u8BBE\u7F6E\u865A\u62DF\u4E3B\u673A\u670D\u52A1\u540D\u79F0
127.0.0.1 localhost www.baidu.com
  ## \u7CBE\u786E\u5339\u914D
  server_name www.baidu.com;
  ## \u901A\u914D\u7B26\u914D\u7F6E
  \u901A\u914D\u7B26\u4E0D\u80FD\u51FA\u73B0\u5728\u57DF\u540D\u7684\u4E2D\u95F4 \u53EA\u80FD\u51FA\u73B0\u5728\u9996\u6BB5\u6216\u5C3E\u6BB5
  *.baidu.com www.baidu.*
  ## \u6B63\u5219\u8868\u8FBE\u5F0F\u914D\u7F6E
  server_name ~^www\\.(\\w+)\\.com$;`,lang:"js"}),e.a.createElement("h4",{id:"location"},e.a.createElement(n.AnchorLink,{to:"#location","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"location"),e.a.createElement("h5",{id:"base-3"},e.a.createElement(n.AnchorLink,{to:"#base-3","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"base"),e.a.createElement(a.a,{code:`server{
    listen 80;
    server_name localhost;
    location / {

    }
    location /abc{

    }
    ...
}`,lang:"js"}),e.a.createElement("h5",{id:"\u53CD\u5411\u4EE3\u7406"},e.a.createElement(n.AnchorLink,{to:"#\u53CD\u5411\u4EE3\u7406","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53CD\u5411\u4EE3\u7406"),e.a.createElement(a.a,{code:`# location [ = | ~ | * | ^ |@ ] uri{\u2026}
  ## /
  location /abc { ... }
  http://192.168.200.133/abc
  http://192.168.200.133/abc?p1=TOM
  http://192.168.200.133/abc/
  http://192.168.200.133/abcdef
  ## = \u7CBE\u786E\u5339\u914D
  location =/abc {...}
  http://192.168.200.133/abc
  http://192.168.200.133/abc?p1=TOM
  ## ~ \u7528\u4E8E\u8868\u793A\u5F53\u524Duri\u4E2D\u5305\u542B\u4E86\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5E76\u4E14\u533A\u5206\u5927\u5C0F\u5199
  ## ~* \u7528\u4E8E\u8868\u793A\u5F53\u524Duri\u4E2D\u5305\u542B\u4E86\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5E76\u4E14\u4E0D\u533A\u5206\u5927\u5C0F\u5199
  location ~^/abc\\w$
  location ~*^/abc\\w$
  ## ^~ \u529F\u80FD\u548C\u4E0D\u52A0\u7B26\u53F7\u7684\u4E00\u81F4 \u5982\u679C\u6A21\u5F0F\u5339\u914D \u5C31\u505C\u6B62\u641C\u7D22\u5176\u4ED6\u6A21\u5F0F
  ^~/abc

# proxy_pass URL;
\u8BBE\u7F6E\u88AB\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740
proxy_pass http://192.168.200.146;
proxy_pass http://www.baidu.com;
# proxy_set_header
proxy_set_header Host $proxy_host;<br/>proxy_set_header Connection close;
\u5C06\u65B0\u7684\u8BF7\u6C42\u5934\u53D1\u9001\u7ED9\u4EE3\u7406\u7684\u670D\u52A1\u5668
\u88AB\u4EE3\u7406\u670D\u52A1\u5668\uFF1A [192.168.200.146]
server {
        listen  8080;
        server_name localhost;
        default_type text/plain;
        return 200 $http_username;
}
\u4EE3\u7406\u670D\u52A1\u5668: [192.168.200.133]
server {
        listen  8080;
        server_name localhost;
        location /server {
                proxy_pass http://192.168.200.146:8080/;
                proxy_set_header username TOM;
        }
    }
# proxy_redirect
\u91CD\u7F6E\u5934\u4FE1\u606F\u4E2D\u7684\u201DLocation\u201D\u548C\u201DRefresh\u201D\u7684\u503C\u3002`,lang:"js"}),e.a.createElement("h5",{id:"rewrite"},e.a.createElement(n.AnchorLink,{to:"#rewrite","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Rewrite"),e.a.createElement(a.a,{code:`server {
    listen 80;
    server_name www.360buy.com;
    rewrite ^/ http://www.jd.com permanent;
}
// \u643A\u5E26\u8BF7\u6C42\u7684URI
server {
    listen 80;
    server_name www.baidu.com;
    rewrite ^(.*) http://www.xx.com$1 permanent;
}


# \u5E38\u7528\u5168\u5C40\u53D8\u91CF
// \u67E5\u8BE2\u53C2\u6570
$http_user_agent
// \u5F53\u524D\u8BBF\u95EE\u5730\u5740\u7684URI pathname
$host
$document_root
$content_length
$content_type
$http_cookie
$limit_rate
$remote_addr
$remote_port
$remote_user
$scheme
$server_addr
$server_name
$server_port
$server_protocol
$request_body_file
$request_method
$request_filename
$request_uri

# set
\u8BBE\u7F6E\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF
set $variable value;
# if
  // \u7A7A\u6216\u8005\u662F0:false \u5176\u4ED6\u90FD\u662Ftrue
  if ($param){

  }
  // = !=
  if ($request_method = POST){
    return 405;
  }
  // \u6B63\u5219 ~:\u533A\u5206\u5927\u5C0F\u5199 ~*:\u4E0D\u533A\u5206\u5927\u5C0F\u5199
if ($http_user_agent ~ MSIE){
    #$http_user_agent\u7684\u503C\u4E2D\u662F\u5426\u5305\u542BMSIE\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u5305\u542B\u8FD4\u56DEtrue
}
   // \u5224\u65AD\u8BF7\u6C42\u7684\u6587\u4EF6\u662F\u5426\u5B58\u5728\u4F7F\u7528\u201D-f\u201D\u548C\u201D!-f\u201D,
\u5F53\u4F7F\u7528\u201D-f\u201D\u65F6\uFF0C\u5982\u679C\u8BF7\u6C42\u7684\u6587\u4EF6\u5B58\u5728\u8FD4\u56DEtrue\uFF0C\u4E0D\u5B58\u5728\u8FD4\u56DEfalse\u3002
\u5F53\u4F7F\u7528\u201D!f\u201D\u65F6\uFF0C\u5982\u679C\u8BF7\u6C42\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u4F46\u8BE5\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u5B58\u5728\u8FD4\u56DEtrue,\u6587\u4EF6\u548C\u76EE\u5F55\u90FD\u4E0D\u5B58\u5728\u8FD4\u56DEfalse,\u5982\u679C\u6587\u4EF6\u5B58\u5728\u8FD4\u56DEfalse

if (-f $request_filename){
    #\u5224\u65AD\u8BF7\u6C42\u7684\u6587\u4EF6\u662F\u5426\u5B58\u5728
}
if (!-f $request_filename){
    #\u5224\u65AD\u8BF7\u6C42\u7684\u6587\u4EF6\u662F\u5426\u4E0D\u5B58\u5728
}
  // \u5224\u65AD\u8BF7\u6C42\u7684\u76EE\u5F55\u662F\u5426\u5B58\u5728\u4F7F\u7528\u201D-d\u201D\u548C\u201D!-d\u201D,
  // \u5224\u65AD\u8BF7\u6C42\u7684\u76EE\u5F55\u6216\u8005\u6587\u4EF6\u662F\u5426\u5B58\u5728\u4F7F\u7528\u201D-e\u201D\u548C\u201D!-e\u201D
  // \u5224\u65AD\u8BF7\u6C42\u7684\u6587\u4EF6\u662F\u5426\u53EF\u6267\u884C\u4F7F\u7528\u201D-x\u201D\u548C\u201D!-x\u201D
# break
location /{
    if ($param){
        set $id $1;
        break;
        limit_rate 10k;
    }
}
# return`,lang:"js"}),e.a.createElement("h5",{id:"\u57DF\u540D\u955C\u50CF"},e.a.createElement(n.AnchorLink,{to:"#\u57DF\u540D\u955C\u50CF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57DF\u540D\u955C\u50CF"),e.a.createElement(a.a,{code:`server {
    listen 80;
    server_name rewrite.myweb.com;
    location ^~ /source1{
        rewrite ^/resource1(.*) http://rewrite.myweb.com/web$1 last;
    }
    location ^~ /source2{
        rewrite ^/resource2(.*) http://rewrite.myweb.com/web$1 last;
    }
}`,lang:"js"}),e.a.createElement("h5",{id:"\u5176\u4ED6"},e.a.createElement(n.AnchorLink,{to:"#\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6"),e.a.createElement(a.a,{code:`# root html;
  \u8BBE\u7F6E\u8BF7\u6C42\u7684\u6839\u76EE\u5F55
# alias path;
  \u7528\u6765\u66F4\u6539location\u7684URI
  http://192.168.200.133/images/mv.png
  root /usr/local/nginx/html;
  location /images {
      alias /usr/local/nginx/html/images;
  }
# index file \u2026;
\u8BBE\u7F6E\u7F51\u7AD9\u7684\u9ED8\u8BA4\u9996\u9875
  index index.html index.htm;
# error_page
  \u8BBE\u7F6E\u7F51\u7AD9\u7684\u9519\u8BEF\u9875\u9762
  error_page code \u2026 [=[response]] uri;
  // \u6307\u5B9A404\u8DF3\u8F6C\u5730\u5740
  error_page 404 http://www.baidu.com;
  error_page 404 /50x.html;
  error_page 500 502 503 504 /50x.html;
  // \u4F7F\u7528location\u7684@\u7B26\u5408\u5B8C\u6210\u9519\u8BEF\u4FE1\u606F\u5C55\u793A
  server{
      error_page 404 @jump_to_error;
      location @jump_to_error {
          default_type text/plain;
          return 404 'Not Found Page...';
      }
  }
  // 404\u65F6\u6700\u7EC8\u8FD4\u56DE200 404\u540E\u9762\u9700\u8981\u52A0\u7A7A\u683C
  server{
    error_page 404 =200 /50x.html;
    location =/50x.html{
        root html;
    }
  }`,lang:"js"}),e.a.createElement("h4",{id:"\u7F13\u5B58\u5904\u7406"},e.a.createElement(n.AnchorLink,{to:"#\u7F13\u5B58\u5904\u7406","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7F13\u5B58\u5904\u7406"),e.a.createElement(a.a,{code:`# expires off;
\u63A7\u5236\u9875\u9762\u7F13\u5B58\u7684\u4F5C\u7528 \u63A7\u5236HTTP\u5E94\u7B54\u4E2D\u7684\u201CExpires\u201D\u548C\u201DCache-Control\u201D
expires [modified] time<br/>expires epoch|max|off;

# add_header
\u6DFB\u52A0\u6307\u5B9A\u7684\u54CD\u5E94\u5934\u548C\u54CD\u5E94\u503C
add_header name value [always];
// \u53EF\u7F13\u5B58\u4F46\u5FC5\u987B\u518D\u5411\u6E90\u670D\u52A1\u5668\u8FDB\u884C\u786E\u8BA4
Cache-control: must-revalidate
// \u7F13\u5B58\u524D\u5FC5\u987B\u786E\u8BA4\u5176\u6709\u6548\u6027
Cache-control: no-cache
// \u4E0D\u7F13\u5B58\u8BF7\u6C42\u6216\u54CD\u5E94\u7684\u4EFB\u4F55\u5185\u5BB9
Cache-control: no-store
// \u4EE3\u7406\u4E0D\u53EF\u66F4\u6539\u5A92\u4F53\u7C7B\u578B
Cache-control: no-transform
// \u53EF\u5411\u4EFB\u610F\u65B9\u63D0\u4F9B\u54CD\u5E94\u7684\u7F13\u5B58
Cache-control: public
// \u4EC5\u5411\u7279\u5B9A\u7528\u6237\u8FD4\u56DE\u54CD\u5E94
Cache-control: private
// \u8981\u6C42\u4E2D\u95F4\u7F13\u5B58\u670D\u52A1\u5668\u5BF9\u7F13\u5B58\u7684\u54CD\u5E94\u6709\u6548\u6027\u518D\u8FDB\u884C\u786E\u8BA4
Cache-control: proxy-revalidate
// \u54CD\u5E94\u6700\u5927Age\u503C
Cache-Control: max-age=<seconds>
// \u516C\u5171\u7F13\u5B58\u670D\u52A1\u5668\u54CD\u5E94\u7684\u6700\u5927Age\u503C
Cache-control: s-maxage=<seconds>`,lang:"js"}),e.a.createElement("h4",{id:"\u9759\u6001\u8D44\u6E90\u4F18\u5316"},e.a.createElement(n.AnchorLink,{to:"#\u9759\u6001\u8D44\u6E90\u4F18\u5316","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u8D44\u6E90\u4F18\u5316"),e.a.createElement(a.a,{code:`sendfile on;
tcp_nopush on;
tcp_nodelay on;

# send\uFB01le o\uFB00;
\u7528\u6765\u5F00\u542F\u9AD8\u6548\u7684\u6587\u4EF6\u4F20\u8F93\u6A21\u5F0F
send\uFB01le on |o\uFB00;
# tcp_nopush o\uFB00;
\u5FC5\u987B\u5728sendfile\u6253\u5F00\u7684\u72B6\u6001\u4E0B\u624D\u4F1A\u751F\u6548 \u63D0\u5347\u7F51\u7EDC\u5305\u7684\u4F20\u8F93\u2019\u6548\u7387\u2019
tcp_nopush on|off;
# tcp_nodelay on;
\u5FC5\u987Bkeep-alive\u8FDE\u63A5\u5F00\u542F\u60C5\u51B5\u4E0B\u624D\u751F\u6548 \u63D0\u9AD8\u7F51\u7EDC\u5305\u4F20\u8F93\u7684\u2019\u5B9E\u65F6\u6027\u2019
tcp_nodelay on|off;`,lang:"js"}),e.a.createElement("h3",{id:"\u9759\u6001\u8D44\u6E90\u9632\u76D7\u94FE"},e.a.createElement(n.AnchorLink,{to:"#\u9759\u6001\u8D44\u6E90\u9632\u76D7\u94FE","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u8D44\u6E90\u9632\u76D7\u94FE"),e.a.createElement(a.a,{code:`# valid_referers none|blocked|server_names|string\u2026
\u5934\u4FE1\u606FReferer
valid_referers:nginx\u4F1A\u901A\u5C31\u8FC7\u67E5\u770Breferer\u81EA\u52A8\u548Cvalid_referers\u540E\u9762\u7684\u5185\u5BB9\u8FDB\u884C\u5339\u914D\uFF0C\u5982\u679C\u5339\u914D\u5230\u4E86\u5C31\u5C06$invalid_referer\u53D8\u91CF\u7F6E0\uFF0C\u5982\u679C\u6CA1\u6709\u5339\u914D\u5230\uFF0C\u5219\u5C06$invalid_referer\u53D8\u91CF\u7F6E\u4E3A1\uFF0C\u5339\u914D\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u533A\u5206\u5927\u5C0F\u5199
none: \u5982\u679CHeader\u4E2D\u7684Referer\u4E3A\u7A7A\uFF0C\u5141\u8BB8\u8BBF\u95EE
blocked:\u5728Header\u4E2D\u7684Referer\u4E0D\u4E3A\u7A7A\uFF0C\u4F46\u662F\u8BE5\u503C\u88AB\u9632\u706B\u5899\u6216\u4EE3\u7406\u8FDB\u884C\u4F2A\u88C5\u8FC7\uFF0C\u5982\u4E0D\u5E26\u201Dhttp://\u201C \u3001\u201Dhttps://\u201C\u7B49\u534F\u8BAE\u5934\u7684\u8D44\u6E90\u5141\u8BB8\u8BBF\u95EE\u3002
server_names:\u6307\u5B9A\u5177\u4F53\u7684\u57DF\u540D\u6216\u8005IP
string: \u53EF\u4EE5\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u548C*\u7684\u5B57\u7B26\u4E32\u3002\u5982\u679C\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u9700\u8981\u4EE5~\u5F00\u5934\u8868\u793A

location ~*\\.(png|jpg|gif){
           valid_referers none blocked www.baidu.com 192.168.200.222 *.example.com example.*  www.example.org  ~\\.google\\.;
           if ($invalid_referer){
                return 403;
           }
           root /usr/local/nginx/html;

}

# \u9488\u5BF9\u76EE\u5F55\u8FDB\u884C\u9632\u76D7\u94FE
location /images {
           valid_referers none blocked www.baidu.com 192.168.200.222 *.example.com example.*  www.example.org  ~\\.google\\.;
           if ($invalid_referer){
                return 403;
           }
           root /usr/local/nginx/html;

}`,lang:"js"}),e.a.createElement(a.a,{code:`// \u6839\u636E\u6587\u4EF6\u7C7B\u578B\u5B9E\u73B0\u9632\u76D7\u94FE
server{
    listen 80;
    server_name www.web.com;
    locatin ~* ^.+\\.(gif|jpg|png|swf|flv|rar|zip)\${
        valid_referers none blocked server_names *.web.com;
        if ($invalid_referer){
            rewrite ^/ http://www.web.com/images/forbidden.png;
        }
    }
}
// \u6839\u636E\u76EE\u5F55\u5B9E\u73B0\u9632\u76D7\u94FE\u914D\u7F6E
server{
    listen 80;
    server_name www.web.com;
    location /file/{
        root /server/file/;
        valid_referers none blocked server_names *.web.com;
        if ($invalid_referer){
            rewrite ^/ http://www.web.com/images/forbidden.png;
        }
    }
}`,lang:"js"}),e.a.createElement("h3",{id:"buffer"},e.a.createElement(n.AnchorLink,{to:"#buffer","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"buffer"),e.a.createElement(a.a,{code:`proxy_buffering on;
proxy_buffer_size 4 32k;
proxy_busy_buffers_size 64k;
proxy_temp_file_write_size 64k;`,lang:"js"}),e.a.createElement(a.a,{code:`# proxy_buffering on;
\u5F00\u542F\u6216\u8005\u5173\u95ED\u4EE3\u7406\u670D\u52A1\u5668\u7684\u7F13\u51B2\u533A
proxy_buffering on|off;
# proxy_buffers 8 4k | 8K;
\u7528\u6765\u6307\u5B9A\u5355\u4E2A\u8FDE\u63A5\u4ECE\u4EE3\u7406\u670D\u52A1\u5668\u8BFB\u53D6\u54CD\u5E94\u7684\u7F13\u5B58\u533A\u7684\u4E2A\u6570\u548C\u5927\u5C0F
proxy_buffers number size;
# proxy_buffer_size 4k | 8k;
\u8BBE\u7F6E\u4ECE\u88AB\u4EE3\u7406\u670D\u52A1\u5668\u83B7\u53D6\u7684\u7B2C\u4E00\u90E8\u5206\u54CD\u5E94\u6570\u636E\u7684\u5927\u5C0F
proxy_buffer_size size;
# proxy_busy_buffers_size 8k|16K;
\u9650\u5236\u540C\u65F6\u5904\u4E8EBUSY\u72B6\u6001\u7684\u7F13\u51B2\u603B\u5927\u5C0F
proxy_busy_buffers_size size;
# proxy_temp_path proxy_temp;
\u5F53\u7F13\u51B2\u533A\u5B58\u6EE1\u540E\uFF0C\u4ECD\u672A\u88ABNginx\u670D\u52A1\u5668\u5B8C\u5168\u63A5\u53D7\uFF0C\u54CD\u5E94\u6570\u636E\u5C31\u4F1A\u88AB\u4E34\u65F6\u5B58\u653E\u5728\u78C1\u76D8\u6587\u4EF6\u4E0A\uFF0C\u8BE5\u6307\u4EE4\u8BBE\u7F6E\u6587\u4EF6\u8DEF\u5F84
proxy_temp_path path;
# proxy_temp_file_write_size 8K|16K;
\u8BBE\u7F6E\u78C1\u76D8\u4E0A\u7F13\u51B2\u6587\u4EF6\u7684\u5927\u5C0F
proxy_temp_file_write_size size;`,lang:"js"}),e.a.createElement("h3",{id:"\u8D1F\u8F7D\u5747\u8861"},e.a.createElement(n.AnchorLink,{to:"#\u8D1F\u8F7D\u5747\u8861","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8D1F\u8F7D\u5747\u8861"),e.a.createElement(a.a,{code:`#
upstream name {
  server 192.168.200.146:9091 down;
}
down	\u5F53\u524D\u7684server\u4E0D\u53C2\u4E0E\u8D1F\u8F7D\u5747\u8861
backup	\u9884\u7559\u7684\u5907\u4EFD\u670D\u52A1\u5668 \u4E3B\u670D\u52A1\u5668\u4E0D\u53EF\u7528\u65F6\u542F\u7528
max_fails	\u5141\u8BB8\u8BF7\u6C42\u5931\u8D25\u7684\u6B21\u6570 \u9ED8\u8BA4\u4E3A1
fail_timeout	\u7ECF\u8FC7max_fails\u5931\u8D25\u540E, \u670D\u52A1\u6682\u505C\u65F6\u95F4\u9ED8\u8BA4\u662F10\u79D2
max_conns	\u9650\u5236\u6700\u5927\u7684\u63A5\u6536\u8FDE\u63A5\u6570
#
\u8F6E\u8BE2	\u9ED8\u8BA4\u65B9\u5F0F
// weight=number \u6743\u91CD\u6570\u636E\u8D8A\u5927\uFF0C\u88AB\u5206\u914D\u5230\u8BF7\u6C42\u7684\u51E0\u7387\u8D8A\u5927
weight	\u6743\u91CD\u65B9\u5F0F
ip_hash	\u4F9D\u636Eip\u5206\u914D\u65B9\u5F0F
// \u628A\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u8FDE\u63A5\u6570\u8F83\u5C11\u7684\u540E\u7AEF\u670D\u52A1\u5668
least_conn	\u4F9D\u636E\u6700\u5C11\u8FDE\u63A5\u65B9\u5F0F
// \u4F7F\u6BCF\u4E2Aurl\u5B9A\u5411\u5230\u540C\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668
url_hash	\u4F9D\u636EURL\u5206\u914D\u65B9\u5F0F
// \u6839\u636E\u9875\u9762\u5927\u5C0F\u3001\u52A0\u8F7D\u65F6\u95F4\u957F\u77ED\u667A\u80FD\u7684\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861
fair	\u4F9D\u636E\u54CD\u5E94\u65F6\u95F4\u65B9
upstream backend{
    ip_hash;
    least_conn;
    hash &request_uri;
    fair;
    server 192.168.200.146:9001 weight=1;
}`,lang:"js"}),e.a.createElement("h3",{id:"\u7F13\u5B58\u96C6\u6210"},e.a.createElement(n.AnchorLink,{to:"#\u7F13\u5B58\u96C6\u6210","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7F13\u5B58\u96C6\u6210"),e.a.createElement(a.a,{code:`http{
    proxy_cache_path /usr/local/proxy_cache levels=2:1 keys_zone=itcast:200m inactive=1d max_size=20g;
    upstream backend{
        server 192.168.200.146:8080;
    }
    server {
        listen       8080;
        server_name  localhost;
        location / {
            proxy_cache itcast;
            proxy_cache_key itheima;
            proxy_cache_min_uses 5;
            proxy_cache_valid 200 5d;
            proxy_cache_valid 404 30s;
            proxy_cache_valid any 1m;
            add_header nginx-cache "$upstream_cache_status";
            proxy_pass http://backend/js/;
        }
    }
}

// \u4E0D\u7F13\u5B58\u8D44\u6E90\u7684\u914D\u7F6E\u65B9\u6848
server{
    listen    8080;
    server_name localhost;
    location / {
        if ($request_uri ~ /.*\\.js$){
           set $nocache 1;
        }
        proxy_no_cache $nocache $cookie_nocache $arg_nocache $arg_comment;
        proxy_cache_bypass $nocache $cookie_nocache $arg_nocache $arg_comment;
    }
}`,lang:"js"}),e.a.createElement(a.a,{code:`# proxy_cache_path
proxy_cache_path path [levels=number] <br/>keys_zone=zone_name:zone_size [inactive=time][max_size=size];
// path:\u7F13\u5B58\u8DEF\u5F84\u5730\u5740
/usr/local/proxy_cache
// levels: \u6307\u5B9A\u8BE5\u7F13\u5B58\u7A7A\u95F4\u5BF9\u5E94\u7684\u76EE\u5F55\uFF0C\u6700\u591A\u53EF\u4EE5\u8BBE\u7F6E3\u5C42\uFF0C\u6BCF\u5C42\u53D6\u503C\u4E3A1|2\u5982
levels=1:2   \u7F13\u5B58\u7A7A\u95F4\u6709\u4E24\u5C42\u76EE\u5F55\uFF0C\u7B2C\u4E00\u6B21\u662F1\u4E2A\u5B57\u6BCD\uFF0C\u7B2C\u4E8C\u6B21\u662F2\u4E2A\u5B57\u6BCD
levels=2:2:2 \u6700\u7EC8\u7684\u5B58\u50A8\u8DEF\u5F84\u4E3A??/usr/local/proxy_cache/7d/10/e2
// keys_zone:\u7528\u6765\u4E3A\u8FD9\u4E2A\u7F13\u5B58\u533A\u8BBE\u7F6E\u540D\u79F0\u548C\u6307\u5B9A\u5927\u5C0F
keys_zone=itcast:200m  \u7F13\u5B58\u533A\u7684\u540D\u79F0\u662Fitcast,\u5927\u5C0F\u4E3A200M,1M\u5927\u6982\u80FD\u5B58\u50A88000\u4E2Akeys
// inactive:\u6307\u5B9A\u7F13\u5B58\u7684\u6570\u636E\u591A\u6B21\u65F6\u95F4\u672A\u88AB\u8BBF\u95EE\u5C31\u5C06\u88AB\u5220\u9664
inactive=1d   \u7F13\u5B58\u6570\u636E\u57281\u5929\u5185\u6CA1\u6709\u88AB\u8BBF\u95EE\u5C31\u4F1A\u88AB\u5220\u9664
// max_size \u8BBE\u7F6E\u6700\u5927\u7F13\u5B58\u7A7A\u95F4 \u5982\u679C\u7F13\u5B58\u7A7A\u95F4\u5B58\u6EE1\uFF0C\u9ED8\u8BA4\u4F1A\u8986\u76D6\u7F13\u5B58\u65F6\u95F4\u6700\u957F\u7684\u8D44\u6E90
max_size=20g
http{
    proxy_cache_path /usr/local/proxy_cache keys_zone=itcast:200m  levels=1:2:1 inactive=1d max_size=20g;
}

# proxy_cache off;
\u5F00\u542F\u6216\u5173\u95ED\u4EE3\u7406\u7F13\u5B58
proxy_cache zone_name|off; // \u6307\u5B9A\u4F7F\u7528\u7F13\u5B58\u533A\u7684\u540D\u79F0
# proxy_cache_key \u{1D460}\u{1D450}\u210E\u{1D452}\u{1D45A}\u{1D452}$\u{1D45D}\u{1D45F}\u{1D45C}\u{1D465}\u{1D466}\u210E\u{1D45C}\u{1D460}\u{1D461}request_uri;
\u8BBE\u7F6Eweb\u7F13\u5B58\u7684key\u503C\uFF0CNginx\u4F1A\u6839\u636Ekey\u503CMD5\u54C8\u5E0C\u5B58\u7F13\u5B58
# proxy_cache_valid
\u5BF9\u4E0D\u540C\u8FD4\u56DE\u72B6\u6001\u7801\u7684URL\u8BBE\u7F6E\u4E0D\u540C\u7684\u7F13\u5B58\u65F6\u95F4
proxy_cache_valid [code \u2026] time;

proxy_cache_valid 200 302 10m;
proxy_cache_valid 404 1m;
\u4E3A200\u548C302\u7684\u54CD\u5E94URL\u8BBE\u7F6E10\u5206\u949F\u7F13\u5B58\uFF0C\u4E3A404\u7684\u54CD\u5E94URL\u8BBE\u7F6E1\u5206\u949F\u7F13\u5B58
proxy_cache_valid any 1m;
\u5BF9\u6240\u6709\u54CD\u5E94\u72B6\u6001\u7801\u7684URL\u90FD\u8BBE\u7F6E1\u5206\u949F\u7F13\u5B58

# proxy_cache_min_uses 1;
\u7F6E\u8D44\u6E90\u88AB\u8BBF\u95EE\u591A\u5C11\u6B21\u540E\u88AB\u7F13\u5B58
proxy_cache_min_uses number;

# proxy_cache_methods GET HEAD;
\u8BBE\u7F6E\u7F13\u5B58\u54EA\u4E9BHTTP\u65B9\u6CD5
proxy_cache_methods GET|HEAD|POST;

# proxy_no_cache
proxy_no_cache string \u2026;
proxy_no_cache $cookie_nocache $arg_nocache $arg_comment;
# proxy_cache_bypass
\u8BBE\u7F6E\u4E0D\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u6570\u636E\u7684\u6761\u4EF6
proxy_cache_bypass $cookie_nocache $arg_nocache $arg_comment;
// $cookie_nocache
\u6307\u7684\u662F\u5F53\u524D\u8BF7\u6C42\u7684cookie\u4E2D\u952E\u7684\u540D\u79F0\u4E3Anocache\u5BF9\u5E94\u7684\u503C
// $arg_nocache\u548C$arg_comment
\u6307\u7684\u662F\u5F53\u524D\u8BF7\u6C42\u7684\u53C2\u6570\u4E2D\u5C5E\u6027\u540D\u4E3Anocache\u548Ccomment\u5BF9\u5E94\u7684\u5C5E\u6027\u503C`,lang:"js"}),e.a.createElement("h2",{id:"2\u57FA\u672C\u914D\u7F6E"},e.a.createElement(n.AnchorLink,{to:"#2\u57FA\u672C\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"2.\u57FA\u672C\u914D\u7F6E"),e.a.createElement("h3",{id:"\u53CD\u5411\u4EE3\u7406-1"},e.a.createElement(n.AnchorLink,{to:"#\u53CD\u5411\u4EE3\u7406-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53CD\u5411\u4EE3\u7406"),e.a.createElement(a.a,{code:`listen 80
http:{
  server:{
    listen  80;
    server_name localhost;
    location /dpm/ {
        proxy_pass http://\u8D1F\u8F7D\u5747\u8861\u81EA\u5B9A\u4E49\u540D\u5B57;
    }
  }
}`,lang:"js"}),e.a.createElement("h3",{id:"\u8D1F\u8F7D\u5747\u8861-1"},e.a.createElement(n.AnchorLink,{to:"#\u8D1F\u8F7D\u5747\u8861-1","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8D1F\u8F7D\u5747\u8861"),e.a.createElement(a.a,{code:`\u5206\u914D\u670D\u52A1\u5668\u8D44\u6E90
\u8F6E\u8BE2
\u52A0\u6743\u8F6E\u8BE2
http:{
  upstream \u81EA\u5B9A\u4E49\u540D\u5B57{  // weight \u662F\u6743\u91CD \u8F6E\u8BE2\u4EA4\u66FF\u6267\u884C
    server 10.20.0.47:8081 weight=1;
    server 10.20.0.48:8081 weight=1;
  }
}`,lang:"js"}),e.a.createElement("h3",{id:"session-\u5171\u4EAB"},e.a.createElement(n.AnchorLink,{to:"#session-\u5171\u4EAB","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"session \u5171\u4EAB"),e.a.createElement(a.a,{code:`\u5BF9ip \u8FDB\u884C hash\u64CD\u4F5C
\u6839\u636Ehash\u7ED3\u679C\u5C06 \u540C\u4E00\u5BA2\u6237\u7AEFip\u8BF7\u6C42\u5206\u53D1\u7ED9\u540C\u4E00\u53F0\u670D\u52A1\u5668\u5904\u7406
\u89E3\u51B3session\u5171\u4EAB\u95EE\u9898`,lang:"js"}),e.a.createElement("h3",{id:"\u52A8\u9759\u5206\u79BB"},e.a.createElement(n.AnchorLink,{to:"#\u52A8\u9759\u5206\u79BB","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u52A8\u9759\u5206\u79BB"),e.a.createElement(a.a,{code:`\u9759\u6001\u8D44\u6E90 \u76F4\u63A5\u4ECEnginx\u8FD4\u56DE
\u4E0D\u7528\u8BF7\u6C42\u670D\u52A1\u5668
upstream webservice{
   server 192.168.200.146:8080;
}
server {
        listen       80;
        server_name  localhost;

        #\u52A8\u6001\u8D44\u6E90
        location /demo {
                proxy_pass http://webservice;
        }
        #\u9759\u6001\u8D44\u6E90
        location ~/.*\\.(png|jpg|gif|js){
                root html/web;
                gzip on;
        }

        location / {
            root   html/web;
            index  index.html index.htm;
        }
}`,lang:"js"}),e.a.createElement("h3",{id:"nginxconf"},e.a.createElement(n.AnchorLink,{to:"#nginxconf","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Nginx.conf"),e.a.createElement(a.a,{code:`\u5168\u5C40\u914D\u7F6E
events {
  \u6700\u5927\u8FDE\u63A5\u6570 \u76D1\u542C\u7684\u4E8B\u4EF6
}
http:{
  http \u5168\u5C40\u914D\u7F6E

  upstream xx{
    \u8D1F\u8F7D\u5747\u8861\u914D\u7F6E
  }

  server {
    listen 80;
    \u53CD\u5411\u4EE3\u7406
  }

  HTTPS server // https \u7684\u7AEF\u53E3 443

}`,lang:"js"}))));i.default=r=>{const l=e.a.useContext(n.context),u=l.demos;return e.a.useEffect(()=>{var o;r!=null&&(o=r.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e.a.createElement(s,{demos:u})}}}]);

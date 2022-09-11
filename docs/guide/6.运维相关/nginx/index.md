---
order: 6
nav:
  title: 前端之路
  path: /guide
---

# Nginx

## 1.准备阶段

```js
localhost:8080
/usr/local/etc/nginx/nginx.conf

 nginx  // 启动
 nginx -s stop // sudo nginx -s quit  停止
 nginx -s quit // 安全退出
 nginx -s reload // 重新加载配置文件
 ps aux|grep nginx // 查看gninx进程

 nginx > conf > nginx.conf
```

```js
# 全局块
主要设置Nginx服务器整体运行的配置指令

# event
主要设置,Nginx服务器与用户的网络连接,这一部分对Nginx服务器的性能影响较大

# http
代理、缓存、日志记录、第三方模块配置...
```

### 全局块

```js
# 添加一个用户和用户组
user www;
# 创建一个用户
useradd www
# 修改user属性
user www

# work process
  ## master_process on; 用来指定是否开启工作进程。
  master_process on|off;
  ## worker_processes: 1;
   用于配置Nginx生成工作进程的数量 并发数量
   建议和服务器cpu内核数保持一致
   worker_processes num/auto;
  ## daemon on;
   设置nginx是否以守护进程的方式启动 终端关了后台还开着
   daemon on|off;
  ## pid: /usr/local/nginx/logs/nginx.pid;
   用来配置Nginx当前master进程的进程号ID存储的文件路径
   pid file;
   可以通过./configure --pid-path=PATH来指定
  ## error_log logs/error.log error;
    配置Nginx的错误日志存放路径
  ## include:
    用来引入其他配置文件，使Nginx的配置更加灵活
```

### event

```js
# accept_mutex on;
  用来设置Nginx网络连接序列化
  解决惊群问题 off:同时唤醒多个worker进程 只有一个进程可以获取到连接
             on: 进行排序 一个一个唤醒
  accept_mutex on|off;
# multi_accept off;
  用来设置是否允许同时接收多个网络连接
  multi_accept on|off;
  默认一个工作进程只能同时接受一个新的连接
# worker_commections 512;
  配置单个worker进程最大的连接数。所有可能的连接数
  worker_connections number;
# use: epoll;
  用来设置Nginx服务器选择哪种事件驱动来处理网络消息
  use method;  (select/poll/epoll/kqueue)

```

### http

#### base

```js
include mime.types;
# default_type text/plain；
  定义MIME-Type
  default_type mime-type;
  ## 定义一个简单的接口
  location /get_json{
    default_type application/json;
    return 200 '{"name":"TOM","age":18}';
  }
# access_log logs/access.log combined;
用来记录用户所有的访问请求
access_log path[format[buffer=size]]
# log_format combined “…”;
用来指定日志的输出格式
log_format name [escape=default|json|none] string….;
# sendfile off;
用来设置Nginx服务器是否使用sendfile()传输文件，该属性可以大大提高Nginx处理静态资源的性能
sendfile on|off；
# keepalive_timeout 75s;
用来设置长连接的超时时间
keepalive_timeout time;
# keepalive_requests 100;
用来设置一个keep-alive连接使用的次数
keepalive_requests number;
```

#### 静态资源压缩

##### base

```js
http{
   gzip on;                #开启gzip功能
  gzip_types *;          #压缩源文件类型,根据具体的访问资源类型设定
  gzip_comp_level 6;      #gzip压缩级别
  gzip_min_length 1024; #进行压缩响应页面的最小长度,content-length
  gzip_buffers 4 16K;      #缓存空间大小
  gzip_http_version 1.1; #指定压缩响应所需要的最低HTTP请求版本
  gzip_vary  on;          #往头信息中添加压缩标识
  gzip_disable "MSIE [1-6]\."; #对IE6以下的版本都不进行压缩
gzip_proxied  off； #nginx作为反向代理压缩服务端返回数据的条件
}
```

##### 指令

```js
# gzip off;
指令用于开启或者关闭gzip功能

# gzip_types text/html;
根据响应页的MIME类型选择性地开启Gzip压缩功能 *代表所有
gzip_types mime-type …;
http{
    gzip_types application/javascript;
}

# gzip_comp_level 1;
设置Gzip压缩程度 级别1-9 9是压缩程度最高 最耗时间
http{
    gzip_comp_level 6;
}

# gzip_vary off;
设置使用Gzip进行压缩发送是否携带“Vary:Accept-Encoding”头域的响应头部 告诉接收方使用了gzip压缩
gzip_vary on|off;

# gzip_buffers 32 4k|16 8k;
处理请求压缩的缓冲区数量和大小
gzip_buffers number size;
number:指定Nginx服务器向系统申请缓存空间个数
size: 每个缓存空间的大小
申请number个每个大小为size的内存空间
gzip_buffers 4 16K;      #缓存空间大小

# gzip_disable
gzip_disable regex …;
针对不同种类客户端发起的请求，可以选择性地开启和关闭Gzip功能
根据 user-agent 设置 可用正则 用来排除不支持gzip的浏览器
gzip_disable "MSIE [1-6]\.";

# gzip_http_version 1.1;
针对不同的HTTP协议版本，可以选择性地开启和关闭Gzip功能
指定使用Gzip的HTTP最低版本

# gzip_min_length 20;
指令针对传输数据的大小，可以选择性地开启和关闭Gzip功能
nignx计量大小的单位：bytes[字节] / kb[千字节] / M[兆]
例如: 1024 / 10k|K / 10m|M

# gzip_proxied off;
是否对服务端返回的结果进行Gzip压缩
gzip_proxied off|expired|no-cache|<br/>no-store|private|no_last_modified|no_etag|auth|any;
off - 关闭Nginx服务器对后台服务器返回结果的Gzip压缩
expired - 启用压缩，如果header头中包含 “Expires” 头信息
no-cache - 启用压缩，如果header头中包含 “Cache-Control:no-cache” 头信息
no-store - 启用压缩，如果header头中包含 “Cache-Control:no-store” 头信息
private - 启用压缩，如果header头中包含 “Cache-Control:private” 头信息
no_last_modified - 启用压缩,如果header头中不包含 “Last-Modified” 头信息
no_etag - 启用压缩 ,如果header头中不包含 “ETag” 头信息
auth - 启用压缩 , 如果header头中包含 “Authorization” 头信息
any - 无条件启用压缩

# gzip_static off;
检查与访问资源同名的.gz文件时，response中以gzip相关的header返回.gz文件的内容
gzip_static on | off | always;
```

##### 跨域

```js
location /getUser{
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE;
}
```

### server

#### base

```js
server{
        #配置监听端口和主机名称
        listen 8081;
        server_name localhost;
        #配置请求处理日志存放路径
        access_log /home/www/myweb/server1/logs/access.log server1;
        #配置错误页面
        error_page 404 /404.html;
        #配置处理/server1/location1请求的location
        location /server1/location1{
            root /home/www/myweb;
            index index_sr1_location1.html;
        }
        #配置错误页面转向
        location = /404.html {
            root /home/www/myweb;
            index 404.html;
        }
}
```

#### 静态资源部署

```js
# listen *:80 | *:8000
listen address[:port] [default_server]…;<br/>listen port [default_server]…;

// listen localhost:8000 监听指定的IP和端口
listen 127.0.0.1:8000;
listen 127.0.0.1;    监听指定IP的所有端口
listen 8000;    监听指定端口上的连接
listen *:8000;    监听指定端口上的连接
// default_server; 指如果不指定默认的就指向第一个定义的server端口
listen 8080 default_server;

# server_name: '';
用来设置虚拟主机服务名称
127.0.0.1 localhost www.baidu.com
  ## 精确匹配
  server_name www.baidu.com;
  ## 通配符配置
  通配符不能出现在域名的中间 只能出现在首段或尾段
  *.baidu.com www.baidu.*
  ## 正则表达式配置
  server_name ~^www\.(\w+)\.com$;
```

#### location

##### base

```js
server{
    listen 80;
    server_name localhost;
    location / {

    }
    location /abc{

    }
    ...
}

```

##### 反向代理

```js
# location [ = | ~ | * | ^ |@ ] uri{…}
  ## /
  location /abc { ... }
  http://192.168.200.133/abc
  http://192.168.200.133/abc?p1=TOM
  http://192.168.200.133/abc/
  http://192.168.200.133/abcdef
  ## = 精确匹配
  location =/abc {...}
  http://192.168.200.133/abc
  http://192.168.200.133/abc?p1=TOM
  ## ~ 用于表示当前uri中包含了正则表达式，并且区分大小写
  ## ~* 用于表示当前uri中包含了正则表达式，并且不区分大小写
  location ~^/abc\w$
  location ~*^/abc\w$
  ## ^~ 功能和不加符号的一致 如果模式匹配 就停止搜索其他模式
  ^~/abc

# proxy_pass URL;
设置被代理服务器地址
proxy_pass http://192.168.200.146;
proxy_pass http://www.baidu.com;
# proxy_set_header
proxy_set_header Host $proxy_host;<br/>proxy_set_header Connection close;
将新的请求头发送给代理的服务器
被代理服务器： [192.168.200.146]
server {
        listen  8080;
        server_name localhost;
        default_type text/plain;
        return 200 $http_username;
}
代理服务器: [192.168.200.133]
server {
        listen  8080;
        server_name localhost;
        location /server {
                proxy_pass http://192.168.200.146:8080/;
                proxy_set_header username TOM;
        }
    }
# proxy_redirect
重置头信息中的”Location”和”Refresh”的值。
```

##### Rewrite

```js
server {
    listen 80;
    server_name www.360buy.com;
    rewrite ^/ http://www.jd.com permanent;
}
// 携带请求的URI
server {
    listen 80;
    server_name www.baidu.com;
    rewrite ^(.*) http://www.xx.com$1 permanent;
}


# 常用全局变量
// 查询参数
$http_user_agent
// 当前访问地址的URI pathname
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
设置一个新的变量
set $variable value;
# if
  // 空或者是0:false 其他都是true
  if ($param){

  }
  // = !=
  if ($request_method = POST){
    return 405;
  }
  // 正则 ~:区分大小写 ~*:不区分大小写
if ($http_user_agent ~ MSIE){
    #$http_user_agent的值中是否包含MSIE字符串，如果包含返回true
}
   // 判断请求的文件是否存在使用”-f”和”!-f”,
当使用”-f”时，如果请求的文件存在返回true，不存在返回false。
当使用”!f”时，如果请求文件不存在，但该文件所在目录存在返回true,文件和目录都不存在返回false,如果文件存在返回false

if (-f $request_filename){
    #判断请求的文件是否存在
}
if (!-f $request_filename){
    #判断请求的文件是否不存在
}
  // 判断请求的目录是否存在使用”-d”和”!-d”,
  // 判断请求的目录或者文件是否存在使用”-e”和”!-e”
  // 判断请求的文件是否可执行使用”-x”和”!-x”
# break
location /{
    if ($param){
        set $id $1;
        break;
        limit_rate 10k;
    }
}
# return

```

##### 域名镜像

```js
server {
    listen 80;
    server_name rewrite.myweb.com;
    location ^~ /source1{
        rewrite ^/resource1(.*) http://rewrite.myweb.com/web$1 last;
    }
    location ^~ /source2{
        rewrite ^/resource2(.*) http://rewrite.myweb.com/web$1 last;
    }
}
```

##### 其他

```js
# root html;
  设置请求的根目录
# alias path;
  用来更改location的URI
  http://192.168.200.133/images/mv.png
  root /usr/local/nginx/html;
  location /images {
      alias /usr/local/nginx/html/images;
  }
# index file …;
设置网站的默认首页
  index index.html index.htm;
# error_page
  设置网站的错误页面
  error_page code … [=[response]] uri;
  // 指定404跳转地址
  error_page 404 http://www.baidu.com;
  error_page 404 /50x.html;
  error_page 500 502 503 504 /50x.html;
  // 使用location的@符合完成错误信息展示
  server{
      error_page 404 @jump_to_error;
      location @jump_to_error {
          default_type text/plain;
          return 404 'Not Found Page...';
      }
  }
  // 404时最终返回200 404后面需要加空格
  server{
    error_page 404 =200 /50x.html;
    location =/50x.html{
        root html;
    }
  }
```

#### 缓存处理

```js
# expires off;
控制页面缓存的作用 控制HTTP应答中的“Expires”和”Cache-Control”
expires [modified] time<br/>expires epoch|max|off;

# add_header
添加指定的响应头和响应值
add_header name value [always];
// 可缓存但必须再向源服务器进行确认
Cache-control: must-revalidate
// 缓存前必须确认其有效性
Cache-control: no-cache
// 不缓存请求或响应的任何内容
Cache-control: no-store
// 代理不可更改媒体类型
Cache-control: no-transform
// 可向任意方提供响应的缓存
Cache-control: public
// 仅向特定用户返回响应
Cache-control: private
// 要求中间缓存服务器对缓存的响应有效性再进行确认
Cache-control: proxy-revalidate
// 响应最大Age值
Cache-Control: max-age=<seconds>
// 公共缓存服务器响应的最大Age值
Cache-control: s-maxage=<seconds>
```

#### 静态资源优化

```js
sendfile on;
tcp_nopush on;
tcp_nodelay on;

# sendﬁle oﬀ;
用来开启高效的文件传输模式
sendﬁle on |oﬀ;
# tcp_nopush oﬀ;
必须在sendfile打开的状态下才会生效 提升网络包的传输’效率’
tcp_nopush on|off;
# tcp_nodelay on;
必须keep-alive连接开启情况下才生效 提高网络包传输的’实时性’
tcp_nodelay on|off;
```

### 静态资源防盗链

```js
# valid_referers none|blocked|server_names|string…
头信息Referer
valid_referers:nginx会通就过查看referer自动和valid_referers后面的内容进行匹配，如果匹配到了就将$invalid_referer变量置0，如果没有匹配到，则将$invalid_referer变量置为1，匹配的过程中不区分大小写
none: 如果Header中的Referer为空，允许访问
blocked:在Header中的Referer不为空，但是该值被防火墙或代理进行伪装过，如不带”http://“ 、”https://“等协议头的资源允许访问。
server_names:指定具体的域名或者IP
string: 可以支持正则表达式和*的字符串。如果是正则表达式，需要以~开头表示

location ~*\.(png|jpg|gif){
           valid_referers none blocked www.baidu.com 192.168.200.222 *.example.com example.*  www.example.org  ~\.google\.;
           if ($invalid_referer){
                return 403;
           }
           root /usr/local/nginx/html;

}

# 针对目录进行防盗链
location /images {
           valid_referers none blocked www.baidu.com 192.168.200.222 *.example.com example.*  www.example.org  ~\.google\.;
           if ($invalid_referer){
                return 403;
           }
           root /usr/local/nginx/html;

}
```

```js
// 根据文件类型实现防盗链
server{
    listen 80;
    server_name www.web.com;
    locatin ~* ^.+\.(gif|jpg|png|swf|flv|rar|zip)${
        valid_referers none blocked server_names *.web.com;
        if ($invalid_referer){
            rewrite ^/ http://www.web.com/images/forbidden.png;
        }
    }
}
// 根据目录实现防盗链配置
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
}
```

### buffer

```js
proxy_buffering on;
proxy_buffer_size 4 32k;
proxy_busy_buffers_size 64k;
proxy_temp_file_write_size 64k;
```

```js
# proxy_buffering on;
开启或者关闭代理服务器的缓冲区
proxy_buffering on|off;
# proxy_buffers 8 4k | 8K;
用来指定单个连接从代理服务器读取响应的缓存区的个数和大小
proxy_buffers number size;
# proxy_buffer_size 4k | 8k;
设置从被代理服务器获取的第一部分响应数据的大小
proxy_buffer_size size;
# proxy_busy_buffers_size 8k|16K;
限制同时处于BUSY状态的缓冲总大小
proxy_busy_buffers_size size;
# proxy_temp_path proxy_temp;
当缓冲区存满后，仍未被Nginx服务器完全接受，响应数据就会被临时存放在磁盘文件上，该指令设置文件路径
proxy_temp_path path;
# proxy_temp_file_write_size 8K|16K;
设置磁盘上缓冲文件的大小
proxy_temp_file_write_size size;
```

### 负载均衡

```js
#
upstream name {
  server 192.168.200.146:9091 down;
}
down	当前的server不参与负载均衡
backup	预留的备份服务器 主服务器不可用时启用
max_fails	允许请求失败的次数 默认为1
fail_timeout	经过max_fails失败后, 服务暂停时间默认是10秒
max_conns	限制最大的接收连接数
#
轮询	默认方式
// weight=number 权重数据越大，被分配到请求的几率越大
weight	权重方式
ip_hash	依据ip分配方式
// 把请求转发给连接数较少的后端服务器
least_conn	依据最少连接方式
// 使每个url定向到同一个后端服务器
url_hash	依据URL分配方式
// 根据页面大小、加载时间长短智能的进行负载均衡
fair	依据响应时间方
upstream backend{
    ip_hash;
    least_conn;
    hash &request_uri;
    fair;
    server 192.168.200.146:9001 weight=1;
}
```

### 缓存集成

```js
http{
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

// 不缓存资源的配置方案
server{
    listen    8080;
    server_name localhost;
    location / {
        if ($request_uri ~ /.*\.js$){
           set $nocache 1;
        }
        proxy_no_cache $nocache $cookie_nocache $arg_nocache $arg_comment;
        proxy_cache_bypass $nocache $cookie_nocache $arg_nocache $arg_comment;
    }
}
```

```js
# proxy_cache_path
proxy_cache_path path [levels=number] <br/>keys_zone=zone_name:zone_size [inactive=time][max_size=size];
// path:缓存路径地址
/usr/local/proxy_cache
// levels: 指定该缓存空间对应的目录，最多可以设置3层，每层取值为1|2如
levels=1:2   缓存空间有两层目录，第一次是1个字母，第二次是2个字母
levels=2:2:2 最终的存储路径为??/usr/local/proxy_cache/7d/10/e2
// keys_zone:用来为这个缓存区设置名称和指定大小
keys_zone=itcast:200m  缓存区的名称是itcast,大小为200M,1M大概能存储8000个keys
// inactive:指定缓存的数据多次时间未被访问就将被删除
inactive=1d   缓存数据在1天内没有被访问就会被删除
// max_size 设置最大缓存空间 如果缓存空间存满，默认会覆盖缓存时间最长的资源
max_size=20g
http{
    proxy_cache_path /usr/local/proxy_cache keys_zone=itcast:200m  levels=1:2:1 inactive=1d max_size=20g;
}

# proxy_cache off;
开启或关闭代理缓存
proxy_cache zone_name|off; // 指定使用缓存区的名称
# proxy_cache_key 𝑠𝑐ℎ𝑒𝑚𝑒$𝑝𝑟𝑜𝑥𝑦ℎ𝑜𝑠𝑡request_uri;
设置web缓存的key值，Nginx会根据key值MD5哈希存缓存
# proxy_cache_valid
对不同返回状态码的URL设置不同的缓存时间
proxy_cache_valid [code …] time;

proxy_cache_valid 200 302 10m;
proxy_cache_valid 404 1m;
为200和302的响应URL设置10分钟缓存，为404的响应URL设置1分钟缓存
proxy_cache_valid any 1m;
对所有响应状态码的URL都设置1分钟缓存

# proxy_cache_min_uses 1;
置资源被访问多少次后被缓存
proxy_cache_min_uses number;

# proxy_cache_methods GET HEAD;
设置缓存哪些HTTP方法
proxy_cache_methods GET|HEAD|POST;

# proxy_no_cache
proxy_no_cache string …;
proxy_no_cache $cookie_nocache $arg_nocache $arg_comment;
# proxy_cache_bypass
设置不从缓存中获取数据的条件
proxy_cache_bypass $cookie_nocache $arg_nocache $arg_comment;
// $cookie_nocache
指的是当前请求的cookie中键的名称为nocache对应的值
// $arg_nocache和$arg_comment
指的是当前请求的参数中属性名为nocache和comment对应的属性值
```

## 2.基本配置

### 反向代理

```js
listen 80
http:{
  server:{
    listen  80;
    server_name localhost;
    location /dpm/ {
        proxy_pass http://负载均衡自定义名字;
    }
  }
}
```

### 负载均衡

```js
分配服务器资源
轮询
加权轮询
http:{
  upstream 自定义名字{  // weight 是权重 轮询交替执行
    server 10.20.0.47:8081 weight=1;
    server 10.20.0.48:8081 weight=1;
  }
}
```

### session 共享

```js
对ip 进行 hash操作
根据hash结果将 同一客户端ip请求分发给同一台服务器处理
解决session共享问题
```

### 动静分离

```js
静态资源 直接从nginx返回
不用请求服务器
upstream webservice{
   server 192.168.200.146:8080;
}
server {
        listen       80;
        server_name  localhost;

        #动态资源
        location /demo {
                proxy_pass http://webservice;
        }
        #静态资源
        location ~/.*\.(png|jpg|gif|js){
                root html/web;
                gzip on;
        }

        location / {
            root   html/web;
            index  index.html index.htm;
        }
}

```

### Nginx.conf

```js
全局配置
events {
  最大连接数 监听的事件
}
http:{
  http 全局配置

  upstream xx{
    负载均衡配置
  }

  server {
    listen 80;
    反向代理
  }

  HTTPS server // https 的端口 443

}
```

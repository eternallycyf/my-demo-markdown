var k=(C,N,e)=>new Promise((E,n)=>{var h=D=>{try{u(e.next(D))}catch(j){n(j)}},y=D=>{try{u(e.throw(D))}catch(j){n(j)}},u=D=>D.done?E(D.value):Promise.resolve(D.value).then(h,y);u((e=e.apply(C,N)).next())});(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{"0Owb":function(C,N,e){"use strict";e.d(N,"a",function(){return E});function E(){return E=Object.assign?Object.assign.bind():function(n){for(var h=1;h<arguments.length;h++){var y=arguments[h];for(var u in y)Object.prototype.hasOwnProperty.call(y,u)&&(n[u]=y[u])}return n},E.apply(this,arguments)}},"3Bus":function(C,N,e){},"3PQu":function(C,N,e){var E=e("z01/").default;function n(y){if(typeof WeakMap!="function")return null;var u=new WeakMap,D=new WeakMap;return(n=function(U){return U?D:u})(y)}function h(y,u){if(!u&&y&&y.__esModule)return y;if(y===null||E(y)!=="object"&&typeof y!="function")return{default:y};var D=n(u);if(D&&D.has(y))return D.get(y);var j={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in y)if(K!=="default"&&Object.prototype.hasOwnProperty.call(y,K)){var Y=U?Object.getOwnPropertyDescriptor(y,K):null;Y&&(Y.get||Y.set)?Object.defineProperty(j,K,Y):j[K]=y[K]}return j.default=y,D&&D.set(y,j),j}C.exports=h,C.exports.__esModule=!0,C.exports.default=C.exports},"5zXw":function(C,N,e){"use strict";e.r(N);var E=e("cDcd"),n=e.n(E),h=e("dEAq"),y=e("9kvl"),u=e("ptyZ"),D=function(a){var t=a.location,l=Object(E.useContext)(h.context),d=l.base,c=l.locale,p=l.config.locales,v=p.find(function(Q){var S=Q.name;return S!==c});function w(Q){var S=d.replace("/".concat(c),""),m=t.pathname.replace(new RegExp("^".concat(d,"(/|$)")),"".concat(S,"$1"))||"/";if(Q!==p[0].name){var W="".concat(S,"/").concat(Q).replace(/\/\//,"/"),R=t.pathname.replace(d.replace(/^\/$/,"//"),"");return"".concat(W).concat(R).replace(/\/$/,"")}return m}return v?n.a.createElement("div",{className:"__dumi-default-locale-select","data-locale-count":p.length},p.length>2?n.a.createElement("select",{value:c,onChange:function(S){return y.a.push(w(S.target.value))}},p.map(function(Q){return n.a.createElement("option",{value:Q.name,key:Q.name},Q.label)})):n.a.createElement(h.Link,{to:w(v.name)},v.label)):null},j=D,U=e("7wuY"),K=function(a){var t=a.onMobileMenuClick,l=a.navPrefix,d=a.location,c=a.darkPrefix,p=Object(E.useContext)(h.context),v=p.base,w=p.config,Q=w.mode,S=w.title,m=w.logo,W=p.nav;return n.a.createElement("div",{className:"__dumi-default-navbar","data-mode":Q},n.a.createElement("button",{className:"__dumi-default-navbar-toggle",onClick:t}),n.a.createElement(h.Link,{className:"__dumi-default-navbar-logo",style:{backgroundImage:m&&"url('".concat(m,"')")},to:v,"data-plaintext":m===!1||void 0},S),n.a.createElement("nav",null,l,W.map(function(R){var q,F=Boolean((q=R.children)===null||q===void 0?void 0:q.length)&&n.a.createElement("ul",null,R.children.map(function(V){return n.a.createElement("li",{key:V.path},n.a.createElement(h.NavLink,{to:V.path},V.title))}));return n.a.createElement("span",{key:R.title||R.path},R.path?n.a.createElement(h.NavLink,{to:R.path,key:R.path},R.title):R.title,F)}),n.a.createElement("div",{className:"__dumi-default-navbar-tool"},n.a.createElement(j,{location:d}),c)))},Y=K,de=e("JYF0"),ce=["slugs"];function _(){return _=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(r[l]=t[l])}return r},_.apply(this,arguments)}function ae(r,a){if(r==null)return{};var t=oe(r,a),l,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(d=0;d<c.length;d++)l=c[d],!(a.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,l)||(t[l]=r[l]))}return t}function oe(r,a){if(r==null)return{};var t={},l=Object.keys(r),d,c;for(c=0;c<l.length;c++)d=l[c],!(a.indexOf(d)>=0)&&(t[d]=r[d]);return t}var me=function(a){var t=a.slugs,l=ae(a,ce);return n.a.createElement("ul",_({role:"slug-list"},l),t.filter(function(d){var c=d.depth;return c>1&&c<4}).map(function(d){return n.a.createElement("li",{key:d.heading,title:d.value,"data-depth":d.depth},n.a.createElement(h.AnchorLink,{to:"#".concat(d.heading)},n.a.createElement("span",null,d.value)))}))},ee=me,Ce=e("3Bus"),ue=function(a){var t=a.mobileMenuCollapsed,l=a.location,d=a.darkPrefix,c=Object(E.useContext)(h.context),p=c.config,v=p.logo,w=p.title,Q=p.description,S=p.mode,m=p.repository.url,W=c.menu,R=c.nav,q=c.base,F=c.meta,V=Boolean((F.hero||F.features||F.gapless)&&S==="site")||F.sidemenu===!1||void 0;return n.a.createElement("div",{className:"__dumi-default-menu","data-mode":S,"data-hidden":V,"data-mobile-show":!t||void 0},n.a.createElement("div",{className:"__dumi-default-menu-inner"},n.a.createElement("div",{className:"__dumi-default-menu-header"},n.a.createElement(h.Link,{to:q,className:"__dumi-default-menu-logo",style:{backgroundImage:v&&"url('".concat(v,"')")}}),n.a.createElement("h1",null,w),n.a.createElement("p",null,Q),/github\.com/.test(m)&&S==="doc"&&n.a.createElement("p",null,n.a.createElement("object",{type:"image/svg+xml",data:"https://img.shields.io/github/stars".concat(m.match(/((\/[^\/]+){2})$/)[1],"?style=social")}))),n.a.createElement("div",{className:"__dumi-default-menu-mobile-area"},!!R.length&&n.a.createElement("ul",{className:"__dumi-default-menu-nav-list"},R.map(function(f){var z,X=Boolean((z=f.children)===null||z===void 0?void 0:z.length)&&n.a.createElement("ul",null,f.children.map(function(M){return n.a.createElement("li",{key:M.path||M.title},n.a.createElement(h.NavLink,{to:M.path},M.title))}));return n.a.createElement("li",{key:f.path||f.title},f.path?n.a.createElement(h.NavLink,{to:f.path},f.title):f.title,X)})),n.a.createElement(j,{location:l}),d),n.a.createElement("ul",{className:"__dumi-default-menu-list"},!V&&W.map(function(f){var z,X=Boolean((z=F.slugs)===null||z===void 0?void 0:z.length),M=f.children&&Boolean(f.children.length),Ae=F.toc==="menu"&&!M&&X&&f.path===l.pathname.replace(/([^^])\/$/,"$1"),re=M?f.children.map(function(Z){return Z.path}):[f.path,l.pathname.startsWith("".concat(f.path,"/"))&&F.title===f.title?l.pathname:null];return n.a.createElement("li",{key:f.path||f.title},n.a.createElement(h.NavLink,{to:f.path,isActive:function(){return re.includes(l.pathname)}},f.title),Boolean(f.children&&f.children.length)&&n.a.createElement("ul",null,f.children.map(function(Z){return n.a.createElement("li",{key:Z.path},n.a.createElement(h.NavLink,{to:Z.path,exact:!0},n.a.createElement("span",null,Z.title)),Boolean(F.toc==="menu"&&typeof window!="undefined"&&Z.path===l.pathname&&X)&&n.a.createElement(ee,{slugs:F.slugs}))})),Ae&&n.a.createElement(ee,{slugs:F.slugs}))}))))},pe=ue,Ie=e("9IxB");function J(){return J=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(r[l]=t[l])}return r},J.apply(this,arguments)}function se(r,a){return I(r)||A(r,a)||i(r,a)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(r,a){if(!!r){if(typeof r=="string")return s(r,a);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(r,a)}}function s(r,a){(a==null||a>r.length)&&(a=r.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=r[t];return l}function A(r,a){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var l=[],d=!0,c=!1,p,v;try{for(t=t.call(r);!(d=(p=t.next()).done)&&(l.push(p.value),!(a&&l.length===a));d=!0);}catch(w){c=!0,v=w}finally{try{!d&&t.return!=null&&t.return()}finally{if(c)throw v}}return l}}function I(r){if(Array.isArray(r))return r}var g=function(a,t){var l=t.toLowerCase().indexOf(a.toLowerCase()),d=a.length;return n.a.createElement(n.a.Fragment,null,t.substring(0,l),n.a.createElement("span",{className:"__dumi-default-search-highlight"},t.substring(l,l+d)),t.substring(l+d,t.length))},B=function(){var r=Object(E.useState)(""),a=se(r,2),t=a[0],l=a[1],d=Object(E.useState)([]),c=se(d,2),p=c[0],v=c[1],w=Object(E.useRef)(),Q=Object(h.useSearch)(t),S=n.a.createElement("svg",{className:"__dumi-default-search-empty",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2347",width:"32",height:"32"},n.a.createElement("path",{d:"M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z"}));return Object(E.useEffect)(function(){Array.isArray(Q)?v(Q):typeof Q=="function"&&Q(".".concat(w.current.className))},[Q]),n.a.createElement("div",{className:"__dumi-default-search"},n.a.createElement("input",J({className:"__dumi-default-search-input",type:"search",ref:w},Array.isArray(Q)?{value:t,onChange:function(W){return l(W.target.value)}}:{})),n.a.createElement("ul",null,p.length>0&&p.map(function(m){var W;return n.a.createElement("li",{key:m.path,onClick:function(){return l("")}},n.a.createElement(h.AnchorLink,{to:m.path},((W=m.parent)===null||W===void 0?void 0:W.title)&&n.a.createElement("span",null,m.parent.title),g(t,m.title)))}),p.length===0&&t&&n.a.createElement("li",{style:{textAlign:"center"}},S)))},L=e("kUT7");function P(r,a){return H(r)||b(r,a)||O(r,a)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(r,a){if(!!r){if(typeof r=="string")return x(r,a);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(r,a)}}function x(r,a){(a==null||a>r.length)&&(a=r.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=r[t];return l}function b(r,a){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var l=[],d=!0,c=!1,p,v;try{for(t=t.call(r);!(d=(p=t.next()).done)&&(l.push(p.value),!(a&&l.length===a));d=!0);}catch(w){c=!0,v=w}finally{try{!d&&t.return!=null&&t.return()}finally{if(c)throw v}}return l}}function H(r){if(Array.isArray(r))return r}var $=function(a){var t=a.darkSwitch,l=a.onDarkSwitchClick,d=a.isSideMenu,c=["dark","light","auto"],p=Object(h.usePrefersColor)(),v=P(p,2),w=v[0],Q=v[1],S=w,m=n.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4026",width:"22",height:"22"},n.a.createElement("path",{d:"M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z","p-id":"4027"})),W=n.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3854",width:"22",height:"22"},n.a.createElement("path",{d:"M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z","p-id":"3855"})),R=n.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"11002",width:"22",height:"22"},n.a.createElement("path",{d:"M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z","p-id":"11003"})),q=c.filter(function(f){return f!==S}),F=function(z,X){!d&&l&&l(z),X!==S&&Q(X)},V=function(z){switch(z){case"dark":return n.a.createElement("button",{key:"dumi-dark-btn-moon",title:"Dark theme",onClick:function(M){return F(M,z)},className:"__dumi-default-dark-moon ".concat(z===S?"__dumi-default-dark-switch-active":"")},W);case"light":return n.a.createElement("button",{key:"dumi-dark-btn-sun",title:"Light theme",onClick:function(M){return F(M,z)},className:"__dumi-default-dark-sun ".concat(z===S?"__dumi-default-dark-switch-active":"")},m);case"auto":return n.a.createElement("button",{key:"dumi-dark-btn-auto",title:"Default to system",onClick:function(M){return F(M,z)},className:"__dumi-default-dark-auto ".concat(z===S?"__dumi-default-dark-switch-active":"")},R);default:}};return n.a.createElement("div",{className:"__dumi-default-dark"},n.a.createElement("div",{className:"__dumi-default-dark-switch ".concat(!d&&t?"__dumi-default-dark-switch-open":"")},d?c.map(function(f){return V(f)}):V(S)),!d&&t&&n.a.createElement("div",{className:"__dumi-default-dark-switch-list"},q.map(function(f){return V(f)})))},G=$,ie=e("NR2k");function ne(r,a){return ve(r)||ye(r,a)||le(r,a)||ge()}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(r,a){if(!!r){if(typeof r=="string")return te(r,a);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return te(r,a)}}function te(r,a){(a==null||a>r.length)&&(a=r.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=r[t];return l}function ye(r,a){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var l=[],d=!0,c=!1,p,v;try{for(t=t.call(r);!(d=(p=t.next()).done)&&(l.push(p.value),!(a&&l.length===a));d=!0);}catch(w){c=!0,v=w}finally{try{!d&&t.return!=null&&t.return()}finally{if(c)throw v}}return l}}function ve(r){if(Array.isArray(r))return r}var Be=function(a){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"__dumi-default-layout-hero"},a.image&&n.a.createElement("img",{src:a.image}),n.a.createElement("h1",null,a.title),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.desc}}),a.actions&&a.actions.map(function(t){return n.a.createElement(h.Link,{to:t.link,key:t.text},n.a.createElement("button",{type:"button"},t.text))})))},Qe=function(a){return n.a.createElement("div",{className:"__dumi-default-layout-features"},a.map(function(t){return n.a.createElement("dl",{key:t.title,style:{backgroundImage:t.icon?"url(".concat(t.icon,")"):void 0}},t.link?n.a.createElement(h.Link,{to:t.link},n.a.createElement("dt",null,t.title)):n.a.createElement("dt",null,t.title),n.a.createElement("dd",{dangerouslySetInnerHTML:{__html:t.desc}}))}))},be=function(a){var t,l,d=a.children,c=a.location,p=Object(E.useContext)(h.context),v=p.config,w=v.mode,Q=v.repository,S=p.nav,m=p.meta,W=p.locale,R=Q.url,q=Q.branch,F=Q.platform,V=Object(E.useState)(!0),f=ne(V,2),z=f[0],X=f[1],M=Object(E.useState)(!1),Ae=ne(M,2),re=Ae[0],Z=Ae[1],Ee=w==="site",fe=Ee&&m.hero,he=Ee&&m.features,De=m.sidemenu!==!1&&!fe&&!he&&!m.gapless,Te=!fe&&!he&&Boolean((t=m.slugs)===null||t===void 0?void 0:t.length)&&(m.toc==="content"||m.toc===void 0)&&!m.gapless,we=/^zh|cn$/i.test(W),Re=new Date(m.updatedTime),Pe="".concat(Re.toLocaleDateString([],{hour12:!1})," ").concat(Re.toLocaleTimeString([],{hour12:!1})),xe={github:"GitHub",gitlab:"GitLab"}[((l=(R||"").match(/(github|gitlab)/))===null||l===void 0?void 0:l[1])||"nothing"]||F;return n.a.createElement("div",{className:"__dumi-default-layout","data-route":c.pathname,"data-show-sidemenu":String(De),"data-show-slugs":String(Te),"data-site-mode":Ee,"data-gapless":String(!!m.gapless),onClick:function(){Z(!1),!z&&X(!0)}},n.a.createElement(Y,{location:c,navPrefix:n.a.createElement(B,null),darkPrefix:n.a.createElement(G,{darkSwitch:re,onDarkSwitchClick:function(Se){Z(function(Ne){return!Ne}),Se.stopPropagation()},isSideMenu:!1}),onMobileMenuClick:function(Se){X(function(Ne){return!Ne}),Se.stopPropagation()}}),n.a.createElement(pe,{darkPrefix:n.a.createElement(G,{darkSwitch:re,isSideMenu:!0}),mobileMenuCollapsed:z,location:c}),Te&&n.a.createElement(ee,{slugs:m.slugs,className:"__dumi-default-layout-toc"}),fe&&Be(m.hero),he&&Qe(m.features),n.a.createElement("div",{className:"__dumi-default-layout-content"},d,!fe&&!he&&m.filePath&&!m.gapless&&n.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},xe&&n.a.createElement(h.Link,{to:"".concat(R,"/edit/").concat(q,"/").concat(m.filePath)},we?"\u5728 ".concat(xe," \u4E0A\u7F16\u8F91\u6B64\u9875"):"Edit this doc on ".concat(xe)),n.a.createElement("span",{"data-updated-text":we?"\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A":"Last update: "},Pe)),(fe||he)&&m.footer&&n.a.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:m.footer}})))},ke=N.default=be},"7wuY":function(C,N,e){},"9IxB":function(C,N,e){},"9kvl":function(C,N,e){"use strict";var E=e("FfOG");e.d(N,"a",function(){return E.b});var n=e("bCY9")},JYF0:function(C,N,e){},KcUY:function(C,N,e){"use strict";function E(o){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},E(o)}Object.defineProperty(N,"__esModule",{value:!0}),N.default=void 0;var n=D(e("cDcd")),h=y(e("nLCz"));function y(o){return o&&o.__esModule?o:{default:o}}function u(o){if(typeof WeakMap!="function")return null;var i=new WeakMap,s=new WeakMap;return(u=function(I){return I?s:i})(o)}function D(o,i){if(!i&&o&&o.__esModule)return o;if(o===null||E(o)!=="object"&&typeof o!="function")return{default:o};var s=u(i);if(s&&s.has(o))return s.get(o);var A={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in o)if(g!=="default"&&Object.prototype.hasOwnProperty.call(o,g)){var B=I?Object.getOwnPropertyDescriptor(o,g):null;B&&(B.get||B.set)?Object.defineProperty(A,g,B):A[g]=o[g]}return A.default=o,s&&s.set(o,A),A}function j(o,i){var s=typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!s){if(Array.isArray(o)||(s=Y(o))||i&&o&&typeof o.length=="number"){s&&(o=s);var A=0,I=function(){};return{s:I,n:function(){return A>=o.length?{done:!0}:{done:!1,value:o[A++]}},e:function(T){throw T},f:I}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g=!0,B=!1,L;return{s:function(){s=s.call(o)},n:function(){var T=s.next();return g=T.done,T},e:function(T){B=!0,L=T},f:function(){try{!g&&s.return!=null&&s.return()}finally{if(B)throw L}}}}function U(o,i){return _(o)||ce(o,i)||Y(o,i)||K()}function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(o,i){if(!!o){if(typeof o=="string")return de(o,i);var s=Object.prototype.toString.call(o).slice(8,-1);if(s==="Object"&&o.constructor&&(s=o.constructor.name),s==="Map"||s==="Set")return Array.from(o);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return de(o,i)}}function de(o,i){(i==null||i>o.length)&&(i=o.length);for(var s=0,A=new Array(i);s<i;s++)A[s]=o[s];return A}function ce(o,i){var s=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(s!=null){var A=[],I=!0,g=!1,B,L;try{for(s=s.call(o);!(I=(B=s.next()).done)&&(A.push(B.value),!(i&&A.length===i));I=!0);}catch(P){g=!0,L=P}finally{try{!I&&s.return!=null&&s.return()}finally{if(g)throw L}}return A}}function _(o){if(Array.isArray(o))return o}function ae(o,i){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(o);i&&(A=A.filter(function(I){return Object.getOwnPropertyDescriptor(o,I).enumerable})),s.push.apply(s,A)}return s}function oe(o){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?ae(Object(s),!0).forEach(function(A){me(o,A,s[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):ae(Object(s)).forEach(function(A){Object.defineProperty(o,A,Object.getOwnPropertyDescriptor(s,A))})}return o}function me(o,i,s){return i in o?Object.defineProperty(o,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[i]=s,o}var ee=function(i,s){var A=function(){for(var T,O=arguments.length,x=new Array(O),b=0;b<O;b++)x[b]=arguments[b];var H=x[1].replace(/([^^])\/$/,"$1");return oe(oe({},((T=x[0].find(function($){var G=$.path;return G===H}))===null||T===void 0?void 0:T.meta)||{}),{},{__pathname:s})},I=(0,n.useState)(A(i,s)),g=U(I,2),B=g[0],L=g[1];return(0,n.useLayoutEffect)(function(){L(A(i,s))},[s]),B},Ce=function(i,s){var A=function(){for(var T,O=arguments.length,x=new Array(O),b=0;b<O;b++)x[b]=arguments[b];return((T=x[0].find(function(H){return new RegExp("/".concat(H.name,"(/|$)")).test(x[1])}))===null||T===void 0?void 0:T.name)||i[0].name},I=(0,n.useState)(A(i,s)),g=U(I,2),B=g[0],L=g[1];return(0,n.useLayoutEffect)(function(){L(A(i,s))},[s]),B},ue=function(i,s,A){var I=function(){for(var O,x=arguments.length,b=new Array(x),H=0;H<x;H++)b[H]=arguments[H];for(var $=b[0].navs[b[1]]||[],G="*",ie=$.length-1;ie>=0;ie-=1){var ne=$[ie],ge=[ne].concat(ne.children).filter(Boolean),le=ge.find(function(te){return te.path&&new RegExp("^".concat(te.path.replace(/\.html$/,""),"(/|.|$)")).test(b[2])});if(le){G=le.path;break}}return((O=b[0].menus[b[1]])===null||O===void 0?void 0:O[G])||[]},g=(0,n.useState)(I(i,s,A)),B=U(g,2),L=B[0],P=B[1];return(0,n.useLayoutEffect)(function(){P(I(i,s,A))},[i.navs,i.menus,s,A]),L},pe=function(i,s,A){var I=function(){for(var O=arguments.length,x=new Array(O),b=0;b<O;b++)x[b]=arguments[b];return x[0]===x[1][0].name?x[2].path:"".concat(A.path,"/").concat(i).replace(/\/\//,"/")},g=(0,n.useState)(I(i,s,A)),B=U(g,2),L=B[0],P=B[1];return(0,n.useLayoutEffect)(function(){P(I(i,s,A))},[i]),L},Ie=function o(i){var s,A=j(i),I;try{for(A.s();!(I=A.n()).done;){var g=I.value;if(g.__dumiRoot){s=g.routes;break}else if(g.routes&&(s=o(g.routes)))break}}catch(B){A.e(B)}finally{A.f()}return s},J=function(i){var s=i.location,A=i.route,I=i.children,g=i.config,B=i.apis,L=i.demos,P=s.pathname.replace(A.path.replace(/^\/$/,"//"),""),T=Ie(i.routes)||[],O=ee(T,s.pathname),x=Ce(g.locales,P),b=ue(g,x,s.pathname),H=pe(x,g.locales,A);return n.default.createElement(h.default.Provider,{value:{config:g,meta:O.__pathname===s.pathname?O:{},locale:x,nav:g.navs[x]||[],menu:b,base:H,routes:T,apis:B,demos:L}},I)},se=J;N.default=se},NR2k:function(C,N,e){},afA6:function(C,N,e){"use strict";e.r(N);var E=e("0Owb"),n=e("cDcd"),h=e.n(n),y=e("q3YX"),u=e("rlch"),D=`import React from "react";
import Picker1 from "./Picker1";
import Picker2 from "./Picker2";
import { Card } from "antd";
export default function IndexPage() {
  return (
    <>
      <Card style={{ margin: 24 }}>
        <Picker1 />
        <Picker2 />
      </Card>
    </>
  );
}`,j=`import type moment from "moment";
import { Form, DatePicker } from "antd";
import ToolClass from "../toolClass";
import React from "react";
const Picker1 = () => {
  const [form] = Form.useForm();
  const transformFn = new ToolClass();
  const disabledTime = (CurrentFormMoment: moment.MomentInput) => {
    const StartTime = form.getFieldValue("startTime");
    return transformFn.disabledTime(StartTime, CurrentFormMoment);
  };
  const disabledDate = (CurrentFormMoment: moment.MomentInput) => {
    const StartTime = form.getFieldValue("startTime");
    return transformFn.disabledDate(StartTime, CurrentFormMoment);
  };
  return (
    <>
      <h2>Picker1</h2>
      <Form form={form}>
        <Form.Item name="startTime">
          <DatePicker
            style={{ minWidth: "100%" }}
            showToday={false}
            showTime
            showNow={false}
            onChange={() => form.setFieldsValue({ endTime: null })}
          />
        </Form.Item>
        <Form.Item name="endTime">
          <DatePicker
            style={{ minWidth: "100%" }}
            showToday={false}
            showTime={{
              hideDisabledOptions: true,
            }}
            showNow={false}
            disabledDate={disabledDate}
            disabledTime={disabledTime}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default Picker1;`,U=`import moment from "moment";
export default class ToolClass {
  protected _range = (start: number, end: number) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  // @@Demo1 \u573A\u666F: \u4E24\u4E2ADatePicker \u7ED3\u675F\u65F6\u95F4\u8868\u5355 \u6821\u9A8C \u9700\u8981\u665A\u4E8E \u5F00\u59CB\u65F6\u95F4\u8868\u5355
  // const [form] = Form.useForm();
  // const transformFn = new ToolClass()
  // const disabledTime = (CurrentFormMoment: moment.MomentInput) => {
  //   const StartTime = form.getFieldValue('startTime')
  //   return transformFn.disabledTime(StartTime, CurrentFormMoment)
  // }
  // const disabledDate = (CurrentFormMoment: moment.MomentInput) => {
  //   const StartTime = form.getFieldValue('startTime')
  //   return transformFn.disabledDate(StartTime, CurrentFormMoment)
  // }
  //  <Form form={form}>
  //       <Form.Item name='startTime'>
  //         <DatePicker
  //           showToday={false}
  //           showTime
  //           showNow={false}
  //           onChange={() => form.setFieldsValue({ endTime: null })}
  //         />
  //       </Form.Item>
  //       <Form.Item name='endTime'>
  //         <DatePicker
  //           showToday={false}
  //           showTime={{
  //             hideDisabledOptions: true
  //           }}
  //           showNow={false}
  //           disabledDate={disabledStartTime}
  //           disabledTime={disabledTime}
  //         />
  //       </Form.Item>
  //     </Form>
  /**
   * \u4E24\u4E2ADatePicker: \u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u8868\u5355
   * function: \u5F53\u7ED3\u675F\u65F6\u95F4\u8868\u5355\u65F6 \u5C0F\u4E8E\u5F00\u59CB\u65F6\u95F4\u7684 \u5E74\u6708\u65E5 disabled
   * @param startTime \u5F00\u59CB\u65F6\u95F4\u8868\u5355\u7684\u503C form.getFieldsValue('startTime\u2019)
   * @param current \u7EC4\u4EF6disabledDate\u65B9\u6CD5\u7684 current
   * @returns {boolean}
   */
  disabledDate = (
    startTime: moment.MomentInput,
    current: moment.MomentInput,
  ) => {
    if (startTime == undefined) {
      return false;
    }
    if (current) {
      return current < moment(startTime).startOf("days");
    }
    return false;
  };
  /**
   * \u4E24\u4E2ADatePicker: \u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u8868\u5355
   * function: \u5F53\u7ED3\u675F\u65F6\u95F4\u8868\u5355\u65F6 \u5C0F\u4E8E\u5F00\u59CB\u65F6\u95F4\u7684 \u65F6\u5206\u79D2 disabled
   * @param StartFormMoment \u5F00\u59CB\u65F6\u95F4\u8868\u5355\u7684\u503C form.getFieldsValue('startTime\u2019)
   * @param CurrentFormMoment \u5F53\u524D\u8868\u5355\u7684\u503C:\u7ED3\u675F\u65F6\u95F4\u8868\u5355
   * @returns {}
   */
  disabledTime = (
    StartFormMoment: moment.MomentInput,
    CurrentFormMoment: moment.MomentInput,
  ) => {
    // startTimes
    const startHours = moment(StartFormMoment).hour();
    const startMinutes = moment(StartFormMoment).minute();
    const startSeconds = moment(StartFormMoment).second();
    const startDate = moment(StartFormMoment).date();
    // currentTimes
    const currentHours = moment(CurrentFormMoment).hour();
    const currentMinutes = moment(CurrentFormMoment).minute();
    const currentDate = moment(CurrentFormMoment).date();
    if (CurrentFormMoment == undefined) {
      return {};
    }
    if (CurrentFormMoment && currentDate === startDate) {
      if (currentHours === startHours) {
        if (currentMinutes === startMinutes) {
          return {
            disabledHours: () => this._range(0, startHours),
            disabledMinutes: (selectedHour: number) =>
              selectedHour >= startHours ? this._range(0, startMinutes) : [],
            disabledSeconds: (selectedHour: number, selectedMinute: number) =>
              selectedHour >= startHours && selectedMinute >= startMinutes
                ? this._range(0, startSeconds)
                : [],
          };
        }
        return {
          disabledHours: () => this._range(0, startHours),
          disabledMinutes: (selectedHour: any) =>
            selectedHour >= startHours ? this._range(0, startMinutes) : [],
          disabledSeconds: () => [],
        };
      } else {
        return {
          disabledHours: () => this._range(0, startHours),
          disabledMinutes: () => [],
          disabledSeconds: () => [],
        };
      }
    }
    return {};
  };

  // @@Demo2 \u573A\u666F: \u4E24\u4E2ARangePicker
  //                1.\u7B2C\u4E00\u4E2A\u8868\u5355\u7684\u7ED3\u675F\u65F6\u95F4\u9700\u8981\u665A\u4E8E\u7B2C\u4E00\u4E2A\u8868\u5355\u7684\u5F00\u59CB\u65F6\u95F4
  //                2.\u7B2C\u4E8C\u4E2A\u8868\u5355\u7684\u5F00\u59CB\u65F6\u95F4\u9700\u8981\u665A\u4E8E\u7B2C\u4E00\u4E2A\u8868\u5355\u7684\u5F00\u59CB\u65F6\u95F4
  //                3.\u7B2C\u4E8C\u4E2A\u8868\u5355\u7684\u7ED3\u675F\u65F6\u95F4\u9700\u8981\u665A\u4E8E\u7B2C\u4E8C\u4E2A\u8868\u5355\u7684\u5F00\u59CB\u65F6\u95F4
  /**
   * \u4E24\u4E2ARangePicker
   * \u7EE7\u7EED\u590D\u7528 ToolClass.disabledDate \u548C ToolClass.disabledTime
   */
  // import { useState } from 'react'
  // import moment from 'moment'
  // import { Form, DatePicker } from 'antd'
  // const { RangePicker } = DatePicker;
  // import ToolClass from '../toolClass'
  // const Picker2 = () => {
  //   const [form] = Form.useForm();
  //   const transformFn = new ToolClass()
  //   const [disabledTimeDates1, setDisabledTimeDates1] = useState([]);
  //   const [disabledTimeDates2, setDisabledTimeDates2] = useState([]);
  //   // \u5C06\u8868\u5355\u5206\u4E3A startTime1 startTime2  endTime1 endTime2
  //   const disabledRangeTime1 = (CurrentFormMoment: moment.MomentInput, type: string) => {
  //     let StartTime1 = disabledTimeDates1?.[0];
  //     if (type === 'end') {
  //       return transformFn.disabledTime(StartTime1, CurrentFormMoment)
  //     }
  //     return {}
  //   };
  //   const disabledRangeTime2 = (CurrentFormMoment: moment.MomentInput, type: string) => {
  //     // startTime1
  //     let StartTime1 = form.getFieldValue('startTime')?.[0];
  //     // endTime1
  //     let endTime1 = disabledTimeDates2?.[0];
  //     if (type === 'start') {
  //       return transformFn.disabledTime(StartTime1, CurrentFormMoment)
  //     }
  //     if (type === 'end') {
  //       return transformFn.disabledTime(endTime1, CurrentFormMoment)
  //     }
  //     return {}
  //   };
  //   const disabledRangeDate = (CurrentFormMoment: moment.MomentInput) => {
  //     let StartTime = form.getFieldValue('startTime')?.[0];
  //     return transformFn.disabledDate(StartTime, CurrentFormMoment);
  //   }
  //   return (
  //     <>
  //       <h2>Picker2</h2>
  //       <Form form={form}>
  //         <Form.Item name='startTime'>
  //           <RangePicker
  //             onChange={() => form.setFieldsValue({ endTime: null })}
  //             onCalendarChange={(val: any) => setDisabledTimeDates1(val)}
  //             disabledTime={disabledRangeTime1}
  //             showTime={{
  //               hideDisabledOptions: true
  //             }}
  //           />
  //         </Form.Item>
  //         <Form.Item name='endTime'>
  //           <RangePicker
  //             onCalendarChange={(val: any) => setDisabledTimeDates2(val)}
  //             disabledDate={disabledRangeDate}
  //             disabledTime={disabledRangeTime2}
  //             showTime={{
  //               hideDisabledOptions: true
  //             }}
  //           />
  //         </Form.Item>
  //       </Form>
  //     </>
  //   )
  // }
  // export default Picker2
}`,K=`import { useState } from "react";
import type moment from "moment";
import React from "react";
import { Form, DatePicker } from "antd";
const { RangePicker } = DatePicker;
import ToolClass from "../toolClass";
const Picker2 = () => {
  const [form] = Form.useForm();
  const transformFn = new ToolClass();
  const [disabledTimeDates1, setDisabledTimeDates1] = useState([]);
  const [disabledTimeDates2, setDisabledTimeDates2] = useState([]);
  // \u5C06\u8868\u5355\u5206\u4E3A startTime1 startTime2  endTime1 endTime2
  const disabledRangeTime1 = (
    CurrentFormMoment: moment.MomentInput,
    type: string,
  ) => {
    const StartTime1 = disabledTimeDates1?.[0];
    if (type === "end") {
      return transformFn.disabledTime(StartTime1, CurrentFormMoment);
    }
    return {};
  };
  const disabledRangeTime2 = (
    CurrentFormMoment: moment.MomentInput,
    type: string,
  ) => {
    // startTime1
    const StartTime1 = form.getFieldValue("startTime")?.[0];
    // endTime1
    const endTime1 = disabledTimeDates2?.[0];
    if (type === "start") {
      return transformFn.disabledTime(StartTime1, CurrentFormMoment);
    }
    if (type === "end") {
      return transformFn.disabledTime(endTime1, CurrentFormMoment);
    }
    return {};
  };
  const disabledRangeDate = (CurrentFormMoment: moment.MomentInput) => {
    const StartTime = form.getFieldValue("startTime")?.[0];
    return transformFn.disabledDate(StartTime, CurrentFormMoment);
  };
  return (
    <>
      <h2>Picker2</h2>
      <Form form={form}>
        <Form.Item name="startTime">
          <RangePicker
            onChange={() => form.setFieldsValue({ endTime: null })}
            onCalendarChange={(val: any) => setDisabledTimeDates1(val)}
            disabledTime={disabledRangeTime1}
            showTime={{
              hideDisabledOptions: true,
            }}
          />
        </Form.Item>
        <Form.Item name="endTime">
          <RangePicker
            onCalendarChange={(val: any) => setDisabledTimeDates2(val)}
            disabledDate={disabledRangeDate}
            disabledTime={disabledRangeTime2}
            showTime={{
              hideDisabledOptions: true,
            }}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default Picker2;`,Y=`import { Form, Card, Space, InputNumber, Input, Row, Col } from "antd";
import React from "react";
const FormLayout = () => {
  return (
    <>

      <Card style={{ margin: 24 }}>
        <h1>1. {"<space />"} </h1>
        <Form.Item>
          <Space align="baseline" size="large">
            <Space align="baseline">
              <Form.Item name="1">
                <InputNumber min={0} max={100} />
              </Form.Item>
              <span>%</span>
            </Space>
          </Space>
        </Form.Item>

        <h1>2. inline-flex</h1>
        <Form.Item label="\u540D\u79F0\u4E00" style={{ marginBottom: 0 }}>
          <Form.Item
            style={{ display: "inline-flex", width: "calc(45% - 4px)" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{
              display: "inline-flex",
              width: "calc(55% - 4px)",
              marginLeft: "8px",
            }}
            name="name2"
          >
            <Input />
          </Form.Item>

          <Form.Item label="InputNumber\u8868\u5355" style={{ height: 32 }}>
            <Space align="baseline" size="large">
              <Space align="baseline">
                <Form.Item name="inputNumber1">
                  <InputNumber min={0} max={100} />
                </Form.Item>
                <span>%</span>
              </Space>
            </Space>
          </Form.Item>
        </Form.Item>

        <h1>3. row and col</h1>
        <Row>
          <Col span={12}>
            <Form.Item label="col1">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="col2">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <h1>4. \u6307\u5B9A\u5177\u4F53\u7684\u5BBD\u5EA6</h1>
        {\`
          labelCol={{ flex: '0 0 100px' }} 
          wrapperCol={{ flex: '0 0 100px' }} 
          style={{ display: 'inline-flex', width: 'calc(45% - 4px)' }} 
        \`}
      </Card>

    </>
  );
};

export default FormLayout;`,de=`import Calendar from './components/Calendar';
export default Calendar;`,ce=`/* eslint-disable react/jsx-key */
import moment, { MomentInput } from 'moment';
import React, {
  useState,
  useImperativeHandle,
  useRef,
  useEffect,
  Fragment,
} from 'react';
import { WEEK_DAY, MONTH } from './constant';
import styles from './index.less';
import * as transformFn from './utils';
import { Tag, Button, Row, Col } from 'antd';

interface Iprops {
  /**\u4F20\u5165\u521D\u59CB\u5316\u7684\u65F6\u95F4 */
  time: moment.MomentInput | string;
  /**\u5F85\u6574\u7406 */
  otherProps: any;
  [props: string]: any;
}

type IPickerType = 'year' | 'month' | 'date';
type ClickEvent = React.MouseEvent<HTMLTableRowElement>;

const Calendar = (props: Iprops) => {
  const { time: newTime = moment().format('YYYY-MM-DD') } = props;
  const [time, setTime] = useState(newTime);
  const [pickerType, setPickerType] = useState<IPickerType>('date');
  const [selectDays, setSelectDays] = useState<moment.MomentInput[]>([
    moment().format('YYYY-MM-DD'),
  ]);

  const createRestDaysTD = (restDays: number[], type = 'first') => {
    const subMonth = (e: ClickEvent) => {
      const currentDate =
        (e.target as HTMLElement).innerText.length >= 2
          ? (e.target as HTMLElement).innerText
          : 0 + (e.target as HTMLElement).innerText;
      let classNameNames: string[] = (e.target as Element).className.split(' ');
      if (
        classNameNames.includes(styles['current-day']) &&
        !classNameNames.includes(styles['selected']) &&
        pickerType == 'date'
      ) {
        (e.target as Element).className += \` \${styles.selected}\`;
      } else {
        (e.target as Element).className = (e.target as Element).className.replace(
          styles['selected'],
          '',
        );
      }
      if (pickerType == 'date') {
        (e.target as Element).setAttribute(
          'data-date',
          moment(time).format(\`YYYY-MM-[\${currentDate}]\`),
        );
      }

      if (type == 'first') {
        let newTime =
          moment(time)
            .subtract(1, 'month')
            .format('YYYY-MM') +
          '-' +
          currentDate;
        setTime(moment(newTime));
      } else {
        let newTime =
          moment(time)
            .add(1, 'month')
            .format('YYYY-MM') +
          '-' +
          currentDate;
        setTime(moment(newTime));
      }
    };
    return (
      <Fragment>
        {restDays?.map((item, index) => (
          <td
            onClick={(e: ClickEvent) => subMonth(e)}
            key={Math.random()}
            className={\`\${styles.day} \${styles['rest-day']}\`}
          >
            {item}
          </td>
        ))}
      </Fragment>
    );
  };

  const createCurrentYearsTD = (
    currentYears: number[],
    time: moment.MomentInput,
  ) => {
    const currentDay = moment(time).get('year');
    return (
      <Fragment>
        {currentYears.map((item, index) => (
          <td
            key={Math.random()}
            className={\`\${styles.day} \${styles['current-day']} \${currentDay ==
              index + 1 && styles.current}\`}
          >
            {item + 1}
          </td>
        ))}
      </Fragment>
    );
  };

  const createCurrentMonthTD = (
    currentMonths: number[],
    time: moment.MomentInput,
  ) => {
    const currentDay = moment(time).get('month');
    return (
      <Fragment>
        {currentMonths.map((item, index) => (
          <td
            key={Math.random()}
            className={\`\${styles.day} \${styles['current-day']} \${currentDay ==
              index + 1 && styles.current}\`}
          >
            {item}
          </td>
        ))}
      </Fragment>
    );
  };

  const createCurrentDaysTD = (
    currentDays: number,
    time: moment.MomentInput,
  ) => {
    const currentTimeArr = Array.from(
      { length: currentDays },
      (item, index) => index,
    );
    const currentDay = moment(time).date();
    console.log(selectDays);
    return (
      <Fragment>
        {currentTimeArr?.map((item, index) => (
          <td
            key={Math.random()}
            className={\`\${styles.day} \${selectDays.includes(
              moment(time)
                .date(index + 1)
                .format('YYYY-MM-DD'),
            ) && styles.selected} \${styles['current-day']} \${currentDay ==
              index + 1 && styles.current}\`}
            data-date={moment(time)
              .date(index + 1)
              .format('YYYY-MM-DD')}
          >
            {item + 1}
          </td>
        ))}
      </Fragment>
    );
  };

  const createDateTrs = (
    element: JSX.Element[],
    count: number,
    time: moment.MomentInput,
    pickerType = 'date',
  ) => {
    const trCount = ~~(element.length / count);

    const clickTime = (e: ClickEvent) => {
      const currentDate =
        (e.target as HTMLElement).innerText.length >= 2
          ? (e.target as HTMLElement).innerText
          : 0 + (e.target as HTMLElement).innerText;
      let classNameNames: string[] = (e.target as Element).className.split(' ');

      if (
        classNameNames.includes(styles['current-day']) &&
        !classNameNames.includes(styles['selected']) &&
        pickerType == 'date'
      ) {
        (e.target as Element).className += \` \${styles.selected}\`;
        const currentDateString = moment(time).format(
          \`YYYY-MM-[\${currentDate}]\`,
        );
        const newCurrentDateString = [
          ...new Set([...selectDays, currentDateString]),
        ];
        setSelectDays(newCurrentDateString);
      } else {
        (e.target as Element).className = (e.target as Element).className.replace(
          styles['selected'],
          '',
        );
        const currentDateString = moment(time).format(
          \`YYYY-MM-[\${currentDate}]\`,
        );
        const newCurrentDateString = selectDays.filter(
          item => item != currentDateString,
        );
        setSelectDays(newCurrentDateString);
      }

      if (pickerType == 'date') {
        (e.target as Element).setAttribute(
          'data-date',
          moment(time).format(\`YYYY-MM-[\${currentDate}]\`),
        );
      }

      if (pickerType == 'year') {
        (e.target as Element).setAttribute(
          'data-date',
          moment(time).format(\`YYYY\`),
        );
        const currentYear = moment((e.target as HTMLElement).innerText, 'YYYY');
        setTime(currentYear);
        setPickerType('date');
      }

      if (pickerType == 'month') {
        (e.target as Element).setAttribute(
          'data-date',
          moment(time).format(\`MM\`),
        );
        const currentMonth = moment((e.target as HTMLElement).innerText, 'MM');
        setTime(currentMonth);
        setPickerType('date');
      }
    };

    return (
      <>
        {Array.from({ length: trCount }, (item, index) => (
          <Fragment key={Math.random()}>
            <tr onClick={(e: ClickEvent) => clickTime(e)}>
              {element.slice(index * count, (index + 1) * count)}
            </tr>
          </Fragment>
        ))}
      </>
    );
  };

  const lastMonthRestDays = transformFn.getLastMonthRestDays(time);
  const currentMonthDayCount = transformFn.getMonthDayCount(time);
  const nextMonthRestDays = transformFn.getNextMonthRestDays(time);
  const lastMonthRestDaysTD = createRestDaysTD(lastMonthRestDays, 'first');
  const currentMonthDaysTD = createCurrentDaysTD(currentMonthDayCount, time);
  const nextMonthRestDaysTD = createRestDaysTD(nextMonthRestDays, 'end');

  const lastRestYears = [
    moment(transformFn.getFirstAndEndYear(time, '0'))
      .subtract(1, 'year')
      .get('year'),
  ];
  const currentYearCount = transformFn.getCurrentYearArea(
    moment(transformFn.getFirstAndEndYear(time, '0')),
    moment(transformFn.getFirstAndEndYear(time, '9')),
  );
  const nextRestYear = [
    moment(transformFn.getFirstAndEndYear(time, '9'))
      .add(1, 'year')
      .get('year'),
  ];
  const lastRestYearsTD = createRestDaysTD(lastRestYears);
  const currentYearCountTD = createCurrentYearsTD(currentYearCount, time);
  const nextRestYearTD = createRestDaysTD(nextRestYear);

  const currentMonthCountTD = createCurrentMonthTD(MONTH, time);
  return (
    <>
      <div>
        <h3>\u5F53\u524D\u9009\u4E2D\u7684\u65E5\u671F</h3>
        <Row>
          {selectDays.map((item, index) => (
            <Fragment key={index}>
              <Tag color={'purple'}> {item}</Tag>
            </Fragment>
          ))}
        </Row>
        <Row>
          <Button
            style={{ margin: '20px 0' }}
            onClick={() => setSelectDays([])}
            type="primary"
          >
            clear
          </Button>
        </Row>
        <div className="ant-picker-panel-container">
          <div tabIndex={-1} className="ant-picker-panel">
            <div className="ant-picker-date-panel">
              {pickerType == 'date' && (
                <Fragment>
                  <div className="ant-picker-header">
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-prev-btn"
                      onClick={() => setTime(moment(time).subtract(1, 'year'))}
                    >
                      <span className="ant-picker-super-prev-icon"></span>
                    </button>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-prev-btn"
                      onClick={() => setTime(moment(time).subtract(1, 'month'))}
                    >
                      <span className="ant-picker-prev-icon"></span>
                    </button>
                    <div className="ant-picker-header-view">
                      <button
                        type="button"
                        tabIndex={-1}
                        className="ant-picker-year-btn"
                        onClick={() => setPickerType('year')}
                      >
                        {moment(time).format('YYYY')}\u5E74
                      </button>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="ant-picker-month-btn"
                        onClick={() => setPickerType('month')}
                      >
                        {moment(time).format('MM')}\u6708
                      </button>
                    </div>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-next-btn"
                      onClick={() => setTime(moment(time).add(1, 'month'))}
                    >
                      <span className="ant-picker-next-icon"></span>
                    </button>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-next-btn"
                      onClick={() => setTime(moment(time).add(1, 'year'))}
                    >
                      <span className="ant-picker-super-next-icon"></span>
                    </button>
                  </div>
                  <div className="ant-picker-body">
                    <table
                      className={\`\${styles['my-calendar']} ant-picker-content\`}
                    >
                      <thead>
                        <tr className={styles['week-day']}>
                          {WEEK_DAY.map((item, index) => (
                            <td key={index}>{item}</td>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {createDateTrs(
                          [
                            ...lastMonthRestDaysTD.props.children,
                            ...currentMonthDaysTD.props.children,
                            ...nextMonthRestDaysTD.props.children,
                          ],
                          7,
                          time,
                          'date',
                        )}
                      </tbody>
                    </table>
                  </div>
                </Fragment>
              )}
              {pickerType == 'year' && (
                <Fragment>
                  <div className="ant-picker-header">
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-prev-btn"
                      onClick={() => setTime(moment(time).subtract(10, 'year'))}
                    >
                      <span className="ant-picker-super-prev-icon"></span>
                    </button>
                    <div className="ant-picker-header-view">
                      <button type="button" className="ant-picker-decade-btn">
                        <>
                          {moment(
                            transformFn.getFirstAndEndYear(time, '0'),
                          ).format('YYYY')}
                          -
                          {moment(
                            transformFn.getFirstAndEndYear(time, '9'),
                          ).format('YYYY')}
                        </>
                      </button>
                    </div>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-next-btn"
                      onClick={() => setTime(moment(time).add(10, 'year'))}
                    >
                      <span className="ant-picker-super-next-icon"></span>
                    </button>
                  </div>
                  <div className="ant-picker-body">
                    <table
                      className={\`\${styles['my-calendar']} ant-picker-content\`}
                    >
                      <thead></thead>
                      <tbody>
                        {createDateTrs(
                          [
                            ...lastRestYearsTD.props.children,
                            ...currentYearCountTD.props.children,
                            ...nextRestYearTD.props.children,
                          ],
                          3,
                          time,
                          'year',
                        )}
                      </tbody>
                    </table>
                  </div>
                </Fragment>
              )}
              {pickerType == 'month' && (
                <Fragment>
                  <div className="ant-picker-header">
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-prev-btn"
                      onClick={() => setTime(moment(time).subtract(1, 'year'))}
                    >
                      <span className="ant-picker-super-prev-icon"></span>
                    </button>
                    <div className="ant-picker-header-view">
                      <button
                        type="button"
                        className="ant-picker-decade-btn"
                        onClick={() => setPickerType('year')}
                      >
                        {moment(time).format('YYYY')}\u5E74
                      </button>
                    </div>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-next-btn"
                      onClick={() => setTime(moment(time).add(1, 'year'))}
                    >
                      <span className="ant-picker-super-next-icon"></span>
                    </button>
                  </div>
                  <div className="ant-picker-body">
                    <table
                      className={\`\${styles['my-calendar']} ant-picker-content\`}
                    >
                      <thead></thead>
                      <tbody>
                        {createDateTrs(
                          [...currentMonthCountTD.props.children],
                          3,
                          time,
                          'month',
                        )}
                      </tbody>
                    </table>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;`,_=`export const WEEK_DAY = ['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D'];

export const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];`,ae=`.my-calendar {
  width: 324px;
  border: 1px solid #ddd;
  border-collapse: collapse;
  color: #666;
  font-size: 12px;

  thead {
    border-bottom: 1px solid #ddd;
  }

  tr {
    height: 38px;
  }

  td {
    text-align: center;
  }

  th {
    font-weight: normal;
  }

  .week-day {
  }

  .day {
    &.rest-day {
      color: #ccc;
    }

    &.current-day {
      cursor: pointer;
    }

    &.current {
      color: hotpink;
      font-weight: bold;
    }

    &.selected {
      border-radius: 100%;
      background: #1890ff;
      color: #fff;
    }

    &:hover {
      color: hotpink;
    }
  }

  .current {
  }

  .rest-day {
  }

  .current-day {
  }
}`,oe=`import moment from 'moment';

type MomentTime = string | moment.MomentInput;

/**
 * \u83B7\u53D6\u67D0\u4E2A\u6708\u4EFD\u7B2C\u4E00\u5929\u662F\u661F\u671F\u51E0
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4
 * @returns {number} days \u5929\u6570
 */
export function getFirstWeekDay(time: MomentTime = moment()) {
  return moment(time)
    .startOf('month')
    .format('E');
}

/**
 * \u83B7\u53D6\u67D0\u4E2A\u6708\u4EFD\u4E00\u5171\u6709\u591A\u5C11\u5929
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4
 * @returns {number} days \u5929\u6570
 */
export function getMonthDayCount(time: MomentTime = moment()) {
  return moment(time)
    .endOf('month')
    .date();
}

/**
 * \u83B7\u53D6\u4E0A\u4E2A\u6708\u5269\u4F59\u7684\u5929\u6570
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4
 * @returns {number} restDays
 */
export function getLastMonthRestDays(time: MomentTime = moment()) {
  const days = ~~getFirstWeekDay(time);
  let lastDate = ~~getMonthDayCount(moment(time).subtract(1, 'month'));
  let restDays = [];
  while (restDays.length < days) {
    restDays.push(lastDate--);
  }
  restDays.reverse().shift();
  return restDays;
}

/**
 * \u83B7\u53D6\u4E0B\u4E2A\u6708\u5269\u4F59\u5929\u6570
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4
 * @returns {number} restDays
 */
export function getNextMonthRestDays(time: string | MomentTime = moment()) {
  const lastMonthRestDayCount = ~~getFirstWeekDay(time);
  const currentMonthDayCount = ~~getMonthDayCount(time);
  const nextMonthRestDayCount =
    42 - (lastMonthRestDayCount + currentMonthDayCount);
  let restDays = [];
  for (let i = 1; i <= nextMonthRestDayCount + 1; i++) {
    restDays.push(i);
  }
  return restDays;
}

/**
 * \u683C\u5F0F\u5316\u65F6\u95F4
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4
 * @param {string}  [format = 'YYYY-MM-DD']
 * @returns {string} \u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4
 */
function getFormatDate(
  time: MomentTime = moment(),
  format: string = 'YYYY-MM-DD',
) {
  return moment(time).format(format);
}

/**
 * \u83B7\u53D6\u65F6\u95F4\u6233
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] \u4F20\u5165\u5F53\u524D\u65F6\u95F4
 * @returns {number} timestamp \u65F6\u95F4\u6233
 */
function getTimestamp(time: MomentTime = moment()) {
  return moment(time).valueOf();
}

/**
 *
 * @param year \u4F20\u51652022 \u8F6C\u6362\u4E3A202x
 * @param replaceNumber
 * @returns
 */
export function getFirstAndEndYear(year: MomentTime, replaceNumber = '0') {
  let num: number = moment(year).get('year');
  let theUnit = parseInt(((num % 10) as unknown) as string);
  let tens = parseInt((((num % 100) / 10) as unknown) as string);
  let hundred = parseInt((((num % 1000) / 100) as unknown) as string);
  let thousand = parseInt((((num % 10000) / 1000) as unknown) as string);
  let resNum = '';
  if (theUnit !== 5) {
    if (thousand === 0) {
      resNum = hundred.toString() + tens.toString() + replaceNumber;
    } else {
      resNum =
        thousand.toString() +
        hundred.toString() +
        tens.toString() +
        replaceNumber;
    }
  }
  return moment(parseInt(resNum), 'YYYY');
}

/**
 * \u83B7\u53D6\u5F53\u524D\u5E74\u4EFD\u7684\u533A\u95F4
 * @param startTime
 * @param endTime
 * @returns
 */
export function getCurrentYearArea(startTime: MomentTime, endTime: MomentTime) {
  let start = moment(startTime).get('year');
  let end = moment(endTime).get('year');
  let res = [];
  for (let i = start; i <= end; i++) {
    res.push(i);
  }
  // return res.map(item => moment(item, 'YYYY'))
  return res;
}`,me=`import type { FC } from "react";
import { Card } from "antd";
import { Filter } from "./components";
import searchList from "./constant";
import React from "react";

const Queryform: FC<any> = () => {
  const onSearch = (values: any) => {
    console.log(values);
  };

  return (
    <Card title="\u6211\u7684" style={{ margin: 24 }}>
      <Filter
        filterList={searchList}
        onSearch={(values: any) => onSearch(values)}
      />
    </Card>
  );
};

export default Queryform;`,ee=`import { useState, useEffect, useMemo } from "react";
import React from "react";
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  InputNumber,
  AutoComplete,
  Select,
  DatePicker,
  TreeSelect,
  Switch,
  Cascader,
  TimePicker,
} from "antd";
import { UpOutlined } from "@ant-design/icons";
import styles from "./index.less";
const { RangePicker } = DatePicker;

const { Option } = Select;

interface FilterProps {
  /**\u67E5\u8BE2\u8868\u5355JSON\u5F62\u5F0F */
  filterList: any[];
  /**\u662F\u5426\u5141\u8BB8\u641C\u7D22 */
  autoSearch?: boolean;
  /**\u641C\u7D22\u4E8B\u4EF6\u56DE\u8C03 */
  onSearch?: (values: any) => void;
  /**\u91CD\u7F6E\u4E8B\u4EF6\u56DE\u8C03 */
  onReset?: () => void;
  [key: string]: any;
}

// \u907F\u514D\u5F15\u8D77\u547D\u540D\u51B2\u7A81\uFF0C\u628Aoject\u7684key\u90FD\u8F6C\u5316\u4E3A\u5C0F\u5199
function setKeystoLocaleLowerCase(obj: any) {
  return obj.map((item: any) => {
    return Object.fromEntries(
      Object.entries(item).map(([k, v]) => [k.toLowerCase(), v]),
    );
  });
}

export const Filter = ({
  filterList,
  autoSearch = false,
  onSearch,
  onReset,
  ...props
}: FilterProps) => {
  const [form] = Form.useForm();
  const [list, setList] = useState(setKeystoLocaleLowerCase(filterList));
  const [isMore, setIsMore] = useState(true);
  const [offsetSpan, setOffsetSpan] = useState(0);

  useEffect(() => {
    setList(isMore ? list.slice(0, 2) : setKeystoLocaleLowerCase(filterList));
    setOffsetSpan(isMore ? 0 : 2 - (list.length % 3));
  }, [filterList, isMore, list]);

  const lisLen = useMemo(() => {
    return list.length;
  }, [list.length]);

  const span = useMemo(() => {
    return lisLen >= 5 ? 4 : (24 - 2.5) / lisLen;
  }, [lisLen]);

  const onFinish = (values: Record<string, string | number | undefined>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSearch && onSearch(values);
  };

  const getFormElement = (formtype: string, oItem: any) => {
    /** onPressEnter\u4F1A\u81EA\u52A8\u6267\u884C */
    let item: any = {};
    for (const key in oItem) {
      if (oItem.hasOwnProperty(key)) {
        if (key !== "defaultvalue") {
          item[key] = oItem[key];
        }
      }
    }
    item = {
      ...item,
      onChange: () => autoSearch && onFinish(form.getFieldsValue()),
      onSelect: () => autoSearch && onFinish(form.getFieldsValue()),
    };
    switch (formtype) {
      case "input":
        return <Input allowClear {...item} />;
      case "inputnumber":
        return <InputNumber min={0} {...item} />;
      case "autocomplete":
        return (
          <AutoComplete
            allowClear
            options={item.options}
            filterOption={(inputValue: any, option: any) => {
              return (
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              );
            }}
            {...item}
          />
        );
      case "switch":
        return <Switch checkedChildren="\u5F00" unCheckedChildren="\u5173" {...item} />;
      case "select":
        const selectlist = item.list || item.selectlist || [];
        return (
          <Select allowClear {...item}>
            {item.render && item.render()}
            {!item.render &&
              selectlist.map((cl: any) => {
                const oName = cl.key || cl.text || cl.name;
                return (
                  <Option key={cl.id} value={cl.id}>
                    {oName}
                  </Option>
                );
              })}
          </Select>
        );
      case "treeselect":
        const treeSelectList = item.list || item.selectlist || [];
        return (
          <TreeSelect allowClear multiple treeData={treeSelectList} {...item} />
        );
      case "datepicker":
        return <DatePicker {...item} />;
      case "rangepicker":
        return <RangePicker {...item} />;
      case "timepicker":
        return <TimePicker {...item} />;
      case "rangetimepicker":
        return <TimePicker.RangePicker {...item} />;
      case "cascader":
        return <Cascader {...item} />;
      default:
        return "";
    }
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
      style={{ textAlign: "center" }}
      {...props}
    >
      <Row gutter={24}>
        {list.map((item: any, i: number) => {
          const formtype = (item.formtype || "").toLowerCase();

          if (formtype !== "input" && item.rules) {
            // delete item.rules;
            item.rules = null;
          }

          const itemName = item.name;
          const { itemprops } = item;

          return (
            <Col
              span={formtype === "switch" ? 2.5 : span}
              // eslint-disable-next-line react/no-array-index-key
              key={item.name + i}
              style={{
                minWidth: formtype === "switch" ? "auto" : "200px",
              }}
            >
              <Form.Item
                name={itemName}
                label={item.label}
                rules={item.rules ? item.rules : []}
                {...itemprops}
              >
                {getFormElement(formtype, item)}
              </Form.Item>
            </Col>
          );
        })}

        <Col
          md={6}
          style={{ minWidth: "100px", marginBottom: 30 }}
          className={styles.marginL15}
          offset={offsetSpan * 10}
        >
          <span onClick={() => setIsMore(!isMore)}>
            {isMore ? (
              <>
                <span>\u5C55\u5F00 </span>
                <UpOutlined className={styles.SearchUp} />
              </>
            ) : (
              <>
                <span>\u6536\u8D77 </span>
                <UpOutlined className={styles.SearchDown} />
              </>
            )}
          </span>
          <Button
            style={{ margin: "0 8px" }}
            onClick={() => {
              form.resetFields();
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              onReset && onReset();
            }}
          >
            \u91CD\u7F6E
          </Button>
          <Button type="primary" htmlType="submit">
            \u7B5B\u9009
          </Button>
        </Col>
      </Row>
    </Form>
  );
};`,Ce=`.marginL15 {
  align-self: center;
  margin-left: 15px;
  cursor: pointer;

  > span {
    color: rgba(24, 144, 255, 1);
  }
}

.SearchDown {
  transition: 0.3s;
  transform: rotateZ(0deg);
  transform-origin: center;
}

.SearchUp {
  transition: 0.3s;
  transform: rotateZ(180deg);
  transform-origin: center;
}`,ue=`export default [
  {
    formType: "input",
    name: "name",
    label: "\u6A21\u7CCA\u641C\u7D22",
    placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D/ID/\u624B\u673A\u540E4\u4F4D/\u7AD9\u70B9\u5730\u5740",
    // rules: [
    //   {
    //     required: true,
    //   },
    // ],
    itemProps: {
      rules: [
        {
          required: true,
        },
      ],
      initialValue: "22",
    },
  },
  {
    formType: "datepicker",
    name: "datepickerItem",
    label: "\u521B\u5EFA\u65E5\u671F",
    allowClear: true,
  },
  {
    formType: "select",
    name: "site",
    label: "\u7AD9\u70B9",
    defaultValue: null,
    placeholder: "\u8BF7\u9009\u62E9\u7AD9\u70B9",
    selectList: [
      {
        id: 0,
        name: "\u7AD9\u70B91",
      },
      {
        id: 1,
        name: "\u7AD9\u70B92",
      },
    ],
    initialValue: 0,
  },
  {
    formType: "treeselect",
    name: "state",
    label: "\u72B6\u6001",
    defaultValue: null,
    placeholder: "\u8BF7\u9009\u62E9\u72B6\u6001",
    fieldNames: {
      label: "name",
      value: "id",
      children: "children",
    },
    selectlist: [
      {
        title: "Node1",
        value: "0-0",
        children: [
          {
            title: "Child Node1",
            value: "0-0-1",
          },
          {
            title: "Child Node2",
            value: "0-0-2",
          },
        ],
      },
      {
        title: "Node2",
        value: "0-1",
      },
    ],
  },
];`,pe=`import TransferClassForm from "./components/class";
import React, { RefObject } from "react";
import { Form, Button } from "antd";
import type { FormInstance } from "antd/es/form";
import { Card } from "antd";
import { IHandle } from './components/class/index'

export default class TransferDemo extends React.Component {
  TransferRef = React.createRef<IHandle>();
  formRef = React.createRef<FormInstance>();
  state = {
    mockData: [],
  };
  componentDidMount() {
    this.setState({
      mockData: Array.from({
        length: 20,
      }).map((_, i) => ({
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1}\`,
      })),
    });
  }
  testData = () => {
    this.setState({
      mockData: Array.from({
        length: 10,
      }).map((_, i) => ({
        key: i.toString(),
        title: \`content\${i + 1}\`,
        description: \`description of content\${i + 1}\`,
      })),
    });
  };

  transferOkCallBack = () => {
    const { getData } = this.TransferRef!.current!;
    const ref = this.formRef.current;
    console.log(ref!.getFieldValue("test"));
  };

  onFinish = (values: any) => {
    console.log(values);
  };

  render() {
    return (
      <>
        <Card style={{ margin: 24 }}>
          <h1>
            <button
              onClick={() => {
                this.TransferRef!.current!.useVisible(true);
              }}
            >
              \u6253\u5F00\u7A7F\u68AD\u6846
            </button>
          </h1>
          <h1>
            <button onClick={() => this.testData()}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E\u6E90</button>
          </h1>
          <Form ref={this.formRef} onFinish={this.onFinish}>
            <Form.Item style={{ display: "inline-block" }}>
              <TransferClassForm
                formRef={this.formRef}
                originData={this.state.mockData}
                TransferRef={this.TransferRef}
                transferOkCallBack={() => this.transferOkCallBack()}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </>
    );
  }
}`,Ie=`/* eslint-disable react/jsx-key */
import { Transfer, Checkbox, Modal } from "antd";
import React, { useState, useImperativeHandle, useRef, useEffect } from "react";
import styles from "../index.less";
import { Form, Select } from "antd";
import type { ModalProps } from "antd/es/modal";
import type { TransferProps } from "antd/es/transfer";
import type { FormInstance } from "antd/es/form";
import { RefObject } from 'React'

export interface Iprops {
  /**\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03\u51FD\u6570 */
  transferOkCallBack: () => void;
  /**\u521D\u59CB\u5316\u6240\u6709\u7684\u6570\u636E\u6E90 */
  originData: any[];
  /**\u5916\u754C\u4F20\u5165\u7684Antd-form-ref */
  formRef: RefObject<FormInstance>;
  /**\u540C\u6B65\u53D8\u52A8\u7684select formItem name */
  falseSelectItmeName?: string;
  /**\u6A21\u6001\u6846\u7684\u5176\u4ED6props */
  modalProps?: ModalProps;
  /**\u7A7F\u68AD\u6846\u7684\u5176\u4ED6props */
  transferProps?: TransferProps<any>;
  [props: string]: any;
}

export interface IHandle {
  getData: () => [number[], number[]]
  setData: (arr: any) => void
  useVisible: (bool: boolean | ((prevState: boolean) => boolean)) => void
}

// \u6253\u5E73\u6570\u7EC4
const flattenDeep: any = (arr: any) =>
  Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr];
const filterRepeatList = (arr: any) => [...new Set([...arr])];

// \u627E\u5230\u6539\u53D8\u9879\u7684\u5168\u90E8\u4FE1\u606F
const findAllMessage = (originArr: any, keyArr: any) => {
  const arr: any[] = [];
  keyArr.forEach((item: any) => {
    arr.push(originArr.filter((ele: any) => ele.key == item));
  });
  return flattenDeep(arr);
};

const TransferForm: React.ForwardRefRenderFunction<IHandle, Iprops> = (props) => {
  const [targetKeys, setTargetKeys] = useState<any>([]);
  const [selectedKeys, setSelectedKeys] = useState<any>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const transferBox = useRef<any>(null!);

  const {
    transferOkCallBack,
    originData = [],
    formRef,
    TransferRef,
    modalProps,
    transferProps,
    falseSelectItmeName = "test",
  } = props;

  useEffect(() => {
    (document.getElementsByClassName("ant-input")[0] as any).placeholder =
      "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9";
  }, []);

  useEffect(() => {
    setTargetKeys([]);
    setSelectedKeys([]);
    formRef.current!.setFieldsValue({
      [falseSelectItmeName]: [],
    });
  }, [falseSelectItmeName, formRef, originData.length]);

  useImperativeHandle(TransferRef, () => ({
    getData: () => {
      return [targetKeys, originData];
    },
    setData: (arr: any) => {
      setSelectedKeys(arr);
    },
    useVisible: (bool: boolean | ((prevState: boolean) => boolean)) => {
      setVisible(bool);
    },
  }));

  const handleChange = (
    newTargetKeys: any[],
    direction: string,
    moveKeys: any,
  ) => {
    // \u5220\u9664\u6570\u636E
    const newKeys =
      direction === "right"
        ? [...targetKeys, moveKeys]
        : targetKeys.filter((key: any) => !moveKeys.includes(key));
    setTargetKeys([...newKeys]);
    setTargetKeys([]);
  };

  const handleSelectChange = (
    sourceSelectedKeys: any[],
    targetSelectedKeys: any[],
  ) => {
    // \u8BBE\u7F6E\u65B0\u7684\u6570\u636E
    const selectedKeysArr = filterRepeatList([
      ...sourceSelectedKeys,
      ...targetSelectedKeys,
    ]);
    const targetKeysArr = filterRepeatList([
      ...targetKeys,
      ...sourceSelectedKeys,
      ...selectedKeys,
    ]);
    const formItemArr = filterRepeatList([
      ...targetKeys,
      ...sourceSelectedKeys,
      ...selectedKeys,
    ]);
    setSelectedKeys([...selectedKeysArr]);
    setTargetKeys([...targetKeysArr]);
    // \u540C\u6B65\u4E3A\u4E00\u4E2Aselect\u8BBE\u7F6E\u76F8\u540C\u7684\u72B6\u6001 select\u9009\u4E2D
    formRef.current!.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, formItemArr),
    });
  };

  const handleModalOk = () => {
    formRef.current!.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, targetKeys),
    });
    setVisible(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    transferOkCallBack && transferOkCallBack();
  };

  return (
    <>
      <Form.Item>
        <div className={styles.transferBox} ref={transferBox}>
          <Modal
            width={1000}
            title="\u7A7F\u68AD\u6846"
            getContainer={transferBox?.current}
            visible={visible}
            okText="\u786E\u5B9A"
            cancelText="\u53D6\u6D88"
            onCancel={() => setVisible(false)}
            onOk={() => handleModalOk()}
            forceRender={true}
            centered={true}
            maskClosable={false}
            bodyStyle={{ paddingBottom: 0 }}
            {...modalProps}
          >
            <Transfer
              listStyle={{ height: 500 }}
              style={{ position: "relative" }}
              operationStyle={{
                position: "absolute",
                top: 200,
                visibility: "hidden",
              }}
              showSearch
              titles={[
                <Checkbox
                  checked={false}
                  onClick={() =>
                    setTargetKeys(originData.map((item: any) => item.key))
                  }
                />,
                <a
                  href="#"
                  onClick={() => {
                    setTargetKeys([]);
                    setSelectedKeys([]);
                  }}
                >
                  \u6E05\u7A7A
                </a>,
              ]}
              selectAllLabels={[
                "\u5168\u90E8",
                <span>
                  {" "}
                  \u5DF2\u9009{targetKeys.length ?? "--"}/{originData.length ?? "--"}
                </span>,
              ]}
              showSelectAll={false}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={(a, b, c) => handleChange(a, b, c)}
              onSelectChange={(a, b) => handleSelectChange(a, b)}
              render={(item) => item.title as string}
              oneWay
              {...transferProps}
              dataSource={originData}
            />
          </Modal>
        </div>
      </Form.Item>
      <Form.Item
        name={falseSelectItmeName}
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 0 }}
      >
        <Select
          mode="multiple"
          style={{ width: "0%", display: "none" }}
          labelInValue
          options={
            [
              // { label: "t", value: 1 },
              // { label: "a", value: 2 }
            ]
          }
        />
      </Form.Item>
    </>
  );
};

export default TransferForm;`,J=`.transferBox {
  :global {
    .ant-transfer {
      .ant-transfer-list:first-child {
        width: 640px;
        box-shadow: inset 0px 0px 0px 10px #f0f2f5;

        .ant-transfer-list-header {
          position: absolute;
          top: 58px;
          margin: 0px 20px;
          width: 480px;
          height: 60px;
          border-bottom-color: transparent;

          .ant-transfer-list-header-title {
            padding-right: 8px;
          }

          .ant-transfer-list-header-selected {
            flex: 0 0 128px;
          }

          .ant-transfer-list-header-dropdown {
            display: none;
          }

          .ant-transfer-list-checkbox {
            flex: 0 0 20px;
          }
        }

        .ant-transfer-list-body {
          background: #f0f2f5;

          .ant-transfer-list-content {
            margin-top: 50px;
            padding: 20px;
            padding-top: 0;
            width: 520px;
            height: 200px;
            border-top: 1px solid #ccc;
            border-top-color: transparent;

            .ant-transfer-list-content-item {
              flex-direction: row-reverse;
            }
          }
        }

        .ant-transfer-list-body-search-wrapper {
          padding: 12px 21px;
          background: #f0f2f5;
          text-align: center;

          .ant-input-affix-wrapper {
            width: 480px;
            border-color: transparent;
          }
        }
      }

      .ant-transfer-list:last-child {
        width: 540px;

        .ant-transfer-list-body {
          .ant-transfer-list-body-search-wrapper {
            display: none;
          }
        }

        .ant-transfer-list-content-item-remove {
          color: #1348a2;
        }
      }

      .ant-transfer-list-content-item {
        background-color: #fff !important;
      }
    }
  }
}`,se=`import TransferHookForm from "./components/hook";
import React, { useRef, useState, useEffect } from "react";
import { Form, Button } from "antd";
import { Card } from "antd";

const TransferDemo = () => {
  // const TransferRef = useRef(null)
  const [form] = Form.useForm();
  const [mockData, setMockData] = useState<any>([]);

  const TransferRef = useRef<React.ElementRef<typeof TransferHookForm>>(null!);

  useEffect(() => {
    const initData = Array.from({
      length: 20,
    }).map((_, i) => ({
      key: i.toString(),
      title: \`content\${i + 1}\`,
      description: \`description of content\${i + 1}\`,
    }));
    setMockData(initData);

    // init data need asynchronous for waiting formRef init
    setTimeout(function () {
      form.setFieldsValue({
        test: [{ lable: "sxx", value: 1, key: 1 }],
      });
      TransferRef.current.setData(["1", "2"]);
    }, 0);
  }, [form]);

  const testData = () => {
    const initData = Array.from({
      length: 10,
    }).map((_, i) => ({
      key: i.toString(),
      title: \`content\${i + 1}\`,
      description: \`description of content\${i + 1}\`,
    }));
    setMockData(initData);
  };

  const transferOkCallBack = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { getData } = TransferRef.current;
    console.log(form?.getFieldValue("test"));
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <h1>
          <button
            onClick={() => {
              TransferRef.current.useVisible(true);
            }}
          >
            \u6253\u5F00\u7A7F\u68AD\u6846
          </button>
        </h1>
        <h1>
          <button onClick={() => testData()}>\u8BBE\u7F6E\u65B0\u7684\u6D4B\u8BD5\u6570\u636E</button>
        </h1>
        <Form form={form} onFinish={onFinish}>
          <Form.Item style={{ display: "inline-block" }}>
            <TransferHookForm
              formRef={form}
              originData={mockData}
              ref={TransferRef}
              transferOkCallBack={() => transferOkCallBack()}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default TransferDemo;`,o=`/* eslint-disable react/jsx-key */
import { Transfer, Checkbox, Modal } from "antd";
import React, {
  useState,
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
  Ref,
} from "react";
import styles from "../index.less";
import { Form, Select } from "antd";
import type { FormInstance } from "antd/es/form";
import type { ModalProps } from "antd/es/modal";
import type { TransferProps } from "antd/es/transfer";

export interface Iprops {
  /**\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03\u51FD\u6570 */
  transferOkCallBack: () => void;
  /**\u521D\u59CB\u5316\u6240\u6709\u7684\u6570\u636E\u6E90 */
  originData: any[];
  /**\u5916\u754C\u4F20\u5165\u7684Antd-form-ref */
  formRef: FormInstance;
  /**\u540C\u6B65\u53D8\u52A8\u7684select formItem name */
  falseSelectItmeName?: string;
  /**\u6A21\u6001\u6846\u7684\u5176\u4ED6props */
  modalProps?: ModalProps;
  /**\u7A7F\u68AD\u6846\u7684\u5176\u4ED6props */
  transferProps?: TransferProps<any>;
  [props: string]: any;
}

export interface IHandle {
  getData: () => [number[], number[]]
  setData: (arr: any) => void
  useVisible: (bool: boolean | ((prevState: boolean) => boolean)) => void
}

// \u6253\u5E73\u6570\u7EC4
const flattenDeep: any = (arr: any) =>
  Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr];
const filterRepeatList = (arr: any) => [...new Set([...arr])];
// \u627E\u5230\u6539\u53D8\u9879\u7684\u5168\u90E8\u4FE1\u606F
const findAllMessage = (originArr: any, keyArr: any) => {
  const arr: any[] = [];
  keyArr.forEach((item: any) => {
    arr.push(originArr.filter((ele: any) => ele.key == item));
  });
  return flattenDeep(arr);
};


const TransferForm: React.ForwardRefRenderFunction<IHandle, Iprops> = (props, TransferRef: any) => {
  const [targetKeys, setTargetKeys] = useState<any>([]);
  const [selectedKeys, setSelectedKeys] = useState<any>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const transferBox = useRef<any>(null!);

  const {
    transferOkCallBack,
    originData = [],
    formRef,
    modalProps,
    transferProps,
    falseSelectItmeName = "test",
  } = props;

  useEffect(() => {
    (document.getElementsByClassName("ant-input")[0] as any).placeholder =
      "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9";
  }, []);

  // \u5F53\u91CD\u65B0\u8BBE\u7F6E\u6570\u636E\u6E90 \u60C5\u51B5\u6240\u6709\u6570\u636E
  useEffect(() => {
    setTargetKeys([]);
    setSelectedKeys([]);
    formRef.setFieldsValue({
      [falseSelectItmeName]: [],
    });
  }, [falseSelectItmeName, formRef, originData.length]);

  // \u66B4\u9732\u7ED9ref\u7684\u63A5\u53E3
  useImperativeHandle(TransferRef, () => ({
    getData: () => {
      return [targetKeys, originData];
    },
    setData: (arr: any) => {
      setTargetKeys(arr);
    },
    useVisible: (bool: boolean) => {
      setVisible(bool);
    },
  }));

  const handleChange = (
    newTargetKeys: any[],
    direction: string,
    moveKeys: any,
  ) => {
    // \u5220\u9664\u6570\u636E
    const newKeys =
      direction === "right"
        ? [...targetKeys, moveKeys]
        : targetKeys.filter((key: any) => !moveKeys.includes(key));
    setTargetKeys([...newKeys]);
    setSelectedKeys([]);
  };

  const handleSelectChange = (
    sourceSelectedKeys: any[],
    targetSelectedKeys: any[],
  ) => {
    // \u8BBE\u7F6E\u65B0\u7684\u6570\u636E
    const selectedKeysArr = filterRepeatList([
      ...sourceSelectedKeys,
      ...targetSelectedKeys,
    ]);
    const targetKeysArr = filterRepeatList([
      ...targetKeys,
      ...sourceSelectedKeys,
      ...selectedKeys,
    ]);
    const formItemArr = filterRepeatList([
      ...targetKeys,
      ...sourceSelectedKeys,
      ...selectedKeys,
    ]);
    setSelectedKeys([...selectedKeysArr]);
    setTargetKeys([...targetKeysArr]);
    // \u540C\u6B65\u4E3A\u4E00\u4E2Aselect\u8BBE\u7F6E\u76F8\u540C\u7684\u72B6\u6001 select\u9009\u4E2D
    formRef.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, formItemArr),
    });
  };

  const handleModalOk = () => {
    formRef.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, targetKeys),
    });
    setVisible(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    transferOkCallBack && transferOkCallBack();
  };

  return (
    <>
      <Form.Item>
        <div className={styles.transferBox} ref={transferBox}>
          <Modal
            width={1000}
            title="\u7A7F\u68AD\u6846"
            getContainer={transferBox?.current}
            visible={visible}
            okText="\u786E\u5B9A"
            cancelText="\u53D6\u6D88"
            onCancel={() => setVisible(false)}
            onOk={() => handleModalOk()}
            forceRender={true}
            centered={true}
            maskClosable={false}
            bodyStyle={{ paddingBottom: 0 }}
            {...modalProps}
          >
            <Transfer
              listStyle={{ height: 500 }}
              style={{ position: "relative" }}
              operationStyle={{
                position: "absolute",
                top: 200,
                visibility: "hidden",
              }}
              showSearch
              titles={[
                <Checkbox
                  checked={false}
                  onClick={() =>
                    setTargetKeys(originData.map((item: any) => item.key))
                  }
                />,
                <a
                  href="#"
                  onClick={() => {
                    setTargetKeys([]);
                    setSelectedKeys([]);
                  }}
                >
                  \u6E05\u7A7A
                </a>,
              ]}
              selectAllLabels={[
                "\u5168\u90E8",
                <span>
                  {" "}
                  \u5DF2\u9009{targetKeys.length ?? "--"}/{originData.length ?? "--"}
                </span>,
              ]}
              showSelectAll={false}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={(a, b, c) => handleChange(a, b, c)}
              onSelectChange={(a, b) => handleSelectChange(a, b)}
              render={(item) => item.title as string}
              oneWay
              {...transferProps}
              dataSource={originData}
            />
          </Modal>
        </div>
      </Form.Item>
      <Form.Item
        name={falseSelectItmeName}
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 0 }}
      >
        <Select
          mode="multiple"
          style={{ width: "0%", display: "none" }}
          labelInValue
          options={[
            { label: "t", value: 1 },
            { label: "a", value: 2 },
          ]}
        />
      </Form.Item>
    </>
  );
};

export default forwardRef(TransferForm);`,i=`import TransferHookForm from "./components/hook";
import React, { useRef, useState, useEffect } from "react";
import { Form, Button } from "antd";
import { Card } from "antd";

const TransferDemo = () => {
  // const TransferRef = useRef(null)
  const [form] = Form.useForm();
  const [mockData, setMockData] = useState<any>([]);
  const TransferRef = useRef<React.ElementRef<typeof TransferHookForm>[]>([]);

  useEffect(() => {
    const initData = Array.from({
      length: 20,
    }).map((_, i) => ({
      key: i.toString(),
      title: \`content\${i + 1}\`,
      description: \`description of content\${i + 1}\`,
    }));
    setMockData(initData);
  }, []);

  const testData = () => {
    const initData = Array.from({
      length: 10,
    }).map((_, i) => ({
      key: i.toString(),
      title: \`content\${i + 1}\`,
      description: \`description of content\${i + 1}\`,
    }));
    setMockData(initData);
  };

  const transferOkCallBack = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { getData } = TransferRef.current[0];
    console.log(form?.getFieldValue("test"));
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <h1>
          <button
            onClick={() => {
              TransferRef.current[0].useVisible(true);
            }}
          >
            \u6253\u5F00\u7A7F\u68AD\u68461
          </button>
        </h1>
        <h1>
          <button
            onClick={() => {
              TransferRef.current[1].useVisible(true);
            }}
          >
            \u6253\u5F00\u7A7F\u68AD\u68462
          </button>
        </h1>
        <h1>
          <button onClick={() => testData()}>\u4E24\u4E2A\u90FD\u8BBE\u7F6E\u65B0\u7684\u6D4B\u8BD5\u6570\u636E</button>
        </h1>
        <h1>\u53EF\u904D\u5386\u751F\u6210\u65E0\u9650\u4E2A</h1>
        <Form form={form} onFinish={onFinish}>
          <Form.Item style={{ display: "inline-block" }}>
            <TransferHookForm
              formRef={form}
              originData={mockData}
              ref={(el) => (TransferRef.current[0] = el!)}
              transferOkCallBack={() => transferOkCallBack()}
            />
          </Form.Item>
          <Form.Item style={{ display: "inline-block" }}>
            <TransferHookForm
              formRef={form}
              originData={mockData}
              ref={(el) => (TransferRef.current[1] = el!)}
              transferOkCallBack={() => transferOkCallBack()}
              falseSelectItmeName="asasd"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default TransferDemo;`,s=`import { Button, Space, Card, Table } from "antd";
import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/lib/table/interface";
import * as ExcelJs from "exceljs";
import {
  generateHeaders,
  saveWorkbook,
  downloadExcel,
  downloadFiles2ZipWithFolder,
  downloadFiles2Zip,
} from "./utils";

interface SimpleDemoProps { }

interface StudentInfo {
  id: number;
  name: string;
  age: number;
  gender: string;
}

const columns: ColumnsType<any> = [
  {
    width: 50,
    dataIndex: "id",
    key: "id",
    title: "ID",
  },
  {
    width: 100,
    dataIndex: "name",
    key: "name",
    title: "\u59D3\u540D",
  },
  {
    width: 50,
    dataIndex: "age",
    key: "age",
    title: "\u5E74\u9F84",
  },
  {
    width: 80,
    dataIndex: "gender",
    key: "gender",
    title: "\u6027\u522B",
  },
];

export default () => {
  const [list, setList] = useState<StudentInfo[]>([]);

  useEffect(() => {
    generateData();
  }, []);

  function generateData() {
    const arr: StudentInfo[] = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        id: i,
        name: \`\u5C0F\u660E\${i}\u53F7\`,
        age: i,
        gender: i % 2 === 0 ? "\u7537" : "\u5973",
      });
    }
    setList(arr);
  }

  function onExportBasicExcel() {
    // \u521B\u5EFA\u5DE5\u4F5C\u7C3F
    const workbook = new ExcelJs.Workbook();
    // \u6DFB\u52A0sheet
    const worksheet = workbook.addWorksheet("demo sheet");
    // \u8BBE\u7F6E sheet \u7684\u9ED8\u8BA4\u884C\u9AD8
    worksheet.properties.defaultRowHeight = 20;
    // \u8BBE\u7F6E\u5217
    worksheet.columns = generateHeaders(columns);
    // \u6DFB\u52A0\u884C
    worksheet.addRows(list);
    // \u5BFC\u51FAexcel
    saveWorkbook(workbook, "simple-demo.xlsx");
  }

  function onExportBasicExcelWithStyle() {
    // \u521B\u5EFA\u5DE5\u4F5C\u7C3F
    const workbook = new ExcelJs.Workbook();
    // \u6DFB\u52A0sheet
    const worksheet = workbook.addWorksheet("demo sheet");
    // \u8BBE\u7F6E sheet \u7684\u9ED8\u8BA4\u884C\u9AD8
    worksheet.properties.defaultRowHeight = 20;
    // \u8BBE\u7F6E\u5217
    worksheet.columns = generateHeaders(columns);
    // \u7ED9\u8868\u5934\u6DFB\u52A0\u80CC\u666F\u8272\u3002\u56E0\u4E3A\u8868\u5934\u662F\u7B2C\u4E00\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7 getRow(1) \u6765\u83B7\u53D6\u8868\u5934\u8FD9\u4E00\u884C
    const headerRow = worksheet.getRow(1);
    // \u76F4\u63A5\u7ED9\u8FD9\u4E00\u884C\u8BBE\u7F6E\u80CC\u666F\u8272
    // headerRow.fill = {
    //   type: 'pattern',
    //   pattern: 'solid',
    //   fgColor: {argb: 'dff8ff'},
    // }
    // \u901A\u8FC7 cell \u8BBE\u7F6E\u6837\u5F0F\uFF0C\u66F4\u7CBE\u51C6
    headerRow.eachCell((cell, colNum) => {
      // \u8BBE\u7F6E\u80CC\u666F\u8272
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "dff8ff" },
      };
      // \u8BBE\u7F6E\u5B57\u4F53
      cell.font = {
        bold: true,
        italic: true,
        size: 12,
        name: "\u5FAE\u8F6F\u96C5\u9ED1",
        color: { argb: "ff0000" },
      };
      // \u8BBE\u7F6E\u5BF9\u9F50\u65B9\u5F0F
      cell.alignment = {
        vertical: "middle",
        horizontal: "left",
        wrapText: false,
      };
    });
    // \u6DFB\u52A0\u884C
    const rows = worksheet.addRows(list);
    // \u8BBE\u7F6E\u6BCF\u884C\u7684\u6837\u5F0F
    rows?.forEach((row) => {
      // \u8BBE\u7F6E\u5B57\u4F53
      row.font = {
        size: 11,
        name: "\u5FAE\u8F6F\u96C5\u9ED1",
      };
      // \u8BBE\u7F6E\u5BF9\u9F50\u65B9\u5F0F
      row.alignment = {
        vertical: "middle",
        horizontal: "left",
        wrapText: false,
      };
    });
    // \u5BFC\u51FAexcel
    saveWorkbook(workbook, "simple-demo.xlsx");
  }

  function onExportExcel() {
    downloadExcel({
      filename: "test",
      sheets: [
        {
          sheetName: "test",
          columns: columns,
          dataSource: list,
        },
      ],
    });
  }

  function onExportZip() {
    downloadFiles2Zip({
      zipName: "\u538B\u7F29\u5305",
      files: [
        {
          filename: "test",
          sheets: [
            {
              sheetName: "test",
              columns: columns,
              dataSource: list,
            },
            {
              sheetName: "test2",
              columns: columns,
              dataSource: list,
            },
          ],
        },
        {
          filename: "test2",
          sheets: [
            {
              sheetName: "test",
              columns: columns,
              dataSource: list,
            },
          ],
        },
        {
          filename: "test3",
          sheets: [
            {
              sheetName: "test",
              columns: columns,
              dataSource: list,
            },
          ],
        },
      ],
    });
  }

  function onExportFolderZip() {
    downloadFiles2ZipWithFolder({
      zipName: "\u538B\u7F29\u5305",
      folders: [
        {
          folderName: "\u6587\u4EF6\u59391",
          files: [
            {
              filename: "test",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
            {
              filename: "test2",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
          ],
        },
        {
          folderName: "\u6587\u4EF6\u59392",
          files: [
            {
              filename: "test",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
            {
              filename: "test2",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
          ],
        },
        {
          folderName: "\u6587\u4EF6\u59392/\u6587\u4EF6\u59392-1",
          files: [
            {
              filename: "test",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
            {
              filename: "test2",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
          ],
        },
        {
          folderName: "\u6587\u4EF6\u59392/\u6587\u4EF6\u59392-1/\u6587\u4EF6\u59392-1-1",
          files: [
            {
              filename: "test",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
            {
              filename: "test2",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
          ],
        },
        {
          folderName: "",
          files: [
            {
              filename: "test",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
                {
                  sheetName: "test2",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
            {
              filename: "test2",
              sheets: [
                {
                  sheetName: "test",
                  columns: columns,
                  dataSource: list,
                },
              ],
            },
          ],
        },
      ],
    });
  }

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Space align="center" direction="horizontal">
          <Button type={"primary"} onClick={onExportBasicExcel}>
            \u5BFC\u51FAexcel
          </Button>
          <Button
            type={"primary"}
            onClick={onExportBasicExcelWithStyle}
          >
            \u5BFC\u51FA\u5E26\u6837\u5F0Fexcel
          </Button>
          <Button type={"primary"} onClick={onExportExcel}>
            \u5C01\u88C5\u65B9\u6CD5\u5BFC\u51FAexcel
          </Button>
          <Button type={"primary"} onClick={onExportZip}>
            \u5BFC\u51FAzip
          </Button>
          <Button type={"primary"} onClick={onExportFolderZip}>
            \u5BFC\u51FA\u5206\u6587\u4EF6\u5939zip
          </Button>
        </Space>
        <Table columns={columns} dataSource={list} />
      </Card>
    </>
  );
};`,A=`import type { ColumnType } from "antd/es/table/interface";
// @ts-ignore
import { saveAs } from "file-saver";
import * as ExcelJs from "exceljs";
import type { Workbook, Worksheet, Row, Cell } from "exceljs";
import JsZip from "jszip";

export interface IDownloadFiles2Zip {
  // \u538B\u7F29\u5305\u7684\u6587\u4EF6\u540D
  zipName: string;
  files: IDownloadExcel[];
}

export interface IDownloadFiles2ZipWithFolder {
  zipName: string;
  folders: IFolder[];
}

export interface IFolder {
  folderName: string;
  files: IDownloadExcel[];
}

export interface IDownloadExcel {
  filename: string;
  sheets: ISheet[];
}

export interface ISheet {
  // sheet \u7684\u540D\u5B57
  sheetName: string;
  // \u8FD9\u4E2A sheet \u4E2D\u8868\u683C\u7684 column\uFF0C\u7C7B\u578B\u540C antd \u7684 column
  columns: ColumnType<any>[];
  // \u8868\u683C\u7684\u6570\u636E
  dataSource: any[];
}

export interface ITableHeader {
  header: string;
  // \u7528\u4E8E\u6570\u636E\u5339\u914D\u7684 key
  key: string;
  // \u5217\u5BBD
  width: number;
  // \u7236\u7EA7\u7684 key
  parentKey?: string;
  children?: ITableHeader[];
}

export interface IStyleAttr {
  color?: string;
  fontSize?: number;
  horizontal?:
    | "fill"
    | "distributed"
    | "justify"
    | "center"
    | "left"
    | "right"
    | "centerContinuous"
    | undefined;
  bold?: boolean;
}

// \u9ED8\u8BA4\u7684\u5217\u5BBD
export const DEFAULT_COLUMN_WIDTH = 20;
// \u9ED8\u8BA4\u884C\u9AD8
export const DEFAULT_ROW_HEIGHT = 20;

/**
 * \u4E0B\u8F7D\u5BFC\u51FA\u7B80\u5355\u7684\u8868\u683C
 * @param params
 */
export function downloadExcel(params: IDownloadExcel) {
  console.log({ params });
  // \u521B\u5EFA\u5DE5\u4F5C\u7C3F
  const workbook = new ExcelJs.Workbook();
  params?.sheets?.forEach((sheet) => handleEachSheet(workbook, sheet));
  saveWorkbook(workbook, \`\${params.filename}.xlsx\`);
}

/**
 * \u5BFC\u51FA\u591A\u4E2A\u6587\u4EF6\u4E3Azip\u538B\u7F29\u5305
 */
export async function downloadFiles2Zip(params: IDownloadFiles2Zip) {
  const zip = new JsZip();
  // \u5F85\u6BCF\u4E2A\u6587\u4EF6\u90FD\u5199\u5165\u5B8C\u4E4B\u540E\u518D\u751F\u6210 zip \u6587\u4EF6
  const promises = params?.files?.map(
    async (param) => await handleEachFile(param, zip, ""),
  );
  await Promise.all(promises);
  zip.generateAsync({ type: "blob" }).then((blob) => {
    saveAs(blob, \`\${params.zipName}.zip\`);
  });
}

/**
 * \u5BFC\u51FA\u652F\u6301\u591A\u7EA7\u6587\u4EF6\u5939\u7684\u538B\u7F29\u5305
 * @param params
 */
export async function downloadFiles2ZipWithFolder(
  params: IDownloadFiles2ZipWithFolder,
) {
  const zip = new JsZip();
  const outPromises = params?.folders?.map(
    async (folder) => await handleFolder(zip, folder),
  );
  await Promise.all(outPromises);
  zip.generateAsync({ type: "blob" }).then((blob) => {
    saveAs(blob, \`\${params.zipName}.zip\`);
  });
}

async function handleFolder(zip: JsZip, folder: IFolder) {
  console.log({ folder });
  const folderPromises: Promise<any>[] = [];
  const promises = folder?.files?.map(
    async (param) => await handleEachFile(param, zip, folder.folderName),
  );
  await Promise.all([...promises, ...folderPromises]);
}

async function handleEachFile(
  param: IDownloadExcel,
  zip: JsZip,
  folderName: string,
) {
  // \u521B\u5EFA\u5DE5\u4F5C\u7C3F
  const workbook = new ExcelJs.Workbook();
  param?.sheets?.forEach((sheet) => handleEachSheet(workbook, sheet));
  // \u751F\u6210 blob
  const data = await workbook.xlsx.writeBuffer();
  const blob = new Blob([data], { type: "" });
  if (folderName) {
    zip.folder(folderName)?.file(\`\${param.filename}.xlsx\`, blob);
  } else {
    // \u5199\u5165 zip \u4E2D\u4E00\u4E2A\u6587\u4EF6
    zip.file(\`\${param.filename}.xlsx\`, blob);
  }
}

function handleEachSheet(workbook: Workbook, sheet: ISheet) {
  // \u6DFB\u52A0sheet
  const worksheet = workbook.addWorksheet(sheet.sheetName);
  // \u8BBE\u7F6E sheet \u7684\u9ED8\u8BA4\u884C\u9AD8\u3002\u8BBE\u7F6E\u9ED8\u8BA4\u884C\u9AD8\u8DDF\u81EA\u52A8\u6491\u5F00\u5355\u5143\u683C\u51B2\u7A81
  // worksheet.properties.defaultRowHeight = 20;
  // \u8BBE\u7F6E\u5217
  worksheet.columns = generateHeaders(sheet.columns);
  handleHeader(worksheet);
  // handleData(worksheet, sheet);
  handleDataWithRender(worksheet, sheet);
}

export function handleHeader(worksheet: Worksheet) {
  // \u7ED9\u8868\u5934\u6DFB\u52A0\u80CC\u666F\u8272\u3002\u56E0\u4E3A\u8868\u5934\u662F\u7B2C\u4E00\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7 getRow(1) \u6765\u83B7\u53D6\u8868\u5934\u8FD9\u4E00\u884C
  const headerRow = worksheet.getRow(1);
  headerRow.height = 22;
  // \u901A\u8FC7 cell \u8BBE\u7F6E\u6837\u5F0F\uFF0C\u66F4\u7CBE\u51C6
  headerRow.eachCell((cell) =>
    addCellStyle(cell, { color: "dff8ff", fontSize: 12, horizontal: "left" }),
  );
}

export function handleData(worksheet: Worksheet, sheet: ISheet) {
  // \u6DFB\u52A0\u884C
  const rows = worksheet.addRows(sheet?.dataSource);
  // \u8BBE\u7F6E\u6BCF\u884C\u7684\u6837\u5F0F
  addStyleToData(rows);
}

/**
 * \u5982\u679C column \u6709 render \u51FD\u6570\uFF0C\u5219\u4EE5 render \u6E32\u67D3\u7684\u7ED3\u679C\u663E\u793A
 * @param worksheet
 * @param sheet
 */
function handleDataWithRender(worksheet: Worksheet, sheet: ISheet) {
  const { dataSource, columns } = sheet;
  const rowsData = dataSource?.map((data) => {
    return columns?.map((column) => {
      // @ts-ignore
      const renderResult = column?.render?.(data[column.dataIndex], data);
      if (renderResult) {
        // \u5982\u679C\u4E0D\u662F object \u8BF4\u660E\u6CA1\u5305\u88F9\u6807\u7B7E\uFF0C\u662F\u57FA\u672C\u7C7B\u578B\u76F4\u63A5\u8FD4\u56DE
        if (typeof renderResult !== "object") {
          return renderResult;
        }
        // \u5982\u679C\u662F object \u8BF4\u660E\u5305\u88F9\u4E86\u6807\u7B7E\uFF0C\u9010\u7EA7\u53D6\u51FA\u503C
        return getValueFromRender(renderResult);
      }
      // @ts-ignore
      return data[column.dataIndex];
    });
  });
  console.log({ rowsData });
  // \u6DFB\u52A0\u884C
  const rows = worksheet.addRows(rowsData);
  // \u8BBE\u7F6E\u6BCF\u884C\u7684\u6837\u5F0F
  addStyleToData(rows);
}

// \u9012\u5F52\u53D6\u51FA render \u91CC\u7684\u503C
// @ts-ignore
function getValueFromRender(renderResult: any) {
  if (renderResult?.type) {
    const children = renderResult?.props?.children;
    if (children?.type) {
      return getValueFromRender(children);
    } else {
      return children;
    }
  }
  return "";
}

function addStyleToData(rows: Row[]) {
  // \u8BBE\u7F6E\u6BCF\u884C\u7684\u6837\u5F0F
  rows?.forEach((row) => {
    // \u8BBE\u7F6E\u5B57\u4F53
    // eslint-disable-next-line no-param-reassign
    row.font = {
      size: 11,
      name: "\u5FAE\u8F6F\u96C5\u9ED1",
    };
    // \u8BBE\u7F6E\u5BF9\u9F50\u65B9\u5F0F
    // eslint-disable-next-line no-param-reassign
    row.alignment = {
      vertical: "middle",
      horizontal: "left",
      wrapText: true,
    };
  });
}

export function saveWorkbook(workbook: Workbook, fileName: string) {
  // \u5BFC\u51FA\u6587\u4EF6
  workbook.xlsx.writeBuffer().then((data: any) => {
    const blob = new Blob([data], { type: "" });
    saveAs(blob, fileName);
  });
}

// \u6839\u636E antd \u7684 column \u751F\u6210 exceljs \u7684 column
export function generateHeaders(columns: any[]) {
  return columns?.map((col) => {
    const obj: ITableHeader = {
      // \u663E\u793A\u7684 name
      header: col.title,
      // \u7528\u4E8E\u6570\u636E\u5339\u914D\u7684 key
      key: col.dataIndex,
      // \u5217\u5BBD
      width:
        col.width / 5 > DEFAULT_COLUMN_WIDTH
          ? col.width / 5
          : DEFAULT_COLUMN_WIDTH,
    };
    if (col.children) {
      obj.children = col.children?.map((item: any) => ({
        key: item.dataIndex,
        header: item.title,
        width: item.width,
        parentKey: col.dataIndex,
      }));
    }
    return obj;
  });
}

export function getColumnNumber(width: number) {
  // \u9700\u8981\u7684\u5217\u6570\uFF0C\u5411\u4E0A\u53D6\u6574
  return Math.ceil(width / DEFAULT_COLUMN_WIDTH);
}

export function addCellStyle(cell: Cell, attr?: IStyleAttr) {
  const { color, fontSize, horizontal, bold } = attr || {};
  // eslint-disable-next-line no-param-reassign
  cell.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: color },
  };
  // eslint-disable-next-line no-param-reassign
  cell.font = {
    bold: bold ?? true,
    size: fontSize ?? 11,
    name: "\u5FAE\u8F6F\u96C5\u9ED1",
  };
  // eslint-disable-next-line no-param-reassign
  cell.alignment = {
    vertical: "middle",
    wrapText: true,
    horizontal: horizontal ?? "left",
  };
}

export function addHeaderStyle(row: Row, attr?: IStyleAttr) {
  // eslint-disable-next-line no-param-reassign
  row.height = DEFAULT_ROW_HEIGHT;
  row.eachCell((cell) => addCellStyle(cell, attr));
}

// \u5408\u5E76\u884C\u548C\u5217\uFF0C\u7528\u4E8E\u5904\u7406\u8868\u5934\u5408\u5E76
export function mergeColumnCell(
  headers: ITableHeader[],
  rowHeader1: Row,
  rowHeader2: Row,
  nameRow1: string[],
  nameRow2: string[],
  worksheet: Worksheet,
) {
  // \u5F53\u524D index \u7684\u6307\u9488
  let pointer = -1;
  nameRow1.forEach((name, index) => {
    // \u5F53 index \u5C0F\u4E8E\u6307\u9488\u65F6\uFF0C\u8BF4\u660E\u8FD9\u4E00\u5217\u5DF2\u7ECF\u88AB\u5408\u5E76\u8FC7\u4E86\uFF0C\u4E0D\u80FD\u518D\u5408\u5E76
    if (index <= pointer) return;
    // \u662F\u5426\u5E94\u8BE5\u5217\u5408\u5E76
    const shouldVerticalMerge = name === nameRow2[index];
    // \u662F\u5426\u5E94\u8BE5\u884C\u5408\u5E76
    const shouldHorizontalMerge = index !== nameRow1.lastIndexOf(name);
    pointer = nameRow1.lastIndexOf(name);
    if (shouldVerticalMerge && shouldHorizontalMerge) {
      // \u4E24\u4E2A\u65B9\u5411\u90FD\u5408\u5E76
      worksheet.mergeCells(
        Number(rowHeader1.number),
        index + 1,
        Number(rowHeader2.number),
        nameRow1.lastIndexOf(name) + 1,
      );
    } else if (shouldVerticalMerge && !shouldHorizontalMerge) {
      // \u53EA\u5728\u5782\u76F4\u65B9\u5411\u4E0A\u540C\u4E00\u5217\u7684\u4E24\u884C\u5408\u5E76
      worksheet.mergeCells(
        Number(rowHeader1.number),
        index + 1,
        Number(rowHeader2.number),
        index + 1,
      );
    } else if (!shouldVerticalMerge && shouldHorizontalMerge) {
      // \u53EA\u6709\u6C34\u5E73\u65B9\u5411\u540C\u4E00\u884C\u7684\u591A\u5217\u5408\u5E76
      worksheet.mergeCells(
        Number(rowHeader1.number),
        index + 1,
        Number(rowHeader1.number),
        nameRow1.lastIndexOf(name) + 1,
      );
      // eslint-disable-next-line no-param-reassign
      const cell = rowHeader1.getCell(index + 1);
      cell.alignment = { vertical: "middle", horizontal: "center" };
    }
  });
}

// \u884C\u5408\u5E76\u5355\u5143\u683C
export function mergeRowCell(
  headers: ITableHeader[],
  row: Row,
  worksheet: Worksheet,
) {
  // \u5F53\u524D\u5217\u7684\u7D22\u5F15
  let colIndex = 1;
  headers.forEach((header) => {
    const { width, children } = header;
    if (children) {
      children.forEach(() => {
        colIndex += 1;
      });
    } else {
      // \u9700\u8981\u7684\u5217\u6570\uFF0C\u5411\u4E0A\u53D6\u6574
      const colNum = getColumnNumber(width);
      // \u5982\u679C colNum > 1 \u8BF4\u660E\u9700\u8981\u5408\u5E76
      if (colNum > 1) {
        worksheet.mergeCells(
          Number(row.number),
          colIndex,
          Number(row.number),
          colIndex + colNum - 1,
        );
      }
      colIndex += colNum;
    }
  });
}`,I=`import React, { useRef, useEffect, useState } from "react";
import { Card, Button } from "antd";
import styles from "./index.less";
import { exportWord } from "./utils";
import Chart from "./components/chart";
import Table from "./components/table";


const data = {
  p0: "8\u67083\u65E5\uFF0C\u4E2D\u56FD\u4EBA\u6C11\u89E3\u653E\u519B\u4E1C\u90E8\u6218\u533A\u5728\u53F0\u5C9B\u5468\u8FB9\u6D77\u7A7A\u57DF\u7EC4\u7EC7\u5B9E\u6218\u5316\u8054\u5408\u6F14\u8BAD\u3002",
  p1: "\u4ECA\u5929\u4E0A\u5348\uFF0C\u4E1C\u90E8\u6218\u533A\u7A7A\u519B\u51FA\u52A8\u9884\u8B66\u673A\u3001\u6B7C\u51FB\u673A\u3001\u8F70\u70B8\u673A\u7B49\u591A\u578B\u5148\u8FDB\u6218\u673A\uFF0C\u4ECE\u591A\u673A\u573A\u6218\u6597\u8D77\u98DE\u3001\u5230\u591A\u7A7A\u57DF\u6267\u884C\u4EFB\u52A1\uFF0C\u5F00\u5C55\u9884\u8B66\u6307\u6325\u3001\u5E72\u6270\u538B\u5236\u3001\u5175\u529B\u8FDB\u538B\u7B49\u3002\u4E1C\u90E8\u6218\u533A\u6D77\u519B\u5728\u53F0\u5C9B\u5468\u8FB9\u6D77\u57DF\u5F00\u5C55\u8054\u5408\u5C01\u63A7\u548C\u8054\u5408\u5BF9\u9646\u5BF9\u6D77\u6253\u51FB\u7B49\u591A\u8BFE\u76EE\u9488\u5BF9\u6027\u6F14\u7EC3",
  p2: "\u636E\u4E2D\u56FD\u53F0\u6E7E\u7F518\u67084\u65E5\u8BAF \u89E3\u653E\u519B\u4ECA\uFF084\u65E5\uFF09\u8D77\u5728\u53F0\u6E7E\u5468\u8FB9\u7A7A\u6D77\u57DF\u8FDB\u884C\u91CD\u8981\u519B\u4E8B\u6F14\u8BAD\u884C\u52A8\uFF0C\u5E76\u7EC4\u7EC7\u5B9E\u5F39\u5C04\u51FB\u3002\u636E\u53F0\u6E7E\u300A\u8054\u5408\u62A5\u300B\u62A5\u9053\uFF0C\u53F0\u519B\u56E0\u5E94\u60C5\u52BF\uFF0C\u6E05\u6668\u4E0B\u4EE4\u53F0\u519B\u201C\u4E09\u519B\u201D\u5730\u533A\u8F6E\u503C\u7684\u6218\u5907\u90E8\u961F\uFF0C\u5C06\u539F\u5175\u529B\u4E3A\u8FDE\u7EA7\u7684\u201C\u6218\u6597\u961F\u201D\uFF0C\u7ACB\u5373\u63D0\u5347\u4E3A\u8425\u7EA7\u7684\u201C\u7279\u9063\u961F\u201D\uFF0C\u5B9E\u65BD\u5907\u6218\u8B66\u6212\u3002",
  p3: "\u62A5\u9053\u79F0\uFF0C\u89E3\u653E\u519B\u5728\u53F0\u6D77\u5468\u8FB9\u90E8\u7F72\u516D\u4E2A\u64CD\u6F14\u533A\uFF0C\u5C9B\u5185\u7814\u5224\u53EF\u80FD\u6709\u4E1C\u98CE15\u7B49\u5BFC\u5F39\u81EA\u5927\u9646\u5185\u9646\u5347\u7A7A\u98DE\u8D8A\u53F0\u6E7E\u672C\u5C9B\u4E0A\u7A7A\uFF0C\u65B0\u7AF9\u4E50\u5C71\u57FA\u5730\u7684\u957F\u7A0B\u9884\u8B66\u96F7\u8FBE\u4E25\u5BC6\u76D1\u63A7\u5F53\u9762\u9AD8\u4E2D\u4F4E\u7A7A\u72B6\u51B5\uFF0C\u5E76\u4E0E\u4E24\u5EA7\u5C9B\u5185\u9884\u8B66\u4E2D\u5FC3\u8FDE\u7EBF\u3002",
  img: "data:image/png;base64,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",
  dataTble: [
    {
      name: "\u80E1\u5F66\u658C",
      age: 32,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "\u80E1\u5F66",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "\u80E1",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "sss",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "===",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "vvv",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "cc",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "ddd",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "fff",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "eee",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "ggg",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "aaa",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "kkk",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
    {
      name: "lll",
      age: 42,
      address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
    },
  ],
};

const FileExport = () => {
  const [paragraph, setParagraph] = useState<any>([]);
  const charts = useRef<any>(null!);
  const table = useRef<any>(null!);

  useEffect(() => {
    const list = [...document.querySelectorAll(".content")].map((item: any) => {
      return item.innerText;
    });
    setParagraph(list);
  }, []);

  const wordBtn = () => {
    const img = charts.current.getDataURL();
    console.log(paragraph);
    const contentWord = {
      p0: paragraph[0],
      p1: paragraph[1],
      p2: paragraph[2],
      p3: paragraph[3],
      img,
      dataTble: table.current.dataTable(),
    };
    exportWord("word\u5BFC\u51FA", contentWord);
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <div className={styles.container}>
          <Button
            className={styles.btn}
            type="primary"
            onClick={() => wordBtn()}
          >
            \u5BFC\u51FAword
          </Button>
          <div className={styles.word}>
            <h1 className={styles.title}>word\u6587\u6863</h1>
            <p className="content">
              8\u67083\u65E5\uFF0C\u4E2D\u56FD\u4EBA\u6C11\u89E3\u653E\u519B\u4E1C\u90E8\u6218\u533A\u5728\u53F0\u5C9B\u5468\u8FB9\u6D77\u7A7A\u57DF\u7EC4\u7EC7\u5B9E\u6218\u5316\u8054\u5408\u6F14\u8BAD\u3002
            </p>
            <p className="content">
              \u4ECA\u5929\u4E0A\u5348\uFF0C\u4E1C\u90E8\u6218\u533A\u7A7A\u519B\u51FA\u52A8\u9884\u8B66\u673A\u3001\u6B7C\u51FB\u673A\u3001\u8F70\u70B8\u673A\u7B49\u591A\u578B\u5148\u8FDB\u6218\u673A\uFF0C\u4ECE\u591A\u673A\u573A\u6218\u6597\u8D77\u98DE\u3001\u5230\u591A\u7A7A\u57DF\u6267\u884C\u4EFB\u52A1\uFF0C\u5F00\u5C55\u9884\u8B66\u6307\u6325\u3001\u5E72\u6270\u538B\u5236\u3001\u5175\u529B\u8FDB\u538B\u7B49\u3002\u4E1C\u90E8\u6218\u533A\u6D77\u519B\u5728\u53F0\u5C9B\u5468\u8FB9\u6D77\u57DF\u5F00\u5C55\u8054\u5408\u5C01\u63A7\u548C\u8054\u5408\u5BF9\u9646\u5BF9\u6D77\u6253\u51FB\u7B49\u591A\u8BFE\u76EE\u9488\u5BF9\u6027\u6F14\u7EC3
            </p>
            <p className="content">
              \u636E\u4E2D\u56FD\u53F0\u6E7E\u7F518\u67084\u65E5\u8BAF
              \u89E3\u653E\u519B\u4ECA\uFF084\u65E5\uFF09\u8D77\u5728\u53F0\u6E7E\u5468\u8FB9\u7A7A\u6D77\u57DF\u8FDB\u884C\u91CD\u8981\u519B\u4E8B\u6F14\u8BAD\u884C\u52A8\uFF0C\u5E76\u7EC4\u7EC7\u5B9E\u5F39\u5C04\u51FB\u3002\u636E\u53F0\u6E7E\u300A\u8054\u5408\u62A5\u300B\u62A5\u9053\uFF0C\u53F0\u519B\u56E0\u5E94\u60C5\u52BF\uFF0C\u6E05\u6668\u4E0B\u4EE4\u53F0\u519B\u201C\u4E09\u519B\u201D\u5730\u533A\u8F6E\u503C\u7684\u6218\u5907\u90E8\u961F\uFF0C\u5C06\u539F\u5175\u529B\u4E3A\u8FDE\u7EA7\u7684\u201C\u6218\u6597\u961F\u201D\uFF0C\u7ACB\u5373\u63D0\u5347\u4E3A\u8425\u7EA7\u7684\u201C\u7279\u9063\u961F\u201D\uFF0C\u5B9E\u65BD\u5907\u6218\u8B66\u6212\u3002
            </p>
            <p className="content">
              \u62A5\u9053\u79F0\uFF0C\u89E3\u653E\u519B\u5728\u53F0\u6D77\u5468\u8FB9\u90E8\u7F72\u516D\u4E2A\u64CD\u6F14\u533A\uFF0C\u5C9B\u5185\u7814\u5224\u53EF\u80FD\u6709\u4E1C\u98CE15\u7B49\u5BFC\u5F39\u81EA\u5927\u9646\u5185\u9646\u5347\u7A7A\u98DE\u8D8A\u53F0\u6E7E\u672C\u5C9B\u4E0A\u7A7A\uFF0C\u65B0\u7AF9\u4E50\u5C71\u57FA\u5730\u7684\u957F\u7A0B\u9884\u8B66\u96F7\u8FBE\u4E25\u5BC6\u76D1\u63A7\u5F53\u9762\u9AD8\u4E2D\u4F4E\u7A7A\u72B6\u51B5\uFF0C\u5E76\u4E0E\u4E24\u5EA7\u5C9B\u5185\u9884\u8B66\u4E2D\u5FC3\u8FDE\u7EBF\u3002
            </p>
            <Chart ref={charts} />
            <Table ref={table} />
          </div>
        </div>
      </Card>
    </>
  );
};

export default FileExport;`,g=`.container {
  margin: 0 15%;
  .btn {
    margin-bottom: 10px;
  }
  .word {
    padding: 20px;
    border: 1px solid rgb(221, 11, 11);
    .title {
      font-weight: 600;
      font-size: 25px;
    }
    .content {
      font-size: 15px;
      text-align: left;
      text-indent: 2em;
      word-break: break-all;
    }
  }
}`,B=`import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';

const path =
  process.env.APP_ENV === 'development'
    ? \`/word.docx\`
    : \`/my-demo-markdown/word.docx\`;
/**
 * description\uFF1A \u5BFC\u51FAecharts\u56FE\u7247\uFF0C\u683C\u5F0F\u8F6C\u6362
 */
export function base64DataURLToArrayBuffer(dataURL: string) {
  const base64Regex = /^data:image\\/(png|jpg|svg|svg\\+xml);base64,/;
  if (!base64Regex.test(dataURL)) {
    return false;
  }
  const stringBase64 = dataURL.replace(base64Regex, '');
  const binaryString = window.atob(stringBase64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    const ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes.buffer;
}

export function exportWord(title: string, contentWord: object) {
  const ImageModule = require('open-docxtemplater-image-module');
  JSZipUtils.getBinaryContent(path, function(error: any, content: any) {
    // input.docx\u662F\u6A21\u677F\u3002\u6211\u4EEC\u5728\u5BFC\u51FA\u7684\u65F6\u5019\uFF0C\u4F1A\u6839\u636E\u6B64\u6A21\u677F\u6765\u5BFC\u51FA\u5BF9\u5E94\u7684\u6570\u636E
    // \u629B\u51FA\u5F02\u5E38
    if (error) {
      throw error;
    }
    // \u56FE\u7247\u5904\u7406
    const opts: any = {};
    opts.centered = false;
    opts.getImage = (chartId: string) => {
      return base64DataURLToArrayBuffer(chartId);
    };
    opts.getSize = function() {
      //\u81EA\u5B9A\u4E49\u6307\u5B9A\u56FE\u50CF\u5927\u5C0F\uFF0C\u6B64\u5904\u53EF\u52A8\u6001\u8C03\u8BD5\u5404\u522B\u56FE\u7247\u7684\u5927\u5C0F
      return [600, 290];
    };

    const imageModule = new ImageModule(opts);
    // \u521B\u5EFA\u4E00\u4E2APizZip\u5B9E\u4F8B\uFF0C\u5185\u5BB9\u4E3A\u6A21\u677F\u7684\u5185\u5BB9
    const zip = new PizZip(content);
    // \u521B\u5EFA\u5E76\u52A0\u8F7Ddocxtemplater\u5B9E\u4F8B\u5BF9\u8C61
    const doc = new Docxtemplater();
    opts.centered = true; // \u56FE\u7247\u5C45\u4E2D\uFF0C\u5728word\u6A21\u677F\u4E2D\u5B9A\u4E49\u65B9\u5F0F\u4E3A{%image}
    opts.fileType = 'docx';
    doc.attachModule(imageModule);
    doc.loadZip(zip);
    // \u8BBE\u7F6E\u6A21\u677F\u53D8\u91CF\u7684\u503C
    doc.setData(contentWord);
    try {
      // \u7528\u6A21\u677F\u53D8\u91CF\u7684\u503C\u66FF\u6362\u6240\u6709\u6A21\u677F\u53D8\u91CF
      doc.render();
    } catch (error) {
      // \u629B\u51FA\u5F02\u5E38
      const e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
      };
      console.log(
        JSON.stringify({
          error: e,
        }),
      );
      throw error;
    }
    // \u751F\u6210\u4E00\u4E2A\u4EE3\u8868docxtemplater\u5BF9\u8C61\u7684zip\u6587\u4EF6\uFF08\u4E0D\u662F\u4E00\u4E2A\u771F\u5B9E\u7684\u6587\u4EF6\uFF0C\u800C\u662F\u5728\u5185\u5B58\u4E2D\u7684\u8868\u793A\uFF09
    const out = doc.getZip().generate({
      type: 'blob',
      mimeType:
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    // \u5C06\u76EE\u6807\u6587\u4EF6\u5BF9\u8C61\u4FDD\u5B58\u4E3A\u76EE\u6807\u7C7B\u578B\u7684\u6587\u4EF6\uFF0C\u5E76\u547D\u540D
    saveAs(out, title + '.docx');
  });
}`,L=`import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Line } from "@ant-design/plots";

const DemoLine = (props: any, charts: any) => {
  const [data, setData] = useState([]);
  const ref = useRef<any>(null!);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json",
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  useImperativeHandle(charts, () => ({
    downloadImage: () => {
      return ref.current?.downloadImage();
    },
    getDataURL: () => {
      return ref.current?.toDataURL();
    },
  }));

  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
  };

  return (
    <div ref={charts}>
      <Line
        {...config}
        onReady={(plot) => {
          ref.current = plot;
        }}
      />
    </div>
  );
};
export default forwardRef(DemoLine);`,P=`import { Table } from "antd";
import React, { useImperativeHandle, forwardRef } from "react";
const columns = [
  {
    title: "\u59D3\u540D",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "\u5E74\u9F84",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "\u4F4F\u5740",
    dataIndex: "address",
    key: "address",
  },
];
const dataTable = [
  {
    name: "\u80E1\u5F66\u658C",
    age: 32,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "\u80E1\u5F66",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "\u80E1",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "sss",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "===",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "vvv",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "cc",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "ddd",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "fff",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "eee",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "ggg",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "aaa",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "kkk",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
  {
    name: "lll",
    age: 42,
    address: "\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",
  },
];

const TableComponent = (props: any, table: any) => {
  useImperativeHandle(table, () => ({
    dataTable: () => {
      return dataTable;
    },
  }));

  return (
    <Table
      ref={table}
      pagination={false}
      columns={columns}
      dataSource={dataTable}
      scroll={{ y: 500 }}
      bordered
      rowKey={(record) => record.name}
    />
  );
};

export default forwardRef(TableComponent);`,T=`import FilePreView from "./components/FilePreView";
import { useRef } from "react";
import { Upload, Form, Button, Card, Table } from "antd";
import { columns, dataSource } from "./constant";
import React from "react";

const normFile = (e: any) => {
  if (Array.isArray(e)) return e;
  return e?.fileList;
};

const getBase64 = (
  file: Blob,
  cb: (result: string | ArrayBuffer | null) => void,
) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => cb(reader.result));
  reader.readAsDataURL(file);
};

const PdfPage = () => {
  const pdfRef = useRef<any>(null!);
  const [form] = Form.useForm();

  const handlePreviewPdf = ({ originFileObj }: any) => {
    // 1.base64\u65B9\u5F0F\u9884\u89C8
    getBase64(originFileObj, (fileURL: string | ArrayBuffer | null) => {
      pdfRef.current.controlIsShow({
        base64: fileURL,
        originFileObj,
      });
    });
    // 2.src\u65B9\u5F0F\u9884\u89C8 \u901A\u8FC7\u540E\u7AEF\u63A5\u53E3\u83B7\u53D6src\u8DEF\u5F84
    // pdfRef.current.controlIsShow({
    //   src: "http://marsgis.cn/doc/study-gis.pdf",
    // });
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Form form={form}>
          <h2>\u70B9\u51FB\u6587\u4EF6\u540D\u5373\u53EF\u9884\u89C8</h2>
          <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload
              onPreview={(file) => handlePreviewPdf(file)}
              beforeUpload={() => {
                return false;
              }}
              name="file"
              maxCount={10}
            >
              <Button>\u4E0A\u4F20word excel pdf \u56FE\u7247\u7B49\u683C\u5F0F</Button>
            </Upload>
          </Form.Item>
        </Form>
        <FilePreView ref={pdfRef} />
        <Table pagination={false} dataSource={dataSource} columns={columns} />
        ;
      </Card>
    </>
  );
};

export default PdfPage;`,O=`import React, { PureComponent } from "react";
import { Modal, message } from "antd";
import FileView from "./FileView";
import { ExcelRenderer } from "react-excel-renderer";
const txtFileTypes = [
  "txt",
  "json",
  "js",
  "css",
  "java",
  "py",
  "html",
  "jsx",
  "ts",
  "tsx",
  "xml",
  "md",
  "log",
];
const fileAllTypes = ["docx", "xlsx", "png", "jpg", "pdf", ...txtFileTypes];
class FilePreView extends PureComponent<any, any> {
  protected pdfViewRef: React.RefObject<any> = React.createRef();
  constructor(props: any) {
    super(props);
    this.state = {
      modalVisible: false,
      fileType: "",
      excelData: {
        cols: [],
        rows: [],
      },
    };
  }
  //\u663E\u9690\u72B6\u6001\u7684\u6539\u53D8
  controlIsShow = (params: {
    src?: string;
    base64?: string;
    originFileObj?: any;
  }) => {
    const { modalVisible } = this.state;
    const { src, base64, originFileObj } = params;
    const { name } = originFileObj;
    const fileType = name.slice(name.lastIndexOf(".") + 1).toLowerCase();

    if (!fileAllTypes.includes(fileType)) {
      return message.error("\u8BE5\u6587\u4EF6\u4E0D\u652F\u6301\u9884\u89C8");
    }
    if (fileType == "xlsx") {
      ExcelRenderer(originFileObj, (err: Error, resp: any) => {
        this.setState({
          excelData: {
            cols: resp.cols,
            rows: resp.rows,
          },
        });
      });
    }
    this.setState({
      modalVisible: !modalVisible,
      src,
      base64,
      fileType,
    });
  };

  render() {
    const { modalVisible, src, base64, fileType, excelData } = this.state;
    return (
      <Modal
        visible={modalVisible}
        title={fileType + " \u9884\u89C8"}
        onCancel={() => {
          this.setState({
            modalVisible: false,
          });
        }}
        width={1200}
        bodyStyle={{ overflow: "scroll", height: "70vh" }}
        footer={null}
        destroyOnClose={true}
      >
        <div id="file-preview-modal">
          <FileView
            ref={this.pdfViewRef}
            src={src}
            base64={base64}
            fileType={fileType}
            excelData={excelData}
            txtFileTypes={txtFileTypes}
            styles={{
              height: "600px",
            }}
          />
        </div>
      </Modal>
    );
  }
}
export default FilePreView;`,x=`import type { CSSProperties } from "react";
import { PureComponent } from "react";
import style from "./fileView.less";
import cx from "classnames";
import { Skeleton, Image } from "antd";
import { OutTable } from "react-excel-renderer";
import { defaultOptions, renderAsync } from "docx-preview";
import MarkDown from "./MarkDown";
import React from "react";

interface IProps {
  styles?: CSSProperties;
  src?: string;
  base64?: string;
  [onherProps: string]: any;
}

const txtFileTypes = [
  "txt",
  "json",
  "js",
  "css",
  "java",
  "py",
  "html",
  "jsx",
  "ts",
  "tsx",
  "xml",
  "md",
  "log",
];

class FileView extends PureComponent<IProps, any> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      pdfSrc: "",
      loading: true,
      text: "",
    };
  }
  componentDidMount() {
    const { src, base64 } = this.props;
    if (src) {
      this.showPDFBySrc(src);
    } else if (base64) {
      this.showPDFByBase64(base64);
    }
  }
  componentwillUnmount() {
    URL.revokeObjectURL(this.state.pdfSrc);
  }
  //\u901A\u8FC7src\u5C55\u793A
  showPDFBySrc = async (src: string) => {
    try {
      this.setState({
        loading: true,
      });
      this.setState({
        pdfSrc: src,
        loading: false,
      });
    } catch (err) { }
  };

  //base64\u8F6Cblob
  dataURItoBlob = (dataURI: string) => {
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0]; // mime\u7C7B\u578B
    const byteString = atob(dataURI.split(",")[1]); //base64 \u89E3\u7801
    const arrayBuffer = new ArrayBuffer(byteString.length); //\u521B\u5EFA\u7F13\u51B2\u6570\u7EC4
    const intArray = new Uint8Array(arrayBuffer); //\u521B\u5EFA\u89C6\u56FE
    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([intArray], { type: mimeString });
  };

  // \u8F6Cbaffer
  readBuffer = async (file: any): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (loadEvent: any) => resolve(loadEvent.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsArrayBuffer(file);
    });
  };

  // \u8F6C\u6587\u672Cstring
  readText = async (buffer: Buffer): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (loadEvent: any) => resolve(loadEvent.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsText(new Blob([buffer]), "utf-8");
    });
  };

  //\u901A\u8FC7base64\u5C55\u793A
  showPDFByBase64 = async (content: string) => {
    const { fileType } = this.props;
    const blob = this.dataURItoBlob(content);
    const fileUrl = URL.createObjectURL(blob);
    this.setState({
      pdfSrc: fileUrl,
      loading: false,
    });

    if (txtFileTypes.includes(fileType)) {
      const Buffer = await this.readBuffer(blob);
      const text = await this.readText(Buffer);
      this.setState({
        text,
      });
    }

    if (fileType == "docx") {
      renderAsync(
        blob,
        document.getElementById("file-preview-modal") as HTMLDivElement,
        null as unknown as HTMLDivElement,
        {
          className: "docx", // \u9ED8\u8BA4\u548C\u6587\u6863\u6837\u5F0F\u7C7B\u7684\u7C7B\u540D/\u524D\u7F00
          inWrapper: true, // \u542F\u7528\u56F4\u7ED5\u6587\u6863\u5185\u5BB9\u6E32\u67D3\u5305\u88C5\u5668
          ignoreWidth: false, // \u7981\u6B62\u9875\u9762\u6E32\u67D3\u5BBD\u5EA6
          ignoreHeight: false, // \u7981\u6B62\u9875\u9762\u6E32\u67D3\u9AD8\u5EA6
          ignoreFonts: false, // \u7981\u6B62\u5B57\u4F53\u6E32\u67D3
          breakPages: true, // \u5728\u5206\u9875\u7B26\u4E0A\u542F\u7528\u5206\u9875
          ignoreLastRenderedPageBreak: true, //\u7981\u7528lastRenderedPageBreak\u5143\u7D20\u7684\u5206\u9875
          experimental: false, //\u542F\u7528\u5B9E\u9A8C\u6027\u529F\u80FD\uFF08\u5236\u8868\u7B26\u505C\u6B62\u8BA1\u7B97\uFF09
          trimXmlDeclaration: true, //\u5982\u679C\u4E3A\u771F\uFF0Cxml\u58F0\u660E\u5C06\u5728\u89E3\u6790\u4E4B\u524D\u4ECExml\u6587\u6863\u4E2D\u5220\u9664
          debug: false, // \u542F\u7528\u989D\u5916\u7684\u65E5\u5FD7\u8BB0\u5F55
        },
      );
    }
  };

  render() {
    const { styles, className, fileType, txtFileTypes, excelData } = this.props;
    const { loading, pdfSrc, text } = this.state;
    const src = \`\${pdfSrc}\`;

    if (loading) {
      return <Skeleton loading paragraph={{ rows: 10 }} active />;
    }

    if (fileType == "docx") {
      return null;
    }

    if (fileType == "xlsx") {
      return (
        <OutTable
          data={excelData.rows}
          columns={excelData.cols}
          tableClassName={style.ExcelTable2007}
          tableHeaderRowClass={style.heading}
        />
      );
    }

    if (fileType == "png" || fileType == "jpg") {
      return <Image src={src} />;
    }

    if (txtFileTypes.includes(fileType)) {
      const newText = \`
~~~\${fileType}
\${text}
~~~
\`;
      return <MarkDown markdown={newText} />;
    }

    if (fileType == "pdf") {
      return (
        <iframe
          className={cx(style.iframeStyle, className)}
          style={styles}
          src={src}
          title="pdf\u9884\u89C8"
        />
      );
    }

    return (
      <span>\u4E0D\u652F\u6301</span>
    );
  }
}
export default FileView;`,b=`.iframeStyle {
  width: 100%;
  height: 99%;
  border: none;
}

.ExcelTable2007 {
  padding: 10px;
  font-weight: 100;
  font-size: 11pt;
  font-family: Calibri;
  border: 1px solid #b0cbef;
  border-width: 1px 0px 0px 1px;
  border-collapse: collapse;
  border-spacing: 0px;
}

.ExcelTable2007 TH {
  height: 17px;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  background-repeat: repeat-x;
  border: 1px solid #9eb6ce;
  border-width: 0px 1px 1px 0px;
}

.ExcelTable2007 TD {
  padding: 0px 4px 0px 2px;
  background-color: white;
  border: 0px;
  border: 1px solid #d0d7e5;
  border-width: 0px 1px 1px 0px;
}

.ExcelTable2007 TD B {
  font-weight: bold;
  background-color: white;
  border: 0px;
}

.ExcelTable2007 TD.heading {
  font-weight: bold;
  text-align: center;
  background-color: #e4ecf7;
  border: 1px solid #9eb6ce;
  border-width: 0px 1px 1px 0px;
}

.ExcelTable2007 TH.heading {
  background-repeat: none;
}

TH {
  text-align: center;
}`,H=`import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

export default (props: any) => {
  return (
    <ReactMarkdown
      // eslint-disable-next-line react/no-children-prop
      children={props.markdown}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ inline, className, children }) {
          const match = /language-(\\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              // eslint-disable-next-line react/no-children-prop
              children={String(children).replace(/\\n$/, "")}
              style={dracula}
              language={match[1]}
              showLineNumbers
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};`,$=`export const dataSource = [
  {
    key: "1",
    type: "docx",
  },
  {
    key: "2",
    type: "xlsx",
  },
  {
    key: "3",
    type: "png",
  },
  {
    key: "4",
    type: "jpg",
  },
  {
    key: "5",
    type: "pdf",
  },
  {
    key: "6",
    type: "txt",
  },
  {
    key: "7",
    type: "json",
  },
  {
    key: "8",
    type: "js",
  },
  {
    key: "9",
    type: "css",
  },
  {
    key: "10",
    type: "java",
  },
  {
    key: "11",
    type: "py",
  },
  {
    key: "12",
    type: "html",
  },
  {
    key: "13",
    type: "jsx",
  },
  {
    key: "14",
    type: "ts",
  },
  {
    key: "15",
    type: "tsx",
  },
  {
    key: "16",
    type: "xml",
  },
  {
    key: "17",
    type: "md",
  },
  {
    key: "18",
    type: "log",
  },
];

export const columns = [
  {
    title: "\u7C7B\u578B",
    dataIndex: "\u7C7B\u578B",
    key: "key",
    render: () => "\u652F\u6301\u7C7B\u578B",
  },
  {
    title: "\u63CF\u8FF0",
    dataIndex: "type",
    key: "type",
  },
];`,G=`import React from "react";
import { useRef, useEffect } from "react";

import ReactEChart from "./REcharts";

const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  toolbox: {
    show: true,
    top: 20,
    right: 20,
    feature: {
      saveAsImage: {
        name: "\u5C97\u4F4D\u8BA4\u8BC1",
        title: "\u4E0B\u8F7D\u56FE\u7247",
      },
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Email",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Search Engine",
      type: "bar",
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: "series",
      },
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [[{ type: "min" }, { type: "max" }]],
      },
    },
    {
      name: "Baidu",
      type: "bar",
      barWidth: 5,
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: "Google",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: "Bing",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: "Others",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
};

const EchartsReact = () => {
  const echartsRef = useRef<any>(null!);

  useEffect(() => {
    const base64 = echartsRef.current.ref.getDataURL();
    console.log(base64);
  }, []);

  const onChartClick = (params: any) => {
    console.log(params);
  };

  const onChartLegendselectchanged = (params: any) => {
    console.log(params);
  };

  const onEvents = {
    click: onChartClick,
    legendselectchanged: onChartLegendselectchanged,
  };

  return (
    <>
      <ReactEChart
        ref={echartsRef}
        option={option}
        onEvents={onEvents}
      />
    </>
  );
};

export default EchartsReact;`,ie=`import { useRef, useImperativeHandle, forwardRef } from "react";
import type { EChartsReactProps } from "echarts-for-react/lib/types";
import ReactECharts from "echarts-for-react";

const ReactEChart = (props: EChartsReactProps, echartsRef: any) => {
  const ref = useRef<any>(null!);
  useImperativeHandle(echartsRef, () => ({
    ref: ref.current.getEchartsInstance(),
  }));

  return (
    <div ref={echartsRef}>
      <ReactECharts ref={ref} {...props} />
    </div>
  );
};

export default forwardRef(ReactEChart);`,ne=`/* eslint-disable react/jsx-key */
import { useRef } from "react";
import { Card } from "antd";
import React from "react";

const MuitipleRef = () => {
  const list = [...Array(8).keys()];
  const inputRef = useRef([]);
  const handler = (idx: number): any => {
    const next = inputRef.current[idx + 1];
    if (next) {
      (next as any).focus();
    }
  };

  return (
    <Card style={{ margin: 24 }}>
      <div className="App">
        <div className="input_boxes">
          {list.map((x) => (
            <div>
              <input
                key={x}
                ref={(el) => ((inputRef as any).current[x] = el)}
                onChange={handler(x)}
                type="number"
                className="otp_box"
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MuitipleRef;`,ge=`import { useImperativeHandle } from "react";
import { Card } from "antd";
import React from "react";

const Children = (props: { ModalRef: any }) => {
  const { ModalRef } = props;

  useImperativeHandle(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    },
  }));

  return <>Children</>;
};

export default class Father extends React.Component {
  ModalRef: any = React.createRef();
  state = {};
  componentDidMount() {
    console.log(this.ModalRef.current.getData());
  }

  render() {
    return (
      <>
        <Card style={{ margin: 24 }}>
          <Children ModalRef={this.ModalRef} />
        </Card>
      </>
    );
  }
}`,le=`import {
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
} from "react";
import { Card } from "antd";
import React from "react";

const Child = (props: any, ModalRef: any) => {
  useImperativeHandle(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    },
  }));

  return (
    <>
      <div ref={ModalRef}>sss</div>
    </>
  );
};

const Children = forwardRef(Child);

const Father = () => {
  const ModalRef = useRef<any>(null);

  useEffect(() => {
    console.log(ModalRef.current.getData());
  }, []);

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Children ref={ModalRef} />
      </Card>
    </>
  );
};

export default Father;`,te=`import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = () => {
  const [dataset, setDataset] = useState([250, 210, 170, 130, 90]);

  const handleInitChart = () => {
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let body = d3.select('body');
    let svg = body.select('#mainsvg');
    svg.selectAll('g').remove();
    let g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');

    let rectHeight = 30;
    g.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', 20)
      .attr('y', function(d, i) {
        return i * rectHeight;
      })
      .attr('width', function(d) {
        return d;
      })
      .attr('height', rectHeight - 5)
      .attr('fill', 'blue');

    g.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .attr('x', function(d) {
        return 30 + d;
      })
      .attr('y', function(d, i) {
        return i * rectHeight + 15;
      })
      .text(function(d) {
        return d;
      });
  };

  useEffect(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>
        <svg width="1200" height="180" id="mainsvg" className="svgs" />
      </Card>
    </>
  );
};
export default D3;`,ye=`import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = () => {
  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90]);

  var scaleLinear = d3
    .scaleLinear()
    .domain([0, d3.max(dataset)] as number[])
    .range([0, 300]);

  const handleInitChart = () => {
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let body = d3.select('body');
    let svg = body.select('#mainsvg1');
    svg.selectAll('g').remove();
    let g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');

    let rectHeight = 30;
    g.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', 20)
      .attr('y', function(d, i) {
        return i * rectHeight;
      })
      .attr('width', function(d) {
        return scaleLinear(d);
      })
      .attr('height', rectHeight - 5)
      .attr('fill', 'blue');

    g.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .attr('x', function(d) {
        return 30 + scaleLinear(d);
      })
      .attr('y', function(d, i) {
        return i * rectHeight + 15;
      })
      .text(function(d) {
        return d;
      });
  };

  useEffect(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>
        <svg width="1200" height="180" id="mainsvg1" className="svgs" />
      </Card>
    </>
  );
};
export default D3;`,ve=`import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = () => {
  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90]);

  var scaleLinear = d3
    .scaleLinear()
    .domain([0, d3.max(dataset)] as number[])
    .range([0, 250]);

  //\u4E3A\u5750\u6807\u8F74\u5B9A\u4E49\u4E00\u4E2A\u7EBF\u6027\u6BD4\u4F8B\u5C3A
  var xScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset)] as number[])
    .range([0, 250]);
  var xAxis = d3
    .axisBottom(xScale) //\u5B9A\u4E49\u4E00\u4E2Aaxis\uFF0C\u7531bottom\u53EF\u77E5\uFF0C\u662F\u671D\u4E0B\u7684
    .ticks(10); //\u8BBE\u7F6E\u523B\u5EA6\u6570\u76EE

  const handleInitChart = () => {
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let body = d3.select('body');
    let svg = body.select('#mainsvg2');
    svg.selectAll('g').remove();
    let g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');

    let rectHeight = 30;
    g.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', 20)
      .attr('y', function(d, i) {
        return i * rectHeight;
      })
      .attr('width', function(d) {
        return scaleLinear(d);
      })
      .attr('height', rectHeight - 5)
      .attr('fill', 'blue');

    g.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .attr('x', function(d) {
        return 30 + scaleLinear(d);
      })
      .attr('y', function(d, i) {
        return i * rectHeight + 15;
      })
      .text(function(d) {
        return d;
      });

    g.append('g')
      .attr(
        'transform',
        'translate(' + 20 + ',' + dataset.length * rectHeight + ')',
      )
      .call(xAxis);
  };

  useEffect(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>
        <svg width="1200" height="180" id="mainsvg2" className="svgs" />
      </Card>
    </>
  );
};
export default D3;`,Be=`import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = () => {
  const [dataset, setDataset] = useState<number[]>([250, 210, 170, 130, 90]);

  const handleInitChart = () => {
    let body = d3.select('body');
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let svg = body.select('#mainsvg3');
    var width = (svg.attr('width') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u5BBD
    var height = (svg.attr('height') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u957F

    var xScale = d3
      .scaleBand()
      .domain((d3.range(dataset.length) as unknown) as string[])
      .rangeRound([0, width - marge.left - marge.right]);
    var xAxis = d3.axisBottom(xScale);

    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset)] as number[])
      .range([height - marge.top - marge.bottom, 0]);
    var yAxis = d3.axisLeft(yScale);

    svg.selectAll('g').remove();
    let g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');

    var gs = g
      .selectAll('.rect')
      .data(dataset)
      .enter()
      .append('g');

    var rectPadding = 10; //\u77E9\u5F62\u4E4B\u95F4\u7684\u95F4\u9699
    gs.append('rect')
      .attr('x', function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr('y', function(d) {
        return yScale(d);
      })
      .attr('width', function() {
        return xScale.step() - rectPadding;
      })
      .attr('height', function(d) {
        return height - marge.top - marge.bottom - yScale(d);
      })
      .attr('fill', 'blue')
      .on('mouseover', function() {
        var rect = d3
          .select(this)
          .transition()
          .duration(1500) //\u5F53\u9F20\u6807\u653E\u5728\u77E9\u5F62\u4E0A\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u9EC4\u8272
          .attr('fill', 'yellow');
      })
      .on('mouseout', function() {
        var rect = d3
          .select(this)
          .transition()
          .delay(1500)
          .duration(1500) //\u5F53\u9F20\u6807\u79FB\u51FA\u65F6\uFF0C\u77E9\u5F62\u53D8\u6210\u84DD\u8272
          .attr('fill', 'blue');
      });

    gs.append('text')
      .attr('x', function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr('y', function(d) {
        return yScale(d);
      })
      .attr('dx', function() {
        (xScale.step() - rectPadding) / 2;
      })
      .attr('dy', 20)
      .text(function(d) {
        return d;
      });

    gs.append('rect')
      .attr('x', function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr('y', function(d) {
        //\u8FD9\u91CC\u662F\u8981\u6539\u53D8\u7684\uFF0C\u5373\u521D\u59CB\u72B6\u6001
        var min = yScale.domain()[0];
        return yScale(min); //\u53EF\u4EE5\u5F97\u77E5\uFF0C\u8FD9\u91CC\u8FD4\u56DE\u7684\u662F\u6700\u5927\u503C
      })
      .attr('width', function() {
        return xScale.step() - rectPadding;
      })
      .attr('height', function(d) {
        //\u8FD9\u91CC\u8981\u6539\u53D8\uFF0C\u5373\u521D\u59CB\u72B6\u6001
        return 0;
      })
      .attr('fill', 'blue')
      .transition() //\u6DFB\u52A0\u8FC7\u6E21
      .duration(2000) //\u6301\u7EED\u65F6\u95F4
      .delay(function(d, i) {
        //\u5EF6\u8FDF
        return i * 400;
      })
      //.ease(d3.easeElasticInOut)//\u8FD9\u91CC\u8BFB\u8005\u53EF\u4EE5\u81EA\u5DF1\u5C06\u6CE8\u91CA\u53BB\u6389\uFF0C\u770B\u770B\u6548\u679C\uFF08chrome\u6D4F\u89C8\u5668\u4F1A\u62A5\u9519\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u6548\u679C\uFF09
      .attr('y', function(d) {
        //\u56DE\u5230\u6700\u7EC8\u72B6\u6001
        return yScale(d);
      })
      .attr('height', function(d) {
        //\u56DE\u5230\u6700\u7EC8\u72B6\u6001
        return height - marge.top - marge.bottom - yScale(d);
      });

    gs.append('text')
      .attr('x', function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr('y', function(d) {
        var min = yScale.domain()[0];
        return yScale(min);
      })
      .attr('dx', function() {
        (xScale.step() - rectPadding) / 2;
      })
      .attr('dy', 20)
      .text(function(d) {
        return d;
      })
      .transition()
      .duration(2000)
      .delay(function(d, i) {
        return i * 400;
      })
      //.ease(d3.easeElasticInOut)
      .attr('y', function(d) {
        return yScale(d);
      });
  };

  useEffect(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>
        <svg width="1200" height="180" id="mainsvg3" className="svgs" />
      </Card>
    </>
  );
};
export default D3;`,Qe=`import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = () => {
  const [dataset, setDataset] = useState<number[]>([30, 10, 43, 55, 13]);

  const handleInitChart = () => {
    let body = d3.select('body');
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let svg = body.select('#mainsvg3');
    var width = (svg.attr('width') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u5BBD
    var height = (svg.attr('height') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u957F
    var g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');
    //\u8BBE\u7F6E\u4E00\u4E2Acolor\u7684\u989C\u8272\u6BD4\u4F8B\u5C3A\uFF0C\u4E3A\u4E86\u8BA9\u4E0D\u540C\u7684\u6247\u5F62\u5448\u73B0\u4E0D\u540C\u7684\u989C\u8272
    var colorScale = d3
      .scaleOrdinal()
      .domain(d3.range(dataset.length))
      .range(d3.schemeCategory10);

    //\u65B0\u5EFA\u4E00\u4E2A\u997C\u72B6\u56FE
    var pie = d3.pie();
    //\u65B0\u5EFA\u4E00\u4E2A\u5F27\u5F62\u751F\u6210\u5668
    var innerRadius = 0; //\u5185\u534A\u5F84
    var outerRadius = 100; //\u5916\u534A\u5F84
    var arc_generator = d3
      .arc()
      .innerRadius(0)
      .outerRadius(100);

    var pieData = pie(dataset);
    console.log(pieData);

    var gs = g
      .selectAll('.g')
      .data(pieData)
      .enter()
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')'); //\u4F4D\u7F6E\u4FE1\u606F

    //\u7ED8\u5236\u997C\u72B6\u56FE\u7684\u5404\u4E2A\u6247\u5F62
    gs.append('path')
      .attr('d', function(d) {
        return arc_generator(d); //\u5F80\u5F27\u5F62\u751F\u6210\u5668\u4E2D\u51FA\u5165\u6570\u636E
      })
      .attr('fill', function(d, i) {
        return colorScale(i); //\u8BBE\u7F6E\u989C\u8272
      });

    //\u7ED8\u5236\u997C\u72B6\u56FE\u4E0A\u9762\u7684\u6587\u5B57\u4FE1\u606F
    gs.append('text')
      .attr('transform', function(d) {
        //\u4F4D\u7F6E\u8BBE\u5728\u4E2D\u5FC3\u5904
        return 'translate(' + arc_generator.centroid(d) + ')';
      })
      .attr('text-anchor', 'middle')
      .text(function(d) {
        return d.data;
      });
  };

  useEffect(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>
        <svg width="1200" height="180" id="mainsvg3" className="svgs" />
      </Card>
    </>
  );
};
export default D3;`,be=`import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';

const D3 = () => {
  const [dataset, setDataset] = useState<any[]>([
    //\u8282\u70B9\u96C6
    { name: '\u6E56\u5357\u90B5\u9633' },
    { name: '\u5C71\u4E1C\u83B1\u5DDE' },
    { name: '\u5E7F\u4E1C\u9633\u6C5F' },
    { name: '\u5C71\u4E1C\u67A3\u5E84' },
    { name: '\u6CFD' },
    { name: '\u6052' },
    { name: '\u946B' },
    { name: '\u660E\u5C71' },
    { name: '\u73ED\u957F' },
  ]);

  var nodes = [
    //\u8282\u70B9\u96C6
    { name: '\u6E56\u5357\u90B5\u9633' },
    { name: '\u5C71\u4E1C\u83B1\u5DDE' },
    { name: '\u5E7F\u4E1C\u9633\u6C5F' },
    { name: '\u5C71\u4E1C\u67A3\u5E84' },
    { name: '\u6CFD' },
    { name: '\u6052' },
    { name: '\u946B' },
    { name: '\u660E\u5C71' },
    { name: '\u73ED\u957F' },
  ];

  var edges = [
    //\u8FB9\u96C6
    { source: 0, target: 4, relation: '\u7C4D\u8D2F', value: 1.3 },
    { source: 4, target: 5, relation: '\u820D\u53CB', value: 1 },
    { source: 4, target: 6, relation: '\u820D\u53CB', value: 1 },
    { source: 4, target: 7, relation: '\u820D\u53CB', value: 1 },
    { source: 1, target: 6, relation: '\u7C4D\u8D2F', value: 2 },
    { source: 2, target: 5, relation: '\u7C4D\u8D2F', value: 0.9 },
    { source: 3, target: 7, relation: '\u7C4D\u8D2F', value: 1 },
    { source: 5, target: 6, relation: '\u540C\u5B66', value: 1.6 },
    { source: 6, target: 7, relation: '\u670B\u53CB', value: 0.7 },
    { source: 6, target: 8, relation: '\u804C\u8D23', value: 2 },
  ];

  const handleInitChart = () => {
    let body = d3.select('body');
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let svg = body.select('#mainsvg3');
    var width = (svg.attr('width') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u5BBD
    var height = (svg.attr('height') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u957F
    var g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');

    //\u8BBE\u7F6E\u4E00\u4E2Acolor\u7684\u989C\u8272\u6BD4\u4F8B\u5C3A\uFF0C\u4E3A\u4E86\u8BA9\u4E0D\u540C\u7684\u6247\u5F62\u5448\u73B0\u4E0D\u540C\u7684\u989C\u8272
    var colorScale = d3
      .scaleOrdinal()
      .domain(d3.range(nodes.length))
      .range(d3.schemeCategory10);

    var forceSimulation = d3
      .forceSimulation()
      .force('link', d3.forceLink())
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter());

    //\u751F\u6210\u8282\u70B9\u6570\u636E
    forceSimulation.nodes(nodes).on('tick', ticked); //\u8FD9\u4E2A\u51FD\u6570\u5F88\u91CD\u8981\uFF0C\u540E\u9762\u7ED9\u51FA\u5177\u4F53\u5B9E\u73B0\u548C\u8BF4\u660E

    //\u751F\u6210\u8FB9\u6570\u636E
    forceSimulation
      .force('link')
      .links(edges)
      .distance(function(d) {
        //\u6BCF\u4E00\u8FB9\u7684\u957F\u5EA6
        return d.value * 100;
      });

    //\u8BBE\u7F6E\u56FE\u5F62\u7684\u4E2D\u5FC3\u4F4D\u7F6E
    forceSimulation
      .force('center')
      .x(width / 2)
      .y(height / 2);

    //\u5728\u6D4F\u89C8\u5668\u7684\u63A7\u5236\u53F0\u8F93\u51FA
    console.log(nodes);
    console.log(edges);

    //\u7ED8\u5236\u8FB9
    var links = g
      .append('g')
      .selectAll('line')
      .data(edges)
      .enter()
      .append('line')
      .attr('stroke', function(d, i) {
        return colorScale(i);
      })
      .attr('stroke-width', 1);

    var linksText = g
      .append('g')
      .selectAll('text')
      .data(edges)
      .enter()
      .append('text')
      .text(function(d) {
        return d.relation;
      });

    var gs = g
      .selectAll('.circleText')
      .data(nodes)
      .enter()
      .append('g')
      .attr('transform', function(d, i) {
        var cirX = d.x;
        var cirY = d.y;
        return 'translate(' + cirX + ',' + cirY + ')';
      })
      .call(
        d3
          .drag()
          .on('start', started)
          .on('drag', dragged)
          .on('end', ended),
      );

    //\u7ED8\u5236\u8282\u70B9
    gs.append('circle')
      .attr('r', 10)
      .attr('fill', function(d, i) {
        return colorScale(i);
      });
    //\u6587\u5B57
    gs.append('text')
      .attr('x', -10)
      .attr('y', -20)
      .attr('dy', 10)
      .text(function(d) {
        return d.name;
      });

    function ticked() {
      links
        .attr('x1', function(d) {
          return d.source.x;
        })
        .attr('y1', function(d) {
          return d.source.y;
        })
        .attr('x2', function(d) {
          return d.target.x;
        })
        .attr('y2', function(d) {
          return d.target.y;
        });

      linksText
        .attr('x', function(d) {
          return (d.source.x + d.target.x) / 2;
        })
        .attr('y', function(d) {
          return (d.source.y + d.target.y) / 2;
        });

      gs.attr('transform', function(d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });
    }

    function started(d) {
      if (!d3.active) {
        forceSimulation.alphaTarget(0.8).restart();
      }
      d.subject.fx = d.x;
      d.subject.fy = d.y;
    }
    function dragged(d) {
      d.subject.fx = d.x;
      d.subject.fy = d.y;
    }
    function ended(d) {
      if (!d3.active) {
        forceSimulation.alphaTarget(0);
      }
      d.subject.fx = null;
      d.subject.fy = null;
    }
  };

  useEffect(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>
        <svg width="1200" height="180" id="mainsvg3" className="svgs" />
      </Card>
    </>
  );
};
export default D3;`,ke=`import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import * as d3 from 'd3';
const data = {
  name: '\u4E2D\u56FD',
  children: [
    {
      name: '\u6D59\u6C5F',
      children: [
        { name: '\u676D\u5DDE', value: 100 },
        { name: '\u5B81\u6CE2', value: 100 },
        { name: '\u6E29\u5DDE', value: 100 },
        { name: '\u7ECD\u5174', value: 100 },
      ],
    },
    {
      name: '\u5E7F\u897F',
      children: [
        {
          name: '\u6842\u6797',
          children: [
            { name: '\u79C0\u5CF0\u533A', value: 100 },
            { name: '\u53E0\u5F69\u533A', value: 100 },
            { name: '\u8C61\u5C71\u533A', value: 100 },
            { name: '\u4E03\u661F\u533A', value: 100 },
          ],
        },
        { name: '\u5357\u5B81', value: 100 },
        { name: '\u67F3\u5DDE', value: 100 },
        { name: '\u9632\u57CE\u6E2F', value: 100 },
      ],
    },
    {
      name: '\u9ED1\u9F99\u6C5F',
      children: [
        { name: '\u54C8\u5C14\u6EE8', value: 100 },
        { name: '\u9F50\u9F50\u54C8\u5C14', value: 100 },
        { name: '\u7261\u4E39\u6C5F', value: 100 },
        { name: '\u5927\u5E86', value: 100 },
      ],
    },
    {
      name: '\u65B0\u7586',
      children: [
        { name: '\u4E4C\u9C81\u6728\u9F50' },
        { name: '\u514B\u62C9\u739B\u4F9D' },
        { name: '\u5410\u9C81\u756A' },
        { name: '\u54C8\u5BC6' },
      ],
    },
  ],
};

const D3 = () => {
  const [dataset, setDataset] = useState<any>(data);

  const handleInitChart = () => {
    let body = d3.select('body');
    let marge = { top: 30, bottom: 30, left: 30, right: 30 };
    let svg = body.select('#mainsvg3');
    var width = (svg.attr('width') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u5BBD
    var height = (svg.attr('height') as unknown) as number; //\u5F97\u5230\u753B\u5E03\u7684\u957F
    var g = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');
    var scale = svg
      .append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')');

    var hierarchyData = d3.hierarchy(dataset).sum(function(d) {
      return d.value;
    });

    //\u521B\u5EFA\u4E00\u4E2A\u6811\u72B6\u56FE
    var tree = d3
      .tree()
      .size([width - 400, height - 200])
      .separation(function(a, b) {
        return (a.parent == b.parent ? 1 : 2) / a.depth;
      });

    var treeData = tree(hierarchyData);
    var nodes = treeData.descendants();
    var links = treeData.links();
    //\u8F93\u51FA\u8282\u70B9\u548C\u8FB9
    console.log(nodes);
    console.log(links);
    var B\xE9zier_curve_generator = d3
      .linkHorizontal()
      .x(function(d) {
        return d.y;
      })
      .y(function(d) {
        return d.x;
      });
    //\u7ED8\u5236\u8FB9
    g.append('g')
      .selectAll('path')
      .data(links)
      .enter()
      .append('path')
      .attr('d', function(d) {
        var start = { x: d.source.x, y: d.source.y };
        var end = { x: d.target.x, y: d.target.y };
        return B\xE9zier_curve_generator({ source: start, target: end });
      })
      .attr('fill', 'none')
      .attr('stroke', 'yellow')
      .attr('stroke-width', 1);

    var gs = g
      .append('g')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('transform', function(d) {
        var cx = d.x;
        var cy = d.y;
        return 'translate(' + cy + ',' + cx + ')';
      });

    //\u7ED8\u5236\u8282\u70B9
    gs.append('circle')
      .attr('r', 6)
      .attr('fill', 'white')
      .attr('stroke', 'blue')
      .attr('stroke-width', 1);

    //\u6587\u5B57
    gs.append('text')
      .attr('x', function(d) {
        return d.children ? -40 : 8;
      })
      .attr('y', -5)
      .attr('dy', 10)
      .text(function(d) {
        return d.data.name;
      });
  };

  useEffect(() => {
    handleInitChart();
  }, []);

  const setNewChartData = () => {
    let arr = Array.from({ length: 4 }, () => ~~(Math.random(0, 1000) * 100));
    setDataset(arr);
    handleInitChart();
  };

  return (
    <>
      <Card style={{ margin: 24 }}>
        <Button onClick={setNewChartData}>\u8BBE\u7F6E\u65B0\u7684\u6570\u636E</Button>
        <svg width="1200" height="180" id="mainsvg3" className="svgs" />
      </Card>
    </>
  );
};
export default D3;`,r=`
const Base: React.FC = () => {
  return (
    <>

      <h2>1. svg\u5BB9\u5668</h2>
      <svg
        width="20px"
        height="20px"
        // min-x min-y width height
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
      />
      <h2>2. \u5171\u6709\u7684API</h2>
      <svg
        width="100px"
        height="100px"
        // min-x min-y width height
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="red"
          stroke="blue"
          strokeDasharray="10"
        />
      </svg>
      <h2>4. demo</h2>
      <svg
        width="1000px"
        height="250px"
        // min-x min-y width height
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="200"
          // \u5706\u89D2
          rx="15"
          ry="15"
          fill="lavender"
        />
        <circle
          // \u5706\u5FC3\u6A2A\u5750\u6807
          cx="220"
          // \u5706\u5FC3\u7EB5\u5750\u6807
          cy="100"
          // \u534A\u5F84
          r="100"
          fill="red"
        />
        <ellipse
          //\u5706\u5FC3\u6A2A\u5750\u6807
          cx="500"
          //\u5706\u5FC3\u7EB5\u5750\u6807
          cy="100"
          //\u6A2A\u5411\u534A\u5F84
          rx="150"
          //\u7EB5\u5411\u534A\u5F84
          ry="100"
          fill="#f06"
        />
        <line
          // \u8D77\u70B9\u6A2A\u5750\u6807
          x1="400"
          // \u8D77\u70B9\u7EB5\u5750\u6807
          y1="100"
          // \u7EC8\u70B9\u6A2A\u5750\u6807
          x2="100"
          // \u7EC8\u70B9\u7EB5\u5750\u6807
          y2="0"
          stroke="black"
        />
        <polygon
          // x1,y1,x2,y2,x3,y3 ...
          points="200,10,250,190,160,210"
          stroke="blue"
        />
        <polyline
          // x1,y1,x2,y2,x3,y3 ...
          points="200,10,250,190,160,210"
          stroke="green"
        />
      </svg>
    </>
  );
};

export default Base;`,a={"antd-datepicker":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(130)]).then(e.bind(null,"TGs9"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:D},"Picker1/index.tsx":{import:"./Picker1",content:j},"toolClass.tsx":{import:"../toolClass",content:U},"Picker2/index.tsx":{import:"./Picker2",content:K}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},moment:{version:"2.29.4"}},componentName:"DatePicker",identifier:"antd-datepicker"}},"antd-formlayout":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(132)]).then(e.bind(null,"KuHX"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:Y}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},componentName:"FormLayout",identifier:"antd-formlayout"}},"businesscomponent-calendar":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(2),e.e(3),e.e(129)]).then(e.bind(null,"Dp2K"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:de},"components/Calendar/index.tsx":{import:"./components/Calendar",content:ce},"components/Calendar/constant.tsx":{import:"./constant",content:_},"components/Calendar/index.less":{import:"./index.less",content:ae},"components/Calendar/utils.ts":{import:"./utils",content:oe}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},moment:{version:"2.29.4"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},componentName:"Calendar",title:"\u591A\u9009\u7684\u65E5\u671F\u63A7\u4EF6",identifier:"businesscomponent-calendar"}},"businesscomponent-queryform":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(126)]).then(e.bind(null,"6Ilp"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:me},"components/index.tsx":{import:"./components",content:ee},"components/index.less":{import:"./index.less",content:Ce},"constant.ts":{import:"./constant",content:ue}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"react-dom":{version:">=16.0.0"},"@ant-design/icons":{version:"4.7.0"}},componentName:"QueryForm",title:"QueryForm",description:'<div class="markdown"><p>\u67E5\u8BE2\u8868\u5355</p></div>',identifier:"businesscomponent-queryform"}},"Select-demo":{component:Object(u.dynamic)({loader:function(){return k(this,null,function*(){var p=e("3PQu").default,v=e("K+nK").default;yield Promise.all([e.e(0),e.e(145)]).then(e.bind(null,"+BJd"));var w=v(yield e.e(0).then(e.bind(null,"mr32"))),Q=v(yield Promise.resolve().then(e.bind(null,"tJVT")));yield Promise.all([e.e(0),e.e(144)]).then(e.bind(null,"OaEy"));var S=v(yield e.e(0).then(e.bind(null,"2fM7"))),m=p(yield Promise.resolve().then(e.t.bind(null,"cDcd",7))),W=S.default.Option,R=function(){var V=(0,m.useState)(!1),f=(0,Q.default)(V,2),z=f[0],X=f[1],M=[{lable:"jack",value:"1"},{lable:"lucy",value:"2"},{lable:"Yiminghe",value:"3"}];return m.default.createElement(S.default,{style:{width:300},open:z,onDropdownVisibleChange:function(re){return X(re)},dropdownRender:function(re){return m.default.createElement(m.default.Fragment,null,M.map(function(Z){return m.default.createElement(w.default,{onClick:function(){X(!1)},key:Z.value},Z.lable)}))},options:M})},q=R;return q})},loading:()=>null}),previewerProps:{sources:{_:{tsx:`import React, { useState } from 'react';
import { Select, Input, Button, Tag, Form } from 'antd';

const { Option } = Select;

const App = () => {
  const [open, setOpen] = useState(false);
  const options = [
    { lable: 'jack', value: '1' },
    { lable: 'lucy', value: '2' },
    { lable: 'Yiminghe', value: '3' },
  ];
  return (
    <Select
      style={{ width: 300 }}
      open={open}
      onDropdownVisibleChange={visible => setOpen(visible)}
      dropdownRender={menu => {
        return (
          <>
            {options.map(item => (
              <Tag
                onClick={() => {
                  setOpen(false);
                }}
                key={item.value}
              >
                {item.lable}
              </Tag>
            ))}
          </>
        );
      }}
      options={options}
    />
  );
};

export default App;`}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},componentName:"Select",identifier:"Select-demo"}},"transferform-class":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(127)]).then(e.bind(null,"yNen"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:pe},"components/class/index.tsx":{import:"./components/class",content:Ie},"components/index.less":{import:"../index.less",content:J}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},title:"Class",description:'<div class="markdown"><p>\u4F7F\u7528\u7A7F\u68AD\u6846</p></div>',identifier:"transferform-class"}},"transferform-hook":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(127)]).then(e.bind(null,"YMaR"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:se},"components/hook/index.tsx":{import:"./components/hook",content:o},"components/index.less":{import:"../index.less",content:J}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},title:"Hook",description:'<div class="markdown"><p>\u5355\u6B21\u4F7F\u7528\u7A7F\u68AD\u6846</p></div>',identifier:"transferform-hook"}},"transferform-hook_multiple":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(127)]).then(e.bind(null,"UaRi"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:i},"components/hook/index.tsx":{import:"./components/hook",content:o},"components/index.less":{import:"../index.less",content:J}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},title:"Hook_multiple",description:'<div class="markdown"><p>\u4F7F\u7528\u591A\u4E2A\u7A7F\u68AD\u6846</p></div>',identifier:"transferform-hook_multiple"}},"file-fileexportexcel":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(4),e.e(125)]).then(e.bind(null,"PZHo"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:s},"utils.ts":{import:"./utils",content:A}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},exceljs:{version:"4.3.0"},"react-dom":{version:">=16.9.0"},"file-saver":{version:"2.0.5"},jszip:{version:"3.10.1"}},componentName:"FileExportExcel",identifier:"file-fileexportexcel"}},"file-fileexportword":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(4),e.e(121)]).then(e.bind(null,"q4Sd"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:I},"index.less":{import:"./index.less",content:g},"utils.ts":{import:"./utils",content:B},"components/chart.tsx":{import:"./components/chart",content:L},"components/table.tsx":{import:"./components/table",content:P}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},docxtemplater:{version:"3.5.2"},pizzip:{version:"3.1.3"},"jszip-utils":{version:"0.1.0"},"file-saver":{version:"2.0.5"},"open-docxtemplater-image-module":{version:"1.0.3"},"@ant-design/plots":{version:"1.2.2"}},componentName:"FileExportWord",identifier:"file-fileexportword"}},"file-filepreviewpage":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(122)]).then(e.bind(null,"E9IB"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:T},"components/FilePreView.tsx":{import:"./components/FilePreView",content:O},"components/FileView.tsx":{import:"./FileView",content:x},"components/fileView.less":{import:"./fileView.less",content:b},"components/MarkDown.tsx":{import:"./MarkDown",content:H},"constant.ts":{import:"./constant",content:$}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">= 0.14.0"},"react-dom":{version:">=16.9.0"},"react-excel-renderer":{version:"1.1.0"},classnames:{version:"2.3.2"},"docx-preview":{version:"0.1.13"},"react-markdown":{version:"8.0.3"},"react-syntax-highlighter":{version:"15.5.0"},"remark-gfm":{version:"3.0.1"},"@types/react":{version:">=16"}},componentName:"FilePreViewPage",identifier:"file-filepreviewpage"}},"npm-echartsreact":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield e.e(131).then(e.bind(null,"ZpqZ"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:G},"REcharts/index.tsx":{import:"./REcharts",content:ie}},dependencies:{react:{version:"^15.0.0 || >=16.0.0"},"echarts-for-react":{version:"3.0.2"},echarts:{version:"^3.0.0 || ^4.0.0 || ^5.0.0"}},componentName:"EchartsReact",transform:"{true}",iframe:"{true}",identifier:"npm-echartsreact"}},"react-muitipleref":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(124)]).then(e.bind(null,"zL9H"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:ne}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},componentName:"MuitipleRef",identifier:"react-muitipleref"}},"refdemo-classusehookref":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(128)]).then(e.bind(null,"dCsF"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:ge}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},componentName:"RefDemo",identifier:"refdemo-classusehookref"}},"refdemo-hookusehookref":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(128)]).then(e.bind(null,"jdOd"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:le}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},componentName:"RefDemo",identifier:"refdemo-hookusehookref"}},"d3-barchart":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(127)]).then(e.bind(null,"3aFa"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:te}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},d3:{version:"7.6.1"},"react-dom":{version:">=16.9.0"}},identifier:"d3-barchart"}},"d3-barchart1":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(127)]).then(e.bind(null,"Umss"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:ye}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},d3:{version:"7.6.1"},"react-dom":{version:">=16.9.0"}},identifier:"d3-barchart1"}},"d3-barchart2":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(127)]).then(e.bind(null,"NP7x"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:ve}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},d3:{version:"7.6.1"},"react-dom":{version:">=16.9.0"}},identifier:"d3-barchart2"}},"d3-barchart3":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(127)]).then(e.bind(null,"wJRY"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:Be}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},d3:{version:"7.6.1"},"react-dom":{version:">=16.9.0"}},transform:"{true}",iframe:"{true}",identifier:"d3-barchart3"}},"d3-pie":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(127)]).then(e.bind(null,"tc+L"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:Qe}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},d3:{version:"7.6.1"},"react-dom":{version:">=16.9.0"}},transform:"{true}",iframe:"{true}",identifier:"d3-pie"}},"d3-force":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(127)]).then(e.bind(null,"mDOk"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:be}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},d3:{version:"7.6.1"},"react-dom":{version:">=16.9.0"}},transform:"{true}",iframe:"{true}",identifier:"d3-force"}},"d3-tree":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(127)]).then(e.bind(null,"CxlS"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:ke}},dependencies:{antd:{version:"4.23.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},d3:{version:"7.6.1"},"react-dom":{version:">=16.9.0"}},transform:"{true}",iframe:"{true}",identifier:"d3-tree"}},"svg-base":{component:Object(u.dynamic)({loader:()=>k(this,null,function*(){return(yield e.e(123).then(e.bind(null,"ri1g"))).default}),loading:()=>null}),previewerProps:{sources:{_:{tsx:r}},dependencies:{},componentName:"Base",transform:"{true}",identifier:"svg-base"}}},t=e("x2v5"),l=e("KcUY"),d=e.n(l),c=N.default=p=>h.a.createElement(d.a,Object(E.a)({},p,{config:y,demos:a,apis:t}))},kUT7:function(C,N,e){},ptyZ:function(C,N,e){},q3YX:function(C){C.exports=JSON.parse('{"menus":{"en-US":{"/article":[{"title":"2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303","path":"/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303","meta":{},"children":[{"path":"/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/1.git \u547D\u4EE4\u53CA git-commit \u89C4\u8303","title":"git \u547D\u4EE4\u53CA git-commit \u89C4\u8303","meta":{"order":2}},{"path":"/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/2.typescript \u6CE8\u91CA\u89C4\u8303","title":"typescript \u6CE8\u91CA\u6587\u6863","meta":{"order":2}},{"path":"/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/3.json-schema","title":"json-schema","meta":{"order":2}}]},{"title":"3.CSS","path":"/article/3.css","meta":{},"children":[{"path":"/article/3.css/css\u53D8\u91CF","title":"CSS \u539F\u751F\u53D8\u91CF var(--color)","meta":{"order":3}},{"path":"/article/3.css/flex \u5E03\u5C40","title":"flex \u5E03\u5C40","meta":{"order":3}},{"path":"/article/3.css/grid \u5E03\u5C40","title":"grid","meta":{"order":3}},{"path":"/article/3.css/tailwind-css","title":"tailwindCSS","meta":{"order":3}}]},{"title":"4.\u5199\u6587\u6863\u7684\u5DE5\u5177","path":"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177","meta":{},"children":[{"path":"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/dumi","title":"dumi","meta":{"order":4}},{"path":"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/hexo","title":"Hexo","meta":{"order":4}},{"path":"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/rcpress","title":"reactPress","meta":{"order":4}},{"path":"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/storybook","title":"storyBook","meta":{"order":4}},{"path":"/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/vuepress","title":"VuePress","meta":{"order":4}}]},{"title":"5.\u524D\u7AEF\u5DE5\u7A0B\u5316","path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316","meta":{},"children":[{"path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/browserslistrc","title":"browserslistrc","meta":{"order":5}},{"path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/commitlintconfigjs","title":"commitlint.config.js","meta":{"order":5}},{"path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/gitattributes","title":"gitattributes","meta":{"order":5}},{"path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/license","title":"License","meta":{"order":5}},{"path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/node-\u811A\u672C\u81EA\u52A8\u6CE8\u5165\u8DEF\u7531","title":"node \u811A\u672C\u81EA\u52A8\u6CE8\u5165\u8DEF\u7531","meta":{"order":5}},{"path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/npmrc","title":"npmrc","meta":{"order":5}},{"path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/stylelintrc","title":"stylelintrc","meta":{"order":5}},{"path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/tsconfig","title":"tsconfig","meta":{"order":5}},{"path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/webpack","title":"webpack","meta":{"order":5}},{"path":"/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/\u9879\u76EE-eslint-prettierrc-\u53CA-vscode-\u63D2\u4EF6-\u914D\u7F6E","title":"Eslint","meta":{"order":5}}]},{"title":"6.\u8FD0\u7EF4\u76F8\u5173","path":"/article/6.\u8FD0\u7EF4\u76F8\u5173","meta":{},"children":[{"path":"/article/6.\u8FD0\u7EF4\u76F8\u5173/cicd","title":"CICD","meta":{"order":6}},{"path":"/article/6.\u8FD0\u7EF4\u76F8\u5173/docker","title":"Docker","meta":{"order":6}},{"path":"/article/6.\u8FD0\u7EF4\u76F8\u5173/k8s","title":"kubernetes","meta":{"order":6}},{"path":"/article/6.\u8FD0\u7EF4\u76F8\u5173/linux\u547D\u4EE4","title":"Linux","meta":{"order":6}},{"path":"/article/6.\u8FD0\u7EF4\u76F8\u5173/nginx","title":"Nginx","meta":{"order":6}},{"path":"/article/6.\u8FD0\u7EF4\u76F8\u5173/\u963F\u91CC\u4E91","title":"\u963F\u91CC\u4E91","meta":{"order":6}}]},{"title":"8.\u5B9E\u8DF5\u64CD\u4F5C","path":"/article/8.\u5B9E\u8DF5\u64CD\u4F5C","meta":{},"children":[{"path":"/article/8.\u5B9E\u8DF5\u64CD\u4F5C/react-native","title":"reactNative","meta":{"order":8}},{"path":"/article/8.\u5B9E\u8DF5\u64CD\u4F5C/\u642D\u5EFA\u4E00\u4E2Agitlab","title":"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A gitlab","meta":{"order":8}},{"path":"/article/8.\u5B9E\u8DF5\u64CD\u4F5C/\u811A\u624B\u67B6","title":"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A\u811A\u624B\u67B6","meta":{"order":8}}]},{"title":"9.react","path":"/article/9.react","meta":{},"children":[{"path":"/article/9.react/ahooks","title":"Ahooks","meta":{"order":9}},{"path":"/article/9.react/antd-design","title":"Ant Design","meta":{"order":9}},{"path":"/article/9.react/antd-pro","title":"Ant-Pro","meta":{"order":9}},{"path":"/article/9.react/dva","title":"Dva","meta":{"order":9}},{"path":"/article/9.react/nextjs","title":"NextJS","meta":{"order":9}},{"path":"/article/9.react/react","title":"React","meta":{"order":9}},{"path":"/article/9.react/react-charts","title":"reactCharts","meta":{"order":9}},{"path":"/article/9.react/react-map","title":"React-map","meta":{"order":9}},{"path":"/article/9.react/react-native","title":"Reative Native","meta":{"order":9}},{"path":"/article/9.react/umi","title":"UmiJS","meta":{"order":9}},{"path":"/article/9.react/umi4","title":"umi4","meta":{"order":9}},{"path":"/article/9.react/zustand","title":"zustand","meta":{"order":9}}]}],"/article2":[{"title":"10.vue","path":"/article2/10.vue","meta":{},"children":[{"path":"/article2/10.vue/vite","title":"Vite","meta":{"order":3}},{"path":"/article2/10.vue/vue","title":"vue","meta":{"order":3}},{"path":"/article2/10.vue/vue3","title":"Vue 3.0","meta":{"order":3}}]},{"title":"12.typescript","path":"/article2/12.typescript","meta":{},"children":[{"path":"/article2/12.typescript/typescript","title":"Typescript","meta":{"order":3}}]},{"title":"14.\u53EF\u89C6\u5316","path":"/article2/14.\u53EF\u89C6\u5316","meta":{},"children":[{"path":"/article2/14.\u53EF\u89C6\u5316/canvas","title":"canvas","meta":{"order":3}},{"path":"/article2/14.\u53EF\u89C6\u5316/d3","title":"d3","meta":{"order":3}},{"path":"/article2/14.\u53EF\u89C6\u5316/svg","title":"SVG","meta":{"order":3}}]},{"title":"18.\u8BBE\u8BA1\u6A21\u5F0F","path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F","meta":{},"children":[{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/1.\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F","title":"\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/10.\u88C5\u9970\u5668\u6A21\u5F0F","title":"\u88C5\u9970\u5668\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/12.\u6865\u63A5\u6A21\u5F0F","title":"\u6865\u63A5\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/13.\u7EC4\u5408\u6A21\u5F0F","title":"\u7EC4\u5408\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/14.\u4EAB\u5143\u6A21\u5F0F","title":"\u4EAB\u5143\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/15.\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F","title":"\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/16.\u89C2\u5BDF\u8005\u6A21\u5F0F","title":"\u89C2\u5BDF\u8005\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/17.\u72B6\u6001\u6A21\u5F0F","title":"\u72B6\u6001\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/18.\u7B56\u7565\u6A21\u5F0F","title":"\u7B56\u7565\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/19.\u8D23\u4EFB\u94FE\u6A21\u5F0F","title":"\u8D23\u4EFB\u94FE\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/2.\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F","title":"\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/20.\u547D\u4EE4\u6A21\u5F0F","title":"\u547D\u4EE4\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/21.\u8BBF\u95EE\u8005\u6A21\u5F0F","title":"\u8BBF\u95EE\u8005\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/22.\u4E2D\u4ECB\u8005\u6A21\u5F0F","title":"\u4E2D\u4ECB\u8005\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/23.\u5907\u5FD8\u5F55\u6A21\u5F0F","title":"\u5907\u5FD8\u5F55\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/24.\u8FED\u4EE3\u5668\u6A21\u5F0F","title":"\u8FED\u4EE3\u5668\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/25.\u89E3\u91CA\u5668\u6A21\u5F0F","title":"\u89E3\u91CA\u5668\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/3.\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F","title":"\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/4.\u5EFA\u9020\u8005\u6A21\u5F0F","title":"\u5EFA\u9020\u8005\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/5.\u539F\u578B\u6A21\u5F0F","title":"\u539F\u578B\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/6.\u5355\u4F8B\u6A21\u5F0F","title":"\u5355\u4F8B\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/7.\u5916\u89C2\u6A21\u5F0F","title":"\u5916\u89C2\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/8.\u9002\u914D\u5668\u6A21\u5F0F","title":"\u9002\u914D\u5668\u6A21\u5F0F","meta":{"order":3}},{"path":"/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/9.\u4EE3\u7406\u6A21\u5F0F","title":"\u4EE3\u7406\u6A21\u5F0F","meta":{"order":3}}]},{"title":"20.\u6709\u610F\u601D\u7684\u5E93","path":"/article2/20.\u6709\u610F\u601D\u7684\u5E93","meta":{},"children":[{"path":"/article2/20.\u6709\u610F\u601D\u7684\u5E93/lottie","title":"Lottie","meta":{"order":3}}]},{"title":"21.macos\u76F8\u5173","path":"/article2/21.macos\u76F8\u5173","meta":{},"children":[{"path":"/article2/21.macos\u76F8\u5173/copilot","title":"copilot","meta":{"order":3}},{"path":"/article2/21.macos\u76F8\u5173/github-badge","title":"githubBadge","meta":{"order":3}},{"path":"/article2/21.macos\u76F8\u5173/github\u5361\u987F\u539F\u56E0","title":"github \u5361\u987F\u539F\u56E0","meta":{"order":3}},{"path":"/article2/21.macos\u76F8\u5173/\u4F7F\u7528\u5728\u7EBFvscode\u6253\u5F00github","title":"\u4F7F\u7528\u5728\u7EBF vscode \u6253\u5F00 github","meta":{"order":3}},{"path":"/article2/21.macos\u76F8\u5173/\u6CB9\u7334\u811A\u672C","title":"\u6CB9\u7334\u811A\u672C","meta":{"order":3}}]}],"/components":[{"title":"antd","path":"/components/antd","meta":{"order":1},"children":[{"path":"/components/antd/date-picker","title":"DatePicker","meta":{"order":1}},{"path":"/components/antd/form-layout","title":"FormLayout","meta":{"order":1}}]},{"title":"npm package","path":"/components/npm","meta":{"order":1},"children":[{"path":"/components/npm/echarts-react","title":"echarts-for-react","meta":{"order":1}}]},{"title":"react\u6280\u5DE7","path":"/components/react","meta":{"order":1},"children":[{"path":"/components/react/muitiple-ref","title":"MyitipleRef","meta":{"order":1}},{"path":"/components/react/ref-demo","title":"RefDemo","meta":{"order":1}},{"path":"/components/react/ts-ref-instance","title":"TsRefInstance","meta":{"order":1}}]},{"title":"\u6587\u4EF6\u7684\u5BFC\u51FA\u4E0E\u9884\u89C8","path":"/components/file","meta":{"order":2},"children":[{"path":"/components/file/file-export-excel","title":"\u524D\u7AEF\u5BFC\u51FA excel","meta":{"order":2}},{"path":"/components/file/file-export-word","title":"\u524D\u7AEF\u5BFC\u51FA word","meta":{"order":2}},{"path":"/components/file/file-pre-view-page","title":"\u524D\u7AEF\u9884\u89C8 PDF excel word \u7B49\u5404\u7C7B\u6587\u4EF6","meta":{"order":2}}]},{"title":"\u5C01\u88C5\u7684\u4E1A\u52A1\u7EC4\u4EF6","path":"/components/my-components","meta":{"order":2},"children":[{"path":"/components/my-components/calendar","title":"\u591A\u9009\u7684\u65E5\u671F\u63A7\u4EF6","meta":{"order":2}},{"path":"/components/my-components/query-form","title":"QueryForm","meta":{"order":2}},{"path":"/components/my-components/select","title":"Select","meta":{"order":2}},{"path":"/components/my-components/transfer-form","title":"\u7A7F\u68AD\u6846","meta":{"order":2}}]}],"/debug":[{"path":"/debug","title":"Debug","meta":{"order":4}}],"/npm":[{"path":"/npm","title":"Npm","meta":{}}],"/project":[{"title":"theme","path":"/project/theme","meta":{"order":5},"children":[]},{"title":"VueAutoImport","path":"/project/VueAutoImport","meta":{"order":6},"children":[]},{"title":"VueDebugger","path":"/project/VueDebugger","meta":{"order":6},"children":[]},{"title":"docker","path":"/project/docker","meta":{"order":6},"children":[]},{"title":"UmiPermission","path":"/project/umi_permission","meta":{"order":6},"children":[]},{"title":"BuriedPoint","path":"/project/BuriedPoint","meta":{},"children":[]},{"title":"CustomTableAndFom","path":"/project/CustomTableAndFom","meta":{},"children":[]},{"title":"\u5927\u6587\u4EF6\u65AD\u70B9\u7EED\u4F20","path":"/project/LargeFileUpload","meta":{},"children":[]},{"title":"MultipleTag","path":"/project/MultipleTag","meta":{},"children":[]},{"title":"Persistence","path":"/project/Persistence","meta":{},"children":[]},{"title":"VueHOC","path":"/project/VueHOC","meta":{},"children":[]},{"title":"node \u811A\u672C\u6CE8\u5165\u6587\u4EF6","path":"/project/node","meta":{},"children":[]},{"title":"sso\u5355\u70B9\u767B\u5F55","path":"/project/sso","meta":{},"children":[]},{"title":"Websocket","path":"/project/websocket","meta":{},"children":[]}],"/visualization":[{"title":"canvas","meta":{"__fallback":true},"children":[],"path":"/visualization/canvas"},{"title":"D3","path":"/visualization/d3","meta":{},"children":[{"path":"/visualization/d3","title":"D3","meta":{}},{"path":"/visualization/d3/proportion1","title":"Proportion1","meta":{}},{"path":"/visualization/d3/proportion2","title":"Proportion2","meta":{}}]},{"title":"Svg","path":"/visualization/svg","meta":{},"children":[{"path":"/visualization/svg/base","title":"Base","meta":{}},{"path":"/visualization/svg/hign","title":"Hign","meta":{}}]}],"*":[{"path":"/","title":"my-demo - My various demo and bug summary","meta":{"order":10}}],"/guide":[{"path":"/guide","title":"\u603B\u89C8","meta":{"order":1}},{"title":"React\u6027\u80FD\u4F18\u5316","path":"/guide/react\u6027\u80FD\u4F18\u5316","meta":{"order":1},"children":[]},{"title":"TypeScript\u8FDB\u9636\u6587\u7AE0","path":"/guide/type-script\u8FDB\u9636\u6587\u7AE0","meta":{"order":1},"children":[]},{"title":"\u6211\u7684TypeScript\u76F8\u5173\u4EE3\u7801","path":"/guide/\u6211\u7684type-script\u76F8\u5173\u4EE3\u7801","meta":{"order":1},"children":[]},{"title":"\u9AD8\u7EA7\u524D\u7AEF\u5FC5\u8BFB","path":"/guide/\u9AD8\u7EA7\u524D\u7AEF\u5FC5\u8BFB","meta":{"order":1},"children":[]}]},"zh-CN":{"*":[{"path":"/zh-CN","title":"my-demo - \u6211\u7684\u5404\u79CDdemo\u53CAbug\u603B\u7ED3","meta":{"order":10}}],"/zh-CN/article":[{"title":"2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303","path":"/zh-CN/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303","meta":{},"children":[{"path":"/zh-CN/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/1.git \u547D\u4EE4\u53CA git-commit \u89C4\u8303","title":"git \u547D\u4EE4\u53CA git-commit \u89C4\u8303","meta":{"order":2}},{"path":"/zh-CN/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/2.typescript \u6CE8\u91CA\u89C4\u8303","title":"typescript \u6CE8\u91CA\u6587\u6863","meta":{"order":2}},{"path":"/zh-CN/article/2.\u57FA\u672C\u9700\u8981\u638C\u63E1\u7684\u89C4\u8303/3.json-schema","title":"json-schema","meta":{"order":2}}]},{"title":"3.CSS","path":"/zh-CN/article/3.css","meta":{},"children":[{"path":"/zh-CN/article/3.css/css\u53D8\u91CF","title":"CSS \u539F\u751F\u53D8\u91CF var(--color)","meta":{"order":3}},{"path":"/zh-CN/article/3.css/flex \u5E03\u5C40","title":"flex \u5E03\u5C40","meta":{"order":3}},{"path":"/zh-CN/article/3.css/grid \u5E03\u5C40","title":"grid","meta":{"order":3}},{"path":"/zh-CN/article/3.css/tailwind-css","title":"tailwindCSS","meta":{"order":3}}]},{"title":"4.\u5199\u6587\u6863\u7684\u5DE5\u5177","path":"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177","meta":{},"children":[{"path":"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/dumi","title":"dumi","meta":{"order":4}},{"path":"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/hexo","title":"Hexo","meta":{"order":4}},{"path":"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/rcpress","title":"reactPress","meta":{"order":4}},{"path":"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/storybook","title":"storyBook","meta":{"order":4}},{"path":"/zh-CN/article/4.\u5199\u6587\u6863\u7684\u5DE5\u5177/vuepress","title":"VuePress","meta":{"order":4}}]},{"title":"5.\u524D\u7AEF\u5DE5\u7A0B\u5316","path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316","meta":{},"children":[{"path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/browserslistrc","title":"browserslistrc","meta":{"order":5}},{"path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/commitlintconfigjs","title":"commitlint.config.js","meta":{"order":5}},{"path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/gitattributes","title":"gitattributes","meta":{"order":5}},{"path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/license","title":"License","meta":{"order":5}},{"path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/node-\u811A\u672C\u81EA\u52A8\u6CE8\u5165\u8DEF\u7531","title":"node \u811A\u672C\u81EA\u52A8\u6CE8\u5165\u8DEF\u7531","meta":{"order":5}},{"path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/npmrc","title":"npmrc","meta":{"order":5}},{"path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/stylelintrc","title":"stylelintrc","meta":{"order":5}},{"path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/tsconfig","title":"tsconfig","meta":{"order":5}},{"path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/webpack","title":"webpack","meta":{"order":5}},{"path":"/zh-CN/article/5.\u524D\u7AEF\u5DE5\u7A0B\u5316/\u9879\u76EE-eslint-prettierrc-\u53CA-vscode-\u63D2\u4EF6-\u914D\u7F6E","title":"Eslint","meta":{"order":5}}]},{"title":"6.\u8FD0\u7EF4\u76F8\u5173","path":"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173","meta":{},"children":[{"path":"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/cicd","title":"CICD","meta":{"order":6}},{"path":"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/docker","title":"Docker","meta":{"order":6}},{"path":"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/k8s","title":"kubernetes","meta":{"order":6}},{"path":"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/linux\u547D\u4EE4","title":"Linux","meta":{"order":6}},{"path":"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/nginx","title":"Nginx","meta":{"order":6}},{"path":"/zh-CN/article/6.\u8FD0\u7EF4\u76F8\u5173/\u963F\u91CC\u4E91","title":"\u963F\u91CC\u4E91","meta":{"order":6}}]},{"title":"8.\u5B9E\u8DF5\u64CD\u4F5C","path":"/zh-CN/article/8.\u5B9E\u8DF5\u64CD\u4F5C","meta":{},"children":[{"path":"/zh-CN/article/8.\u5B9E\u8DF5\u64CD\u4F5C/react-native","title":"reactNative","meta":{"order":8}},{"path":"/zh-CN/article/8.\u5B9E\u8DF5\u64CD\u4F5C/\u642D\u5EFA\u4E00\u4E2Agitlab","title":"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A gitlab","meta":{"order":8}},{"path":"/zh-CN/article/8.\u5B9E\u8DF5\u64CD\u4F5C/\u811A\u624B\u67B6","title":"\u81EA\u5DF1\u642D\u5EFA\u4E00\u4E2A\u811A\u624B\u67B6","meta":{"order":8}}]},{"title":"9.react","path":"/zh-CN/article/9.react","meta":{},"children":[{"path":"/zh-CN/article/9.react/ahooks","title":"Ahooks","meta":{"order":9}},{"path":"/zh-CN/article/9.react/antd-design","title":"Ant Design","meta":{"order":9}},{"path":"/zh-CN/article/9.react/antd-pro","title":"Ant-Pro","meta":{"order":9}},{"path":"/zh-CN/article/9.react/dva","title":"Dva","meta":{"order":9}},{"path":"/zh-CN/article/9.react/nextjs","title":"NextJS","meta":{"order":9}},{"path":"/zh-CN/article/9.react/react","title":"React","meta":{"order":9}},{"path":"/zh-CN/article/9.react/react-charts","title":"reactCharts","meta":{"order":9}},{"path":"/zh-CN/article/9.react/react-map","title":"React-map","meta":{"order":9}},{"path":"/zh-CN/article/9.react/react-native","title":"Reative Native","meta":{"order":9}},{"path":"/zh-CN/article/9.react/umi","title":"UmiJS","meta":{"order":9}},{"path":"/zh-CN/article/9.react/umi4","title":"umi4","meta":{"order":9}},{"path":"/zh-CN/article/9.react/zustand","title":"zustand","meta":{"order":9}}]}],"/zh-CN/article2":[{"title":"10.vue","path":"/zh-CN/article2/10.vue","meta":{},"children":[{"path":"/zh-CN/article2/10.vue/vite","title":"Vite","meta":{"order":3}},{"path":"/zh-CN/article2/10.vue/vue","title":"vue","meta":{"order":3}},{"path":"/zh-CN/article2/10.vue/vue3","title":"Vue 3.0","meta":{"order":3}}]},{"title":"12.typescript","path":"/zh-CN/article2/12.typescript","meta":{},"children":[{"path":"/zh-CN/article2/12.typescript/typescript","title":"Typescript","meta":{"order":3}}]},{"title":"14.\u53EF\u89C6\u5316","path":"/zh-CN/article2/14.\u53EF\u89C6\u5316","meta":{},"children":[{"path":"/zh-CN/article2/14.\u53EF\u89C6\u5316/canvas","title":"canvas","meta":{"order":3}},{"path":"/zh-CN/article2/14.\u53EF\u89C6\u5316/d3","title":"d3","meta":{"order":3}},{"path":"/zh-CN/article2/14.\u53EF\u89C6\u5316/svg","title":"SVG","meta":{"order":3}}]},{"title":"18.\u8BBE\u8BA1\u6A21\u5F0F","path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F","meta":{},"children":[{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/1.\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F","title":"\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/10.\u88C5\u9970\u5668\u6A21\u5F0F","title":"\u88C5\u9970\u5668\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/12.\u6865\u63A5\u6A21\u5F0F","title":"\u6865\u63A5\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/13.\u7EC4\u5408\u6A21\u5F0F","title":"\u7EC4\u5408\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/14.\u4EAB\u5143\u6A21\u5F0F","title":"\u4EAB\u5143\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/15.\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F","title":"\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/16.\u89C2\u5BDF\u8005\u6A21\u5F0F","title":"\u89C2\u5BDF\u8005\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/17.\u72B6\u6001\u6A21\u5F0F","title":"\u72B6\u6001\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/18.\u7B56\u7565\u6A21\u5F0F","title":"\u7B56\u7565\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/19.\u8D23\u4EFB\u94FE\u6A21\u5F0F","title":"\u8D23\u4EFB\u94FE\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/2.\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F","title":"\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/20.\u547D\u4EE4\u6A21\u5F0F","title":"\u547D\u4EE4\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/21.\u8BBF\u95EE\u8005\u6A21\u5F0F","title":"\u8BBF\u95EE\u8005\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/22.\u4E2D\u4ECB\u8005\u6A21\u5F0F","title":"\u4E2D\u4ECB\u8005\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/23.\u5907\u5FD8\u5F55\u6A21\u5F0F","title":"\u5907\u5FD8\u5F55\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/24.\u8FED\u4EE3\u5668\u6A21\u5F0F","title":"\u8FED\u4EE3\u5668\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/25.\u89E3\u91CA\u5668\u6A21\u5F0F","title":"\u89E3\u91CA\u5668\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/3.\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F","title":"\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/4.\u5EFA\u9020\u8005\u6A21\u5F0F","title":"\u5EFA\u9020\u8005\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/5.\u539F\u578B\u6A21\u5F0F","title":"\u539F\u578B\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/6.\u5355\u4F8B\u6A21\u5F0F","title":"\u5355\u4F8B\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/7.\u5916\u89C2\u6A21\u5F0F","title":"\u5916\u89C2\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/8.\u9002\u914D\u5668\u6A21\u5F0F","title":"\u9002\u914D\u5668\u6A21\u5F0F","meta":{"order":3}},{"path":"/zh-CN/article2/18.\u8BBE\u8BA1\u6A21\u5F0F/9.\u4EE3\u7406\u6A21\u5F0F","title":"\u4EE3\u7406\u6A21\u5F0F","meta":{"order":3}}]},{"title":"20.\u6709\u610F\u601D\u7684\u5E93","path":"/zh-CN/article2/20.\u6709\u610F\u601D\u7684\u5E93","meta":{},"children":[{"path":"/zh-CN/article2/20.\u6709\u610F\u601D\u7684\u5E93/lottie","title":"Lottie","meta":{"order":3}}]},{"title":"21.macos\u76F8\u5173","path":"/zh-CN/article2/21.macos\u76F8\u5173","meta":{},"children":[{"path":"/zh-CN/article2/21.macos\u76F8\u5173/copilot","title":"copilot","meta":{"order":3}},{"path":"/zh-CN/article2/21.macos\u76F8\u5173/github-badge","title":"githubBadge","meta":{"order":3}},{"path":"/zh-CN/article2/21.macos\u76F8\u5173/github\u5361\u987F\u539F\u56E0","title":"github \u5361\u987F\u539F\u56E0","meta":{"order":3}},{"path":"/zh-CN/article2/21.macos\u76F8\u5173/\u4F7F\u7528\u5728\u7EBFvscode\u6253\u5F00github","title":"\u4F7F\u7528\u5728\u7EBF vscode \u6253\u5F00 github","meta":{"order":3}},{"path":"/zh-CN/article2/21.macos\u76F8\u5173/\u6CB9\u7334\u811A\u672C","title":"\u6CB9\u7334\u811A\u672C","meta":{"order":3}}]}],"/zh-CN/components":[{"title":"antd","path":"/zh-CN/components/antd","meta":{"order":1},"children":[{"path":"/zh-CN/components/antd/date-picker","title":"DatePicker","meta":{"order":1}},{"path":"/zh-CN/components/antd/form-layout","title":"FormLayout","meta":{"order":1}}]},{"title":"npm package","path":"/zh-CN/components/npm","meta":{"order":1},"children":[{"path":"/zh-CN/components/npm/echarts-react","title":"echarts-for-react","meta":{"order":1}}]},{"title":"react\u6280\u5DE7","path":"/zh-CN/components/react","meta":{"order":1},"children":[{"path":"/zh-CN/components/react/muitiple-ref","title":"MyitipleRef","meta":{"order":1}},{"path":"/zh-CN/components/react/ref-demo","title":"RefDemo","meta":{"order":1}},{"path":"/zh-CN/components/react/ts-ref-instance","title":"TsRefInstance","meta":{"order":1}}]},{"title":"\u6587\u4EF6\u7684\u5BFC\u51FA\u4E0E\u9884\u89C8","path":"/zh-CN/components/file","meta":{"order":2},"children":[{"path":"/zh-CN/components/file/file-export-excel","title":"\u524D\u7AEF\u5BFC\u51FA excel","meta":{"order":2}},{"path":"/zh-CN/components/file/file-export-word","title":"\u524D\u7AEF\u5BFC\u51FA word","meta":{"order":2}},{"path":"/zh-CN/components/file/file-pre-view-page","title":"\u524D\u7AEF\u9884\u89C8 PDF excel word \u7B49\u5404\u7C7B\u6587\u4EF6","meta":{"order":2}}]},{"title":"\u5C01\u88C5\u7684\u4E1A\u52A1\u7EC4\u4EF6","path":"/zh-CN/components/my-components","meta":{"order":2},"children":[{"path":"/zh-CN/components/my-components/calendar","title":"\u591A\u9009\u7684\u65E5\u671F\u63A7\u4EF6","meta":{"order":2}},{"path":"/zh-CN/components/my-components/query-form","title":"QueryForm","meta":{"order":2}},{"path":"/zh-CN/components/my-components/select","title":"Select","meta":{"order":2}},{"path":"/zh-CN/components/my-components/transfer-form","title":"\u7A7F\u68AD\u6846","meta":{"order":2}}]}],"/zh-CN/debug":[{"path":"/zh-CN/debug","title":"Debug","meta":{"order":4}}],"/zh-CN/npm":[{"path":"/zh-CN/npm","title":"Npm","meta":{}}],"/zh-CN/project":[{"title":"theme","path":"/zh-CN/project/theme","meta":{"order":5},"children":[]},{"title":"VueAutoImport","path":"/zh-CN/project/VueAutoImport","meta":{"order":6},"children":[]},{"title":"VueDebugger","path":"/zh-CN/project/VueDebugger","meta":{"order":6},"children":[]},{"title":"docker","path":"/zh-CN/project/docker","meta":{"order":6},"children":[]},{"title":"UmiPermission","path":"/zh-CN/project/umi_permission","meta":{"order":6},"children":[]},{"title":"BuriedPoint","path":"/zh-CN/project/BuriedPoint","meta":{},"children":[]},{"title":"CustomTableAndFom","path":"/zh-CN/project/CustomTableAndFom","meta":{},"children":[]},{"title":"\u5927\u6587\u4EF6\u65AD\u70B9\u7EED\u4F20","path":"/zh-CN/project/LargeFileUpload","meta":{},"children":[]},{"title":"MultipleTag","path":"/zh-CN/project/MultipleTag","meta":{},"children":[]},{"title":"Persistence","path":"/zh-CN/project/Persistence","meta":{},"children":[]},{"title":"VueHOC","path":"/zh-CN/project/VueHOC","meta":{},"children":[]},{"title":"node \u811A\u672C\u6CE8\u5165\u6587\u4EF6","path":"/zh-CN/project/node","meta":{},"children":[]},{"title":"sso\u5355\u70B9\u767B\u5F55","path":"/zh-CN/project/sso","meta":{},"children":[]},{"title":"Websocket","path":"/zh-CN/project/websocket","meta":{},"children":[]}],"/zh-CN/visualization":[{"title":"canvas","meta":{"__fallback":true},"children":[],"path":"/zh-CN/visualization/canvas"},{"title":"D3","path":"/zh-CN/visualization/d3","meta":{},"children":[{"path":"/zh-CN/visualization/d3","title":"D3","meta":{}},{"path":"/zh-CN/visualization/d3/proportion1","title":"Proportion1","meta":{}},{"path":"/zh-CN/visualization/d3/proportion2","title":"Proportion2","meta":{}}]},{"title":"Svg","path":"/zh-CN/visualization/svg","meta":{},"children":[{"path":"/zh-CN/visualization/svg/base","title":"Base","meta":{}},{"path":"/zh-CN/visualization/svg/hign","title":"Hign","meta":{}}]}],"/zh-CN/guide":[{"path":"/zh-CN/guide","title":"\u603B\u89C8","meta":{"order":1}},{"title":"React\u6027\u80FD\u4F18\u5316","path":"/zh-CN/guide/react\u6027\u80FD\u4F18\u5316","meta":{"order":1},"children":[]},{"title":"TypeScript\u8FDB\u9636\u6587\u7AE0","path":"/zh-CN/guide/type-script\u8FDB\u9636\u6587\u7AE0","meta":{"order":1},"children":[]},{"title":"\u6211\u7684TypeScript\u76F8\u5173\u4EE3\u7801","path":"/zh-CN/guide/\u6211\u7684type-script\u76F8\u5173\u4EE3\u7801","meta":{"order":1},"children":[]},{"title":"\u9AD8\u7EA7\u524D\u7AEF\u5FC5\u8BFB","path":"/zh-CN/guide/\u9AD8\u7EA7\u524D\u7AEF\u5FC5\u8BFB","meta":{"order":1},"children":[]}]}},"locales":[{"name":"en-US","label":"English"},{"name":"zh-CN","label":"\u4E2D\u6587"}],"navs":{"en-US":[{"title":"\u524D\u7AEF\u4E4B\u8DEF","order":1,"path":"/guide"},{"title":"Article","path":"/article","order":1},{"title":"\u6211\u9047\u5230\u7684\u5343\u5947\u767E\u602A\u7684 bug","order":4,"path":"/debug"},{"path":"/npm","title":"Npm"},{"path":"/project","title":"Project"},{"title":"Article2","path":"/article2"},{"path":"/components","title":"Components"},{"title":"Visualization","path":"/visualization"},{"title":"GitHub","path":"https://github.com/eternallycyf/my-demo-markdown"}],"zh-CN":[{"title":"\u524D\u7AEF\u4E4B\u8DEF","order":1,"path":"/zh-CN/guide"},{"title":"Article","path":"/zh-CN/article","order":1},{"title":"\u6211\u9047\u5230\u7684\u5343\u5947\u767E\u602A\u7684 bug","order":4,"path":"/zh-CN/debug"},{"path":"/zh-CN/npm","title":"Npm"},{"path":"/zh-CN/project","title":"Project"},{"title":"Article2","path":"/zh-CN/article2"},{"path":"/zh-CN/components","title":"Components"},{"title":"Visualization","path":"/zh-CN/visualization"},{"title":"GitHub","path":"https://github.com/eternallycyf/my-demo-markdown"}]},"title":"my-demo-markdown","logo":"/my-demo-markdown/images/logo.png","mode":"site","repository":{"url":"https://github.com/eternallycyf/my-demo-markdown","branch":"main"},"theme":{}}')},x2v5:function(C){C.exports=JSON.parse('{"Calendar":{"default":[{"identifier":"time","description":"\u4F20\u5165\u521D\u59CB\u5316\u7684\u65F6\u95F4","type":"MomentInput","required":true},{"identifier":"otherProps","description":"\u5F85\u6574\u7406","type":"any","required":true}]},"components":{"Filter":[{"identifier":"filterList","description":"\u67E5\u8BE2\u8868\u5355JSON\u5F62\u5F0F","type":"any[]","required":true},{"identifier":"autoSearch","description":"\u662F\u5426\u5141\u8BB8\u641C\u7D22","type":"boolean","default":"false"},{"identifier":"onSearch","description":"\u641C\u7D22\u4E8B\u4EF6\u56DE\u8C03","type":"(values: any) => void"},{"identifier":"onReset","description":"\u91CD\u7F6E\u4E8B\u4EF6\u56DE\u8C03","type":"() => void"}]},"Select":{"default":[{"identifier":"className","description":"\u4E5F\u53EF\u4EE5\u663E\u5F0F\u52A0\u4E0A\u63CF\u8FF0\u540D","type":"number","default":"\u652F\u6301\u5B9A\u4E49\u9ED8\u8BA4\u503C"}]},"class":{},"hook":{"TransferForm":[{"identifier":"transferOkCallBack","description":"\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03\u51FD\u6570","type":"() => void","required":true},{"identifier":"originData","description":"\u521D\u59CB\u5316\u6240\u6709\u7684\u6570\u636E\u6E90","type":"any[]","required":true},{"identifier":"formRef","description":"\u5916\u754C\u4F20\u5165\u7684Antd-form-ref","type":"FormInstance<any>","required":true},{"identifier":"falseSelectItmeName","description":"\u540C\u6B65\u53D8\u52A8\u7684select formItem name","type":"string"},{"identifier":"modalProps","description":"\u6A21\u6001\u6846\u7684\u5176\u4ED6props","type":"ModalProps"},{"identifier":"transferProps","description":"\u7A7F\u68AD\u6846\u7684\u5176\u4ED6props","type":"TransferProps<any>"}]}}')},"z01/":function(C,N){function e(E){return C.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C.exports.__esModule=!0,C.exports.default=C.exports,e(E)}C.exports=e,C.exports.__esModule=!0,C.exports.default=C.exports}}]);

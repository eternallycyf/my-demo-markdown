(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[7490],{1662:function(s,c,a){"use strict";a.r(c);var r=a(12924),e=a.n(r),n=a(16924),t=a(53401),d=a(86821);const o=e().memo(({demos:l})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h1",{id:"tailwindcss"},e().createElement(n.AnchorLink,{to:"#tailwindcss","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"tailwindCSS"),e().createElement("h2",{id:"1\u6982\u5FF5"},e().createElement(n.AnchorLink,{to:"#1\u6982\u5FF5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"1.\u6982\u5FF5"),e().createElement("h3",{id:"\u65AD\u70B9"},e().createElement(n.AnchorLink,{to:"#\u65AD\u70B9","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u65AD\u70B9"),e().createElement("h4",{id:"\u65AD\u70B9-1"},e().createElement(n.AnchorLink,{to:"#\u65AD\u70B9-1","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u65AD\u70B9"),e().createElement(t.Z,{code:`# \u5148\u6307\u5B9A\u5168\u5C40\u6837\u5F0F \u518D\u6307\u5B9A\u4E0D\u540C\u6805\u683C\u7684\u6837\u5F0F
# \u5982\u679C\u53EA\u6307\u5B9A\u4E86\u67D0\u4E2A\u6805\u683C \u6BD4\u5982 sm \u5C31\u53EA\u5728 sm \u751F\u6548
bg-green-500 md:bg-red-500 lg:bg-green-500`,lang:"js"}),e().createElement("h4",{id:"\u9ED8\u8BA4\u65AD\u70B9"},e().createElement(n.AnchorLink,{to:"#\u9ED8\u8BA4\u65AD\u70B9","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u9ED8\u8BA4\u65AD\u70B9"),e().createElement(t.Z,{code:`# \u81EA\u5B9A\u4E49\u65AD\u70B9
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}`,lang:"js"}),e().createElement("h4",{id:"\u81EA\u5B9A\u4E49\u65AD\u70B9"},e().createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u65AD\u70B9","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u65AD\u70B9"),e().createElement(t.Z,{code:`// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
};`,lang:"js"}),e().createElement("h3",{id:"apply"},e().createElement(n.AnchorLink,{to:"#apply","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"apply"),e().createElement(t.Z,{code:`<button class="btn btn-green">
  Button
</button>
#
.btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }
# \u5168\u5C40apply
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-blue {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}`,lang:"js"}),e().createElement("h3",{id:"\u5B57\u4F53\u56FE\u6807"},e().createElement(n.AnchorLink,{to:"#\u5B57\u4F53\u56FE\u6807","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5B57\u4F53\u56FE\u6807"),e().createElement(t.Z,{code:`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  @font-face {
    font-family: Proxima Nova;
    font-weight: 400;
    src: url(/fonts/proxima-nova/400-regular.woff) format("woff");
  }
  @font-face {
    font-family: Proxima Nova;
    font-weight: 500;
    src: url(/fonts/proxima-nova/500-medium.woff) format("woff");
  }
}`,lang:"js"}),e().createElement("h2",{id:"2css"},e().createElement(n.AnchorLink,{to:"#2css","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"2.CSS"),e().createElement("h3",{id:"base"},e().createElement(n.AnchorLink,{to:"#base","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"base"),e().createElement("h4",{id:"\u5A92\u4F53\u67E5\u8BE2"},e().createElement(n.AnchorLink,{to:"#\u5A92\u4F53\u67E5\u8BE2","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5A92\u4F53\u67E5\u8BE2"),e().createElement(d.Z,null,e().createElement("thead",null,e().createElement("tr",null,e().createElement("th",null,"sm"),e().createElement("th",null,"640px"),e().createElement("th",null,"@media (min-width: 640px) ","{"," ... ","}"))),e().createElement("tbody",null,e().createElement("tr",null,e().createElement("td",null,"md"),e().createElement("td",null,"768px"),e().createElement("td",null,"@media (min-width: 768px) ","{"," ... ","}")),e().createElement("tr",null,e().createElement("td",null,"lg"),e().createElement("td",null,"1024px"),e().createElement("td",null,"@media (min-width: 1024px) ","{"," ... ","}")),e().createElement("tr",null,e().createElement("td",null,"xl"),e().createElement("td",null,"1280px"),e().createElement("td",null,"@media (min-width: 1280px) ","{"," ... ","}")),e().createElement("tr",null,e().createElement("td",null,"2xl"),e().createElement("td",null,"1536px"),e().createElement("td",null,"@media (min-width: 1536px) ","{"," ... ","}")))),e().createElement(t.Z,{code:`#
  \u9ED8\u8BA4\u5BBD\u5EA6\u4E3A16\uFF0C\u4E2D\u7B49\u5C4F\u5E55\u4E3A32\uFF0C\u5927\u5C4F\u5E55\u4E3A48
<img class="w-16 md:w-32 lg:w-48" src="...">
# \u6805\u683C\u9002\u914D\u91C7\u7528\u4E0D\u540C\u5C4F\u5E55\u8986\u76D6\u7684\u65B9\u6CD5 \u5982\u679C\u53EA\u5199sm \u5C31\u53EA\u5BF9sm\u751F\u6548
<div class="text-center sm:text-left"></div>`,lang:"js"}),e().createElement("h4",{id:"flex"},e().createElement(n.AnchorLink,{to:"#flex","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"flex"),e().createElement(t.Z,{code:`flex
flex-shrink-0  \u9632\u6B62\u5927\u5C4F\u5E55\u56FE\u50CF\u7F29\u5C0F`,lang:"js"}),e().createElement("h4",{id:"width"},e().createElement(n.AnchorLink,{to:"#width","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"width"),e().createElement("h4",{id:"100"},e().createElement(n.AnchorLink,{to:"#100","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"100%"),e().createElement(t.Z,{code:`# \u9AD8\u5EA6\u81EA\u9002\u5E94
md:h-full`,lang:"js"}),e().createElement("h4",{id:"min-width"},e().createElement(n.AnchorLink,{to:"#min-width","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"min-width"),e().createElement("h4",{id:"\u989C\u8272"},e().createElement(n.AnchorLink,{to:"#\u989C\u8272","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u989C\u8272"),e().createElement(t.Z,{code:`#
bg-green-500 md:bg-red-500 lg:bg-green-500`,lang:"js"}),e().createElement("h4",{id:"\u9009\u62E9\u5668"},e().createElement(n.AnchorLink,{to:"#\u9009\u62E9\u5668","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u9009\u62E9\u5668"),e().createElement("h5",{id:"first-child"},e().createElement(n.AnchorLink,{to:"#first-child","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"first-child"),e().createElement(t.Z,{code:"first: rotate - 45;",lang:"js"}),e().createElement("h5",{id:"last-child"},e().createElement(n.AnchorLink,{to:"#last-child","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"last-child"),e().createElement(t.Z,{code:"last: rotate - 45;",lang:"js"}),e().createElement("h5",{id:"odd"},e().createElement(n.AnchorLink,{to:"#odd","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"odd"),e().createElement(t.Z,{code:"odd: rotate - 45;",lang:"js"}),e().createElement("h5",{id:"even"},e().createElement(n.AnchorLink,{to:"#even","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"even"),e().createElement(t.Z,{code:"even: rotate - 45;",lang:"js"}),e().createElement("h3",{id:"\u89E6\u53D1\u6837\u5F0F"},e().createElement(n.AnchorLink,{to:"#\u89E6\u53D1\u6837\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u89E6\u53D1\u6837\u5F0F"),e().createElement("h4",{id:"disabled"},e().createElement(n.AnchorLink,{to:"#disabled","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"disabled"),e().createElement(t.Z,{code:"disabled: opacity - 50;",lang:"js"}),e().createElement("h4",{id:"border"},e().createElement(n.AnchorLink,{to:"#border","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"border"),e().createElement(t.Z,{code:`border;
border - transparent;`,lang:"js"}),e().createElement("h4",{id:"border-radius"},e().createElement(n.AnchorLink,{to:"#border-radius","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"border-radius"),e().createElement(t.Z,{code:"rounded;",lang:"js"}),e().createElement("h4",{id:"hover-focus-active-visited"},e().createElement(n.AnchorLink,{to:"#hover-focus-active-visited","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"hover-focus-active-visited"),e().createElement(t.Z,{code:`#
focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
#
hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
#
visited:text-purple-600



# hover \u5BF9\u5B50\u5143\u7D20\u8BBE\u7F6E\u6837\u5F0F
\u7236\u5143\u7D20 group
\u5B50\u5143\u7D20 group-hover:  group-focus:
# \u548C\u6805\u683C\u7EC4\u5408\u4F7F\u7528
sm:hover:bg-blue-500

# focus-within \u5728\u8BE5\u5143\u7D20\u6216\u540E\u4EE3\u6709\u7126\u70B9\u7684\u65F6\u5019\u4F7F\u7528`,lang:"js"}),e().createElement("h4",{id:"checked"},e().createElement(n.AnchorLink,{to:"#checked","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"checked"),e().createElement(t.Z,{code:"checked: bg - blue - 600;",lang:"js"}),e().createElement("h3",{id:"\u52A8\u753B"},e().createElement(n.AnchorLink,{to:"#\u52A8\u753B","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u52A8\u753B"),e().createElement(t.Z,{code:`# transform
transform motion-safe:hover:scale-110
# motion-reduce:transform-none`,lang:"js"}),e().createElement("h3",{id:"\u5E03\u5C40"},e().createElement(n.AnchorLink,{to:"#\u5E03\u5C40","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5E03\u5C40"),e().createElement("h4",{id:"\u5BB9\u5668"},e().createElement(n.AnchorLink,{to:"#\u5BB9\u5668","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5BB9\u5668"),e().createElement(t.Z,{code:`container;
mx - auto;`,lang:"js"}),e().createElement("h3",{id:"\u5176\u4ED6\u529F\u80FD"},e().createElement(n.AnchorLink,{to:"#\u5176\u4ED6\u529F\u80FD","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6\u529F\u80FD"),e().createElement("h4",{id:"\u6DF1\u8272\u6A21\u5F0F"},e().createElement(n.AnchorLink,{to:"#\u6DF1\u8272\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u6DF1\u8272\u6A21\u5F0F"),e().createElement(t.Z,{code:`dark;
dark: bg - gray - 800;`,lang:"js"}))));c.default=l=>{const u=e().useContext(n.context),m=u.demos;return e().useEffect(()=>{var i;l!=null&&(i=l.location)!==null&&i!==void 0&&i.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(l.location.hash.slice(1)))},[]),e().createElement(o,{demos:m})}}}]);

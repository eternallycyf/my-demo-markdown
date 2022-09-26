(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[4309],{36459:function(E,s,n){"use strict";n.r(s);var o=n(12924),e=n.n(o),t=n(16924),a=n(53401);const i=e().memo(({demos:u})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"\u5EFA\u9020\u8005\u6A21\u5F0F"},e().createElement(t.AnchorLink,{to:"#\u5EFA\u9020\u8005\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5EFA\u9020\u8005\u6A21\u5F0F"),e().createElement("ul",null,e().createElement("li",null,"\u5EFA\u9020\u8005\u6A21\u5F0F",e().createElement("code",null,"Builder Pattern"),"\u53C8\u53EF\u4EE5\u79F0\u4E3A\u751F\u6210\u5668\u6A21\u5F0F"),e().createElement("li",null,"\u662F\u5C06\u4E00\u4E2A\u590D\u6742\u5BF9\u8C61\u7684\u6784\u5EFA\u4E0E\u5B83\u7684\u8868\u793A\u5206\u79BB\uFF0C\u4F7F\u5F97\u540C\u6837\u7684\u6784\u5EFA\u8FC7\u7A0B\u53EF\u4EE5\u521B\u5EFA\u4E0D\u540C\u7684\u8868\u793A\uFF0C\u5EFA\u9020\u8005\u6A21\u5F0F\u5C5E\u4E8E\u5BF9\u8C61\u521B\u5EFA\u578B\u6A21\u5F0F\u3002")),e().createElement("h2",{id:"\u5B9E\u73B0"},e().createElement(t.AnchorLink,{to:"#\u5B9E\u73B0","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u5B9E\u73B0"),e().createElement("ul",null,e().createElement("li",null,"\u4F8B\u5982\u6211\u4EEC\u60F3\u8981\u521B\u5EFA\u4E00\u4E2A\u6D88\u606F\u7EC4\u4EF6",e().createElement("code",null,"Message"),", \u5305\u62EC\u6807\u9898\u3001\u6B63\u6587\u3001 \u63D0\u793A ",e().createElement("code",null,"logo")," \u4EE5\u53CA\u989C\u8272\u56DB\u90E8\u5206"),e().createElement("li",null,"\u800C\u6D88\u606F\u7EC4\u4EF6\u5305\u62EC\u5F39\u51FA\u6D88\u606F\u7EC4\u4EF6 ",e().createElement("code",null,"AlertMessage")," \u548C\u63D0\u793A\u6D88\u606F\u7EC4\u4EF6 ",e().createElement("code",null,"TooltipMessage")," \u4E24\u79CD"),e().createElement("li",null,"\u5728\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u57FA\u7840\u4E0A\u3002\u6307\u5B9A\u4E86\u6307\u6325\u8005",e().createElement("code",null,"(Director)"),"\u6765\u6784\u5EFA\u5BF9\u8C61")),e().createElement(a.Z,{code:`abstract class Message {
  public title: string;
  public text: string;
  public logo: string;
  public color: string;
  constructor(title: string, text: string, logo: string, color: string) {
    this.title = title;
    this.text = text;
    this.logo = logo;
    this.color = color;
  }
  abstract setTitle(): void;
  abstract setText(): void;
  abstract setLogo(): void;
  abstract setColor(): void;
  abstract getMessage(): void;
}

class AlertMessage extends Message {
  setTitle() {
    this.title = 'alert title';
  }
  setText() {
    this.text = 'alert info';
  }
  setLogo() {
    this.logo = 'image_1.png';
  }
  setColor() {
    this.color = 'blue';
  }
  getMessage(): string {
    return \`Alert Message: \${this.title} \${this.text} \${this.logo} \${this.color}\`;
  }
}

class TooltipMessage extends Message {
  setTitle() {
    this.title = 'tooltip title';
  }
  setText() {
    this.text = 'tooltip info';
  }
  setLogo() {
    this.logo = 'image_2.png';
  }
  setColor() {
    this.color = 'red';
  }
  getMessage(): string {
    return \`Tooltip Message: \${this.title} \${this.text} \${this.logo} \${this.color}\`;
  }
}

class Director {
  buildMessage(message: Message) {
    message.setTitle();
    message.setText();
    message.setLogo();
    message.setColor();
  }
}

const alertMessage = new AlertMessage(
  'alert title',
  'alert info',
  'image_1.png',
  'blue',
);
const tooltipMessage = new TooltipMessage(
  'tool title',
  'tool info',
  'image_2.png',
  'red',
);

const director = new Director();
director.buildMessage(alertMessage);
director.buildMessage(tooltipMessage);

alertMessage.getMessage();
tooltipMessage.getMessage();`,lang:"typescript"}),e().createElement("h2",{id:"\u53C2\u8003\u94FE\u63A5"},e().createElement(t.AnchorLink,{to:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"\u53C2\u8003\u94FE\u63A5"),e().createElement("ul",null,e().createElement("li",null,e().createElement(t.Link,{to:"https://www.runoob.com/design-pattern/builder-pattern.html"},"https://www.runoob.com/design-pattern/builder-pattern.html")),e().createElement("li",null,e().createElement(t.Link,{to:"https://wiki.jikexueyuan.com/project/java-design-pattern/builder-pattern.html"},"https://wiki.jikexueyuan.com/project/java-design-pattern/builder-pattern.html")),e().createElement("li",null,e().createElement(t.Link,{to:"https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/builder.html"},"https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/builder.html"))))));s.default=u=>{const r=e().useContext(t.context),c=r.demos;return e().useEffect(()=>{var l;u!=null&&(l=u.location)!==null&&l!==void 0&&l.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e().createElement(i,{demos:c})}}}]);

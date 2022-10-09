(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{"15JX":function(E,i,t){"use strict";t.r(i);var c=t("cDcd"),u=t.n(c),e=t("dEAq"),F=t.n(e),r=t("JQtJ"),n=t("6T1g");const o=u.a.memo(({demos:a})=>u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("p",null,u.a.createElement(r.a,null,"\u5F85\u6574\u7406 \u6574\u7406\u540E\u5C06\u79FB\u52A8\u5230\u5176\u4ED6\u5730\u65B9")),u.a.createElement("h1",{id:"react-\u6027\u80FD\u4F18\u5316"},u.a.createElement(e.AnchorLink,{to:"#react-\u6027\u80FD\u4F18\u5316","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"React \u6027\u80FD\u4F18\u5316"),u.a.createElement("h2",{id:"1\u51CF\u5C11-render-\u6B21\u6570"},u.a.createElement(e.AnchorLink,{to:"#1\u51CF\u5C11-render-\u6B21\u6570","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"1.\u51CF\u5C11 render \u6B21\u6570"),u.a.createElement("h3",{id:"shouldcomponentupdate-purecomponent"},u.a.createElement(e.AnchorLink,{to:"#shouldcomponentupdate-purecomponent","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"shouldComponentUpdate PureComponent"),u.a.createElement(n.a,{code:`shouldComponentUpdate(nextProps,nextState) {
return !this.props.xxx === nextProps.xxx
}
// PureComponent \u81EA\u52A8\u6D45\u5BF9\u6BD4`,lang:"js"}),u.a.createElement("h3",{id:"reactmemo"},u.a.createElement(e.AnchorLink,{to:"#reactmemo","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"React.Memo"),u.a.createElement(n.a,{code:`// 1.\u5F53props\u53D8\u5316\u7684\u65F6\u5019\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3 \u6D45\u5C42\u5BF9\u6BD4
function Component(props) {}
const MyComponent = React.memo(Component);
// 2.\u81EA\u5B9A\u4E49\u6BD4\u8F83\u5BF9\u6BD4Props \u5982\u679C\u76F8\u7B49\u8FD4\u56DEtrue \u5426\u5219\u8FD4\u56DEfalse
function MyComponent(props) {}
export default React.memo(MyComponent, (prevProps, nextProps) => boolean);`,lang:"js"}),u.a.createElement("h2",{id:"2\u51CF\u5C11\u51FD\u6570\u7684\u91CD\u65B0\u6267\u884C\u5BFC\u81F4\u7684\u6E32\u67D3-usecallback"},u.a.createElement(e.AnchorLink,{to:"#2\u51CF\u5C11\u51FD\u6570\u7684\u91CD\u65B0\u6267\u884C\u5BFC\u81F4\u7684\u6E32\u67D3-usecallback","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"2.\u51CF\u5C11\u51FD\u6570\u7684\u91CD\u65B0\u6267\u884C\u5BFC\u81F4\u7684\u6E32\u67D3: useCallback"),u.a.createElement(n.a,{code:`<button onClick={props.onClick}>\u6539\u6807\u9898</button>
// \u7EC4\u4EF6\u7684\u6BCF\u6B21\u6E32\u67D3\u90FD\u4F1A\u91CD\u65B0\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u51FD\u6570 \u56E0\u6B64\u51FD\u6570\u7684\u5F15\u7528\u5730\u5740\u53D1\u751F\u4E86\u53D8\u5316
// \u51FD\u6570\u4F1A\u91CD\u65B0\u5F00\u59CB\u6267\u884C \u5012\u662F\u5B50\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3
// \u89E3\u51B3\u529E\u6CD5\u5C31\u662F\u5728\u51FD\u6570\u6CA1\u6709\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u91CD\u65B0\u6E32\u67D3\u7684\u65F6\u5019\u4FDD\u6301\u4E24\u4E2A\u51FD\u6570\u7684\u5F15\u7528\u4E00\u81F4
const memoizedCallback = useCallback(()=>{}, [])
<Child onClick={memoizedCallback} name="xxx" />`,lang:"js"}),u.a.createElement("h2",{id:"3\u7F13\u5B58\u8BA1\u7B97\u91CF\u6BD4\u8F83\u5927\u7684\u51FD\u6570\u7ED3\u679C-usememo"},u.a.createElement(e.AnchorLink,{to:"#3\u7F13\u5B58\u8BA1\u7B97\u91CF\u6BD4\u8F83\u5927\u7684\u51FD\u6570\u7ED3\u679C-usememo","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"3.\u7F13\u5B58\u8BA1\u7B97\u91CF\u6BD4\u8F83\u5927\u7684\u51FD\u6570\u7ED3\u679C: useMemo"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u5982\u679C\u6CA1\u6709\u63D0\u4F9B\u4F9D\u8D56\u9879\u6570\u7EC4\uFF0CuseMemo \u5728\u6BCF\u6B21\u6E32\u67D3\u65F6\u90FD\u4F1A\u8BA1\u7B97\u65B0\u7684\u503C"),u.a.createElement("li",null,"\u8BA1\u7B97\u91CF\u5982\u679C\u5F88\u5C0F\u7684\u8BA1\u7B97\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u4E0D\u4F7F\u7528 useMemo\uFF0C\u56E0\u4E3A\u8FD9\u70B9\u4F18\u5316\u5E76\u4E0D\u4F1A\u4F5C\u4E3A\u6027\u80FD\u74F6\u9888\u7684\u8981\u70B9\uFF0C\u53CD\u800C\u53EF\u80FD\u4F7F\u7528\u9519\u8BEF\u8FD8\u4F1A\u5F15\u8D77\u4E00\u4E9B\u6027\u80FD\u95EE\u9898")),u.a.createElement(n.a,{code:"const base = useMemo(fn, []);",lang:"js"}),u.a.createElement("h2",{id:"4\u5176\u4ED6\u4F18\u5316"},u.a.createElement(e.AnchorLink,{to:"#4\u5176\u4ED6\u4F18\u5316","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"4.\u5176\u4ED6\u4F18\u5316"),u.a.createElement("h3",{id:"1\u5728-render-\u6E32\u67D3\u51FD\u6570\u4E2D\u4E0D\u8981\u8FDB\u884C\u590D\u6742\u7684\u526F\u4F5C\u7528\u6570\u7EC4\u6392\u5E8F-\u7B49\u7B49"},u.a.createElement(e.AnchorLink,{to:"#1\u5728-render-\u6E32\u67D3\u51FD\u6570\u4E2D\u4E0D\u8981\u8FDB\u884C\u590D\u6742\u7684\u526F\u4F5C\u7528\u6570\u7EC4\u6392\u5E8F-\u7B49\u7B49","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"1.\u5728 render \u6E32\u67D3\u51FD\u6570\u4E2D\u4E0D\u8981\u8FDB\u884C\u590D\u6742\u7684\u526F\u4F5C\u7528(\u6570\u7EC4\u6392\u5E8F \u7B49\u7B49)"),u.a.createElement("h3",{id:"2\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5D4C\u5957"},u.a.createElement(e.AnchorLink,{to:"#2\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5D4C\u5957","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"2.\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5D4C\u5957"),u.a.createElement("h3",{id:"3\u865A\u62DF\u5217\u8868"},u.a.createElement(e.AnchorLink,{to:"#3\u865A\u62DF\u5217\u8868","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"3.\u865A\u62DF\u5217\u8868"),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(e.Link,{to:"https://usehooks-ts.com/react-hook/use-intersection-observer"},"https://usehooks-ts.com/react-hook/use-intersection-observer"))),u.a.createElement("h3",{id:"4\u60F0\u6027\u6E32\u67D3--\u60F0\u6027\u51FD\u6570"},u.a.createElement(e.AnchorLink,{to:"#4\u60F0\u6027\u6E32\u67D3--\u60F0\u6027\u51FD\u6570","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"4.\u60F0\u6027\u6E32\u67D3 && \u60F0\u6027\u51FD\u6570"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u60F0\u6027\u52A0\u8F7D\u8868\u793A\u51FD\u6570\u6267\u884C\u7684\u5206\u652F\u53EA\u4F1A\u5728\u51FD\u6570\u7B2C\u4E00\u6B21\u8C03\u7528\u7684\u65F6\u5019\u6267\u884C\u3002\u5728\u7B2C\u4E00\u6B21\u8C03\u7528\u7684\u8FC7\u7A0B\u4E2D\u3002"),u.a.createElement("li",null,"\u8BE5\u51FD\u6570\u88AB\u8986\u76D6\u4E3A\u53E6\u4E00\u4E2A\u6309\u7167\u5408\u9002\u7684\u65B9\u5F0F\u6267\u884C\u7684\u51FD\u6570\u3002\u8FD9\u6837\u4EFB\u4F55\u5BF9\u539F\u51FD\u6570\u7684\u8C03\u7528\u5C31\u4E0D\u7528\u518D\u7ECF\u8FC7\u6267\u884C\u7684\u5206\u652F\u4E86")),u.a.createElement(n.a,{code:`#
 var timeStamp = null;
  function getTimeStamp() {
    if (timeStamp) {
      return timeStamp
    }
    // \u76F4\u63A5\u4E3A\u5916\u754C\u7684\u53D8\u91CF\u8D4B\u503C
    timeStamp = new Date().getTime()
    return timeStamp;
  }
  console.log(getTimeStamp());
  console.log(getTimeStamp());
  console.log(getTimeStamp());
  console.log(getTimeStamp());
# \u81EA\u6267\u884C\u51FD\u6570 \u907F\u514D\u6C61\u67D3\u5168\u5C40\u53D8\u91CF
  var getTimeStamp = (function () {
    var timeStamp = null;
    return function () {
      if (timeStamp) {
        return timeStamp;
      }
      timeStamp = new Date().getTime()
      return timeStamp;
    }
  })()
# \u7B2C\u4E00\u6B21\u53EA\u662F\u5728\u7ED9\u51FD\u6570\u91CD\u65B0\u5B9A\u4E49 \u7B2C\u4E8C\u6B21\u6267\u884C\u65F6\u5019\u624D\u751F\u6548
 var getTimeStamp = function () {
    var timeStamp = new Date().getTime()
    getTimeStamp = function () {
      return timeStamp
    }
    return getTimeStamp()
  }
# element ui \u6E90\u7801 \u5904\u7406 dom \u4E8B\u4EF6
export const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();
#
   function test(num) {
    switch (num) {
      case 1:
        test = () => 1
        break;
      case 2:
        test = () => 2
        break;
      case 3:
        test = () => 3
        break;
      default:
        test = () => null
        break;
    }
    return test()
  }
  console.log(test(null)); // null`,lang:"js"}),u.a.createElement("h3",{id:"5\u51CF\u5C11\u4F7F\u7528\u7BAD\u5934\u51FD\u6570--\u5B9E\u4F8B\u65B9\u6CD5"},u.a.createElement(e.AnchorLink,{to:"#5\u51CF\u5C11\u4F7F\u7528\u7BAD\u5934\u51FD\u6570--\u5B9E\u4F8B\u65B9\u6CD5","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"5.\u51CF\u5C11\u4F7F\u7528\u7BAD\u5934\u51FD\u6570 => \u5B9E\u4F8B\u65B9\u6CD5"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u6B21\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u90FD\u521B\u5EFA\u65B0\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u5B50\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3")),u.a.createElement(n.a,{code:`// 1.class
<ComplexComponent onClick={evt => onClick(evt.id)} otherProps={values} />;
class MyComponent extends Component {
  render() {
    <ComplexComponent onClick={this.handleClick} otherProps={values} />;
  }
  handleClick = () => {};
}
// 2.hooks \u4F7F\u7528useCallback\u5305\u88F9
const handleClick = useCallback(() => {}, []);
return <ComplexComponent onClick={handleClick} otherProps={values} />;
// 3.\u5F53\u72B6\u6001\u5F88\u591A\u65F6\u5019
function useRefProps<T>(props: T) {
  const ref = useRef < T > props;
  // \u6BCF\u6B21\u6E32\u67D3\u66F4\u65B0props
  useEffect(() => {
    ref.current = props;
  });
}

function MyComp(props) {
  const propsRef = useRefProps(props);
  // \u73B0\u5728handleClick\u662F\u59CB\u7EC8\u4E0D\u53D8\u7684
  const handleClick = useCallback(() => {
    const { foo, bar, baz, bazz, bazzzz } = propsRef.current;
  }, []);
}
// 4.class\u9700\u8981bind\u7684\u65F6\u5019
// \u4E0D\u8981\u8FD9\u6837 <input type="button" value="Click" onClick={this.handleButtonClick.bind(this)} />
<input type="button" value="Click" onClick={this.handleButtonClick} />;
  constructor() {
    this.state = {
      name: "Mayank"
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }`,lang:"js"}),u.a.createElement("h3",{id:"6\u4F7F\u7528-immutablejs"},u.a.createElement(e.AnchorLink,{to:"#6\u4F7F\u7528-immutablejs","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"6.\u4F7F\u7528 Immutable.js"),u.a.createElement("h3",{id:"7\u7B80\u5316-state-\u548C-props"},u.a.createElement(e.AnchorLink,{to:"#7\u7B80\u5316-state-\u548C-props","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"7.\u7B80\u5316 state \u548C props"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u4E0D\u662F\u6240\u6709\u6570\u636E\u90FD\u9700\u8981\u653E\u5728 state \u91CC\u9762"),u.a.createElement("li",null,"\u5982\u679C\u9700\u8981\u7EC4\u4EF6\u54CD\u5E94\u5B83\u7684\u53D8\u52A8, \u6216\u8005\u9700\u8981\u6E32\u67D3\u5230\u89C6\u56FE\u4E2D\u7684\u6570\u636E\u624D\u5E94\u8BE5\u653E\u5230 state \u4E2D"),u.a.createElement("li",null,"\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u53D8\u52A8\u5BFC\u81F4\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3")),u.a.createElement("h3",{id:"8\u9897\u7C92\u5316\u7EC4\u4EF6"},u.a.createElement(e.AnchorLink,{to:"#8\u9897\u7C92\u5316\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"8.\u9897\u7C92\u5316\u7EC4\u4EF6"),u.a.createElement("ul",null,u.a.createElement("li",null,"vue \u4E0D\u9700\u8981 shouldComponentUpdate \u4F1A\u81EA\u52A8\u4F18\u5316"),u.a.createElement("li",null,"\u4F46\u662F\u5982\u679C\u592A\u8FC7\u8026\u5408 \u53EA\u8981\u8981\u4EFB\u610F\u4E00\u4E2A\u5C5E\u6027\u503C\u53D8\u52A8\u5C31\u4F1A\u91CD\u65B0\u6E32\u67D3\u6574\u4E2A\u7EC4\u4EF6"),u.a.createElement("li",null,"\u5E94\u8BE5\u5C06\u6570\u636E\u9694\u79BB\u62BD\u53D6\u5230\u5355\u4E00\u804C\u8D23\u7684\u7EC4\u4EF6"),u.a.createElement("li",null,"\u8D8A\u7EC6\u7C92\u5EA6\u7684\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u6536\u83B7\u66F4\u9AD8\u7684\u6027\u80FD\u4F18\u5316\u6548\u679C")),u.a.createElement("h3",{id:"8\u61D2\u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6"},u.a.createElement(e.AnchorLink,{to:"#8\u61D2\u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"8.\u61D2\u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6"),u.a.createElement("ul",null,u.a.createElement("li",null,"lazy Suspense"),u.a.createElement("li",null,"\u51CF\u5C11\u4E3B\u5305\u4F53\u79EF \u51CF\u5C11\u7F51\u7EDC\u5E26\u5BBD")),u.a.createElement(n.a,{code:`if (this.props.name == 'Mayank') {
  ComponentToLazyLoad = lazy(() => import('./mayankComponent'));
} else if (this.props.name == 'Anshul') {
  ComponentToLazyLoad = lazy(() => import('./anshulComponent'));
}
<div>
  <h1>This is the Base User: {this.state.name}</h1>
  <Suspense fallback={<div>Loading...</div>}>
    <ComponentToLazyLoad />
  </Suspense>
</div>;`,lang:"js"}),u.a.createElement("h3",{id:"8\u7528-fragment-\u4EE3\u66FF\u81EA\u5DF1\u6700\u5916\u5C42\u5199\u7684\u5143\u7D20"},u.a.createElement(e.AnchorLink,{to:"#8\u7528-fragment-\u4EE3\u66FF\u81EA\u5DF1\u6700\u5916\u5C42\u5199\u7684\u5143\u7D20","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"8.\u7528 Fragment \u4EE3\u66FF\u81EA\u5DF1\u6700\u5916\u5C42\u5199\u7684\u5143\u7D20"),u.a.createElement("h3",{id:"9\u590D\u6742\u53D8\u52A8\u7684\u7EC4\u4EF6key"},u.a.createElement(e.AnchorLink,{to:"#9\u590D\u6742\u53D8\u52A8\u7684\u7EC4\u4EF6key","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"9.\u590D\u6742\u53D8\u52A8\u7684\u7EC4\u4EF6+Key"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u5E76\u4E0D\u662F\u53EA\u6709 map \u6E32\u67D3\u7684\u65F6\u5019\u624D\u80FD\u5199 key"),u.a.createElement("li",null,"element \u7B49\u7EC4\u4EF6\u5E93\u4F1A\u5C06\u4E00\u4E9B API \u5229\u7528 computed \u7F13\u5B58\uFF08computed \u53EA\u6709\u5F53 props \u548C data \u4E2D\u7684\u53D8\u91CF\u53D8\u5316\u7684\u65F6\u5019\u624D\u4F1A\u91CD\u65B0\u7F13\u5B58\uFF09"),u.a.createElement("li",null,"vue \u7684 diff \u7B97\u6CD5\u6709\u65F6\u5019\u81EA\u52A8\u8BA1\u7B97\u4F1A\u76F4\u63A5\u7F13\u5B58",u.a.createElement("ul",null,u.a.createElement("li",null,"\uFF08\u6BD4\u5982\u4F60\u5199\u4E86\u4E24\u4E2A El-Button \u8FD9\u65F6\u5019 diff \u7B97\u6CD5\u5C06\u4ED6\u4EEC\u5F53\u6210\u4E00\u4E2A,\u800C\u7EC4\u4EF6\u5E93\u5185\u90E8\u7684 computed \u6CA1\u6709\u91CD\u65B0\u8BA1\u7B97\uFF09"),u.a.createElement("li",null,"\u6B64\u65F6\u5C31\u53EF\u80FD\u4EA7\u751F\u503C\u53D8\u5316 \u4F46\u662F\u8868\u5355\u7684 API \u672A\u53D8\u5316\u7684 bug"),u.a.createElement("li",null,"\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u7ED9\u5176\u52A0\u4E0D\u540C\u7684 key")))),u.a.createElement("h3",{id:"10\u907F\u514D\u4F7F\u7528\u5185\u8054\u6837\u5F0F"},u.a.createElement(e.AnchorLink,{to:"#10\u907F\u514D\u4F7F\u7528\u5185\u8054\u6837\u5F0F","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"10.\u907F\u514D\u4F7F\u7528\u5185\u8054\u6837\u5F0F"),u.a.createElement("ul",null,u.a.createElement("li",null,"<b style=","{","{",'"backgroundColor": "blue"',"}","}",">Welcome to Sample Page")),u.a.createElement("h3",{id:"11\u9632\u6D41\u8282\u6296"},u.a.createElement(e.AnchorLink,{to:"#11\u9632\u6D41\u8282\u6296","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"11.\u9632\u6D41\u8282\u6296"),u.a.createElement("h3",{id:"12cdn"},u.a.createElement(e.AnchorLink,{to:"#12cdn","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"12.CDN"),u.a.createElement("h3",{id:"13gzip-\u538B\u7F29"},u.a.createElement(e.AnchorLink,{to:"#13gzip-\u538B\u7F29","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"13.gzip \u538B\u7F29"),u.a.createElement(n.a,{code:`http{
  gzip on;                      #\u5F00\u542Fgzip\u529F\u80FD
  gzip_types *;                 #\u538B\u7F29\u6E90\u6587\u4EF6\u7C7B\u578B,\u6839\u636E\u5177\u4F53\u7684\u8BBF\u95EE\u8D44\u6E90\u7C7B\u578B\u8BBE\u5B9A
  gzip_comp_level 6;            #gzip\u538B\u7F29\u7EA7\u522B
  gzip_min_length 1024;         #\u8FDB\u884C\u538B\u7F29\u54CD\u5E94\u9875\u9762\u7684\u6700\u5C0F\u957F\u5EA6,content-length
  gzip_buffers 4 16K;           #\u7F13\u5B58\u7A7A\u95F4\u5927\u5C0F
  gzip_http_version 1.1;        #\u6307\u5B9A\u538B\u7F29\u54CD\u5E94\u6240\u9700\u8981\u7684\u6700\u4F4EHTTP\u8BF7\u6C42\u7248\u672C
  gzip_vary  on;                #\u5F80\u5934\u4FE1\u606F\u4E2D\u6DFB\u52A0\u538B\u7F29\u6807\u8BC6
  gzip_disable "MSIE [1-6]\\.";  #\u5BF9IE6\u4EE5\u4E0B\u7684\u7248\u672C\u90FD\u4E0D\u8FDB\u884C\u538B\u7F29
  gzip_proxied  off;            #nginx\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u538B\u7F29\u670D\u52A1\u7AEF\u8FD4\u56DE\u6570\u636E\u7684\u6761\u4EF6
}`,lang:"conf"}),u.a.createElement("h3",{id:"14webpack-\u62C6\u5305"},u.a.createElement(e.AnchorLink,{to:"#14webpack-\u62C6\u5305","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"14.webpack \u62C6\u5305"),u.a.createElement("h4",{id:"css-\u62BD\u79BB"},u.a.createElement(e.AnchorLink,{to:"#css-\u62BD\u79BB","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"css \u62BD\u79BB"),u.a.createElement(n.a,{code:`plugins: [
   new MiniCssExtractPlugin({
     // \u5BF9\u8F93\u51FA\u7684css\u6587\u4EF6\u8FDB\u884C\u91CD\u547D\u540D
     filename: 'css/built.css'
   }),
   // \u538B\u7F29css
   new OptimizeCssAssetsWebpackPlugin()
]

#
  {
        test: /\\.css$/,
        use: [ 'file-loader']
             ['file-loader?name=[name].bundle[hash].css']
  },`,lang:"js"}),u.a.createElement("h4",{id:"js-\u62BD\u79BB"},u.a.createElement(e.AnchorLink,{to:"#js-\u62BD\u79BB","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"js \u62BD\u79BB"),u.a.createElement(n.a,{code:`output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },`,lang:"js"}),u.a.createElement("h4",{id:"\u4EE3\u7801\u5207\u5272"},u.a.createElement(e.AnchorLink,{to:"#\u4EE3\u7801\u5207\u5272","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u5207\u5272"),u.a.createElement(n.a,{code:`1. \u591A\u5165\u53E3 \u81EA\u52A8\u6253\u5305\u591A\u4E2A\u6587\u4EF6
   entry: {
    'jquery': './src/index.js',
    'angular': './src/2.js'
  },
2. \u5F02\u90E8\u7684chunk
   require.ensure([],function(_require){
     _require('./xxx')
   })
  import('./2.css').then(() => {
    ...
  })
}
#
3.
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
#
externals: {
  jquery: 'jQuery'
}
\u5F15\u5165cdn`,lang:"js"}),u.a.createElement("h4",{id:"dll"},u.a.createElement(e.AnchorLink,{to:"#dll","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"dll"),u.a.createElement(n.a,{code:`#
\u786C\u94FE\u63A5\u4E00\u4E2A \u5305,\u518D\u624B\u52A8scrit\u5F15\u5165\u8FD9\u4E2A\u5305 \u4E4B\u540Ewebpack\u5C31\u4E0D\u7528\u7F16\u8BD1\u4E86
#
yarn add add-asset-html-webpack-plugin
webpack --config webpack.config.dll.js && webpack
# \u6587\u4EF6\u8DEF\u5F84
  webpack.config.js
  webpack.config.dll.js
  dist
     index.html
  src
  public
  dll
     jquery
     manifest.json
# webpack.config.js
const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
module.export = {
  ...
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: { removeComments: true }
    }),
    // \u544A\u8BC9webpack\u54EA\u4E9B\u5E93\u4E0D\u53C2\u4E0E\u6253\u5305\uFF0C\u540C\u65F6\u4F7F\u7528\u65F6\u7684\u540D\u79F0\u4E5F\u5F97\u53D8~
    new webpack.DllReferencePlugin({
        manifest: resolve(__dirname, 'dll/manifest.json')
    }),
    // \u5C06\u67D0\u4E2A\u6587\u4EF6\u6253\u5305\u8F93\u51FA\u53BB\uFF0C\u5E76\u5728html\u4E2D\u81EA\u52A8\u5F15\u5165\u8BE5\u8D44\u6E90
    new AddAssetHtmlPlugin({
       filepath: path.resolve(__dirname, 'dll/jquery.js'),
       publicPath: '../dll',
       outputPath: 'vendor',
    }),
  ]
}
# webpack.config.dll.js
const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: {
    jquery: ['jquery'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dll'),
    library: '[name]_[hash]'
  },
  plugins: [
    // \u6253\u5305\u751F\u6210\u4E00\u4E2A manifest.json --> \u63D0\u4F9B\u548Cjquery\u6620\u5C04
    new webpack.DllPlugin({
      // \u6620\u5C04\u5E93\u7684\u66B4\u9732\u7684\u5185\u5BB9\u540D\u79F0 \u548C library \u76F8\u540C
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dll/manifest.json'),
    })
  ],
  mode: 'production'
};`,lang:"js"}),u.a.createElement(n.a,{code:`externals: {
    jquery: 'jQuery'
},
new webpack.ProvidePlugin({
   $: path.resolve(path.join(__dirname, 'dll/jquery.js'))
}),`,lang:"js"}),u.a.createElement("h4",{id:"\u5176\u4ED6-cli-\u96C6\u6210"},u.a.createElement(e.AnchorLink,{to:"#\u5176\u4ED6-cli-\u96C6\u6210","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6 cli \u96C6\u6210"),u.a.createElement(n.a,{code:`chainWebpack: function(config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }: any) {
                return /[\\\\/]node_modules[\\\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },`,lang:"ts"}))));i.default=a=>{const s=u.a.useContext(e.context),m=s.demos;return u.a.useEffect(()=>{var l;a!=null&&(l=a.location)!==null&&l!==void 0&&l.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),u.a.createElement(o,{demos:m})}}}]);

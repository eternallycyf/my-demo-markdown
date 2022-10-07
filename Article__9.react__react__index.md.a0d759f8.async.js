(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"R/Je":function(m,c,a){"use strict";a.r(c);var s=a("cDcd"),e=a.n(s),n=a("dEAq"),p=a.n(n),t=a("6T1g"),l=a("WtSh");const i=e.a.memo(({demos:r})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"react"},e.a.createElement(n.AnchorLink,{to:"#react","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"React"),e.a.createElement("h2",{id:"1-\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#1-\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"1 \u51C6\u5907\u9636\u6BB5"),e.a.createElement(t.a,{code:`\u6CE8\u91CA\u8BED\u6CD5  { /***/ }
npx create-react-app my-app
yarn create react-app my-app --template typescript

import React from 'react'
import ReactDOM from 'react-dom'

debugger; \u8F93\u5165\u8FD9\u884C\u4EE3\u7801\u5C31 \u6709\u65AD\u70B9\u51FA\u73B0\u4E86
     //#region
     /#endregion
     \u4E0D\u80FD\u6298\u53E0\u7684\u60C5\u51B5\u4E0B
<React.StrictMode> </React.StrictMode>
     \u5305\u88F9\u6839\u5143\u7D20\u5C31\u4F1A\u81EA\u52A8\u68C0\u67E5

1.module.css
import hello from './Hello.module.css'
<input class={hello.current}>
1.jsx | pure

rcc  \u521B\u5EFA\u7C7B\u7EC4\u4EF6
rfc  \u521B\u5EFA\u51FD\u6570\u7EC4\u4EF6
# yarn eject
\u66B4\u9732\u914D\u7F6E\u6587\u4EF6
# react\u5728\u6807\u7B7E\u5C5E\u6027\u4E2D\u53EF\u4EE5\u8FD9\u6837\u5C55\u5F00\u5BF9\u8C61
  ...obj
# \u53D7\u63A7\u7EC4\u4EF6\u9700\u8981 \u5982\u679C\u8981\u540C\u65F6\u4F20\u9012e\u548C\u53C2\u6570  \u9700\u8981\u5728\u51FD\u6570\u5185return \u4E00\u4E2A\u65B0\u51FD\u6570\u62FF\u5230e
  \u51FD\u6570\u7684\u67EF\u91CC\u5316 onChange\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570
  onChange={ ()=>{this.xxx()} }
# computed
fn().map.....
let newData = useMemo(()=>{
  return a+b
},[a,b])
# watch
componentDidUpdate(prevProps,preState){
  if(preState.name != this.state.name){
    this.setState({
      name: this.state.name
    })
  }
}
useEffect(() => {
        console.log(count)
 }, [count])
# \u5C06setState\u6539\u6210\u540C\u6B65
  async setData (data) {
    new Promise(() => this.setState(data))
  }
  getChangeEventList = async (message) => {
    await this.setData({
      changState: message
    })
    console.log(this.state.changState);
  }
# \u89E3\u51B3setState\u5F02\u6B65 \u4F20\u6570\u636E\u95EE\u9898
\u5982\u679C\u662F\u81EA\u5DF1\u4F7F\u7528 \u76F4\u63A5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D \u7F16\u5199\u903B\u8F91\u5373\u53EF
\u5982\u679C\u9700\u8981\u7236\u5B50\u4F20\u9012\u6570\u5B57 \u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u8FDB\u884C\u4F20\u9012
this.setState({
   count:50
},()=> this.props.xxx(this.state.count))
# \u5BFC\u5165\u56FE\u7247
import Nav1 from 'xxx.png'
 <img src={Nav2} alt="" />
# compontDidUpdate(preProps) \u53EF\u4EE5\u83B7\u53D6\u8DEF\u7531\u5207\u6362\u7684\u4FE1\u606F
  this.props
# \u5B9E\u73B0 vue .native \u7684\u6548\u679C
 \u83B7\u53D6 dom \u5143\u7D20
 \u7ED9dom\u5143\u7D20\u7ED1\u5B9A click \u4E8B\u4EF6
 e.stopPropagation()
 // click\u4E8B\u4EF6\u5185\u6267\u884C\u539F\u6765\u7684\u903B\u8F91 \u8C03\u7528\u5916\u754C\u4E8B\u4EF6\u7684\u65F6\u5019
 // \u6CE8\u610F\u8FD9\u91CCthis \u6307\u5411\u4E0D\u540C \u9700\u8981\u5728\u5916\u754C\u7528  \u53D8\u91CF\u63A5\u53D7 let that = this
# \u9632\u6B62xss\u653B\u51FB
\u6E32\u67D3\u4E4B\u524D\u4F1A\u8F6C\u4E49
const title = response.potentiallyMaliciousInput;
const element = <h1>{title}</h1>;
# \u5168\u5C40\u6307\u4EE4 \u7528\u4E8E\u6743\u9650\u63A7\u5236
\u5C06\u65B9\u6CD5\u6302\u8F7D\u5728windows\u4E0A
\u6216\u8005 umi \u7684 access`,lang:"js"}),e.a.createElement("h3",{id:"\u4E3A\u4EC0\u4E48\u9700\u8981\u7ED1\u5B9A-this"},e.a.createElement(n.AnchorLink,{to:"#\u4E3A\u4EC0\u4E48\u9700\u8981\u7ED1\u5B9A-this","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E3A\u4EC0\u4E48\u9700\u8981\u7ED1\u5B9A this"),e.a.createElement(t.a,{code:`# class\u5982\u679C\u8C03\u7528\u9759\u6001\u6216\u539F\u578B\u65B9\u6CD5\u4E0D\u6307\u5B9Athis \u53D8\u91CF\u8FDB\u884C\u8D4B\u503C \u9ED8\u8BA4undefiend
class obj{
  speak()
}
let speak  =  obj.speak
speak() // undefined
# \u51FD\u6570\u8C01\u8C03\u7528\u5B83 this\u6267\u884C\u8C01
class\u5185\u90E8\u9075\u5FAA\u4E25\u683C\u6A21\u5F0F
\u5F53\u51FD\u6570\u590D\u5236\u7ED9\u53D8\u91CF this\u5C31\u662Fundefined

\u533F\u540D\u51FD\u6570\u9700\u8981\u7ED1\u5B9A this`,lang:"js"}),e.a.createElement("h2",{id:"2-jsx--pure"},e.a.createElement(n.AnchorLink,{to:"#2-jsx--pure","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"2 jsx | pure"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u8BED\u6CD5\u89C4\u8303")),e.a.createElement(t.a,{code:`jsx | pure\u8BED\u6CD5 => JavaScript XML
     \u901A\u8FC7@babel/preset-react\u7F16\u8BD1 => \u811A\u624B\u67B6
     \u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u8282\u70B9
     \u63A8\u8350\u7528\u5C0F\u62EC\u53F7\u5305\u88F9jsx | pure \u907F\u514DJS\u81EA\u52A8\u63D2\u5165\u5206\u53F7bug
     \u9A7C\u5CF0\u547D\u540D
     {JavaScript\u8868\u8FBE\u5F0F} => \u8868\u8FBE\u5F0F map()  funtion()  demo()
     style={{backgroundColor: "violet" }}
     \u6761\u4EF6\u6E32\u67D3 if-else  \u4E09\u5143\u8868\u8FBE\u5F0F \u77ED\u8DEF\u8FD0\u7B97
     \u5217\u8868\u6E32\u67D3 map(item=>(jsx | pure))  key={item.id}\u4E0D\u80FD\u7528for\u4ED6\u662F\u8BED\u53E5
     \u6807\u7B7E\u9996\u5B57\u6BCD\u5C0F\u5199 \u8F6C\u4E3Ahtml\u540C\u540D\u5143\u7D20
     \u6807\u7B7E\u9996\u5B57\u6BCD\u5927\u5C0F \u6E32\u67D3\u7EC4\u4EF6
const title = <h1>hello-react<span>\u8FD9\u662Fspn</span></h1>
ReactDOM.render(title, document.getElementById("root"))`,lang:"react"}),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7279\u6B8A\u5C5E\u6027\u540D")),e.a.createElement(l.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u7279\u6B8A\u5C5E\u6027\u540D"),e.a.createElement("th",null,"jsx"),e.a.createElement("th",null,"pure \u8BED\u6CD5\u6807\u7B7E"),e.a.createElement("th",null))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"class"),e.a.createElement("td",null,"className"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"for"),e.a.createElement("td",null,"htmlfor"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"tabindex"),e.a.createElement("td",null,"tabIndex"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"checked"),e.a.createElement("td",null,"defaultChecked \u7B2C\u4E00\u6B21\u624D\u6709\u7528"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"dangerouslySetInnerHTML"),e.a.createElement("td",null,"=","{","{","_html:'\u8282\u70B9' ","}","}"," \u7C7B\u4F3C v-html"),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement("h3",{id:"api"},e.a.createElement(n.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"API"),e.a.createElement(l.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"API"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u5176\u4ED6"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"React.createElement('ele',eleAttributeObj,[,...node])"),e.a.createElement("td",null,"{",'title: "\u6807\u9898" ',"}"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"React.Component","{","render()","{"," return ","}","}"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"ReactDOM.render(targetElement,mountDomObject)"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"React.createRef()"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"React. createContext()"),e.a.createElement("td",null,"Provider Consumer"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"React.PureComponent"),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"React.forwardRef"),e.a.createElement("td",null,"\u89E3\u51B3 HOC \u7EC4\u4EF6\u4F20\u9012 r \u7684\u95EE\u9898"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null),e.a.createElement("td",null),e.a.createElement("td",null)))),e.a.createElement("h2",{id:"3-react-\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#3-react-\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"3 React \u7EC4\u4EF6"),e.a.createElement("h3",{id:"\u521B\u5EFA\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u521B\u5EFA\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u521B\u5EFA\u7EC4\u4EF6"),e.a.createElement(t.a,{code:`# \u51FD\u6570\u7EC4\u4EF6
  - \u51FD\u6570\u540D\u5FC5\u987B\u5927\u5199\u5B57\u6BCD\u5F00\u5934  // \u5982\u679C\u662F\u5C0F\u5199 babel\u4F1A\u8F6C\u6362\u6210\u5B57\u7B26\u4E32
  - \u51FD\u6570\u7EC4\u4EF6\u5FC5\u987B\u6709\u8FD4\u56DE\u503C \u8868\u793A\u7EC4\u4EF6\u7ED3\u6784
    - \u8FD4\u56DE\u503C\u4E3A null \u8868\u793A\u4E0D\u6E32\u67D3\u4EFB\u4F55\u5185\u5BB9
function Hello() {
  return (
    <div>Hello-world</div>
  )
}
const Hello = () => <div>hello</div>
ReactDOM.render(<Hello />, document.getElementById('root'))
# \u7C7B\u7EC4\u4EF6
  - \u7C7B\u540D\u79F0\u5FC5\u987B\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934
  - \u7C7B\u7EC4\u4EF6\u5FC5\u987B\u63D0\u4F9B render() \u65B9\u6CD5
  - render() \u65B9\u6CD5\u5FC5\u987B\u6709\u8FD4\u56DE\u503C \u8868\u793A\u8BE5\u7EC4\u4EF6\u7684\u7ED3+\u6784
class Hello extends React.Component {
  render() {
    return <div>hello</div>
  }
}
ReactDOM.render(<Hello />, document.getElementById('root'))`,lang:"react"}),e.a.createElement("h3",{id:"\u4E8B\u4EF6\u5904\u7406"},e.a.createElement(n.AnchorLink,{to:"#\u4E8B\u4EF6\u5904\u7406","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E8B\u4EF6\u5904\u7406"),e.a.createElement(t.a,{code:`# \u4E8B\u4EF6\u7ED1\u5B9A  => \u4E0E\u539F\u751FDOM\u7C7B\u4F3C
  - on+\u4E8B\u4EF6\u540D\u79F0={\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F}
  - \u91C7\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5 => onClick
# \u4E8B\u4EF6\u5BF9\u8C61  => react\u4E2D\u7684\u4E8B\u4EF6\u5BF9\u8C61\u53EB \u5408\u6210\u4E8B\u4EF6(\u5BF9\u8C61)
  - \u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668 \u65E0\u9700\u62C5\u5FC3\u8DE8\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898
  - \u4E8B\u4EF6\u59D4\u6258 => \u9AD8\u6548   event => \u9ED8\u8BA4\u53C2\u6570
## \u5982\u679C\u8981\u540C\u65F6\u4F20\u9012e\u548C\u53C2\u6570  \u9700\u8981\u91C7\u7528\u67EF\u91CC\u5316
onChange={this.changeCheckbox(id)}
changeCheckbox = (id) => {
    return (e) => {
      console.log(id, e);
    }
  }
## \u6216\u8005\u8FD9\u6837
onChange={(e) => this.changeCheckbox(id,e)}
changeCheckbox = (id,e) => {
      console.log(id, e);
  }`,lang:"react"}),e.a.createElement("h3",{id:"this-\u6307\u5411"},e.a.createElement(n.AnchorLink,{to:"#this-\u6307\u5411","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"this \u6307\u5411"),e.a.createElement(t.a,{code:`# \u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E2D this \u7684\u503C\u4E3A undefined
# \u56E0\u4E3A\u51FD\u6570\u5185\u90E8\u5F00\u542F\u4E25\u683C\u6A21\u5F0F this\u5C31\u662Fundefined
  1. \u7BAD\u5934\u51FD\u6570  => \u81EA\u8EAB\u4E0D\u7ED1\u5B9Athis \u53EF\u4EE5\u83B7\u53D6\u5230setState
      <button onClick={() => this.handle()}>\u70B9\u51FB</button>
  2. Function.prototype.bind() => \u7ED1\u5B9A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684this\u548C\u7EC4\u4EF6
      constructor () {
        super()
        this.handle = this.handle.bind(this)
      }
  3. class \u7684\u5B9E\u4F8B\u65B9\u6CD5  => \u5229\u7528\u7BAD\u5934\u51FD\u6570\u5F62\u5F0F\u7684class\u5B9E\u4F8B\u65B9\u6CD5
       handle = () => {
             this.setState({
                count: this.state.count + 1
              })
         }`,lang:"react"}),e.a.createElement("h3",{id:"\u8868\u5355\u5904\u7406"},e.a.createElement(n.AnchorLink,{to:"#\u8868\u5355\u5904\u7406","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u5904\u7406"),e.a.createElement(t.a,{code:`# \u975E\u53D7\u63A7\u7EC4\u4EF6
\u901A\u8FC7ref\u5C5E\u6027\u83B7\u5F97\u8868\u5355\u7684value
<input type='password' ref={c => this.passwordDOM = c} />
this.passwordDOM .value

# \u53D7\u63A7\u7EC4\u4EF6
\u4E3A\u8868\u5355\u8BBE\u7F6Ename  \u7ED1\u5B9A\u76F8\u540C\u7684onChange\u4E8B\u4EF6
\u901A\u8FC7e.target.type \u5224\u65AD\u662F\u8981 checked\u5C5E\u6027 \u8FD8\u662F value \u5C5E\u6027
\u6700\u540E\u901A\u8FC7\u5C5E\u6027\u540D\u8868\u8FBE\u5F0F setState \u8FDB\u884C\u66F4\u65B0
     this.setState({
          [e.target.name]: e.target.value
      })
 # \u540C\u65F6\u83B7\u53D6 e \u548C \u4E8B\u4EF6\u4F20\u9012\u7684\u53C2\u6570
 # 1.
 <input onChange={changeValue(username)} />
  changeValue = (username) => {
    return (e) => {
       console.log(e,username)
    }
  }
 # 2. event \u9ED8\u8BA4\u6700\u540E\u4E00\u4E2A\u63A5\u6536
  <input onChange={(e) => changeValue(username,e)} />
   changeValue = (username,e) => {
       console.log(e,username)
  }


   # \u51FD\u6570\u7684\u67EF\u91CC\u5316
\u51FD\u6570\u8C03\u7528\u7EE7\u7EED\u8FD4\u56DE\u51FD\u6570\u7684\u65B9\u5F0F \u5B9E\u73B0\u591A\u6B21\u63A5\u6536\u53C2\u6570\u6700\u540E\u7EDF\u4E00\u5904\u7406\u7684\u51FD\u6570\u7F16\u7801\u5F62\u5F0F
   function sum(a){
             return(b)=>{
                  return (c)=>{
                      return a+b+c
                             }
                           }
                        }
\u3000\u3000\u3000\u3000\u3000\u3000const result = sum(1)(2)(3)
          console.log(result);`,lang:"react"}),e.a.createElement("h3",{id:"\u751F\u547D\u5468\u671F"},e.a.createElement(n.AnchorLink,{to:"#\u751F\u547D\u5468\u671F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u751F\u547D\u5468\u671F"),e.a.createElement(t.a,{code:`# \u53EA\u6709 \u7C7B\u7EC4\u4EF6 \u624D\u6709\u751F\u547D\u5468\u671F\u3002
 1. \u521D\u59CB\u5316\u9636\u6BB5: \u7531ReactDOM.render()\u89E6\u53D1---\u521D\u6B21\u6E32\u67D3
								1.	constructor()
								2.	getDerivedStateFromProps
								3.	render()
					#			4.	componentDidMount() \u7C7B\u4F3Cvue\u7684 mounted
	\u521D\u59CB\u5316state \u4E3A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7ED1\u5B9Athis \u5F00\u542F\u5B9A\u65F6\u5668\u3001\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u3001\u8BA2\u9605\u6D88\u606F
2. \u66F4\u65B0\u9636\u6BB5: \u7531\u7EC4\u4EF6\u5185\u90E8this.setSate()\u6216\u7236\u7EC4\u4EF6\u91CD\u65B0render\u89E6\u53D1
					1.	getDerivedStateFromProps return null or state
					2.	shouldComponentUpdate() \u8FD4\u56DE\u5E03\u5C14\u503C\u51B3\u5B9A\u662F\u5426\u6E32\u67D3
					3.	render()
					4.	getSnapshotBeforeUpdate
	 #			5.	componentDidUpdate()
  \u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42  DOM\u64CD\u4F5C \u6CE8\u610F\uFF1A\u5982\u679C\u8981setState() \u5FC5\u987B\u653E\u5728\u4E00\u4E2Aif\u6761\u4EF6\u4E2D
3. \u5378\u8F7D\u7EC4\u4EF6: \u7531ReactDOM.unmountComponentAtNode(dom\u5143\u7D20)\u89E6\u53D1
import ReactDOM from 'react-dom'
import { unmountComponentAtNode } from 'react-dom';
 ReactDOM.unmountComponentAtNode(document.getElementById("root"))
\u8FD8\u9700\u8981\u5728componentWillUnmount\u4E2D \u5173\u95ED\u5B9A\u65F6\u5668\u7B49\u64CD\u4F5C
	#			  1.	componentWillUnmount()
										\u5173\u95ED\u5B9A\u65F6\u5668\u3001\u53D6\u6D88\u8BA2\u9605\u6D88\u606F

# \u64CD\u4F5C\u5176\u4ED6\u526F\u4F5C\u7528
componentDidUpdate

# \u5904\u7406props state\u9ED8\u8BA4\u503C
getDerivedStateFromProps

# \u91CD\u7F6E\u67D0\u4E9Bstate
// \u83B7\u53D6\u6700\u65B0\u7684Props
componentWillReceiveProps(nextProps, nextState)`,lang:"react"}),e.a.createElement("h3",{id:"diff-\u7B97\u6CD5-\u865A\u62DF-dom"},e.a.createElement(n.AnchorLink,{to:"#diff-\u7B97\u6CD5-\u865A\u62DF-dom","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"DIFF \u7B97\u6CD5 \u865A\u62DF DOM"),e.a.createElement(t.a,{code:`React \u66F4\u65B0\u89C6\u56FE\u7684\u601D\u60F3\u662F\uFF1A\u53EA\u8981 state \u53D8\u5316\u5C31\u91CD\u65B0\u6E32\u67D3\u89C6\u56FE
\u90E8\u5206\u66F4\u65B0  => \u865A\u62DF DOM \u914D\u5408 Diff \u7B97\u6CD5
#\u865A\u62DFDOM\uFF1A\u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2AJS\u5BF9\u8C61
1. \u521B\u5EFA\u4E00\u4E2A\u865A\u62DFDOM
2. \u6839\u636E\u865A\u62DF DOM \u751F\u6210\u771F\u5B9E DOM
3. \u5F53\u6570\u636E\u53D8\u5316\u540E \u521B\u5EFA\u65B0\u7684\u865A\u62DFDOM
4. \u4E0E\u4E0A\u4E00\u6B21\u5F97\u5230\u7684\u865A\u62DFDOM  \u4F7F Diff \u7B97\u6CD5\u5BF9\u6BD4\u627E\u4E0D\u540C \u5F97\u5230\u9700\u8981\u66F4\u65B0\u7684\u5185\u5BB9\u3002
5. \u53EA\u5C06\u53D8\u5316\u7684\u5185\u5BB9\u66F4\u65B0\u5230 DOM \u4E2D`,lang:"js"}),e.a.createElement("h2",{id:"4-\u4E09\u5927\u5C5E\u6027"},e.a.createElement(n.AnchorLink,{to:"#4-\u4E09\u5927\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"4 \u4E09\u5927\u5C5E\u6027"),e.a.createElement("h3",{id:"state"},e.a.createElement(n.AnchorLink,{to:"#state","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"state"),e.a.createElement(t.a,{code:`# state => \u7EC4\u4EF6\u5185\u90E8\u7684\u79C1\u6709\u6570\u636E \u53EA\u80FD\u5728\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528 => this.state.xxx
# \u51FD\u6570\u7EC4\u4EF6\u9700\u8981 hooks
  - state\u7684\u503C\u662F\u5BF9\u8C61 \u8868\u793A\u4E00\u4E2A\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A\u6570\u636E
  class App extends React.Component {
    constructor() {//\u901A\u5E38\u7528\u4E8E \u521D\u59CB\u5316state={}\u7684\u503C \u6539\u53D8\u51FD\u6570this\u6307\u5411
         super()   # es6\u7684\u89C4\u8303  \u5FC5\u987B\u5199
         this.state = {
            count: 0
          }
       }
 //constructor \u53EF\u4EE5\u7B80\u5316\u4E3A
 //        state = {
 //             count: 0
 //        }
 }
# this.setState({})  \u5BF9\u8C61\u5F62\u5F0F
     this.setState({
             count: this.state.count + 1
         },()=>\u8FD9\u91CC\u7684\u5185\u5BB9\u662F\u540C\u6B65\u7684)
# setState \u51FD\u6570\u5F62\u5F0F
\u591A\u6B21\u8C03\u7528setState({})   \u6267\u884C\u7684\u7ED3\u679C\u4E0D\u6B63\u786E \u56E0\u4E3A\u90FD\u662F\u5F02\u6B65\u7684 \u6CA1\u6709\u987A\u5E8F
\u800C\u4F7F\u7528setState((state,props)=>{xxx})\u8FD9\u79CD\u5F62\u5F0F\u5C31\u5BF9\u4E86 \u5B83\u4E5F\u662F\u5F02\u6B65 \u6709\u987A\u5E8F
\u4F7F\u7528\u8FD9\u79CD\u5F62\u5F0F\u5C31\u53EF\u4EE5 \u76F4\u63A5\u7ACB\u5373\u62FF\u5230\u66F4\u65B0\u540E\u7684\u503C  \u7C7B\u4F3Cvue nextTick
    this.setState((state, props) => ({
      count: state.count + 1
    }), () => { \u8FD9\u91CC\u662F\u66F4\u65B0\u540E\u7684\u6570\u636E })
# state\u548CProps \u66F4\u65B0\u662F\u5F02\u6B65\u7684 \u987A\u5E8F\u4E0D\u4E00\u5B9A \u9700\u8981\u653E\u5230setState\u7684\u56DE\u8C03\u51FD\u6570\u4E2D`,lang:"react"}),e.a.createElement("h3",{id:"ref"},e.a.createElement(n.AnchorLink,{to:"#ref","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"ref"),e.a.createElement(t.a,{code:`#  \u5B57\u7B26\u4E32\u5F62\u5F0F \u5E9F\u5F03ing
 ref='\u81EA\u5B9A\u4E49\u540D\u79F0'
 this.refs.\u81EA\u5B9A\u4E49\u540D\u79F0 => \u5BF9\u5E94\u7684dom\u5143\u7D20
 #  \u56DE\u8C03\u5F62\u5F0F
 // \u5185\u8054\u51FD\u6570\u7684\u60C5\u51B5\u4E0B \u4F1Arender\u4E24\u6B21
 // \u8FD9\u79CD\u5F62\u5F0F\u53EA\u6E32\u67D3\u4E00\u6B21 ref={this.\u51FD\u6570\u540D} \u51FD\u6570\u540D=(c)=>{this.xx=x}
  ref={(currentNode)=>{this.\u81EA\u5B9A\u4E49\u540D\u5B57 = currentNode}}
  //currentNode\u662F\u81EA\u5B9A\u4E49\u7684
  \u7B80\u5316\u7248 ref={ c  => this.\u81EA\u5B9A\u4E49\u540D\u5B57 = c }
  this.\u81EA\u5B9A\u4E49\u540D\u5B57  => \u53D6\u5F97dom\u5BF9\u8C61
 #  createRef\u5F62\u5F0F
 // \u4E13\u4EBA\u4E13\u7528
   [this.]myRef  = React.createRef
  <input ref={this.myRef} />
  this.myRef.current.xxx

# ref \u8F6C\u53D1\u5230\u5185\u90E8
 constructor(props) {
   super(props);
   this.inputRef = React.createRef()
 }
<MyInput ref={this.inputRef}/>
const MyInput = React.forwardRef((props, ref) => {
  return (
    <input type="text" ref={ref} />
  )
})`,lang:"react"}),e.a.createElement("h3",{id:"props"},e.a.createElement(n.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"props"),e.a.createElement("h4",{id:"\u5916\u754C\u4F20\u5165"},e.a.createElement(n.AnchorLink,{to:"#\u5916\u754C\u4F20\u5165","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5916\u754C\u4F20\u5165"),e.a.createElement("ul",null,e.a.createElement("li",null,"props \u4E0D\u80FD\u6539\u53D8\u6307\u5411")),e.a.createElement(t.a,{code:`# \u5916\u754C\u4F20\u5165\u7EC4\u4EF6 \u6570\u636E
<\u7EC4\u4EF6\u6807\u7B7E
\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D='\u5B57\u7B26\u4E32\u7C7B\u578B\u53D8\u91CF'
\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D={\u6570\u503C\u7C7B\u578B\u53D8\u91CF}
{...\u5BF9\u8C61\u540D}
 />
//\u539F\u751Fjs\u53EA\u80FD  {...obj} \u514B\u9686\u5BF9\u8C61  ...obj\u8FD9\u79CD\u8BED\u6CD5\u4E0D\u5141\u8BB8
//\u5728react\u548Cbabel\u7684\u6807\u7B7E\u5C5E\u6027\u4E2D => ...\u5BF9\u8C61\u540D  \u53EF\u4EE5\u88AB\u89E3\u6790
# \u51FD\u6570\u7EC4\u4EF6 =>
\u51FD\u6570\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u53C2\u6570\u63A5\u6536
=>    function(props)  =>  props.xxx
# \u7C7B\u7EC4\u4EF6  =>
\u53EA\u8BFB  \u53EF\u4EFB\u610F\u7C7B\u578B\u53C2\u6570
\u5982\u679C\u4F7F\u7528\u4E86constructor(props)   super(props)\u5FC5\u987B\u5199
=>   this.props.xxx`,lang:"js"}),e.a.createElement("h4",{id:"\u7236\u5B50\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u7236\u5B50\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7236\u5B50\u7EC4\u4EF6"),e.a.createElement(t.a,{code:`\u7236\u7EC4\u4EF6\u5185\u90E8  =>
<\u5F15\u7528\u7684\u5B50\u7EC4\u4EF6 \u81EA\u5B9A\u4E49\u5C5E\u6027\u540D={this.state.\u53D8\u91CF} />
\u5B50\u7EC4\u4EF6\u5185\u90E8  =>
this.props.\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D`,lang:"react"}),e.a.createElement(t.a,{code:`\u5B50\u7EC4\u4EF6\u5185\u90E8 => \u5B9A\u4E49\u4E00\u4E2A\u70B9\u51FB\u4E8B\u4EF6 \u5728\u4ED6\u7684\u5185\u90E8
          this.props.\u81EA\u5B9A\u4E49\u4E8B\u4EF6(\u4F20\u9012\u7684\u53D8\u91CF)
\u7236\u7EC4\u4EF6\u5185\u90E8 =>
          <\u5F15\u7528\u7684\u5B50\u7EC4\u4EF6 \u81EA\u5B9A\u4E49\u4E8B\u4EF6={\u81EA\u5B9A\u4E49\u63A5\u6536\u7684\u51FD\u6570} />
          \u81EA\u5B9A\u4E49\u63A5\u6536\u7684\u51FD\u6570(\u53D8\u91CF) => {
                  console.log(\u53D8\u91CF)
          }`,lang:"react"}),e.a.createElement("h4",{id:"children"},e.a.createElement(n.AnchorLink,{to:"#children","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"children"),e.a.createElement(t.a,{code:`# children \u5B50\u8282\u70B9  \u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u63D2\u69FD
// parent
<children>
  {
    a => <div> {a} </div>,
    b : <div> {b} </div>
  }
</children>
//children \u7EC4\u4EF6\u7684\u5185\u90E8
  return (
      <div >
        {props.children['a']}
        {props.children['b']}
      </div>
    )
 # React.children.map \u4F1A\u8DF3\u8FC7\u9519\u8BEF\u7684\u7C7B\u578B
  React.children.map(children,(child,index)=>{
const childElement = child as React.FunctionComponentElement<MenuItemProps>
  childElement.type
  })
 # React.cloneElement \u53EF\u4EE5\u52A0\u5165\u5C5E\u6027\u53CA\u5143\u7D20
 React.cloneElement(
   element,
   [props],
   [...children]
 )`,lang:"react"}),e.a.createElement("h4",{id:"render-props"},e.a.createElement(n.AnchorLink,{to:"#render-props","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"render props"),e.a.createElement(t.a,{code:`# render props \u63D2\u69FD\u4F20\u503C
// \u5728\u5185\u90E8\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6 \u4F20\u503C  \u7136\u540E\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u63A5\u53D7\u53D8\u91CF \u5E76\u6E32\u67D3
\u4E00\u822C\u90FD\u7528render\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D

//Parent \u7EC4\u4EF6
class App extends React.Component {
  xxx = (e) =>{
    return (
      <div>{e}</div>
    )
  }
  render (){
     <Children \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D={this.xxx}
  }
}
//Children \u7EC4\u4EF6\u5728render\u51FD\u6570\u91CC\u9762
{this.props.\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D(\u6570\u636E)}`,lang:"js"}),e.a.createElement("h4",{id:"proptypes"},e.a.createElement(n.AnchorLink,{to:"#proptypes","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"propTypes"),e.a.createElement(t.a,{code:`# \u4F7F\u7528
\u5B89\u88C5 yarn add props-types
import PropTypes from 'prop-types'
\u7EC4\u4EF6\u540D.propTypes = {
  colors: PropTypes.array
  // \u7EA6\u5B9Acolors\u5C5E\u6027\u4E3Aarray\u7C7B\u578B
  // \u5982\u679C\u7C7B\u578B\u4E0D\u5BF9\uFF0C\u5219\u62A5\u51FA\u660E\u786E\u9519\u8BEF\uFF0C\u4FBF\u4E8E\u5206\u6790\u9519\u8BEF\u539F\u56E0
}

# \u5199\u5728class\u7EC4\u4EF6\u91CC\u9762  => static propTypes={}
\u7EA6\u675F\u89C4\u5219
1. \u5E38\u89C1\u7C7B\u578B\uFF1Aarray\u3001bool\u3001func\u3001number\u3001object\u3001string
2. React\u5143\u7D20\u7C7B\u578B\uFF1Aelement
3. \u5FC5\u586B\u9879\uFF1AisRequired
4. \u7279\u5B9A\u7ED3\u6784\u7684\u5BF9\u8C61\uFF1Ashape({ })
// \u5E38\u89C1\u7C7B\u578B
optionalFunc: PropTypes.func,
// \u5FC5\u9009  isRequired
requiredFunc: PropTypes.func.isRequired,
// \u7279\u5B9A\u7ED3\u6784\u7684\u5BF9\u8C61 shape
optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
  })`,lang:"react"}),e.a.createElement("h4",{id:"defaultprops"},e.a.createElement(n.AnchorLink,{to:"#defaultprops","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"defaultProps"),e.a.createElement(t.a,{code:`# defaultProps
# \u573A\u666F\uFF1A\u5206\u9875\u7EC4\u4EF6  \u6BCF\u9875\u663E\u793A\u6761\u6570
\u4F5C\u7528\uFF1A\u7ED9 props \u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u5728\u672A\u4F20\u5165 props \u65F6\u751F\u6548
// \u8BBE\u7F6E\u9ED8\u8BA4\u503C
App.defaultProps = {
  pageSize: 10
}
\u7EC4\u4EF6\u540D.defaultProps ={
  // \u9ED8\u8BA4\u6807\u7B7E\u5C5E\u6027\u503C
  name:"zhuangsan"
}
  // \u4E0D\u4F20\u5165pageSize\u5C5E\u6027
  < App />
# \u590D\u6742\u7C7B\u578B\u7684\u53C2\u6570\u9700\u8981\u624B\u52A8\u5408\u5E76 \u4E0D\u7136\u4F1A\u8986\u76D6\u6389
 const defaultProps = { pageSize: 20, showTotal: (total) => \`\u5171 \${total} \u6761\u6570\u636E\` }
  const { total, current, pageSize, showTotal } = { ...defaultProps, ...pagination }`,lang:"react"}),e.a.createElement("h2",{id:"5-react-\u8DEF\u7531"},e.a.createElement(n.AnchorLink,{to:"#5-react-\u8DEF\u7531","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"5 React \u8DEF\u7531"),e.a.createElement("h3",{id:"react-router-dom"},e.a.createElement(n.AnchorLink,{to:"#react-router-dom","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"react-router-dom"),e.a.createElement(t.a,{code:`# \u8DEF\u7531\u7EC4\u4EF6
BrowserRouter  HashRoute
Route
Redirect
Link
NavLink(\u52A0active\u7C7B\u540D\u5C31\u4F1A\u9AD8\u4EAE activeClassName='xxx' \u9ED8\u8BA4\u662Factive)
Switch  \u5305\u62EC\u6240\u6709\u7684route\u6807\u7B7E \u4E00\u65E6\u5339\u914D\u4E0A\u5C31\u4E0D\u4F1A\u7EE7\u7EED\u5F80\u4E0B\u8FDB\u884C\u4E86
# \u4E09\u4E2A\u5C5E\u6027
history
go goback goForward push replace
location
pathname search state
match
params path url
# HashRouter(hash\u5B9E\u73B0) BrowserRouter(\u63A8\u8350 h5 historyAPI\u5B9E\u73B0)
yarn add react-router-dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
 <Router>
    <Link to="/first">\u9875\u9762\u4E00</Link>
    <Route path='/first' component={First} />
 </Router>
# \u9ED8\u8BA4\u8DEF\u7531
   <Route path="/" component={Home} />`,lang:"react"}),e.a.createElement("h3",{id:"\u7F16\u7A0B\u5F0F\u5BFC\u822A"},e.a.createElement(n.AnchorLink,{to:"#\u7F16\u7A0B\u5F0F\u5BFC\u822A","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7F16\u7A0B\u5F0F\u5BFC\u822A"),e.a.createElement(t.a,{code:`<link replace={true} />
# history
  this.props.history.push("./login?name=zs&age=12")
                         ("./login/\${id}")
                         {'/login',{id:zs,age:12}}
//\u53EA\u6709params\u5F62\u5F0F\u9700\u8981\u58F0\u660E\u63A5\u6536  xxxxxx/:xxx
 replace('/')   \u4E0D\u7559\u4E0B\u75D5\u8FF9
 go(n)
 goForward      \u524D\u8FDB
 goBack         \u540E\u9000
# \u9ED8\u8BA4\u60C5\u51B5\u4E0B \u53EA\u6709route\u76F4\u63A5\u6E32\u67D3\u7684\u7EC4\u4EF6\u624D\u80FD\u83B7\u53D6\u5230\u8DEF\u7531\u4FE1\u606F history\u7B49
  \u9700\u8981\u7528withRouter\u9AD8\u9636\u7EC4\u4EF6\u83B7\u53D6
  import { withRouter } from 'dva/router';
 expot default withRouter(Login)`,lang:"react"}),e.a.createElement("h3",{id:"\u8DEF\u7531\u5339\u914D\u6A21\u5F0F"},e.a.createElement(n.AnchorLink,{to:"#\u8DEF\u7531\u5339\u914D\u6A21\u5F0F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8DEF\u7531\u5339\u914D\u6A21\u5F0F"),e.a.createElement(t.a,{code:`# \u6A21\u7CCA\u5339\u914D\u6A21\u5F0F
/ \u53EF\u4EE5\u5339\u914D\u6240\u6709\u7684\u8DEF\u7531
# \u7CBE\u51C6\u5339\u914D
exact \u5C5E\u6027
<Route exact path="/" component=... />
# replace\u6A21\u5F0F
<link replace />
 //\u4E0D\u7559\u4E0B\u75D5\u8FF9`,lang:"react"}),e.a.createElement("h3",{id:"\u5D4C\u5957\u8DEF\u7531"},e.a.createElement(n.AnchorLink,{to:"#\u5D4C\u5957\u8DEF\u7531","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5D4C\u5957\u8DEF\u7531"),e.a.createElement(t.a,{code:`\u5FC5\u987B\u4EE5\u7236\u8DEF\u7531 \u7684path\u5F00\u5934
\u5982\u679C\u4E0D\u60F3\u663E\u793A\u7236\u8DEF\u7531 \u52A0 exact`,lang:"react"}),e.a.createElement("h3",{id:"\u8DEF\u7531\u91CD\u5B9A\u5411"},e.a.createElement(n.AnchorLink,{to:"#\u8DEF\u7531\u91CD\u5B9A\u5411","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8DEF\u7531\u91CD\u5B9A\u5411"),e.a.createElement(t.a,{code:`import { Redirect } from 'react-router-dom'
<Route path="/" exact render={()=><Redirect to="/home" />} />
<Redirect to='/home' />
  \u4E00\u822C\u5728\u6700\u4E0B\u65B9`,lang:"react"}),e.a.createElement("h3",{id:"\u8DEF\u7531\u4F20\u53C2"},e.a.createElement(n.AnchorLink,{to:"#\u8DEF\u7531\u4F20\u53C2","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8DEF\u7531\u4F20\u53C2"),e.a.createElement(t.a,{code:`# params
<Link to={\`/login/\${obj.id}\`}>\u9875\u9762\u4E00</Link>
<Route path='/login/:id' component={First} />
this.props.match.params

# search
<Link to={\`/login?id=\${obj.id}&name=\${obj.name}\`}></Link>
<Route path='/login' component={First} />
import qs from 'queryString'
qs.parse(this.props.loacation.search)

qs.stringify()  \u5BF9\u8C61\u8F6Curlencoded
qs.parse()      urlencoded\u8F6C\u5BF9\u8C61

# state
<Link to={path:'/login',state:{id:1,name:zs}}></Link>
<Route path='/login' component={First} />
this.props.location.state
\u5237\u65B0\u4E5F\u80FD\u4FDD\u7559\u53C2\u6570 \u5728\u7F13\u5B58\u91CC`,lang:"html"}),e.a.createElement("h3",{id:"\u61D2\u52A0\u8F7D"},e.a.createElement(n.AnchorLink,{to:"#\u61D2\u52A0\u8F7D","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u61D2\u52A0\u8F7D"),e.a.createElement(t.a,{code:`// lazy \u53EA\u652F\u6301 export edfault
// tree shaking \u52A8\u6001\u5BFC\u5165 \u5220\u9664\u6CA1\u7528\u7684\u4EE3\u7801
import {lazy,Suspense} from 'react'
const Login = lazy(()=>import('@/pages/Login'))
 <Suspense fallback={<h1>\u52A0\u8F7D\u4E2D</h1>}>
     ...\u8DEF\u7531\u6807\u7B7E
 </Suspense>
//fallback \u5982\u679C\u7528\u5B50\u7EC4\u4EF6 \u4E0D\u80FD\u7528\u61D2\u52A0\u8F7D\u5BFC\u5165\u6CE8\u518C\u7EC4\u4EF6
# \u81EA\u5B9A\u4E49 webpack chunk
 const Header = React.lazy(() => import(/* webpackChunkName: "xxx" */'./Header'))
 # \u5728network block request url \u963B\u6B62\u52A0\u8F7D
 \u5F53\u52A0\u8F7D\u5931\u8D25\u65F6 \u7528\u9519\u8BEF\u8FB9\u754C
 state = {
   hasError: false
 }
 componentDidCatch(){
   this.setState({
     hasError:true
   })
 }
render(){
  if(this.state.hasError){
    return <div>error</div>
  }
  rerurn (xxxx)
}`,lang:"js"}),e.a.createElement("h3",{id:"\u9274\u6743\u8DEF\u7531"},e.a.createElement(n.AnchorLink,{to:"#\u9274\u6743\u8DEF\u7531","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9274\u6743\u8DEF\u7531"),e.a.createElement(t.a,{code:`# <AuthRoute path="..." component={...} />
# const isAuth = () => !!getToken()
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuth } from '../../utils'
const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const isLogin = isAuth()
 if (isLogin) {
          // \u5DF2\u767B\u5F55
 return <Component {...props} />
        } else {
return (<Redirect
  to={{ pathname: '/login',state: { from: props.location } }}
 />
          )
        }
      }}
    />
  )
}
export default AuthRoute
# \u767B\u5F55\u6210\u529F\u540E
  if (!props.location.state) {props.history.go(-1)}
  // \u6B64\u65F6\uFF0C\u8868\u793A\u662F\u76F4\u63A5\u8FDB\u5165\u5230\u4E86\u8BE5\u9875\u9762\uFF0C\u76F4\u63A5\u8C03\u7528 go(-1) \u5373\u53EF
 else {
props.history.replace(props.location.state.from.pathname)
      }`,lang:"js"}),e.a.createElement("h3",{id:"\u83B7\u53D6\u8DEF\u7531\u4FE1\u606F"},e.a.createElement(n.AnchorLink,{to:"#\u83B7\u53D6\u8DEF\u7531\u4FE1\u606F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u83B7\u53D6\u8DEF\u7531\u4FE1\u606F"),e.a.createElement(t.a,{code:`\u9ED8\u8BA4\u53EA\u6709 \u8DEF\u7531\u6807\u7B7E\u624D\u6709\u4FE1\u606F
\u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6 \u5305\u88C5\u7684\u4E5F\u6709
import { withRouter } from 'react-router-dom'
withRouter(NavHeader)`,lang:"js"}),e.a.createElement("h2",{id:"6-react-redux"},e.a.createElement(n.AnchorLink,{to:"#6-react-redux","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"6 React-Redux"),e.a.createElement("h3",{id:"redux"},e.a.createElement(n.AnchorLink,{to:"#redux","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"redux"),e.a.createElement(t.a,{code:`# \u7EC4\u4EF6\u7684\u5730\u65B9 \u9700\u8981getState \u83B7\u53D6\u6570\u636E \u5E76 subScribe \u4FDD\u6301\u76D1\u542C\u66F4\u65B0\u6570\u636E
# \u901A\u8FC7 dispatch \u53D1\u9001\u5230 reducer \u4E2D
// \u6CE8\u610F store \u4E2D\u7684\u6570\u636E \u9700\u8981\u653E\u5230 \u7EC4\u4EF6\u7684 state \u4E2D
// hook \u7528 useState \u5C31\u884C
// \u4E00\u822C aciotn \u7684 type \u62C6\u5206\u6210\u5E38\u91CF \u4E14\u5C01\u88C5\u6210\u65B9\u6CD5\u653E\u5728\u53E6\u4E00\u4E2A\u6587\u4EF6
// \u7EAF\u51FD\u6570 \u7ED9\u56FA\u5B9A\u7684\u8F93\u5165 \u5C31\u4F1A\u6709\u56FA\u5B9A\u7684\u6570\u636E \u4E0D\u4F1A\u6709\u526F\u4F5C\u7528
state = store.getState()
store.subscribe(()=>this.setState(store.getState()))
// \u5199\u5728componentdidmount\u4E2D
store.dispatch({
  type:'add',
  payload:{number:number+1}}
)

// \u9700\u8981\u624B\u52A8\u76D1\u542C store\u7684\u53D8\u5316,\u66F4\u6362state\u4E2D\u7684\u6570\u636E
# store
import {createStore} from 'redux'
import reducer from '../reducer'
export default createStore(
  reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
# reducer
const initialState = {
  number: 0,
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'add' :
      return {...state, ...payload}
    default:
      return state
  }
}`,lang:"js"}),e.a.createElement("h3",{id:"redux-thunk"},e.a.createElement(n.AnchorLink,{to:"#redux-thunk","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"redux-thunk"),e.a.createElement(t.a,{code:`import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
#
const getList = () => {
  return async (dispatch) => {
    // \u53EA\u6709\u7528\u4E86thunk action\u624D\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570 \u53C2\u6570\u5C31\u662Fdispatch
    const {data:{number}} = await axios({url: ''})
    const action = {type: 'add', payload: {number}}
    dispatch(action)
  }
}
  React.useEffect(() => {
    const action = getList()
    store.dispatch(action)
  }, [])`,lang:"js"}),e.a.createElement("h3",{id:"redux-saga"},e.a.createElement(n.AnchorLink,{to:"#redux-saga","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"redux-saga"),e.a.createElement(t.a,{code:`yarn add redux-saga
# store
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from '../reducer';
import createSagaMiddleware from "redux-saga"
import {login} from "../saga"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer);
sagaMiddleware.run(login)

export default store;
# sagas.js
import {call, put, takeEvery, takeLatest} from "redux-saga/effects"
import axios from "axios";
function* getList() {
  const {data: {data: {number}}} = yield axios({url: ''})
  const action = {type: 'add', payload: {number}}
  yield put(action)
}
export function* login() {
  yield  takeEvery('add', getList)
}

# app.js
  React.useEffect(() => {
    store.dispatch({type: 'add'})
  }, [])`,lang:"js"}),e.a.createElement("h3",{id:"react-redux"},e.a.createElement(n.AnchorLink,{to:"#react-redux","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"react-redux"),e.a.createElement(t.a,{code:`# index.js \u5165\u53E3\u6587\u4EF6
import { Provider,connect } from 'react-redux'
import store from './store'
<Provider store={store} >
  <App />
</Propvider>
# reducer
const initialState = {
  number: 0
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'add' :
      return {...state, ...payload}
    default:
      return state
  }
}

# login.js
import React, from 'react'
import store from "./store"
import {connect} from 'react-redux'

const App = (props) => {
  console.log(props.number) // \u8FD9\u91CC\u5C31\u662Freducer\u7684\u503C
  return (
    <>
      <button onClick={props.add}>add</button>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add(e){
      console.log(store.getState()) // \u83B7\u53D6 state
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
# \u5F02\u6B65`,lang:"js"}),e.a.createElement("h3",{id:"combinereducers"},e.a.createElement(n.AnchorLink,{to:"#combinereducers","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"combineReducers"),e.a.createElement(t.a,{code:`\u5212\u5206\u6A21\u5757;
// \u5728reducer\u7684\u4E3B\u9875\u9762 \u79FB\u5165\u5176\u4ED6\u7684\u5C40\u90E8reducer
import { combineReducers } from 'redux';
import \u5C40\u90E8\u7684reducer from '\u5C40\u90E8\u7684reducer';
const reducer = combineReducers({
  login: \u5C40\u90E8\u7684reducer,
});
export default reducer;
// \u5B50\u9875\u9762 \u548C\u6B63\u5E38\u4E00\u6837`,lang:"js"}),e.a.createElement("h3",{id:"immutable"},e.a.createElement(n.AnchorLink,{to:"#immutable","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Immutable"),e.a.createElement(t.a,{code:`yarn add immutable
import {fromJS} from "immutable"
const initialState = fromJS({
  number: 0
})
export default (state = initialState, {type, payload}) => {
  console.log(payload)
  switch (type) {
    case 'add' :
      return state.set('number',payload.number ) // set
    default:
      return state
  }
}
# index.js
console.log(props.login.get('number'))
const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}
const mapDispatchToProps = (dispatch, aa) => {
  return {
    add() {
      let number = store.getState().login.get('number') + 1
      const action = {
        type: 'add',
        payload: {number}
      }
      dispatch(action)
    }
  }
}
# redux-immutable
yarn add redux-immutable
// reducer
import {combineReducers} from "redux-immutable"
import loginreducer from "./loginreducer"
export default combineReducers({
  login: loginreducer
})
// \u4F7F\u7528\u540E \u83B7\u53D6 store \u65F6  \u6A21\u5757\u540D\u4E5F\u8981get\u624D\u884C
const mapStateToProps = (state) => {
  // state.get('login').get('number')
  // state.getIn(['login','number'])
  return {
    login: state.get('login')
  }
}`,lang:"js"}),e.a.createElement("h3",{id:"applymiddleware"},e.a.createElement(n.AnchorLink,{to:"#applymiddleware","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"applyMiddleware"),e.a.createElement(t.a,{code:`# createSagaMiddleware(options)
\u521B\u5EFA\u4E2D\u95F4\u4EF6 \u8FDE\u63A5\u5230Redex Store \u901A\u8FC7createStore\u7B2C\u4E09\u4E2A\u53C2\u6570\u4F20\u5165
# middleware.run(saga,...args)
\u52A8\u6001\u8FD0\u884Csaga \u5728applyMiddleware\u4E4B\u540E\u6267\u884C
# \u8F85\u52A9\u51FD\u6570
takeEvery(pattern,saga,...args)
  => \u5728dispatch\u5230store\u65F6 \u4E3A\u6BCF\u4E00\u4E2Aaction\u6D3E\u751F\u4E00\u4E2Asage
takeLatest(pattern,saga,...args)
  => \u6D3E\u751F \u5E76 \u81EA\u52A8\u53D6\u6D88\u4E4B\u524D\u7684saga\u4EFB\u52A1
throttle(ms,pattern,saga,...args)
  => \u6D3E\u751F\u4E00\u4E2A \u8282\u6D41\u9600
# Effect \u521B\u5EFA\u8D77
select(selector,...args)
  => \u83B7\u53D6redux\u4E2D\u7684state  \u5982\u679Cselector\u4E3A\u7A7A \u5219\u83B7\u53D6\u5B8C\u6574\u7684state
call(fn,...args)
  => \u521B\u5EFA\u4E00\u4E2AEffect \u63CF\u8FF0\u4FE1\u606F \u7528\u6765\u547D\u4EE4middleware \u4EE5\u53C2\u6570args\u8C03\u7528\u51FD\u6570fn
take(pattern)
  => \u963B\u585E\u7684\u65B9\u6CD5  \u5339\u914D\u53D1\u51FA\u7684action
put(action)
  => \u7528\u6765\u547D\u4EE4 middleware \u5411 store \u53D1\u8D77\u4E00\u4E2Aaction \u8FD9\u4E2A\u662F\u975E\u963B\u585E\u578B\u7684`,lang:"js"}),e.a.createElement("h2",{id:"7-pubs-sub"},e.a.createElement(n.AnchorLink,{to:"#7-pubs-sub","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"7 pubs-sub"),e.a.createElement(t.a,{code:`yarn add pubsub-js
import PubSub from 'pubsub-js'
PubSub.publish('delete', data) //\u53D1\u5E03\u6D88\u606F \u53D1\u9001\u6570\u636E
PubSub.subscribe('delete\u2018,function(msg,data){ }); //\u8BA2\u9605\u62FF\u5230\u6570\u636E`,lang:"jsx"}),e.a.createElement("h2",{id:"8-hooks"},e.a.createElement(n.AnchorLink,{to:"#8-hooks","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"8 HOOKS"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u53EA\u5728\u6700\u9876\u5C42\u4F7F\u7528 hook"),e.a.createElement("li",null,"\u53EA\u5728 React \u51FD\u6570\u4E2D\u8C03\u7528 Hook")),e.a.createElement("h3",{id:"\u51FD\u6570\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u51FD\u6570\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u51FD\u6570\u7EC4\u4EF6"),e.a.createElement(t.a,{code:`// \u4E8B\u4EF6\u540D state  props  \u90FD\u4E0D\u9700\u8981this
function Demo() {
  const [count, setScount] = React.userState(0);
  function add() {
    setCount(99);
  }
  return (
    <div>
      {count}
      <button onClick={add} />
    </div>
  );
}`,lang:"js"}),e.a.createElement("h3",{id:"usestate"},e.a.createElement(n.AnchorLink,{to:"#usestate","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useState"),e.a.createElement(t.a,{code:`# React.useState()
const [xxx,setXxx] = React.useState(initValue)

xxx    => state\u7684\u5F53\u524D\u72B6\u6001\u503C
setXXX => \u66F4\u65B0\u7684\u6570\u636E

\u7B2C\u4E00\u6B21\u521D\u59CB\u5316\u503C\u5728\u5185\u90E8\u7F13\u5B58 \u5E95\u5C42\u5904\u7406 \u540E\u7EED\u5C31\u4E0D\u6267\u884C\u4E86

setXxx(newValue)

# \u4F20\u5165\u4E00\u4E2A\u51FD\u6570 \u8FD9\u4E2A\u51FD\u6570\u7684\u53C2\u6570 \u5C31\u662F\u6700\u65B0\u7684\u503C
setXxx(xxx => newValue)  //\u51FD\u6570\u5F62\u5F0F
\u6CE8\u610F\u8FD4\u56DE\u5BF9\u8C61 \u9700\u8981\u6539\u53D8\u6307\u5411 \u4E0D\u7136\u4E0D\u4F1A\u53D8\u5316`,lang:"js"}),e.a.createElement("h3",{id:"useeffect"},e.a.createElement(n.AnchorLink,{to:"#useeffect","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useEffect"),e.a.createElement(t.a,{code:`# React.useEffect()
React.useEffect(() => {
  effect
  return () => {
    cleanup
  }
}, [input])

## componentDidMount
React.useEffect(()=>{
 // componentDidMount
 },[])
// \u6570\u7EC4\u91CC\u9762\u4F20\u4EC0\u4E48state \u5C31\u68C0\u6D4B\u4EC0\u4E48\u6570\u636E \u76F8\u5F53\u4E8Eupdate\u94A9\u5B50\u4E86 \u4E0D\u5199\u7684\u5C31\u4E0D\u68C0\u6D4B
      ### ReactDOM.unmountComponentAtNode
      //\u5378\u8F7D\u7EC4\u4EF6
import ReactDOM from 'react-dom'
import { unmountComponentAtNode } from 'react-dom';
ReactDOM.unmountComponentAtNode(document.getElementById("root"))
 ## componentWillUnmount
React.useEffect(()=>{
  return () =>{ /* componentWillUnmount*/ () {}
 },[])
## componentDisUpdata()
React.useEffect(()=>{
 // componentDidUpdata \u68C0\u6D4B\u6240\u6709\u7684
 })
React.useEffect(()=>{
 // componentDidUpdata \u68C0\u6D4B\u6570\u7EC4\u5185\u7684
 },[])
# \u5B9E\u73B0vue\u7684watch
useEffect(() => {
    console.log('counter\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u6700\u65B0\u503C\uFF1A', counter);
}, [counter]);`,lang:"js"}),e.a.createElement("h3",{id:"useref"},e.a.createElement(n.AnchorLink,{to:"#useref","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useRef"),e.a.createElement(t.a,{code:`const ref = React.useRef(initialValue)
<input type='text' ref={myRef} />
<button onClick={console.log(myRef.current.value)}  />

#  \u53EF\u4EE5\u7528\u6765\u5B58\u53D8\u91CF
const xxx = React.useRef(0)
// ref\u5728\u6E32\u67D3\u7684\u65F6\u5019 \u90FD\u662F\u552F\u4E00\u7684, \u5F15\u7528\u7684\u90FD\u662F\u4E00\u6837\u7684,\u4E0D\u4F1A\u5F02\u6B65
\u4FEE\u6539 ref \u7684\u503C  \u4E0D\u4F1A\u8BA9\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3
\u501F\u7528 useState \u7684\u65B9\u6CD5 \u53EF\u4EE5\u8BA9\u4ED6\u624B\u52A8\u6E32\u67D3
# \u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A\u53D8\u91CF \u6D88\u9664useEffect\u7684 \u9996\u6B21\u52A0\u8F7D\u6548\u679C
const firstRender = useRef(true)
 useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    ......
  }, [checked]);
# \u8BB0\u5F55\u4E0A\u4E00\u6B21\u7684Porps\u7684\u503C
const CountRef = useRef()
useEffect(()=>{
  CountRef.current = count
})
const preCount = CountRef.current`,lang:"js"}),e.a.createElement("h3",{id:"\u81EA\u5B9A\u4E49-hook"},e.a.createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49-hook","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49 hook"),e.a.createElement(t.a,{code:`# \u5171\u4EAB\u903B\u8F91
# \u51FD\u6570\u540D\u79F0\u5FC5\u987B\u4EE5 use \u5F00\u5934, \u4E0D\u5171\u4EAB state
const useXxx = () => {
  const [count, setCount] = React.useState(20)
  useEffect
  const increment = useCallback(() => {
        setCount(count + 1)
    }, [count])
  return {count,setCount,increment}
}
# \u4F7F\u7528
const {count, setCount,increment} = useXxx()
<button onClick={increment}>`,lang:"jsx"}),e.a.createElement("h4",{id:"usedebouce"},e.a.createElement(n.AnchorLink,{to:"#usedebouce","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useDebouce"),e.a.createElement(t.a,{code:`import { useState, useEffect } from 'react'
function useDebounce(value: any, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}
export default useDebounce;
#
import useDebounce from './useDebounce'
const useDebounceValue = useDebounce(inputValue, 500)
\u6B64\u65F6\u53EA\u8981 \u628A \u4E4B\u524D\u7684 \u8868\u5355value \u5168\u90E8\u6362\u6210 useDebounceValue\u5C31\u884C\u4E86`,lang:"js"}),e.a.createElement("h4",{id:"usethrottle"},e.a.createElement(n.AnchorLink,{to:"#usethrottle","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useThrottle"),e.a.createElement(t.a,{code:`import {useEffect, useRef,useCallback} from 'react';
function useThrottle(fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null });
  useEffect(function () {
    current.fn = fn;
  }, [fn]);

  return useCallback(function (...args) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
      current.fn.call(this, ...args);
    }
  }, dep);
}
export default useThrottle
#
import useThrottle from './useThrottle'
const throttledFunc = useThrottle(fn, 2000);`,lang:"js"}),e.a.createElement("h4",{id:"usescrollposition"},e.a.createElement(n.AnchorLink,{to:"#usescrollposition","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useScrollPosition"),e.a.createElement(t.a,{code:`// \u83B7\u53D6\u6EDA\u52A8\u6761\u9AD8\u5EA6
import {useState,useEffect} from 'react'
function useScrollPostion() {
  const [scrollPosition, setScrollPostion] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollPostion(window.scrollY)
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  },[])
  return scrollPosition
}
export default useScrollPostion
#
import useScrollPostion form './useScrollPostion'
const position = useScrollPostion()`,lang:"js"}),e.a.createElement("h4",{id:"usewinsize"},e.a.createElement(n.AnchorLink,{to:"#usewinsize","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useWinSize"),e.a.createElement(t.a,{code:`// \u83B7\u53D6\u5C4F\u5E55\u5C3A\u5BF8
import { useState, useCallback, useEffect } from 'react'
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('reisze', onResize)
    }
  }, [])
  return size
}
export default useWinSize
#
  import useWinSize from './useWinSize'
  const size = useWinSize()`,lang:"js"}),e.a.createElement("h4",{id:"useisvisible"},e.a.createElement(n.AnchorLink,{to:"#useisvisible","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useIsVisible"),e.a.createElement(t.a,{code:`// \u662F\u5426\u5728\u53EF\u89C6\u533A
import { useState, useEffect } from "react";
const OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

const useIsVisible = (elementRef) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(elementRef.current);
          }
        });
      }, OPTIONS);
      observer.observe(elementRef.current);
    }
  }, [elementRef]);

  return isVisible;
};

export default useIsVisible;

#
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);
          <div style={{ height: "145vh", width: '100%' }}>1</div>
          <div ref={elemRef}>hello {isVisible && console.log("visible")}</div>`,lang:"js"}),e.a.createElement("h4",{id:"usevirtuallist"},e.a.createElement(n.AnchorLink,{to:"#usevirtuallist","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useVirtualList"),e.a.createElement(t.a,{code:`// \u865A\u62DF\u5217\u8868
import { RefObject, useEffect, useState } from 'react'
interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}
/**
 *
 * @param {ReactRef} elementRef \u4F20\u5165\u865A\u62DF\u5217\u8868\u7236\u76D2\u5B50\u7684 ref
 * @param {object}
 * threshold         \u9600\u503C 0-1 1\u8868\u793A\u5B8C\u5168\u51FA\u73B0\u5728\u5C4F\u5E55\u53EF\u89C6\u533A\u57DF\u624D\u89E6\u53D1
 * root              \u8868\u793A\u6307\u5B9A\u6839\u5143\u7D20 \u9ED8\u8BA4\u4E3A\u6D4F\u89C8\u5668\u89C6\u53E3  \u7528\u4E8E\u68C0\u67E5\u76EE\u6807\u53EF\u89C1\u6027
 * rootMargin        root\u7684\u5916\u8FB9\u8DDD '0 0 0 0'
 * freezeOnceVisible \u662F\u5426\u7F13\u5B58 \u518D\u6B21\u6ED1\u52A8\u4E0D\u91CD\u65B0\u6E32\u67D3
 * @returns {Object} entry \u8FD9\u4E2A\u5BF9\u8C61\u5177\u6709\u5F53\u524D\u53EF\u89C6\u533A\u7684\u4FE1\u606F
 * \u4F8B\u5982 entry.isIntersecting \u662F\u5426\u5728\u53EF\u89C6\u533A\u8303\u56F4
 */
function useVirtualList(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false
  }: Args
): IntersectionObserverEntry | undefined {

  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const frozen = entry?.isIntersecting && freezeOnceVisible
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }
  useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver
    if (!hasIOSupport || frozen || !node) return
    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)
    observer.observe(node)
    return () => observer.disconnect()
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen])

  return entry
}

export default useVirtualList


# \u4F7F\u7528
const Section = (props) => {
  const ref = useRef(null)
  const entry = useVirtualList(ref, {})
  const isVisible = !!entry?.isIntersecting
  console.log(\`Render Section \${props.title}\`, { isVisible })
  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        border: '1px dashed #000',
        fontSize: '2rem',
        width: '100%'
      }}
    >
      {
        isVisible ? (
          <div style={{ margin: 'auto' }}>{props.title}</div>
        ) : ""
      }
    </div>
  )
}


 Array.from({ length: 100 }).map((_, index) => (
 <Section key={index + 1} title={\`\${index + 1}\`} />
 ))`,lang:"js"}),e.a.createElement("h3",{id:"usereducer"},e.a.createElement(n.AnchorLink,{to:"#usereducer","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useReducer"),e.a.createElement(t.a,{code:`function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}`,lang:"js"}),e.a.createElement("h3",{id:"usecallback"},e.a.createElement(n.AnchorLink,{to:"#usecallback","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useCallback"),e.a.createElement(t.a,{code:`# \u548CuseMemo\u7C7B\u4F3C \u4F46\u662F\u8FD4\u56DE\u51FD\u6570\u4E0D\u8C03\u7528\u5B83
let newDataFn = useCallback((count)=>{
   xxx
},[a,b])`,lang:"js"}),e.a.createElement("h3",{id:"usememo"},e.a.createElement(n.AnchorLink,{to:"#usememo","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useMemo"),e.a.createElement(t.a,{code:`# \u548C useEffect \u4F7F\u7528\u65B9\u5F0F\u4E00\u6837 \u7C7B\u4F3C vue \u7684computed \u5728\u6E32\u67D3\u524D\u6267\u884C
let newData = useMemo(()=>{
  return a+b
},[a,b])`,lang:"js"}),e.a.createElement("h3",{id:"usecontext"},e.a.createElement(n.AnchorLink,{to:"#usecontext","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useContext"),e.a.createElement(t.a,{code:`export const xxx = React.createContext(\u9ED8\u8BA4\u503C)
<xxx.Provider value={\u9ED8\u8BA4\u503C} >
   const \u53D8\u91CF = useContext(xxx) // \u6216\u8005\u4F7F\u7528Consumer
   <xxx.Consumer>
     {
       value => <>{value}</>
     }
   </xxx.Consumer>
<xxx.Provider />
# \u53EF\u4EE5\u4F20\u9012\u51FD\u6570\u8FDB\u884C\u6570\u636E\u4EA4\u4E92
  const Mycontext = React.createContext(null)
  const [data, setData] = React.useState([])
  const clear = () => {
    setData([])
  }
  <Provider value={{data, setData, clear}}>
      <Header></Header>
  <Provider>

 const value = React.useContext(Mycontext)
 value.setData([10])
 value,clear()`,lang:"js"}),e.a.createElement("h3",{id:"forceupdate"},e.a.createElement(n.AnchorLink,{to:"#forceupdate","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"forceUpdate"),e.a.createElement(t.a,{code:`# class\u7EC4\u4EF6
this.forceUpdate(callback)

const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  function handleClick() {
    forceUpdate();
  }`,lang:"js"}),e.a.createElement("h3",{id:"uselayouteffect"},e.a.createElement(n.AnchorLink,{to:"#uselayouteffect","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useLayoutEffect"),e.a.createElement(t.a,{code:`useEffect \u662F\u5F02\u6B65\u6267\u884C\u7684\uFF0C\u800CuseLayoutEffect\u662F\u540C\u6B65\u6267\u884C\u7684\u3002
useEffect \u7684\u6267\u884C\u65F6\u673A\u662F\u6D4F\u89C8\u5668\u5B8C\u6210\u6E32\u67D3\u4E4B\u540E\uFF0C\u800C useLayoutEffect \u7684\u6267\u884C\u65F6\u673A\u662F\u6D4F\u89C8\u5668\u628A\u5185\u5BB9\u771F\u6B63\u6E32\u67D3\u5230\u754C\u9762\u4E4B\u524D\uFF0C\u548C componentDidMount \u7B49\u4EF7\u3002
# \u89E3\u51B3\u95EA\u70C1\u95EE\u9898`,lang:"js"}),e.a.createElement("p",null,"9 React \u6E90\u7801"),e.a.createElement(t.a,{code:`flow-tyoe \u9759\u6001\u68C0\u67E5\u5DE5\u5177
packages
   - event \u4E8B\u4EF6
   - react \u5B9A\u4E49\u8282\u70B9 \u8868\u73B0\u884C\u4E3A\u7684\u5305
   - react-dom
   - react-reconciler   \u5DE5\u5177
   - scheduler          \u8C03\u5EA6 \u5F02\u6B65\u6E32\u67D3
   - shared`,lang:"js"}),e.a.createElement(t.a,{code:`# ReactElement.js
createElement
# ReactBaseClasses.js
component PureComponent forceUpdate setState
#
createRef
    retrun {
      current :null
    }`,lang:"js"}),e.a.createElement("h2",{id:"9-animate"},e.a.createElement(n.AnchorLink,{to:"#9-animate","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"9 animate"),e.a.createElement("h3",{id:"react-spring"},e.a.createElement(n.AnchorLink,{to:"#react-spring","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"react-spring"),e.a.createElement(t.a,{code:`yarn add react-spring
<Spring
 from{{ opacity:1 }}
 to={{ opcity:1 }}
 { props => <div sytle={props}> \u52A8\u753B\u5185\u5BB9 </div> }
>
</Spring>`,lang:"js"}),e.a.createElement("h3",{id:"transition"},e.a.createElement(n.AnchorLink,{to:"#transition","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Transition"),e.a.createElement(t.a,{code:`yarn add react-transition-group
yarn add @types/react-transition-group --save
import {CSSTransition} from 'react-transition-group'
#
<CSSTransition
  in={\u63A7\u5236\u6837\u5F0F\u7684\u53D8\u91CF}
  timeout={1000}
  classNames="zoom-in-top"
  appear   // \u4E00\u5F00\u59CB\u5C31\u6267\u884C
/>
.fade-enter  \u5165\u573A\u52A8\u753B
.fade-enter-active \u5165\u573A\u52A8\u753B\u6267\u884C\u4E2D
.fade-enter-done \u5165\u573A\u52A8\u753B\u6267\u884C\u5B8C\u6210\u540E

.fade-edit
.fade-edit-active
.fade-done`,lang:"js"}),e.a.createElement("h3",{id:"react-loadable"},e.a.createElement(n.AnchorLink,{to:"#react-loadable","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"react-loadable"),e.a.createElement(t.a,{code:`#
yarn add react-loadable
import Loadable from 'react-loadable';
import Loading from './my-loading-component';
const LoadableComponent = Loadable({
  loader: () => import('./my-component'),  // \u5F02\u6B65\u52A0\u8F7D\u7684\u7EC4\u4EF6
  loading: Loading, // \u4E34\u65F6\u7684loading\u6548\u679C\u7EC4\u4EF6
  // loading(){ return <div>\u52A0\u8F7D\u4E2D</div>}
});
export default () => <LoadableComponent/>`,lang:"js"}),e.a.createElement("h2",{id:"10-hign"},e.a.createElement(n.AnchorLink,{to:"#10-hign","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"10 hign"),e.a.createElement("h3",{id:"\u4F7F\u7528-css-\u53D8\u91CF"},e.a.createElement(n.AnchorLink,{to:"#\u4F7F\u7528-css-\u53D8\u91CF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528 css \u53D8\u91CF"),e.a.createElement(t.a,{code:`import styles from './app.module.css'
const App = () => {
  // \u4E0D\u7528\u52A0React.CSSProperties;
  var style = { "--color": 10 } as React.CSSProperties;
  return (
    <div className={styles.header} style={style}>
      hello
    </div>
  );
};
export default App;
#
.header {
  color: var(--color)
}`,lang:"js"}),e.a.createElement("h3",{id:"fragment"},e.a.createElement(n.AnchorLink,{to:"#fragment","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Fragment"),e.a.createElement(t.a,{code:`\u6CA1\u6709\u542B\u4E49\u7684\u4E00\u4E2A\u6807\u7B7E \u5305\u88F9\u7528
<Flagment> </Flagment>
<>
</>`,lang:"js"}),e.a.createElement("h3",{id:"forwardref"},e.a.createElement(n.AnchorLink,{to:"#forwardref","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"forwardRef"),e.a.createElement(t.a,{code:`\u5C06 Father \u7EC4\u4EF6\u7684refs \u53D8\u6210children\u7EC4\u4EF6\u5185 button\u7684ref
#
const ref = React.useRef()
<Father  ref={ref} />
#
const children = React.forwardRef((props, ref)) => (
  <Button ref={ref}>
    {props.children}
  </Button>
)
console.log(ref.current.value)  // button`,lang:"js"}),e.a.createElement("h3",{id:"getderivedstatefromprops"},e.a.createElement(n.AnchorLink,{to:"#getderivedstatefromprops","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"getDerivedStateFromProps"),e.a.createElement(t.a,{code:`// \u4F1A\u5728\u8C03\u7528 render \u65B9\u6CD5\u4E4B\u524D\u8C03\u7528 \u5E94\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u6765\u66F4\u65B0 state
// \u5982\u679C\u8FD4\u56DE null \u5219\u4E0D\u66F4\u65B0\u4EFB\u4F55\u5185\u5BB9
// \u5F53 state \u7684\u503C\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u53D6\u51B3\u4E8E props\u7684\u65F6\u5019\u7528

static getDerivedStateFromProps(props, state){
  return {

  }
}`,lang:"js"}),e.a.createElement("h3",{id:"\u9519\u8BEF\u8FB9\u754C"},e.a.createElement(n.AnchorLink,{to:"#\u9519\u8BEF\u8FB9\u754C","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9519\u8BEF\u8FB9\u754C"),e.a.createElement(t.a,{code:`# getDerivedStateFromError\u914D\u5408componentDidCatch
\u751F\u4EA7\u73AF\u5883\u624D\u6709\u7528\u3002\u3002\u3002
  \u6355\u6349\u540E\u4EE3\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u4EA7\u751F\u7684\u9519\u8BEF \u4E0D\u80FD\u6355\u83B7\u81EA\u5DF1\u7EC4\u4EF6\u7684\u9519\u8BEF
  \u5176\u4ED6\u7EC4\u4EF6\u7684\u548C\u5408\u6210\u4E8B\u4EF6 \u5B9A\u65F6\u5668\u4E2D\u7684\u9519\u8BEF
// \u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u4E00\u65E6\u540E\u53F0\u7EC4\u4EF6\u62A5\u9519\uFF0C\u5C31\u4F1A\u89E6\u53D1
static getDerivedStateFromError(error) {
    console.log(error);
    // \u5728render\u4E4B\u524D\u89E6\u53D1 \u8FD4\u56DE\u65B0\u7684state
    return {stateName :error,};
}
componentDidCatch(error, info) {
    // \u7EDF\u8BA1\u9875\u9762\u7684\u9519\u8BEF\u3002\u53D1\u9001\u8BF7\u6C42\u53D1\u9001\u5230\u540E\u53F0\u53BB
    console.log(error, info);
}
# \u53EA\u5728\u751F\u4EA7\u73AF\u5883 \u4E0D\u62A5\u9519
 \u5728network \u53F3\u952E block request url \u963B\u6B62\u52A0\u8F7D
yarn run build
serve -s build`,lang:"js"}),e.a.createElement("h3",{id:"context"},e.a.createElement(n.AnchorLink,{to:"#context","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Context"),e.a.createElement(t.a,{code:`# \u7C7B\u7EC4\u4EF6 \u548C \u51FD\u6570\u7EC4\u4EF6
const { Provider, Consumer } = React.createContext()
   <Provider value={}> //\u6CE8\u610F\u53D8\u91CF\u4E0D\u8981\u53EBvalue
   </Provider>
<Consumer>
{
  value=> {
    return <div>{  value  }</div>
}
</Consumer>
# \u7C7B\u7EC4\u4EF6\u7528contextType   \u51FD\u6570\u7EC4\u4EF6\u7528useContext
static contextType = MyContext
this.context;

 const value = React.useContext(Mycontext)
# \u53EF\u4EE5\u4F20\u9012\u51FD\u6570\u8FDB\u884C\u6570\u636E\u4EA4\u4E92
  const Mycontext = React.createContext(null)
  const [data, setData] = React.useState([])
  const clear = () => {
    setData([])
  }
  <Provider value={{data, setData, clear}}>
      <Header></Header>
  <Provider>

 const value = React.useContext(Mycontext)
 value.setData([10])
 value,clear()`,lang:"js"}),e.a.createElement("h3",{id:"\u7EC4\u4EF6\u4F18\u5316"},e.a.createElement(n.AnchorLink,{to:"#\u7EC4\u4EF6\u4F18\u5316","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7EC4\u4EF6\u4F18\u5316"),e.a.createElement(t.a,{code:`# \u51CF\u8F7Bstate   => \u53EA\u5B58\u50A8\u8DDF\u7EC4\u4EF6\u6E32\u67D3\u76F8\u5173\u7684\u6570\u636E
\u4F8B\u5982 \u5B9A\u65F6\u5668id\u653E\u5728this\u4E2D
# \u53EA\u6709\u5B50\u7EC4\u4EF6\u6570\u636E\u6539\u53D8\u65F6\u624D\u91CD\u65B0render
- 1.\u4F7F\u7528 shouldComponentUpdate
     shouldComponentUpdate(nextProps,nextState) { }
// \u51B3\u5B9A\u662F\u5426\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6 nextState \u6700\u65B0\u7684\u72B6\u6001 this.state \u5F53\u524D\u7684\u72B6\u6001
     return !this.state.xxx === nextState.xxx
     return !this.props.xxx === nextProps.xxx
- 2. \u4F7F\u7528 PureComponent
// \u81EA\u52A8\u6D45\u6BD4\u8F83 \u53D8\u5316\u8FD4\u56DE false
// state\u540C\u4E00\u6307\u5411 \u76F4\u63A5\u8FD4\u56DEfalse  \u5373\u4E0D\u80FD\u76F4\u63A5\u6539\u53D8state\u5BF9\u8C61\u7684\u5C5E\u6027
// \u8FD9\u4E2A\u9AD8\u9636\u7EC4\u4EF6 \u53EA\u6709\u6539\u53D8state\u6307\u5411 \u624D\u80FD\u8BC6\u522B
import {PureComponent} from 'react'
export default class App extends PureComponent

- React.memo(\u7EC4\u4EF6,boolean)
// \u548C shouldComponentUpdate\u4E00\u6837 \u5F53\u53D8\u5316\u7684\u65F6\u5019 true \u5237\u65B0`,lang:"js"}),e.a.createElement("h3",{id:"\u9AD8\u9636\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u9AD8\u9636\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u9636\u7EC4\u4EF6"),e.a.createElement(t.a,{code:`# \u8BBE\u7F6EdisplayName => \u8C03\u8BD5\u5DE5\u5177\u533A\u5206\u540D\u5B57   \u7531\u4E8E\u9AD8\u9636\u7EC4\u4EF6\u8FD4\u56DE\u7684\u540D\u5B57\u76F8\u540C
// xxx.displayName = ''
// component.type.displayName
XxxxxxcomponentName.displayName = \`WithXxxxxName\${getDisplayName(WrappedComponent)}\`
// \u5728\u9AD8\u9636\u7EC4\u4EF6\u5185\u90E8
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
function withxxx(XcomponentsName) {
// \u51FD\u6570\u5185\u5199\u4E00\u4E2A\u6709\u903B\u8F91\u6570\u636E\u7684class\u7EC4\u4EF6 \u5728rander\u4E2D\u4EE5\u81EA\u5B9A\u4E49\u5C5E\u6027\u5F62\u5F0F\u5BFC\u51FA\u903B\u8F91
 class Mouse extends React.Component{
    render(){
    return <XcomponentsName {...this.state }{...this.props}/>
    }
  }
}
const newComponentName = withxxx(needHIGHcomponentName)
<newComponentName />`,lang:"react"}),e.a.createElement("h3",{id:"createportal"},e.a.createElement(n.AnchorLink,{to:"#createportal","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"createPortal"),e.a.createElement(t.a,{code:`\u6E32\u67D3\u5230dom\u4E4B\u5916;
ReactDOM.createPortal(child, container);`,lang:"js"}),e.a.createElement("h3",{id:"pwa"},e.a.createElement(n.AnchorLink,{to:"#pwa","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"PWA"),e.a.createElement(t.a,{code:`# \u5728\u9879\u76EE\u4E2D\u5F00\u542F pwa
Workbox\u5E93
npx create-react-app my-app --template cra-template-pwa
npm install workbox-webpack-plugin
\u5728 index.js
serviceWorker.register();

# \u6253\u5305\u4E4B\u540E
manifest.json \u914D\u7F6E\u5143\u4FE1\u606F
service-worker.js pwa\u4FE1\u606F
precache-manifest \u9759\u6001\u8D44\u6E90`,lang:"js"}),e.a.createElement("h4",{id:"serverworker"},e.a.createElement(n.AnchorLink,{to:"#serverworker","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"serverWorker"),e.a.createElement(t.a,{code:`// \u5728chrome application serviceWorkers \u4E2D\u70B9\u51FB skipWaiting \u5237\u65B0
# \u6CE8\u518C
navigator.serviceWorker.register('./sw.js', {scope: './'})
    .then(
      registration => console.log(registration),
      error => console.error(error)
    )
# self \u5168\u5C40\u5BF9\u8C61 install .activate .fetch \u4E8B\u4EF6 push sync
// install \u65B0\u7684 serverWorker \u4E0B\u8F7D\u4E4B\u540E \u53EA\u53D1\u751F\u4E00\u6B21
// activate \u505C\u6B62 \u53EA\u53D1\u751F\u4E00\u6B21
// fetch \u8D44\u6E90\u88AB\u8BF7\u6C42\u65F6 \u53D1\u751F\u65E0\u6570\u6B21
self.addEventListener('install', e => {
  console.log('install', event)
  e.waitUntil(); // \u4F20\u5165promise \u4F1A\u963B\u585E\u540E\u7EEDactivate\u6267\u884C
  e.waitUntil(self.skipWaiting()) // \u505C\u6B62\u65E7\u7684 \u5F00\u542F\u65B0\u7684
})
self.addEventListener('activate', e => {
  console.log('activate', e)
  e.waitUntil(self.clients.claim()) // \u63A7\u5236
})
self.addEventListener('fetch', e => {
  console.log('fetch', e)
  e.respondWith()
})`,lang:"js"}),e.a.createElement("h4",{id:"cache"},e.a.createElement(n.AnchorLink,{to:"#cache","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"cache"),e.a.createElement(t.a,{code:`// \u5728 onload \u4E4B\u540E\u4E5F\u53EF\u4EE5\u5199\u7F13\u5B58

# caches.open('xxx') caches.addAll(['/','./xxx'])
// \u6253\u5F00\u7F13\u5B58 \u6DFB\u52A0\u7F13\u5B58\u8DEF\u5F84
self.addEventListener('install', e => {
  console.log('install', e)
  e.waitUntil(
    caches.open('cache-v1').then(
      cache=> cache.addAll(['/','./index.css'])
    )
  )
})
# \u6DFB\u52A0\u7F13\u5B58
# xxx.match(e.request) cache.put(e.request,res.clone())
# \u5212\u8BCD\u7FFB\u8BD1\u63D2\u4EF6\u4F1A\u62A5\u9519
self.addEventListener('fetch', e => {
  // console.log('fetch', e)
  e.respondWith(
    caches.open('cache-v1').then(
      cache =>
        cache.match(e.request).then(
          response => {
            if (response) {
              return response
            }
            return fetch(e.request).then(
              fetchRes => {
                cache.put(e.request, fetchRes.clone());
                return fetchRes
              }
            )
          }
        )
    )
  )
})
# \u6E05\u9664\u4E0A\u4E00\u6B21\u7684\u7F13\u5B58
self.addEventListener('activate', e => {
  console.log('activate', e)
  e.waitUntil(caches.keys()
    .then(
      cachesNames => {
        return Promise.all(cachesNames.map(cachesName => {
            if (cachesName !== CACHE_NAME) {
              return caches.delete(cachesName)
            }
          })
        )
      }
    )
  )
})`,lang:"js"}),e.a.createElement("h4",{id:"notification"},e.a.createElement(n.AnchorLink,{to:"#notification","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Notification"),e.a.createElement(t.a,{code:`# \u67E5\u770B\u6743\u9650
Notification.permission
"denied" "default" 'granted'
# \u83B7\u53D6\u6743\u9650
Notification.requestPermission()
  .then( permission => console.log(permission) )
# \u53D1\u9001\u666E\u901A\u901A\u77E5
new Notification('\u4E3B\u6807\u9898',{body:"\u5185\u5BB9"} )
# \u7F13\u5B58\u7684\u901A\u77E5
self.registration.showNotification('hi')`,lang:"js"}),e.a.createElement("h3",{id:"oauth"},e.a.createElement(n.AnchorLink,{to:"#oauth","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"OAuth"),e.a.createElement(t.a,{code:`# github
setting
developer settings
New Github App

homepage URL  \u7F51\u7AD9\u7684\u94FE\u63A5   http://localhost:3000
Callback URL  \u767B\u5F55\u6210\u529F\u8DF3\u8F6C\u56DE\u7684\u5730\u5740  http://localhost:3000/auth
#
App ID: 140639
Client ID: Iv1.c569ce9b56fd26a5`,lang:"js"}),e.a.createElement("h3",{id:"react-virtualized"},e.a.createElement(n.AnchorLink,{to:"#react-virtualized","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"react-virtualized"),e.a.createElement(t.a,{code:`\u53EA\u6E32\u67D3\u9875\u9762\u53EF\u89C6\u533A\u7684\u5217\u8868\u9879\uFF0C\u975E\u53EF\u89C6\u533A\u57DF\u6570\u636E \u4E0D\u6E32\u67D3 \u5728\u6EDA\u52A8\u5217\u8868\u65F6\u52A8\u6001\u66F4\u65B0\u5217\u8868\u9879
yarn add react-virtualized
import 'react-virtualized/styles.css'
import { List,AutoSizer } from 'react-virtualized'

https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md


<AitpSizer></AitpSizer> \u8BA9list\u7EC4\u4EF6\u6CBE\u6EE1\u5C4F\u5E55`,lang:"js"}),e.a.createElement(t.a,{code:`# \u6EDA\u52A8\u6761\u4F4D\u7F6E
function findScroller(element) {
    element.onscroll = function () {
        console.log(element)
    }
    Array.from(element.children).forEach(findScroller)
}
findScroller(document.body)`,lang:"js"}),e.a.createElement("h3",{id:"hook-\u83B7\u53D6-hook-ref"},e.a.createElement(n.AnchorLink,{to:"#hook-\u83B7\u53D6-hook-ref","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"hook \u83B7\u53D6 Hook-ref"),e.a.createElement(t.a,{code:`import React, {
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
} from 'react';

const Child = (props, ModalRef) => {
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
  const ModalRef = useRef(null);

  useEffect(() => {
    console.log(ModalRef.current.getData());
  }, []);

  return (
    <>
      <Children ref={ModalRef} />
    </>
  );
};

export default Father;`,lang:"js"}),e.a.createElement("h3",{id:"class-\u83B7\u53D6-hook-ref"},e.a.createElement(n.AnchorLink,{to:"#class-\u83B7\u53D6-hook-ref","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"class \u83B7\u53D6 hook-ref"),e.a.createElement(t.a,{code:`import React, { useImperativeHandle } from 'react';

const Children = props => {
  const { ModalRef } = props;

  useImperativeHandle(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    },
  }));

  return <>Children</>;
};

export default class Father extends React.Component {
  ModalRef = React.createRef();
  state = {};
  componentDidMount() {
    console.log(this.ModalRef.current.getData());
  }

  render() {
    return (
      <>
        <Children ModalRef={this.ModalRef} />
      </>
    );
  }
}`,lang:"js"}),e.a.createElement("h3",{id:"\u4E00\u6B21\u751F\u6210\u591A\u4E2A-ref"},e.a.createElement(n.AnchorLink,{to:"#\u4E00\u6B21\u751F\u6210\u591A\u4E2A-ref","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E00\u6B21\u751F\u6210\u591A\u4E2A ref"),e.a.createElement(t.a,{code:`#
const inputRef = useRef([]);
inputRef.current[idx].focus();
<input
  ref={el => inputRef.current[idx] = el}
/>
#
  const {useRef} = React;
const App = () => {
  const list = [...Array(8).keys()];
  const inputRef = useRef([]);
  const handler = idx => e => {
    const next = inputRef.current[idx + 1];
    if (next) {
      next.focus()
    }
  };
  return (
    <div className="App">
      <div className="input_boxes">
        {list.map(x => (
        <div>
          <input
            key={x}
            ref={el => inputRef.current[x] = el}
            onChange={handler(x)}
            type="number"
            className="otp_box"
          />
        </div>
        ))}
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));`,lang:"js"}),e.a.createElement("h2",{id:"\u5176\u4ED6"},e.a.createElement(n.AnchorLink,{to:"#\u5176\u4ED6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ED6"),e.a.createElement("h3",{id:"\u9879\u76EE\u6253\u5305"},e.a.createElement(n.AnchorLink,{to:"#\u9879\u76EE\u6253\u5305","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9879\u76EE\u6253\u5305"),e.a.createElement(t.a,{code:`\u6839\u76EE\u5F55\u521B\u5EFA .env.production
REACT_APP_URL=http://localhost:8080
yarn build

# \u4FEE\u6539\u811A\u624B\u67B6\u914D\u7F6E
npm run eject \u4E0D\u53EF\u9006
https://github.com/timarney/react-app-rewired`,lang:"js"}),e.a.createElement("h3",{id:"express-\u540E\u7AEF\u521B\u5EFA"},e.a.createElement(n.AnchorLink,{to:"#express-\u540E\u7AEF\u521B\u5EFA","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"express \u540E\u7AEF\u521B\u5EFA"),e.a.createElement(t.a,{code:`#   npm install express-generator -g
yarn build
express \u751F\u6210\u7684\u6587\u4EF6\u5939\u540D\u5B57  // \u521B\u5EFA\u4E00\u4E2Aexpress \u670D\u52A1
\u5C06dist\u6587\u4EF6\u6240\u6709\u7684\u5185\u5BB9 \u653E\u5728 express\u521B\u5EFA\u7684\u6587\u4EF6\u7684 public \u6587\u4EF6\u76EE\u5F55\u4E0B
yarn
yarn start
http://localhost:3000/`,lang:"js"}),e.a.createElement("h3",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u987A\u5E8F"},e.a.createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u987A\u5E8F","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u987A\u5E8F"),e.a.createElement(t.a,{code:`# \u5B50\u7EC4\u4EF6
import React, { useEffect, useRef, useState } from 'react'
const Home = ({ list, children }) => {
  console.log(children)
  return (
    <>
      {
        list.map((item, index) => (
          <div key={index}>
            {children[item]}
          </div>
        ))
      }
    </>
  )
}
export default Home
# \u7236\u7EC4\u4EF6
import styles from './index.less';
import Home from './home'

export default function IndexPage() {
  let list = ['one', 'three', 'two',]
  return (
    <>
      <Home list={list}>
        {
          {
            one: (<>1</>),
            two: (<>2</>),
            three: (<>3</>),
          }
        }
      </Home>
    </>
  );
}
# \u6B64\u65F6\u901A\u8FC7\u6570\u7EC4\u7684\u987A\u5E8F \u5C31\u80FD\u76F4\u63A5\u63A7\u5236\u7EC4\u4EF6\u7684\u4F4D\u7F6E\u4E86`,lang:"js"}),e.a.createElement("h3",{id:"https"},e.a.createElement(n.AnchorLink,{to:"#https","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"https"),e.a.createElement(t.a,{code:`proxy: {
    '/admin-site': {
      // target: 'http://192.168.2.60:8082', //\u9047\u5B89\u73AF\u5883
      target: 'https://admin-test.ococmall.com',
        // \u6D4B\u8BD5\u73AF\u5883:https \u9700\u8981\u914D\u7F6Esecure headers
      changeOrigin: true,
      secure: false,
      headers: {
        Referer: 'https://admin-test.ococmall.com',
      },
    },
  },`,lang:"js"}))));c.default=r=>{const u=e.a.useContext(n.context),d=u.demos;return e.a.useEffect(()=>{var o;r!=null&&(o=r.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e.a.createElement(i,{demos:d})}}}]);

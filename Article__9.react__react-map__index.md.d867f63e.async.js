(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{X7lZ:function(s,i,t){"use strict";t.r(i);var c=t("cDcd"),e=t.n(c),n=t("dEAq"),m=t.n(n),a=t("H1Ra");const r=e.a.memo(({demos:l})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"react-map"},e.a.createElement(n.AnchorLink,{to:"#react-map","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"React-map"),e.a.createElement("h2",{id:"\u51C6\u5907\u9636\u6BB5"},e.a.createElement(n.AnchorLink,{to:"#\u51C6\u5907\u9636\u6BB5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u51C6\u5907\u9636\u6BB5"),e.a.createElement("h3",{id:"\u5F15\u5165"},e.a.createElement(n.AnchorLink,{to:"#\u5F15\u5165","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5F15\u5165"),e.a.createElement(a.a,{code:`npm install --save react-amap

import styles from './index.less';
import { Map } from 'react-amap';
export default function IndexPage() {
  return (
    <div className={styles.mapContenter}>
      <Map amapkey={'8dec1a9e7c97b30691b132b24b5f6325'} />
    </div>
  );
}

.mapContenter {
  width: 1000px;
  height: 1000px;
}

# \u5C5E\u6027\u6700\u597D\u7528 state \u5904\u7406 \u4E0D\u7136\u4F1A\u6709\u4E0D\u5FC5\u8981\u7684\u5237\u65B0`,lang:"js"}),e.a.createElement("h3",{id:"\u4E8B\u4EF6\u7ED1\u5B9A"},e.a.createElement(n.AnchorLink,{to:"#\u4E8B\u4EF6\u7ED1\u5B9A","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E8B\u4EF6\u7ED1\u5B9A"),e.a.createElement(a.a,{code:`const events = {
    created: (instance)=> { console.log(instance.getZoom())},
    click: () => {
      console.log('clicked')
    },
}
<Polygon events={events}  />`,lang:"js"}),e.a.createElement("h3",{id:"\u6CE8\u610F\u4E8B\u9879"},e.a.createElement(n.AnchorLink,{to:"#\u6CE8\u610F\u4E8B\u9879","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6CE8\u610F\u4E8B\u9879"),e.a.createElement(a.a,{code:"",lang:"js"}),e.a.createElement("h2",{id:"\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7EC4\u4EF6"),e.a.createElement("h3",{id:"\u5BB9\u5668"},e.a.createElement(n.AnchorLink,{to:"#\u5BB9\u5668","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5BB9\u5668"),e.a.createElement("h4",{id:"map"},e.a.createElement(n.AnchorLink,{to:"#map","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Map"),e.a.createElement(a.a,{code:`# \u4F1A\u7ED9\u6BCF\u4E2A\u5B50\u7EC4\u4EF6\u6CE8\u5165 props.__ele__  props.__map__ \u5C5E\u6027
<Map
  mapStyle={ normal dark light fresh blue_night }
// \u5730\u56FE\u5143\u7D20 \u80CC\u666F \u70B9 \u9053\u8DEF \u5EFA\u7B51\u7269
  features={['bg','point','road','building']}
  loading={ReactNode}
// \u662F\u5426\u52A0\u8F7D AMapUI\u7EC4\u4EF6\u5E93
  useAMapUI={boolean}
// \u4E2D\u5FC3\u4F4D\u7F6E
  conter={
    longitude: 135,
    latitude: 30
  }
// \u7F29\u5C0F\u6BD4\u4F8B
  zoom={4}
// \u5F00\u542F3d \u6700\u597D\u914D\u5408 plugin \u7684 ControlBar \u63A7\u4EF6
  viewMode="3D"
// \u53EF\u4EE5\u90FD\u653E\u5728status\u7BA1\u7406 \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5199\u5728 \u5916\u9762\u7B2C\u4E00\u5C42
  status={
    {
      zoomEnable:false, \u662F\u5426\u53EF\u4EE5\u7F29\u653E
      animateEnable:false,
      doubleClickZoom:false,
      dragEnable:false,
      isHotspot:false,
      jogEnable:false,
      keyboardEnable:false,
      resizeEnable:false,
      rotateEnable:false,
      scrollWheel:false,
      touchZoom:false,
    }
  }
/* \u5730\u56FE\u7A7A\u95F4 string[] | object[]
plugins={[
 'ToolBar',      \u653E\u5927\u7F29\u5C0F
 'MapType',      \u5207\u6362\u536B\u661F\u5730\u56FE
 'Scale',        \u5730\u56FE\u6BD4\u4F8B\u5C3A
 'OverView',     \u53F3\u4E0B\u89D2\u9E70\u773C
 'ControlBar'    3d\u6548\u679C \u64CD\u4F5C\u9762\u677F
]}
*/
  plugins={[
    {
       name:"ToolBar",
       options:{
         position:'LT RT LB RB',
         // \u7CBE\u7B80\u6A21\u5F0F
         liteStyle:Boolean,
         // \u6807\u5C3A \u5F53liteStyle=false \u65F6\u6709\u6548
         ruler:Boolean,
         visible:true,
         // \u81EA\u52A8\u5B9A\u4F4D\u5230\u7528\u6237\u7684\u4F4D\u7F6E
         autoPosition:Boolean,
         onCreated(ins){
           console.log(ins)
         }

       }
    }
  ]}
  events={
    {
      created: (ins) => {console.log(ins)},
      click: () => {console.log('clicked')}
    }
  }
/>`,lang:"js"}),e.a.createElement("h6",{id:"dom"},e.a.createElement(n.AnchorLink,{to:"#dom","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"dom"),e.a.createElement(a.a,{code:`// \u9700\u8981 \u56FA\u5B9A\u5B9A\u4F4D
<Map>\u81EA\u5B9A\u4E49\u8282\u70B9</Map>`,lang:"js"}),e.a.createElement("h4",{id:"mousetool"},e.a.createElement(n.AnchorLink,{to:"#mousetool","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"MouseTool"),e.a.createElement(a.a,{code:`# \u7528\u6237\u7ED8\u5236\u56FE\u5F62
const [ tool, setTool ] = useState({})
<Map>
   <MouseTool
     events={{
       created:(_tool)=>{
         setTool(_tool)
       },
// \u7ED8\u5236\u5B8C\u6BD5\u540E\u89E6\u53D1
        draw(){}
      }}
/>
</Map>

<button
  onClick={
    ()=>{
       tool.circle()
       tool.rectangle()
       tool.marker()
       tool.polygon()
       tool.close()
    }
  }
>
  \u7ED8\u5236\u56FE\u5F62
</button>`,lang:"js"}),e.a.createElement("h3",{id:"\u8986\u76D6\u7269"},e.a.createElement(n.AnchorLink,{to:"#\u8986\u76D6\u7269","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8986\u76D6\u7269"),e.a.createElement("h4",{id:"marker"},e.a.createElement(n.AnchorLink,{to:"#marker","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Marker"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u5355\u4E2A\u5750\u6807\u70B9")),e.a.createElement(a.a,{code:`<Marker
  position={{longitude: 121, latitude: 36}}
  offset={[-10,-34]}
  visible={boolean}
// \u662F\u5426\u53EF\u70B9\u51FB
  clickable={boolean}
// \u53EF\u62D6\u52A8
  draggable={boolean}
  events={{
    created(instance){
      // instance \u662F\u9AD8\u5FB7\u5730\u56FE\u539F\u751F\u7684 Marker \u5B9E\u4F8B
    }
    click(){
    }
  }}
// \u81EA\u5B9A\u4E49\u5916\u89C2 \u914D\u5408extData \u6570\u636E
  render={(extData)=>{
    return <>{extData}<>
  }}
  extData={'lable'}
>
  <div>
    \u81EA\u5B9A\u4E49\u5916\u89C2
  </div>
</Marker>`,lang:"js"}),e.a.createElement("h4",{id:"markers"},e.a.createElement(n.AnchorLink,{to:"#markers","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Markers"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u591A\u4E2A\u5750\u6807\u70B9")),e.a.createElement(a.a,{code:`<Markers
   markers={[
    { position:{longitude: 121, latitude: 36} },
    ...
   ]}
   events={{
     created:(allMarkers)=>{}
     click:(MapOption,marker)=>{
        // \u4F7F\u7528\u539F\u751F\u65B9\u6CD5\u83B7\u53D6\u6240\u6709\u7684\u6570\u636E
        const extData = marker.getExtData();
     }
   }}
// \u5F00\u542F\u805A\u5408
   useCluster={boolean}
// \u503E\u659C\u89D2\u5EA6
   angle={(data,index)=>({...})}
// \u81EA\u5B9A\u4E49\u5916\u89C2
   render={()=>ReactNode}
/>
#
  \u83B7\u53D6\u70B9\u51FB\u4E8B\u4EF6\u7684\u7D22\u5F15
  \u5728markers\u521D\u59CB\u6570\u636E\u4E2D\u5B9A\u4E49\u7D22\u5F15`,lang:"js"}),e.a.createElement("h4",{id:"polygon"},e.a.createElement(n.AnchorLink,{to:"#polygon","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Polygon"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u591A\u8FB9\u5F62")),e.a.createElement(a.a,{code:`<Polygon
  path={[
    { longitude: 101, latitude: 36 },
    { longitude: 111, latitude: 36 },
    { longitude: 121, latitude: 36 },
  ]}
  draggable
  style={{
    strokeColor: 'red',
    fillColor: 'red',
  }}
/>`,lang:"js"}),e.a.createElement("h4",{id:"polyline"},e.a.createElement(n.AnchorLink,{to:"#polyline","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Polyline"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7EBF")),e.a.createElement(a.a,{code:`<Polyline
  path={[
    { longitude: 101, latitude: 36 },
    { longitude: 111, latitude: 36 },
    { longitude: 121, latitude: 36 },
  ]}
  style={{
    strokeColor: 'red',
    fillColor: 'red',
  }}
/>`,lang:"js"}),e.a.createElement("h4",{id:"polyeditor"},e.a.createElement(n.AnchorLink,{to:"#polyeditor","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"PolyEditor"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7F16\u8F91\u529F\u80FD")),e.a.createElement(a.a,{code:`<Polygon path={...}>
     <PolyEditor
          active={Boolean}
          events={}
/>
</Polygon>`,lang:"js"}),e.a.createElement("h4",{id:"circle"},e.a.createElement(n.AnchorLink,{to:"#circle","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Circle"),e.a.createElement(a.a,{code:`<Circle
  center={{ longitude: 120, latitude: 30 }}
  radius={Number}
  events={}
  visible={}
  style={}
  draggable={}
/>`,lang:"js"}),e.a.createElement("h4",{id:"circleeditor"},e.a.createElement(n.AnchorLink,{to:"#circleeditor","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"CircleEditor"),e.a.createElement(a.a,{code:`<Circle>
  <CircleEditor active={true} />
</Circle>`,lang:"js"}),e.a.createElement("h4",{id:"groundimage"},e.a.createElement(n.AnchorLink,{to:"#groundimage","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"GroundImage"),e.a.createElement(a.a,{code:`<GroundImage
// \u6839\u636E\u897F\u5357\u65B9\u548C\u4E1C\u5317\u65B9\u7684\u5750\u6807\u786E\u5B9A\u7684\u8FB9\u754C\u8303\u56F4
            bounds={
                sw: {
                  longitude: 120,
                  latitude: 20,
                },
                ne: {
                  longitude: 130,
                  latitude: 30
                }
            }
            src={String}
            opacity={Number}

            visible={}
            events={}
            clickable
   />`,lang:"js"}),e.a.createElement("h3",{id:"\u4FE1\u606F\u7A97\u4F53"},e.a.createElement(n.AnchorLink,{to:"#\u4FE1\u606F\u7A97\u4F53","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4FE1\u606F\u7A97\u4F53"),e.a.createElement("h4",{id:"infowindow"},e.a.createElement(n.AnchorLink,{to:"#infowindow","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"InfoWindow"),e.a.createElement(a.a,{code:`<InfoWindow
  position={{ longitude: 120, latitude: 30 }}
  // \u662F\u5426\u81EA\u5B9A\u4E49\u5916\u89C2 \u914D\u548C content
  isCustom={false}
  // \u662F\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684 Html
  content={\`html\` | string}
  visible={true}
  size={{ width: 100, height: 100 }}
  offset={[-10, -34]}
  events={}
>
  \u8FD9\u8FD9\u91CCjsx\u81EA\u5B9A\u4E49\u6837\u5F0F
</InfoWindow>`,lang:"js"}),e.a.createElement("h2",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},e.a.createElement(n.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),e.a.createElement(a.a,{code:`<Map amapkey={'788e08def03f95c670944fe2c78fa76f'}>
        <MyMapComponent />
  </Map>
const MyMapComponent = ({__ele__:ele,__map__:map})=>{
  const zoomIn = () => map.zoomIn()
  const zoomOut = () => map.zoomOut()
   return (
    <div>
        <span onClick={zoomIn}>+</span>
        <span onClick={zoomOut}>-</span>
    </div>);
)}`,lang:"js"}),e.a.createElement("h2",{id:"\u4F7F\u7528\u9AD8\u5FB7\u5730\u56FE-api"},e.a.createElement(n.AnchorLink,{to:"#\u4F7F\u7528\u9AD8\u5FB7\u5730\u56FE-api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528\u9AD8\u5FB7\u5730\u56FE API"))));i.default=l=>{const u=e.a.useContext(n.context),d=u.demos;return e.a.useEffect(()=>{var o;l!=null&&(o=l.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(l.location.hash.slice(1)))},[]),e.a.createElement(r,{demos:d})}}}]);

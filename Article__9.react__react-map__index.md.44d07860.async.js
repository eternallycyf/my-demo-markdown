(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{X7lZ:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dEAq");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6T1g");










 // memo for page content, to avoid useless re-render since other context fields changed

const PageContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  demos: DUMI_ALL_DEMOS
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "react-map"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#react-map",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "React-map"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u51C6\\u5907\\u9636\\u6BB5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u51C6\\u5907\\u9636\\u6BB5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u51C6\\u5907\\u9636\\u6BB5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5F15\\u5165"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5F15\\u5165",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5F15\\u5165"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "npm install --save react-amap\\n\\nimport styles from './index.less';\\nimport { Map } from 'react-amap';\\nexport default function IndexPage() {\\n  return (\\n    <div className={styles.mapContenter}>\\n      <Map amapkey={'8dec1a9e7c97b30691b132b24b5f6325'} />\\n    </div>\\n  );\\n}\\n\\n.mapContenter {\\n  width: 1000px;\\n  height: 1000px;\\n}\\n\\n# \u5C5E\u6027\u6700\u597D\u7528 state \u5904\u7406 \u4E0D\u7136\u4F1A\u6709\u4E0D\u5FC5\u8981\u7684\u5237\u65B0",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4E8B\\u4EF6\\u7ED1\\u5B9A"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4E8B\\u4EF6\\u7ED1\\u5B9A",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4E8B\\u4EF6\\u7ED1\\u5B9A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "const events = {\\n    created: (instance)=> { console.log(instance.getZoom())},\\n    click: () => {\\n      console.log('clicked')\\n    },\\n}\\n<Polygon events={events}  />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u6CE8\\u610F\\u4E8B\\u9879"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u6CE8\\u610F\\u4E8B\\u9879",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u6CE8\\u610F\\u4E8B\\u9879"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u5BB9\\u5668"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5BB9\\u5668",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5BB9\\u5668"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "map"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#map",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Map"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u4F1A\u7ED9\u6BCF\u4E2A\u5B50\u7EC4\u4EF6\u6CE8\u5165 props.__ele__  props.__map__ \u5C5E\u6027\\n<Map\\n  mapStyle={ normal dark light fresh blue_night }\\n// \u5730\u56FE\u5143\u7D20 \u80CC\u666F \u70B9 \u9053\u8DEF \u5EFA\u7B51\u7269\\n  features={['bg','point','road','building']}\\n  loading={ReactNode}\\n// \u662F\u5426\u52A0\u8F7D AMapUI\u7EC4\u4EF6\u5E93\\n  useAMapUI={boolean}\\n// \u4E2D\u5FC3\u4F4D\u7F6E\\n  conter={\\n    longitude: 135,\\n    latitude: 30\\n  }\\n// \u7F29\u5C0F\u6BD4\u4F8B\\n  zoom={4}\\n// \u5F00\u542F3d \u6700\u597D\u914D\u5408 plugin \u7684 ControlBar \u63A7\u4EF6\\n  viewMode=\\"3D\\"\\n// \u53EF\u4EE5\u90FD\u653E\u5728status\u7BA1\u7406 \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5199\u5728 \u5916\u9762\u7B2C\u4E00\u5C42\\n  status={\\n    {\\n      zoomEnable:false, \u662F\u5426\u53EF\u4EE5\u7F29\u653E\\n      animateEnable:false,\\n      doubleClickZoom:false,\\n      dragEnable:false,\\n      isHotspot:false,\\n      jogEnable:false,\\n      keyboardEnable:false,\\n      resizeEnable:false,\\n      rotateEnable:false,\\n      scrollWheel:false,\\n      touchZoom:false,\\n    }\\n  }\\n/* \u5730\u56FE\u7A7A\u95F4 string[] | object[]\\nplugins={[\\n 'ToolBar',      \u653E\u5927\u7F29\u5C0F\\n 'MapType',      \u5207\u6362\u536B\u661F\u5730\u56FE\\n 'Scale',        \u5730\u56FE\u6BD4\u4F8B\u5C3A\\n 'OverView',     \u53F3\u4E0B\u89D2\u9E70\u773C\\n 'ControlBar'    3d\u6548\u679C \u64CD\u4F5C\u9762\u677F\\n]}\\n*/\\n  plugins={[\\n    {\\n       name:\\"ToolBar\\",\\n       options:{\\n         position:'LT RT LB RB',\\n         // \u7CBE\u7B80\u6A21\u5F0F\\n         liteStyle:Boolean,\\n         // \u6807\u5C3A \u5F53liteStyle=false \u65F6\u6709\u6548\\n         ruler:Boolean,\\n         visible:true,\\n         // \u81EA\u52A8\u5B9A\u4F4D\u5230\u7528\u6237\u7684\u4F4D\u7F6E\\n         autoPosition:Boolean,\\n         onCreated(ins){\\n           console.log(ins)\\n         }\\n\\n       }\\n    }\\n  ]}\\n  events={\\n    {\\n      created: (ins) => {console.log(ins)},\\n      click: () => {console.log('clicked')}\\n    }\\n  }\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    id: "dom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#dom",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "dom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "// \u9700\u8981 \u56FA\u5B9A\u5B9A\u4F4D\\n<Map>\u81EA\u5B9A\u4E49\u8282\u70B9</Map>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "mousetool"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#mousetool",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "MouseTool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "# \u7528\u6237\u7ED8\u5236\u56FE\u5F62\\nconst [ tool, setTool ] = useState({})\\n<Map>\\n   <MouseTool\\n     events={{\\n       created:(_tool)=>{\\n         setTool(_tool)\\n       },\\n// \u7ED8\u5236\u5B8C\u6BD5\u540E\u89E6\u53D1\\n        draw(){}\\n      }}\\n/>\\n</Map>\\n\\n<button\\n  onClick={\\n    ()=>{\\n       tool.circle()\\n       tool.rectangle()\\n       tool.marker()\\n       tool.polygon()\\n       tool.close()\\n    }\\n  }\\n>\\n  \u7ED8\u5236\u56FE\u5F62\\n</button>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u8986\\u76D6\\u7269"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u8986\\u76D6\\u7269",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u8986\\u76D6\\u7269"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "marker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#marker",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Marker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u5355\\u4E2A\\u5750\\u6807\\u70B9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Marker\\n  position={{longitude: 121, latitude: 36}}\\n  offset={[-10,-34]}\\n  visible={boolean}\\n// \u662F\u5426\u53EF\u70B9\u51FB\\n  clickable={boolean}\\n// \u53EF\u62D6\u52A8\\n  draggable={boolean}\\n  events={{\\n    created(instance){\\n      // instance \u662F\u9AD8\u5FB7\u5730\u56FE\u539F\u751F\u7684 Marker \u5B9E\u4F8B\\n    }\\n    click(){\\n    }\\n  }}\\n// \u81EA\u5B9A\u4E49\u5916\u89C2 \u914D\u5408extData \u6570\u636E\\n  render={(extData)=>{\\n    return <>{extData}<>\\n  }}\\n  extData={'lable'}\\n>\\n  <div>\\n    \u81EA\u5B9A\u4E49\u5916\u89C2\\n  </div>\\n</Marker>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "markers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#markers",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Markers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u591A\\u4E2A\\u5750\\u6807\\u70B9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Markers\\n   markers={[\\n    { position:{longitude: 121, latitude: 36} },\\n    ...\\n   ]}\\n   events={{\\n     created:(allMarkers)=>{}\\n     click:(MapOption,marker)=>{\\n        // \u4F7F\u7528\u539F\u751F\u65B9\u6CD5\u83B7\u53D6\u6240\u6709\u7684\u6570\u636E\\n        const extData = marker.getExtData();\\n     }\\n   }}\\n// \u5F00\u542F\u805A\u5408\\n   useCluster={boolean}\\n// \u503E\u659C\u89D2\u5EA6\\n   angle={(data,index)=>({...})}\\n// \u81EA\u5B9A\u4E49\u5916\u89C2\\n   render={()=>ReactNode}\\n/>\\n#\\n  \u83B7\u53D6\u70B9\u51FB\u4E8B\u4EF6\u7684\u7D22\u5F15\\n  \u5728markers\u521D\u59CB\u6570\u636E\u4E2D\u5B9A\u4E49\u7D22\u5F15",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "polygon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#polygon",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Polygon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u591A\\u8FB9\\u5F62")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Polygon\\n  path={[\\n    { longitude: 101, latitude: 36 },\\n    { longitude: 111, latitude: 36 },\\n    { longitude: 121, latitude: 36 },\\n  ]}\\n  draggable\\n  style={{\\n    strokeColor: 'red',\\n    fillColor: 'red',\\n  }}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "polyline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#polyline",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Polyline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7EBF")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Polyline\\n  path={[\\n    { longitude: 101, latitude: 36 },\\n    { longitude: 111, latitude: 36 },\\n    { longitude: 121, latitude: 36 },\\n  ]}\\n  style={{\\n    strokeColor: 'red',\\n    fillColor: 'red',\\n  }}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "polyeditor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#polyeditor",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "PolyEditor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u7F16\\u8F91\\u529F\\u80FD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Polygon path={...}>\\n     <PolyEditor\\n          active={Boolean}\\n          events={}\\n/>\\n</Polygon>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#circle",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Circle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Circle\\n  center={{ longitude: 120, latitude: 30 }}\\n  radius={Number}\\n  events={}\\n  visible={}\\n  style={}\\n  draggable={}\\n/>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "circleeditor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#circleeditor",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "CircleEditor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Circle>\\n  <CircleEditor active={true} />\\n</Circle>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "groundimage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#groundimage",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "GroundImage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<GroundImage\\n// \u6839\u636E\u897F\u5357\u65B9\u548C\u4E1C\u5317\u65B9\u7684\u5750\u6807\u786E\u5B9A\u7684\u8FB9\u754C\u8303\u56F4\\n            bounds={\\n                sw: {\\n                  longitude: 120,\\n                  latitude: 20,\\n                },\\n                ne: {\\n                  longitude: 130,\\n                  latitude: 30\\n                }\\n            }\\n            src={String}\\n            opacity={Number}\\n\\n            visible={}\\n            events={}\\n            clickable\\n   />",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "\\u4FE1\\u606F\\u7A97\\u4F53"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4FE1\\u606F\\u7A97\\u4F53",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4FE1\\u606F\\u7A97\\u4F53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    id: "infowindow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#infowindow",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "InfoWindow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<InfoWindow\\n  position={{ longitude: 120, latitude: 30 }}\\n  // \u662F\u5426\u81EA\u5B9A\u4E49\u5916\u89C2 \u914D\u548C content\\n  isCustom={false}\\n  // \u662F\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684 Html\\n  content={\`html\` | string}\\n  visible={true}\\n  size={{ width: 100, height: 100 }}\\n  offset={[-10, -34]}\\n  events={}\\n>\\n  \u8FD9\u8FD9\u91CCjsx\u81EA\u5B9A\u4E49\u6837\u5F0F\\n</InfoWindow>",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_es_builtins_SourceCode_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    code: "<Map amapkey={'788e08def03f95c670944fe2c78fa76f'}>\\n        <MyMapComponent />\\n  </Map>\\nconst MyMapComponent = ({__ele__:ele,__map__:map})=>{\\n  const zoomIn = () => map.zoomIn()\\n  const zoomOut = () => map.zoomOut()\\n   return (\\n    <div>\\n        <span onClick={zoomIn}>+</span>\\n        <span onClick={zoomOut}>-</span>\\n    </div>);\\n)}",
    lang: "js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u4F7F\\u7528\\u9AD8\\u5FB7\\u5730\\u56FE-api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u4F7F\\u7528\\u9AD8\\u5FB7\\u5730\\u56FE-api",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u4F7F\\u7528\\u9AD8\\u5FB7\\u5730\\u56FE API")));
});
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),
        demos = _React$useContext.demos; // scroll to anchor after page component loaded


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    demos: demos
  });
});

//# sourceURL=webpack:///./src/Article/9.react/react-map/index.md?`)}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{R63D:function(m,s,n){"use strict";n.r(s);var i=n("cDcd"),e=n.n(i),t=n("dEAq"),u=n.n(t),o=n("6T1g");const c=e.a.memo(({demos:a})=>e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"persistence"},e.a.createElement(t.AnchorLink,{to:"#persistence","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Persistence"),e.a.createElement("h3",{id:"react-umi"},e.a.createElement(t.AnchorLink,{to:"#react-umi","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"react-umi"),e.a.createElement(o.a,{code:`// app.tsx
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'loading',
    'login',
    'routing',
    'router',
    '@@dva',
    '_persist',
    'app.collapsed',
  ],
};

/**
 * \u5F15\u5165redux-persist\u6301\u4E45\u5316
 */
const persistEnhancer = () => createStore => (
  reducer,
  initialState,
  enhancer,
) => {
  const store = createStore(
    persistReducer(persistConfig, reducer),
    initialState,
    enhancer,
  );
  const persist = persistStore(store, null);
  return {
    ...store,
    persist,
  };
};
export const dva = {
  config: {
    extraEnhancers: [persistEnhancer()],
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};`,lang:"tsx"}),e.a.createElement("h3",{id:"vue2-vuex"},e.a.createElement(t.AnchorLink,{to:"#vue2-vuex","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"vue2-vuex"),e.a.createElement("ul",null,e.a.createElement("li",null,"npm install --save vuex-persistedstate")),e.a.createElement(o.a,{code:`import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const dataState = createPersistedState({
  paths: ['app', 'user'],
});

const store = createStore({
  // ...
  plugins: [dataState],
});`,lang:"tsx"}))));s.default=a=>{const l=e.a.useContext(t.context),d=l.demos;return e.a.useEffect(()=>{var r;a!=null&&(r=a.location)!==null&&r!==void 0&&r.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.a.createElement(c,{demos:d})}}}]);

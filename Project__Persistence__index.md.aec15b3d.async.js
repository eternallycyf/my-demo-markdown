(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[3602],{24793:function(m,a,n){"use strict";n.r(a);var c=n(12924),e=n.n(c),t=n(16924),o=n(53401);const i=e().memo(({demos:r})=>e().createElement(e().Fragment,null,e().createElement("div",{className:"markdown"},e().createElement("h2",{id:"persistence"},e().createElement(t.AnchorLink,{to:"#persistence","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"Persistence"),e().createElement("h3",{id:"react-umi"},e().createElement(t.AnchorLink,{to:"#react-umi","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"react-umi"),e().createElement(o.Z,{code:`// app.tsx
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
};`,lang:"tsx"}),e().createElement("h3",{id:"vue2-vuex"},e().createElement(t.AnchorLink,{to:"#vue2-vuex","aria-hidden":"true",tabIndex:-1},e().createElement("span",{className:"icon icon-link"})),"vue2-vuex"),e().createElement("ul",null,e().createElement("li",null,"npm install --save vuex-persistedstate")),e().createElement(o.Z,{code:`import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const dataState = createPersistedState({
  paths: ['app', 'user'],
});

const store = createStore({
  // ...
  plugins: [dataState],
});`,lang:"tsx"}))));a.default=r=>{const l=e().useContext(t.context),d=l.demos;return e().useEffect(()=>{var s;r!=null&&(s=r.location)!==null&&s!==void 0&&s.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(r.location.hash.slice(1)))},[]),e().createElement(i,{demos:d})}}}]);

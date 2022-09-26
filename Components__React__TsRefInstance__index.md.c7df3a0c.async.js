(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{xiwk:function(i,c,t){"use strict";t.r(c);var d=t("cDcd"),n=t.n(d),e=t("dEAq"),m=t.n(e),a=t("H1Ra");const u=n.a.memo(({demos:o})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"tsrefinstance"},n.a.createElement(e.AnchorLink,{to:"#tsrefinstance","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"TsRefInstance"),n.a.createElement("h3",{id:"class-\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B"},n.a.createElement(e.AnchorLink,{to:"#class-\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"class \u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B"),n.a.createElement(a.a,{code:`import React from 'react';
export default class Child extends React.Component {
  b = () => {};
  render() {
    return <>Child</>;
  }
}
class AAA extends React.Component {
  myRef = React.createRef<InstanceType<typeof Child>>(null!);
  state = {};

  backgroundOrigin = () => {
    this.myRef.current?.b();
  };

  render() {
    return (
      <>
        <Child ref={this.myRef} />
      </>
    );
  }
}`,lang:"tsx"}),n.a.createElement("h3",{id:"hook-\u83B7\u53D6-ref---1"},n.a.createElement(e.AnchorLink,{to:"#hook-\u83B7\u53D6-ref---1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"hook \u83B7\u53D6 ref - 1"),n.a.createElement(a.a,{code:`import React from 'react';
import Countdown, { CountdownHandle } from './Countdown';

function App() {
  const countdownEl = React.useRef<CountdownHandle>(null!);

  React.useEffect(() => {
    if (countdownEl.current) {
      countdownEl.current.a = 10;
    }
  }, []);

  return <Countdown ref={countdownEl} />;
}`,lang:"tsx"}),n.a.createElement(a.a,{code:`import React from 'react';
export type CountdownHandle = {
  start: () => void;
  a: number;
};

type Props = {};

const Countdown = React.forwardRef<CountdownHandle, Props>((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    // start() has type inferrence here
    start() {
      alert('Start');
    },
    a: 1,
  }));

  return <div>Countdown</div>;
});

export default Countdown;`,lang:"tsx"}),n.a.createElement("h3",{id:"hook-\u83B7\u53D6-ref---2"},n.a.createElement(e.AnchorLink,{to:"#hook-\u83B7\u53D6-ref---2","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"hook \u83B7\u53D6 ref - 2"),n.a.createElement(a.a,{code:`import React from 'react';
type CountdownHandle = {
  start: () => void;
};
type CountdownProps = {};
const Countdown: React.ForwardRefRenderFunction<
  CountdownHandle,
  CountdownProps
> = (props, forwardedRef) => {
  React.useImperativeHandle(forwardedRef, () => ({
    start() {
      alert('Start');
    },
  }));
  return <div>Countdown</div>;
};

export default React.forwardRef(Countdown);`,lang:"tsx"}),n.a.createElement(a.a,{code:`import React from 'react';
import Countdown from './Countdown';

const App: React.FC = () => {
  const ref = React.useRef<React.ElementRef<typeof Countdown>>(null!); // assign null makes it compatible with elements.
  ref.current?.start();
  return <Countdown ref={ref} />;
};`,lang:"tsx"}),n.a.createElement("h3",{id:"vue3"},n.a.createElement(e.AnchorLink,{to:"#vue3","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"vue3"),n.a.createElement(a.a,{code:`<script setup lang="ts">
import xxx from './xxx'
const Child = ref<InstanceType<typeof xxx>>(null!)
</script>`,lang:"js"}))));c.default=o=>{const l=n.a.useContext(e.context),s=l.demos;return n.a.useEffect(()=>{var r;o!=null&&(r=o.location)!==null&&r!==void 0&&r.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),n.a.createElement(u,{demos:s})}}}]);

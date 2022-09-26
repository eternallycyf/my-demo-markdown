(self.webpackChunkmy_demo_markdown=self.webpackChunkmy_demo_markdown||[]).push([[7670],{56828:function(i,c,o){"use strict";o.r(c);var u=o(12924),n=o.n(u),e=o(16924),t=o(53401);const d=n().memo(({demos:a})=>n().createElement(n().Fragment,null,n().createElement("div",{className:"markdown"},n().createElement("h2",{id:"tsrefinstance"},n().createElement(e.AnchorLink,{to:"#tsrefinstance","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"TsRefInstance"),n().createElement("h3",{id:"class-\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B"},n().createElement(e.AnchorLink,{to:"#class-\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"class \u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B"),n().createElement(t.Z,{code:`import React from 'react';
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
}`,lang:"tsx"}),n().createElement("h3",{id:"hook-\u83B7\u53D6-ref---1"},n().createElement(e.AnchorLink,{to:"#hook-\u83B7\u53D6-ref---1","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"hook \u83B7\u53D6 ref - 1"),n().createElement(t.Z,{code:`import React from 'react';
import Countdown, { CountdownHandle } from './Countdown';

function App() {
  const countdownEl = React.useRef<CountdownHandle>(null!);

  React.useEffect(() => {
    if (countdownEl.current) {
      countdownEl.current.a = 10;
    }
  }, []);

  return <Countdown ref={countdownEl} />;
}`,lang:"tsx"}),n().createElement(t.Z,{code:`import React from 'react';
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

export default Countdown;`,lang:"tsx"}),n().createElement("h3",{id:"hook-\u83B7\u53D6-ref---2"},n().createElement(e.AnchorLink,{to:"#hook-\u83B7\u53D6-ref---2","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"hook \u83B7\u53D6 ref - 2"),n().createElement(t.Z,{code:`import React from 'react';
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

export default React.forwardRef(Countdown);`,lang:"tsx"}),n().createElement(t.Z,{code:`import React from 'react';
import Countdown from './Countdown';

const App: React.FC = () => {
  const ref = React.useRef<React.ElementRef<typeof Countdown>>(null!); // assign null makes it compatible with elements.
  ref.current?.start();
  return <Countdown ref={ref} />;
};`,lang:"tsx"}),n().createElement("h3",{id:"vue3"},n().createElement(e.AnchorLink,{to:"#vue3","aria-hidden":"true",tabIndex:-1},n().createElement("span",{className:"icon icon-link"})),"vue3"),n().createElement(t.Z,{code:`<script setup lang="ts">
import xxx from './xxx'
const Child = ref<InstanceType<typeof xxx>>(null!)
</script>`,lang:"js"}))));c.default=a=>{const l=n().useContext(e.context),s=l.demos;return n().useEffect(()=>{var r;a!=null&&(r=a.location)!==null&&r!==void 0&&r.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),n().createElement(d,{demos:s})}}}]);

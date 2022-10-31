---
order: 1
group:
  path: /react
  title: react技巧
  order: 1
---

## TsRefInstance ref 的 ts 全部注解

### class 获取组件实例

```tsx | pure
import React from 'react';
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
}
```

### hook 获取 ref - 1

```tsx | pure
import React from 'react';
import Countdown, { CountdownHandle } from './Countdown';

function App() {
  const countdownEl = React.useRef<CountdownHandle>(null!);

  React.useEffect(() => {
    if (countdownEl.current) {
      countdownEl.current.a = 10;
    }
  }, []);

  return <Countdown ref={countdownEl} />;
}
```

```tsx | pure
import React from 'react';
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

export default Countdown;
```

### hook 获取 ref - 2

```tsx | pure
import React from 'react';
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

export default React.forwardRef(Countdown);
```

```tsx | pure
import React from 'react';
import Countdown from './Countdown';

const App: React.FC = () => {
  const ref = React.useRef<React.ElementRef<typeof Countdown>>(null!); // assign null makes it compatible with elements.
  ref.current?.start();
  return <Countdown ref={ref} />;
};
```

### vue3

```js | pure
<script setup lang="ts">
import xxx from './xxx'
const Child = ref<InstanceType<typeof xxx>>(null!)
</script>
```

---
order: 2
nav:
  title: Article
  path: /article
---

# React 风格指南

此风格指南主要基于目前流行的 JavaScript 标准。对于项目中是否应允许使用一些惯例（如 async/await，静态 class 属性等）的问题，应视具体情况而定。目前，本指南不包含并且不推荐使用任何第三阶段\*前的功能。

> 译者注：第三阶段指 [TC39 流程](https://tc39.es/process-document/)中的 Stage 3 - Candidate。每个新的 ECMAScript 提案从起草到完成共分五个阶段。

## 内容目录

1. [基本规范](#basic-rules-基本规范)
1. [Class、React.createClass 与 stateless](#创建模块)
1. [Mixins（混入）](#mixins)
1. [命名](#naming-命名)
1. [声明模块](#declaration-声明模块)
1. [代码对齐](#alignment-代码对齐)
1. [单引号还是双引号](#quotes-单引号还是双引号)
1. [空格](#spacing-空格)
1. [属性](#props-属性)
1. [Refs 引用](#refs)
1. [括号](#parentheses-括号)
1. [标签](#tags-标签)
1. [函数/方法](#methods-函数)
1. [模块生命周期](#ordering-react-模块生命周期)
1. [isMounted](#ismounted)

## Basic Rules 基本规范

- 每个文件只写一个模块.
  - 但多个[无状态模块](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)可以放在单个文件中. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
- 推荐使用 JSX 语法.
- 不要使用 `React.createElement`，除非在从一个非 JSX 的文件中初始化 app.
- 只有在使用 `arrayOf`, `objectOf`, 或 `shape` 明确指出 `arrays` 和 `objects` 所包含的内容时，[`react/forbid-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md) 才会允许这个属性 (props).

## 创建模块

Class vs React.createClass vs stateless

- 如果你的模块有内部状态或者是`refs`, 推荐使用 `class extends React.Component` 而不是 `React.createClass`.
  eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

  ```jsx | pure
  // bad
  const Listing = React.createClass({
    // ...
    render() {
      return <div>{this.state.hello}</div>;
    },
  });

  // good
  class Listing extends React.Component {
    // ...
    render() {
      return <div>{this.state.hello}</div>;
    }
  }
  ```

  如果你的模块没有状态或是没有引用`refs`， 推荐使用普通函数（非箭头函数）而不是类:

  ```jsx | pure
  // bad
  class Listing extends React.Component {
    render() {
      return <div>{this.props.hello}</div>;
    }
  }

  // bad (relying on function name inference is discouraged)
  const Listing = ({ hello }) => <div>{hello}</div>;

  // good
  function Listing({ hello }) {
    return <div>{hello}</div>;
  }
  ```

## Mixins

- [不要使用 mixins](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html).

> 为什么? Mixins 会增加隐式的依赖，导致命名冲突，并且会以雪球式增加复杂度。在大多数情况下 Mixins 可以被更好的方法替代，如：组件化，高阶组件，工具模块等。

## Naming 命名

- **扩展名**: React 模块使用 `.jsx` 扩展名.

  > eslint: [`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

- **文件名**: 文件名使用帕斯卡命名. 如, `ReservationCard.jsx`.

- **引用命名**: React 模块名使用帕斯卡命名，实例使用骆驼式命名. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

  ```jsx | pure
  // bad
  import reservationCard from './ReservationCard';

  // good
  import ReservationCard from './ReservationCard';

  // bad
  const ReservationItem = <ReservationCard />;

  // good
  const reservationItem = <ReservationCard />;
  ```

- **模块命名**: 模块使用当前文件名一样的名称. 比如 `ReservationCard.jsx` 应该包含名为 `ReservationCard`的模块. 但是，如果整个文件夹是一个模块，使用 `index.js`作为入口文件，然后直接使用 `index.js` 或者文件夹名作为模块的名称:

  ```jsx | pure
  // bad
  import Footer from './Footer/Footer';

  // bad
  import Footer from './Footer/index';

  // good
  import Footer from './Footer';
  ```

- **高阶模块命名**: 对于生成一个新的模块，其中的模块名 `displayName` 应该为高阶模块名和传入模块名的组合. 例如, 高阶模块 `withFoo()`, 当传入一个 `Bar` 模块的时候， 生成的模块名 `displayName` 应为 `withFoo(Bar)`.

  > 为什么？一个模块的 `displayName` 可能会在开发者工具或者错误信息中使用到，因此有一个能清楚的表达这层关系的值能帮助我们更好地理解模块发生了什么，更好地进行 Debug。

  ```jsx | pure
  // bad
  export default function withFoo(WrappedComponent) {
    return function WithFoo(props) {
      return <WrappedComponent {...props} foo />;
    };
  }

  // good
  export default function withFoo(WrappedComponent) {
    function WithFoo(props) {
      return <WrappedComponent {...props} foo />;
    }

    const wrappedComponentName =
      WrappedComponent.displayName || WrappedComponent.name || 'Component';

    WithFoo.displayName = `withFoo(${wrappedComponentName})`;
    return WithFoo;
  }
  ```

- **属性命名**: 避免使用 DOM 相关的属性来用作其他的用途。

  > 为什么？对于`style` 和 `className`这样的属性名，我们都会默认它们代表一些特殊的含义，如元素的样式，CSS class 的名称。在你的应用中使用这些属性来表示其他的含义会使你的代码更难阅读，更难维护，并且可能会引起 bug。

  ```jsx | pure
  // bad
  <MyComponent style="fancy" />

  // good
  <MyComponent variant="fancy" />
  ```

## Declaration 声明模块

- 不要使用 `displayName` 来命名 React 模块，而是使用引用来命名模块， 如 class 名称.

  ```jsx | pure
  // bad
  export default React.createClass({
    displayName: 'ReservationCard',
    // stuff goes here
  });

  // good
  export default class ReservationCard extends React.Component {}
  ```

## Alignment 代码对齐

- 遵循以下的 JSX 语法缩进/格式. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) [`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)


    ```jsx | pure
    // bad
    <Foo superLongParam="bar"
         anotherSuperLongParam="baz" />

    // good
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />

    // if props fit in one line then keep it on the same line
    <Foo bar="bar" />

    // children get indented normally
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    >
      <Quux />
    </Foo>

    // bad
    {showButton &&
      <Button />
    }

    // bad
    {
      showButton &&
        <Button />
    }

    // good
    {showButton && (
      <Button />
    )}

    // good
    {showButton && <Button />}

    // good
    {someReallyLongConditional
      && anotherLongConditional
      && (
        <Foo
          superLongParam="bar"
          anotherSuperLongParam="baz"
        />
      )
    }

    // good
    {someConditional ? (
      <Foo />
    ) : (
      <Foo
        superLongParam="bar"
        anotherSuperLongParam="baz"
      />
    )}
    ```

## Quotes 单引号还是双引号

- 对于 JSX 属性值总是使用双引号(`"`), 其他均使用单引号(`'`). eslint: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes)

  > 为什么? HTML 属性也是用双引号, 因此 JSX 的属性也遵循此约定.

  ```jsx | pure
  // bad
  <Foo bar='bar' />

  // good
  <Foo bar="bar" />

  // bad
  <Foo style={{ left: "20px" }} />

  // good
  <Foo style={{ left: '20px' }} />
  ```

## Spacing 空格

- 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行. eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

  ```jsx | pure
  // bad
  <Foo/>

  // very bad
  <Foo                 />

  // bad
  <Foo
   />

  // good
  <Foo />
  ```

- 不要在 JSX `{}` 引用括号里两边加空格. eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

  ```jsx | pure
  // bad
  <Foo bar={ baz } />

  // good
  <Foo bar={baz} />
  ```

## Props 属性

- JSX 属性名使用小骆驼拼写法`camelCase`，如果属性名是一个 React 组件名，则使用大骆驼拼写法 `PascalCase`

  ```jsx | pure
  // bad
  <Foo
    UserName="hello"
    phone_number={12345678}
  />

  // good
  <Foo
    userName="hello"
    phoneNumber={12345678}
    Component={SomeComponent}
  />
  ```

- 如果属性值为 `true`, 可以直接省略. eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

  ```jsx | pure
  // bad
  <Foo
    hidden={true}
  />

  // good
  <Foo
    hidden
  />

  // good
  <Foo hidden />
  ```

- `<img>` 标签总是添加 `alt` 属性. 如果图片以 presentation(感觉是以类似 PPT 方式显示?)方式显示，`alt` 可为空, 或者`<img>` 要包含`role="presentation"`. eslint: [`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

  ```jsx | pure
  // bad
  <img src="hello.jpg" />

  // good
  <img src="hello.jpg" alt="Me waving hello" />

  // good
  <img src="hello.jpg" alt="" />

  // good
  <img src="hello.jpg" role="presentation" />
  ```

- 不要在 `alt` 值里使用如 "image", "photo", or "picture"包括图片含义这样的词， 中文也一样. eslint: [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

  > 为什么? 屏幕助读器已经把 `img` 标签标注为图片了, 所以没有必要再在 `alt` 里说明了.

  ```jsx | pure
  // bad
  <img src="hello.jpg" alt="Picture of me waving hello" />

  // good
  <img src="hello.jpg" alt="Me waving hello" />
  ```

- 使用有效正确的 aria `role`属性值 [ARIA roles](https://www.w3.org/TR/wai-aria/roles#usage_intro). eslint: [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

  ```jsx | pure
  // bad - not an ARIA role
  <div role="datepicker" />

  // bad - abstract ARIA role
  <div role="range" />

  // good
  <div role="button" />
  ```

- 不要在标签上使用 `accessKey` 属性. eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

> 为什么? 屏幕助读器在键盘快捷键与键盘命令时造成的不统一性会导致阅读性更加复杂.

```jsx | pure
// bad
<div accessKey="h" />

// good
<div />
```

- 避免使用数组的 index 来作为 `key` 属性的值。

  > 译者注：key 属性指名称为 `key` 的属性，即 `props.key`

  应当使用稳定不变的 ID。(使用不稳定的 ID 是一个[反面模式](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)，会降低性能、造成组件状态出错) 。特别是当元素的顺序可能改变的情况下，不应使用数组的 index 作为 `key`.

  > 译者注：反面模式 (Anti-Pattern)，指低效或是有待优化的软件设计模式。

```jsx | pure
// bad
{
  todos.map((todo, index) => <Todo {...todo} key={index} />);
}

// good
{
  todos.map(todo => <Todo {...todo} key={todo.id} />);
}
```

- 对于所有非必须的属性，总是手动去定义`defaultProps`属性.

> 为什么? propTypes 可以作为模块的文档说明, 并且声明 defaultProps 的话意味着阅读代码的人不需要去假设一些默认值。更重要的是, 显示的声明默认属性可以让你的模块跳过属性类型的检查.

```jsx | pure
// bad
function SFC({ foo, bar, children }) {
  return (
    <div>
      {foo}
      {bar}
      {children}
    </div>
  );
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node,
};

// good
function SFC({ foo, bar, children }) {
  return (
    <div>
      {foo}
      {bar}
      {children}
    </div>
  );
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node,
};
SFC.defaultProps = {
  bar: '',
  children: null,
};
```

- 尽可能少地使用扩展运算符

> 为什么? 除非你很想传递一些不必要的属性。对于 React v15.6.1 和更早的版本，你可以[给 DOM 传递一些无效的 HTML 属性](https://doc.react-china.org/blog/2017/09/08/dom-attributes-in-react-16.html)

例外情况:

- 使用了变量提升的高阶组件

```jsx | pure
function HOC(WrappedComponent) {
  return class Proxy extends React.Component {
    Proxy.propTypes = {
      text: PropTypes.string,
      isLoading: PropTypes.bool
    };

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
```

- 只有在清楚明白扩展对象时才使用扩展运算符。这非常有用尤其是在使用 Mocha 测试组件的时候。

```jsx | pure
export default function Foo {
  const props = {
    text: '',
    isPublished: false
  }

  return (<div {...props} />);
}
```

特别提醒：尽可能地筛选出不必要的属性。同时，使用[prop-types-exact](https://www.npmjs.com/package/prop-types-exact)来预防问题出现。

```jsx | pure
// bad
render() {
  const { irrelevantProp, ...relevantProps  } = this.props;
  return <WrappedComponent {...this.props} />
}

// good
render() {
  const { irrelevantProp, ...relevantProps  } = this.props;
  return <WrappedComponent {...relevantProps} />
}
```

## Refs

- 总是在 Refs 里使用回调函数. eslint: [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

  ```jsx | pure
  // bad
  <Foo
    ref="myRef"
  />

  // good
  <Foo
    ref={(ref) => { this.myRef = ref; }}
  />
  ```

## Parentheses 括号

- 将多行的 JSX 标签写在 `()`里. eslint: [`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

  ```jsx | pure
  // bad
  render() {
    return <MyComponent className="long body" foo="bar">
             <MyChild />
           </MyComponent>;
  }

  // good
  render() {
    return (
      <MyComponent className="long body" foo="bar">
        <MyChild />
      </MyComponent>
    );
  }

  // good, 单行可以不需要
  render() {
    const body = <div>hello</div>;
    return <MyComponent>{body}</MyComponent>;
  }
  ```

## Tags 标签

- 对于没有子元素的标签来说总是自己关闭标签. eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

  ```jsx | pure
  // bad
  <Foo className="stuff"></Foo>

  // good
  <Foo className="stuff" />
  ```

- 如果模块有多行的属性， 关闭标签时新建一行. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

  ```jsx | pure
  // bad
  <Foo
    bar="bar"
    baz="baz" />

  // good
  <Foo
    bar="bar"
    baz="baz"
  />
  ```

## Methods 函数

- 使用箭头函数来获取本地变量。这使得传递数据给事件处理器 (event handler) 很方便。不过，尤其是当传递给自定义的纯组件 (PureComponent) 时，要确保这些箭头函数对性能影响不是太大，因为它们会每次都会触发可能无意义的重新渲染。

  ```jsx | pure
  function ItemList(props) {
    return (
      <ul>
        {props.items.map((item, index) => (
          <Item
            key={item.key}
            onClick={event => {
              doSomethingWith(event, item.name, index);
            }}
          />
        ))}
      </ul>
    );
  }
  ```

- 当在 `render()` 里使用事件处理方法时，提前在构造函数里把 `this` 绑定上去. eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

  > 为什么? 在每次 `render` 过程中， 再调用 `bind` 都会新建一个新的函数，浪费资源。在类成员变量 (class fields) 里不要使用箭头函数，因为箭头函数会造成它难以测试和调试，并会降低性能。从概念上讲，类成员变量存的应该是数据，而不是逻辑或方法。

  ```jsx | pure
  // bad
  class extends React.Component {
    onClickDiv() {
      // do stuff
    }

    render() {
      return <div onClick={this.onClickDiv.bind(this)} />;
    }
  }

  // very bad
  class extends React.Component {
    onClickDiv = () => {
      // do stuff
    }

    render() {
      return <div onClick={this.onClickDiv} />
    }
  }

  // good
  class extends React.Component {
    constructor(props) {
      super(props);

      this.onClickDiv = this.onClickDiv.bind(this);
    }

    onClickDiv() {
      // do stuff
    }

    render() {
      return <div onClick={this.onClickDiv} />;
    }
  }
  ```

- 在 React 模块中，不要给所谓的私有函数添加 `_` 前缀，本质上它并不是私有的.

  > 为什么？`_` 下划线前缀在某些语言中通常被用来表示私有变量或者函数。但是不像其他的一些语言，在 JS 中没有原生支持所谓的私有变量，所有的变量函数都是共有的。尽管你的意图是使它私有化，在之前加上下划线并不会使这些变量私有化，并且所有的属性（包括有下划线前缀及没有前缀的）都应该被视为是共有的。了解更多详情请查看 Issue [#1024](https://github.com/airbnb/javascript/issues/1024), 和 [#490](https://github.com/airbnb/javascript/issues/490) 。

  ```jsx | pure
  // bad
  React.createClass({
    _onClickSubmit() {
      // do stuff
    },

    // other stuff
  });

  // good
  class extends React.Component {
    onClickSubmit() {
      // do stuff
    }

    // other stuff
  }
  ```

- 在 `render` 方法中总是确保 `return` 返回值. eslint: [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

  ```jsx | pure
  // bad
  render() {
    (<div />);
  }

  // good
  render() {
    return (<div />);
  }
  ```

## Ordering React 模块生命周期

- `class extends React.Component` 的生命周期函数:

1. 可选的 `static` 方法
1. `constructor` 构造函数
1. `getChildContext` 获取子元素内容
1. `componentWillMount` 模块渲染前
1. `componentDidMount` 模块渲染后
1. `componentWillReceiveProps` 模块将接受新的数据
1. `shouldComponentUpdate` 判断模块需不需要重新渲染
1. `componentWillUpdate` 上面的方法返回 `true`， 模块将重新渲染
1. `componentDidUpdate` 模块渲染结束
1. `componentWillUnmount` 模块将从 DOM 中清除, 做一些清理任务
1. _点击回调或者事件处理器_ 如 `onClickSubmit()` 或 `onChangeDescription()`
1. _`render` 里的 getter 方法_ 如 `getSelectReason()` 或 `getFooterContent()`
1. _可选的 render 方法_ 如 `renderNavigation()` 或 `renderProfilePicture()`
1. `render` render() 方法

- 如何定义 `propTypes`, `defaultProps`, `contextTypes`, 等等其他属性...

  ```jsx | pure
  import React from 'react';
  import PropTypes from 'prop-types';

  const propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
  };

  const defaultProps = {
    text: 'Hello World',
  };

  class Link extends React.Component {
    static methodsAreOk() {
      return true;
    }

    render() {
      return (
        <a href={this.props.url} data-id={this.props.id}>
          {this.props.text}
        </a>
      );
    }
  }

  Link.propTypes = propTypes;
  Link.defaultProps = defaultProps;

  export default Link;
  ```

- `React.createClass` 的生命周期函数，与使用 class 稍有不同: eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

1. `displayName` 设定模块名称
1. `propTypes` 设置属性的类型
1. `contextTypes` 设置上下文类型
1. `childContextTypes` 设置子元素上下文类型
1. `mixins` 添加一些 mixins
1. `statics`
1. `defaultProps` 设置默认的属性值
1. `getDefaultProps` 获取默认属性值
1. `getInitialState` 或者初始状态
1. `getChildContext`
1. `componentWillMount`
1. `componentDidMount`
1. `componentWillReceiveProps`
1. `shouldComponentUpdate`
1. `componentWillUpdate`
1. `componentDidUpdate`
1. `componentWillUnmount`
1. _clickHandlers or eventHandlers_ like `onClickSubmit()` or `onChangeDescription()`
1. _getter methods for `render`_ like `getSelectReason()` or `getFooterContent()`
1. _Optional render methods_ like `renderNavigation()` or `renderProfilePicture()`
1. `render`

## isMounted

- 不要再使用 `isMounted`. eslint: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

> 为什么? [`isMounted` 反人类设计模式:()][anti-pattern], 在 ES6 classes 中无法使用， 官方将在未来的版本里删除此方法.

[anti-pattern]: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html

**[⬆ 回到顶部](#内容目录)**

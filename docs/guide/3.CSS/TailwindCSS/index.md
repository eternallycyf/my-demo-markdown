---
order: 3
nav:
  title: 前端之路
  path: /guide
---

# tailwindCSS

## 1.概念

### 断点

#### 断点

```js
# 先指定全局样式 再指定不同栅格的样式
# 如果只指定了某个栅格 比如 sm 就只在 sm 生效
bg-green-500 md:bg-red-500 lg:bg-green-500
```

#### 默认断点

```js
# 自定义断点
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}
```

#### 自定义断点

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
};
```

### apply

```js
<button class="btn btn-green">
  Button
</button>
#
.btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }
# 全局apply
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-blue {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```

### 字体图标

```js
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  @font-face {
    font-family: Proxima Nova;
    font-weight: 400;
    src: url(/fonts/proxima-nova/400-regular.woff) format("woff");
  }
  @font-face {
    font-family: Proxima Nova;
    font-weight: 500;
    src: url(/fonts/proxima-nova/500-medium.woff) format("woff");
  }
}
```

## 2.CSS

### base

#### 媒体查询

| sm  | 640px  | @media (min-width: 640px) { ... }  |
| --- | ------ | ---------------------------------- |
| md  | 768px  | @media (min-width: 768px) { ... }  |
| lg  | 1024px | @media (min-width: 1024px) { ... } |
| xl  | 1280px | @media (min-width: 1280px) { ... } |
| 2xl | 1536px | @media (min-width: 1536px) { ... } |

```js
#
  默认宽度为16，中等屏幕为32，大屏幕为48
<img class="w-16 md:w-32 lg:w-48" src="...">
# 栅格适配采用不同屏幕覆盖的方法 如果只写sm 就只对sm生效
<div class="text-center sm:text-left"></div>
```

#### flex

```js
flex
flex-shrink-0  防止大屏幕图像缩小
```

#### width

#### 100%

```js
# 高度自适应
md:h-full
```

#### min-width

#### 颜色

```js
#
bg-green-500 md:bg-red-500 lg:bg-green-500
```

#### 选择器

##### first-child

```js
first: rotate - 45;
```

##### last-child

```js
last: rotate - 45;
```

##### odd

```js
odd: rotate - 45;
```

##### even

```js
even: rotate - 45;
```

### 触发样式

#### disabled

```js
disabled: opacity - 50;
```

#### border

```js
border;
border - transparent;
```

#### border-radius

```js
rounded;
```

#### hover-focus-active-visited

```js
#
focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
#
hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
#
visited:text-purple-600



# hover 对子元素设置样式
父元素 group
子元素 group-hover:  group-focus:
# 和栅格组合使用
sm:hover:bg-blue-500

# focus-within 在该元素或后代有焦点的时候使用

```

#### checked

```js
checked: bg - blue - 600;
```

### 动画

```js
# transform
transform motion-safe:hover:scale-110
# motion-reduce:transform-none
```

### 布局

#### 容器

```js
container;
mx - auto;
```

### 其他功能

#### 深色模式

```js
dark;
dark: bg - gray - 800;
```

---
order: 3
nav:
  title: Article2
  path: /article2
---

## 装饰器模式

- 在现有类或对象的基础上，添加了一些功能，使类和对象具有新的表现

## 代码实现

```typescript
function Path(name: string) {
  console.log('需要通过柯里化形式拿到参数,默认传入的是target');
  return function(traget: any) {
    console.dir(name, traget.age);
  };
}

@Path('zhangsan')
class Hello {
  public static age: number = 12;
}
```

## 参考链接

- https://imweb.io/topic/5b1403bbd4c96b9b1b4c4e9e
- https://www.runoob.com/design-pattern/decorator-pattern.html
- https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/decorator.html

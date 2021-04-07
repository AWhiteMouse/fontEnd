---
title: 数据类型判断
---

<!-- [[toc]] -->

JS是一门弱类型语言，这允许我们使用 `var/let/const` 等关键字来声明变量，而这些变量本身是不具备具体类型的，它的类型取决于当时所被赋予的数据。

在某些情况下，我们需要获取数据的具体类型来做一些逻辑业务上的处理。所以对于数据类型的判断，也是前端开发人员的基本功之一。

## 常见的数据类型判断方法

常见的数据类型判断方法主要是以下三种：

+ typeof
+ instanceof
+ Object.prototype.toString

这三种方案在 ==用法== 和 ==原理== 上都有着比较大的不同，下面将分别阐述这三种方案。

### typeof

这里先列举一些示例，请仔细想一下，它们都会打印出什么结果呢？

```js
console.log(typeof 1);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof 'null');
console.log(typeof Symbol());
console.log(typeof BigInt(10));
console.log(typeof NaN);
console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date());
console.log(typeof null);
console.log(typeof Function);
console.log(typeof Date);
```

OK，相信你已经有了自己的答案，对比一下下方的标准答案，看看是否都正确呢？

::: details 点我查看标准答案
```js
console.log(typeof 1);             // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof 'null');        // "string"
console.log(typeof Symbol());      // "symbol"
console.log(typeof BigInt(10));    // "bigint"
console.log(typeof NaN);           // "number"
console.log(typeof {});            // "object"
console.log(typeof []);            // "object"
console.log(typeof new Date());    // "object"
console.log(typeof null);          // "object"
console.log(typeof Function);      // "function"
console.log(typeof Date);          // "function"
```
:::

你的答案是否完全正确呢？如果完全正确，那就说明你已经在数据类型方面有了良好的认知和基本功。

如果你不能完全答对，那么也不用担心，接下来将带你打开 `typeof` 的世界，一起探索关于它的秘密。

从标准打印结果中可以看到有几项结果


### instanceof





```js
function Driver() {

}

function Car() {

}

Car.prototype = Driver.prototype;

const driver = new Driver()

console.log(driver instanceof Car);
```


### Object.prototype.toString







## 总结

::: tip
综上所述，总结如下：

1. 如果判断基本类型，最好使用 `typeof` 判断。（`null`需要进行额外的判断）
2. 如果需要判断一个对象与一个构造函数之间的关系，则使用 `instanceof` 判断。
3. 如果需要 ==对象== 的具体类型，可以使用 `Object.prototype.toString`进行判断。

:::
## 参考

1. [JavaScript 的 typeof 原理小记](https://juejin.cn/post/6844904020318879757).

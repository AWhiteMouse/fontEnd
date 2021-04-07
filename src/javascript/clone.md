---
title: 深浅拷贝
---

在实际业务开发中经常需要用到拷贝，尤其需要注意的是对于数组和对象的拷贝。

我们常提到的两个概念：浅拷贝和深拷贝。两个的区别在于拷贝得到的数据与原数据是否存在共用某一个数据块的情况。

为了更直观的感受浅拷贝与深拷贝的区别，我从[这里](https://juejin.cn/post/6844904197595332622)借用了如下两张图：

+ 浅拷贝

![](https://user-gold-cdn.xitu.io/2020/3/1/170965259fb768fd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

+ 深拷贝

![](https://user-gold-cdn.xitu.io/2020/3/1/1709652a7948d1b8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

从这两张图中可以清晰地看到，浅拷贝只是复制了某个对象的指针，新旧数据共享了空间；而深拷贝则是开辟了新的空间用来存放复制得到的对象，新旧数据独立使用自己的空间。

## 浅拷贝

常见的浅拷贝有以下几种：

+ 直接赋值
+ Object.assign
+ 展开运算符
+ 数组内置方法：slice、concat
+ ……

这里使用选取`直接赋值`的方式看一看浅拷贝的实现效果：

::: demo [vue] 浅拷贝demo

```vue
<template>
    <div>{{origin}}</div>
</template>

<script>
export default {
    data() {
        return {
            origin: {
                x: 7
            },
        };
    },
    created() {
        // 浅拷贝
        this.cloneData = this.origin;
        // 修改了拷贝得到的对象的属性值
        this.cloneData.x = 12;
    }
}
</script>
```

:::

从demo中可以看到，我们只是修改cloneData的x属性值，但是origin的x属性值居然也发生了更改。

这就是浅拷贝，浅拷贝带来的隐患也是显而易见的：数据拷贝不彻底，同一个数据源可能被多处同时修改，造成数据污染。

为了解决这个问题，我们需要让拷贝得到的数据独立支配属于自己的空间，断绝与原数据的关系，这就是深拷贝啦。

## 深拷贝

在一般场景中，比较常用的深拷贝方式是`JSON.parse()` + `JSON.stringify()`, 即 `JSON.parse(JSON.stringify())`。

### JSON.parse(JSON.stringify())

这个方法应付一般的业务场景是足够的，但是当遇到一些特殊的数据的时候，会出现这样的或那样的问题：

1. 拷贝的对象的值中如果有函数、undefined、symbol 这几种类型，经过 JSON.stringify 序列化之后的字符串中这个键值对会消失；
2. 拷贝 Date 引用类型会变成字符串；
3. 无法拷贝不可枚举的属性；
4. 无法拷贝对象的原型链；
5. 拷贝 RegExp 引用类型会变成空对象；
6. 对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null；
7. 无法拷贝对象的循环应用，即对象成环 (obj[key] = obj)；
8. 直接拷贝 BigInt 会报错。

那么如何应付`JSON.parse(JSON.stringify())`处理不了的场景呢？

### 第三方库

其实很多第三方库已经帮我们做好了深拷贝的封装，我们直接调用即可：

1. lodash.cloneDeep
2. Jquery.extend
3. immutable.fromJS().toJS()
4. ……

有些时候，我们的项目里是没有引入这些第三方库，如果只是为了引入一个深拷贝方法而引入整个库就有些得不偿失了。此时手写拷贝就显得必要了。

## 手写一个深拷贝

想要手写一个完美无缺的深拷贝是非常困难的，但是也需要尽可能的将自己知道的所有可能影响拷贝的点罗列出来，并一一攻克它。

以下是手写深拷贝时需要注意的点：

+ 对象
+ 数组
+ null
+ 函数（函数可能附带属性）
+ RegExp
+ Date
+ Symbol
+ BigInt
+ 循环引用
+ key为Symbol
+ ……

### 完整版

代码来源： [https://juejin.cn/post/6844904197595332622#heading-13](https://juejin.cn/post/6844904197595332622#heading-13).

```js
function isType(type) {
    return (data) => {
        return Object.prototype.toString.call(data)
        .match(/^\[object (.*)\]$/)[1] === type;
    };
};

const isRegExp = isType('RegExp');
const isDate = isType('Date');

function deepClone(obj, hash = new WeakMap()) {
    // 如果是null或者undefined我就不进行拷贝操作
    if (obj === null) return obj;
    if (isDate(obj)) return new Date(obj);
    if (isRegExp(obj)) return new RegExp(obj);
    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (typeof obj !== "object") return obj;
    // 是对象的话就要进行深拷贝
    if (hash.get(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    hash.set(obj, cloneObj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}
```

以上深拷贝已几近完美，但仍有两点趋于完善：

1. 没有拷贝函数的属性；
2. 没有考虑 key 为 Symbol 的情况。

## 参考

1. [浅拷贝与深拷贝](https://juejin.cn/post/6844904197595332622).

## 附

1. 拷贝元数据示例.

```js
const origin = {
    a: 1,
    b: '2',
    c: {key: 4},
    d: [2, 3, 4],
    e: Infinity,
    f: new Date(),
    g: new RegExp('/*/'),
    h: Symbol('1'),
    // i: BigInt(12),
    j: function() {
        console.log('看我神通')
    },
    k: null,
    l: undefined,
    m: NaN,
    n: String('23'),
    [Symbol(1)]: '哈哈'
};

// 易爆栈
// origin.loop = origin;

Object.defineProperty(origin, 'z', {
    value: 20,
    enumerable: true,
})

const target = deepClone(origin);
```

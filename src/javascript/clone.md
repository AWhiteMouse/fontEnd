---
title: 深浅拷贝
---


## 深浅拷贝

### 浅拷贝



### 深拷贝

#### JSON.parse(JSON.stringify())



乞丐版

##### 缺陷




#### 第三方库


##### lodash

##### jquery

##### immutable





## 手写一个深拷贝

想要手写一个完美无缺的深拷贝是非常困难的，但是也需要尽可能的将自己知道的所有可能影响拷贝的点罗列出来，并一一攻克它。

需要注意的点：

> 对象
> 数组
>


### 基础版

```js
function deepClone(data) {
    if (typeof data === 'object') {
        const result = {};
        for (const i in data) {
            result[i] = deepClone(data[i]);
        }
        return result;
    }
    else {
        return data;
    }
}
```

### 兼容数组

```js
function deepClone(data) {
    if (typeof data === 'object') {
        const result = Array.isArray(data) ? [] : {};
        // const result = {};
        for (const i in data) {
            result[i] = deepClone(data[i]);
        }
        return result;
    }
    else {
        return data;
    }
}
```

### 兼容函数和null

```js
const isObject = isType('Object');
const isFunction = isType('Function');

function isType(type) {
    return (data) => {
        return Object.prototype.toString.call(data)
            .match(/^\[object (.*)\]$/)[1] === type;
    };
};

function deepClone(data) {
    // 修改object判断条件，排除null
    if (isObject(data)) {
        const result = Array.isArray(data) ? [] : {};
        for (const i in data) {
            result[i] = deepClone(data[i]);
        }
        return result;
    }
    else if (isFunction(data)) {
        // 克隆函数
        const result = function() {
            data.call(this, ...arguments);
        };
        // 函数可以带有属性，此处克隆函数的属性
        for (const i in data) {
            result[i] = deepClone(data[i]);
        }
        return result;
    }
    else {
        return data;
    }
}
```

### 兼容正则

```js
const isObject = isType('Object');
const isFunction = isType('Function');
const isRegExp = isType('RegExp');

function isType(type) {
    return (data) => {
        return Object.prototype.toString.call(data)
        .match(/^\[object (.*)\]$/)[1] === type;
    };
};

function deepClone(data) {
    // 修改object判断条件，排除null
    if (isObject(data)) {
        const result = Array.isArray(data) ? [] : {};
        for (const i in data) {
            result[i] = deepClone(data[i]);
        }
        return result;
    }
    else if (isFunction(data)) {
        // 克隆函数
        const result = function() {
            data.call(this, ...arguments);
        };
        // 函数可以带有属性，此处克隆函数的属性
        for (const i in data) {
            result[i] = deepClone(data[i]);
        }
        return result;
    }
    // 新增正则的判断
    else if (isRegExp(data)) {
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
        return new RegExp(data.source, data.flag);
    }
    else {
        return data;
    }
}
```


### 兼容Date

```js
const isObject = isType('Object');
const isFunction = isType('Function');
const isRegExp = isType('RegExp');
const isDate = isType('Date');

function isType(type) {
    return (data) => {
        return Object.prototype.toString.call(data)
        .match(/^\[object (.*)\]$/)[1] === type;
    };
};

function deepClone(data) {
    // 修改object判断条件，排除null
    if (isObject(data)) {
        const result = Array.isArray(data) ? [] : {};
        for (const i in data) {
            result[i] = deepClone(data[i]);
        }
        return result;
    }
    else if (isFunction(data)) {
        // 克隆函数
        const result = function() {
            data.call(this, ...arguments);
        };
        // 函数可以带有属性，此处克隆函数的属性
        for (const i in data) {
            result[i] = deepClone(data[i]);
        }
        return result;
    }
    else if (isRegExp(data)) {
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
        return new RegExp(data.source, data.flag);
    }
    // 新增日期校验
    else if (isDate(data)) {
        return new Date(data);
    }
    else {
        return data;
    }
}
```


### 兼容循环引用

参考： https://juejin.cn/post/6844904197595332622#heading-13

```js
const isRegExp = isType('RegExp');
const isDate = isType('Date');

function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
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

### 兼容key为Symbol

```js

```


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

---
title: 事件循环机制
---

:::: info
在异步模式下，创建异步任务主要分为宏任务与微任务两种。ES6 规范中，宏任务（Macrotask） 称为 Task， 微任务（Microtask） 称为 Jobs。**`宏任务是由宿主（浏览器、Node）发起的，而微任务由 JS 自身发起`**。

::: right
——摘自[掘金](https://juejin.cn/post/6945319439772434469)
:::
::::
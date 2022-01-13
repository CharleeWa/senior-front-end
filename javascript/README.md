# 《3.1-理解异步》

- 官方图解：Chrome 快是有原因的，现代浏览器的多进程架构，学习这篇文章可以了解浏览器的架构以及每个模块负责的工作，宏观上了解浏览器的工作原理。[链接](https://juejin.im/post/5bd7c761518825292d6b0217)

- 进程与线程的一个简单解释，文章生动形象的比喻了进程和线程，将抽象的概念形象化了。[链接](https://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html)

- 浏览器进程？线程？傻傻分不清楚，重点讲解线程、进程的区别，以及浏览器内核的多线程。[链接](https://imweb.io/topic/58e3bfa845e5c13468f567d5)

- 定时器标准，规范对定时器的说明，[链接](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers)

# 《3.2-Event Loop机制》

- Event Loops标准，标准对Event Loops的说明，[链接](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

- Node.js 事件循环，定时器和 process.nextTick()，介绍了nodejs的事件循环和定时器，[链接](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop)

- 介绍js运行调用栈， [链接](https://developer.mozilla.org/zh-CN/docs/Glossary/Call_stack)

- JS中的栈内存堆内存，[链接](https://juejin.im/post/5d116a9df265da1bb47d717b)


# 《3.3-异步编程方法-发布与订阅》

- EventEmitter实现源码 [链接](https://github.com/nodejs/node/blob/master/lib/events.js)

- FsWatch实现源码 [链接](https://github.com/nodejs/node/blob/master/lib/internal/fs/watchers.)js 
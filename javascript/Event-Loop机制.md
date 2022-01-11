
# Event Loop

> 浏览器的EventLoop

- 1、宏观：浏览器多线程
- 2、微观：Event Loop，事件循环
- 3、微任务全部执行完、再取任务队列中的一个宏任务执行。一个script被称为全局任务，也属于microtask。
- 4、堆内存，存放对象和数据
- 5、栈内存，主线程函数入栈

|  宏任务（task）   | 微任务（microtask）  |
|  ----  | ----  |
| script  | promises |
| setTimeout/setInterval  | Object.observe |
| setImmediate  | MutationObserver |
| I/O | postMessage |
| UI rendering |


> Node.js的event Loop ~  

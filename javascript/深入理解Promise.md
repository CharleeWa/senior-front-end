## 规范 - Promise/A+ 术语

- promise 一个有then方法的对象或函数，行为符合本规范
- thenable 一个定义了then方法的对象或函数
- 值，value 任何JavaScript的合法值
- 异常，exception throw 语句抛出的值
- 拒绝原因，reason一个标示promise被拒绝原因的值

#### promise的状态

- pending
- fulfilled
- rejected

**状态一旦被改变，就不会再变化。**

#### 注意点

- then、catch 返回的promise是新的promise，不是原来的promise;
- Promise 对象的错误会 “冒泡” ，直到被捕获为止，错误会被下一个catch语句捕获。

#### 最佳实践

- 不要忘记catch捕捉错误
- then方法中使用return
- 传递函数给then方法
- 不要把promise写成嵌套


#### 题目

> 三秒之后亮红灯一次，再过2秒亮绿灯一次，再过一秒亮黄灯一次，
> 用promise实现多次交替亮灯的效果（可以用console.log模拟亮灯）

```

// 拆解：

//（一）多少妙后亮某个颜色的灯
//（二）顺序亮一批灯
//（三）循环顺序亮一批灯

function light(color, second) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      console.log(color)
      resolve()
    }, second * 1000)
  })
}

function orderLights(list) {
  let promise = Promise.resolve()
  list.forEach(item => {
    promise = promise.then(function() {
      return light(item.color,item.second)
    })
  })

  promise.then(function() {
    return orderLights(list)
  })
}

orderLights([{
  color: 'red',
  second: 3
},{
  color: 'green',
  second: 2
},{
  color: 'yellow',
  second: 1
}])

```
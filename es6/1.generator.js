
// /*
//   generator 算是es6提出的一种异步编程的解决方案
// */

// //生成器函数
// function* foo() {
//   console.log(1);
//   yield 1;
//   console.log(2);
//   yield 2;
// }

// //foo()调用之后并不执行，只会返回一个iterator迭代器
// const it = foo();

// //使用迭代器，每使用一次next，就会消耗一次迭代器
// const res1 = it.next();
// console.log(res1);
// const res2 = it.next();
// console.log(res2);
// const res3 = it.next();
// console.log(res3);
// const res4 = it.next()
// console.log(res4);


//generator和promise一起使用来处理异步编程
//用generator+promise实现async，await的效果

function* bar() {
  const result = yield new Promise((resolve) => {
    setTimeout(() => {
      resolve('返回的数据')
    }, 3000)
  })
  //以同步的形式获取result
  console.log(result);
}

const it = bar();

//返回yield后面的结果，这里是一个promise对象，状态为pending
it.next().value.then((res)=>{
  //继续执行yield后面的代码,并且可以传入参数作为上一次yiled的结果
  it.next(res);
})

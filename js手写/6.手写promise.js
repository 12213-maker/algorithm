const pending = 'pending';
const rejected = 'rejected';
const resolved = 'resolved';

function MyPromise(fn) {
  var self = this;

  //初始化状态
  this.state = pending;
  //用于保存resolve它们保存的值
  this.value = undefined;

  //resolve的回调函数
  this.resolvedCallback = [];
  this.rejectedCallback = [];

  //状态转变为resolve的方法
  function resolve(value) {
    //判断传入的参数是否是Promise
    if (value instanceof MyPromise) {
      return value.then(resolve, rejecte);
    }

    setTimeout(() => {
      //只有状态为pending的时候才可以改变
      if (self.state === 'pending') {
        self.state = resolved;
        //传入resolve方法中的值
        self.value = value;
        //执行回调函数
        self.resolvedCallback.forEach((callback) => {
          callback(value)
        })
      }
    }, 0)

  }

  //状态转变为reject的方法
  function reject(value) {

  }


  //将两个方法传入函数执行
  try {
    fn(resolve, rejecte);
  } catch (e) {
    reject(e);
  }

}

//书写then方法
MyPromise.prototype.then = function (onResolve, onReject) {

  //如果当前状态还是pending,则将函数加入对应队列
  if (this.state === 'pending') {
    this.rejectedCallback.push(onReject);
    this.resolvedCallback.push(onResolve)
  }

  //如果状态已经凝固,则执行对应方法
  if (this.state == 'resolved') {
    onResolve(this.value)
  }
  if (this.state = 'rejected') {
    onReject(this.value)
  }
}


const promise = MyPromise(() => {
  console.log(1);
})
promise.then(() => {
  console.log(3);
})
console.log(2);


function MyApply(obj) {
  if(typeof this !=='function'){
    console.log('不是函数无法调用');
  }
  let args = [...arguments].slice(1);
  // obj = obj || window
  let NewObj = Object.assign({fn:this},obj)
  NewObj.fn(...args);
}

Function.prototype.MyApply = MyApply

function foo(arg) {
  console.log(this.name, arg);
}

var name = 'window'
foo.MyApply()
var obj = {
  name: 'lnl'
}
var args = [1, 2, 3, 4, 5]
foo.MyApply(obj, args)
function MyBind() {
  if (typeof this !== 'function') {
    console.log('非函数无法使用');
    return;
  }
  const args = [...arguments].slice(1)
  const newObj = Object.assign({ fn: this }, obj)
  //使用bind的时候要用函数封装起来，内部使用apply方法来改变this的指向
  return () => {
    this.apply(newObj, args);
  }
}
Function.prototype.MyBind = MyBind

function foo(arg) {
  console.log(this.name, arg);
}

var name = 'window'
foo.MyBind()()
var obj = {
  name: 'lnl'
}
var args = [1, 2, 3, 4, 5]
foo.MyBind(obj, args)()


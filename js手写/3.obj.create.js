//将传入object.create中的对象作为原型
function myCreate(obj) {
  if (!obj || typeof obj !== 'object') {
    console.log('传入参数错误');
    return;
  }
  function fun() { }
  fun.prototype = obj;
  obj.constructor = fun;
  return fun;
}

function foo() {}
var obj = {
  showName() {
    console.log('lnl');
  }
}
var foo = myCreate(obj);
const f = new foo();
f.showName()
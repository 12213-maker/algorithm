// //将传入object.create中的对象作为原型
// function myCreate(obj) {
//   if (!obj || typeof obj !== 'object') {
//     console.log('传入参数错误');
//     return;
//   }
//   function fun() { }
//   fun.prototype = obj;
//   obj.constructor = fun;
//   return fun;
// }

// function foo() {}
// var obj = {
//   showName() {
//     console.log('lnl');
//   }
// }
// var foo = myCreate(obj);
// const f = new foo();
// f.showName()




let a = {
  name:'lnl'
}
let b = {
  age:'一万岁'
}

let c = Object.create(b)
console.log(c.age);

//三行搞定create，原理就是返回对象的隐式原型指向传入的对象
function myCreate(proTo){
  let newobj = {}
  Object.setPrototypeOf(newobj,proTo)
  return newobj;
}

let d = myCreate(a)
console.log(d.name);
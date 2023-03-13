//创建一个对象,绑定原型链
//绑定this,arguments
//返回一个对象,如果构造函数有返回对象,就返回构造函数的对象

//备注:使用new Fun()的时候,如果Fun函数有返回,且返回是对象的时候,new Fun()就会返回这个对象

function Obj(){
  return{name:'showme'}
}
console.log(new Obj());

//最最简介版的new,不做参数判断
function myNew2(con, ...args) {
  let obj = Object.create(con.prototype);
  let result = con.apply(obj, args);
  //判断构造函数的返回值会不会返回对象,不是就返回我们创建的obj对象(原理见上面备注)
  return result instanceof Object ? result : obj;
}

function Test(name, age) {
  this.name = name
  this.age = age
}
Test.prototype.sayName = function () {
  console.log(this.name);
}
let foo = myNew2(Test, 'lnl', '21')
foo.sayName()



// //雨雀上面的
// function objectFactory() {
//   let newObject = null;
//   let constructor = Array.prototype.shift.call(arguments);
//   let result = null;
//   // 判断参数是否是一个函数
//   if (typeof constructor !== "function") {
//     console.error("type error");
//     return;
//   }
//   //新建一个空对象，对象的原型为构造函数的 prototype 对象
//   newObject = Object.create(constructor.prototype);
//   //将 this 指向新建对象，并执行函数
//   result = constructor.apply(newObject, arguments);
//   //判断返回对象
//   let flag = result && (typeof result === "object" || typeof result === "function");
//   //判断返回结果
//   return flag ? result : newObject;
// }

// // 使用方法
// const foo2 = objectFactory(Fun, '1123');
// console.log(foo2.name);

// const foo3 = objectFactory(Fun, '3333');
// console.log(foo3.name);

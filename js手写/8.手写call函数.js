//call函数：改变this指向 , 没有传参数的时候this指向window

// function myCall(obj) {
//   let args = [...arguments].slice(1)
//   if (typeof this !== 'function') {
//     console.log('调用参数错误');
//     return;
//   }
//   //用隐式绑定来转换fn的this指向
//   obj = obj || window;
//   let newObj = Object.assign({ fn: this }, obj)
//   if (!obj) {
//     this(...args)
//   }
//   else {
//     newObj.fn(...args);
//   }

// }

Function.prototype.myCall = myCall

function showname(name, ...arg) {
  console.log(this.name, ...arg, name);
}

let obj = { name: 'lnl' }
let value = [1, 2, 3, 4, 5]
showname.myCall(obj, 'person', ...value)
var name = 'mushroom'
showname.myCall()

function myCall(obj,...args) {
  let newobj = Object.assign({},obj)
  newobj.fn = this
  return newobj.fn(...args)
}






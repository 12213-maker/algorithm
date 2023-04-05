
// // //instanceof主要的原理就是判断是否在原型链上 , 既然是要判断是否在原型链上就不能只判断一次


// // //proto只能为引用类型的时候才有原型链
// // const myInstanceof = (target, origin) => {
// //     //如果是基本类型，直接返回false
// //     let result = ['number', 'string', 'undefined', 'boolean']
// //     if (result.indexOf(typeof (target)) !== -1 || !target) {
// //         console.log('showme');
// //         return false
// //     }
// //     //获取隐式原型
// //     let proto = Object.getPrototypeOf(target)
// //     //获取显示原型
// //     let Pro = origin.prototype
// //     while (proto) {
// //         if (proto == Pro) {
// //             return true
// //         }
// //         proto = Object.getPrototypeOf(proto)
// //     }
// //     return false
// // }

// // let a = { name: 1 }
// // //obj的隐式原型等于a 
// // let obj = Object.create(a)
// // let arr = []
// // let fun = function () { }
// // console.log(myInstanceof(fun, Object));



// //第二遍手写instanceof方法
// // instanceof 就是判断是否在同一个原型链上来判断数据类型的

// function myInstanceof(foo, Fun) {
//     //判断的时候直接放入数组
//     const typeNums = ['number','string','boolean','undefined'];
//     //首先基本类型是不可以来判断的
//     if (!foo || !Fun || typeNums.includes(typeof foo) ) {
//         console.log('输入错误,无法判断');
//         return;
//     }
//     //先得到隐式原型和显示原型
//     let pro = Object.getPrototypeOf(foo);
//     const Proto = Fun.prototype
//     while (pro) {
//         if (pro === Proto) {
//             return true;
//         }
//         pro = Object.getPrototypeOf(pro);
//     }
//     return false;
// }

// console.log(myInstanceof([], Array));














Object.prototype.Myinstanceof2 = function(origin){
    let pro = Object.getPrototypeOf(this)
    while(pro){
        if(pro === origin.prototype){
            return true
        }
        pro = Object.getPrototypeOf(pro)
    }
    return false
}

console.log([].Myinstanceof2(Function));
console.log([].Myinstanceof2(Array));
console.log({}.Myinstanceof2(Object));
console.log([] instanceof Function);
//创建一个函数实现multi(2)(3)(4) = 24

// function multi(value) {
//   return (value2) => {
//     return (value3) => {
//       return value * value2 * value3;
//     }
//   }
// }

// console.log(multi(2)(3)(4));


// compose(logger, visble, style)(input)

// function compose() {
//   return function (input) {
//     return [arguments].reduce((pre, cur) => {
//       cur.call(this, pre)
//     }, input)
//   }
// }

// function curry(fn, ...args) {
//     return fn.length <= args.length ?
//         fn(...args) :
//         curry.bind(null, fn, ...args)
// }


// let arr = []
// function addCurry() {
//     let arg = Array.prototype.slice.call(arguments); // 递归获取后续参数
//     arr = arr.concat(arg);
//     if (arg.length === 0) { // 如果参数为空，则判断递归结束
//         return arr.reduce((a, b) => { return a + b }) // 求和
//     } else {
//         return addCurry;
//     }
// }
// function addCurry() {
//     let arr = [...arguments]
//     // 利用闭包的特性收集所有参数值
//     var fn = function () {
//         arr.push(...arguments);
//         return fn;
//     };
//     // 利用 toString 隐式转换
//     fn.toString = function () {
//         return arr.reduce(function (a, b) {
//             return a + b;
//         });
//     }
//     return fn;
// }


// console.log(addCurry(1)(2)(3)());


// function curry(fn, args) {
//     let length = fn.length
//     args = args || []
//     return function () {
//         let subArgs = args.slice(0);
//         for (let i = 0; i < arguments.length; i++) {
//             subArgs.push(arguments[i])
//         }
//         if (subArgs.length >= length) {
//             return fn.apply(this, subArgs);
//         } else {
//             return curry.call(this, fn, subArgs);
//         }
//     }
// }
// console.log(curry(1)(2)(3));

// function curry(fn, ...args) {
//     return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
// }



// function add(a, b, c) {
//     return a + b + c;
// }

// function curry(fn) {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn.apply(this, args);
//         } else {
//             return function (...newArgs) {
//                 return curried.apply(this, args.concat(newArgs));
//             }
//         }
//     }
// }

// const curriedAdd = curry(add);

//原本add函数需要接收一串参数，函数柯里化之后，就可以传入任意的参数，并返回一个函数作为结果，直到参数使用完
// console.log(add(1,2,3));

// curriedAdd(1)(2)(3)// 6
// console.log(curriedAdd(1, 2)(3)); // 6
// console.log(curriedAdd(1)(2, 3)); // 6
// console.log(curriedAdd(1, 2, 3)); // 6


// function sum(a, b, c) {
//     return a + b + c
// }


// //把一个函数转换成柯里化
// function toCurry(fn) {
//     //通过tostring获取原函数的参数个数
//     let argsLen = fn.length
//     return function curried(...args) {
//         if (args.length >= argsLen) {
//             //参数已经凑齐了可以返回调用了,之所以return是为了返回函数执行的结果
//             return fn.apply(this, args)
//         } else {
//             return function (...newArgs) {
//                 //保证没执行完之前，每层返回的都是一个函数
//                 return curried.apply(this, args.concat(newArgs))
//             }
//         }
//     }

// }
// let curry = toCurry(sum)

// //sum只能这样调用
// sum(1, 2, 3)
// //柯里化之后的函数可以这样
// console.log(curry(1, 2, 3));
// console.log(curry(1)(2)(3));
// curry(1, 2)(3)
// curry(1)(2, 3)


function add(a, b, c) {
    return a + b + c
}
function changeToCurry(fn) {
    return function curried(...args){
        if(args.length===fn.length){
            return fn.apply(this, args);
        }else{
            return function(...newArg){
                return curried.apply(this,[...args,...newArg])
            }
        }
    }

}

let curryFn = changeToCurry(add)

console.log(curryFn(1,2,3));
console.log(curryFn(1)(2)(3));
console.log(curryFn(1,2)(3));
console.log(curryFn(1)(2,3));


// function sum(a, b, c) {
//     return a + b + c
//   }
  
//   console.log(sum(1, 2, 3))
//   function curry(fn) {
  
  
//     return function changeTocurry(...arg) {
//       if (fn.length === arg.length) {
//         return fn.apply(this, [...arg])
//       } else {
//         return function newCurry(...newarg) {
//           return changeTocurry.apply(this, [...arg, ...newarg]);
//         }
//       }
//     }
  
  
  
//   }
//   let curried = curry(sum);
//   console.log(curried(1, 2, 3))
//   console.log(curried(1)(2, 3))
//   console.log(curried(1, 2)(3))
//   console.log(curried(1)(2)(3))
  
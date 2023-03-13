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

function curry(fn, ...args) {
    return fn.length <= args.length ?
        fn(...args) :
        curry.bind(null, fn, ...args)
}


let arr = []
function addCurry() {
    let arg = Array.prototype.slice.call(arguments); // 递归获取后续参数
    arr = arr.concat(arg);
    if (arg.length === 0) { // 如果参数为空，则判断递归结束
        return arr.reduce((a, b) => { return a + b }) // 求和
    } else {
        return addCurry;
    }
}
function addCurry() {
    let arr = [...arguments]
    // 利用闭包的特性收集所有参数值
    var fn = function () {
        arr.push(...arguments);
        return fn;
    };
    // 利用 toString 隐式转换
    fn.toString = function () {
        return arr.reduce(function (a, b) {
            return a + b;
        });
    }
    return fn;
}


console.log(addCurry(1)(2)(3)());

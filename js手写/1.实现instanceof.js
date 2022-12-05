
//instanceof主要的原理就是判断是否在原型链上 , 既然是要判断是否在原型链上就不能只判断一次


//proto只能为引用类型的时候才有原型链
const myInstanceof = (target, origin) => {
    //如果是基本类型，直接返回false
    let result = ['number', 'string', 'undefined', 'boolean']
    if (result.indexOf(typeof (target)) !== -1 || !target) {
        console.log('showme');
        return false
    }
    //获取隐式原型
    let proto = Object.getPrototypeOf(target)
    //获取显示原型
    let Pro = origin.prototype
    while (proto) {
        if (proto == Pro) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

let a = {name:1}
//obj的隐式原型等于a 
let obj = Object.create(a)
let arr = []
let fun = function(){}
console.log(myInstanceof(fun,Object));


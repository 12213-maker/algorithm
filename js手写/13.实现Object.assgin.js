var a = { name: 'lnl', age: 21 }
var b = { name: 'mushroom', sex: 'female', obj2: { phone: '111' } }
// var c = Object.assign({}, a, b)
var c = myAssgin({}, a, b)
c.name='c'
c.obj2.phone='c-phone'
console.log(c)

function myAssgin(obj, ...args) {
  if (typeof obj !== 'object') {
    throw new Error('非对象无法调用');
  }
  let newObj = {}
  args.forEach((item) => {
    //在这里实现第一层深拷贝，第一层以后浅拷贝
    for(let item2 in item){
      newObj[item2] = item[item2]
    }
  })
  return newObj
}
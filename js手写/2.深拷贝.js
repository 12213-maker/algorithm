
// 1. JSON.parse JSON.stringify  
// 2. Object.assgin(第一层深拷贝，一层以后的所有都是浅拷贝)
// 3. 递归拷贝
// 4. loadash 中的clone 和 cloneDeep


var obj = {
  obj2: {
    name: 'lnl',
    obj3: {
      age: 21
    }
  }
}

function cloneDeep(obj) {
  //做一下类型判断
  if (typeof obj !== 'object') {
    console.log('请使用对象类型');
    return;
  }
  let newObj = {}
  let arr = Object.keys(obj)
  if (arr.length == 0) {
    return {};
  }

  //这里因为对数组方法reduce的不熟悉导致卡壳
  //reduce中的回调函数中的参数：累加值，当前元素，当前元素index，数组

  arr.reduce((acc, cur) => {
    if (typeof obj[cur] !== 'object') {
      newObj[cur] = obj[cur]
    } else {
      newObj[cur] = cloneDeep(obj[cur])
    }
    return acc
  }, newObj)
  return newObj;
}

//1.递归拷贝
const newObj = cloneDeep(obj);
//2.JSON.parse JSON.stringify 拷贝
// const newObj = JSON.parse(JSON.stringify(obj))
newObj.obj2.name = 'mushroom'
newObj.obj2.obj3 = 10000
console.log(newObj, obj);
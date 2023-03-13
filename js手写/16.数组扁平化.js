//数组扁平化，其实跟对象深拷贝一样的原理
//递归扁平
//使用es6的flat


var arr = [1, [2, [3, 4], 5], 6]

function flaten(arr) {
  if (arr.length === 0) {
    return [];
  }
  var newarr = []
  arr.forEach((cur) => {
    if (typeof cur !== 'object') {
      newarr.push(cur)
    } else {
      newarr.push(...flaten(cur))
    }
  }, newarr)
  return newarr;
}
// console.log(flaten(arr));


//还可以使用flat来扁平化
// console.log(arr.flat(Infinity));

function flatMyarr(arr){
    return arr.reduce((acc,cur)=>{
      if(Array.isArray(cur)){
        acc.push(...flatMyarr(cur));
      }else{
        acc.push(cur)
      }
      return acc
    },[])
}

console.log(flatMyarr(arr));
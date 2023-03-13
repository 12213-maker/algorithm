//1.new Set()
var arr = [1, 1, 1, 2, 2, 3, 5, 6, 2, 3, 2, 1, 4, 5, 2, 0]

function mySet(arr) {
  return [...new Set(arr)].sort()
}
// console.log(mySet(arr));


//2.使用reduce+[]
function mySet2(arr) {
  return arr.reduce((acc, cur) => {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur)
    }
    return acc
  }, [])
}
// console.log(mySet2(arr));

//3.使用map
function mySet3(arr){
    let map = new Map();
    arr.forEach((item)=>{
      if(!map.has(item)){
        map.set(item)
      }
    })
    let newarr = []
    for(let item of map){
      newarr.push(item[0])
    }
    return newarr
}

// console.log(mySet3(arr));



function mySet4(arr){
  //方式一
  // return arr.reduce((acc,cur)=>{
  //   if(acc.indexOf(cur)===-1){
  //     acc.push(cur)
  //   }
  //   return acc
  // },[])

  //方式二
  // return [...new Set(arr)]

  //方式三
  let map = new Map()
  let newarr = []
  arr.forEach((item)=>{
    if(!map.has(item)){
      map.set(item,item)
      newarr.push(item)
    }
  })
  return newarr
}
console.log(mySet4(arr));
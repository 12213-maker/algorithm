// var value = [1, 2, 3]
// value.reduce((pre, next) => {
//   return pre.then(() => {
//     return new Promise((resolve)=>{
//       setTimeout(() => {
//       console.log(next)
//         //要在定时器里面修改promise的状态
//         resolve()
//     }, 1000)
//     })
//   })

// }, new Promise(resolve => resolve()))


function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
const light = function (timer, cb) {
  return new Promise(resolve => {
    setTimeout(() => {
      cb()
      resolve()
    }, timer)
  })
}
const step = function () {
  Promise.resolve().then(() => {
    return light(3000, red)
  }).then(() => {
    return light(2000, green)
  }).then(() => {
    return light(1000, yellow)
  }).then(() => {
    return step()
  })
}

step();
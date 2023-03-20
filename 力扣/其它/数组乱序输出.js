// function fn(arr) {
//   let rand
//   for (let i = arr.length - 1; i > 0; i--) {
//     rand = Math.floor(Math.random() * (i + 1))
//     console.log(i,rand);
//     [arr[i], arr[rand]] = [arr[rand], arr[i]]
//   }
//   return arr
// }

// var arr = [1, 2, 3, 4, 5, 6]
// console.log(fn(arr));

function fn(arr) {
  let rand
  for (let i = 0; i < arr.length; i++) {
    rand = Math.round(Math.random() * (arr.length - 1))
    console.log(arr[i], arr[rand]);
    [arr[i], arr[rand]] = [arr[rand], arr[i]]
  }
  return arr
}

var arr = [1, 2, 3, 4, 5, 6]
console.log(fn(arr));

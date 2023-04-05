let arr = [1, 2, 3, 4, 5, 6];
let obj = { a: 1, b: 2, c: 3 };


//for of 遍历得到value
for (let i of arr) {
  console.log(i);
}

//for in 遍历得到key
for (let i in obj) {
  console.log(i, obj[i]);
}
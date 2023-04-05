//乱序输出数组
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.forEach((item, index) => {
  let idy = Math.round(Math.random() * (arr.length - 1));
  [arr[index], arr[idy]] = [arr[idy], arr[index]];
})
// console.log(arr);


//交换a,b值，不开辟新空间
function change(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log(a,b)
}
var a = 1
var b = 2
// change(a, b)
// console.log(a, b);

//数组之和
function sum(arr){
  return arr.reduce((sum,cur)=>{
    return sum+cur
  })
}
// console.log(sum(arr));



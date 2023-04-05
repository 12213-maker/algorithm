function fn(n, ...arr) {
  let str = arr.splice(arr.length - 1).join('');
  let sum = 0;
  let blueArr = [];
  let redArr = [];
  arr.forEach((item, index) => {
    if (str[index] === 'B') {
      blueArr.push(item);
    } else {
      redArr.push(item);
    }
  })
  for (let i = 0; i < blueArr.length; i++) {
    let blueValue = blueArr[i];
    for (let j = 0; j < redArr.length; j++) {
      let redValue = redArr[j];
      sum += blueValue * redValue;
    }
  }
  return sum
}

let arr = [1, 2, 3];
let str = 'RBR';
console.log(fn(3, ...arr, str))


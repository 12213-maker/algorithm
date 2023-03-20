function fundPerson(N, A, B, ...arg) {
  let ans = 0
  let arr = []
  arg.forEach((item, index) => {
    if (index % 2 == 0) {
      arr.push([item, arg[index + 1]])
    }
  })
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = i; j < arr.length; j++) {
      if (arr[j][0] - arr[i][0] <= A && arr[j][1] - arr[i][1] <= B) {
        count++
      }
    }
    ans = ans > count ? ans : count;
  }
  return ans;
}
console.log(fundPerson(3, 1, 1,
  1, 1,
  1, 2,
  1, 3));
// console.log(fundPerson(5 ,1 ,2,

//   1 ,1,
  
//   2 ,2,
  
//   3, 3,
  
//   1, 3,
  
//   1 ,4));

//   5 1 2

// 1 1

// 2 2

// 3 3

// 1 3

// 1 4
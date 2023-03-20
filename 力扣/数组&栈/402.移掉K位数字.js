/**
 思路
从左至右扫描，当前扫描的数还不确定要不要删，入栈暂存。
123531这样「高位递增」的数，肯定不会想删高位，会尽量删低位。
432135这样「高位递减」的数，会想干掉高位，直接让高位变小，效果好。
所以，如果当前遍历的数比栈顶大，符合递增，是满意的，让它入栈。
如果当前遍历的数比栈顶小，栈顶立刻出栈，不管后面有没有更大的，为什么？
因为栈顶的数属于高位，删掉它，小的顶上，高位变小，效果好于低位变小。
**/

//用一个栈来储存，在当前位数上，尽量用地位的数代替高位的数
//这个方法没有全对35/42
// var removeKdigits = function (num, k) {
//   let ans = []
//   ans.push(num[0])
//   let i = 1
//   for (i = 1; i < num.length; i++) {
//     if (k <= 0) break
//     //当前的数比栈顶的数小
//     if (num[i] < ans[ans.length - 1]) {
//       ans.pop()
//       ans.push(num[i])
//       k--
//     } else {
//       ans.push(num[i])
//     }
//   }
//   if (k) {
//     while (k) {
//       let top = ans[ans.length - 1]
//       let secondTop = ans[ans.length - 2]
//       if (top >= secondTop) {
//         break
//       } else {
//         ans.splice(ans.length - 2, 1)
//         k--
//       }
//     }
//     ans.splice(ans.length - k)
//   }
//   ans.push(...num.split('').splice(i))
//   let flag = 0
//   for (let i = 0; i < ans.length; i++) {
//     if (ans[i] != 0) {
//       flag = i
//       break
//     }
//   }
//   ans.splice(0, flag)
//   const sum = ans.length && ans.reduce((acc, cur) => acc * 1 + cur * 1)
//   if (sum === 0) {
//     ans = [0]
//   }

//   return ans.join('')
// };
// console.log(removeKdigits(num, k));



// var removeKdigits2 = function (num, k) {
//   const stack = [];
//   for (let i = 0; i < num.length; i++) {
//     const c = num[i];
//     //遍历到0的时候，顶替了5和6
//     while (k > 0 && stack.length && stack[stack.length - 1] > c) {
//       stack.pop();
//       k--;
//     }
//     if (c != '0' || stack.length != 0) {
//       stack.push(c);
//     }
//   }
//   while (k > 0) {
//     stack.pop();
//     k--;
//   }
//   return stack.length == 0 ? "0" : stack.join('');
// };














let num = "100", k = 2
var removeKdigits2 = function (num, k) {
  let stack = []
  for (let i = 0; i < num.length; i++) {
    let cur = num[i]
    while (stack[stack.length - 1] > cur && k) {
      stack.pop()
      k--
    }
    stack.push(cur)
  }
  let flag = 0
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] != 0) {
      flag = i
      break
    }
  }
  stack.splice(0, flag)
  if (k) {
    while (k) {
      stack.pop()
      k--
    }
  }
  const sum = stack.length && stack.reduce((acc, cur) => acc * 1 + cur * 1)
  if (sum === 0) {
    stack = [0]
  }
  return stack.length == 0 ? "0" : stack.join('');
};

console.log(removeKdigits2(num, k));
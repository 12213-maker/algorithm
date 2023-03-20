/**
 * 力扣第224题
 * @param {string} 
 * @return {number}
 */
var calculate = function (s) {
  let ans = []
  let flag = true
  let stack = []
  var text1 = /\S/g
  let type = ['+', '-', '(', ')']
  let sArr = ('+' + s).match(text1)
  for (let i = 0; i < sArr.length; i++) {
    let index = i
    let item = sArr[i]
    if (item === '(' || item === ')') {
      //还要累加上一次flag的true or false
      if (!flag) {
        flag = sArr[index - 1] === '-' ? true : false
      }
      if (item === '(') {
        stack.push(item)
      } else {
        stack.pop()
        if (stack.length === 0) {
          flag = true
        }
      }
    } else {
      console.log(item,30);
      //遇到符号的时候直接作用到后面的元素上
      if (item === '+') {
        let idz = index
        if (sArr[idz + 1] === '(') {
          stack.push(sArr[idz + 1])
          i++
        } else {
          let count = []
          let finish = sArr[index]
          let idt = index
          while (type.indexOf(finish) === -1 && idt < sArr.length) {
            count.push(finish)
            finish = sArr[++idt]
          }
          i = count.length + i
          num = flag ? count.join('') : -count.join('')
          console.log(ans.push(num),46);
        }
      } else if (item === '-') {
        let idf = index
        if (sArr[idf + 1] === '(') {
          if (!flag) {
            flag = item === '-' ? true : false
          } else {
            flag = false
          }
          stack.push(sArr[idf + 1])
          i++
        } else {
          num = flag ? -sArr[idf + 1] : sArr[idf + 1]
          console.log(ans.push(num),60);
          i++
        }
        console.log(flag,63);
      } else {
        //遇到了本次的数字，要判断截至位置
        let count = []
        let finish = sArr[index]
        let idy = index
        while (type.indexOf(finish) === -1 && idy < sArr.length) {
          count.push(finish)
          finish = sArr[++idy]
        }
        i = count.length-1 + i
        if (flag) {
          console.log(ans.push(count.join('')),74);
          // ans.push(count.join(''))
        } else {
          console.log(ans.push(-count.join('')),78);
          // ans.push(-count.join(''))
        }
      }
    }
  }
  console.log(ans,'ans数组');
  return ans.reduce((acc, cur) => acc * 1 + cur * 1)
};
let s = "1 + 1";
let s2 = " 2-1 + 2 "
let s3 = "123123"
console.log(calculate(s2));
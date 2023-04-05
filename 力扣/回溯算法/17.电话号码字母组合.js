
var letterCombinations = function (digits) {
  if(!digits){
    return []
  }
  let map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
  ])
  let ans = []
  function dfs(str, index) {
    if (index > digits.length) return;
    if (str.length === digits.length) {
      ans.push(str);
      return;
    }
    //当前要拨打的号码
    let num = digits[index]
    let arr = map.get(num)
    for (let i = 0; i < arr.length; i++) {
      str = str + arr[i]
      dfs(str, index + 1)
      str = str.substring(0, str.length - 1)
    }
  }
  dfs('', 0)
  return ans
}

digits = ""
console.log(letterCombinations(digits));
var generateParenthesis = function (n) {
  let ans = []
  function getAllparenthesis(res, leftnum, rightnum) {

    if (leftnum > rightnum || (leftnum === 0 && rightnum === 0)) return;
    if (res.length === 2 * n) {
      ans.push(res.join(' '))
      return;
    }
    if (leftnum > 0) {
      res.push('(');
      getAllparenthesis(res, leftnum - 1, rightnum)
    }

    if (rightnum >= leftnum) {
      res.pop()
      res.push(')')
      getAllparenthesis(res, leftnum, rightnum - 1)
    }
  }
  getAllparenthesis([], n, n);
  return ans;
}

console.log(generateParenthesis(3));



function allres(n) {
  let ans = []

  function dfs(leftnum, rightnum, str) {
    if (str.length === 2 * n) {
      ans.push(str);
      return;
    }
    if (leftnum < rightnum) {
      dfs(leftnum, rightnum - 1, str + ')')
    }
    if (leftnum > 0) {
      dfs(leftnum - 1, rightnum, str + '(')
    }
  }
  dfs(n, n, '')
  return ans
}
console.log(allres(3));
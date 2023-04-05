
let str = "101023"

function restoreIpAddresses2(s) {
  const res = [];
  const dfs = (subRes, start) => {
    if (subRes.length == 4 && start == s.length) {
      res.push(subRes.join('.'));
      return;
    }
    if (subRes.length === 4 && start < s.length) {
      return;
    }
    //代表三种切割长度
    for (let len = 1; len <= 3; len++) {
      if (start + len - 1 >= s.length) return;
      if (len != 1 && s[start] == '0') return;


      const str = s.substring(start, start + len);
      if (len == 3 && +str > 255) return;
      subRes.push(str);
      dfs(subRes, start + len)
      subRes.pop()
    }
  }
  dfs([], 0)
  return res
}
console.log(restoreIpAddresses2(str));


function restoreIpAddresses3(str) {
  let res = [];
  function dfs(arr, index) {
    if (arr.length === 4 && index === str.length) {
      res.push(arr.join('.'));
      return;
    }
    if (arr.length === 4 && index != str.length) {
      return;
    }
    //三个三个来判断
    for (let i = 1; i < 4; i++) {
      let substr = str.substring(index, index + i)
      if (+substr > 255) return;
      //也不可以用0开头
      if(+substr[0]==0&&substr.length!=1)return;

      arr.push(substr);
      dfs(arr, index + i);
      arr.pop();
    }

  }
  dfs([], 0)
  return res
}
console.log(restoreIpAddresses3(str));

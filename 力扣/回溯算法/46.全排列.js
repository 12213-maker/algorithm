var permute = function (nums) {
  let ans = []
  function dfs(arr) {
    if (arr.length === nums.length) {
      ans.push(arr.slice())
    }
    for (let i = 0; i < nums.length; i++) {
      if (arr.indexOf(nums[i]) === -1) {
        arr.push(nums[i])
        dfs(arr)
        arr.pop()
      }
    }
  }
  dfs([])
  return ans
}
let nums = [1, 2, 3];
console.log(permute(nums));
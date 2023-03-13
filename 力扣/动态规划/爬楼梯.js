var climbStairs = function (n) {
  if (n <= 2) {
    return n
  }
  //一道进门动态规划题目
  let dp = new Array(n).fill(0)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  console.log(dp);
  return dp[n]
}

console.log(climbStairs(2)); 
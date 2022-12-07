/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let max = 0
    if (nums.length == 2) {
        console.log(nums[0], nums[1]);
        return nums[0] > nums[1] ? nums[0] : nums[1]
    } else if (nums.length == 1) {
        return nums[0]
    }else {
        let steal1 = nums[0] + rob(nums.slice(2))
        console.log(steal1,11111);

        let steal2 = rob(nums.slice(1))
        console.log(nums.slice(1),rob(nums.slice(1)),"###");
        console.log(steal2,2222);

        max += steal1 > steal2 ? steal1 : steal2


    }
    return max
};

var rob = function(nums) {
    let len = nums.length

    //使用自底向上的dp数组
    const dp = new Array(len+1).fill(0)
    dp[1] = nums[0]
    for(let i=2;i<=len;i++){
        //这里使用nums[i-1]的原因是nums数组和dp数组不是对齐的
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1])
    }
    return dp[len]
};  

console.log(rob([2,7,9,3,1]));
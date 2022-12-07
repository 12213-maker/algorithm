/**
 * @param {number[]} nums
 * @return {number}
 */

//我这种解法应该是贪心 ， 其实很多时候并不用用递归的方式来解题 ， 用数组的方式来解题可能会更好
var maxSubArray = function (nums) {
    let max = 0
    let result = []
    //选-2和不选-2的情况下看看[1,-3,4,-1，2，1，-5，4]的最大和
    const dp = (nums) => {
        if (nums.length==0) {
            return 0
        }
        //选当前数
        let target = nums[0]
        nums.shift()
        max += dp(nums) + target
        //每一次选择的max都记录下来
        result.push(max)
        console.log(target,dp(nums),max,result);

        //不选当前数，max=0
        nums.shift()
        dp(nums)
        max = 0
    }
    dp(nums)
    // console.log(result);
    return result.sort((a,b)=>a-b).shift()
};
nums = [-2, 1, -3]
console.log(maxSubArray(nums));



 //这种方法就是贪心，但是最好不要用递归来实现，用数组来实现会更好
 var maxSubArray = function(nums) {
    let result = -Math.pow(10,4)
    let count = 0
    for(let i=0;i<nums.length;i++){
        //用count来计算，一旦count为负数就立马放弃
        count += nums[i]
        result = Math.max(count,result)
        count<=0?count=0:''
    }
    return result
};



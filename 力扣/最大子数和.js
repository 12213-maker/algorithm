/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max = 0
    let result = []
    //有点像贪心
    //选-2和不选-2的情况下看看[1,-3,4,-1，2，1，-5，4]的最大和
    //感觉可以使用dfs来解决呢？
    const dfs = (nums,idx)=>{
        if(idx==nums.length){
            return 0
        }
        //选当前数
        let checked =  dfs(nums,idx+1) + nums[idx]
        console.log(dfs(nums,idx+1));
        max+=checked
        result.push(max)
        //不选当前数，max=0
        dfs(nums,idx+1)
        max = 0
    }
    dfs(nums,0)
    console.log(result);
    return 
};

nums = [-2,1,-3]

console.log(maxSubArray(nums));
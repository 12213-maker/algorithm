/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    //一看就是回溯啊
    let ans = []
    const dfs = (arr,nums2)=>{
        if(arr.length===nums.length){
            ans.push(arr)
            return
        }
        //选了一个之后就不可以选了，可以跳着选
        for(let i=0;i<nums2.length;i++){
            //要注意选过的就不可以选了
            let newNums = nums2.filter((item,idy)=>{
                return item!=nums2[i]
            })
            dfs([...arr,nums2[i]],newNums)
        }
    }
    dfs([],nums)
    return ans
};
console.log(permute([[1,2,3]]));
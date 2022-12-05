/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let left = 0
    let right = nums.length-1
    
    //首先要判断一下是不是乱序的数组
    if(nums[right]>=nums[left]){
        return nums[left]
    }
    
    //数组乱序的解决方式
    while(left<=right){
        let mid = left + Math.floor((right-left)/2)
        console.log(mid,nums[0],nums[mid],nums[mid+1]);

        //主要就是找到分界线
        if(nums[mid]>=nums[0]&&nums[mid+1]<=nums[0]){
            return nums[mid+1]
        }else if(nums[mid]>=nums[0]){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    return -1
};

nums = [3,1,2]
console.log(findMin(nums));
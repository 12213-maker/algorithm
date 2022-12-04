var searchRange = function(nums, target) {
    //原来是要找开始位置和结束位置
    let result = [-1,-1]
    let left = 0
    let right = nums.length-1
    if(nums.length==1&&nums[0]==target){
        return [0,0]
    }

    while(left<=right){
        let mid = left + Math.floor((right-left)/2)
        if(nums[mid]==target&&nums[mid-1]<target||nums[mid]==target&&mid==0){
            result[0] = mid
        }
        if(nums[mid]==target&&nums[mid+1]>target||nums[mid]==target&&mid==nums.length-1){
            result[1] = mid
        }
        if(nums[mid]<=target&&nums[mid+1]<=target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return result
};
console.log(searchRange([1,1,1],1));
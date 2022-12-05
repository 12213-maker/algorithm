
var search = function (nums, target) {
    const diff = (nums) => {
        //主要就是找分界线
        let left = 0
        let right = nums.length
        let mid
        //升序没有分界线
        if(nums[right]>nums[left]){
            return -1
        }
        while (left <= right) {
            mid = left + Math.floor((right - left) / 2)
            //主要就是要找到分界线，然后返回分界线左边的值
            if (nums[mid] >= nums[0] && nums[mid + 1] <= nums[0]) {
                return mid
            } else if (nums[mid] >= nums[0]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return -1
    }

    const find_target = (nums, target)=>{
        let left = 0
        let right = nums.length-1

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            //主要就是要找到分界线，然后返回分界线左边的值
            if (nums[mid] == target) {
                return mid
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return -1
    }

    let result = -1
    const diff_line = diff(nums)
    console.log(diff_line);
    if (diff_line===-1) {
        return find_target(nums, target)
    } else {
        //判断一下在分界线左边0还是右边1
        let flag = target > nums[nums.length - 1] ? 0 : 1
        if (flag) {
            if(find_target(nums.slice(diff_line + 1), target)==-1){
                return -1
            }
            result = find_target(nums.slice(diff_line + 1), target) + diff_line + 1
        } else {
            
            result = find_target(nums.slice(0, diff_line + 1), target)
        }
        return result
    }
};
console.log(search([3,1], 0));

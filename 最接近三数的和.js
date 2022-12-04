/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function (nums, target) {
    //如果数组只有三个数 , 直接退出
    if (nums.length == 3)
    return nums[0] + nums[1] + nums[2]
    //第一层循环定下一个数
    let result
    //排序
    nums.sort((a, b) => a - b)
    //这个是最开始的和与target的差
    let dis = Math.abs(nums[0] + nums[1] + nums[nums.length - 1] - target)

    for (let i = 0; i < nums.length; i++) {

        let left = i + 1
        let right = nums.length - 1

        //使用双指针来找
        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right]


            if (sum > target) {
                right--
                if (Math.abs(target - sum) <= dis) {
                    result = sum
                    dis = Math.abs(target - sum)
                }

            }
            else if (sum < target) {
                left++
                if (Math.abs(target - sum) <= dis) {
                    result = sum
                    dis = Math.abs(target - sum)
                }
            }
            else {
                result = target
                return result
            }
        }

    }


    return result
};

console.log(threeSumClosest([1, 1, 1, 1], 0));
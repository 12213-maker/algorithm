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

console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]));
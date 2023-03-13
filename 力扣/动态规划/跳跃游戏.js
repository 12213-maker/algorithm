var canJump = function (nums) {
  //标记出能跳出最远的距离
  let maxJumpLen = nums[0]
  if (maxJumpLen == 0) {
    return false;
  }
  let arrlen = nums.length
  for (let i = 0; i <= arrlen; i++) {
    //当前能跳最远的距离
    let curMax = nums[i] + i
    maxJumpLen = maxJumpLen > curMax ? maxJumpLen : curMax;
    arrlen = maxJumpLen
    if (maxJumpLen >= nums.length-1) {
      return true;
    }
  }
  return false;
}
var nums = [1,2,3]
console.log(canJump(nums));
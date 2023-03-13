var searchRange = function (nums, target) {
  let left = findFirst(nums, target)
  let right = findEnd(nums, target)


  function findFirst(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      let mid = Math.floor((right - left) / 2) + left
      if (nums[mid] === target && nums[mid - 1] < target || nums[mid] == target && mid == 0) {
        return mid
      } else if (nums[mid] >= target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return -1
  }
  function findEnd(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      let mid = Math.floor((right - left) / 2) + left
      if (nums[mid] === target && nums[mid + 1] > target || nums[mid] == target && mid == nums.length - 1) {
        return mid
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return -1
  }
  return [left, right]

};

var nums = [1, 1, 1], target = 1;
console.log(searchRange(nums, target));
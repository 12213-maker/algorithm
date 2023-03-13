// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
// 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
// 例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。



// var search = function (nums, target) {
//   const diff = (nums) => {
//       //主要就是找分界线
//       let left = 0
//       let right = nums.length
//       let mid
//       while (left <= right) {
//           mid = left + Math.floor((right - left) / 2)
//           //主要就是要找到分界线，然后返回分界线左边的值
//           if (nums[mid] >= nums[0] && nums[mid + 1] <= nums[0]) {
//               return mid
//           } else if (nums[mid] >= nums[0]) {
//               left = mid + 1
//           } else {
//               right = mid - 1
//           }
//       }
//       return -1
//   }

//   const find_target = (nums, target)=>{
//       let left = 0
//       let right = nums.length

//       while (left <= right) {
//           let mid = left + Math.floor((right - left) / 2)
//           if (nums[mid] == target) {
//               return mid
//           } else if (nums[mid] < target) {
//               left = mid + 1
//           } else {
//               right = mid - 1
//           }
//       }
//       return -1
//   }

//   let result = -1
//   const diff_line = diff(nums)

//   if (diff_line===-1) {
//       return find_target(nums, target)
//   } else {
//       //判断一下在分界线左边0还是右边1
//       let flag = target > nums[nums.length - 1] ? 0 : 1
//       if (flag) {
//           if(find_target(nums.slice(diff_line + 1), target)==-1){
//               return -1
//           }
//           result = find_target(nums.slice(diff_line + 1), target) + diff_line + 1
//       } else {
//           result = find_target(nums.slice(0, diff_line + 1), target)
//       }
//       return result
//   }
// };

var nums = [3,1,2], target = 1;
console.log(search(nums, target));

function search(nums, target) {
  //二分法找下标
  function binarySearch(nums, target) {
    let left = 0
    let right = nums.length
    while (left <= right) {
      let mid = Math.floor((right - left) / 2) + left
      if (nums[mid] === target) {
        return mid
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return -1;
  }

  //二分法找分界点
  function findDiffLine(nums) {
    let left = 0
    let right = nums.length
    while (left <= right) {
      let mid = Math.floor((right - left) / 2) + left
      if (nums[mid] >= nums[0] && nums[mid + 1] <= nums[0]) {
        return mid
      } else if (nums[mid] < nums[0]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return -1
  }

  let diffLine = findDiffLine(nums)
  if (diffLine!==-1) {
    let leftnum = binarySearch(nums.slice(0,diffLine+1),target)
    let rightnum = binarySearch(nums.slice(diffLine+1),target)
    if(leftnum===-1&&rightnum===-1){
      return  -1
    }
    result = leftnum===-1?(rightnum + diffLine + 1):leftnum
  } else {
    result = binarySearch(nums, target)
  }
  return result;

}
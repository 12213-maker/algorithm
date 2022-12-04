let nums = [1,5,6,2,8,89,7,21,4,6,63,10]
const target = 8


//使用二分查找来找到 target 在 nums 中对应值的下标
//查找的条件是查找范围不为空
nums.sort((a,b)=>a-b)
console.log(nums)


var search = function(nums,target){
    let left =  0
    let right = nums.length
    while(left<=right){//[left,right]所以当left等于right时是有意义的
        //每次循环都重新计算mid
        const mid = Math.floor((right-left)/2) + left 
        const num = nums[mid]
        if(target > num){
            left = mid + 1 
        }else if(target < num){
            right = mid - 1 
        }else 
        return mid
    }
    return -1
}

const result = search(nums,target)
console.log(result,result2);


// nums = [5,7,7,8,8,10]
// target = 8

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// //找到左边界
// let leftBorder = (nums,target)=>{
//     let left = 0
//     let right = nums.length -1
//     let ans = -2
//     while(left<=right){
//         let mid = Math.floor((right-left)/2)+left
//         if(nums[mid]>=target){
//             right = mid -1
//             ans = right 
//             console.log(ans);
//         }else 
//         left = mid +1
//     }

//     return ans
// }
// //找到右边界
// let rightBorder = (nums,target)=>{
    
//     let left = 0
//     let right = nums.length -1
//     let ans = -2
//     while(left<=right){
        
//         let mid = Math.floor((right-left)/2)+left
//         if(nums[mid]>target){
//             right = mid -1

//         }else 
//         {
//             left = mid +1
//             ans = left 
//             console.log(ans, '我是right');
//         }
//     }

//     return ans
// }

// var searchRange = function(nums, target) {
//     if(nums.length==0)return[-1,-1]
//     if(nums[0]==target&&nums.length==1)return [0,0]
//     let right = rightBorder(nums,target)
//     let left = leftBorder(nums,target)
//     console.log(left,right,right-left);
//     if(left ==-2 || right==-2)return[-1,-1]
//     if(right-left>1) return [left+1,right-1]
    
//     return [-1,-1]
    
    
// };


// console.log(searchRange([1,1],2));
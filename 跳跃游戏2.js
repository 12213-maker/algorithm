//给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
// 假设你总是可以到达数组的最后一个位置。


//使用贪心 , 跳到下一个都检查覆盖之后能不能跳到更远的位置


//跳跃游戏二
// var jump = function(nums) {
//     let length = nums.length

//     let end = 0
//     let maxPosition = 0
//     let steps = 0
//     for(let i = 0;i<length-1;i++){
//         maxPosition = Math.max(maxPosition,i+nums[i])
//         if(i==end){
//             end = maxPosition
//             steps++//选一个最远的作为起跳点
//         }
//     }
//     return steps
// };

// console.log(jump([2,3,1,1,4]));


//跳跃游戏一
var canJump = function(nums) {
    if(nums.length==1)return true
    if(nums[0]==0)return false
    let maxPosition = 0
    let len = nums.length
    for(let i = 0;i<len-1;i++){
        maxPosition = nums[i]+i>maxPosition?(nums[i]+i):maxPosition
        console.log(maxPosition,len-1,i);
        if(maxPosition>=len-1)return true
        
    }
    return false
};
console.log(canJump([1,0,1,0]));
console.log(132);
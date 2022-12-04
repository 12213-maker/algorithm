// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */


// //核心思想就是将三数之和转换为两数之和 , 将a+b+c=0  转换为 b+c = -a 然后利用左右指针找到符合条件的b 和 c 
// //在这到题里面还要注意重复的结果要跳过

// let quickSort = (arr,i,j)=>{
//     if(i>=j)
//     return
//     let left = i
//     let mark = left 
//     while(left<=j){
//         if(arr[left]<arr[i]){
//             mark++
//             [arr[left],arr[mark]]=[arr[mark],arr[left]]
//         }
//         left++
//     }
//     [arr[i],arr[mark]]=[arr[mark],arr[i]]

//     quickSort(arr,i,mark-1)
//     quickSort(arr,mark+1,j)
// }


 var threeSum = function(nums) {
    if(nums.length<3)
    return []
    //对数组进行排序(使用快排)
    quickSort(nums,0,nums.length-1)
    let arr = []

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0)
        break

        let left = i+1
        let right = nums.length-1

        //去重
        if(i>0&&nums[i]==nums[i-1])
        continue

        //left < right就一直循环
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right]
            //找到了等于零的情况 , 一起移动
            if(sum===0)
            {
            arr.push([nums[i],nums[left],nums[right]])

            //在移动左右指针的时候先对左右指针进行判断 ,相同的就跳过
            while(left<right&&nums[left]==nums[left+1])
            left++
            while(left<right&&nums[right]==nums[right+1])
            right--

            left++
            right--
            }else if(sum<0){
                left++
            }else
            right--
        }

    }
    return arr
};
let num = [-1,0,1,2,-1,-4]
console.log(threeSum(num));



// var threeSum = function (nums) {
//     let newarr = [...new Set(nums)]
//     if(newarr[0]===0&&newarr.length==1)
//     return [[0,0,0]]

//     nums.sort((a, b) => a - b)
//     let result = []
//     let arr = new Map()
//     let target = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         let flag = false
//         arr.has(nums[i]) ? flag = true : arr.set(nums[i])
//         if (flag) {
//             continue
//         }


//         //设置好左右指针
//         let left = i + 1
//         let right = nums.length - 1

//         while (left < right) {
            
//             if (nums[left] + nums[right] + nums[i] === 0) {

//                 result.push([nums[i],nums[left], nums[right]])
//             }
//             if (nums[left] + nums[right] + nums[i] >= 0) {
//                 right--
//             }
//             if (nums[left] + nums[right] + nums[i] < 0) {
//                 left++
//             }
//         }
//     }
//     return result
// };

// let num = [1,1,1]
// console.log(threeSum(num));
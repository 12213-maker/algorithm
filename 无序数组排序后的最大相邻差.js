// let arr = [2,6,3,4,5,10,9]

//用快排来排序(递归单排)
// let quickSort = (num,left,right)=>{
//     let mark = left
//     let flag = left
//     while(left<=right){
//         if(num[left]<num[flag]){
//             mark++
//             [num[mark],num[left]]=[num[left],num[mark]]
//         }
//         left++
//     }
//     //交换flag 和  mark的值
//     [num[mark],num[flag]]=[num[flag],num[mark]]
//     return mark
// }

// let jisuan = ((num,left,right)=>{
//     if(left>=right)//递归结束的条件 , 不一定是left == right
//     return
//     let flag = quickSort(num,left,right)
//     jisuan(num,left,flag-1)
//     jisuan(num,flag+1,right)
// })

// jisuan(arr,0,arr.length-1)

// let max = arr[1]-arr[0]
// arr.forEach((item,index)=>{
//     max = arr[index+1]-item>max?arr[index+1]-item:max
// })

// console.log(max);




//使用计数排序 (当元素组只有三个 , 1,2,1000000的时候 , 此算法性能很差)
// let arr = [2,6,3,4,5,10,20]
// //输出排序过后任意相邻两个数之间的最大差值
// let max = arr[0]
// let min = arr[0]
// let res = []
// arr.forEach((item)=>{
//     max = item>max?item:max
//     min = item<min?item:min
    
// })
// let d = min//偏移量
// let k = max-min+1//数组长度
// while(k){
//     res.push(0)
//     k--
// }


// arr.forEach((item)=>{
//     res[item-min]++
// })

// //找到0最多的index
// let left = 0
// let right = 0
// let count = right-left
// res.forEach((item,index)=>{
//     if(item!=0&&res[index+1]==0){
//         left = index
//     }
//     if(item==0&&res[index+1]!=0){
//         right = index+1
//     }
//     count = count>right-left?count:right-left
// })


// console.log(count);




//桶排序336
let arr = [2,6,3,4,5,10,9]



// let num = [5, 8, 6, 3, 9, 2, 1, 7]

// // 双边循环
// let quickSort = (num, left, right) => {
//     if (left >= right) return;
//     //设置基准数
//     let flag = left
//     while (left < right) {
//         //先找到right
//         while (left < right && num[right] >= num[flag])
//             right--;
//         while (left < right && num[left] <= num[flag])
//             left++;
//         //如果此时left依旧小于right,交换left和right
//         if(left < right)
//             [num[right], num[left]] = [num[left], num[right]]
//     }
//     //交换flag 和 left
//     [num[flag], num[left]] = [num[left], num[flag]]
//     return left;
// }

// let jisuan = (num, left, right) => {
//     //既然是递归 , 就要有结束条件
//     if(left>=right)return;
//     let flag = quickSort(num, left, right)
//     jisuan(num, left, flag - 1)
//     jisuan(num, flag + 1, right)
// }

// jisuan(num, 0, num.length - 1)
// console.log(num);



// let num = [3,2,5,1]

//单边循环
// let quickSort = (num, left, right) => {
//     let flag = left
//     let mark = left
//     while(left<=right){
//         if(num[left]<num[flag])
//         {
//             //这个时候mark就要往右移动一位 , 因为找到了一个小于flag 的数
//             mark++
//             [num[left],num[mark]] = [num[mark],num[left]]
//         }
//         left++
//     }
//     //交换基准数 和 mark 的值
//     [num[flag],num[mark]] = [num[mark],num[flag]]
//     //最后要返回基准数
//     return mark
// }


// let jisuan = (num, left, right) => {
//     //既然是递归 , 就要有结束条件
//     if(left>=right)return;
//     let flag = quickSort(num, left, right)
//     jisuan(num, left, flag - 1)
//     jisuan(num, flag + 1, right)
// }

// jisuan(num, 0, num.length - 1)
// console.log(num);




//当数据量很大的时候 , 递归快排会造成栈溢出 , 为了解决这个问题 , 我们使用js数组 来模拟栈 , 
//将待排序的[left,right]保存到数组中 , 循环取出进行快排 
// let num = [4, 7, 3, 5, 6, 2, 8, 1]
// let num = [1,3,2,5,1,9,6,8,7]
// //非递归实现快排
// const quickSort = (num, left, right) => {
//     let flag = left
//     let mark = left
//     while (left <= right) {
//         if (num[left] < num[flag]) {
//             //这个时候mark就要往右移动一位 , 因为找到了一个小于flag 的数
//             mark++
//             [num[left], num[mark]] = [num[mark], num[left]]
//         }
//         left++
//     }
//     //交换基准数 和 mark 的值
//     [num[flag], num[mark]] = [num[mark], num[flag]]
//     //最后要返回基准数
//     return mark
// }

// //使用非递归的方式进行快排
// const jisuan = (num,left,right)=>{
//     let list = [[left,right]]
//     while(list.length!=0){
//         let now = list.pop()
//         if(now[0]>=now[1])
//         continue;//结束这次循环去到下一个list.pop
//         let flag = quickSort(num,now[0],now[1])
//         //flag-1 和 flag+1 避免了类似[1,3,2,5,9,6,8,7]这样flag一直卡在0的情况
//         list.push([now[0],flag-1])
//         list.push([flag+1,now[1]])
//     }
// }
// jisuan(num,0,num.length-1)
// console.log(num);


// let num = [3,2,5,1,0,6,8,7]
// //快排就是要把基准值放到中间的某个位置上，让左边的小于它，右边的大于它
// function quickSort(arr,left,right){
//     //设置基准值
//     let index = left
//     //标记最后基准值的位置方便交换
//     let mark = left
//     let target = arr[index]
//     //最后一个也要判断，因为是单边循环
//     while(left<=right){
//         if(arr[left]<target){
//             mark++
//             [arr[left],arr[mark]] = [arr[mark],arr[left]]
//         }
//         left++
//     }
//     [arr[index],arr[mark]] = [arr[mark],arr[index]]
//     return mark
// }
// function reallySort(num,left,right){
//     if(left>=right){
//         return;
//     }
//     let flag = quickSort(num,left,right)
//     reallySort(num,flag+1,right)
//     reallySort(num,left,flag-1)
//     return num
// }

//用栈来代替递归
// function reallySort(num,left,right){
//     let stack = [[left,right]]
//     while(stack.length){
//         //执行栈头元素
//         let cur = stack.pop()
//         if(cur[0]>=cur[1]){
//             continue;
//         }
//         let flag = quickSort(num,cur[0],cur[1])
//         stack.push([flag+1,cur[1]]);
//         stack.push([cur[0],flag-1]);
//     }
//     return num
// }
// console.log(reallySort(num,0,num.length-1));



let num = [3, 2, 5, 6, 7, 8, 1, 0, 6, 8, 7];
function quickSort(arr, left, right) {
    let index = left;
    let mark = left;
    let flag = arr[left];
    while (left <= right) {
        if (arr[left] < flag) {
            mark++
            [arr[left], arr[mark]] = [arr[mark], arr[left]];
        }
        left++;
    }
    [arr[index], arr[mark]] = [arr[mark], arr[index]];
    return mark;
}


function sort(num, left, right) {
    if (left >= right) return;
    let flag = quickSort(num, left, right);
    sort(num, left, flag - 1);
    sort(num, flag + 1, right);
}

sort(num, 0, num.length - 1)
console.log(num, 'showme');


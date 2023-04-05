// const merger = (leftArr,rightArr) => {
//     let left_len = leftArr.length
//     let right_len = rightArr.length
//     let arr = []
//     let i = 0
//     let j = 0
//     while(i<left_len && j<right_len){
//         leftArr[i]<rightArr[j] ? arr.push(leftArr[i++]) : arr.push(rightArr[j++])
//     }
//     while(i<left_len){
//         arr.push(leftArr[i++])
//     }
//     while(j<right_len){
//         arr.push(rightArr[j++])
//     }
//     return arr
// }
// const mergeSort = (arr) => {
//     let length = arr.length
//     if (length <= 1) {
//         return arr
//     }
//     let mid = Math.floor(length/2)
//     let leftArr = mergeSort(arr.slice(0,mid))
//     let rightArr =mergeSort(arr.slice(mid))
//     return merger(leftArr ,rightArr );
// }

// let num = [2,5,3,1,5,6,2,1,10,9,5,2,]

// console.log(mergeSort(num));

// let sum = 0
// //求小和问题
// const merger = (leftArr, rightArr) => {
//     let left_len = leftArr.length
//     let right_len = rightArr.length
//     let arr = []
//     let i = 0
//     let j = 0
//     let res = 0

//     while (i < left_len && j < right_len) {
//         leftArr[i] < rightArr[j] ? arr.push(leftArr[i++]) : arr.push(rightArr[j++])
//         res += leftArr[i] < rightArr[j] ? (right_len - j) * leftArr[i] : 0
//     }
//     while (i < left_len) {
//         arr.push(leftArr[i++])
//     }
//     while (j < right_len) {
//         arr.push(rightArr[j++])
//     }
//     return arr
// }
// const mergeSort = (arr) => {
//     let length = arr.length
//     if (length <= 1) {
//         return arr
//     }
//     let mid = Math.floor(length / 2)
//     let leftArr = mergeSort(arr.slice(0, mid))
//     let rightArr = mergeSort(arr.slice(mid))
//     return merger(leftArr, rightArr);
// }

// //求小和的函数
// let mer = (arr, l, r) => {
//     if (l == r) return 0
//     let mid = l + ((r - l) >> 1)
//     return  Number(mer(arr,l,mid))//左边合并的 
//         +
//         Number(mer(arr,mid+1,r))//右边合并的
//         +
//         merger(arr.slice(0, mid), arr.slice(mid));//两个加起来
// }

// let num = [1, 3, 4, 2, 5]
// console.log(mergeSort(num), mer(num, 0, num.length - 1));



// let num = [2, 5, 3, 1, 5, 6, 2, 1, 10, 9, 5, 2,]

// function merge(leftArr, rightArr) {
//     let ans = []
//     let left = 0
//     let right = 0
//     while (left < leftArr.length && right < rightArr.length) {
//         if (leftArr[left] < rightArr[right]) {
//             ans.push(leftArr[left])
//             left++
//         } else {
//             ans.push(rightArr[right])
//             right++
//         }
//     }
//     if (left < leftArr.length) {
//         ans.push(...leftArr.slice(left))
//     } else {
//         ans.push(...rightArr.slice(right))
//     }
//     return ans
// }

// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let leftArr = mergeSort(arr.slice(0, mid))
//     let rightArr = mergeSort(arr.slice(mid))
//     return merge(leftArr, rightArr)
// }
// console.log(mergeSort(num))







function merge(arr1, arr2) {
    let ans = []
    let left1 = 0;
    let left2 = 0
    while (left1 < arr1.length && left2 < arr2.length) {
        let num1 = arr1[left1];
        let num2 = arr2[left2];
        if (num1 < num2) {
            ans.push(num1);
            left1++;
        } else {
            ans.push(num2);
            left2++;
        }

    }

    if (left1 < arr1.length) {
        ans.push(...arr1.splice(left1));
    }
    if (left2 < arr2.length) {
        ans.push(...arr2.splice(left2));
    }
    return ans;
}

function mergeSort(arr, left, right) {
    if (left >= right) return [arr[left]];
    let mid = Math.floor((right - left) / 2) + left;
    let arr1 = mergeSort(arr, left, mid);
    let arr2 = mergeSort(arr, mid + 1, right);
    return merge(arr1, arr2);
}

let num = [5,66,2,1,4,5,8,9,5,12,3,6,54,41,2,5,63,2,14,52,2]
console.log(mergeSort(num, 0, num.length - 1));


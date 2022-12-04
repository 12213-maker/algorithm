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

let sum = 0
//求小和问题
const merger = (leftArr, rightArr) => {
    let left_len = leftArr.length
    let right_len = rightArr.length
    let arr = []
    let i = 0
    let j = 0
    let res = 0

    while (i < left_len && j < right_len) {
        leftArr[i] < rightArr[j] ? arr.push(leftArr[i++]) : arr.push(rightArr[j++])
        res += leftArr[i] < rightArr[j] ? (right_len - j) * leftArr[i] : 0
    }
    while (i < left_len) {
        arr.push(leftArr[i++])
    }
    while (j < right_len) {
        arr.push(rightArr[j++])
    }
    return arr
}
const mergeSort = (arr) => {
    let length = arr.length
    if (length <= 1) {
        return arr
    }
    let mid = Math.floor(length / 2)
    let leftArr = mergeSort(arr.slice(0, mid))
    let rightArr = mergeSort(arr.slice(mid))
    return merger(leftArr, rightArr);
}

//求小和的函数
let mer = (arr, l, r) => {
    if (l == r) return 0
    let mid = l + ((r - l) >> 1)
    return  Number(mer(arr,l,mid))//左边合并的 
        +
        Number(mer(arr,mid+1,r))//右边合并的
        +
        merger(arr.slice(0, mid), arr.slice(mid));//两个加起来
}

let num = [1, 3, 4, 2, 5]
console.log(mergeSort(num), mer(num, 0, num.length - 1));
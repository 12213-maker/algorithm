let num = [3, 2, 5, 6, 7, 8, 1, 0, 6, 8, 7];

let bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
}

// bubbleSort(num)
// console.log(num);


//冒泡的关键就是两个循环方向要不一致才行
function bubbleSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }
        }
    }
    return arr;
}
bubbleSort2(num)
console.log(num);
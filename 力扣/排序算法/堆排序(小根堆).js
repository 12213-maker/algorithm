// //小根堆就是最小的在最上面 , 也是用父节点下沉 , 不过找的是比父节点还小的

// let num = [1, 6, 0, 4, 10, 7, 1, 8, 9, 10, 0]

// let downAdjust = (arr, i, len) => {

//     let leftchild = 2 * i + 1
//     while (leftchild < len) {
//         //看看他的右孩子
//         if (leftchild + 1 < len && arr[leftchild + 1] < arr[leftchild])
//             leftchild++

//         if (arr[i] <= arr[leftchild])
//             break



//         //交换两个最小的
//         [arr[i], arr[leftchild]] = [arr[leftchild], arr[i]]


//         //修改父节点和子孩子
//         i = leftchild
//         leftchild = 2 * i + 1
//     }
// }

// let heapSort = (arr) => {
//     //创建小根堆
//     for (let i = Math.floor((arr.length - 2)/ 2); i >= 0; i--) {
//         downAdjust(arr, i, arr.length)
//     }
//     console.log(arr);

//     //使用小根堆排序
//     for (let i = arr.length-1; i >= 0; i--) {
//         //这里我们还要手动交换
//         [arr[i], arr[0]] = [arr[0], arr[i]]
//         //每次都把最小的交换到第一个去
//         downAdjust(arr, 0, i)
//     }
// }

// console.log(num);
// heapSort(num)
// console.log(num);





//使用小根堆排序一个几乎有序的数组 , 调整的位置不超过k
let num = [1,3,5,6,2,0,8,9,4]
let k = 6

let downAdjust = (arr, i, len) => {

    let leftchild = 2 * i + 1
    while (leftchild < len) {
        //看看他的右孩子
        if (leftchild + 1 < len && arr[leftchild + 1] < arr[leftchild])
            leftchild++

        if (arr[i] <= arr[leftchild])
            break



        //交换两个最小的
        [arr[i], arr[leftchild]] = [arr[leftchild], arr[i]]


        //修改父节点和子孩子
        i = leftchild
        leftchild = 2 * i + 1
    }
}

let heapSort = (arr) => {
    //创建小根堆
    for(let i = (arr.length-2)>>1;i>=0;i--){
        downAdjust(arr,i,k)
    }

    let num = []
    //使用小根堆排序 , 每次都减少一个数组头的元素 , 应该从后面往前面排序
    //找到开始和结束的边界 , 开始就是i ,结束就是i+k
    while(arr.length>0){
        if(arr.length<k)
        k = arr.length
        //每一次排序的下标都要从0开始 , 但是arr中的下标都是固定的啊
        for(let j = k-1>>1 ;j>=0;j--){
            downAdjust(arr,j,k)
        }
        num.push(arr.shift())
    }
    return num
}

console.log(num);
console.log(heapSort(num),'我是输出');
// downAdjust(num,2,6)
// downAdjust(num,1,6)
// downAdjust(num,0,6)


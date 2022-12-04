//桶排序 , 桶的数量就是要排序数组的长度  ,  桶区间就是(max-min)/桶数量

let num = [0.5, 0.84, 2.18, 3.25, 4.5]

let sort = (num) => {
    let max = num[0]
    let min = num[0]
    num.forEach((item) => {
        max = item > max ? item : max
        min = item < min ? item : min
    })

    //初始化桶
    let n = num.length
    //桶区间就是(max-min)/桶数量
    let d = (max - min) / (n - 1)

    let arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = []
    }

    //遍历原数组 , 将每个元素放入桶中
    num.forEach((item) => {
        //item要在每个桶里面都看一看
        //index代表桶

        arr.forEach((item1, index) => {
            let left = min + (index) * d
            let right = min + (index + 1) * d
            if (item >= left && item < right)
                arr[index].push(item)
        })
    })

    let arr2 = []

    //桶已经放好了 , 接下来就是对每个桶进行排序
    arr.forEach((item,index)=>{
        item.sort((a,b)=>a-b)
        arr2.push(...item)
    })

    return arr2

}

console.log(sort(num));
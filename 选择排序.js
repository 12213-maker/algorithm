//每次遍历都找到最小的元素 , 放到数组的最开始
let num = [2,8,6,5,1,2,3,4,5,6]

let SelectSort = (arr)=>{
    for(let i = 0;i<arr.length-1;i++){
        let min = i
        for(let j=i+1;j<arr.length-1;j++){
            min = arr[j]<arr[min]?j:min
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }


    console.log(arr);
}
SelectSort(num)
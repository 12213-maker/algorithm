//堆排序
//二叉堆的构建 , 删除 , 自我调整等基本结构 , 是实现堆排序的基础

//1. 首先我的得到的是一个无序数组 , 要先将其构造成二叉堆
//需要从小到大排序就构造成最大堆 , 需要从大到小排序 , 就构造成最小堆

//2. 开始排序 , 循环删除堆顶元素 , 替换到二叉堆的末尾 , 调整堆产生新的堆顶

//所以我们需要的函数有  构造二叉堆() 
//downAdjust---调整二叉堆  
//heapSort---循环找到最大的元素 , 并替换到二叉堆的末尾
let num = [1, 6, 12, 4, 5, 7, 8, 8, 9, 10, 0]

//调整最大堆 arr数组 , i 是每次调整的父节点  , len 是目前堆的大小
let downAdjust = (arr, i, len) => {
    //用左孩子来判断终止条件,在里面判断有没有右孩子 如果用右孩子判断的话,不确定结束的时候还有没有左孩子
    let leftchild = 2 * i + 1
    while (leftchild < len) {

        //判断右孩子
        if (leftchild+1 < len && arr[leftchild + 1] > arr[leftchild])
            leftchild++
        //父节点大直接跳出
        if (arr[i] >= arr[leftchild])
        break
        //交换节点
        [arr[i], arr[leftchild]] = [arr[leftchild], arr[i]]
        //下标
        i = leftchild
        leftchild = 2 * i + 1
        

    }
}

//创造堆 , 进行sort
let heapSort = (arr)=>{
    //把这个堆构建成最大堆. i代表的是父节点 , 显然从length-1开始是没有子节点的 
    //从有子节点的父节点开始构造堆 , 也就是i = (arr.length-1-1)/2  >>是除以二的意思
    for(let i = (arr.length-2)>>1;i>=0;i--){
        downAdjust(arr,i,arr.length)
    }
    console.log(arr ,'最大堆');

    //循环删除替换arr中最大元素到尾部
    for(let i= arr.length-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        //替换之后调整堆
        downAdjust(arr,0,i)
    }

}

console.log(num , '无序数组');
heapSort(num)
console.log(num , '排序好的数组');

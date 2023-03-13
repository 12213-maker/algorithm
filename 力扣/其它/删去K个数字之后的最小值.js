//给出一个整数 , 从该整数中去掉K个数字  ,要求剩下的数字形成的新整数尽可能的小
//1593212      3        1212
//30200        1        200
//10           2        0

let smallnumber = (num , k)=>{
    let arr = (num+"").split('')
    if(arr.length<=k)return 0

    //像这样依次求得局部最优解  ,最终得到全局最优解得思想叫做贪心算法 
    //以k作为外循环 , 遍历数字作为内循环 , 需要考虑的东西非常多 , 
    //如果以遍历数字作为外循环 , 以k作为内循环 ,就可以写出非常简洁的代码
    // for(let i=0;i<k;i++){
    //     let index = 0
    //     let flag = 0
    //     let left = 0
    //     //删除k个arr中最大的值不是删除最大的值 , 而是删除一个使得改变之后的数最小的值
    //     //直接删除最大值是错误的 , 例如:3549  直接删除最大的数为354 , 而符合题意的是349
    //     //所以我们要找的是第一个左边的数比右边大的

    //     for(let i=left;i<arr.length-1;i++){
    //         if(arr[i]>arr[i+1])
    //         {
    //             index=i
    //             flag=1
    //             left = i
    //             break
    //         }   
            
    //     }
    //     if(flag==0)index = arr.length-1
    //     arr.splice(index,1)
    // }



    //下面尝试以数字作为外循环, k作为内循环
    //遍历每一个数字 , 压到栈里面去 , 如果栈内的数字大于即将入栈的数字 , 站内数字出栈 , 循环k次 , 剩下的数字依次入栈
    let res = [arr.shift()]//第一个数字到res里面了
    let flag = 0

    for(let i = 0;i<arr.length-1;i++){
        if(flag==k||flag<k&&i==arr.length-1){
            res.push(...arr.splice(i))
            break
        }
        
        if(arr[i]<res[res.length-1]){
            res.pop()
            res.push(arr[i])
            flag++
        }
        else
        res.push(arr[i])
    }
    if(flag<k){
        let i = k-flag
        res.splice(res.length-i+1)
    }
    //120936


    //删除了之后全为零的情况
    //prev （第一项的值或者上一次叠加的结果值，或者是提供的初始值（initialValue））
    //cur （数组中当前被处理的元素）
    //index 索引
    //arr 数组本身
    let sum = res.reduce((prev,cur)=>{
        return Number(prev)+Number(cur)
    })
    if(sum==0)return 0
    
    for(let i=0;i<res.length-1;i++){
        if(res[i]==0)
        res.splice(i,1)
        if(res[i]!=0)
        break
    }
    return res.join('')*1
}

console.log(smallnumber(1593212,3),'我是输出结果');
//有五个金矿 , 只有十个工人 , 200/3 300/4 350/3 400/5 500/5
//使用动态规划来使得挖出来的金矿能更加的多
//挖矿的性价比 : 350/3 > 500/5 >  200/3=300/4=400/5
//动态规划就是把简单的问题转换成规模较小的子问题,
//再从简单的子问题自底向上一步一步递推,最终得到问题的最优解
//动态规划的要点:确定全局最优解和最优子结构之间的关系 , 以及问题的边界
let w = 10//工人数量
let n = 5 //可选金矿数量
let gold = {
    p:[5,5,3,4,3],//金矿开采需要的工人数量
    g:[500,400,350,300,200]//金矿储量
}

// let F = (w,n,gold)=>{
//     //金矿没了或者是人没了都返回 0 
//     if(w==0||n==0)
//     return 0

//     //当前人数不够挖当前的金矿 , 就去看看下一个金矿 , 人数不变
//     if(w<gold.p[n-1])
//     return F(w,n-1,gold)

//     //返回挖矿或者不挖矿的最优解
//     return Math.max(F(w,n-1,gold),F(w-gold.p[n-1],n-1,gold)+gold.g[n-1])
// }

let F = (w,n,gold)=>{
    if(w==0||n==0){
        return  0
    }
    if(w<gold.p[n-1]){
        return F(w,n-1,gold);
    }
    return  Math.max(F(w,n-1,gold),F(w-gold.p[n-1],n-1,gold)+gold.g[n-1]);
}


console.log(F(w,n,gold));



// //我写写动态规划试试
// let G = [500,400,350,300,200]//金矿储量
// let P = [5,5,3,4,3]//金矿开采需要的工人数量
// let N = 5//可选的金矿数量
// let W = 10 //可用的工人数量


// let f = (g,P,N,W)=>{

//     if(N==0||W==0)
//     return 0

//     //递归的时候还存在当前总人数挖不了当前的金矿但是可以挖下一个金矿
//     if(W<P[N-1])
//     return f(g,P,N-1,W)

//     //递归的时候用 N-- 我真的脑子有点大病
//     return Math.max((f(g,P,N-1,W-P[N-1]) + g[N-1]), f(g,P,N-1,W))

// }

// console.log(f(G,P,N,W));




//但是这种方法的性能非常低
//这里就要引入动态规划的另一个核心的要点: 自底向上求解(记忆化搜索)

// let w = 10//工人数量
// let n = 5 //可选金矿数量
// let gold = {
//     p:[5,5,3,4,3],//金矿开采需要的工人数量
//     g:[500,400,350,300,200]//金矿储量
// }

// // 写一个二维数组
// let arr = Array(gold.g.length).fill(0).map(x=>Array(w).fill(0))
// let getBestGoldMiningV2 = (arr)=>{
//     //数组每一格都根据条件进行状态转移方程
//     arr.forEach((item,index)=>{
//         //把第一行的状态方程补满
//         if(index==0){
//             item.forEach((item2,index2)=>{
//                 if(gold.p[index]<=index2+1){
//                     arr[index][index2] = gold.g[index]
//                 }
//             })
//         }
//         else
//         item.forEach((item2,index2)=>{
//             //人数不够就去看看上一个
//             if(gold.p[index]>index2+1){
//                 arr[index][index2] = arr[index-1][index2]
//             }
//             //返回挖和不挖之间的最大值(每一行的值都可以状态转移到上一行去)
//             else
//             {
//             let j = index2-gold.p[index]==-1?0:index2-gold.p[index]
//             arr[index][index2] = 
//             Math.max(arr[index-1][index2],arr[index-1][j]+gold.g[index])
//             }
//         })
//     })

//     //返回最后一格
//     return arr[gold.g.length-1][w-1]
// }
// console.log(getBestGoldMiningV2(arr));




//上面代码的时间已经是最优的了 , 但是空间仍有优化的空间
//因为我们在填写其中一行的空格的时候 , 都是根据上一行的空格来获取最大收益的 
//所以我们只需要一行数组就可以了 , 但是在计算的时候要从右往左计算 , 避免这一行的值把上一行的值覆盖

// let arr2 = Array(w).fill(0)
// //初始化第一行的数据
// arr2.forEach((item,index)=>{
//     if(gold.p[0]<=index+1)
//     arr2[index] = gold.g[0]
// })
// let getBestGoldMiningV3 = (arr2)=>{

//     gold.g.forEach((item,index)=>{
//         let person = gold.p[index]

//         if(index!=0)
//         //从右边开始循环arr2
//         for(let i = w-1;i>=0;i--){
//             let j = i-gold.p[index]==-1?0:i-gold.p[index]
//             if(i+1>=person){
//                 arr2[i] = Math.max(arr2[i],arr2[j]+gold.g[index])
//             }
//         }
//     })

//     return arr2[w-1]
// }

// console.log(getBestGoldMiningV3(arr2));
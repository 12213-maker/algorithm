// //在这里计算
// let path = (m,n,i,j)=>{
//     let count = 0
//     //向右或者向下走完了只能有一种走法了
//     if(i==m||j==n)return 1
//     //当两个都没有走完
//     console.log(path(m,n,i+1,j)+path(m,n,i,j+1)+count,i,j);
//     return path(m,n,i+1,j)+path(m,n,i,j+1)+count
// }

// var uniquePaths = function(m, n) {
//     //在这里使用path
//     return path(m,n,1,1)
// };


//使用递归的思想与记忆化搜索 , 来解决递归栈满的情况
var uniquePaths = function(m, n) {
    //创建一个数组
    let arr = new Array(m).fill(0).map(()=>item = new Array(n).fill(0))
    //初始化数组 , 走到最底部或者最右边都只剩下一种走法
    for(let i =0 ;i<m;i++){
        arr[i][0] = 1
    }
    for(let j =0 ;j<n;j++){
        arr[0][j] = 1
    }
    
    for(let i = 1;i<m;i++){
        for(let j = 1 ;j<n;j++){
            arr[i][j] = arr[i-1][j] + arr[i][j-1]
        }
    }

    return arr[m-1][n-1]
};


console.log(uniquePaths(3,2));

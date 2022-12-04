//5---->三角形行数
//7
//38
//810
//2744
//45265

//详情见img中的图片

//首先要构造这个三角形
let num = [7,3,8,8,1,0,2,7,4,4,4,5,2,6,5]
let arr = new Array(5).fill(0).map((item,i) => {
    let arr2 = new Array(5).fill(0)
    arr2.map((item2,j)=>{
        if(j<=i){
            arr2[j] = num.shift()
        }
    })
    return arr2
})
// console.log(arr);

//计算从数组最开头走到最结尾的最大值
let bigSum = (arr,i,j)=>{
    if(i==arr.length)return 0
    //当前的数
    let number = arr[i][j]
    //走左边还是走右边
    return Math.max(bigSum(arr,i+1,j+1)+number,bigSum(arr,i+1,j)+number)
}


//优化时间 , 自底向上求解
let time_bigSum = (arr)=>{
    for(let i=arr.length-2;i>=0;i--){
        for(let j=0;j<arr[i].length;j++){
            if(j<=i){
                arr[i][j] += Math.max(arr[i+1][j],arr[i+1][j+1]) 
            }
        }
    }
    return arr[0][0]
}

console.log(bigSum(arr,0,0));
console.log(time_bigSum(arr));


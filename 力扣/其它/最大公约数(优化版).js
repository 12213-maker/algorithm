//暴力循环法
// let gettow = function(a,b){
//     let min = a>b?b:a
//     let max = 1
//     for(let i = 0;i<=min;i++){

//         if(a%i==0&&b%i==0){
//             max = i
//         }
//     }
//     return max
// }


//辗转相除法
// let gettow = function(a,b){
//     let min = a>b?b:a
//     let max = a>b?a:b
//     if(max%min==0)
//     return min
//     return gettow(min,max%min)
// }


//更相减损术
let gettow = function(a,b){
    if(a==b)return a
    let min = a>b?b:a
    let max = a>b?a:b
    return gettow(min,max-min)
}

console.log(gettow(1000,1));
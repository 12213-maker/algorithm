//把整数转换为二进制的数 , 如果是二的整数次幂的话 , 只有一个 1 

//法二 :  位运算 , 16:10000  15:1111  16&15=0

let judge = (num)=>{
    // let num_2 = num.toString(2)
    // let flag = 0
    // num_2.split('').forEach((item)=>{
    //     if(item==1)
    //     {
    //         flag++
    //     }
    // })

    // if(flag==1)return '是2的整数次幂'
    // else return '不是2的整数次幂'
    
    return (num&num-1)==0//法二
}
console.log(judge(16));
console.log(judge(8));
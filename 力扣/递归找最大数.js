let num = [1,15,3,16,4,12,5,8,6,2,4,10,2,5,6]

let searchMax = (num)=>{
    if(num.length==1)return num[0]

    //分成左边和右边
    let index = Math.floor(num.length>>1)//右移一位比除以二要快
    return Math.max(searchMax(num.slice(0,index)),searchMax(num.slice(index)))
}

console.log(searchMax(num));
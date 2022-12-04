//12345 返回 12354
//12354 返回 12435
let bignum = (num)=>{
    if((num+"").split('').reverse().join('')==num||num==0)
    return false
    let arr = (num+"").split('')
    let right = arr.length-1
    let n = arr.length-1
    while(n){
        let left = arr[n]
        if(arr[left]<arr[right]){
            console.log('我执行了');
            [arr[left],arr[right]]=[arr[right],arr[left]]
            //交换之后还要把left右边的从小排到大
            let arr1 = arr.splice(Number(left)+1)
            arr1.sort((a,b)=>a-b)
            arr.push(...arr1)
            break
        }
        n--
    }
    return arr.join('')*1
}
console.log(bignum(31542));
function bigIntSum(){
    //用数组来储存大整数\
let num1 = 426709752318
let num2 = 95481253129
console.log(num1+num2);
let res = []
//把整数储存在两个数组中
let res1 = (num1+"").split('').reverse()
let res2 = (num2+"").split('').reverse()
let len1 = res1.length-1
let len2 = res2.length-1
let max = len1>len2?len1:len2
let min = len1<len2?len1:len2
//低位补齐
let d = max-min
for(let i=0;i<d;i++){
    len1>len2?res2.push(0):res1.push(0)
}
res1.forEach(()=>{
    res.push(0)
})
res.push(0)

res1.forEach((item,index)=>{
    let count1 = Number(item)
    let count2 = Number(res2[index])
    let sum = count1+count2
    if(sum<10)
    //如果加完之后大于等于十
    {if(Number(res[index])+sum<10){
        res[index]+=sum
    }
    else{
        res[index]+=sum-10
        res[index+1]=1
    }}

    else{
        res[index]+=sum-10
        res[index+1] = 1
    }
})

res.reverse()
for(let i=0;i<res.length-1;i++){
    if(res[i]!=0)break
    res.shift()
}
console.log(res.join(''));
}
// bigIntSum();

let num1 = 426709752318444
let num2 = 9548125312945454
console.log(num1+num2);

// 对于大数问题，可以用BigInt()和toString来解决
let b = BigInt("9007199254740992")  //这里传入的是字符串是因为Oj在读取每行内容的时候是以字符串形式读取的，当然参数也可以是数值型
b = b + 1n
console.log(Number(b));//9007199254740992
console.log(parseInt(b)); //9007199254740992
// toString方法将大数变成字符串，且大数的最后一位没有n
console.log(b.toString()); //9007199254740993

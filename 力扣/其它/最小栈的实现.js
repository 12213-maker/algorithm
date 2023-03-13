//设计一个栈 , 让出栈 , 入栈 , 输出栈内的最小值的时间复杂度都是O(1)
let arr = [4,7,3,8,2,5]

let len = arr.length 
let len1 = arr.length 
var min
let A = []
let B = []
//让元素都入栈 , 栈A和栈B都造好了

while(len){
    if(len == len1)
    {
        min = arr[0]
        B.push(min)
    }

    let num = arr.shift()
    A.push(num)

    //每一次进栈的时候都和min作比较 , 小的放入栈B
    
    if(num<B[B.length-1]){
        B.push(num)
    }
    len--
}

//出栈 , 出栈的与 B 最小的相等 B也出栈
let deleteA = ()=>{
    let num = A.pop()
    if(num==B[B.length-1])
    B.pop()
}

//入栈 , 入栈的与 B 最小的相等 B也入栈
let pushA = (data)=>{
    A.push(data)
    if(data<B[B.length-1])
    B.push(data)
}

//输出栈A中最小的值
let pushmin = ()=>{
    return B[B.length-1]
}

console.log(A);
console.log(pushmin());//输出A中最小的
pushA(1)
console.log(A);
console.log(pushmin());//输出A中最小的
deleteA()
console.log(A);
console.log(pushmin());//输出A中最小的
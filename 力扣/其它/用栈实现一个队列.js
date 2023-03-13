let arr1 = []
let arr2 = []


let addi = (i)=>{
    arr1.push(i)
}

//出队
let deletei = ()=>{
    if(arr2.length==0){
        if(arr1.length==0){
            return null
        }
        transfer()
    }
    return arr2.pop()
}

//把a中得元素全部复制到b中
let transfer = ()=>{
    while(arr1.length!=0)
    arr2.push(arr1.pop())
}

addi(1)
addi(2)
addi(3)
addi(4)
addi(5)
console.log(arr1)
console.log(deletei());
console.log(deletei());
console.log(arr2);
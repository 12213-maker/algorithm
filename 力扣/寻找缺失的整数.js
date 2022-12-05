

//找出arr数组中  出现次数  为奇数次的数 , 不止一个

//如果只有一个出现次数是奇数的数的话 , 我们只需要对整个数组进行异或运算 , 算出来的结果就是奇数

//如果有两个出现次数是奇数的数的话 , 我们就需要先对整个数组进行异或运算 , 
//根据运算结果把元素组分成两个部分 , 然后再依次进行异或运算


let arr = [4,1,2,2,333,1,4,23333]
//进行异或运算的函数
let findLostNum = (arr)=>{
    let result = arr.sort((a,b)=>a-b).reduce((a,b)=>{
        return a^b
    })
    return result
}


//把数组分成两个部分再进行异或运算
let apartArr = (arr)=>{
    if(findLostNum(arr)==0)
    return '测试案例不符合题意'
    //先对整个数组进行异或运算
    let xor = findLostNum(arr).toString(2)

    //接下来用位运算来找到不同的部分
    let separator = 1
    while (0==(xor&separator)){
        separator<<=1
    }
    //现在separator找到了第一个二进制中相同位置不同的数


    //让mark 指向数组的第一个数
    let result = new Array(2)
    //根据xor的结果把arr分开
    arr.forEach((item)=>{
        //找到符合条件的值就让mark++
        if((item&separator)==0){
            result[0]^=item
        }
        else{
            result[1]^=item
        }        
    })


    return result

}


console.log(apartArr(arr));
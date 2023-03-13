// function twoSum( numbers ,  target ) {
//     //这个是要返回的数组
//     let arr = []
//     let map = new Map()
//     // write code here
//     for(let index in numbers){
//         map.set(index,numbers[index])
//     }
//     //把数组变成一个map对象
//     //现在想要他根据value从大到小排序 , 首先转换为数组对象
//     var arrayObj = Array.from(map)
//     arrayObj.sort((a,b)=>a[1]-b[1])
//     //right和left都是下标
//     let right = arrayObj.length-1
//     let left = 0
//     let left_value = arrayObj[left][1]
//     let left_index = arrayObj[left][0]
//     let right_value = arrayObj[right][1]
//     let right_index = arrayObj[right][0]
//     while(left<right){
//         //先找到需要进行判断的left和right
//         if(left_value+right_value==target){
//             arr.push(left_index)
//             arr.push(right_index)
//             break
//         }else if(left_value+right_value>target){
//             right--
//             right_value = arrayObj[right][1]
//             right_index = arrayObj[right][0]
//         }else{
//             left++
//             left_value = arrayObj[left][1]
//             left_index = arrayObj[left][0]
//         }
//     }
    
//     return arr.sort((a,b)=>{return a-b})
    
// }


//看看别人写的哈希
function twoSum(numbers,target){
    if(numbers.length==0)return
    const map = new Map()
    for(let i=0;i<numbers.length;i++){
        if(map.has(target-numbers[i]))
        return [map.get(target-numbers[i])+1,i+1]
        else
        map.set(numbers[i],i)
    }
}

let num = [3,2,4]
console.log(twoSum(num,6));
var arr = [1, 2, 2, 3,2]

//使用set
// console.log([...new Set(arr)]);

//使用foreach+indexof
const foreach_indexof_unsame = (nums)=>{
    let result = []

    nums.forEach(element => {
        result.indexOf(element)===-1?
        result.push(element):''
    });
    return result
}
// console.log(map_unsame(arr));

//使用reduce
const reduce_unsame = (nums)=>{
    return nums.reduce((pre,nex)=>{
        pre.indexOf(nex)==-1?
        pre.push(nex):''
        return pre
    },[])
}
console.log(reduce_unsame(arr));
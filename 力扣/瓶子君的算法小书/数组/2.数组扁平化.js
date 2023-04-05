
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

//快捷方法：使用es6的flat,不会改变原数组
//这样是不行的，因为只扁平化了第一层
// console.log(arr.flat(),arr);
//这样才可以扁平完整
// console.log(arr.flat(Infinity));

//利用reduce + dfs 将问题分解
const flatFun = (arr)=>{
    return Array.isArray(arr)?
    //利用dfs来分解问题
    arr.reduce((pre,nex)=>[...pre,...flatFun(nex)],[]):[arr]
}
console.log(flatFun(arr));



//实现flat函数

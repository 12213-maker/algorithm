/**
 * @param {string} s
 * @return {boolean}
 */

 var isValid = function(s) {
    if(s.length<=1){
        return false
    }
    if(s.charAt(0)===')'||s.charAt(0)===']'||s.charAt(0)==='}'){
        return false
    }

    //想了一下，遇到左符号就进栈，遇到右符号就出栈，最后判断栈是否为空
    const map = new Map([
        ['(',')'],
        ['[',']'],
        ['{','}']
    ])
    let arr = []
    for(let i of s){
        //左符号就进栈
        if(map.has(i)){
            arr.push(map.get(i))
        }
        //遇到右符号判断一下是否跟当前栈顶元素相等
        //相等就出栈
        else if(arr[arr.length-1]===i){
            arr.pop()
        }
        //不相等就返回false
        else{
            return false
        }
    }
    return arr.length===0?true:false
};

let s = "{([])}[]([])"
console.log(isValid(s));
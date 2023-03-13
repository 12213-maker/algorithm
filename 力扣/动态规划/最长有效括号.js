// var longestValidParentheses = function(s) {
//     //用栈的想法来实现
//     let max = 0
//     let arr = []
//     let flag = -1
//     let map = new Map([
//         ['(',')'],
//         ['{','}'],
//         ['[',']']
//     ])

//     for(let i=0;i<s.length;i++){
//         //遇到左符号就进栈，遇到右符号就出栈,栈内没有左符号的时候就把右符号置为开头重新计算
//         if(map.has(s[i])){
//             //只用记录索引，因为要求的只是最大的值
//             arr.push(i)
//         }else{
//             //遍历到右符号且栈中无值的时候改变flag
//             if(arr.length==0){
//                 flag = i
//             }
//             else{
//                 arr.pop()
//                 let len
//                 if(arr.length==0){
//                      len = i - flag
//                 }else{
//                      len = i - arr.slice(arr.length-1)
//                 }
//             max = len>max?len:max
//             }
//         }
//     }
//     return max

// };
// s = "()"
// console.log(longestValidParentheses(s));



//使用动态规划来解决这道题
// const longestValidParentheses = (s) => {

//     let maxLen = 0;
//     const len = s.length;
//     const dp = new Array(len).fill(0);
//     for (let i = 1; i < len; i++) {
//         if (s[i] == ')') {
//             if (s[i - 1] == '(') {
//                 if (i - 2 >= 0) {
//                     dp[i] = dp[i - 2] + 2;
//                 } else {
//                     dp[i] = 2;
//                 }
//             } else if (s[i - dp[i - 1] - 1] == '(') {
//                 if (i - dp[i - 1] - 2 >= 0) {
//                     dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
//                 } else {
//                     dp[i] = dp[i - 1] + 2;
//                 }
//             }
//         }
//         maxLen = Math.max(maxLen, dp[i]);
//     }
//     return maxLen;
// };


// s = "([}}])"
// // console.log(longestValidParentheses(s));


// function validParentheses(str) {
//     if (str.length % 2 !== 0) {
//         return false;
//     }
//     let sum = 0
//     let arr = []
//     let text = /\[|\(|\{/g;
//     const map = new Map([
//         ['{', '}'],
//         ['[', ']'],
//         ['(', ')']
//     ])
//     for (let item of str) {
//         //左符号
//         if (item === '(' || item === '[' || item === '{') {
//             arr.push(item)
//         } else {
//             //遇到了右符号的情况
//             const pre = arr.slice(arr.length - 1)
//             if (map.get(...pre) !== item) {
//                 console.log(map.get(...pre), item, map.get(...pre) !== item);
//                 return false;
//             } else {
//                 arr.pop()
//                 sum++
//             }
//         }
//     }
//     return [arr.length == 0 ? true : false, sum]
// }

// console.log(validParentheses(s));



// var longestValidParentheses = function (s) {
// //我懂了可以用栈来做，会很简单,左符号和右符号都要分情况讨论
// let max = 0
// let stack = []
// let len = 0
// for(let i=0;i<s.length;i++){
//     //遇到左符号就进栈
//     if(s[i]==='('){
//         stack.push(s[i])
//     }else{
//     //遇到右符号的话
//     //1.如果有左符号就一起弹出max++
//     //2.如果没有左符号的话，就清空stack，然后从下一个左符号开始进栈
//         let stackTop = stack.slice(stack.length-1)
//         if(stackTop=='('){
//             stack.pop()
//             //这里len的计算还要分两种情况，一是栈中还存在左符号的情况
//             //不行的这样还是太草率了，没有实际情况实际讨论
//             if(stack.length===0){
//                 len+=2
//             }else{
//                 if(i===s.length)
//                 len=2
//             }   
//         }else{
//             stack=[]
//             len=0
//         }
//     }
//     console.log(len,i);
//     max = max>len?max:len
// }
// return max




//     //用下标来计算长度，不用弹出的
//     let stack = [-1]
//     let max = 0
//     for (let i = 0; i < s.length; i++) {
//         //遇到左符号的时候，进栈
//         if (s[i] == '(') {
//             stack.push(i)
//         } else {
//             //遇到右符号先弹出stack栈顶元素
//             stack.pop();
//             if(stack.length){
//                 var len = i - stack[stack.length-1];
//                 max = max>len?max:len;
//             }else{
//                 stack.push(i)
//             }
//         }
//     }
//     return max;
// };

const longestValidParentheses = (s) => {
    let maxLen = 0;
    const len = s.length;
    const dp = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
        if (s[i] == ')') {
            if (s[i - 1] == '(') {
                if (i - 2 >= 0) {
                    dp[i] = dp[i - 2] + 2;
                } else {
                    dp[i] = 2;
                }
            } else if (s[i - dp[i - 1] - 1] == '(') {
                if (i - dp[i - 1] - 2 >= 0) {
                    dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
                } else {
                    dp[i] = dp[i - 1] + 2;
                }
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;

};

s = "()(()"
console.log(longestValidParentheses(s))
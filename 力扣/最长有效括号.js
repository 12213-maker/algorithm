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
//             // console.log(arr);
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

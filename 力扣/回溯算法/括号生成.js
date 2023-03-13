/* 
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */

 //这个没有回溯，只是把符合答案的题解都保存了起来，好像是只用了dfs深度优先遍历
 var generateParenthesis = function(n) {
    const res = []
    const dfs = (lRemain,rRemain,str)=>{
        //字符串构建完成
        if(str.length===2*n){
            res.push(str)
            return
        }
        //只要有左符号就可以选
        if(lRemain>0){
            dfs(lRemain-1,rRemain,str+'(')
        }
        //当右符号比左符号多的情况下才可以选择
        if(lRemain<rRemain){
            dfs(lRemain,rRemain-1,str+")")
        }
    }
    
    dfs(n,n,'')
    return res
};
/* 
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

输入：nums = [0]
输出：[[],[0]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//这是我的题解，原来我的想法是回溯，但是没有执行好
//  var subsets = function(nums) {
//     let result = []
//     //使用dfs
//     const dfs = (nums,idx)=>{
//         if(idx===nums.length){
//             return []
//         }
//         //不选择当前的数
//         result.push(dfs(nums,idx+1))
//         //选择当前的数
//         result.push([nums[idx],dfs(nums,idx+1)])
//         return  result
//     }
//     return dfs(nums,0)
// };
//下面来看看真正的回溯是怎么写的
/* 
为什么要回溯？因为不是找到一个子集就完事的，
找到一个子集，解释递归，要撤销当前的选择，回到选择前的状态，
做另一个选择——————不选当前的数，基于不选，往下递归，继续生成子集
回到上一步，才可以在包含解的空间树中把路走完，回溯出所有的解
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var nums = [1,2,3];
//额，正确的回溯，通过dfs构建一颗符合条件的树，再通过回溯来找到符合条件的解
//1 . 这个解法是回收最后全部的叶节点
//  var subsets = function(nums) {
//     let result = []
//     const dfs = (list,idx)=>{
//         if(idx==nums.length){
//             console.log(list);
//             result.push(list);
//             return
//         }
//         //选择这个数
//         list.push(nums[idx])
//         dfs(list,idx+1)
//         //回溯
//         list.pop()
//         dfs(list,idx+1)
//     }
//     dfs([],0)
//     return result
// };

// console.log(subsets(nums));


//2 . 下面这个解法是在递归的过程中就把符合题解的答案收集起来
/* 
这道题说：回溯模板：
void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
*/
//还是第一种思想比较适合我
var subsets = function(nums) {
    let result = []
    let path = []
    function backtracking(startIndex) {
        result.push(path.slice())
        for(let i = startIndex; i < nums.length; i++) {
            //取一个值
            path.push(nums[i])
            //在取这个值的前提下，找到接下来的解
            backtracking(i + 1)
            //不取这个值
            path.pop()
        }
    }
    backtracking(0)
    return result
};
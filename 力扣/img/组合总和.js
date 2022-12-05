var combinationSum = function (candidates, target) {
    //回溯+减枝
    let result = []
    //要用一个idx来标志遍历到当前candidates中的哪一个值
    const sum = (arr, target1, idx) => {
        if(idx===candidates.length)return
        if(target1==0){
            result.push(arr)
            return
        }
        //不选这一次的值
        sum(arr, target1, idx + 1)
        //选中这一次的值
        if (target1 >= candidates[idx]) {
            sum([...arr,candidates[idx]], target1 - candidates[idx], idx)
        }
    }
    sum([], target, 0)
    return result
};

console.log(combinationSum([1, 2], 4));




//看一看答案跟我有什么区别，为什么我的就是行不通

// var combinationSum = function (candidates, target) {
//     const ans = []
//     const dfs = (target, combine, idx) => {
//         if (idx === candidates.length) {
//             return;
//         }
//         if (target == 0) {
//             ans.push(combine)
//             return
//         }
//         //直接跳过
//         dfs(target, combine, idx + 1)
//         //选择当前数
//         if (target - candidates[idx] >= 0) {
//             dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
//         }
//     }

//     dfs(target, [], 0);
//     return ans
// };
// console.log(combinationSum([1, 2], 4));
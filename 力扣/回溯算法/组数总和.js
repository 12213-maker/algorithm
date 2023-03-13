// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，
// 并以列表形式返回。你可以按 任意顺序 返回这些组合。

// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  // //使用回溯
  // let ans = []
  // const dfs = (target,arr,idx)=>{
  //     //递归停止的条件
  //     if(idx==candidates.length){
  //         return
  //     }
  //     //找到符合条件的值
  //     if(target==0){
  //         ans.push(arr)
  //         return
  //     }

  //     //不选择这次遍历到的值
  //     dfs(target,arr,idx+1)
  //     //选择这次遍历到的值
  //     if(target>=candidates[idx]){
  //         dfs(target-candidates[idx],[...arr,candidates[idx]],idx)
  //     }
  // }
  // dfs(target,[],0)
  // return ans

  let ans = []
  let sum = 0
  function dfs(arr,index){
      sum = arr.length && arr.reduce((acc,cur)=>{
              return acc+cur
          })
          if(sum === target){
              ans.push([...arr])
              return ;
          }
          if(sum>target){
              return ;
          }
          //要在这里限制不能选择同层左边的数
      for(let i=index;i<candidates.length;i++){
          arr.push(candidates[i])
          dfs(arr,i)
          //撤销选择，进入下一个i
          arr.pop()
      }
  }
  dfs([],0)
  return ans

};

var candidates = [2,3,6,7], target = 7;
console.log(combinationSum(candidates,target));
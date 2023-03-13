/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    let dp = []
    if(intervals.length==0){
        return dp
    }
    dp[0] = intervals[0]
    for(let i=1;i<intervals.length;i++){
        let left = dp[i-1][1]
        let right = intervals[i][0]
        console.log(left,right);
        if(left>=right){
            dp[i] = [dp[i-1][0],intervals[i][1]]
            dp.splice(i-1,1)
        }else{
            dp[i] = intervals[i]
        }
    }
    return dp
};

let intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals));

var lengthOfLongestSubstring = function(s) {
    //右指针
    let rk = 0
    //子串的最大长度
    let ans = 0
    let result = ''
    let n = s.length
    //滑动窗口
    let occ = new Set()
    
    //对字符串进行遍历
    for(let i=0;i<n;i++){
        if(i!==0){
            //左指针在每次遍历的时候都自动向右移动一个
            occ.delete(s.charAt(i-1))
        }
        //如果不重复就加入滑动窗口
        while(rk<n&&!occ.has(s.charAt(rk))){
            occ.add(s.charAt(rk))
            rk++
        }
        //直到有重复才跳出循环，获取最大的ans
        result = occ.size>ans?Array.from(occ).join(''):result
        ans = Math.max(ans,occ.size)
    }
    return result
};

console.log(lengthOfLongestSubstring('babad'));

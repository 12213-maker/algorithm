function returnMax(s){
  s = s.split('')
    //寻找最长回文子串的思想就是，传入中心值，再从中心值对比到两端，分奇偶的情况
    let maxStr = []
    function isRevert(left,right){
      
        while(left>=0&&right<=s.length-1){
          console.log(left,right,s[left]===s[right]);
            if(s[left]===s[right]){
                if(right-left>=maxStr.length){
                    maxStr = s.slice(left,right+1)
                }
            }else{
                break;
            }
            left--
            right++
        }
    }
    for(let i=0;i<s.length;i++){
        isRevert(i,i)
        isRevert(i,i+1)
    }
    return maxStr.join('')
}
console.log(returnMax('ababddd'));
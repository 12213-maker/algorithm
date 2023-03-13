/**
 * @param {string} s
 * @return {string}
 */


 var longestPalindrome = function(s) {
    let max = ''
    let left = null
    let right = null

    //遍历整个字符串，当字符串长度为奇数的时候，left = right = i
    //当字符串长度为偶数的时候， left = i ， right = i+1
    for(let i=0;i<s.length;i++){
        //偶数奇数情况都处理，反正只需要最大回文子串
        revert(i,i)
        revert(i,i+1)
    }
    

    function revert(left,right){

        while(left>=0&&right<=s.length-1&&s.charAt(left)===s.charAt(right)){
            center = s.substring(left,right+1)
            left--
            right++
        }
        max = center.length>max.length?center : max
    }

    //要注意的是当字符串为奇数的时候的情况和字符串为偶数的情况是不一样的
    //现在这版是适用于字符串为奇数情况的时候
    // for(let i=0;i<s.length;i++){
    //     //把每次遍历到的字符作为中心字符
    //     i>0 ? left = i-1 : left = null
    //     i>=s.length-1 ? right = null : right = i+1
    //     //当左右指针没有超过字符串，以及左右指针的值都相等的时候
    //     while(left>=0&&right<=s.length-1&&s.charAt(left)==s.charAt(right)){
    //         center = s.substring(left,right+1)
    //         left--
    //         right++
    //     }
    //     max = center.length>max.length?center : max
    // }
    return max

};

console.log(longestPalindrome('babad'));
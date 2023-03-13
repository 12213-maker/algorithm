var longestPalindrome = function(s) {
    let i=2
    let res = s.split('')
    let flag=1
    while(res.length!=0){
        //reverse是会改变元素组的所以每次都是相等的
        for(let i=0;i<res.length;i++){
            if(res[i]!=res[res.length-i-1])
            flag=0
        }
        if(flag==1)
        return res.join()
        
        else{
            //截取s 先从左边开始截取,然后截取右边
            //偶数截取左边
            if(i%2==0){
                console.log(res.shift(),'左边');
                i++
            }
            //奇数截取右边
            else{
                i++
                console.log(res.pop(),'右边');
            }
        }
    }
};

console.log(longestPalindrome('babad'));

var isMatch = function (s, p) {
    if (p.indexOf('*') === -1 && p.indexOf('.') === -1 && s !== p) {
        return false
    }
    if (p === '.*') {
        return true
    }

    for (let i = 0; i < s.length; i++) {
        
        if (p.charAt(i)==='.') {
            p = p.replace('.', s[i])
        }

        let Pnum = p.charAt(i)
        if (Pnum === '*') {
            //遇到*的时候就跟前一个字符相等
            let left = p.charAt(i - 1)
            let right = p.charAt(i + 1)

            //字符串从i开始，除了遇到left和right的值外，遇到其他的值都false
            for(let j=i;j<s.length;j++){
                if(s[j]!='.'){
                    if(s[j]!=left&&s[j]!=right){
                        return false
                    }
                    if(s[j]===right){
                        i=j
                        break
                    }
                }else{
                    if(s[j]!=left){
                        i=j
                    }
                }
                
            }

            //这里是只考虑了只有一个*的情况
            // let Snum = [...new Set(s.slice(i).split(''))].join('')
            // return Snum.length!=1?false:true
        }
        if (s[i] !== p.charAt(i)) {
            return false
        }
    }
    return true
};

console.log(isMatch('cccaaa', 'cc*.a*'));
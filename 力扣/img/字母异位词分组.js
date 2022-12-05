/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    //要返回的结果
    let result = []
    let empty = 0
    
    //所有异位词
    let arrs = []
    //首先要获得一个单词的所有异位词
    const dfs = (str,arr,len)=>{
        if(arr.length === len){
            arrs.push(arr.join(''))
            return
        }
        if(str.length==0){
            return
        }
        for(let i=0;i<str.length;i++){
            let cur = str[i]
            let idxy = str.indexOf(cur)
            let newstr = idxy!==-1?(str.substring(0,idxy)+str.substring(idxy+1)):''
            //选过的就不能再选了
            dfs(newstr,[...arr,cur],len)
        }
        return arrs
    }

    for(let i=0;i<strs.length;i++){
        let str = strs[i]
        if(str==''){
            empty++
            continue
        }
        let ans = [str]
        //获取当前字符的所有排列
        const sort_arrs = dfs(str,[],str.length)
        arrs = []
        for(let j =i+1;j<strs.length;j++){
            if(sort_arrs.indexOf(strs[j])!=-1){
                ans.push(...strs.splice(j--,1))
            }
        }
        result.push(ans)
    }
    if(empty){
        result.push(new Array(empty).fill(""))
    }
    return result
};


strs = ["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"]
console.log(groupAnagrams(strs));
groupAnagrams(strs)




//其实下面的代码就可以解决了，做题的时候还是要找好解题的方法。。。
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};
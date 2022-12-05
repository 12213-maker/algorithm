var groupAnagrams = function(strs) {
    let flag = 0
    //使用map存储,前一个存储sort过的值，后面跟上一个数组，保存符合条件的值
    let map = new Map()
    for(let str of strs){
        let origin_str = Array.from(str).sort().toString()
        if(map.has(origin_str)){
            let list = map.get(origin_str)
            list.push(str)
            map.set(origin_str,list)
        }else{
            map.set(origin_str,[str])
        }
    }
    return [...map.values()]
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs));
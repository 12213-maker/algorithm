/* 
浏览器缓存淘汰策略：
    1. FIFO 先进先出
    2. LFU 最少使用
    3. LRU 最近最少使用 ： 核心思想： 如果数据最近访问过，那么将来被访问的概率也更高
*/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.max = capacity
    //使用map的话就无法保证顺序了
    this.catch = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let flag = false
    let ans = -1
    this.catch.forEach((item, index) => {
        if (item&&item[0]===key) {
            //找到了之后还要重制
            flag = true
            ans = item[1]
        }
    })
    if (flag) {
        this.catch.pop()
        this.catch.unshift([key, ans])
    }
    return ans
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let len = this.catch.length
    //先看一看catch中有没有key
    this.catch.forEach((item,index)=>{
        if(item[0]==key){
            this.catch.splice(index,1,[key,value])
        }
        return;
    })

    //如果超过了还要设置
    if (len >= this.max) {
        this.catch.pop()
    }
    this.catch.unshift([key, value])
    return this.catch
};


var cache = new LRUCache(2)
console.log(cache.put(2, 1));
console.log(cache.put(1, 1));
console.log(cache.get(2));       // 返回  1
console.log(cache.put(4, 1));   // 该操作会使得密钥 2 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(2));       // 返回 -1 (未找到)
// console.log(cache.put(4, 4)  ); // 该操作会使得密钥 1 作废
// console.log(cache.get(1));    // 返回 -1 (未找到)
// console.log(cache.get(3));     // 返回  3
// console.log(cache.get(4));       // 返回  4



// var cache = new LRUCache(1)
// console.log(cache.put(2, 1));
// console.log(cache.get(2));      
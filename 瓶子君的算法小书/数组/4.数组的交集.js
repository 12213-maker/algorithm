let nums1 = [1,2,2,1], nums2 = [2,2]

//这道题其实有很多解法
var intersection = function(nums1, nums2) {
    let result = []
    //遍历一个去重数组，重复的跳过
    nums1.forEach((item)=>{
        if(nums2.indexOf(item)!==-1){
            result.push(item)
        }
    })
    return [...new Set(result)]
};
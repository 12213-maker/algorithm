/* 
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，
分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，
nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
*/



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//从前面开始放会有很多问题
var merge = function (nums1, m, nums2, n) {
    let index1 = 0
    let index2 = 0
    if (m == 0) {
        nums1.splice(0, nums1.length, ...nums2)
        return
    }
    while (index1 < m + n && index2 < n) {
        if (nums1[index1] >= nums2[index2]) {
            nums1.splice(index1, 0, nums2[index2])
            nums1.pop()
            index2++
        }
        index1++
    }
    if (index2 < n) {
        // nums1.splice(n-index2+2)
        nums1.push(...nums2.slice(index2))
    }
    return nums1
};

let nums1 = [0], m = 0, nums2 = [1], n = 1
console.log(merge(nums1, m, nums2, n));

//试着从后面开始放
const merge2 = function (nums1, m, nums2, n) {
    //nums1的最后一个值
    let len1 = m - 1
    let len2 = n - 1
    let len = m + n - 1
    while(len2>=0){
        //nums1已经放完的情况
        if(len1<0){
            nums1[len--]=nums2[len2--]
            continue
        }
        nums1[len--] = nums1[len1]>=nums2[len2]?nums1[len1--]:nums2[len2--]
    }
}
console.log(merge2(nums1, m, nums2, n));
/**
 * 
 * @param num int整型一维数组 
 * @return int整型二维数组
 */

//这道题就是不停的选出剩下的所有可能的数字 , 直到选到最后一个数
//再把这些选出来的可能都放进一个数组里面

function permuteUnique(num) {
    // 这是最后要返回的数组
    let res = []
    //这是每次可能的数组
    let arr = []
    let count = []
    //把arr填满 , 再在里面进行数字的交换和判断
    for (let i of num) {
        arr.push(i)
    }
    //递归遍历所有的arr的可能
    backtrack(num, res, arr, count, 0)
    console.log(res);
    return res
}

function backtrack(num, res, arr, count, first) {
    //结束条件是遍历到最后一个数字 , 那么这种arr的可能就完了
    if (first === num.length-1) {
        return res.push(arr)
    }
    for (let i = first; i < num.length; i++) {
        console.log(first,i,count);
        if (count.indexOf(num[i]) != -1) {
            continue
        } else {
            count.push(num[i])
            //开始做出所有的可能
            swap(arr, first, i)
            //继续递归 , 直到找到当前的arr
            backtrack(num, res, arr, count, first + 1)
            //为了方便回溯 , 还原数组
            swap(arr, first, i)
        }
    }
}
function swap(num, first, i) {
    let a = num[first]
    let b = num[i]
    num.splice(first, 1, b)
    num.splice(i, 1, a)
}

permuteUnique([1, 1, 2])

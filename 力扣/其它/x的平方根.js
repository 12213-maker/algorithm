var mySqrt = function (x) {
    let num = Math.floor(x / 2)
    let left = 1
    let right = num
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (mid*mid == x || mid*mid < x && (mid+1)*(mid+1) > x) {
            return mid
        } else if (mid*mid > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
};

console.log(mySqrt(100000000));
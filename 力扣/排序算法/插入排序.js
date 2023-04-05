let num = [2, 8, 6, 5, 1, 2, 3, 4, 5, 6];
function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] <= arr[j - 1]; j--) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }
  return arr
}
console.log(sort(num));
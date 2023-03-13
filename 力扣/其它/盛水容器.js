function maxArea(height) {
  let max = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    let area = (right - left) * (Math.min(height[left], height[right]));
    max = max > area ? max : area;
    height[left] < height[right] ? left++ : right--
  }
  return max
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
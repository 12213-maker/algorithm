function foo(s) {
  let arr = []
  let max = 0
  s.split('').forEach((item) => {
    const idy = arr.indexOf(item)
    if (idy === -1) {
      arr.push(item)
    } else {
      arr.splice(0, idy + 1)
      arr.push(item)
    }
    max = max>arr.length?max:arr.length
  })
  return max
}
console.log(foo("pwwkew"));
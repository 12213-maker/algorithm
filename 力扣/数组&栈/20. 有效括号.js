let s = "()[]{[}"





function isValid(s) {
  let stack = []
  let map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])
  for (let i = 0; i < s.length; i++) {
    //左符号进栈
    if (map.has(s[i])) {
      stack.push(s[i])
    } else {
      if (!stack.length) return false
      let topValue = stack.pop()
      if (s[i] !== map.get(topValue)) return false
    }
  }
  return stack.length === 0 ? true : false
}
console.log(isValid(s));
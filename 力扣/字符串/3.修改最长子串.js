function minStr(str) {
  let len = str.length;
  let centerleft = 0;
  let centerright = 0;
  let count = 2;
  if (len % 2 == 0) {
    centerleft = Math.floor(len / 2) - 1;
    centerright = centerleft + 1;
  } else {
    centerleft = Math.floor(len / 2);
    centerright = centerleft;
  }
  let arr = str.split('');
  let arr2 = str.split('');
  //先判断一下这个字符串是不是回文串
  arr.reverse()
  let isPalindrome = true
  let map = new Map();
  arr.forEach((item, index) => {
    map.set(item, index)
    if (item !== arr2[index]) {
      isPalindrome = false
    }
  })
  map = [...map].sort((a, b) => {
    return b[0].charCodeAt() - a[0].charCodeAt()
  })
  if (isPalindrome) {
    arr2.splice(map[0][1], 1, 'a');
    arr2.splice(arr2.length - 1 - map[0][1], 1, 'a')
  }
  if (!isPalindrome) {
    while (centerleft >= 0 && centerright <= len - 1 && count !== 0) {
      if (arr2[centerleft] !== arr2[centerright]) {
        let leftcode = arr2[centerleft].charCodeAt()
        let rightcode = arr2[centerright].charCodeAt()
        if (leftcode < rightcode) {
          arr2[centerright] = arr2[centerleft]
          count--
        }
      }
      centerleft--
      centerright++
    }
  }
  return arr2.join('')
}

console.log(minStr('abcde'));
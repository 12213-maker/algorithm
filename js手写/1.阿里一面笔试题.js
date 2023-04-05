function compare(ver1, ver2) {
  let arr1 = ver1.split('.')
  let arr2 = ver2.split('.')
  let flag = 0
  let minlen = Math.min(arr1.length, arr2.length);
  for (let i1 = 0; i1 < minlen; i1++) {
    let curNum1 = arr1[i1]
    let curNum2 = arr2[i1]
    if (Number(curNum1) > Number(curNum2)) {
      flag = 1;
      break;
    } else if (Number(curNum1) < Number(curNum2)) {
      flag = -1
      break;
    }
  }
  if (flag === 0 && arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1
  }
  return flag;
}

console.log(compare('10.2.56.6001', '10.2.58.5001')); // => -1
console.log(compare('10.2.56.6001', '10.2.54.5001')); // => 1
console.log(compare('1.11.111', '1.2.3.4')); // => 1
console.log(compare('1.11.111', '1.11.111')); // => 0



// 以下是测试 demo
const data = {
  user_name: 'zhang_san',
  user_info: {
    last_message: 'hello !',
  },
  extra_args: [
    100,
    {
      tag: 'xxx',
      gmt_create_time: '2022-01-01 10:00:00'
    },
  ]
};

const newData = transform(data);
console.log(JSON.stringify(newData, null, 2));

/**
 * 期望输出内容如下：

{
  "userName": "zhang_san",
  "userInfo": {
    "lastMessage": "hello !"
  },
  "extraArgs": [
    100,
    {
      "tag": "xxx",
      "gmtCreateTime": "2022-01-01 10:00:00"
    }
  ]
}

 */
function transform(obj) {
  function changeObj(obj) {
    let newObj = {}
    let keys = Object.keys(obj)
    keys.forEach((item) => {
      let value = obj[item]
      let nextNum
      let newKey2
      let newKey
      let origin = false

      newKey2 = item.split('')
      let underline = item.indexOf('_')
      if (underline === -1) {
        origin = true
      }
      while (underline !== -1) {
        nextNum = newKey ? newKey[underline + 1].toLocaleUpperCase() : item[underline + 1].toLocaleUpperCase()
        newKey2.splice(underline, 2, nextNum)
        newKey = newKey2.join('')
        underline = newKey.indexOf('_')
      }
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          let newValue = []
          value.forEach((curValue) => {
            if (typeof curValue !== 'object') {
              newValue.push(curValue)
            } else {
              newValue.push(changeObj(curValue))
            }
          })
          newObj[newKey] = newValue
        } else {
          newObj[newKey] = changeObj(value)
        }
      } else {
        if (origin) {
          newObj[item] = value
        }
        else {
          newObj[newKey] = value
        }
      }
    })
    return newObj
  }
  return changeObj(obj);
}


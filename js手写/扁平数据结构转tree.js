let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

class tree {
  constructor(id, name, pid, next) {
    this.id = id
    this.name = name
    this.pid = pid
    this.next = next || null
  }
}

function changetoTree(arr) {
  let ans = []
  let children = []
  arr.sort((a, b) => {
    return b.pid - a.pid
  })
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i]
    let newObj = Object.assign({}, obj)
    children.push(newObj)
    //找到树中应该放的位置
    for (let item of children) {
      if (item.pid === newObj.id) {
        newObj.children = newObj.children ? [item, ...newObj.children] : [item]
      }
    }
    if (newObj.pid === 0) {
      ans.push(newObj)
    }
  }
  return ans
}
//递归转换
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
}

/**
* 转换方法
*/
const arrayToTree = (data, pid) => {
  const result = [];
  getChildren(data, result, pid)
  return result;
}

console.log(changetoTree(arr));
// console.log(arrayToTree(arr, 0));
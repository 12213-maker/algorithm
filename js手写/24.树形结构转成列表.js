const data = [
  {
    id: '1',
    name: '父节点1',
    children: [
      {
        id: '1-1',
        name: '子节点1-1',
        children: [
          {
            id: '1-1-1',
            name: '子节点1-1-1'
          },
          {
            id: '1-1-2',
            name: '子节点1-1-2',
            children: [
              {
                id: 'finally',
                name: 'finally'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '父节点2',
    children: [
      {
        id: '2-1',
        name: '子节点2-1'
      }
    ]
  }
]

function treeToList(data) {
  let ans = []
  let len = data.length
  len.forEach(item => {
    ans.push(...Tolist(item))
  });
  function Tolist(obj) {
    let ans2 = []
    let objlen = Object.keys(obj)
    objlen.reduce((acc, cur) => {
      let newobj = {}
      if (typeof obj[key] !== 'object') {
        newobj[key] = obj[key]
      } else {
        Tolist()
      }
    }, [])
  }
  return ans
}

function treeToList2(data) {
  let res = []
  const dfs = (tree, id) => {
    tree.forEach((item) => {
      if (item.children) {
        dfs(item.children, item.id)
        delete item.children
      }
      if (id) {
        item.parent = id
      }
      res.push(item)
    })
  }
  dfs(data, null)
  return res
}
// console.log(treeToList2(data));

function myTreeToList(data) {
  let ans = []
  function tolist(data, parentId) {
    data.forEach((cur) => {
      if (cur.children) {
        tolist(cur.children, cur.id)
        delete cur.children
      }
      if (parentId) {
        cur.parentId = parentId
      }
      ans.push(cur)
    })
  }
  tolist(data, null)
  return ans
}

function myTreeToList3(dataOuter, id) {
  let ans = []
  dataOuter.forEach((data) => {
    let newArr = {}
    if (typeof data !== 'object') {
      throw new Error('请传入数组');
    }
    let keys = Object.keys(data);
    keys.forEach((item) => {
      let curValue = data[item]
      if (typeof curValue !== 'object') {
        newArr[item] = curValue
      } else {
        ans.push(...myTreeToList3(curValue, data.id))
      }
    })
    if (id) {
      newArr.parent = id
    }
    ans.push(newArr)
  })
  return ans;
}
console.log(myTreeToList3(data, '最外层'));
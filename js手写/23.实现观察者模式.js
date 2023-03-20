//观察者模式

let map = new Map()
class Pubsub {
  constructor() {

  }
  subscribe(name, fn) {
    if (map.has(name)) {
      map.set(name, [...map.get(name), fn])
    } else {
      map.set(name, [fn])
    }
  }
  delete(name, fn) {
    let arrfn = map.get(name)
    let ans = []
    arrfn.forEach(item => {
      if (item !== fn) {
        ans.push(item)
      }
    });
    map.set(name, ans)
  }
  publish(name, value) {
    const arrfn = map.get(name)
    arrfn.forEach((item)=>{
      item(name,value)
    })

  }
}

const pubsub = new Pubsub()
pubsub.subscribe('example1', function (topics, data) {
  console.log(topics + ':' + data);
})
const fn = function (topics, data) {
  console.log(topics + '********' + data);
}
pubsub.subscribe('example1', fn)
pubsub.publish('example1', 'showme')
pubsub.delete('example1', fn)
console.log('--------删除fn---------');
pubsub.publish('example1', 'showme')
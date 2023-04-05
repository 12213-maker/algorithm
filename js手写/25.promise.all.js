function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new Error('请传入数组')
    }
    var resolvedCounter = 0
    var promiseNum = promises.length
    var resolvedResult = [];
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          resolvedCounter++
          resolvedResult[i] = value
          if (resolvedCounter === promiseNum) {
            return resolve(resolvedResult)
          }
        },
        (error) => {
          return reject(error)
        })
    }
  })
}
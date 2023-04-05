function myAjax(method, url, data) {
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function () {
      //0: 未open
      //1：未send ， 服务器连接已建立
      //2：请求已接收，但是没有处理
      //3：处理中，可以返回一些数据
      //4：处理完成，数据全部返回
      if (xhr.readyState != 4) return;
      if (xhr.status === 200 || xhr.status == 304) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.responseText)
      }
    }
    xhr.send(data);
  })
}

function myAjax2(method, url, data) {
  new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url)
    xhr.onreadystatechange = function () {
      if (xhr.status === 200 && xhr.readyState == 4) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.responseText)
      }
    }
    xhr.send(data)
  })

}
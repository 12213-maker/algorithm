function mysplit(str){
  let strArr = str.split('.')
  let arr = []
  strArr[0].split('').reverse().forEach((item,index) => {
    if((index+1)%3==0){
      item = ','+item
    }
    arr.push(item)
  });
  return arr.reverse().concat('.'+strArr[1]).join('')
}
console.log(mysplit('1284646465542190.30'))
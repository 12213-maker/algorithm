var a = {
  name: 'a',
  objKid: b
}
var b = {
  name: 'b',
  objKid: a
}
a.objKid = b
b.objKid = a

function isC(a, b) {
  if (typeof a !== 'object' || typeof b !== 'object') {
    return
  }
  for(let item1 in a){
    if(typeof a[item1] !== 'object'){
      continue;
    }
    for (const item2 in b) {
      if(typeof b[item2] !=='object'){
        continue;
      }

      if(a[item1]===b&&b[item2]===a){
        return true;
      }
    }
  }
  return false
}
console.log(isC(a,b));
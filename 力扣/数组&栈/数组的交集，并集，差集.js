// let a=new Set([1,2,3,4,5]);
// let b=new Set([1,2,3,4,5,6,7,8,9]);
// let arr = Array.from(new Set([...a, ...b]));
// console.log('arr',arr);

// let a=new Set([1,2,3,4,5]);
// let b=new Set([1,2,3,4,5,6,7,8,9]);
// let arr = Array.from(new Set([...b].filter(x => a.has(x))));
// console.log(arr);

// let a=new Set([1,2,3,4,5]);
// let b=new Set([1,2,3,4,5,6,7,8,9]);
// let arr = Array.from(new Set([...b].filter(x => !a.has(x))));
// console.log('arr',arr);



let a=[{id:1,a:123,b:1234},{id:2,a:123,b:1234}];
let b=[{id:1,a:123,b:1234},{id:2,a:123,b:1234},{id:3,a:123,b:1234},{id:4,a:123,b:1234}];
let arr = [...b].filter(x => [...a].some(y => y.id === x.id));
console.log('arr',arr)
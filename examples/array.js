/* let data = [1,2,3,4,5], sum = 0;
let a = data.forEach(value => {sum += value;})
console.log(sum);// 15
console.log(data); // [ 1, 2, 3, 4, 5 ]
console.log(a); // undefined
data.forEach(function(v, i, a) { a[i] = v + 1; })
console.log(data); //[ 2, 3, 4, 5, 6 ] */

/* let a = [1,2,3];
b = a.map(x => x*x)
console.log(a); // [ 1, 2, 3 ]
console.log(b); // [ 1, 4, 9 ] */

/* let a = [5,4,3,2,1];
b = a.filter(x => x < 3)
c = a.filter((x,i) => i%2 === 0)
console.log(a); // [ 5, 4, 3, 2, 1 ]
console.log(b); // [ 2, 1 ]
console.log(c); // [ 5, 3, 1 ] */

/* let a = [1,[2,3,[4,[5]]]];  
b = a.flat(Infinity);
console.log(b);

function flatten(arr){
  let res = [];
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
c = flatten(a)
console.log(c); */

/* let a = [1, 2, 3];
let b = a.concat(4, 5);
let c = a.concat([4, 5],[6, 7]);
let d = a.concat(4, [5, [6, 7]]);
console.log(a); // [1, 2, 3] 原始数组没有改变
console.log(b); // [1, 2, 3, 4, 5]
console.log(c); // [1, 2, 3, 4, 5, 6, 7] 数组被打平了
console.log(d); // [1, 2, 3, 4, 5, [6, 7]] 但不会打平嵌套数组 */

/* let a = [1, 2, 3];
let b = a.push(4, 5);
let c = a.push([4, 5],[6, 7]);
let d = a.push(4, [5, [6, 7]]);
// 原始数组被改变
console.log(a); //[ 1, 2, 3, 4, 5, [ 4, 5 ], [ 6, 7 ], 4, [ 5, [ 6, 7 ] ] ]
console.log(b); // 5 返回数组新长度
console.log(c); // 7 不会打平数组参数
console.log(d); // 9 */

/* let a = [1,2,3,4,5,[4,5],[6,7],4,[5,[6, 7]]];
let b = a.pop(); // 返回删除的值
console.log(a); // [ 1, 2, 3, 4, 5, [ 4, 5 ], [ 6, 7 ], 4 ]
console.log(b); // [ 5, [ 6, 7 ] ] */

/* let a = [1,2,3,4,5];
let b = a.slice(0,3);
let c = a.slice(3);
let d = a.slice(1,-1);
let e = a.slice(-3,-2);
let f = a.slice(-1);
console.log(a); // [ 1, 2, 3, 4, 5 ] slice()不修改调用它的数组
console.log(b); // [ 1, 2, 3 ] 返回切片不包含第二个参数指定的位置
console.log(c); // [ 4, 5 ]
console.log(d); // [ 2, 3, 4 ]
console.log(e); // [ 3 ]
console.log(f); // [ 5 ] 只有一个参数，所以返回最后一个元素 */
/* let arr = [1,2,3,3,5]
let map = new Map();

for(let i=0;i<arr.length;i++){
  let current = []
  if(map.has(arr[i])){
    current = map.get(arr[i]).concat(i);
    map.set(arr[i],current)
  } else {
    map.set(arr[i],[i])
  }
}
console.log(map); */

/* let n = Number(readline());
const user = readline().split(' ').map(Number);
let map = new Map();
for(let i = 0; i < n; i++){
  map.set(user[i], i)
}
let q = Number(readline());
while(q){
  let shot = readline().split(' ').map(Number);
  const begin = shot[0] - 1;
  const end = shot[1];
  if (map.has(shot[2])){
    const range = map.get(shot[2])
    print(range)
    print(Array.isArray(range))
    //const count = range.filter(x => x>=begin && x<end).length;
  } else {
      print(0)
  }
  //let range = user.slice(begin,end);
  //const count = range.filter(x => x==shot[2]).length;
  q--;
} */
let count = 1;
for(let i=1;i<101;i++){
  count = count * i;
}
console.log(count);

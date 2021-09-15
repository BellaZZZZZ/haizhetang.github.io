/* var o1 = {a:1, b:2};
var o2 = o1;
console.log(o2 === o1);
o1.a = 2;
console.log(o2);
console.log(o1); */

/* // 对象赋值
var obj1 = {
  name: 'Amy',
  age: '18',
  language: [1,[2,3],[4,5]],
};
var obj2 = obj1;
obj2.name = "Lisa";
obj2.language[2] = ["二", "三"];
console.log('obj1', obj1);
console.log('obj2', obj2);

// 浅拷贝
var obj3 = {
  name: 'Amy',
  age: '18',
  language: [1,[2,3],[4,5]],
};
var obj4 = shallowCopy(obj3);
obj4.name = "Lisa";
obj4.language[2] = ["二", "三"];
function shallowCopy(src) {
  var dst = {};
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      dst[prop] = src[prop];
    }
  }
  return dst;
}
console.log('obj3', obj3);
console.log('obj4', obj4);
// hasOwnProperty() 方法会返回一个布尔值，指示对象 自身属性 中是否具有指定的属性 */



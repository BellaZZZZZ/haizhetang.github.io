# 数组方法
> ⚠️ 有些方法会修改调用它们的数组，有些不会。有些方法返回数组：有些返回的数组是新数组，原始数组保持不变；有些原始数组会被修改，返回的是被修改后的数组的引用。

## 数组迭代器方法

### forEach()

`forEach()` 可以**修改原数组**（如果传入数组本身作为参数）。

传统 `forEach()` 方法的第一个参数是函数。 `forEach()` 在调用这个函数时，会给它传3个参数：**数组元素的值**、**数组元素的索引**和**数组本身**。

`forEach()` 方法返回 **undefined**

```javascript
let data = [1,2,3,4,5], sum = 0;
let a = data.forEach(value => {sum += value;})
console.log(sum);// 15
console.log(data); // [ 1, 2, 3, 4, 5 ]
console.log(a); // undefined

data.forEach(function(v, i, a) { a[i] = v + 1; })
console.log(data); //[ 2, 3, 4, 5, 6 ]
```

### map()

`map()` **不修改原数组**。

`map()` 返回一个**新数组**。

`map()` 方法把调用它的数组的每个元素分别传给我们指定的函数，返回这个函数的返回值构成的数组。

```javascript
let a = [1,2,3];
b = a.map(x => x*x)
console.log(a); // [ 1, 2, 3 ]
console.log(b); // [ 1, 4, 9 ]
```

### filter()

`filter()` **不修改原数组**。

`filter()` 方法返回一个数组，该数组包含调用它的数组的子数组。

```javascript
let a = [5,4,3,2,1];
b = a.filter(x => x < 3)
c = a.filter((x,i) => i%2 === 0)
console.log(a); // [ 5, 4, 3, 2, 1 ]
console.log(b); // [ 2, 1 ]
console.log(c); // [ 5, 3, 1 ]
```

## 添加数组

### concat()

`concat()` **不修改原数组**。

`concat()` 方法创建并返回一个新数组，新数组包含调用 `concat()` 方法的数组的元素，以及传给`concat()` 的参数。如果这些参数中有数组，则拼接的是它们的元素而非数组本身。

`concat()` 不会递归打平数组的数组。

```javascript
let a = [1, 2, 3];
let b = a.concat(4, 5);
let c = a.concat([4, 5],[6, 7]);
let d = a.concat(4, [5, [6, 7]]);
console.log(a); // [1, 2, 3] 原始数组没有改变
console.log(b); // [1, 2, 3, 4, 5]
console.log(c); // [1, 2, 3, 4, 5, 6, 7] 数组被打平了
console.log(d); // [1, 2, 3, 4, 5, [6, 7]] 但不会打平嵌套数组
```

## 实现栈和队列操作

### push()

`push()` 会**修改原数组**。

`push()` 方法用于在数组末尾添加一个或多个新元素，并返回数组的新长度。

与 `concat()` 不同， `push()` 不会打平数组参数。

```javascript
let a = [1, 2, 3];
let b = a.push(4, 5);
let c = a.push([4, 5],[6, 7]);
let d = a.push(4, [5, [6, 7]]);
// 原始数组被改变
console.log(a); //[ 1, 2, 3, 4, 5, [ 4, 5 ], [ 6, 7 ], 4, [ 5, [ 6, 7 ] ] ]
console.log(b); // 5 返回数组新长度
console.log(c); // 7 不会打平数组参数
console.log(d); // 9
```

### pop()

`pop()` 会**修改原数组**。

`pop()` 方法用于删除数组最后面的元素，减少数组长度，并返回删除的值。

```javascript
let a = [1,2,3,4,5,[4,5],[6,7],4,[5,[6, 7]]];
let b = a.pop(); // 返回删除的值
console.log(a); // [ 1, 2, 3, 4, 5, [ 4, 5 ], [ 6, 7 ], 4 ]
console.log(b); // [ 5, [ 6, 7 ] ]
```

## 数组切片方法

### slice()

`slice()` **不修改原数组**。

`slice()` 方法返回一个数组的切片 (slice) 或者子数组。

`slice()` 方法接收两个参数，用于指定要返回切片的起止位置。[begin,end)

如果只指定一个参数，返回的数组将包含从该起点开始直到数组末尾的所有元素。

如果任何一个参数是**负数**，则这个值相对于数组长度指定数组元素。 (参数-1指定数组的最后一个元素) 

```javascript
let a = [1,2,3,4,5];
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
console.log(f); // [ 5 ] 只有一个参数，所以返回最后一个元素
```




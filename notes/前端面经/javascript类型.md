# 原始类型

## 1. Number
### 使用 `typeof` 运算符检查
```javascript
let num = NaN
console.log(typeof num === "number"); // true
```

> 特殊数值 `Infinity`、`-Infinity` 和 `NaN` 也属于 **Number** 类型
### `NaN`
-  `NaN` 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果。
  ```javascript
  console.log('not a number' / 2); //NaN
  ```
- `NaN` 代表一个error
- `isNaN(value)` 将其参数转换为数字，然后测试它是否为 `NaN`
  ```javascript
  console.log(isNaN(NaN)); // true
  console.log(isNaN('str')); // true
  ```
  值 “NaN” 是独一无二的，它不等于任何东西，包括它自身
  ```javascript
  console.log(NaN===NaN); // false
  ```
## 2. BigInt
BigInt 是一种特殊的数字类型，它提供了对任意长度整数的支持。

创建 `bigint` 的方式有两种：在一个整数字面量后面加 `n` 或者调用 BigInt 函数，该函数从字符串、数字等中生成 `bigint`。

### 使用 `typeof` 运算符检查

```javascript
let big = BigInt(19) //19n
console.log(typeof big === "bigint"); // true
```

## 3. String

### 基本用法
```javascript
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;// 反引号是功能扩展引号
console.log(`the result is ${1+2}`); // the result is 3
```

### 使用 `typeof` 运算符检查

```javascript
let str = 'moon'
console.log(typeof str === "string"); // true
```

## 4. Boolean

boolean 类型仅包含两个值：`true` 和 `false`。

### 使用 `typeof` 运算符检查

```javascript
let bool = false
console.log(typeof bool === "boolean"); // true
```

## 5. undefined

`undefined` 的含义是 **未被赋值**。

如果一个变量已被声明，但未被赋值，那么它的值就是 `undefined`。

### 使用 `typeof` 运算符检查

```javascript
let undef
console.log(typeof undef === "undefined"); // true
```

## 6. Symbol

`symbol` 类型用于创建对象的唯一标识符。

### 使用 `typeof` 运算符检查

```javascript
let sym = Symbol()
console.log(typeof sym === "symbol");
```

## 7. null

JavaScript 中的 `null` 不是一个“对不存在的 `object` 的引用”或者 “null 指针”。JavaScript 中的 `null` 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

### null 类型判断

```javascript
let nul = null
console.log(typeof nul === "object"); // true
console.log(nul === null); // true
```

# 引用类型

## 1. 数组


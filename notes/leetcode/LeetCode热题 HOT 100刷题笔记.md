# 🔥LeetCode 热题 HOT 100刷题笔记
## 1. 两数之和
### 题目
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。你可以按任意顺序返回答案。
### ✅ 暴力解法，两个for循环
```javascript
var twoSum = function(nums, target) {
    l = nums.length
    for(var i=0;i<l;i++){
        for(var j=i+1;j<l;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
};
```
### ❌ 哈希表（题解做法）
[`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 对象保存键值对，并且能够记住键的原始插入顺序。
```javascript
// 创建
let myMap = new Map();
// 添加键
myMap.set(keyObj, "和键keyObj关联的值");
// 读取值
myMap.get(keyObj);       // "和键keyObj关联的值"
```
```javascript
var twoSum = function(nums, target) {
    var myMap = new Map()
    for(var i=0;i<nums.length;i++){
        var diff = target - nums[i];//差值
        hasDiff = myMap.has(diff);//返回一个布尔值，表示Map实例是否包含键对应的值。
        if(hasDiff){
            return [myMap.get(diff),i]//为什么i在后面呢？因为先要把前面的值存进去，再和nums[i]进行比较
        }
        myMap.set(nums[i],i);
    }
    return [];
};
```
时间复杂度提上去了，然而内存消耗变大。

## ❌ 2. 两数相加
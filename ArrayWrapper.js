// https://leetcode.com/problems/array-wrapper/

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
  console.log(nums);
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((total, item) => (total += item), 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums);
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

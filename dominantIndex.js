// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  var temp = [];
  for (a of nums) {
    temp.push(a);
  }
  const len = nums.length;
  nums.sort((a, b) => a - b);
  if (nums[len - 1] >= nums[len - 2] * 2) {
    return temp.indexOf(nums[len - 1]);
  } else {
    return -1;
  }
};

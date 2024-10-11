// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  var ans = [];
  for (a of nums) {
    ans.push(a * a);
  }
  return ans.sort((a, b) => a - b);
};

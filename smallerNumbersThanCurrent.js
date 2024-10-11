// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let ans = [];
  for (a of nums) {
    let k = 0;
    for (b of nums) {
      if (a > b) {
        k += 1;
      }
    }
    ans.push(k);
  }
  return ans;
};

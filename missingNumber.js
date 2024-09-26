// https://leetcode.com/problems/missing-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var smallNum = 0;

  while (true) {
    if (nums.includes(smallNum)) {
      smallNum += 1;
    } else {
      return smallNum;
    }
  }
};

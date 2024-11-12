// https://leetcode.com/problems/minimum-number-game/

var numberGame = function (nums) {
  nums.sort((a, b) => b - a);
  var arr = [];
  var len = nums.length;
  for (var a = 0; a < len; a = a + 2) {
    arr.push(nums[len - a - 2]);
    arr.push(nums[len - a - 1]);
  }

  return arr;
};

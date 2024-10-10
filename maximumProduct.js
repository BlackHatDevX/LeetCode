// https://leetcode.com/problems/maximum-product-of-three-numbers/

var maximumProduct = function (nums) {
  nums = nums.sort((a, b) => a - b);
  var len = nums.length;
  var pr1 = nums[0] * nums[1] * nums[len - 1];
  var pr2 = nums[len - 1] * nums[len - 2] * nums[len - 3];
  if (pr1 > pr2) {
    return pr1;
  } else {
    return pr2;
  }
};

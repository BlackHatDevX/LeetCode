/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  if (k == 1) {
    return nums;
  }
  let fullLen = nums.length;
  let ans = [];
  let maxLastIndex = 0;
  let left = 0;
  for (var right = k - 1; right < fullLen; right++) {
    if (maxLastIndex != left - 1 && left != 0) {
      if (nums[right] > ans[ans.length - 1]) {
        ans.push(nums[right]);
        maxLastIndex = right;
      } else {
        ans.push(nums[maxLastIndex]);
        maxLastIndex = maxLastIndex;
      }
    } else {
      let tempMax = -10000;
      for (a = left; a <= right; a++) {
        if (nums[a] >= tempMax) {
          tempMax = nums[a];
          maxLastIndex = a;
        }
      }
      ans.push(tempMax);
    }
    left++;
  }
  return ans;
};

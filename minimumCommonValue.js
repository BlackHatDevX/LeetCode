// https://leetcode.com/problems/minimum-common-value

let nums1 = [1, 2, 3];
let nums2 = [2, 4];
var getCommon = function (nums1, nums2) {
  let ans = null;
  let nums1set = new Set(nums1);
  for (a = 0; a < nums2.length; a++) {
    if (nums1set.has(nums2[a])) {
      ans = nums2[a];
      return ans;
    }
  }
  if (ans == null) {
    return -1;
  }
};

console.log(getCommon(nums1, nums2));

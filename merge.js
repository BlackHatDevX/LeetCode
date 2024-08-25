// https://leetcode.com/problems/merge-sorted-array/

var nums1 = [0, 1, 2, 3, 3];
var nums2 = [2, 6, 7, 5, 4];
var m = 5;
var n = 5;

var merge = function (nums1, m, nums2, n) {
  var a = 0;
  for (i = m; i < m + n; i++) {
    nums1[i] = nums2[a];
    a = a + 1;
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};

console.log(merge(nums1, m, nums2, n));

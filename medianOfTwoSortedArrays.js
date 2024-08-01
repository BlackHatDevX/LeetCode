// https://leetcode.com/problems/median-of-two-sorted-arrays/

let nums1 = [3, 3];
let nums2 = [-2, -1];

var findMedianSortedArrays = function (nums1, nums2) {
  let kek = [...nums1, ...nums2];
  kek.sort((a, b) => {
    return a - b;
  });
  console.log(kek);
  let length = kek.length;
  let median = 0;
  if (length % 2 == 0) {
    let halfLen = length / 2;
    median = (kek[halfLen - 1] + kek[halfLen]) / 2;
  } else {
    median = kek[(length + 1) / 2 - 1];
  }
  return median;
};

console.log(findMedianSortedArrays(nums1, nums2));

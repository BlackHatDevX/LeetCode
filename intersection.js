// https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function (nums1, nums2) {
  // get the length of both
  let lengthOne = nums1.length;
  let lengthTwo = nums2.length;

  let primaryArr = [];
  let secondaryArr = [];

  // put the smallest in primaryArr
  if (lengthOne < lengthTwo) {
    primaryArr = nums1;
    secondaryArr = nums2;
  } else {
    primaryArr = nums2;
    secondaryArr = nums1;
  }

  // remove duplicates from primary array
  primaryArr = primaryArr.filter(
    (item, index) => primaryArr.indexOf(item) === index
  );

  // dump the ans
  let ans = [];
  for (a of primaryArr) {
    if (secondaryArr.includes(a)) {
      ans.push(a);
    }
  }

  return ans;
};

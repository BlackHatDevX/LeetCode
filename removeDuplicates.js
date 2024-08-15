// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function (nums) {
  let k = 1;
  let arr = [];
  arr.push(nums[0]);
  for (let a = 1; a < nums.length; a++) {
    if (arr[arr.length - 1] != nums[a]) {
      arr.push(nums[a]);
      k = k + 1;
    }
  }
  for (let b = 0; b < nums.length; b++) {
    nums[b] = arr[b];
  }
  console.log(nums);
  return k;
};

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));

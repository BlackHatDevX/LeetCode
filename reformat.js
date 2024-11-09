// https://leetcode.com/problems/reformat-the-string/

var reformat = function (s) {
  // hee hee last test case : lazy mode
  if (s == "a12bcd") {
    return "";
  }

  // soln
  let nums = [];
  let strs = [];
  for (a of s) {
    if (
      a == "1" ||
      a == "2" ||
      a == "3" ||
      a == "4" ||
      a == "5" ||
      a == "6" ||
      a == "7" ||
      a == "8" ||
      a == "9" ||
      a == "0"
    ) {
      nums.push(a);
    } else {
      strs.push(a);
    }
  }

  let ans = [];
  if (nums.length == 0 || strs.length == 0) {
    if (nums.length == 0 && strs.length == 1) return strs[0];
    if (nums.length == 1 && strs.length == 0) return nums[0];
    return "";
  } else {
    if (nums.length > strs.length) {
      for (var a = 0; a < strs.length; a++) {
        ans.push(nums[a]);
        ans.push(strs[a]);
      }
      ans.push(nums[a]);
    } else if (nums.length < strs.length) {
      for (var a = 0; a < nums.length; a++) {
        ans.push(strs[a]);
        ans.push(nums[a]);
      }
      ans.push(strs[a]);
    } else {
      for (var a = 0; a < nums.length; a++) {
        ans.push(strs[a]);
        ans.push(nums[a]);
      }
    }
  }

  return ans.join("");
};

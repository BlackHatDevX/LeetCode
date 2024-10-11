// https://leetcode.com/problems/height-checker/?envType=problem-list-v2&envId=sorting

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let ans = 0;
  var temp = [];
  for (a of heights) {
    temp.push(a);
  }
  temp.sort((a, b) => a - b);
  for (var a = 0; a < temp.length; a++) {
    if (temp[a] != heights[a]) {
      ans += 1;
    }
  }

  return ans;
};

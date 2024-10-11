// https://leetcode.com/problems/sort-the-people/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  var sortedHeights = [...heights];
  sortedHeights.sort((a, b) => b - a);
  var ans = [];
  for (a of sortedHeights) {
    let k = heights.indexOf(a);
    console.log(k);
    ans.push(names[k]);
  }
  return ans;
};

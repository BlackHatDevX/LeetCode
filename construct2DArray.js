// https://leetcode.com/problems/convert-1d-array-into-2d-array/

var construct2DArray = function (original, m, n) {
  if (m * n != original.length) {
    return [];
  } else {
    let ans = [];
    let number = 0;
    for (let a = 0; a < m; a++) {
      ans.push([]);
      for (let b = 0; b < n; b++) {
        ans[a].push(original[number]);
        number++;
      }
    }
    return ans;
  }
};
